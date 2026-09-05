import Image from "next/image";
import { notFound } from "next/navigation";
import { news, getArticleBySlug } from "@/lib/news";

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  return { title: `${article.headline} — APEX` };
}

export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  return (
    <article className="bg-carbon-950 min-h-screen">
      <div className="pt-[76px]">
        {article.image && (
          <div className="relative h-[45vh] min-h-[320px]">
            <Image src={article.image} alt="" fill className="object-cover" sizes="100vw" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-carbon-950/30 to-carbon-950/10" />
          </div>
        )}

        <div className="max-w-2xl mx-auto px-6 lg:px-0 py-16">
          <span className="text-xs tracking-widest text-racing-red">
            {article.category.toUpperCase()}
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-5xl tracking-tight mt-4 mb-5 leading-tight">
            {article.headline}
          </h1>
          <p className="text-white/40 text-sm mb-10">
            {new Date(article.date).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}{" "}
            • {article.readingTime}
          </p>

          <div className="space-y-6">
            {article.body.map((para, i) => (
              <p key={i} className="text-white/70 leading-relaxed text-lg">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
