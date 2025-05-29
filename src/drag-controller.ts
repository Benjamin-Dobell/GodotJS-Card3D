import {
  Callable,
  Camera3D,
  GArray,
  GDictionary,
  InputEventMouseButton,
  InputEventMouseMotion,
  Node,
  Node3D,
  Plane,
  Signal,
  Variant,
  Vector2,
  Vector3,
} from 'godot';
import { ExportSignal, ExportVar } from 'godot.annotations';
import { CodeGenHandler, CodeGenType, DescriptorType, TypeDescriptor, UserTypeDescriptor } from 'jsb.editor.codegen';
import CardNode from './card-node';
import CardCollection from './card-collection';

const defaultCardNodeName = 'CardNode';
const defaultCardNodeType = GDictionary.create<UserTypeDescriptor>({
  type: DescriptorType.User,
  name: defaultCardNodeName,
  resource: 'res://src/card-node.ts',
});

export const codegen: CodeGenHandler = rawRequest => {
  const request = rawRequest.proxy();

  switch (request.type) {
    case CodeGenType.ScriptNodeTypeDescriptor: {
      let cardNodeName = defaultCardNodeName;
      let cardNodeType = defaultCardNodeType;

      for (const child of Object.values(request.children)) {
        if (child?.type !== DescriptorType.User || child.name !== 'CardCollection') {
          cardNodeType = defaultCardNodeType;
          break;
        }

        const firstArgument = child.arguments?.[0];

        if (firstArgument?.type !== DescriptorType.User
          || firstArgument.name === 'CardNode'
          || (firstArgument.name !== cardNodeName && cardNodeName !== defaultCardNodeName)) {
          cardNodeType = defaultCardNodeType;
          break;
        }

        cardNodeName = firstArgument.name;
        cardNodeType = GDictionary.create<UserTypeDescriptor>(firstArgument);
      }

      return GDictionary.create<UserTypeDescriptor>({
        type: DescriptorType.User,
        name: 'DragController',
        resource: 'res://src/drag-controller.ts',
        arguments: GArray.create<TypeDescriptor>([
          cardNodeType,
          GDictionary.create<TypeDescriptor>({
            type: DescriptorType.ObjectLiteral,
            properties: request.children,
          }),
        ]),
      });
    }
  }

  return undefined;
};

export default class DragController<Card extends CardNode, Map extends Record<string, Node> = {}> extends Node3D<Map> {
  @ExportSignal()
  dragStarted!: Signal<(card: Card) => void>;

  @ExportSignal()
  cardMoved!: Signal<(card: Card, fromCollection: CardCollection<Card>, toCollection: CardCollection<Card>, fromIndex: number, toIndex: number) => void>;

  @ExportVar(Variant.Type.TypeFloat)
  maxDragYRotationDeg = 65;

  @ExportVar(Variant.Type.TypeFloat)
  maxDragXRotationDeg = 65;

  @ExportVar(Variant.Type.TypePlane)
  cardDragPlane = new Plane(new Vector3(0, 0, 1), 1.5);

  private _camera!: Camera3D;
  private _draggingCard: null | Card = null;
  private _dragFromCollection: null | CardCollection<Card> = null;
  private _dragging: boolean = false;
  private _hoveredCollection!: CardCollection<Card> | null;
  private _cardCollections: Array<CardCollection<Card>> = [];

  override _ready(): void {
    const window = this.getWindow()!;
    this._camera = window.getCamera3D()!;

    for (const child of this.getChildren().proxy()) {
      if (child instanceof CardCollection) {
        this._cardCollections.push(child);

        child.cardSelected.connect(Callable.create(this, this._onCollectionCardSelected).bind(child));
        child.mouseEnterDropZone.connect(Callable.create(this, this._onCollectionMouseEnterDropZone).bind(child));
        child.mouseExitDropZone.connect(Callable.create(this, this._onCollectionMouseExitDropZone).bind(child));
      }
    }
  }

  override _input(event: InputEventMouseButton | InputEventMouseMotion): void {
    if (event instanceof InputEventMouseButton) {
      if (this._dragging && event.buttonIndex === 1 && !event.pressed) {
        const mousePosition = this.getViewport()!.getMousePosition();
        this._stopDrag(mousePosition);
      }
    } else if (event instanceof InputEventMouseMotion) {
      if (this._dragging) {
        this._handleDragEvent(event);
      }
    }
  }

  private _onCollectionCardSelected(this: this, card: Card, collection: CardCollection<Card>): void {
    this._dragCardStart(card, collection);
  }

  private _onCollectionMouseEnterDropZone(this: this, collection: CardCollection<Card>): void {
    this._hoveredCollection = collection;
  }

  private _onCollectionMouseExitDropZone(this: this, collection: CardCollection<Card>): void {
    if (this._hoveredCollection !== this._dragFromCollection) {
      collection.applyCardLayout();
    } else if (this._draggingCard) {
      collection.previewCardRemove(this._draggingCard);
    }

    this._hoveredCollection = null;
  }

  private _returnCardToCollection(mousePosition: Vector2): void {
    if (this._draggingCard && this._dragFromCollection?.canReorderCard(this._draggingCard)) {
      const currentIndex = this._dragFromCollection.cardIndices.get(this._draggingCard);

      if (currentIndex === undefined) {
        return;
      }

      const newIndex = Math.min(Math.max(this._dragFromCollection.getCardIndexAtPoint(mousePosition), 0), this._dragFromCollection.cards.length - 1);

      if (currentIndex !== newIndex) {
        this._dragFromCollection.removeCard(currentIndex);
        this._dragFromCollection.insertCard(this._draggingCard, newIndex);
        this.cardMoved.emit(this._draggingCard, this._dragFromCollection, this._dragFromCollection, currentIndex, newIndex);
      }

      this._dragFromCollection.applyCardLayout();
    }
  }

  private _dropCardToAnotherCollection(mousePosition: Vector2): void {
    if (!this._hoveredCollection
      || !this._draggingCard
      || !this._dragFromCollection
      || !this._hoveredCollection.canInsertCard(this._draggingCard, this._dragFromCollection)
    ) {
      return;
    }

    const cardIndex = this._dragFromCollection.cardIndices.get(this._draggingCard);

    if (cardIndex === undefined) {
      return;
    }

    const card = this._dragFromCollection.cards[cardIndex]!;
    const cardGlobalPosition = card.globalPosition;

    this._dragFromCollection.removeCard(cardIndex)!;

    if (this._hoveredCollection.canReorderCard(card)) {
      const index = this._hoveredCollection.getCardIndexAtPoint(mousePosition);
      this._hoveredCollection.insertCard(card, index);
      this.cardMoved.emit(this._draggingCard, this._dragFromCollection, this._hoveredCollection, cardIndex, index);
    } else {
      this._hoveredCollection.appendCard(card);
      this.cardMoved.emit(this._draggingCard, this._dragFromCollection, this._hoveredCollection, cardIndex, this._hoveredCollection.cards.length - 1);
    }

    card.setHovered(false);
    card.globalPosition = cardGlobalPosition;
  }

  private _dragCardStart(card: Card, dragFromCollection: CardCollection<Card>): void {
    this._dragging = true;
    this._dragFromCollection = dragFromCollection;
    this._draggingCard = card;

    card.setCollisionEnabled(false);
    card.setHovered(false);

    dragFromCollection.enableDropZone();

    this._cardCollections.forEach((collection) => {
      if (collection.canInsertCard(card, dragFromCollection)) {
        collection.enableDropZone();
      }
      collection.hoverDisabled = true;
    });

    this.dragStarted.emit(card);
  }

  private _stopDrag(mousePosition: Vector2): void {
    if (!this._draggingCard) {
      return;
    }

    let canInsert = true;

    if (this._hoveredCollection) {
      canInsert = !!this._dragFromCollection
        && this._hoveredCollection.canInsertCard(this._draggingCard, this._dragFromCollection)
        && this._dragFromCollection.canRemoveCard(this._draggingCard);
    }

    if (!canInsert) {
      this._returnCardToCollection(mousePosition);
    } else if (!this._hoveredCollection || this._hoveredCollection === this._dragFromCollection) {
      this._returnCardToCollection(mousePosition);
    } else if (this._hoveredCollection !== this._dragFromCollection) {
      this._dropCardToAnotherCollection(mousePosition);
    }

    this._dragFromCollection?.disableDropZone();
    this._draggingCard.setCollisionEnabled(true);

    this._dragging = false;
    this._draggingCard = null;
    this._dragFromCollection = null;

    this._cardCollections.forEach((collection) => {
      collection.disableDropZone();
      collection.hoverDisabled = false;
    });
  }

  private _handleDragEvent(_event: InputEventMouseMotion): void {
    if (!this._draggingCard) {
      return;
    }

    const mousePosition = this.getViewport()!.getMousePosition();
    const position3D = this.cardDragPlane.intersectsRay(this._camera.projectRayOrigin(mousePosition), this._camera.projectRayNormal(mousePosition));
    const cardPosition = this._draggingCard.globalPosition;

    const xDistance = position3D.x - cardPosition.x;
    const yDistance = position3D.y - cardPosition.y;

    // Add rotation to make dragging cards visually appealing
    let yDegrees = xDistance * 25;
    yDegrees = Math.min(Math.max(yDegrees, -this.maxDragYRotationDeg), this.maxDragYRotationDeg);

    let xDegrees = -yDistance * 25;
    xDegrees = Math.min(Math.max(xDegrees, -this.maxDragXRotationDeg), this.maxDragXRotationDeg);

    const targetRotation = new Vector3(
      this._degToRad(xDegrees),
      this._degToRad(yDegrees),
      0,
    );

    this._draggingCard.animateRotation(targetRotation);

    // Set card position to follow the mouse
    this._draggingCard.globalPosition = position3D;

    if (this._hoveredCollection && position3D && this._hoveredCollection.canReorderCard(this._draggingCard)) {
      const dragScreenPoint = this._getDragScreenPoint(position3D);

      if (dragScreenPoint) {
        this._hoveredCollection.onDragHover(this._draggingCard, dragScreenPoint);
      }
    }
  }

  private _getDragScreenPoint(worldPosition: Vector3): Vector2 | null {
    if (worldPosition) {
      return this._camera.unprojectPosition(worldPosition);
    }
    return null;
  }

  private _degToRad(deg: number): number {
    return (deg * Math.PI) / 180;
  }
}
