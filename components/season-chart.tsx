"use client";

import { motion } from "framer-motion";

export default function SeasonChart({ data, color }: { data: number[]; color: string }) {
  const width = 600;
  const height = 220;
  const padding = 24;
  const max = Math.max(...data);

  const points = data.map((v, i) => {
    const x = padding + (i / (data.length - 1)) * (width - padding * 2);
    const y = height - padding - (v / max) * (height - padding * 2);
    return [x, y] as const;
  });

  const path = points.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x},${y}`).join(" ");
  const areaPath = `${path} L${points[points.length - 1][0]},${height - padding} L${points[0][0]},${height - padding} Z`;

  return (
    <div className="border border-white/[0.08] rounded-md p-4 sm:p-6 bg-white/[0.02]">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto overflow-visible">
        <defs>
          <linearGradient id="chartFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>

        {[0.25, 0.5, 0.75].map((f) => (
          <line
            key={f}
            x1={padding}
            x2={width - padding}
            y1={padding + f * (height - padding * 2)}
            y2={padding + f * (height - padding * 2)}
            stroke="white"
            strokeOpacity={0.06}
          />
        ))}

        <motion.path
          d={areaPath}
          fill="url(#chartFade)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
        <motion.path
          d={path}
          fill="none"
          stroke={color}
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        {points.map(([x, y], i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r={3.5}
            fill={color}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 + i * 0.03 }}
          />
        ))}
      </svg>
      <div className="flex justify-between text-xs text-white/30 font-mono mt-3">
        <span>ROUND 1</span>
        <span>ROUND {data.length}</span>
      </div>
    </div>
  );
}
