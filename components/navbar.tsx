"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X } from "lucide-react";

const links = [
  { href: "/races", label: "Races" },
  { href: "/drivers", label: "Drivers" },
  { href: "/teams", label: "Teams" },
  { href: "/circuits", label: "Circuits" },
  { href: "/standings", label: "Standings" },
  { href: "/news", label: "News" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-carbon-950/85 backdrop-blur-md border-b border-white/[0.06]"
            : "bg-gradient-to-b from-black/60 to-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-[76px] flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-display font-bold tracking-tight flex items-center gap-2 focus-ring rounded-sm"
          >
            <span className="w-2.5 h-2.5 bg-racing-red rounded-full inline-block" />
            APEX
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm tracking-wide transition-colors focus-ring rounded-sm ${
                    active ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute left-4 right-4 -bottom-[1px] h-[2px] bg-racing-red"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <button
              aria-label="Search"
              className="p-2 text-white/70 hover:text-white transition-colors focus-ring rounded-sm hidden sm:flex"
            >
              <Search size={18} />
            </button>
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((o) => !o)}
              className="p-2 text-white/80 hover:text-white transition-colors focus-ring rounded-sm lg:hidden"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-carbon-950/98 backdrop-blur-lg lg:hidden pt-[76px]"
          >
            <nav className="flex flex-col px-8 py-10 gap-1">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={link.href}
                    className="block py-4 text-3xl font-display font-medium tracking-tight border-b border-white/[0.06] text-white/90"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
