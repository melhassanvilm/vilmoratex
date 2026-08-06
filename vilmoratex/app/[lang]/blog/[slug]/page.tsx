import type { Metadata } from "next";
import Image from "next/image";
import Link from "@/components/LocaleLink";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import ShareButtons from "@/components/ShareButtons";
import JsonLd from "@/components/JsonLd";
import { blogPosts, getBlogPost } from "@/lib/blog";
import { siteConfig } from "@/lib/site-config";
import { getDictionary } from "@/lib/dictionaries";
import { buildPageMetadata } from "@/lib/seo";
import type { Locale } from "@/lib/i18n-config";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang: langParam, slug } = await params;
  const lang = langParam as Locale;
  const post = getBlogPost(slug);
  if (!post) return {};
  return buildPageMetadata({
    lang,
    path: `/blog/${slug}`,
    title: { en: post.title.en, ar: post.title.ar },
    description: { en: post.excerpt.en, ar: post.excerpt.ar },
    image: post.coverImage,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang: langParam, slug } = await params;
  const lang = langParam as Locale;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const dict = await getDictionary(lang);
  const dateLocale = lang === "ar" ? "ar-EG" : "en-GB";
  const url = `${siteConfig.url}/${lang}/blog/${post.slug}`;
  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title[lang],
          image: [post.coverImage],
          datePublished: post.date,
          inLanguage: lang,
          author: { "@type": "Organization", name: post.author[lang] },
          publisher: { "@type": "Organization", name: siteConfig.fullName },
          mainEntityOfPage: url,
        }}
      />
      <Breadcrumbs
        items={[
          { label: dict.common.nav.home, href: "/" },
          { label: dict.common.nav.blog, href: "/blog" },
          { label: post.title[lang] },
        ]}
      />

      <article className="container-page max-w-3xl pb-16">
        <p className="text-xs uppercase tracking-wide text-brand-charcoal/50">
          {new Date(post.date).toLocaleDateString(dateLocale, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          · {post.readingTime[lang]} · {dict.common.misc.by} {post.author[lang]}
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-brand-plum sm:text-4xl">
          {post.title[lang]}
        </h1>

        <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-2xl">
          <Image
            src={post.coverImage}
            alt={post.title[lang]}
            fill
            sizes="(min-width: 1024px) 768px, 100vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="prose-none mt-8 space-y-5 text-brand-charcoal/80">
          {post.content[lang].map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-brand-plum/10 pt-6">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-brand-cream px-3 py-1 text-xs text-brand-charcoal/60"
              >
                #{tag}
              </span>
            ))}
          </div>
          <ShareButtons title={post.title[lang]} url={url} />
        </div>

        {otherPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="font-display text-xl font-semibold text-brand-plum">
              {dict.products.blogPage.moreFromBlog}
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="rounded-xl border border-brand-plum/10 bg-white p-4 hover:shadow-md"
                >
                  <p className="font-medium text-brand-plum">{p.title[lang]}</p>
                  <p className="mt-1 text-sm text-brand-charcoal/60 line-clamp-2">
                    {p.excerpt[lang]}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
