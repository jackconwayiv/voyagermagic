import { TextGenerator } from "./cardConstructor";

export interface Nexus {
  color: string;
  name: string;
  aliveRules: string;
  deadRules: string;
}
export interface Card {
  name: string;
  cost: string;
  type: string;
  generateText: TextGenerator;
}
