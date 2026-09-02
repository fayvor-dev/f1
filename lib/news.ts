export interface NewsArticle {
  slug: string;
  category: "Race Weekend" | "Drivers" | "Teams" | "Technology" | "Analysis";
  headline: string;
  excerpt: string;
  date: string;
  readingTime: string;
  image?: string;
  body: string[];
}

export const news: NewsArticle[] = [
  {
    slug: "verstappen-extends-lead-monza",
    category: "Race Weekend",
    headline: "Verstappen stretches championship lead ahead of home stretch",
    excerpt:
      "A dominant qualifying lap at Monza puts the Dutchman on pole for the Italian Grand Prix, with the title fight entering its final third.",
    date: "2026-09-01",
    readingTime: "4 min read",
    image: "/images/rb-track-action.jpg",
    body: [
      "Max Verstappen produced the lap of the weekend through Monza's high-speed chicanes, edging out the Ferrari of Charles Leclerc by two tenths to claim pole position for Sunday's Italian Grand Prix.",
      "The result extends Red Bull's advantage at the top of both championships heading into the final third of the season, with nine rounds remaining.",
      "Team principal comments after the session pointed to a car that has found a new gear since the summer break, with upgrades to the floor and rear wing translating directly into lap time at one of the calendar's most demanding power circuits.",
    ],
  },
  {
    slug: "ferrari-upgrade-package",
    category: "Technology",
    headline: "Inside Ferrari's floor upgrade: what changed and why it matters",
    excerpt:
      "A closer look at the aerodynamic package Maranello brought to the second half of the season, and the gains it has unlocked in high-speed corners.",
    date: "2026-08-24",
    readingTime: "6 min read",
    image: "/images/ferrari-profile.jpg",
    body: [
      "Ferrari's technical department has spent the summer break refining the floor edge and diffuser strakes on the SF-25, chasing the kind of ground-effect efficiency that has kept Red Bull ahead through the regulation cycle.",
      "Early data from practice sessions suggests the changes have closed the high-speed cornering deficit that had been costing the team lap time at circuits like Silverstone and Spa.",
      "The upgrade arrives at a pivotal moment in the constructors' standings, with Ferrari looking to consolidate second place and keep pressure on the championship leaders.",
    ],
  },
  {
    slug: "hamilton-first-season-ferrari",
    category: "Drivers",
    headline: "Hamilton on year one at Ferrari: 'Still learning, still hungry'",
    excerpt:
      "The seven-time champion reflects on a transitional first season in red, and what needs to change heading into next year.",
    date: "2026-08-18",
    readingTime: "5 min read",
    image: "/images/hamilton-portrait.jpg",
    body: [
      "Lewis Hamilton's move to Scuderia Ferrari was billed as one of the biggest driver transfers in the sport's history, and a season in, the seven-time champion says the adaptation has taken longer than expected.",
      "Speaking ahead of the Italian Grand Prix, Hamilton pointed to differences in car philosophy and team workflow as the biggest adjustments, while praising the atmosphere inside the Maranello garage.",
      "With his contract running multiple seasons, both driver and team have been clear that the current campaign is about building a foundation rather than chasing immediate results.",
    ],
  },
  {
    slug: "mclaren-title-fight",
    category: "Analysis",
    headline: "Can McLaren still turn a strong car into a title fight?",
    excerpt:
      "Lando Norris sits third in the standings with a car capable of winning most weekends. What's standing between McLaren and a serious championship bid.",
    date: "2026-08-10",
    readingTime: "5 min read",
    body: [
      "McLaren's MCL39 has been one of the fastest cars on the grid for much of the season, yet the team sits third in the constructors' championship, behind both Red Bull and Ferrari.",
      "Strategy calls and a handful of costly retirements have blunted what should have been a stronger points tally, according to team principal Andrea Stella.",
      "With nine rounds remaining, the team's focus has shifted to converting single-lap pace into consistent race-day results.",
    ],
  },
  {
    slug: "aston-martin-2027-regulations",
    category: "Teams",
    headline: "Aston Martin doubles down on 2027 as new rules loom",
    excerpt:
      "With a new factory complete and a fresh set of technical regulations on the horizon, Aston Martin is betting its resources on the next era of Formula 1.",
    date: "2026-07-29",
    readingTime: "4 min read",
    body: [
      "Aston Martin's Silverstone campus, completed at the start of the year, was always intended to be a platform for a longer-term championship push rather than an immediate one.",
      "With new technical regulations arriving in 2027, the team has quietly begun reallocating development resources away from the current car and toward its next-generation project.",
      "It's a calculated gamble: sacrifice results now in a season that was unlikely to produce a title challenge anyway, in exchange for a stronger starting position when the rules reset.",
    ],
  },
  {
    slug: "monza-fan-guide",
    category: "Race Weekend",
    headline: "The Temple of Speed: a fan's guide to race week at Monza",
    excerpt:
      "Everything to know about Formula 1's fastest circuit, from the history of the banked oval to where to stand for the best view of Parabolica.",
    date: "2026-07-15",
    readingTime: "3 min read",
    image: "/images/rb-rain-action.jpg",
    body: [
      "Monza has hosted a round of the world championship in all but one year since 1950, making it the closest thing Formula 1 has to a spiritual home.",
      "The circuit's long straights and light-downforce setups produce some of the highest top speeds of the season, testing power units and cooling systems to their limits.",
      "For fans attending in person, the Curva Grande grandstands and the old banked oval remain the best vantage points to feel the full force of a Formula 1 car at speed.",
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return news.find((n) => n.slug === slug);
}
