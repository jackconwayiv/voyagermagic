export const initialGameState = {
  isLoaded: true,
  playerCount: 2,
  playerStats: [
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
  ],
  campaign: "BLB", //""
  scene: 0,
  nexii: [],
  enemyDeckZones: { library: [], inPlay: [], graveyard: [], exile: [] },
  enemyTrickZones: { library: [], inPlay: [], graveyard: [], exile: [] },
};
