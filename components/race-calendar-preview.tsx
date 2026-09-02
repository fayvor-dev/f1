"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { races } from "@/lib/races";
import SectionHeading from "./section-heading";

const filters = ["ALL", "COMPLETED", "UPCOMING"] as const;

export default function RaceCalendarPreview() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("ALL");

  const filtered = races.filter((r) => {
    if (filter === "ALL") return true;
    return r.status === filter.toLowerCase();
  });

  return (
    <section className="bg-carbon-900 py-20 sm:py-28 border-t border-white/[0.06]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="SEASON"
          title="Race calendar"
          action={
            <div className="flex bg-white/[0.04] border border-white/[0.08] rounded-sm p-1">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 text-xs tracking-widest rounded-sm transition-colors focus-ring ${
                    filter === f ? "bg-racing-red text-white" : "text-white/50 hover:text-white"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map((race, i) => (
            <motion.div
              key={race.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                href={`/races/${race.slug}`}
                className="group block border border-white/[0.08] rounded-md p-6 h-full hover:border-racing-red/50 hover:bg-white/[0.02] transition-colors focus-ring"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-white/40">
                    ROUND {String(race.round).padStart(2, "0")}
                  </span>
                  <span
                    className={`text-[10px] tracking-widest px-2 py-1 rounded-sm ${
                      race.status === "upcoming"
                        ? "bg-racing-red/15 text-racing-red"
                        : "bg-white/[0.06] text-white/40"
                    }`}
                  >
                    {race.status.toUpperCase()}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg leading-tight mb-2 group-hover:text-racing-red transition-colors">
                  {race.name.toUpperCase()}
                </h3>
                <p className="text-white/40 text-sm mb-6">{race.location.toUpperCase()}</p>
                <p className="font-mono text-sm text-white/60">
                  {new Date(race.date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                  })}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
