"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Minus, ArrowUp, ArrowDown } from "lucide-react";
import { getDriverStandings, getConstructorStandings } from "@/lib/standings";
import SectionHeading from "./section-heading";

export default function StandingsPreview() {
  const [tab, setTab] = useState<"drivers" | "constructors">("drivers");
  const driverStandings = getDriverStandings().slice(0, 6);
  const constructorStandings = getConstructorStandings().slice(0, 6);
  const maxPoints = driverStandings[0]?.points ?? 1;
  const maxTeamPoints = constructorStandings[0]?.points ?? 1;

  return (
    <section className="bg-carbon-950 py-20 sm:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="CHAMPIONSHIP"
          title="Standings"
          action={
            <div className="glass flex rounded-sm p-1">
              {(["drivers", "constructors"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`px-4 py-2 text-xs tracking-widest rounded-sm transition-colors focus-ring ${
                    tab === t ? "bg-racing-red text-white" : "text-white/50 hover:text-white"
                  }`}
                >
                  {t === "drivers" ? "DRIVERS" : "CONSTRUCTORS"}
                </button>
              ))}
            </div>
          }
        />

        <div className="border-t border-white/[0.06]">
          {tab === "drivers"
            ? driverStandings.map((d, i) => (
                <motion.div
                  key={d.slug}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="grid grid-cols-[2.5rem_1fr_auto] sm:grid-cols-[3rem_1fr_8rem_6rem] items-center gap-4 py-4 border-b border-white/[0.06] group"
                >
                  <span className="font-mono text-white/40 text-sm">
                    {String(d.championshipPosition).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <Link
                      href={`/drivers/${d.slug}`}
                      className="font-display font-medium text-base sm:text-lg hover:text-racing-red transition-colors focus-ring rounded-sm"
                    >
                      {d.firstName} {d.lastName}
                    </Link>
                    <p className="text-white/40 text-xs sm:text-sm truncate">{d.team}</p>
                  </div>
                  <div className="hidden sm:block h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(d.points / maxPoints) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full bg-racing-red rounded-full"
                    />
                  </div>
                  <div className="flex items-center justify-end gap-2 font-mono text-sm">
                    <PositionChange value={d.positionChange} />
                    <span className="tabular-nums">{d.points} PTS</span>
                  </div>
                </motion.div>
              ))
            : constructorStandings.map((t, i) => (
                <motion.div
                  key={t.slug}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="grid grid-cols-[2.5rem_1fr_auto] sm:grid-cols-[3rem_1fr_8rem_6rem] items-center gap-4 py-4 border-b border-white/[0.06]"
                >
                  <span className="font-mono text-white/40 text-sm">
                    {String(t.championshipPosition).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex items-center gap-3">
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: t.color }}
                    />
                    <Link
                      href={`/teams/${t.slug}`}
                      className="font-display font-medium text-base sm:text-lg hover:text-racing-red transition-colors focus-ring rounded-sm truncate"
                    >
                      {t.name}
                    </Link>
                  </div>
                  <div className="hidden sm:block h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(t.points / maxTeamPoints) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: t.color }}
                    />
                  </div>
                  <div className="flex items-center justify-end font-mono text-sm tabular-nums">
                    {t.points} PTS
                  </div>
                </motion.div>
              ))}
        </div>

        <Link
          href="/standings"
          className="inline-flex items-center gap-2 mt-8 text-sm tracking-wide text-white/70 hover:text-racing-red transition-colors focus-ring rounded-sm"
        >
          View full standings <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}

function PositionChange({ value }: { value: number }) {
  if (value === 0)
    return (
      <span className="text-white/30 flex items-center">
        <Minus size={14} />
      </span>
    );
  if (value > 0)
    return (
      <span className="text-emerald-400 flex items-center">
        <ArrowUp size={14} />
      </span>
    );
  return (
    <span className="text-racing-red flex items-center">
      <ArrowDown size={14} />
    </span>
  );
}
