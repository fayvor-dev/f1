import Image from "next/image";
import { notFound } from "next/navigation";
import { drivers, getDriverBySlug } from "@/lib/drivers";
import { teams } from "@/lib/teams";
import AnimatedCounter from "@/components/animated-counter";
import SeasonChart from "@/components/season-chart";

export function generateStaticParams() {
  return drivers.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const driver = getDriverBySlug(params.slug);
  if (!driver) return {};
  return { title: `${driver.firstName} ${driver.lastName} — APEX` };
}

export default function DriverDetailPage({ params }: { params: { slug: string } }) {
  const driver = getDriverBySlug(params.slug);
  if (!driver) notFound();

  const team = teams.find((t) => t.slug === driver.teamSlug);

  return (
    <div className="bg-carbon-950 min-h-screen">
      <section className="relative pt-[76px] min-h-[70vh] overflow-hidden">
        {driver.image && (
          <>
            <Image
              src={driver.image}
              alt={driver.imageAlt ?? `${driver.firstName} ${driver.lastName}`}
              fill
              priority
              className="object-cover object-top"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-carbon-950/50 to-carbon-950/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-carbon-950/90 via-transparent to-transparent" />
          </>
        )}
        {!driver.image && (
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(160deg, ${team?.color ?? "#333"}33, #0a0a0b 70%)` }}
          />
        )}

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 h-full flex flex-col justify-end pb-16 pt-32">
          <span className="font-mono text-3xl text-racing-red mb-3">#{driver.number}</span>
          <h1 className="font-display font-bold text-5xl sm:text-7xl lg:text-8xl leading-[0.92] tracking-tight mb-4">
            {driver.firstName}
            <br />
            {driver.lastName}
          </h1>
          <p className="text-white/60 tracking-wide">
            {driver.team.toUpperCase()} • {driver.nationality.toUpperCase()}
          </p>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 border-b border-white/[0.06]">
        <Stat label="Position" value={driver.championshipPosition} prefix="P" />
        <Stat label="Points" value={driver.points} />
        <Stat label="Wins" value={driver.wins} />
        <Stat label="Podiums" value={driver.podiums} />
        <Stat label="Poles" value={driver.poles} />
        <Stat label="Starts" value={driver.careerStarts} />
        <Stat label="Titles" value={driver.championships} />
        <Stat label="Age" value={calcAge(driver.dateOfBirth)} />
      </section>

      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 border-b border-white/[0.06]">
        <div>
          <p className="text-xs tracking-[0.2em] text-racing-red mb-4">CAREER</p>
          <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Biography</h2>
          <p className="text-white/60 leading-relaxed">{driver.bio}</p>
          <dl className="grid grid-cols-2 gap-6 mt-10 text-sm">
            <div>
              <dt className="text-white/40 mb-1">Date of birth</dt>
              <dd className="font-mono">
                {new Date(driver.dateOfBirth).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </dd>
            </div>
            <div>
              <dt className="text-white/40 mb-1">Nationality</dt>
              <dd>{driver.nationality}</dd>
            </div>
            <div>
              <dt className="text-white/40 mb-1">Team</dt>
              <dd>{driver.team}</dd>
            </div>
            <div>
              <dt className="text-white/40 mb-1">Career starts</dt>
              <dd className="font-mono">{driver.careerStarts}</dd>
            </div>
          </dl>
        </div>

        <div>
          <p className="text-xs tracking-[0.2em] text-racing-red mb-4">2026 SEASON</p>
          <h2 className="font-display font-bold text-3xl tracking-tight mb-6">
            Points progression
          </h2>
          <SeasonChart data={driver.seasonPoints} color={team?.color ?? "#E10600"} />
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <p className="text-xs tracking-[0.2em] text-racing-red mb-4">2026 SEASON</p>
        <h2 className="font-display font-bold text-3xl tracking-tight mb-8">Race results</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[560px]">
            <thead>
              <tr className="border-b border-white/[0.08] text-white/40 text-xs tracking-wide">
                <th className="text-left font-normal py-3">GRAND PRIX</th>
                <th className="text-left font-normal py-3">QUALI</th>
                <th className="text-left font-normal py-3">GRID</th>
                <th className="text-left font-normal py-3">FINISH</th>
                <th className="text-right font-normal py-3">POINTS</th>
              </tr>
            </thead>
            <tbody>
              {driver.raceResults.map((r) => (
                <tr key={r.race} className="border-b border-white/[0.06]">
                  <td className="py-4 font-display">{r.race}</td>
                  <td className="py-4 font-mono text-white/60">P{r.qualifying}</td>
                  <td className="py-4 font-mono text-white/60">P{r.grid}</td>
                  <td className="py-4 font-mono">
                    {r.finish === "DNF" ? (
                      <span className="text-racing-red">DNF</span>
                    ) : (
                      <span className={r.finish <= 3 ? "text-emerald-400" : ""}>
                        P{r.finish}
                      </span>
                    )}
                  </td>
                  <td className="py-4 font-mono text-right">{r.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function Stat({ label, value, prefix = "" }: { label: string; value: number; prefix?: string }) {
  return (
    <div>
      <p className="font-mono text-2xl sm:text-3xl font-semibold">
        {prefix}
        <AnimatedCounter value={value} />
      </p>
      <p className="text-white/40 text-xs tracking-wide mt-1">{label}</p>
    </div>
  );
}

function calcAge(dob: string) {
  const diff = Date.now() - new Date(dob).getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}
