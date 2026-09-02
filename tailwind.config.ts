import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        carbon: {
          950: "#0a0a0b",
          900: "#111113",
          800: "#18181b",
          700: "#232327",
          600: "#333338",
        },
        racing: {
          red: "#E10600",
          crimson: "#B0040A",
        },
        team: {
          redbull: "#3671C6",
          ferrari: "#E8002D",
          mercedes: "#27F4D2",
          mclaren: "#FF8000",
          astonmartin: "#229971",
          alpine: "#FF87BC",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
    },
  },
  plugins: [],
};
export default config;
