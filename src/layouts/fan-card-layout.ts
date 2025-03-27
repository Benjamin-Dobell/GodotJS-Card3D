import CardLayout from './card-layout';
import { Quaternion, Variant, Vector3 } from 'godot';
import { degreesToRadians } from '../utils/math';
import { ExportVar } from 'godot.annotations';

export default class FanCardLayout extends CardLayout {
  @ExportVar(Variant.Type.TypeFloat)
  arcRadius: number = 7.0;

  private _arcAngleDeg: number = 90.0;

  @ExportVar(Variant.Type.TypeFloat)
  get arcAngelDeg() {
    return this._arcAngleDeg;
  }

  set arcAngleDeg(angle: number) {
    this._arcAngleDeg = angle;
    this._startAngle = Math.PI / 2 + 0.5 * degreesToRadians(this.arcAngleDeg);
  }

  private _startAngle: number = Math.PI / 2 + 0.5 * degreesToRadians(this._arcAngleDeg);

  override calculatecardPositionByIndex(numCards: number, index: number): Vector3 {
    const angleStep = degreesToRadians(this._arcAngleDeg) / (numCards + 1);
    const angle = this._startAngle - ((index + 1) * angleStep);
    const x = this.arcRadius * Math.cos(angle);
    const y = this.arcRadius * Math.sin(angle) - this.arcRadius;
    return new Vector3(x, y, 0.001 * (index + 1));
  }

  override calculateCardRotationByIndex(numCards: number, index: number): Vector3 {
    const angleStep = degreesToRadians(this._arcAngleDeg) / (numCards + 1);
    const angle = this._startAngle - ((index + 1) * angleStep);
    const rotationQuat = new Quaternion(new Vector3(0, 0, 1), angle - Math.PI / 2);
    return rotationQuat.getEuler();
  }
}
