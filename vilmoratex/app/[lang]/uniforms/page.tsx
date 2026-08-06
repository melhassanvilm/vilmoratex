import type { Metadata } from "next";
import Link from "@/components/LocaleLink";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import { categories } from "@/lib/categories";
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
    path: "/uniforms",
    title: {
      en: `${dict.services.uniformsPage.title} | VilmoraTex`,
      ar: `${dict.services.uniformsPage.title} | فيلمورا تكس`,
    },
    description: {
      en: dict.services.uniformsPage.description,
      ar: dict.services.uniformsPage.description,
    },
  });
}

const uniformCategories = categories.filter((c) => c.group === "uniforms");

export default async function UniformsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);
  const u = dict.services.uniformsPage;

  return (
    <div>
      <Breadcrumbs
        items={[
          { label: dict.common.nav.home, href: "/" },
          { label: dict.common.nav.uniformSolutions },
        ]}
      />

      <section className="container-page pb-16">
        <SectionHeading eyebrow={u.eyebrow} title={u.title} description={u.description} />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {uniformCategories.map((c) => (
            <Link
              key={c.slug}
              href={`/categories/${c.slug}`}
              className="group overflow-hidden rounded-2xl border border-brand-plum/10 bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.name[lang]}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-brand-plum">
                  {c.name[lang]}
                </h3>
                <p className="mt-1 text-sm text-brand-charcoal/70">{c.description[lang]}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-brand-plum py-16 text-brand-cream">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold">{u.pricingTitle}</h2>
            <p className="mt-4 text-brand-cream/80">{u.pricingPara1}</p>
            <p className="mt-4 text-brand-cream/80">{u.pricingPara2}</p>
          </div>
          <div className="rounded-2xl bg-white/5 p-6">
            <h3 className="font-display text-lg font-semibold text-brand-gold">
              {u.quoteIncludesTitle}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-brand-cream/85">
              {u.quoteIncludes.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-page py-16 text-center">
        <h2 className="font-display text-3xl font-semibold text-brand-plum">{u.ctaTitle}</h2>
        <p className="mx-auto mt-3 max-w-xl text-brand-charcoal/70">{u.ctaDesc}</p>
        <Link
          href="/quote"
          className="mt-6 inline-block rounded-full bg-brand-plum px-7 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
        >
          {dict.common.buttons.requestQuote}
        </Link>
      </section>
    </div>
  );
}
