export interface Team {
  slug: string;
  name: string;
  fullName: string;
  base: string;
  teamPrincipal: string;
  powerUnit: string;
  chassis: string;
  founded: number;
  championships: number;
  color: string;
  colorSecondary: string;
  championshipPosition: number;
  points: number;
  drivers: string[];
  heroImage?: string;
  cardImage?: string;
  imageAlt?: string;
  topSpeed: string;
  description: string;
}

export const teams: Team[] = [
  {
    slug: "red-bull",
    name: "Red Bull Racing",
    fullName: "Oracle Red Bull Racing",
    base: "Milton Keynes, United Kingdom",
    teamPrincipal: "Christian Horner",
    powerUnit: "Honda RBPT",
    chassis: "RB21",
    founded: 2005,
    championships: 6,
    color: "#3671C6",
    colorSecondary: "#1E3A8A",
    championshipPosition: 1,
    points: 553,
    drivers: ["max-verstappen", "sergio-perez"],
    heroImage: "/images/rb-studio-dark.jpg",
    cardImage: "/images/rb-track-action.jpg",
    imageAlt: "Red Bull Racing RB21 Formula 1 car studio shot",
    topSpeed: "352 km/h",
    description:
      "Milton Keynes' aerodynamic obsession, distilled into a car engineered to survive on the ragged edge of downforce. Red Bull builds cars that reward a driver willing to live on the limit.",
  },
  {
    slug: "ferrari",
    name: "Ferrari",
    fullName: "Scuderia Ferrari",
    base: "Maranello, Italy",
    teamPrincipal: "Frédéric Vasseur",
    powerUnit: "Ferrari",
    chassis: "SF-25",
    founded: 1950,
    championships: 16,
    color: "#E8002D",
    colorSecondary: "#7A0000",
    championshipPosition: 2,
    points: 486,
    drivers: ["charles-leclerc", "lewis-hamilton"],
    heroImage: "/images/ferrari-profile.jpg",
    cardImage: "/images/ferrari-profile.jpg",
    imageAlt: "Scuderia Ferrari SF-25 Formula 1 car in profile against black background",
    topSpeed: "348 km/h",
    description:
      "The sport's oldest and most storied team, still racing under the weight of its own history. Maranello's cars are built to be driven on instinct, at the very edge of grip.",
  },
  {
    slug: "mclaren",
    name: "McLaren",
    fullName: "McLaren F1 Team",
    base: "Woking, United Kingdom",
    teamPrincipal: "Andrea Stella",
    powerUnit: "Mercedes",
    chassis: "MCL39",
    founded: 1963,
    championships: 9,
    color: "#FF8000",
    colorSecondary: "#47C7FC",
    championshipPosition: 3,
    points: 471,
    drivers: ["lando-norris"],
    heroImage: "/images/mclaren-car-track.jpg",
    cardImage: "/images/mclaren-car-track.jpg",
    imageAlt: "McLaren MCL39 Formula 1 car cornering hard on track",
    topSpeed: "350 km/h",
    description:
      "Once the sport's perennial underachiever, McLaren has rebuilt itself into the grid's most complete package — strong through the corners, quick in a straight line, ruthless on strategy.",
  },
  {
    slug: "mercedes",
    name: "Mercedes",
    fullName: "Mercedes-AMG Petronas F1 Team",
    base: "Brackley, United Kingdom",
    teamPrincipal: "Toto Wolff",
    powerUnit: "Mercedes",
    chassis: "W16",
    founded: 2010,
    championships: 8,
    color: "#27F4D2",
    colorSecondary: "#00312B",
    championshipPosition: 4,
    points: 398,
    drivers: ["george-russell"],
    heroImage: "/images/mercedes-car-track.jpg",
    cardImage: "/images/mercedes-car-track.jpg",
    imageAlt: "Mercedes-AMG Petronas F1 car cornering on track",
    topSpeed: "349 km/h",
    description:
      "The Silver Arrows are mid-rebuild, chasing the ground-effect understanding that made them untouchable through the turbo-hybrid era. Patient, data-driven, and dangerous when it clicks.",
  },
  {
    slug: "aston-martin",
    name: "Aston Martin",
    fullName: "Aston Martin Aramco F1 Team",
    base: "Silverstone, United Kingdom",
    teamPrincipal: "Mike Krack",
    powerUnit: "Mercedes",
    chassis: "AMR25",
    founded: 2021,
    championships: 0,
    color: "#229971",
    colorSecondary: "#0B3D2E",
    championshipPosition: 5,
    points: 214,
    drivers: ["fernando-alonso", "lance-stroll"],
    heroImage: "/images/aston-martin-car-track.jpg",
    cardImage: "/images/aston-martin-car-track.jpg",
    imageAlt: "Aston Martin Aramco F1 car powering out of a corner",
    topSpeed: "347 km/h",
    description:
      "Backed by ambition and a factory built for the future, Aston Martin is still assembling the pieces of a genuine title challenger — British racing green with championship intent.",
  },
  {
    slug: "alpine",
    name: "Alpine",
    fullName: "BWT Alpine F1 Team",
    base: "Enstone, United Kingdom",
    teamPrincipal: "Oliver Oakes",
    powerUnit: "Renault",
    chassis: "A525",
    founded: 2021,
    championships: 2,
    color: "#FF87BC",
    colorSecondary: "#00303C",
    championshipPosition: 8,
    points: 112,
    drivers: ["pierre-gasly", "jack-doohan"],
    heroImage: "/images/alpine-car-track.jpg",
    cardImage: "/images/alpine-car-track.jpg",
    imageAlt: "BWT Alpine F1 car leaning into a corner past a yellow apex marker",
    topSpeed: "344 km/h",
    description:
      "Enstone's tricolore squad is rebuilding around a young driver lineup, betting that patience through a difficult regulation cycle pays off when the rules reset.",
  },
];

export function getTeamBySlug(slug: string) {
  return teams.find((t) => t.slug === slug);
}
