import Link from "next/link";
import { Instagram, Youtube, Twitter } from "lucide-react";

const columns = [
  { href: "/races", label: "Races" },
  { href: "/drivers", label: "Drivers" },
  { href: "/teams", label: "Teams" },
  { href: "/circuits", label: "Circuits" },
  { href: "/standings", label: "Standings" },
  { href: "/news", label: "News" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-carbon-950 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] gap-12">
          <div>
            <div className="text-2xl font-display font-bold tracking-tight flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 bg-racing-red rounded-full inline-block" />
              APEX
            </div>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs">
              Independent coverage of the Formula 1 world championship — races, drivers, teams
              and the data behind every lap.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                aria-label="Instagram"
                className="text-white/40 hover:text-white transition-colors focus-ring rounded-sm"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="text-white/40 hover:text-white transition-colors focus-ring rounded-sm"
              >
                <Youtube size={18} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-white/40 hover:text-white transition-colors focus-ring rounded-sm"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs tracking-wide text-white/40 mb-4">Explore</p>
            <ul className="space-y-3">
              {columns.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm text-white/65 hover:text-white transition-colors focus-ring rounded-sm"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-wide text-white/40 mb-4">Legal</p>
            <ul className="space-y-3">
              {["Privacy", "Terms", "Cookies"].map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-sm text-white/65 hover:text-white transition-colors focus-ring rounded-sm"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/35">
          <p>Fan-made concept site. Not affiliated with Formula 1 or the FIA.</p>
          <p>© 2026 APEX. All rights reserved.</p>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none select-none absolute -bottom-[6%] left-1/2 -translate-x-1/2 text-[26vw] leading-none font-display font-bold text-outline whitespace-nowrap"
      >
        APEX
      </div>
    </footer>
  );
}
