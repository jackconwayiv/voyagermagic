import { TextGenerator } from "./cardConstructor";

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
export interface GameState {
  isLoaded: boolean;
  playerCount: number;
  playerStats: Player[];
  campaign: string;
  scene: number;
  nexii: Nexus[];
}
export interface Card {
  name: string;
  cost: string;
  type: string;
  generateText: TextGenerator;
}

export interface Scene {
  scene: number;
  name: string;
  color: string;
  pre: string;
  post: string;
  reward: string;
}
