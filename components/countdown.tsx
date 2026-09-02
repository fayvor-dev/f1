"use client";

import { useEffect, useState } from "react";

function getTimeLeft(target: string) {
  const diff = new Date(target).getTime() - Date.now();
  const clamped = Math.max(diff, 0);
  return {
    days: Math.floor(clamped / (1000 * 60 * 60 * 24)),
    hours: Math.floor((clamped / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((clamped / (1000 * 60)) % 60),
    seconds: Math.floor((clamped / 1000) % 60),
  };
}

export default function Countdown({ target }: { target: string }) {
  const [time, setTime] = useState(() => getTimeLeft(target));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => setTime(getTimeLeft(target)), 1000);
    return () => clearInterval(interval);
  }, [target]);

  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <div className="grid grid-cols-4 gap-3 sm:gap-4">
      {units.map((u) => (
        <div
          key={u.label}
          className="flex flex-col items-center justify-center bg-white/[0.03] border border-white/[0.08] rounded-md py-4 sm:py-6"
        >
          <span className="font-mono text-3xl sm:text-5xl font-semibold tabular-nums tracking-tight">
            {mounted ? String(u.value).padStart(2, "0") : "00"}
          </span>
          <span className="text-[10px] sm:text-xs tracking-widest text-white/40 mt-2">
            {u.label}
          </span>
        </div>
      ))}
    </div>
  );
}
