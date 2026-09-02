"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { teams } from "@/lib/teams";
import SectionHeading from "./section-heading";

export default function TeamsShowcase() {
  return (
    <section className="bg-carbon-950 py-20 sm:py-28 border-t border-white/[0.06]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <SectionHeading eyebrow="THE GRID" title="Teams" />
      </div>

      <div className="flex gap-4 px-6 lg:px-10 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide max-w-[1400px] mx-auto">
        {teams.map((team, i) => (
          <motion.div
            key={team.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="snap-start shrink-0 w-[280px] sm:w-[320px]"
          >
            <Link
              href={`/teams/${team.slug}`}
              className="group block relative h-[400px] overflow-hidden rounded-md border border-white/[0.08] focus-ring"
            >
              {team.cardImage ? (
                <Image
                  src={team.cardImage}
                  alt={team.imageAlt ?? team.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="320px"
                />
              ) : (
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(160deg, ${team.color}33, #0a0a0b 75%)`,
                  }}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-carbon-950/20 to-transparent" />
              <div
                className="absolute top-0 left-0 right-0 h-1 transition-opacity opacity-70 group-hover:opacity-100"
                style={{ backgroundColor: team.color }}
              />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-mono text-xs text-white/40 mb-2">
                  P{team.championshipPosition} • {team.points} PTS
                </p>
                <h3 className="font-display font-bold text-2xl tracking-tight mb-1">
                  {team.name}
                </h3>
                <p className="text-white/45 text-sm">
                  {team.drivers.length > 0 ? team.drivers.length : "—"} driver
                  {team.drivers.length === 1 ? "" : "s"}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
