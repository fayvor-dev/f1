import { drivers } from "./drivers";
import { teams } from "./teams";

export function getDriverStandings() {
  return [...drivers].sort((a, b) => a.championshipPosition - b.championshipPosition);
}

export function getConstructorStandings() {
  return [...teams].sort((a, b) => a.championshipPosition - b.championshipPosition);
}
