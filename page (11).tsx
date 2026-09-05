"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import PageHeader from "@/components/page-header";
import { races } from "@/lib/races";

const filters = ["ALL", "COMPLETED", "UPCOMING"] as const;

export default function RacesPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("ALL");
  const filtered = races.filter((r) => filter === "ALL" || r.status === filter.toLowerCase());

  return (
    <div className="bg-carbon-950 min-h-screen">
      <PageHeader
        eyebrow="SEASON"
        title="Race calendar"
        description="Every round of the 2026 world championship, from Sakhir to Monza and beyond."
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <div className="glass flex rounded-sm p-1 w-fit mb-10">
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

        <div className="relative border-l border-white/[0.08] ml-2">
          {filtered.map((race, i) => (
            <motion.div
              key={race.slug}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="relative pl-10 pb-8"
            >
              <span
                className={`absolute left-0 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full border-2 ${
                  race.status === "upcoming"
                    ? "bg-racing-red border-racing-red"
                    : "bg-carbon-950 border-white/30"
                }`}
              />
              <Link
                href={`/races/${race.slug}`}
                className="glass-card group flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 rounded-md p-6 focus-ring"
              >
                <span className="font-mono text-xs text-white/40 w-20 shrink-0">
                  ROUND {String(race.round).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-xl group-hover:text-racing-red transition-colors">
                    {race.name}
                  </h3>
                  <p className="text-white/40 text-sm">
                    {race.location}, {race.country}
                  </p>
                </div>
                <span className="font-mono text-sm text-white/60 w-32 shrink-0">
                  {new Date(race.date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "long",
                  })}
                </span>
                <span
                  className={`glass-pill text-[10px] tracking-widest px-2 py-1 rounded-sm w-fit ${
                    race.status === "upcoming" ? "text-racing-red" : "text-white/40"
                  }`}
                >
                  {race.status.toUpperCase()}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
