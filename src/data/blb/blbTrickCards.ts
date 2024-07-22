import { Card } from "../types";

const blbTricks: Card[] = [
  {
    name: "Kidnapped",
    cost: "1WW",
    type: "Instant - Trick",
    generateText: () =>
      `Your largest foe captures target creature. If you don't have any foes, instead you get 3 Woe counters.`,
  },
  {
    name: "Bring Low",
    cost: "W",
    type: "Instant - Trick",
    generateText: () => `Target creature now has base power and toughness 1/1.`,
  },
  {
    name: "Faithless Ultimatum",
    cost: "1W",
    type: "Instant - Trick",
    generateText: () =>
      `Exile target creature unless you sacrifice an enchantment with greater mana value or rarity.`,
  },
  {
    name: "Moment of Doubt",
    cost: "1W",
    type: "Instant - Trick",
    generateText: () =>
      `Exile target creature, then return it to play tapped and removed from combat.`,
  },
  {
    name: "Underestimated",
    cost: "2WW",
    type: "Instant - Trick",
    generateText: () =>
      `The next time target creature would deal combat damage this turn, prevent that damage. Each Nexus gains that much life.`,
  },
  {
    name: "Freeze",
    cost: "1U",
    type: "Instant - Trick",
    generateText: () =>
      `The next time target creature deals combat damage this turn, tap it and put that many stun counters on it.`,
  },
  {
    name: "Undo",
    cost: "2UU",
    type: "Instant - Trick",
    generateText: () =>
      `Put target creature on the top or bottom of its owner's library.`,
  },
  {
    name: "Unsummon",
    cost: "U",
    type: "Instant - Trick",
    generateText: () => `Return target creature to its owner's hand.`,
  },
  {
    name: "Attract Attention",
    cost: "2U",
    type: "Instant - Trick",
    generateText: () =>
      `The next time target creature deals combat damage this turn, you get that many Woe counters.`,
  },
  {
    name: "Spellbind",
    cost: "2U",
    type: "Instant - Trick",
    generateText: () =>
      `Spellbind target creature. (Exile it. Its owner may cast it from exile by paying an additional (2) mana.)`,
  },
  {
    name: "Battle Scars",
    cost: "BB",
    type: "Instant - Trick",
    generateText: () =>
      `Wound target creature once for each Nexus you're facing.`,
  },
  {
    name: "Prey on the Weak",
    cost: "1B",
    type: "Instant - Trick",
    generateText: () =>
      `Sacrifice target creature unless you sacrifice another creature with greater power and toughness.`,
  },
  {
    name: "Push Through Fear",
    cost: "2BB",
    type: "Instant - Trick",
    generateText: () =>
      `Discard a card at random. If you can't, you get 3 Woe counters.`,
  },
  {
    name: "Snake in the Marsh",
    cost: "B",
    type: "Instant - Trick",
    generateText: () =>
      `Encounter a 1/1 black and green Snake creature token with deathtouch. It blocks target creature if able. After combat, tap it.`,
  },
  {
    name: "Wrack with Regret",
    cost: "2B",
    type: "Instant - Trick",
    generateText: () =>
      `Mill X cards, where X is target creature's power. Lose 1 life for each nonland card milled this way.`,
  },
  {
    name: "Covetous Ultimatum",
    cost: "2R",
    type: "Instant - Trick",
    generateText: () =>
      `Deal X damage to target creature unless you sacrifice an artifact of greater mana value or rarity, where X is twice the number of Nexii you're facing.`,
  },
  {
    name: "Hazardous Terrain",
    cost: "2RR",
    type: "Instant - Trick",
    generateText: () =>
      `Deal X damage to target player (you), where X is the number of your attacking creatures.`,
  },
  {
    name: "Vole Vanguard",
    cost: "3R",
    type: "Instant - Trick",
    generateText: () =>
      `Encounter two 2/2 red and white Vole creature tokens with first strike. They block target creature if able. After combat, tap them.`,
  },
  {
    name: "Enflame",
    cost: "4R",
    type: "Instant - Trick",
    generateText: () =>
      `Deal X damage to target creature, where X is the number of lands you control.`,
  },
  {
    name: "Mutinous Melody",
    cost: "1RR",
    type: "Instant - Trick",
    generateText: () =>
      `The next time target creature deals combat damage this turn, it also deals that much damage to its controller (you).`,
  },
  {
    name: "Viny Impasse",
    cost: "G",
    type: "Instant - Trick",
    generateText: () =>
      `Prevent all combat damage creatures you control would deal this turn.`,
  },
  {
    name: "Rouse the Guard",
    cost: "1GG",
    type: "Instant - Trick",
    generateText: () =>
      `The next time target creature deals combat damage this turn, encounter a tapped 2/3 green and white Armadillo creature token with protector and put that many +1/+1 counters on it.`,
  },
  {
    name: "Cowed by Might",
    cost: "2G",
    type: "Instant - Trick",
    generateText: () =>
      `Mute target creature. Your strongest foe fights it this turn (if able).`,
  },
  {
    name: "Followed Your Trail",
    cost: "1G",
    type: "Instant - Trick",
    generateText: () =>
      `Exile your graveyard. For each nonland card exiled this way, deal 1 damage to target creature.`,
  },
  {
    name: "Despondency",
    cost: "2G",
    type: "Instant - Trick",
    generateText: () =>
      `Destroy target creature unless you sacrifice an artifact or enchantment with greater mana value or rarity.`,
  },
];
export default blbTricks;
