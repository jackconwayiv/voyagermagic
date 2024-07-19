import blbEnemyCards from "../data/blb/blbEnemyCards";
import blbTricks from "../data/blb/blbTrickCards";
import { Scene } from "../data/types";
import shuffleDeck from "./shuffleDeck";

export const assembleTrickDeck = (scene: Scene) => {
  const blankCard = {
    name: "All Clear",
    cost: "",
    type: "",
    generateText: () => ``,
  };

  const sceneColorsArray = scene.color.split("");

  // Filter the trick deck based on scene colors
  const trickDeck = blbTricks.filter((card) =>
    sceneColorsArray.some((color) => card.cost.includes(color))
  );

  // Add blank cards to the deck
  const trickLength = trickDeck.length;
  for (let i = 0; i < trickLength; i++) {
    trickDeck.push(blankCard);
    trickDeck.push(blankCard);
    trickDeck.push(blankCard);
  }

  // Shuffle and return the deck
  return shuffleDeck(trickDeck);
};

export const assembleEnemyDeck = (scene: Scene) => {
  const sceneColorsArray = scene.color.split("");

  const enemyDeck = blbEnemyCards.filter((card) => {
    const cardColorsArray = card.cost.replace(/\d+/g, "").split("");
    return cardColorsArray.every((color) => sceneColorsArray.includes(color));
  });

  return shuffleDeck(enemyDeck);
};
