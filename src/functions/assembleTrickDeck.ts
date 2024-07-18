import blbTricks from "../data/blb/blbTrickCards";
import { Scene } from "../data/types";
import shuffleDeck from "./shuffleDeck";

const assembleTrickDeck = (scene: Scene) => {
  const blankCard = {
    name: "All Clear",
    cost: "",
    type: "",
    generateText: () => ``,
  };

  const sceneColorsArray = scene.color.split("");

  const trickDeck = blbTricks.filter((card) =>
    sceneColorsArray.some((color) => card.cost.includes(color))
  );
  const trickLength = trickDeck.length;
  for (let i = 0; i < trickLength; i++) {
    trickDeck.push(blankCard);
    trickDeck.push(blankCard);
    trickDeck.push(blankCard);
  }

  return shuffleDeck(trickDeck);
};

export default assembleTrickDeck;
