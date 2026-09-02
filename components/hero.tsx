"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-carbon-950">
      <Image
        src="/images/hero-rb-smoke.jpg"
        alt="Red Bull Racing Formula 1 car emerging through crimson smoke"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-carbon-950/30 to-carbon-950/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-carbon-950/70 via-transparent to-carbon-950/40" />
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.15] mix-blend-overlay"
      />

      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col justify-end pb-24 sm:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm sm:text-base tracking-[0.2em] text-racing-red font-medium mb-5"
        >
          FORMULA 1
        </motion.p>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-[13vw] sm:text-[8vw] lg:text-[6.4vw] leading-[0.95] tracking-tight max-w-4xl"
          >
            Where speed
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-[13vw] sm:text-[8vw] lg:text-[6.4vw] leading-[0.95] tracking-tight max-w-4xl"
          >
            meets precision.
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-white/60 text-base sm:text-lg max-w-md mt-6 leading-relaxed"
        >
          Experience the world&apos;s most advanced motorsport through races, drivers, teams,
          circuits and championship data.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap gap-4 mt-9"
        >
          <Link
            href="/races"
            className="group inline-flex items-center gap-2 bg-racing-red text-white px-7 py-3.5 text-sm tracking-wide font-medium hover:bg-white hover:text-carbon-950 transition-colors focus-ring rounded-sm"
          >
            Explore the season
          </Link>
          <Link
            href="/standings"
            className="inline-flex items-center gap-2 border border-white/25 text-white px-7 py-3.5 text-sm tracking-wide font-medium hover:border-white hover:bg-white/5 transition-colors focus-ring rounded-sm"
          >
            View standings
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40"
      >
        <ChevronDown size={20} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
