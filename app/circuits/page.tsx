import Link from "next/link";
import PageHeader from "@/components/page-header";
import { circuits } from "@/lib/races";
import { ArrowUpRight } from "lucide-react";

export const metadata = { title: "Circuits — APEX" };

export default function CircuitsPage() {
  return (
    <div className="bg-carbon-950 min-h-screen">
      <PageHeader
        eyebrow="THE CALENDAR"
        title="Circuits"
        description="From the banked history of Monza to the streets of Monte Carlo — the tracks that define the championship."
      />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {circuits.map((circuit) => (
          <Link
            key={circuit.slug}
            href={`/circuits/${circuit.slug}`}
            className="group relative border border-white/[0.08] rounded-md p-6 hover:border-racing-red/50 hover:bg-white/[0.02] transition-colors focus-ring carbon-weave overflow-hidden"
          >
            <ArrowUpRight
              size={18}
              className="absolute top-6 right-6 text-white/30 group-hover:text-racing-red transition-colors"
            />
            <p className="text-white/40 text-xs tracking-wide mb-3">{circuit.country.toUpperCase()}</p>
            <h3 className="font-display font-bold text-xl leading-tight mb-6 pr-8 group-hover:text-racing-red transition-colors">
              {circuit.name}
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm font-mono text-white/50">
              <span>{circuit.length}</span>
              <span>{circuit.turns} turns</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
