"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { drivers } from "@/lib/drivers";
import { ArrowRight } from "lucide-react";

export default function FeaturedDriver() {
  const driver = drivers[0];

  return (
    <section className="relative bg-carbon-900 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="order-2 lg:order-1 py-16 lg:py-24 relative z-10">
          <p className="text-xs tracking-[0.2em] text-racing-red mb-4">CHAMPIONSHIP LEADER</p>
          <div className="flex items-baseline gap-4 mb-2">
            <span className="font-mono text-2xl text-white/30">#{driver.number}</span>
            <span className="text-white/50 text-sm">{driver.team}</span>
          </div>
          <h2 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight mb-6">
            {driver.firstName}
            <br />
            {driver.lastName}
          </h2>
          <p className="text-white/55 max-w-md leading-relaxed mb-8">{driver.bio}</p>

          <div className="grid grid-cols-3 gap-8 mb-10 max-w-sm">
            <Stat label="Points" value={driver.points} />
            <Stat label="Wins" value={driver.wins} />
            <Stat label="Podiums" value={driver.podiums} />
          </div>

          <Link
            href={`/drivers/${driver.slug}`}
            className="inline-flex items-center gap-2 text-sm tracking-wide font-medium border-b border-white/30 pb-1 hover:border-racing-red hover:text-racing-red transition-colors focus-ring rounded-sm w-fit"
          >
            View full profile <ArrowRight size={16} />
          </Link>
        </div>

        <div className="order-1 lg:order-2 relative h-[50vh] lg:h-[85vh]">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={driver.image!}
              alt={driver.imageAlt ?? `${driver.firstName} ${driver.lastName}`}
              fill
              className="object-cover object-top lg:[mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-carbon-900 via-transparent to-transparent lg:block hidden" />
          </motion.div>
          <span
            aria-hidden
            className="hidden lg:block absolute -bottom-6 -left-10 text-[16rem] font-display font-bold text-outline select-none pointer-events-none"
          >
            {driver.number}
          </span>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <p className="font-mono text-2xl sm:text-3xl font-semibold">{value}</p>
      <p className="text-white/40 text-xs tracking-wide mt-1">{label}</p>
    </div>
  );
}
