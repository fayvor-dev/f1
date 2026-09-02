import Image from "next/image";
import { notFound } from "next/navigation";
import { races, getRaceBySlug, getCircuitBySlug } from "@/lib/races";
import { drivers } from "@/lib/drivers";
import { Cloud, Flag, Gauge, Timer } from "lucide-react";

export function generateStaticParams() {
  return races.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const race = getRaceBySlug(params.slug);
  if (!race) return {};
  return { title: `${race.name} — APEX` };
}

const mockResults = (raceStatus: string) =>
  drivers
    .map((d, i) => ({
      driver: d,
      grid: i + 1,
      laps: 57,
      time: i === 0 ? "1:32:07.986" : `+${(i * 3.4 + 1.2).toFixed(3)}s`,
      points: [25, 18, 15, 12, 10, 8][i] ?? 0,
      status: "Finished",
    }))
    .sort((a, b) => a.grid - b.grid);

export default function RaceDetailPage({ params }: { params: { slug: string } }) {
  const race = getRaceBySlug(params.slug);
  if (!race) notFound();

  const circuit = getCircuitBySlug(race.circuitSlug);
  const results = race.status === "completed" ? mockResults(race.status) : null;

  return (
    <div className="bg-carbon-950 min-h-screen">
      <section className="relative pt-[76px] min-h-[55vh] overflow-hidden">
        <Image
          src="/images/rb-rain-action.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-carbon-950/70 to-carbon-950/40" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 h-full flex flex-col justify-end pb-16 pt-32">
          <p className="text-xs tracking-[0.2em] text-racing-red mb-4">
            ROUND {String(race.round).padStart(2, "0")}
          </p>
          <h1 className="font-display font-bold text-5xl sm:text-7xl tracking-tight mb-4 max-w-3xl">
            {race.name}
          </h1>
          <p className="text-white/60 tracking-wide">
            {race.location.toUpperCase()} • {race.country.toUpperCase()}
          </p>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-12 grid grid-cols-2 sm:grid-cols-4 gap-6 border-b border-white/[0.06]">
        <InfoStat icon={<Flag size={16} />} label="Date" value={formatDate(race.date)} />
        <InfoStat icon={<Gauge size={16} />} label="Laps" value={String(race.laps)} />
        <InfoStat
          icon={<Timer size={16} />}
          label="Circuit length"
          value={circuit?.length ?? "—"}
        />
        <InfoStat
          icon={<Cloud size={16} />}
          label="Weather"
          value={race.weather ?? "TBC"}
        />
      </section>

      {circuit && (
        <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 border-b border-white/[0.06]">
          <p className="text-xs tracking-[0.2em] text-racing-red mb-4">CIRCUIT</p>
          <h2 className="font-display font-bold text-3xl tracking-tight mb-6">{circuit.name}</h2>
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
            <div>
              <dt className="text-white/40 mb-1">Turns</dt>
              <dd className="font-mono">{circuit.turns}</dd>
            </div>
            <div>
              <dt className="text-white/40 mb-1">Length</dt>
              <dd className="font-mono">{circuit.length}</dd>
            </div>
            <div>
              <dt className="text-white/40 mb-1">Lap record</dt>
              <dd className="font-mono">{circuit.lapRecord}</dd>
            </div>
            <div>
              <dt className="text-white/40 mb-1">Record holder</dt>
              <dd>{circuit.lapRecordHolder}</dd>
            </div>
          </dl>
        </section>
      )}

      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <p className="text-xs tracking-[0.2em] text-racing-red mb-4">RESULTS</p>
        <h2 className="font-display font-bold text-3xl tracking-tight mb-8">
          {race.status === "completed" ? "Race classification" : "Race not yet started"}
        </h2>

        {results ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[640px]">
              <thead>
                <tr className="border-b border-white/[0.08] text-white/40 text-xs tracking-wide">
                  <th className="text-left font-normal py-3">POS</th>
                  <th className="text-left font-normal py-3">DRIVER</th>
                  <th className="text-left font-normal py-3">TEAM</th>
                  <th className="text-left font-normal py-3">TIME</th>
                  <th className="text-right font-normal py-3">POINTS</th>
                </tr>
              </thead>
              <tbody>
                {results.map((r, i) => (
                  <tr
                    key={r.driver.slug}
                    className={`border-b border-white/[0.06] ${
                      i < 3 ? "bg-white/[0.02]" : ""
                    }`}
                  >
                    <td className="py-4 font-mono">
                      <span className={i < 3 ? "text-racing-red font-semibold" : "text-white/60"}>
                        P{i + 1}
                      </span>
                    </td>
                    <td className="py-4 font-display font-medium">
                      {r.driver.firstName} {r.driver.lastName}
                    </td>
                    <td className="py-4 text-white/50">{r.driver.team}</td>
                    <td className="py-4 font-mono text-white/60">{r.time}</td>
                    <td className="py-4 font-mono text-right">{r.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-white/50">
            Results will be published here once the chequered flag falls.
          </p>
        )}
      </section>
    </div>
  );
}

function InfoStat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-racing-red mt-0.5">{icon}</span>
      <div>
        <p className="text-white/40 text-xs mb-1">{label}</p>
        <p className="font-mono text-sm">{value}</p>
      </div>
    </div>
  );
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
