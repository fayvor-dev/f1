import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { teams, getTeamBySlug } from "@/lib/teams";
import { drivers } from "@/lib/drivers";
import { races } from "@/lib/races";
import AnimatedCounter from "@/components/animated-counter";

export function generateStaticParams() {
  return teams.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const team = getTeamBySlug(params.slug);
  if (!team) return {};
  return { title: `${team.name} — APEX` };
}

export default function TeamDetailPage({ params }: { params: { slug: string } }) {
  const team = getTeamBySlug(params.slug);
  if (!team) notFound();

  const teamDrivers = drivers.filter((d) => d.teamSlug === team.slug);
  const teamRaces = races.filter((r) => r.status === "completed").slice(0, 6);

  return (
    <div className="bg-carbon-950 min-h-screen">
      <section className="relative pt-[76px] min-h-[60vh] overflow-hidden">
        {team.heroImage ? (
          <Image
            src={team.heroImage}
            alt={team.imageAlt ?? team.name}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(160deg, ${team.color}40, #0a0a0b 70%)` }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-carbon-950/40 to-carbon-950/10" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 h-full flex flex-col justify-end pb-16 pt-32">
          <p className="text-xs tracking-[0.2em] mb-4" style={{ color: team.color }}>
            CONSTRUCTOR CHAMPIONSHIP
          </p>
          <h1 className="font-display font-bold text-5xl sm:text-7xl lg:text-8xl tracking-tight mb-4 max-w-3xl">
            {team.fullName}
          </h1>
          <div className="flex gap-10 font-mono text-sm text-white/60">
            <span>
              POSITION{" "}
              <span className="text-white font-semibold">{team.championshipPosition}</span>
            </span>
            <span>
              POINTS <span className="text-white font-semibold">{team.points}</span>
            </span>
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 grid grid-cols-2 sm:grid-cols-4 gap-6 border-b border-white/[0.06]">
        <Stat label="Founded" value={team.founded} />
        <Stat label="Championships" value={team.championships} />
        <Stat label="Position" value={team.championshipPosition} prefix="P" />
        <Stat label="Points" value={team.points} />
      </section>

      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 border-b border-white/[0.06]">
        <div>
          <p className="text-xs tracking-[0.2em] mb-4" style={{ color: team.color }}>
            ABOUT
          </p>
          <h2 className="font-display font-bold text-3xl tracking-tight mb-6">The team</h2>
          <p className="text-white/60 leading-relaxed mb-8">{team.description}</p>
          <dl className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <dt className="text-white/40 mb-1">Base</dt>
              <dd>{team.base}</dd>
            </div>
            <div>
              <dt className="text-white/40 mb-1">Team principal</dt>
              <dd>{team.teamPrincipal}</dd>
            </div>
          </dl>
        </div>

        <div>
          <p className="text-xs tracking-[0.2em] mb-4" style={{ color: team.color }}>
            THE CAR
          </p>
          <h2 className="font-display font-bold text-3xl tracking-tight mb-6">{team.chassis}</h2>
          <dl className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <dt className="text-white/40 mb-1">Power unit</dt>
              <dd>{team.powerUnit}</dd>
            </div>
            <div>
              <dt className="text-white/40 mb-1">Chassis</dt>
              <dd className="font-mono">{team.chassis}</dd>
            </div>
            <div>
              <dt className="text-white/40 mb-1">Top speed</dt>
              <dd className="font-mono">{team.topSpeed}</dd>
            </div>
            <div>
              <dt className="text-white/40 mb-1">Founded</dt>
              <dd className="font-mono">{team.founded}</dd>
            </div>
          </dl>
        </div>
      </section>

      {teamDrivers.length > 0 && (
        <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 border-b border-white/[0.06]">
          <p className="text-xs tracking-[0.2em] mb-4" style={{ color: team.color }}>
            LINEUP
          </p>
          <h2 className="font-display font-bold text-3xl tracking-tight mb-8">Drivers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {teamDrivers.map((driver) => (
              <Link
                key={driver.slug}
                href={`/drivers/${driver.slug}`}
                className="glass-card group relative h-[280px] rounded-md overflow-hidden focus-ring"
              >
                {driver.image ? (
                  <Image
                    src={driver.image}
                    alt={driver.imageAlt ?? driver.lastName}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-carbon-800" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-carbon-950/10 to-transparent" />
                <div className="glass-panel absolute inset-x-0 bottom-0 p-5 rounded-b-md">
                  <p className="font-mono text-xs text-white/40 mb-1">#{driver.number}</p>
                  <h3 className="font-display font-bold text-xl">
                    {driver.firstName} {driver.lastName}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <p className="text-xs tracking-[0.2em] mb-4" style={{ color: team.color }}>
          2026 SEASON
        </p>
        <h2 className="font-display font-bold text-3xl tracking-tight mb-8">Race results</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[480px]">
            <thead>
              <tr className="border-b border-white/[0.08] text-white/40 text-xs tracking-wide">
                <th className="text-left font-normal py-3">GRAND PRIX</th>
                <th className="text-left font-normal py-3">WINNER</th>
                <th className="text-right font-normal py-3">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {teamRaces.map((r) => (
                <tr key={r.slug} className="border-b border-white/[0.06]">
                  <td className="py-4 font-display">{r.name}</td>
                  <td className="py-4 font-mono text-white/60">{r.winner ?? "—"}</td>
                  <td className="py-4 font-mono text-right text-white/40">COMPLETED</td>
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
    <div className="glass-card rounded-md p-4 sm:p-5">
      <p className="font-mono text-2xl sm:text-3xl font-semibold">
        {prefix}
        <AnimatedCounter value={value} />
      </p>
      <p className="text-white/40 text-xs tracking-wide mt-1">{label}</p>
    </div>
  );
}
