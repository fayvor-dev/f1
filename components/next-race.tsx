import Link from "next/link";
import Image from "next/image";
import { getNextRace } from "@/lib/races";
import { getCircuitBySlug } from "@/lib/races";
import Countdown from "./countdown";
import { ArrowRight } from "lucide-react";

export default function NextRaceSection() {
  const race = getNextRace();
  const circuit = getCircuitBySlug(race.circuitSlug);
  const dateFormatted = new Date(race.date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="relative bg-carbon-900 border-y border-white/[0.06] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/rb-track-action.jpg"
          alt=""
          fill
          className="object-cover object-center opacity-[0.16]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-carbon-900 via-carbon-900/95 to-carbon-900/70" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 py-20 sm:py-24 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">
        <div>
          <p className="text-xs tracking-[0.2em] text-racing-red mb-4">NEXT GRAND PRIX</p>
          <h2 className="font-display font-bold text-4xl sm:text-6xl tracking-tight mb-3">
            {race.name}
          </h2>
          <p className="text-white/50 tracking-wide mb-8">
            {race.location.toUpperCase()} • {race.country.toUpperCase()}
          </p>

          <div className="flex flex-wrap gap-x-10 gap-y-3 text-sm text-white/60 mb-10 font-mono">
            <span>{dateFormatted}</span>
            <span>{race.laps} laps</span>
            {circuit && <span>{circuit.length}</span>}
            <span className="text-racing-red">{race.status.toUpperCase()}</span>
          </div>

          <Link
            href={`/races/${race.slug}`}
            className="inline-flex items-center gap-2 bg-white text-carbon-950 px-7 py-3.5 text-sm font-medium tracking-wide hover:bg-racing-red hover:text-white transition-colors focus-ring rounded-sm w-fit"
          >
            View race <ArrowRight size={16} />
          </Link>
        </div>

        <div className="w-full lg:w-[420px]">
          <Countdown target={race.date} />
        </div>
      </div>
    </section>
  );
}
