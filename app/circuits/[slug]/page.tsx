import { notFound } from "next/navigation";
import { circuits, getCircuitBySlug, races } from "@/lib/races";

export function generateStaticParams() {
  return circuits.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const circuit = getCircuitBySlug(params.slug);
  if (!circuit) return {};
  return { title: `${circuit.name} — APEX` };
}

export default function CircuitDetailPage({ params }: { params: { slug: string } }) {
  const circuit = getCircuitBySlug(params.slug);
  if (!circuit) notFound();

  const race = races.find((r) => r.circuitSlug === circuit.slug);

  return (
    <div className="bg-carbon-950 min-h-screen">
      <section className="pt-[76px] bg-carbon-900 border-b border-white/[0.06] carbon-weave">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
          <p className="text-xs tracking-[0.2em] text-racing-red mb-4">
            {circuit.country.toUpperCase()}
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-6xl tracking-tight mb-4">
            {circuit.name}
          </h1>
          <p className="text-white/50">{circuit.location}</p>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 grid grid-cols-2 sm:grid-cols-4 gap-6 border-b border-white/[0.06]">
        <Stat label="Length" value={circuit.length} />
        <Stat label="Turns" value={String(circuit.turns)} />
        <Stat label="Lap record" value={circuit.lapRecord} />
        <Stat label="Record holder" value={circuit.lapRecordHolder} />
      </section>

      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <p className="text-xs tracking-[0.2em] text-racing-red mb-4">TRACK MAP</p>
        <div className="glass-card rounded-md p-10 sm:p-16 flex items-center justify-center">
          <svg
            viewBox="0 0 400 200"
            className="w-full max-w-lg text-white/30"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M40,140 C40,90 80,60 140,60 L260,60 C310,60 340,90 340,120 C340,150 310,160 280,150 C260,143 250,120 220,120 L120,120 C90,120 70,140 60,155 C50,168 40,160 40,140 Z" />
          </svg>
        </div>
        <p className="text-white/40 text-sm mt-6 max-w-lg">
          Schematic representation — not to scale. Detailed sector-by-sector telemetry data will
          connect here once a live timing feed is integrated.
        </p>
      </section>

      {race && (
        <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 border-t border-white/[0.06]">
          <p className="text-xs tracking-[0.2em] text-racing-red mb-4">HOSTS</p>
          <h2 className="font-display font-bold text-2xl tracking-tight mb-2">{race.name}</h2>
          <p className="text-white/50 text-sm">
            Round {race.round} • {race.laps} laps • {race.raceDistance}
          </p>
        </section>
      )}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass-card rounded-md p-4 sm:p-5">
      <p className="font-mono text-xl sm:text-2xl font-semibold">{value}</p>
      <p className="text-white/40 text-xs tracking-wide mt-1">{label}</p>
    </div>
  );
}
