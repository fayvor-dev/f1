import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/page-header";
import { teams } from "@/lib/teams";
import { drivers } from "@/lib/drivers";
import { ArrowUpRight } from "lucide-react";

export const metadata = { title: "Teams — APEX" };

export default function TeamsPage() {
  const sorted = [...teams].sort((a, b) => a.championshipPosition - b.championshipPosition);

  return (
    <div className="bg-carbon-950 min-h-screen">
      <PageHeader
        eyebrow="THE GRID"
        title="Teams"
        description="Ten constructors, one championship. The engineering rivalries behind every race weekend."
      />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-2 gap-5">
        {sorted.map((team) => {
          const teamDrivers = drivers.filter((d) => d.teamSlug === team.slug);
          return (
            <Link
              key={team.slug}
              href={`/teams/${team.slug}`}
              className="group relative h-[280px] rounded-md overflow-hidden border border-white/[0.08] focus-ring"
            >
              {team.cardImage ? (
                <Image
                  src={team.cardImage}
                  alt={team.imageAlt ?? team.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(160deg, ${team.color}33, #0a0a0b 75%)` }}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-carbon-950/30 to-transparent" />
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ backgroundColor: team.color }}
              />
              <ArrowUpRight
                size={20}
                className="absolute top-5 right-5 text-white/40 group-hover:text-white transition-colors"
              />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-mono text-xs text-white/40 mb-2">
                  P{team.championshipPosition} • {team.points} PTS
                </p>
                <h2 className="font-display font-bold text-2xl sm:text-3xl tracking-tight mb-2">
                  {team.name}
                </h2>
                <p className="text-white/50 text-sm">
                  {teamDrivers.map((d) => d.lastName).join(" • ") || "Driver lineup TBA"}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
