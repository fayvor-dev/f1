export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="pt-[76px] bg-carbon-950 border-b border-white/[0.06]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 sm:py-20">
        <p className="text-xs tracking-[0.2em] text-racing-red mb-4">{eyebrow}</p>
        <h1 className="font-display font-bold text-4xl sm:text-6xl tracking-tight mb-4">
          {title}
        </h1>
        {description && (
          <p className="text-white/50 max-w-xl leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  );
}
