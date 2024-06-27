export interface TextGenerator {
  (
    roundNumber: number,
    defeatedCount?: number,
    landCount?: number,
    playerCount?: number
  ): string;
}

class Card {
  name: string;
  cost: string;
  type: string;
  generateText: TextGenerator;

  constructor(
    name: string,
    cost: string,
    type: string,
    generateText: TextGenerator
  ) {
    this.name = name;
    this.cost = cost;
    this.type = type;
    this.generateText = generateText;
  }
}

const cards: Card[] = [
  new Card(
    "Crop of Warriors",
    "4WW",
    "Creature Summon",
    (
      // roundNumber
      // defeatedCount
      // landCount,
      playerCount
    ) =>
      `Encounter ${playerCount} 2/2 white Soldier creature tokens with vigilance.`
  ),
  new Card(
    "Wrath of the Gods",
    "2WW",
    "Sorcery",
    () =>
      // roundNumber
      // defeatedCount
      // landCount,
      // playerCount
      `Destroy all creatures. They can't be regenerated.`
  ),
];
export default cards;
