export interface Counter {
  name: string;
  count: number;
}

export interface Player {
  name: string;
  life: number;
  woe: number;
  weal: number;
  tax: number;
  isMonarch: boolean;
  counters: Counter[];
}

export interface Nexus {
  campaign: string;
  scene: number;
  id: string;
  name: string;
  color: string;
  life: number;
  isDead: boolean;
  isEnraged: boolean;
  isMonarch: boolean;
  counters: Counter[];
  aliveRules: string[];
  deadRules: string[];
}

export interface Scene {
  scene: number;
  name: string;
  color: string;
  pre: string;
  post: string;
  reward: string;
}

export interface TextGenerator {
  (gameState: GameState): string;
}
export interface Card {
  name: string;
  cost: string;
  type: string;
  generateText: TextGenerator;
}
export interface Deck {
  library: Card[];
  inPlay: Card[];
  graveyard: Card[];
  exile: Card[];
}
export interface GameState {
  isLoaded: boolean;
  playerCount: number;
  playerStats: Player[];
  campaign: string;
  sceneDetails: Scene;
  nexii: Nexus[];
  enemyDeckZones: Deck;
  enemyTrickZones: Deck;
}
