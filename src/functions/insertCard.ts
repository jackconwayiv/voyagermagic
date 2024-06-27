import { Card } from "../data/types";

export default (deck: Card[], card: Card, position: number): Card[] => {
  const newDeck = [...deck];
  if (position < 0 || position > newDeck.length) {
    throw new Error("Position out of bounds");
  }
  newDeck.splice(position, 0, card);
  return newDeck;
};
