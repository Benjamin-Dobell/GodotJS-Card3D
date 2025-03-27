import {
  Vector3,
  Tween,
  Variant,
  StaticBody3D,
  InputEventMouseButton,
  Callable,
  SceneNodes,
  NodePath,
  Signal,
} from 'godot';
import { ExportSignal, ExportVar } from 'godot.annotations';
import { SignalHandler } from './utils/nodes';
import GameNode from './nodes/game-node';

export default class CardNode extends GameNode<SceneNodes['scenes/card_3d.tscn']> {
  @ExportSignal()
  cardMouseOver!: Signal<() => void>;

  @ExportSignal()
  cardMouseExit!: Signal<() => void>;

  @ExportSignal()
  cardMouseDown!: Signal<() => void>;

  @ExportSignal()
  cardMouseUp!: Signal<() => void>;

  @ExportVar(Variant.Type.TypeFloat)
  hoverScaleFactor = 1.15;

  @ExportVar(Variant.Type.TypeVector3)
  hoverPositionOffset = new Vector3(0, 0.7, 0);

  @ExportVar(Variant.Type.TypeFloat)
  positionTweenDuration = 0.08;

  @ExportVar(Variant.Type.TypeFloat)
  rotateTweenDuration = 0.14;

  @ExportVar(Variant.Type.TypeBool)
  get faceDown(): boolean {
    return this._faceDown;
  }

  set faceDown(value: boolean) {
    if (this._faceDown != value) {
      this._faceDown = value;
      this.updateConfigurationWarnings();
    }
  }

  protected _positionTween: Tween;
  protected _rotateTween: Tween;
  protected _hoverTween: Tween;

  private _faceDown = false;
  private _hovered = false;

  constructor() {
    super();
    this._positionTween = this.createTween();
    this._rotateTween = this.createTween();
    this._hoverTween = this.createTween();
  }

  override _ready() {
    super._ready();

    const staticBody3d = this.getNode('StaticBody3D');
    staticBody3d.inputEvent.connect(Callable.create(this, this._onStaticBody3DInputEvent));
    staticBody3d.mouseEntered.connect(Callable.create(this, this._onStaticBody3DMouseEntered));
    staticBody3d.mouseExited.connect(Callable.create(this, this._onStaticBody3DMouseExited));
  }

  setCollisionEnabled(enabled: boolean): void {
    this.getNode('StaticBody3D/CollisionShape3D').disabled = !enabled;
  }

  setHovered(hover: boolean): void {
    if (hover === this._hovered) {
      return;
    }

    this._hovered = hover;
    this._hoverTween.kill();
    this._hoverTween = this.createTween();
    this._hoverTween.setParallel(true);
    this._hoverTween.setEase(Tween.EaseType.EaseIn);
    this.tweenCardScale(hover ? this.hoverScaleFactor : 1);
    this.tweenMeshPosition(hover ? this.hoverPositionOffset : Vector3.ZERO, this.positionTweenDuration);
  }

  animateRotation(dragRotation: Vector3, duration = this.rotateTweenDuration): void {
    this._rotateTween.kill();
    this._rotateTween = this.createTween();
    this.tweenCardRotation(dragRotation, duration);
  }

  animatePosition(destination: Vector3, duration = this.positionTweenDuration): void {
    this._positionTween.kill();

    // Jump to the destination.z to prevent the (spring) animation causing to cards move above/below each other.
    const startingPosition = this.position;
    startingPosition.z = destination.z;
    this.position = startingPosition;

    this._positionTween = this.createTween();
    this._positionTween.setEase(Tween.EaseType.EaseOut);
    this._positionTween.setTrans(Tween.TransitionType.TransSpring);
    this.tweencardPosition(destination, duration);
  }

  private tweenCardScale(scaleFactor: number): void {
    const targetScale = new Vector3(scaleFactor, scaleFactor, 1);
    this._hoverTween.tweenProperty(this, new NodePath('scale'), targetScale, this.positionTweenDuration);
  }

  private tweenMeshPosition(position: Vector3, duration: number): void {
    this._hoverTween.tweenProperty(this.getNode('CardMesh'), new NodePath('position'), position, duration);
  }

  private tweencardPosition(position: Vector3, duration: number): void {
    this._positionTween.tweenProperty(this, new NodePath('position'), position, duration);
  }

  private tweenCardRotation(rotation: Vector3, duration: number): void {
    this._rotateTween.setEase(Tween.EaseType.EaseIn);
    this._rotateTween.tweenProperty(this, new NodePath('rotation'), rotation, duration);
  }

  _onStaticBody3DMouseEntered(): void {
    this.cardMouseOver.emit();
  }

  _onStaticBody3DMouseExited(): void {
    this.cardMouseExit.emit();
  }

  _onStaticBody3DInputEvent: SignalHandler<StaticBody3D['inputEvent']> = function (this: CardNode, _camera, event) {
    if (event instanceof InputEventMouseButton) {
      if (event.buttonIndex === 1) {
        if (event.pressed) {
          this.cardMouseDown.emit();
        } else {
          this.cardMouseUp.emit();
        }
      }
    }
  };
}
