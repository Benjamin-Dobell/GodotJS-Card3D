import { GDictionary, Time } from 'godot';

export const Rank = {
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
  SIX: 6,
  SEVEN: 7,
  EIGHT: 8,
  NINE: 9,
  TEN: 10,
  JACK: 11,
  QUEEN: 12,
  KING: 13,
  ACE: 14,
} as const;

export type Rank = typeof Rank[keyof typeof Rank];

export const RankName = Object.fromEntries(
  Object.entries(Rank).map(([k, v]) => [v, k])
) as Record<Rank, keyof typeof Rank>;

export const Suit = {
  HEART: 0,
  DIAMOND: 1,
  CLUB: 2,
  SPADE: 3,
} as const;

export type Suit = typeof Suit[keyof typeof Suit];

export const SuitName = Object.fromEntries(
  Object.entries(Suit).map(([k, v]) => [v, k])
) as Record<Suit, keyof typeof Suit>;

export function getCardId(rank: Rank, suit: Suit): string {
  return `${RankName[rank]} of ${SuitName[suit]}`;
}

export interface CardData {
  rank: Rank;
  suit: Suit;
  frontMaterialPath: string;
  backMaterialPath: string;
}

const cardDataMap = new Map<string, CardData>();

for (const [suitName, suit] of Object.entries(Suit)) {

  for (const rank of Object.values(Rank)) {
    if (isNaN(Number(rank))) continue; // Skip numeric indices

    const frontMaterial = `res://materials/example/${suitName.toLowerCase()}-${rank}.tres`;
    const backMaterial = 'res://materials/example/card-back.tres';

    const cardData: CardData = {
      rank,
      suit,
      frontMaterialPath: frontMaterial,
      backMaterialPath: backMaterial,
    };

    const cardId = getCardId(rank, suit);
    cardDataMap.set(cardId, cardData);
  }
}

export function getCardData(rank: Rank, suit: Suit) {
  return cardDataMap.get(getCardId(rank, suit))!;
}
