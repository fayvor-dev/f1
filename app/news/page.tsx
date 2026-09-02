import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/page-header";
import { news } from "@/lib/news";

export const metadata = { title: "News — APEX" };

export default function NewsPage() {
  const [featured, ...rest] = news;

  return (
    <div className="bg-carbon-950 min-h-screen">
      <PageHeader
        eyebrow="MEDIA"
        title="News"
        description="Race analysis, technical breakdowns and driver stories from around the paddock."
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <Link
          href={`/news/${featured.slug}`}
          className="group relative block h-[420px] rounded-md overflow-hidden border border-white/[0.08] mb-14 focus-ring"
        >
          {featured.image ? (
            <Image
              src={featured.image}
              alt=""
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="100vw"
            />
          ) : (
            <div className="absolute inset-0 bg-carbon-800 carbon-weave" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-carbon-950/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10 max-w-2xl">
            <span className="text-xs tracking-widest text-racing-red">
              {featured.category.toUpperCase()}
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight mt-3 mb-3 group-hover:text-white/90">
              {featured.headline}
            </h2>
            <p className="text-white/50 text-sm">
              {formatDate(featured.date)} • {featured.readingTime}
            </p>
          </div>
        </Link>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((article) => (
            <Link
              key={article.slug}
              href={`/news/${article.slug}`}
              className="group block border border-white/[0.08] rounded-md overflow-hidden hover:border-racing-red/50 transition-colors focus-ring"
            >
              <div className="relative h-[180px]">
                {article.image ? (
                  <Image
                    src={article.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-carbon-800 carbon-weave" />
                )}
              </div>
              <div className="p-5">
                <span className="text-xs tracking-widest text-racing-red">
                  {article.category.toUpperCase()}
                </span>
                <h3 className="font-display font-bold text-lg leading-snug mt-2 mb-3 group-hover:text-racing-red transition-colors">
                  {article.headline}
                </h3>
                <p className="text-white/40 text-xs">
                  {formatDate(article.date)} • {article.readingTime}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}
