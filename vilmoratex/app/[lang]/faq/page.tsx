import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
import JsonLd from "@/components/JsonLd";
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
    path: "/faq",
    title: {
      en: `${dict.products.faqPage.title} | VilmoraTex`,
      ar: `${dict.products.faqPage.title} | فيلمورا تكس`,
    },
    description: { en: dict.products.faqPage.description, ar: dict.products.faqPage.description },
  });
}

export default async function FAQPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);
  const faqs = dict.products.faqPage.faqs;

  return (
    <div>
      <Breadcrumbs
        items={[{ label: dict.common.nav.home, href: "/" }, { label: dict.common.nav.faq }]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }}
      />
      <section className="container-page pb-16">
        <SectionHeading
          eyebrow={dict.products.faqPage.eyebrow}
          title={dict.products.faqPage.title}
          align="center"
        />
        <div className="mx-auto mt-10 max-w-3xl">
          <FAQAccordion items={faqs} />
        </div>
      </section>
    </div>
  );
}
