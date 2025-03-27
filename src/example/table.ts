import { Node3D, InputEvent, ResourceLoader, PackedScene, SceneNodes, NodePathMap, ResolveNodePath, Node } from 'godot';
import { Rank, Suit } from './card-data';
import CardCollection from '../card-collection';
import PileCardLayout from '../layouts/pile-card-layout';
import LineCardLayout from '../layouts/line-card-layout';
import FanCardLayout from '../layouts/fan-card-layout';
import StandardCard from './standard-card';

function instantiateStandardCard(rank: Rank, suit: Suit): StandardCard {
  const scene = ResourceLoader.load('res://scenes/example/standard_card.tscn') as PackedScene;
  const card = scene.instantiate() as StandardCard;
  card.rank = rank;
  card.suit = suit;
  return card;
}

type ResolveNodeTree<Map extends NodePathMap, Path extends string, Default = never> = Path extends keyof Map
  ? Map[Path] extends Node<infer ChildMap>
    ? ChildMap
    : Default
  : Path extends `${infer Key extends keyof Map & string}/${infer SubPath}`
    ? Map[Key] extends Node<infer ChildMap>
      ? ResolveNodeTree<ChildMap, SubPath, Default>
      : Default
    : Default;

export default class Table extends Node3D<ResolveNodeTree<SceneNodes['scenes/example/table.tscn'], 'Table'>> {
  suits: Suit[] = [Suit.CLUB, Suit.SPADE, Suit.DIAMOND, Suit.HEART];
  ranks: Rank[] = [...Object.values(Rank)];

  suitIndex = 0;
  rankIndex = 0;

  hand?: CardCollection<StandardCard>;
  pile?: CardCollection<StandardCard>;

  override _ready() {
    this.hand = this.getNode('DragController/Hand');
    this.pile = this.getNode('DragController/TableCards');
  }

  override _input(event: InputEvent): void {
    if (event.isActionPressed('ui_down')) {
      this.addCard();
    } else if (event.isActionPressed('ui_up')) {
      this.removeCard();
    } else if (event.isActionPressed('ui_left')) {
      this.clearCards();
    } else if (event.isActionPressed('ui_right')) {
      if (!this.pile || !this.hand) {
        return;
      }

      if (this.pile.cardLayoutStrategy instanceof PileCardLayout && this.hand.cardLayoutStrategy instanceof LineCardLayout) {
        this.pile.cardLayoutStrategy = new LineCardLayout();
      } else if (this.hand.cardLayoutStrategy instanceof LineCardLayout) {
        this.hand.cardLayoutStrategy = new FanCardLayout();
      } else if (this.pile.cardLayoutStrategy instanceof LineCardLayout) {
        this.pile.cardLayoutStrategy = new PileCardLayout();
      } else if (this.hand.cardLayoutStrategy instanceof FanCardLayout) {
        this.hand.cardLayoutStrategy = new LineCardLayout();
      }
    }
  }

  addCard(): void {
    const { rank, suit } = this.nextCard();
    const card = instantiateStandardCard(rank, suit);
    const deck = this.getNode('../Deck');

    this.hand?.appendCard(card);

    if (deck instanceof Node3D) {
      const deckPosition = deck.globalPosition;
      card.globalPosition = deckPosition;
    }
  }

  nextCard() {
    const suit = this.suits[this.suitIndex]!;
    const rank = this.ranks[this.rankIndex]!;

    this.rankIndex += 1;

    if (this.rankIndex === this.ranks.length) {
      this.rankIndex = 0;
      this.suitIndex += 1;
    }

    if (this.suitIndex === this.suits.length) {
      this.suitIndex = 0;
    }

    return { suit, rank };
  }

  removeCard(): void {
    if (!this.hand?.cards.length) {
      return;
    }

    const randomCardIndex = Math.floor(Math.random() * this.hand.cards.length);
    const cardToRemove = this.hand.cards[randomCardIndex]!;

    this.playCard(cardToRemove);
  }

  playCard(card: StandardCard): void {
    if (!this.hand || !this.pile) {
      return;
    }

    const cardIndex = this.hand.cardIndices.get(card);

    if (cardIndex === undefined) {
      return;
    }

    const cardGlobalPosition = this.hand.cards[cardIndex]!.globalPosition;
    this.hand.removeCard(cardIndex);

    this.pile.appendCard(card);
    card.setHovered(false);
    card.globalPosition = cardGlobalPosition;
  }

  clearCards(): void {
    if (!this.hand || !this.pile) {
      return;
    }

    const handCards = this.hand.removeAll();
    const pileCards = this.pile.removeAll();

    for (const c of handCards) {
      c.queueFree();
    }

    for (const c of pileCards) {
      c.queueFree();
    }
  }

  _onCardMouseUp(): void {
    this.addCard();
  }
}
