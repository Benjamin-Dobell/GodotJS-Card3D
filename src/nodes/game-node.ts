import { Node, Node3D, PropertyUsageFlags, Variant } from 'godot';
import { ExportVar } from 'godot.annotations';

export default class GameNode<Map extends Record<string, Node> = {}> extends Node3D<Map> {
  @ExportVar(Variant.Type.TypeBool, { usage: PropertyUsageFlags.PropertyUsageNone })
  private _firstLoad = true;

  private _readyCount = 0;

  get isFirstLoad() {
    return this._firstLoad && this._readyCount <= 1;
  }

  override _ready() {
    this._firstLoad = false;
    ++this._readyCount;
  }
}
