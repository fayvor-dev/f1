export default function SectionHeading({
  eyebrow,
  title,
  action,
}: {
  eyebrow: string;
  title: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
      <div>
        <p className="text-xs tracking-[0.2em] text-racing-red mb-3">{eyebrow}</p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
          {title}
        </h2>
      </div>
      {action}
    </div>
  );
}
