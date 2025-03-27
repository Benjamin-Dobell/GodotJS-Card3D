import CardLayout from './card-layout';
import { Variant, Vector3 } from 'godot';
import { ExportVar } from 'godot.annotations';

export default class PileCardLayout extends CardLayout {
  @ExportVar(Variant.Type.TypeFloat)
  pileYOffset: number = 0;

  override calculatecardPositionByIndex(numCards: number, index: number): Vector3 {
    return new Vector3(0, (numCards - index) * -this.pileYOffset, 0.01 * index)
  }
}
