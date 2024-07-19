import { Card } from "../types";

//WU is moths
//UB is snails
//BR is porcupines
//RG is badgers
//GW is armadillos
//WB is weasels
//UR is foxes
//BG is snakes
//RW is voles
//GU is beavers

const blbEnemyCards: Card[] = [
  {
    name: "Brazen Bladeblinder",
    cost: "2WW",
    type: "Creature - Weasel",
    generateText: () =>
      `Encounter a 2/2 white and black Weasel creature token with lifelink, then tap each creature you control with 3 or greater power.`,
  },
  {
    name: "Foes from the Marsh",
    cost: "5BB",
    type: "Sorcery",
    generateText: () =>
      `Encounter each: a 2/2 white- black lifelink Weasel; a 1/3 blue- black skulk Snail, a 2/2 black- red afflict 2 Porcupine, and a 1/1 black- green deathtouch Snake.`,
  },
  {
    name: "The Forgetting",
    cost: "2BB",
    type: "Legendary Sorcery - Event",
    generateText: () =>
      `After all other enemy cards have resolved, each player discards their hand, draws that many cards minus one, then exiles their graveyard.`,
  },
  {
    name: "Rotten Reaping",
    cost: "2B",
    type: "Sorcery",
    generateText: () =>
      `Mill 3 cards, then exile all creature cards from your graveyard. Each Nexus gains X life, where X is twice the number of cards exiled this way.`,
  },
  {
    name: "Terrorize",
    cost: "1B",
    type: "Sorcery",
    generateText: () =>
      `Target creature you control with the lowest toughness gets -X/-X until end of turn, where X is the number of Nexii you're facing. If you control no creatures, instead you get 3 Woe counters.`,
  },
  {
    name: "Raise the Dead",
    cost: "3B",
    type: "Sorcery",
    generateText: () =>
      `You get 3 Woe counters. The enemy mills 3 cards, then casts a creature spell with the highest mana value from its graveyard. Creature cards cast in this way are exiled as they resolve.`,
  },
  {
    name: "Stupefying Fear",
    cost: "1BB",
    type: "Enchantment",
    generateText: () =>
      `Encounter a "Stupefying Fear" enchantment token with: "On enemy upkeep, discard your hand, then draw that many cards." Then trigger its ability once.`,
  },
  {
    name: "War Wounds",
    cost: "2BB",
    type: "Enchantment",
    generateText: () =>
      `Encounter a "War Wounds" enchantment token with: "Whenever a creature you control attacks or blocks, you lose 1 life."`,
  },
  {
    name: "Death's Burden",
    cost: "2B",
    type: "Enchantment",
    generateText: () =>
      `Encounter a "Death's Burden" enchantment token with: "Whenever any creature dies, you mill a card and lose 1 life."`,
  },
  {
    name: "Beguiling Gastropod",
    cost: "2B",
    type: "Creature - Snail",
    generateText: () =>
      `Encounter a 1/3 blue and black Snail creature token with skulk. Discard a random (instant or sorcery) card from your hand.`,
  },
  {
    name: "Deftshell Smuggler",
    cost: "2BB",
    type: "Creature - Snail",
    generateText: () =>
      `Encounter a 1/3 blue and black Snail creature token with skulk. The enemy deck and each player mills X cards, where X is the highest toughness among your foes.`,
  },
  {
    name: "Slithering Sower",
    cost: "1B",
    type: "Creature - Snake",
    generateText: () =>
      `Encounter a 1/1 black and green Snake creature token with deathtouch. Discard a random card, then mill X cards, where X is twice the number of foes you're facing.`,
  },
  {
    name: "Ambusher Adder",
    cost: "2BB",
    type: "Creature - Snake",
    generateText: () =>
      `Encounter a 1/1 black and green Snake creature token with deathtouch, then sacrifice a random creature you control if able.`,
  },
  {
    name: "Thief of Resolve",
    cost: "2BB",
    type: "Creature - Weasel",
    generateText: () =>
      `Encounter a 2/2 white and black Weasel creature token with lifelink. Creatures you control get -1/-1 until end of turn. If you're opulent, instead they get -2/-2 until end of turn.`,
  },
  {
    name: "Resilient Rogue",
    cost: "2BB",
    type: "Creature - Weasel",
    generateText: () =>
      `Encounter a 2/2 white and black Weasel creature token with lifelink, then put a shield counter on each enemy Weasel in play.`,
  },
  {
    name: "Hexquill Warlock",
    cost: "1BB",
    type: "Creature - Porcupine",
    generateText: () =>
      `Encounter a 2/2 black and red Porcupine creature token with afflict 2, then you lose life equal to the number of foes you're facing.`,
  },
  {
    name: "Everspine Brute",
    cost: "3BB",
    type: "Creature - Porcupine",
    generateText: () =>
      `Encounter a 2/2 black and red Porcupine creature token with afflict 2, then put a +1/+1 counter on it for each player and Nexus with life total less than the starting life total.`,
  },
  {
    name: "Bloodscream the Bat",
    cost: "4BB",
    type: "Creature - Bat",
    generateText: () =>
      `Mill 2 cards, then encounter a */* black Bat creature token named "Bloodscream" with flying and "My power and toughness are each equal to the number of cards in your graveyard."`,
  },
  {
    name: "Gashtooth the Gator",
    cost: "4BB",
    type: "Creature - Alligator",
    generateText: () =>
      `The enemy deck mills 2, then encounter a */* black Alligator creature token named "Gashtooth" with menace and "My power and toughness are equal to half the cards in the enemy graveyard, rounded up."`,
  },
  {
    name: "Foes from the Thicket",
    cost: "5GG",
    type: "Sorcery",
    generateText: () =>
      `Encounter each: a 2/3 green- white protector Armadillo; a 2/3 green- blue hexproof Beaver; a 1/1 black- green deathtouch Snake; and a 3/3 red- green trample Badger.`,
  },
  {
    name: "Sudden Fog",
    cost: "2GG",
    type: "Sorcery",
    generateText: () =>
      `For each Nexus you're facing, tap one (untapped) creature you control.`,
  },
  {
    name: "Regrowth",
    cost: "4G",
    type: "Sorcery",
    generateText: () =>
      `The enemy casts the first enchantment card (or creature card, or artifact card) from the enemy graveyard if able, then exiles that card as it resolves.`,
  },
  {
    name: "Feel Small",
    cost: "3GG",
    type: "Sorcery",
    generateText: () =>
      `For each creature you control, pay (1) or mute that creature. If you control no creatures, instead you get 3 Woe counters.`,
  },
  {
    name: "Fiendish Foraging",
    cost: "1G",
    type: "Sorcery",
    generateText: () =>
      `Exile up to X card from your graveyard, where X is the number of your lands. For each nonland card exiled this way, each Nexus gains 3 life. For each card you can't exile, you get a Woe counter.`,
  },
  {
    name: "The Cleansing",
    cost: "2GG",
    type: "Legendary Sorcery - Event",
    generateText: () =>
      `After all other enemy cards have resolved, destroy all artifacts and enchantments. Each player gets a Woe counter for each enemy permanent that leaves their battleground in this way.`,
  },
  {
    name: "Acorn Stash",
    cost: "1GG",
    type: "Enchantment",
    generateText: () =>
      `Encounter an "Acorn Stash" enchantment token with: "On enemy upkeep, you get a Woe counter, then each Nexus gains life equal to your Woe." Then trigger its ability once.`,
  },
  {
    name: "Nature's Might",
    cost: "3G",
    type: "Enchantment",
    generateText: () =>
      `Encounter a "Nature's Might" enchantment token with: "Your foes enter with an additional +1/+1 counter on them." Then put a +1/+1 counter on each foe you're facing.`,
  },
  {
    name: "Woe Ring",
    cost: "1",
    type: "Artifact",
    generateText: () =>
      `Encounter a "Woe Ring" artifact token with: "On enemy upkeep, you get a Woe for each Nexus you're facing." Then trigger its ability once.`,
  },
  {
    name: "Woven Ward",
    cost: "2",
    type: "Artifact",
    generateText: () =>
      `Encounter a "Woven Ward" artifact token with: "Enemy permanents you're facing and the Nexii have protection from spells and abilities you control."`,
  },
  {
    name: "Barkbellow the Bear",
    cost: "4GG",
    type: "Creature - Bear",
    generateText: () =>
      `Encounter a */* green Bear creature token named "Barkbellow" with trample and "My power and toughness are each equal to the number of lands you control."`,
  },
  {
    name: "Wranglefur the Wolf",
    cost: "4GG",
    type: "Creature - Wolf",
    generateText: () =>
      `Encounter a */* green Wolf creature token named "Wranglefur" with trample and "My power and toughness are each equal to the number of creatures in play."`,
  },
  {
    name: "Thick Constrictor",
    cost: "3GG",
    type: "Creature - Snake",
    generateText: () =>
      `Encounter a 1/1 black and green Snake creature token with deathtouch. Put X +1/+1 counters on it, where X is the number of lands you control.`,
  },
  {
    name: "Sundering Snake",
    cost: "1GG",
    type: "Creature - Snake",
    generateText: () =>
      `Encounter a 1/1 black and green Snake creature token with deathtouch, then sacrifice a random artifact or enchantment you control if able.`,
  },
  {
    name: "Undaunted Dillo",
    cost: "2GG",
    type: "Creature - Armadillo",
    generateText: () =>
      `Encounter a 2/3 green and white Armadillo creature token with protector. Put X +1/+1 counters on it, where X is the number of creatures you control.`,
  },
  {
    name: "Armored Pugilist",
    cost: "2G",
    type: "Creature - Armadillo",
    generateText: () =>
      `Encounter a 2/3 green and white Armadillo creature token with protector. Then your largest foe fights your weakest creature.`,
  },
  {
    name: "Battlesong Braggart",
    cost: "2GG",
    type: "Creature - Badger",
    generateText: () =>
      `Encounter a 3/3 red and green Badger creature token with trample. Then put a +1/+1 counter on each foe you're facing.`,
  },
  {
    name: "Riled Rabblerouser",
    cost: "2G",
    type: "Creature - Badger",
    generateText: () =>
      `Encounter a 3/3 red and green Badger creature token with trample. Then you get X Woe counters, where X is the greatest power among foes you're facing.`,
  },
  {
    name: "Brookdam Builder",
    cost: "1G",
    type: "Creature - Beaver",
    generateText: () =>
      `Encounter a 2/3 green and blue Beaver creature token with hexproof. For each Nexus you're facing, tap and stun a random (nonbasic) land you control.`,
  },
  {
    name: "Gnawtooth Looter",
    cost: "3G",
    type: "Creature - Beaver",
    generateText: () =>
      `Encounter a 2/3 green and blue Beaver creature token with hexproof. Destroy target artifact you control with the highest mana value, then get that many Woe counters.`,
  },
  {
    name: "Gravehiss Ritual",
    cost: "3BG",
    type: "Sorcery",
    generateText: () =>
      `Mill X cards, where X is twice the number of Nexii you're facing. Then, for each nonland card in your graveyard, lose 1 life unless you discard a random card or wound a creature you control.`,
  },
  {
    name: "Scaly Necromancer",
    cost: "1BG",
    type: "Creature - Snake",
    generateText: () =>
      `Encounter a 1/1 black and green Snake creature token with deathtouch. The enemy casts the first other creature card from the enemy graveyard if able, then exiles that card as it resolves.`,
  },
];
export default blbEnemyCards;
