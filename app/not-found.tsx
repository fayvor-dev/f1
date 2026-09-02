import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 pt-[76px]">
      <span className="font-mono text-racing-red text-sm tracking-widest mb-6">404</span>
      <h1 className="font-display font-bold text-4xl sm:text-6xl tracking-tight mb-4">
        Missed the apex.
      </h1>
      <p className="text-white/50 max-w-sm mb-10">
        The page you&apos;re looking for doesn&apos;t exist, or has been moved off the racing
        line.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-racing-red text-white px-7 py-3.5 text-sm tracking-wide font-medium hover:bg-white hover:text-carbon-950 transition-colors focus-ring rounded-sm"
      >
        Return to home
      </Link>
    </div>
  );
}
