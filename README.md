# APEX — Formula 1 Website

A cinematic, interactive Formula 1 website built with Next.js 14 (App Router), TypeScript, Tailwind CSS and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To build for production:

```bash
npm run build
npm start
```

## Structure

- `app/` — routes (home, drivers, teams, races, circuits, standings, news)
- `components/` — reusable UI components
- `lib/` — sample F1 data (drivers, teams, races, circuits, news, standings) — swap these for a real API/database later
- `public/images/` — car and driver photography used throughout the site

## Notes

- All race/driver/team data is local sample data for the 2026 season, structured so it can be replaced with a live API.
- Race results and live timing are simulated/static — the code is structured so a real-time feed can be wired in later.
- Fan-made concept project, not affiliated with Formula 1 or the FIA.
