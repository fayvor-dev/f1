export interface Driver {
  slug: string;
  number: number;
  firstName: string;
  lastName: string;
  nationality: string;
  countryCode: string;
  dateOfBirth: string;
  team: string;
  teamSlug: string;
  championshipPosition: number;
  points: number;
  wins: number;
  podiums: number;
  poles: number;
  careerStarts: number;
  championships: number;
  positionChange: number;
  image?: string;
  imageAlt?: string;
  bio: string;
  seasonPoints: number[];
  raceResults: {
    race: string;
    qualifying: number;
    grid: number;
    finish: number | "DNF";
    points: number;
  }[];
}

export const drivers: Driver[] = [
  {
    slug: "max-verstappen",
    number: 1,
    firstName: "Max",
    lastName: "Verstappen",
    nationality: "Dutch",
    countryCode: "NL",
    dateOfBirth: "1997-09-30",
    team: "Oracle Red Bull Racing",
    teamSlug: "red-bull",
    championshipPosition: 1,
    points: 366,
    wins: 8,
    podiums: 13,
    poles: 6,
    careerStarts: 214,
    championships: 4,
    positionChange: 0,
    image: "/images/verstappen-red.jpg",
    imageAlt: "Max Verstappen in Oracle Red Bull Racing overalls holding his helmet",
    bio: "Four-time world champion, Verstappen remains the benchmark for one-lap pace and race management under pressure. Ruthless on cold tyres, immovable in a fight.",
    seasonPoints: [25, 43, 61, 85, 110, 134, 152, 181, 205, 229, 254, 278, 296, 318, 341, 366],
    raceResults: [
      { race: "Bahrain GP", qualifying: 1, grid: 1, finish: 1, points: 25 },
      { race: "Saudi Arabian GP", qualifying: 2, grid: 2, finish: 1, points: 25 },
      { race: "Australian GP", qualifying: 1, grid: 1, finish: 2, points: 18 },
      { race: "Japanese GP", qualifying: 1, grid: 1, finish: 1, points: 25 },
      { race: "Chinese GP", qualifying: 3, grid: 3, finish: "DNF", points: 0 },
      { race: "Miami GP", qualifying: 2, grid: 2, finish: 1, points: 25 },
    ],
  },
  {
    slug: "charles-leclerc",
    number: 16,
    firstName: "Charles",
    lastName: "Leclerc",
    nationality: "Monégasque",
    countryCode: "MC",
    dateOfBirth: "1997-10-16",
    team: "Scuderia Ferrari",
    teamSlug: "ferrari",
    championshipPosition: 2,
    points: 298,
    wins: 4,
    podiums: 11,
    poles: 5,
    careerStarts: 148,
    championships: 0,
    positionChange: 1,
    image: "/images/leclerc-portrait.jpg",
    imageAlt: "Charles Leclerc in Scuderia Ferrari race suit resting on his helmet",
    bio: "Leclerc pairs raw qualifying speed with a growing tactical maturity, dragging Ferrari's package into contention weekend after weekend at Maranello's home team.",
    seasonPoints: [18, 33, 52, 70, 89, 112, 130, 151, 172, 190, 214, 236, 255, 276, 298],
    raceResults: [
      { race: "Bahrain GP", qualifying: 2, grid: 2, finish: 3, points: 18 },
      { race: "Saudi Arabian GP", qualifying: 3, grid: 3, finish: 2, points: 18 },
      { race: "Australian GP", qualifying: 2, grid: 2, finish: 1, points: 25 },
      { race: "Japanese GP", qualifying: 4, grid: 4, finish: 3, points: 16 },
      { race: "Chinese GP", qualifying: 1, grid: 1, finish: 1, points: 25 },
      { race: "Miami GP", qualifying: 5, grid: 5, finish: 4, points: 13 },
    ],
  },
  {
    slug: "lewis-hamilton",
    number: 44,
    firstName: "Lewis",
    lastName: "Hamilton",
    nationality: "British",
    countryCode: "GB",
    dateOfBirth: "1985-01-07",
    team: "Scuderia Ferrari",
    teamSlug: "ferrari",
    championshipPosition: 4,
    points: 241,
    wins: 2,
    podiums: 8,
    poles: 2,
    careerStarts: 356,
    championships: 7,
    positionChange: -1,
    image: "/images/hamilton-portrait.jpg",
    imageAlt: "Lewis Hamilton in Scuderia Ferrari red race suit leaning on his yellow-visored helmet",
    bio: "The most decorated driver on the grid, Hamilton brought two decades of race-craft to Maranello and is still finding the edges of a new car and a new team culture.",
    seasonPoints: [15, 27, 40, 58, 74, 91, 105, 124, 142, 159, 178, 196, 214, 228, 241],
    raceResults: [
      { race: "Bahrain GP", qualifying: 5, grid: 5, finish: 5, points: 10 },
      { race: "Saudi Arabian GP", qualifying: 4, grid: 4, finish: 4, points: 12 },
      { race: "Australian GP", qualifying: 3, grid: 3, finish: 5, points: 10 },
      { race: "Japanese GP", qualifying: 6, grid: 6, finish: 6, points: 8 },
      { race: "Chinese GP", qualifying: 4, grid: 4, finish: 2, points: 18 },
      { race: "Miami GP", qualifying: 3, grid: 3, finish: 1, points: 25 },
    ],
  },
  {
    slug: "lando-norris",
    number: 4,
    firstName: "Lando",
    lastName: "Norris",
    nationality: "British",
    countryCode: "GB",
    dateOfBirth: "1999-11-13",
    team: "McLaren F1 Team",
    teamSlug: "mclaren",
    championshipPosition: 3,
    points: 279,
    wins: 3,
    podiums: 10,
    poles: 4,
    careerStarts: 132,
    championships: 0,
    positionChange: 0,
    bio: "Norris has turned McLaren's resurgence into genuine title pace, combining smooth inputs with a sharpened race start that finally matches his qualifying speed.",
    seasonPoints: [12, 30, 48, 66, 88, 106, 128, 148, 166, 190, 208, 228, 248, 264, 279],
    raceResults: [
      { race: "Bahrain GP", qualifying: 4, grid: 4, finish: 4, points: 12 },
      { race: "Saudi Arabian GP", qualifying: 1, grid: 1, finish: 3, points: 15 },
      { race: "Australian GP", qualifying: 4, grid: 4, finish: 3, points: 15 },
      { race: "Japanese GP", qualifying: 2, grid: 2, finish: 2, points: 18 },
      { race: "Chinese GP", qualifying: 5, grid: 5, finish: 4, points: 12 },
      { race: "Miami GP", qualifying: 1, grid: 1, finish: 2, points: 18 },
    ],
  },
  {
    slug: "george-russell",
    number: 63,
    firstName: "George",
    lastName: "Russell",
    nationality: "British",
    countryCode: "GB",
    dateOfBirth: "1998-02-15",
    team: "Mercedes-AMG Petronas",
    teamSlug: "mercedes",
    championshipPosition: 5,
    points: 213,
    wins: 1,
    podiums: 6,
    poles: 2,
    careerStarts: 130,
    championships: 0,
    positionChange: 2,
    bio: "The de facto leader of the Silver Arrows rebuild, Russell brings clinical strategy calls and consistent points-scoring to a team still chasing its next title-winning car.",
    seasonPoints: [10, 20, 38, 52, 70, 84, 100, 118, 134, 150, 168, 184, 198, 213],
    raceResults: [
      { race: "Bahrain GP", qualifying: 6, grid: 6, finish: 6, points: 8 },
      { race: "Saudi Arabian GP", qualifying: 5, grid: 5, finish: 5, points: 10 },
      { race: "Australian GP", qualifying: 5, grid: 5, finish: 4, points: 12 },
      { race: "Japanese GP", qualifying: 3, grid: 3, finish: 4, points: 12 },
      { race: "Chinese GP", qualifying: 6, grid: 6, finish: 5, points: 10 },
      { race: "Miami GP", qualifying: 4, grid: 4, finish: 3, points: 15 },
    ],
  },
  {
    slug: "sergio-perez",
    number: 11,
    firstName: "Sergio",
    lastName: "Pérez",
    nationality: "Mexican",
    countryCode: "MX",
    dateOfBirth: "1990-01-26",
    team: "Oracle Red Bull Racing",
    teamSlug: "red-bull",
    championshipPosition: 6,
    points: 187,
    wins: 0,
    podiums: 4,
    poles: 0,
    careerStarts: 288,
    championships: 0,
    positionChange: -1,
    bio: "Pérez remains Red Bull's tyre-management specialist, tasked with turning steady points into a Constructors' cushion while Verstappen fights up front.",
    seasonPoints: [8, 16, 28, 42, 58, 70, 86, 100, 114, 128, 144, 160, 174, 187],
    raceResults: [
      { race: "Bahrain GP", qualifying: 8, grid: 8, finish: 7, points: 6 },
      { race: "Saudi Arabian GP", qualifying: 7, grid: 7, finish: 6, points: 8 },
      { race: "Australian GP", qualifying: 8, grid: 8, finish: 8, points: 4 },
      { race: "Japanese GP", qualifying: 7, grid: 7, finish: 5, points: 10 },
      { race: "Chinese GP", qualifying: 9, grid: 9, finish: 7, points: 6 },
      { race: "Miami GP", qualifying: 6, grid: 6, finish: 5, points: 10 },
    ],
  },
];

export function getDriverBySlug(slug: string) {
  return drivers.find((d) => d.slug === slug);
}
