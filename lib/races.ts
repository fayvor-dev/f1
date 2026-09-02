export interface Circuit {
  slug: string;
  name: string;
  country: string;
  location: string;
  length: string;
  turns: number;
  lapRecord: string;
  lapRecordHolder: string;
}

export interface Race {
  slug: string;
  round: number;
  name: string;
  circuit: string;
  circuitSlug: string;
  country: string;
  location: string;
  date: string;
  laps: number;
  raceDistance: string;
  status: "completed" | "upcoming" | "live";
  winner?: string;
  weather?: string;
}

export const circuits: Circuit[] = [
  {
    slug: "monza",
    name: "Autodromo Nazionale Monza",
    country: "Italy",
    location: "Monza",
    length: "5.793 km",
    turns: 11,
    lapRecord: "1:21.046",
    lapRecordHolder: "Rubens Barrichello, 2004",
  },
  {
    slug: "monaco",
    name: "Circuit de Monaco",
    country: "Monaco",
    location: "Monte Carlo",
    length: "3.337 km",
    turns: 19,
    lapRecord: "1:12.909",
    lapRecordHolder: "Lewis Hamilton, 2021",
  },
  {
    slug: "bahrain",
    name: "Bahrain International Circuit",
    country: "Bahrain",
    location: "Sakhir",
    length: "5.412 km",
    turns: 15,
    lapRecord: "1:31.447",
    lapRecordHolder: "Pedro de la Rosa, 2005",
  },
  {
    slug: "melbourne",
    name: "Albert Park Circuit",
    country: "Australia",
    location: "Melbourne",
    length: "5.278 km",
    turns: 14,
    lapRecord: "1:19.813",
    lapRecordHolder: "Charles Leclerc, 2024",
  },
  {
    slug: "suzuka",
    name: "Suzuka International Racing Course",
    country: "Japan",
    location: "Suzuka",
    length: "5.807 km",
    turns: 18,
    lapRecord: "1:30.983",
    lapRecordHolder: "Lewis Hamilton, 2019",
  },
  {
    slug: "shanghai",
    name: "Shanghai International Circuit",
    country: "China",
    location: "Shanghai",
    length: "5.451 km",
    turns: 16,
    lapRecord: "1:32.238",
    lapRecordHolder: "Michael Schumacher, 2004",
  },
  {
    slug: "miami",
    name: "Miami International Autodrome",
    country: "United States",
    location: "Miami",
    length: "5.412 km",
    turns: 19,
    lapRecord: "1:29.708",
    lapRecordHolder: "Max Verstappen, 2023",
  },
];

export const races: Race[] = [
  {
    slug: "bahrain-grand-prix",
    round: 1,
    name: "Bahrain Grand Prix",
    circuit: "Bahrain International Circuit",
    circuitSlug: "bahrain",
    country: "Bahrain",
    location: "Sakhir",
    date: "2026-03-01",
    laps: 57,
    raceDistance: "308.238 km",
    status: "completed",
    winner: "Max Verstappen",
  },
  {
    slug: "saudi-arabian-grand-prix",
    round: 2,
    name: "Saudi Arabian Grand Prix",
    circuit: "Jeddah Corniche Circuit",
    circuitSlug: "jeddah",
    country: "Saudi Arabia",
    location: "Jeddah",
    date: "2026-03-08",
    laps: 50,
    raceDistance: "308.45 km",
    status: "completed",
    winner: "Max Verstappen",
  },
  {
    slug: "australian-grand-prix",
    round: 3,
    name: "Australian Grand Prix",
    circuit: "Albert Park Circuit",
    circuitSlug: "melbourne",
    country: "Australia",
    location: "Melbourne",
    date: "2026-03-22",
    laps: 58,
    raceDistance: "306.124 km",
    status: "completed",
    winner: "Charles Leclerc",
  },
  {
    slug: "japanese-grand-prix",
    round: 4,
    name: "Japanese Grand Prix",
    circuit: "Suzuka International Racing Course",
    circuitSlug: "suzuka",
    country: "Japan",
    location: "Suzuka",
    date: "2026-04-05",
    laps: 53,
    raceDistance: "307.471 km",
    status: "completed",
    winner: "Max Verstappen",
  },
  {
    slug: "chinese-grand-prix",
    round: 5,
    name: "Chinese Grand Prix",
    circuit: "Shanghai International Circuit",
    circuitSlug: "shanghai",
    country: "China",
    location: "Shanghai",
    date: "2026-04-19",
    laps: 56,
    raceDistance: "305.066 km",
    status: "completed",
    winner: "Charles Leclerc",
  },
  {
    slug: "miami-grand-prix",
    round: 6,
    name: "Miami Grand Prix",
    circuit: "Miami International Autodrome",
    circuitSlug: "miami",
    country: "United States",
    location: "Miami",
    date: "2026-05-03",
    laps: 57,
    raceDistance: "308.326 km",
    status: "completed",
    winner: "Lewis Hamilton",
  },
  {
    slug: "monaco-grand-prix",
    round: 7,
    name: "Monaco Grand Prix",
    circuit: "Circuit de Monaco",
    circuitSlug: "monaco",
    country: "Monaco",
    location: "Monte Carlo",
    date: "2026-05-24",
    laps: 78,
    raceDistance: "260.286 km",
    status: "completed",
    winner: "Charles Leclerc",
  },
  {
    slug: "italian-grand-prix",
    round: 15,
    name: "Italian Grand Prix",
    circuit: "Autodromo Nazionale Monza",
    circuitSlug: "monza",
    country: "Italy",
    location: "Monza",
    date: "2026-09-06",
    laps: 53,
    raceDistance: "306.720 km",
    status: "upcoming",
    weather: "Sunny, 26°C",
  },
];

export function getNextRace(): Race {
  const upcoming = races.find((r) => r.status === "upcoming");
  return upcoming ?? races[races.length - 1];
}

export function getRaceBySlug(slug: string) {
  return races.find((r) => r.slug === slug);
}

export function getCircuitBySlug(slug: string) {
  return circuits.find((c) => c.slug === slug);
}
