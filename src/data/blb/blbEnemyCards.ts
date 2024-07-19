import { Card } from "../types";

const blbEnemyCards: Card[] = [
  {
    name: "Squirrel Overlord",
    cost: "1BG",
    type: "Creature Summon - Squirrel",
    generateText: () =>
      `Encounter a 1/1 black and green Squirrel creature token with scavenging, and put a number of +1/+1 counters on it equal to the number of Nexii you're facing.`,
  },
  {
    name: "Squirrel Warlock",
    cost: "3B",
    type: "Creature Summon - Squirrel",
    generateText: () =>
      `Encounter a 1/1 black and green Squirrel creature token with scavenging. Recast the first other Squirrel creature summon spell from the enemy graveyard, then exile it.`,
  },
  {
    name: "Squirrel Ranger",
    cost: "2G",
    type: "Creature Summon - Squirrel",
    generateText: () =>
      `Encounter a 1/1 black and green Squirrel creature token with scavenging. Put X +1/+1 counters on it, where X is the number of lands you control.`,
  },
  {
    name: "ENEMY Kidnapped",
    cost: "1WW",
    type: "Instant - Trick",
    generateText: () =>
      `Your largest foe captures target creature. If you don't have any foes, instead you get 3 Woe counters.`,
  },
  {
    name: "ENEMY Bring Low",
    cost: "W",
    type: "Instant - Trick",
    generateText: () => `Target creature now has base power and toughness 1/1.`,
  },
  {
    name: "ENEMY Faithless Ultimatum",
    cost: "1W",
    type: "Instant - Trick",
    generateText: () =>
      `Exile target creature unless you sacrifice an enchantment with greater mana value or rarity.`,
  },
  {
    name: "ENEMY Moment of Doubt",
    cost: "1W",
    type: "Instant - Trick",
    generateText: () =>
      `Exile target creature, then return it to play tapped and removed from combat.`,
  },
  {
    name: "ENEMY Underestimated",
    cost: "2WW",
    type: "Instant - Trick",
    generateText: () =>
      `The next time target creature would deal combat damage this turn, prevent that damage. Each Nexus gains that much life.`,
  },
  {
    name: "ENEMY Freeze",
    cost: "1U",
    type: "Instant - Trick",
    generateText: () =>
      `The next time target creature deals combat damage this turn, tap it and put that many stun counters on it.`,
  },
  {
    name: "ENEMY Undo",
    cost: "2UU",
    type: "Instant - Trick",
    generateText: () =>
      `Put target creature on the top or bottom of its owner's library.`,
  },
  {
    name: "ENEMY Unsummon",
    cost: "U",
    type: "Instant - Trick",
    generateText: () => `Return target creature to its owner's hand.`,
  },
  {
    name: "ENEMY Attract Attention",
    cost: "2U",
    type: "Instant - Trick",
    generateText: () =>
      `The next time target creature deals combat damage this turn, you get that many Woe counters.`,
  },
  {
    name: "ENEMY Spellbind",
    cost: "2U",
    type: "Instant - Trick",
    generateText: () =>
      `Spell target creature. (Exile it. Its owner may cast it from exile by paying an additional (2) mana.)`,
  },
  {
    name: "ENEMY Covetous Ultimatum",
    cost: "2R",
    type: "Instant - Trick",
    generateText: () =>
      `Deal 5 damage to target creature unless you sacrifice an artifact of greater mana value or rarity.`,
  },
  {
    name: "ENEMY Hazardous Terrain",
    cost: "2RR",
    type: "Instant - Trick",
    generateText: () =>
      `Deal X damage to target player (you), where X is double the number of your attacking creatures.`,
  },
  {
    name: "ENEMY Fire Ants",
    cost: "1R",
    type: "Instant - Trick",
    generateText: () =>
      `Encounter two 1/1 red Insect creature tokens with wither. They block target creature if able. After combat, tap them.`,
  },
  {
    name: "ENEMY Enflame",
    cost: "4R",
    type: "Instant - Trick",
    generateText: () =>
      `Deal X damage to target creature, where X is the number of lands you control.`,
  },
  {
    name: "ENEMY Mutinous Melody",
    cost: "1RR",
    type: "Instant - Trick",
    generateText: () =>
      `The next time target creature deals combat damage this turn, it also deals that much damage to its controller (you).`,
  },
];
export default blbEnemyCards;
