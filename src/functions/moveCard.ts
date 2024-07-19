import { Card } from "../data/types";
import insertCard from "./insertCard";
import removeCard from "./removeCard";

// Function to move a card from one zone to another within the deck
const moveCard = (
  deck: { library: Card[]; inPlay: Card[]; graveyard: Card[]; exile: Card[] },
  fromZone: "library" | "inPlay" | "graveyard" | "exile",
  toZone: "library" | "inPlay" | "graveyard" | "exile",
  fromPosition: number,
  toPosition: number
) => {
  if (fromZone === toZone && fromPosition === toPosition) {
    return deck; // No movement needed if the card is being moved to the same position in the same zone
  }

  // Ensure the fromPosition is within bounds
  if (fromPosition < 0 || fromPosition >= deck[fromZone].length) {
    throw new Error("Position out of bounds");
  }

  // Determine the card to be moved
  const cardToMove = deck[fromZone][fromPosition];

  // Remove the card from the source zone
  const newSourceZone = removeCard(deck[fromZone], fromPosition);

  // Insert the card into the target zone
  const newTargetZone = insertCard(deck[toZone], cardToMove, toPosition);

  // Update the deck object
  return {
    ...deck,
    [fromZone]: newSourceZone,
    [toZone]: newTargetZone,
  };
};

export default moveCard;
