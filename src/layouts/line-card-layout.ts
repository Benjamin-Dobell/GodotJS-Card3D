import CardLayout from './card-layout';
import { Variant, Vector3 } from 'godot';
import { ExportVar } from 'godot.annotations';

export default class LineCardLayout extends CardLayout {
  @ExportVar(Variant.Type.TypeVector3)
  start: Vector3 = new Vector3(-7, 0, 0);

  @ExportVar(Variant.Type.TypeVector3)
  end: Vector3 = new Vector3(7, 0, 0.1);

  @ExportVar(Variant.Type.TypeFloat)
  cardWidth: number = 2.5;

  @ExportVar(Variant.Type.TypeFloat)
  padding: number = 0.5;

  private _maxWidth: number = 20;

  @ExportVar(Variant.Type.TypeFloat)
  get maxWidth() {
    return this._maxWidth;
  }

  set maxWidth(width: number) {
    this._maxWidth = width;
    const halfWidth = width * 0.5;
    this.start = new Vector3(-halfWidth, 0, 0);
    this.end = new Vector3(halfWidth, 0, 0.1);
  }

  private _getHandStartX(handWidth: number, cardSize: number): number {
    return 0.5 * (cardSize - handWidth);
  }

  private _getCardOffset(numCards: number, cardSize: number): number {
    const totalCardSpace = cardSize * numCards;
    const totalPaddingSpace = (numCards - 1) * this.padding;

    if (totalCardSpace + totalPaddingSpace <= this.maxWidth) {
      // Cards fit within the available space without overlapping
      return cardSize + this.padding;
    } else {
      // Cards need to overlap
      return (this.maxWidth - cardSize) / (numCards - 1);
    }
  }

  override calculateCardPositionByIndex(numCards: number, index: number): Vector3 {
    const cardOffset = this._getCardOffset(numCards, this.cardWidth);
    const handWidth = this.cardWidth + ((numCards - 1) * cardOffset);
    const startPos = this._getHandStartX(handWidth, this.cardWidth);

    return new Vector3(startPos + (index * cardOffset), 0, 0.001 * index);
  }
}
