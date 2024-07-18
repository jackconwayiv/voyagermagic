import { Card } from "../data/types";
import moveCard from "./moveCard";
import shuffleDeck from "./shuffleDeck";

const drawCard = (deck: {
  library: Card[];
  inPlay: Card[];
  graveyard: Card[];
  exile: Card[];
}): { deck: typeof deck; status: string } => {
  if (deck.library.length === 0) {
    if (deck.graveyard.length === 0) {
      return { deck, status: "empty" }; // Indicate that both library and graveyard are empty
    }

    // Shuffle the graveyard and move the cards to the library
    const shuffledGraveyard = shuffleDeck(deck.graveyard);
    deck.library = shuffledGraveyard;
    deck.graveyard = [];
  }

  // Move the top card from the library (position 0) to the end of the inPlay zone
  const updatedDeck = moveCard(deck, "library", "inPlay", 0, deck.inPlay.length);

  return {
    deck: {
      ...deck,
      library: updatedDeck.library,
      inPlay: updatedDeck.inPlay,
      graveyard: updatedDeck.graveyard,
      exile: deck.exile,
    },
    status: "success",
  };
};

export default drawCard;