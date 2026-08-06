import type { Metadata } from "next";
import Link from "@/components/LocaleLink";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
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
    path: "/wholesale",
    title: {
      en: `${dict.services.wholesalePage.title} | VilmoraTex`,
      ar: `${dict.services.wholesalePage.title} | فيلمورا تكس`,
    },
    description: {
      en: dict.services.wholesalePage.description,
      ar: dict.services.wholesalePage.description,
    },
  });
}

export default async function WholesalePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);
  const w = dict.services.wholesalePage;

  return (
    <div>
      <Breadcrumbs
        items={[{ label: dict.common.nav.home, href: "/" }, { label: dict.common.nav.wholesale }]}
      />

      <section className="container-page pb-16">
        <SectionHeading eyebrow={w.eyebrow} title={w.title} description={w.description} />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {w.tiers.map((t) => (
            <div
              key={t.range}
              className="rounded-2xl border border-brand-plum/10 bg-white p-6 text-center"
            >
              <p className="font-display text-xl font-semibold text-brand-plum">{t.range}</p>
              <p className="mt-2 text-sm text-brand-charcoal/70">{t.note}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-sm text-brand-charcoal/50">{w.tiersNote}</p>
      </section>

      <section className="bg-white py-16">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow={w.eyebrow} title={w.howItWorksTitle} />
            <ol className="mt-6 space-y-4">
              {w.steps.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-plum text-sm font-semibold text-white">
                    {i + 1}
                  </span>
                  <p className="text-brand-charcoal/70">{step}</p>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <SectionHeading eyebrow={w.eyebrow} title={w.faqTitle} />
            <div className="mt-6">
              <FAQAccordion items={w.faqs} />
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16 text-center">
        <h2 className="font-display text-3xl font-semibold text-brand-plum">{w.ctaTitle}</h2>
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
