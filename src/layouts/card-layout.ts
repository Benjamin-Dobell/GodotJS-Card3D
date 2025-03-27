import { Resource, Vector3 } from 'godot';
import CardNode from '../card-node';

export default class CardLayout extends Resource {
  updatecardPositions(cards: Array<null | CardNode>, duration: number): void {
    const cardCount = cards.length;

    for (let i = 0; i < cardCount; i++) {
      const card = cards[i];

      if (card) {
        this.updatecardPosition(card, cardCount, i, duration);
      }
    }
  }

  updatecardPosition(card: CardNode, numCards: number, index: number, duration: number): void {
    const position = this.calculatecardPositionByIndex(numCards, index);
    const rotation = this.calculateCardRotationByIndex(numCards, index);
    card.animatePosition(position, duration);
    card.animateRotation(rotation);
  }

  calculatecardPositionByIndex(numCards: number, index: number): Vector3 {
    return Vector3.ZERO;
  }

  calculateCardRotationByIndex(numCards: number, index: number): Vector3 {
    return Vector3.ZERO;
  }
}
