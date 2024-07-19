//refactor to use class factory to spit out repeat props such as isDead, counters, etc.

export const nexiiData = [
  {
    campaign: "BLB",
    scene: 7,
    id: "a",
    name: "Steaming Breath",
    color: "U",
    life: 20,
    isDead: false,
    isEnraged: false,
    isMonarch: false,
    counters: [],
    aliveRules: [
      "⚔️ At the end of combat, roll a d6 for each creature that struck me. On a 1 or 2, return that creature to its owner's hand.",
    ],
    deadRules: [""],
  },
  {
    campaign: "BLB",
    scene: 7,
    id: "b",
    name: "Flaming Paws",
    color: "R",
    life: 20,
    isDead: false,
    isEnraged: false,
    isMonarch: false,
    counters: [],
    aliveRules: [
      "⏳ On upkeep, each player rolls a d6. On 1 or 2, that player must blight an (unblighted nonbasic) land they control.",
    ],
    deadRules: [""],
  },
  {
    campaign: "BLB",
    scene: 6,
    id: "a",
    name: "Venomous Teeth",
    color: "B",
    life: 20,
    isDead: false,
    isEnraged: false,
    isMonarch: false,
    counters: [],
    aliveRules: [
      "⚔️ Whenever a foe strikes a player creature, prevent 1 of that damage and wound that creature.",
    ],
    deadRules: ["♾️ Wounded creatures can't block alone."],
  },
  {
    campaign: "BLB",
    scene: 6,
    id: "b",
    name: "Thick Scales",
    color: "G",
    life: 20,
    isDead: false,
    isEnraged: false,
    isMonarch: false,
    counters: [],
    aliveRules: [
      "⏳ On upkeep, each player rolls a d6. On 1 or 2, that player puts a shield counter on a foe they're facing (without a shield counter).",
    ],
    deadRules: ["⚔️ Prevent all combat damage that would be dealt to foes with shield counters.", "⚔️ Foes with shield counters have double strike."],
  },
  {
    campaign: "BLB",
    scene: 5,
    id: "a",
    name: "Muckwallow",
    color: "U",
    life: 20,
    isDead: false,
    isEnraged: false,
    isMonarch: false,
    counters: [],
    aliveRules: [
      "♾️ Noncreature spells cost (1) more to cast.",
      "♾️ It costs (1) per creature to attack me.",
    ],
    deadRules: [""],
  },
  {
    campaign: "BLB",
    scene: 4,
    id: "a",
    name: "Bumblepollen",
    color: "W",
    life: 20,
    isDead: false,
    isEnraged: false,
    isMonarch: false,
    counters: [],
    aliveRules: [
      "⚔️ Whenever a creature strikes me, tap and stun that creature.",
      // "⏳ On upkeep, I gain 1 life for each tapped player creature.",
    ],
    deadRules: [""],
  },
  {
    campaign: "BLB",
    scene: 1,
    id: "a",
    name: "Panthtar",
    color: "B",
    life: 20,
    isDead: false,
    isEnraged: false,
    isMonarch: false,
    counters: [],
    aliveRules: [
      "⏳ On upkeep, each player exiles the top card of their library.",
      "⚔️ At the end of each combat, if any of your creatures struck me, you may cast a creature I've exiled by paying life equal to its mana value instead of its normal cost.",
    ],
    deadRules: [""],
  },
  {
    campaign: "BLB",
    scene: 3,
    id: "a",
    name: "Thorncupine",
    color: "G",
    life: 20,
    isDead: false,
    isEnraged: false,
    isMonarch: false,
    counters: [],
    aliveRules: [
      "⚔️ Whenever a creature strikes me, wound it.",
      "⏳ On enemy upkeep, each player without a wounded creature gets a Woe counter.",
    ],
    deadRules: [""],
  },

  {
    campaign: "BLB",
    scene: 2,
    id: "a",
    name: "Scalding Steamsnake",
    color: "R",
    life: 20,
    isDead: false,
    isEnraged: false,
    isMonarch: false,
    counters: [],
    aliveRules: [
      "💥 Whenever you cast a spell or a nonbasic land enters under your control, I deal 1 damage to you.",
    ],
    deadRules: [""],
  },
];
