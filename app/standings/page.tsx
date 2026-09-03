"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import PageHeader from "@/components/page-header";
import { getDriverStandings, getConstructorStandings } from "@/lib/standings";

export default function StandingsPage() {
  const [tab, setTab] = useState<"drivers" | "constructors">("drivers");
  const driverStandings = getDriverStandings();
  const constructorStandings = getConstructorStandings();

  return (
    <div className="bg-carbon-950 min-h-screen">
      <PageHeader
        eyebrow="CHAMPIONSHIP"
        title="Standings"
        description="The full 2026 drivers' and constructors' championship tables, updated after every round."
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <div className="glass flex rounded-sm p-1 w-fit mb-10">
          {(["drivers", "constructors"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-5 py-2.5 text-xs tracking-widest rounded-sm transition-colors focus-ring ${
                tab === t ? "bg-racing-red text-white" : "text-white/50 hover:text-white"
              }`}
            >
              {t === "drivers" ? "DRIVERS" : "CONSTRUCTORS"}
            </button>
          ))}
        </div>

        {tab === "drivers" ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[560px]">
              <thead>
                <tr className="border-b border-white/[0.08] text-white/40 text-xs tracking-wide">
                  <th className="text-left font-normal py-3 w-16">POS</th>
                  <th className="text-left font-normal py-3">DRIVER</th>
                  <th className="text-left font-normal py-3">TEAM</th>
                  <th className="text-right font-normal py-3">WINS</th>
                  <th className="text-right font-normal py-3">PODIUMS</th>
                  <th className="text-right font-normal py-3">POINTS</th>
                </tr>
              </thead>
              <tbody>
                {driverStandings.map((d, i) => (
                  <motion.tr
                    key={d.slug}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    className="border-b border-white/[0.06] hover:bg-white/[0.02]"
                  >
                    <td className="py-4 font-mono text-white/50">
                      P{d.championshipPosition}
                    </td>
                    <td className="py-4">
                      <Link
                        href={`/drivers/${d.slug}`}
                        className="font-display font-medium hover:text-racing-red transition-colors focus-ring rounded-sm"
                      >
                        {d.firstName} {d.lastName}
                      </Link>
                    </td>
                    <td className="py-4 text-white/50">{d.team}</td>
                    <td className="py-4 font-mono text-right">{d.wins}</td>
                    <td className="py-4 font-mono text-right">{d.podiums}</td>
                    <td className="py-4 font-mono text-right font-semibold">{d.points}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[480px]">
              <thead>
                <tr className="border-b border-white/[0.08] text-white/40 text-xs tracking-wide">
                  <th className="text-left font-normal py-3 w-16">POS</th>
                  <th className="text-left font-normal py-3">TEAM</th>
                  <th className="text-right font-normal py-3">CHAMPIONSHIPS</th>
                  <th className="text-right font-normal py-3">POINTS</th>
                </tr>
              </thead>
              <tbody>
                {constructorStandings.map((t, i) => (
                  <motion.tr
                    key={t.slug}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    className="border-b border-white/[0.06] hover:bg-white/[0.02]"
                  >
                    <td className="py-4 font-mono text-white/50">P{t.championshipPosition}</td>
                    <td className="py-4">
                      <Link
                        href={`/teams/${t.slug}`}
                        className="font-display font-medium hover:text-racing-red transition-colors focus-ring rounded-sm flex items-center gap-3"
                      >
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: t.color }}
                        />
                        {t.name}
                      </Link>
                    </td>
                    <td className="py-4 font-mono text-right">{t.championships}</td>
                    <td className="py-4 font-mono text-right font-semibold">{t.points}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
