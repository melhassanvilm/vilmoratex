import type { Metadata } from "next";
import Image from "next/image";
import Link from "@/components/LocaleLink";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import { blogPosts } from "@/lib/blog";
import { getDictionary } from "@/lib/dictionaries";
import { buildPageMetadata } from "@/lib/seo";
import type { Locale } from "@/lib/i18n-config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);
  return buildPageMetadata({
    lang,
    path: "/blog",
    title: { en: `${dict.products.blogPage.title} | VilmoraTex`, ar: dict.products.blogPage.title },
    description: { en: dict.products.blogPage.description, ar: dict.products.blogPage.description },
  });
}

export default async function BlogPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);
  const dateLocale = lang === "ar" ? "ar-EG" : "en-GB";

  return (
    <div>
      <Breadcrumbs
        items={[{ label: dict.common.nav.home, href: "/" }, { label: dict.common.nav.blog }]}
      />
      <section className="container-page pb-16">
        <SectionHeading
          eyebrow={dict.products.blogPage.eyebrow}
          title={dict.products.blogPage.title}
          align="center"
        />
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-2xl border border-brand-plum/10 bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title[lang]}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-wide text-brand-charcoal/50">
                  {new Date(post.date).toLocaleDateString(dateLocale, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  · {post.readingTime[lang]}
                </p>
                <h2 className="mt-2 font-display text-xl font-semibold text-brand-plum">
                  {post.title[lang]}
                </h2>
                <p className="mt-2 text-sm text-brand-charcoal/70">{post.excerpt[lang]}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
