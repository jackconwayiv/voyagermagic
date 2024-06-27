import { Card } from "../data/types";

export default (deck: Card[], position: number = 0): Card[] => {
  if (position < 0 || position >= deck.length) {
    throw new Error("Position out of bounds");
  }
  const newDeck = [...deck];
  newDeck.splice(position, 1);
  return newDeck;
};
