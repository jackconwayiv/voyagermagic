export const initialPlayerStats = [
  {
    name: "Player 1",
    life: 20,
    woe: 0,
    weal: 0,
    tax: 0,
    isMonarch: false,
    counters: [],
  },
  {
    name: "Player 2",
    life: 20,
    woe: 0,
    weal: 0,
    tax: 0,
    isMonarch: false,
    counters: [],
  },
  {
    name: "Player 3",
    life: 20,
    woe: 0,
    weal: 0,
    tax: 0,
    isMonarch: false,
    counters: [],
  },
];

export const initialDeckStats = {
  library: [],
  inPlay: [],
  graveyard: [],
  exile: [],
};

export const initialGameState = {
  isLoaded: true,
  playerCount: 2,
  playerStats: initialPlayerStats,
  campaign: "",
  sceneDetails: {
    scene: 0,
    name: "",
    color: "",
    pre: "",
    post: "",
    reward: "",
  },
  nexii: [],
  enemyDeckZones: initialDeckStats,
  enemyTrickZones: initialDeckStats,
};
