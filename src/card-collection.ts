import {
  Callable,
  GArray,
  GDictionary,
  ResolveNodePath,
  ResourceLoader,
  SceneNodes,
  Script,
  Shape3D,
  Signal,
  Variant,
  Vector2,
  Vector3,
} from 'godot';
import { ExportObject, ExportSignal, ExportVar } from 'godot.annotations';
import CardLayout from './layouts/card-layout';
import CardNode from './card-node';
import LineCardLayout from './layouts/line-card-layout';
import GameNode from './nodes/game-node';
import {
  CodeGenHandler,
  CodeGenType,
  DescriptorType,
  UserTypeDescriptor,
  TypeDescriptor,
} from 'jsb.editor.codegen';

type ResolveNode<Path extends string> = ResolveNodePath<SceneNodes['scenes/card_collection_3d.tscn'], Path>;

export const codegen: CodeGenHandler = rawRequest => {
  const request = rawRequest.proxy();

  switch (request.type) {
    case CodeGenType.ScriptNodeTypeDescriptor: {
      const cardNodeScript = request.node.get('cardNodeScript');
      return GDictionary.create<UserTypeDescriptor>({
        type: DescriptorType.User,
        name: 'CardCollection',
        resource: 'res://src/card-collection.ts',
        arguments: GArray.create<TypeDescriptor>([
          GDictionary.create<UserTypeDescriptor>({
            type: DescriptorType.User,
            name: cardNodeScript?.getGlobalName() ?? 'CardNode',
            resource: cardNodeScript?.resourcePath ?? 'res://src/card-node.ts',
          }),
        ]),
      });
    }
  }

  return undefined;
};

export default class CardCollection<Card extends CardNode = CardNode> extends GameNode<SceneNodes['scenes/card_collection_3d.tscn']> {
  @ExportSignal()
  mouseEnterDropZone!: Signal<() => void>;

  @ExportSignal()
  mouseExitDropZone!: Signal<() => void>;

  @ExportSignal()
  cardSelected!: Signal<(selected: Card) => void>;

  @ExportSignal()
  cardClicked!: Signal<(clicked: Card) => void>;

  @ExportSignal()
  cardAdded!: Signal<(added: Card) => void>;

  // Sub nodes
  dropZone?: ResolveNode<'DropZone'>;
  dropZoneCollisionShape?: ResolveNode<'DropZone/CollisionShape3D'>;

  @ExportVar(Variant.Type.TypeBool)
  highlightOnHover = true;

  @ExportVar(Variant.Type.TypeFloat)
  cardPositionTweenDuration = 0.25;

  @ExportVar(Variant.Type.TypeFloat)
  cardSwapTweenDuration = 0.25;

  @ExportObject(Script)
  cardNodeScript: Script = ResourceLoader.load('res://src/card-node.ts') as Script; // TODO: Won't need cast when we add resource codegen.

  private _cardLayoutStrategy: CardLayout = new LineCardLayout();

  private _onCardHover(card: Card) {
    if (!this.hoverDisabled && this.canSelectCard(card)) {
      this._hoveredCard = card;

      if (this.highlightOnHover) {
        card.setHovered(true);
      }
    }
  }

  private _onCardExit(card: Card) {
    if (!this.hoverDisabled && this._hoveredCard === card) {
      card.setHovered(false);
      this._hoveredCard = null;
    }
  }

  private _onCardPressed(card: Card) {
    if (this.canSelectCard(card)) {
      this.cardSelected.emit(card);
    }
  }

  private _onCardClicked(card: Card) {
    this.cardClicked.emit(card);
  }

  private _onDropZoneMouseEntered(): void {
    this.mouseEnterDropZone.emit();
  }

  private _onDropZoneMouseExited(): void {
    this._previewDropIndex = -1;
    this.mouseExitDropZone.emit();
  }

  @ExportObject(CardLayout)
  get cardLayoutStrategy(): CardLayout {
    return this._cardLayoutStrategy;
  }

  set cardLayoutStrategy(layout: CardLayout) {
    this._cardLayoutStrategy = layout;
    this.applyCardLayout();
  }

  get dropZoneShape(): Shape3D {
    if (!this.dropZoneCollisionShape) {
      throw new Error('CardCollection3D is not ready');
    }

    // The editor will call use when dropZoneCollisionShape is unavailable. defaultCollisionShape() matches the
    return this.dropZoneCollisionShape.shape;
  }

  set dropZoneShape(shape: null | Shape3D) {
    if (!shape || !this.dropZoneCollisionShape) {
      return;
    }
    this.dropZoneCollisionShape.shape = shape;
  }

  @ExportVar(Variant.Type.TypeFloat)
  get dropZoneZOffset() {
    return this.dropZone?.position.z ?? 0;
  }

  set dropZoneZOffset(offset: number) {
    if (!this.dropZone) {
      return;
    }

    const position = this.dropZone.position;
    this.dropZone.position = new Vector3(position.x, offset, position.z);
  }

  cards: Card[] = [];
  cardIndices: Map<Card, number> = new Map();

  hoverDisabled = false;

  private _hoveredCard: null | Card = null;
  private _previewDropIndex = -1;

  override _ready() {
    super._ready();

    this.dropZone = this.getNode('DropZone');
    this.dropZone.mouseEntered.connect(Callable.create(this, this._onDropZoneMouseEntered));
    this.dropZone.mouseExited.connect(Callable.create(this, this._onDropZoneMouseExited));

    this.dropZoneCollisionShape = this.getNode('DropZone/CollisionShape3D');
  }

  appendCard(card: Card): void {
    this.insertCard(card, this.cards.length);
  }

  prependCard(card: Card): void {
    this.insertCard(card, 0);
  }

  insertCard(card: Card, index: number): void {
    card.cardMouseDown.connect(Callable.create(this, this._onCardPressed).bind(card));
    card.cardMouseUp.connect(Callable.create(this, this._onCardClicked).bind(card));
    card.cardMouseOver.connect(Callable.create(this, this._onCardHover).bind(card));
    card.cardMouseExit.connect(Callable.create(this, this._onCardExit).bind(card));

    this.cards.splice(index, 0, card);
    this.addChild(card);

    for (let i = index, l = this.cards.length; i < l; i++) {
      this.cardIndices.set(this.cards[i]!, i);
    }

    this.applyCardLayout();
    this.cardAdded.emit(card);
  }

  // Remove card from this hand and return it
  removeCard(index: number): Card | null {
    const removedCard = this.cards.splice(index, 1)[0];

    if (!removedCard) {
      return null;
    }

    this.cardIndices.delete(removedCard);

    for (let i = index, l = this.cards.length; i < l; i++) {
      this.cardIndices.set(this.cards[i]!, i);
    }

    this.removeChild(removedCard);
    this.applyCardLayout();

    removedCard.cardMouseDown.disconnect(Callable.create(this, this._onCardPressed).bind(removedCard));
    removedCard.cardMouseUp.disconnect(Callable.create(this, this._onCardClicked).bind(removedCard));
    removedCard.cardMouseOver.disconnect(Callable.create(this, this._onCardHover).bind(removedCard));
    removedCard.cardMouseExit.disconnect(Callable.create(this, this._onCardExit).bind(removedCard));

    return removedCard;
  }

  popCard(): Card | null {
    return this.removeCard(this.cards.length - 1);
  }

  shiftCard(): Card | null {
    return this.removeCard(0);
  }

  removeAll(): Card[] {
    const removedCards = this.cards;
    this.cards = [];
    this.cardIndices.clear();

    for (const card of removedCards) {
      this.removeChild(card);
    }

    return removedCards;
  }

  applyCardLayout(): void {
    this.cardLayoutStrategy.updateCardPositions(this.cards, this.cardPositionTweenDuration);
  }

  previewCardRemove(draggingCard: Card): void {
    const cardIndex = this.cardIndices.get(draggingCard);

    if (cardIndex !== undefined) {
      this.cardLayoutStrategy.updateCardPositions([
        ...this.cards.slice(0, cardIndex),
        ...this.cards.slice(cardIndex + 1),
      ], this.cardSwapTweenDuration);
    }
  }

  previewCardDrop(draggingCard: Card, index: number): void {
    if (index === this._previewDropIndex) {
      return;
    }

    this._previewDropIndex = index;
    const currentIndex = this.cardIndices.get(draggingCard);
    const previewCards = currentIndex !== undefined
      ? [null, ...this.cards.slice(0, currentIndex), ...this.cards.slice(currentIndex + 1)]
      : [...this.cards.slice(0, index), null, ...this.cards.slice(index)];

    this.cardLayoutStrategy.updateCardPositions(previewCards, this.cardSwapTweenDuration);
  }

  enableDropZone(): void {
    this._previewDropIndex = -1;

    if (this.dropZoneCollisionShape) {
      this.dropZoneCollisionShape.disabled = false;
    }
  }

  disableDropZone(): void {
    this._previewDropIndex = -1;

    if (this.dropZoneCollisionShape) {
      this.dropZoneCollisionShape.disabled = true;
    }
  }

  onDragHover(draggingCard: Card, mousePosition: Vector2): void {
    const indexToDrop = Math.max(this.getCardIndexAtPoint(mousePosition), 0);
    this.previewCardDrop(draggingCard, indexToDrop);
  }

  getCardIndexAtPoint(mousePosition: Vector2): number {
    const camera = this.getWindow().getCamera3D();
    let index = this.cards.length;

    for (const card of this.cards) {
      const cardIndex = this.cardIndices.get(card) ?? -1;
      const cardPosition = this.cardLayoutStrategy.calculateCardPositionByIndex(this.cards.length, cardIndex);
      const cardScreenPosition = camera.unprojectPosition(cardPosition);

      if (mousePosition.x < cardScreenPosition.x) {
        index = this.cardIndices.get(card) ?? index;
        break;
      }
    }

    return index;
  }

  canSelectCard(_card: Card): boolean {
    return true;
  }

  canRemoveCard(_card: Card): boolean {
    return true;
  }

  canReorderCard(_card: Card): boolean {
    return true;
  }

  canInsertCard(_card: Card, _fromCollection: any): boolean {
    return true;
  }
}
