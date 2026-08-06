import type { Metadata } from "next";
import Link from "@/components/LocaleLink";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
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
    path: "/manufacturing",
    title: {
      en: `${dict.services.manufacturingPage.title} | VilmoraTex`,
      ar: `${dict.services.manufacturingPage.title} | فيلمورا تكس`,
    },
    description: {
      en: dict.services.manufacturingPage.description,
      ar: dict.services.manufacturingPage.description,
    },
  });
}

export default async function ManufacturingPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);
  const m = dict.services.manufacturingPage;

  return (
    <div>
      <Breadcrumbs
        items={[
          { label: dict.common.nav.home, href: "/" },
          { label: dict.common.nav.manufacturingServices },
        ]}
      />

      <section className="container-page pb-8">
        <SectionHeading eyebrow={m.eyebrow} title={m.title} description={m.description} />
      </section>

      <section className="container-page pb-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {m.services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-brand-plum/10 bg-white p-6">
              <h3 className="font-display text-lg font-semibold text-brand-plum">{s.title}</h3>
              <p className="mt-2 text-sm text-brand-charcoal/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-plum py-16 text-brand-cream">
        <div className="container-page text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">{m.ctaTitle}</h2>
          <p className="mx-auto mt-3 max-w-xl text-brand-cream/80">{m.ctaDesc}</p>
          <Link
            href="/quote"
            className="mt-7 inline-block rounded-full bg-brand-gold px-7 py-3 text-sm font-semibold text-brand-plum-dark transition-transform hover:scale-105"
          >
            {dict.common.buttons.requestQuote}
          </Link>
        </div>
      </section>
    </div>
  );
}
