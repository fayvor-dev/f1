"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Driver } from "@/lib/drivers";

export default function DriverCard({ driver, index = 0 }: { driver: Driver; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.05 }}
    >
      <Link
        href={`/drivers/${driver.slug}`}
        className="glass-card group relative block h-[380px] overflow-hidden rounded-md focus-ring"
      >
        {driver.image ? (
          <Image
            src={driver.image}
            alt={driver.imageAlt ?? `${driver.firstName} ${driver.lastName}`}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-carbon-800">
            <span className="font-display font-bold text-8xl text-white/[0.06]">
              {driver.number}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-carbon-950/10 to-transparent" />

        <div className="absolute top-0 left-0 right-0 h-0 group-hover:h-1 bg-racing-red transition-all duration-300" />

        <span className="glass-pill absolute top-5 left-5 rounded-full px-2.5 py-1 font-mono text-xs text-white/70">
          #{driver.number}
        </span>
        <ArrowUpRight
          size={18}
          className="absolute top-5 right-5 text-white/30 group-hover:text-racing-red group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
        />

        <div className="glass-panel absolute inset-x-0 bottom-0 p-5 rounded-b-md">
          <p className="text-white/40 text-xs mb-1">{driver.team}</p>
          <h3 className="font-display font-bold text-xl leading-tight">
            {driver.firstName}
            <br />
            {driver.lastName}
          </h3>
          <div className="flex items-center gap-4 mt-3 text-xs font-mono text-white/50">
            <span>P{driver.championshipPosition}</span>
            <span>{driver.points} PTS</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
