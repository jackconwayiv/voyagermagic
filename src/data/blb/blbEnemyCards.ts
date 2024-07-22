import { Card } from "../types";

const blbEnemyCards: Card[] = [
  {
    name: "Brazen Bladeblinder",
    cost: "2WW",
    type: "Creature - Weasel",
    generateText: () =>
      `Encounter a 2/2 white and black Weasel creature token with lifelink, then tap each creature you control with 3 or greater power.`,
  },
  {
    name: "Morale Boost",
    cost: "2WW",
    type: "Enchantment",
    generateText: () =>
      `Encounter a "Morale Boost" enchantment token with: "Whenever a creature strikes you, it grows." Then you get 3 Woe counters.`,
  },
  {
    name: "Vole Hole",
    cost: "3W",
    type: "Enchantment",
    generateText: () =>
      `Encounter a "Vole Hole" enchantment token with: "On enemy upkeep, encounter a 2/2 red and white Vole creature token with first strike."`,
  },

  // ===========

  {
    name: "Foes from the Pond",
    cost: "5UU",
    type: "Sorcery",
    generateText: () =>
      `Encounter each: a 2/2 white- blue flying Fish; a 1/3 blue- black skulk Snail; a 2/2 blue- red provoke Fox; and a 2/3 green- blue hexproof Beaver.`,
  },
  {
    name: "The Upheaval",
    cost: "2UU",
    type: "Legendary Sorcery - Event",
    generateText: () =>
      `After all other enemy cards have resolved, return all nonland permanents in play to their owner's hands. Get 1 Woe for each enemy permanent that leaves your battleground this way.`,
  },
  {
    name: "Formation of Fishes",
    cost: "2U",
    type: "Creature - Fish",
    generateText: () =>
      `Encounter a 2/2 white and blue Fish creature token with flying. Your foes gain flying until end of turn.`,
  },
  {
    name: "Toothy Dambreaker",
    cost: "4UU",
    type: "Creature - Beaver",
    generateText: () =>
      `Encounter a 2/3 green and blue Beaver creature token with hexproof. For each 3 lands you control (rounded down) return a creature you control with highest mana value to its owner's hand.`,
  },
  {
    name: "Cunning Fox-Mage",
    cost: "4UU",
    type: "Creature - Fox",
    generateText: () =>
      `Encounter a 2/2 blue and red Fox creature token with provoke. Spellbind a card in your hand with the greatest mana value.`,
  },
  {
    name: "Beaver of Ill Tidings",
    cost: "2U",
    type: "Creature - Beaver",
    generateText: () =>
      `Encounter a 2/3 green and blue Beaver creature token with hexproof. You get 2 Woe counters.`,
  },
  {
    name: "Croaking Augury",
    cost: "2UU",
    type: "Sorcery",
    generateText: () =>
      `You get X Woe counters, where X is the number of lands you control.`,
  },
  {
    name: "Cat Nap",
    cost: "2U",
    type: "Sorcery",
    generateText: () =>
      `For each creature you control, pay (1) or exile it. Return all creatures exiled this way to play at the beginning of the next end step.`,
  },
  {
    name: "Squirefisher",
    cost: "3UU",
    type: "Creature - Fish",
    generateText: () =>
      `Encounter a 2/2 white and blue Fish creature token with flying. Then mill 3 cards. For each creature card you mill this way, put a +1/+1 counter on each enemy Fish you're facing.`,
  },
  {
    name: "Greater Spellbinding",
    cost: "3U",
    type: "Sorcery",
    generateText: () =>
      `Spellbind the X cards in your hand with the greatest mana value, where X is the number of Nexii you're facing.`,
  },
  {
    name: "Runaround Rascal",
    cost: "2UU",
    type: "Creature - Fox",
    generateText: () =>
      `Encounter a 2/2 blue and red Fox creature token with provoke. Discard your hand, then draw that many cards.`,
  },
  {
    name: "Tears for the Fallen",
    cost: "1UU",
    type: "Sorcery",
    generateText: () =>
      `Get X Woe counters, where X is 2 plus the number of cards in your graveyard.`,
  },
  {
    name: "Nightwhorl Stalker",
    cost: "2U",
    type: "Creature - Snail",
    generateText: () =>
      `Encounter a 1/3 blue and black Snail creature token with skulk. Then tap each creature you control with the lowest power.`,
  },
  {
    name: "Snail Squadron",
    cost: "5U",
    type: "Creature - Snail",
    generateText: () =>
      `Encounter two 1/3 blue and black Snail creature tokens with skulk. Then mill X cards, where X is the number of foes you're facing.`,
  },
  {
    name: "Woestruck",
    cost: "1UU",
    type: "Enchantment",
    generateText: () =>
      `Encounter a "Woestruck" enchantment token with: "Whenever a creature strikes you, mill that many cards." Then you get 3 Woe counters.`,
  },
  {
    name: "Frozen Footing",
    cost: "1U",
    type: "Enchantment",
    generateText: () =>
      `Encounter a "Frozen Footing" enchantment token with: "On enemy upkeep, tap an untapped creature you control." Then you get 3 Woe counters.`,
  },
  {
    name: "Clawtrap the Crab",
    cost: "4UU",
    type: "Creature - Elemental Crab",
    generateText: () =>
      `Encounter a 3/3 blue Crab creature token named "Clawtrap" with hexproof and ensnare and "I get +1/+1 for each Woe counter you have."`,
  },
  {
    name: "Aera the Albatross",
    cost: "4UU",
    type: "Creature - Elemental Bird",
    generateText: () =>
      `Encounter a 1/1 blue Bird creature token named "Aera" with flying and "Whenever a creature blocks me, return it to its owner's hand." Then it grows once for each Nexus you're facing.`,
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
    name: "Lose Your Mind",
    cost: "2B",
    type: "Sorcery",
    generateText: () =>
      `Discard 2 cards. If you're opulent, instead discard 2 cards at random.`,
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
      `Encounter a "War Wounds" enchantment token with: "Whenever a creature you control attacks or blocks, you lose 1 life." Then you get 3 Woe counters.`,
  },
  {
    name: "Death's Burden",
    cost: "2B",
    type: "Enchantment",
    generateText: () =>
      `Encounter a "Death's Burden" enchantment token with: "Whenever any creature in your battleground dies, you mill a card and lose 1 life." Then you get 3 Woe counters.`,
  },
  {
    name: "Beguiling Gastropod",
    cost: "2B",
    type: "Creature - Snail",
    generateText: () =>
      `Encounter a 1/3 blue and black Snail creature token with skulk. Discard a random card from your hand.`,
  },
  {
    name: "Deftshell Smuggler",
    cost: "2BB",
    type: "Creature - Snail",
    generateText: () =>
      `Encounter a 1/3 blue and black Snail creature token with skulk. Each player mills X cards, where X is the highest toughness among their foes.`,
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
    type: "Creature - Elemental Bat",
    generateText: () =>
      `Mill 2 cards, then encounter a */* black Bat creature token named "Bloodscream" with flying and "My power and toughness are each equal to the number of cards in your graveyard."`,
  },
  {
    name: "Gashtooth the Gator",
    cost: "4BB",
    type: "Creature - Elemental Alligator",
    generateText: () =>
      `Discard a random card, then encounter a 1/1 black Alligator creature token named "Gashtooth" with menace and "I get +1/+1 for each card in your hand fewer than 7."`,
  },
  {
    name: "Foes from the Hills",
    cost: "5RR",
    type: "Sorcery",
    generateText: () =>
      `Encounter each: a 2/2 red- white first strike Vole; a 2/2 blue- red provoke Fox; a 2/2 black- red afflict 2 Porcupine; and a 3/3 red- green trample Badger.`,
  },
  {
    name: "The Ruination",
    cost: "2RR",
    type: "Legendary Sorcery - Event",
    generateText: () =>
      `After all other enemy cards have resolved, destroy all artifacts in play. Each player blights X (unblighted) (nonbasic) lands they control, where X is the number of Nexii you're facing.`,
  },
  {
    name: "Earthquake",
    cost: "1RR",
    type: "Sorcery",
    generateText: () =>
      `Deal X damage to each nonflying creature in your battleground, where X is the number of Nexii you're facing. If no creatures are damaged this way, you get 3 Woe.`,
  },
  {
    name: "Woeful Flames",
    cost: "2RR",
    type: "Sorcery",
    generateText: () =>
      `You get 3 Woe. Then consume all your Woe. Deal that much damage to target creature you control with the highest rarity and toughness this damage could kill. If no targets, get 3 Woe.`,
  },
  {
    name: "Feral Ferocity",
    cost: "2RR",
    type: "Enchantment",
    generateText: () =>
      `Encounter a "Feral Ferocity" enchantment token with: "Your foes have double-strike." Then you get 3 Woe counters.`,
  },
  {
    name: "Wages of War",
    cost: "4R",
    type: "Sorcery",
    generateText: () =>
      `Encounter a 2/2 red and white Vole creature token with first strike. Then this spell deals X damage to you, where X is the number of creatures in your battleground.`,
  },
  {
    name: "High Ground",
    cost: "2R",
    type: "Enchantment",
    generateText: () =>
      `Encounter a "High Ground" enchantment token with: "Whenever you encounter a foe with power 2 or less, it deals 1 damage to you." Then you get 3 Woe counters.`,
  },
  {
    name: "Zealous Hearts",
    cost: "2RR",
    type: "Enchantment",
    generateText: () =>
      `Encounter a "Zealous Hearts" enchantment token with: "Your creatures attack each combat if able." Then you get 3 Woe counters.`,
  },
  {
    name: "Spiny Spoiler",
    cost: "2R",
    type: "Creature - Porcupine",
    generateText: () =>
      `Encounter a 2/2 black and red Porcupine creature token with afflict 2. Then blight an (unblighted) (nonbasic) land you control.`,
  },
  {
    name: "Quillshot Archer",
    cost: "3RR",
    type: "Creature - Porcupine",
    generateText: () =>
      `Encounter a 2/2 black and red Porcupine creature token with afflict 2. Put a -1/-1 counter on X target creatures you control, where X is the number of Nexii you're facing.`,
  },
  {
    name: "Badlands Ruffian",
    cost: "2RR",
    type: "Creature - Badger",
    generateText: () =>
      `Encounter a 3/3 red and green Badger creature token with trample. Then, if you control a blighted land, put a +1/+1 counter on each enemy Badger you're facing.`,
  },
  {
    name: "Snarlfur Brute",
    cost: "2RR",
    type: "Creature - Badger",
    generateText: () =>
      `Encounter a 3/3 red and green Badger creature token with trample. Then it fights a random creature you control with toughness less than or equal to its power if able.`,
  },
  {
    name: "Vulpine Arsonist",
    cost: "3RR",
    type: "Creature - Fox",
    generateText: () =>
      `Encounter a 2/2 blue and red Fox creature token with provoke. It deals 1 damage to each creature you control.`,
  },
  {
    name: "Foxy Shortcutter",
    cost: "3R",
    type: "Creature - Fox",
    generateText: () =>
      `Encounter a 2/2 blue and red Fox creature token with provoke. Your foes gain menace until end of turn.`,
  },
  {
    name: "Valiant Vole",
    cost: "2R",
    type: "Creature - Vole",
    generateText: () =>
      `Encounter a 2/2 red and white Vole creature token with first strike. Your foes get +2/+0 until end of turn.`,
  },
  {
    name: "Scalding Swordsman",
    cost: "2R",
    type: "Creature - Vole",
    generateText: () =>
      `Encounter a 2/2 red and white Vole creature token with first strike. Your foes gain wither until end of turn.`,
  },
  {
    name: "Hensy the Firehawk",
    cost: "4RR",
    type: "Creature - Elemental Bird",
    generateText: () =>
      `Encounter a 4/4 red Bird creature token named "Hensy" with flying and "Whenever you cast a noncreature spell, I deal damage to you equal to that spell's mana value."`,
  },
  {
    name: "Ambrose the Bloodboar",
    cost: "4RR",
    type: "Creature - Elemental Boar",
    generateText: () =>
      `Encounter a 4/4 red Boar creature token named "Ambrose" with menace and trample and "Whenever I strike you, I grow."`,
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
    name: "Bolstered Beasts",
    cost: "4GG",
    type: "Sorcery",
    generateText: () =>
      `Encounter a 3/3 red and green Badger creature token with trample. Then put X +1/+1 counters on each foe you're facing, where X is the number of Nexii you're facing.`,
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
      `Exile up to X cards from your graveyard, where X is the number of your lands. For each nonland card exiled this way, each Nexus gains 3 life. For each card you can't exile, you get a Woe counter.`,
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
      `Encounter a "Nature's Might" enchantment token with: "Your foes enter play with an additional +1/+1 counter on them." Then put a +1/+1 counter on each foe you're facing.`,
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
    type: "Creature - Elemental Bear",
    generateText: () =>
      `Encounter a */* green Bear creature token named "Barkbellow" with trample and "My power and toughness are each equal to the number of lands you control."`,
  },
  {
    name: "Wranglefur the Wolf",
    cost: "4GG",
    type: "Creature - Elemental Wolf",
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
      `Encounter a 2/3 green and blue Beaver creature token with hexproof. Destroy target artifact or enchantment you control with the highest mana value, then get that many Woe counters.`,
  },
  {
    name: "Gravehiss Ritual",
    cost: "3BG",
    type: "Sorcery",
    generateText: () =>
      `Mill X cards, where X is twice the number of Nexii you're facing. Then, for each nonland card in your graveyard, lose 1 life unless you discard a random card or wound a creature you control.`,
  },
  {
    name: "Twin Slitherers",
    cost: "1BG",
    type: "Creature - Snake",
    generateText: () =>
      `Encounter two 1/1 black and green Snake creature tokens with deathtouch. Then put a +1/+1 counter on each enemy Snake you're facing.`,
  },
  {
    name: "Traitorous Blow",
    cost: "3UR",
    type: "Sorcery",
    generateText: () =>
      `Target creature you control with the greatest power strikes you. Then return it to its owner's hand. If there is no target, you get 3 Woe counters.`,
  },
  {
    name: "Plotting Pair",
    cost: "2UR",
    type: "Creature - Fox",
    generateText: () =>
      `Encounter two 2/2 blue and red Fox creature tokens with provoke. Then get a Woe counter for each enemy Fox you're facing.`,
  },
];
export default blbEnemyCards;
