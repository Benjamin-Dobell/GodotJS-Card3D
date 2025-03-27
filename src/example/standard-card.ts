import { Material, ResourceLoader } from 'godot';
import { ExportEnum } from 'godot.annotations';
import { getCardData, getCardId, Rank, Suit } from './card-data';
import CardNode from '../card-node';

export default class StandardCard extends CardNode {
  private _materialStale = false;
  private _rank: Rank = Rank.TWO;
  private _suit: Suit = Suit.DIAMOND;

  private loadMaterial(force = false) {
    if (!force && !this.isNodeReady()) {
      this._materialStale = true;
      return;
    }

    const data = getCardData(this.rank, this.suit);
    const frontMaterial = ResourceLoader.load(data.frontMaterialPath);
    const backMaterial = ResourceLoader.load(data.backMaterialPath);

    if (frontMaterial) {
      this.getNode('CardMesh/CardFrontMesh').setSurfaceOverrideMaterial(0, frontMaterial as Material);
    }

    if (backMaterial) {
      this.getNode('CardMesh/CardBackMesh').setSurfaceOverrideMaterial(0, backMaterial as Material);
    }
  }

  @ExportEnum(Rank)
  get rank() {
    return this._rank;
  }

  set rank(rank: Rank) {
    if (rank === this._rank) {
      return;
    }
    this._rank = rank;
    this.loadMaterial();
  }

  @ExportEnum(Suit)
  get suit() {
    return this._suit;
  }

  set suit(suit: Suit) {
    if (suit === this._suit) {
      return;
    }
    this._suit = suit;
    this.loadMaterial();
  }

  override _ready() {
    super._ready();

    if (this.isFirstLoad || this._materialStale) {
      this.loadMaterial(true);
    }
  }

  override toString = (): string => getCardId(this.rank, this.suit);
}
