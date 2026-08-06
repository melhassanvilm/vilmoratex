import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import QuoteForm from "@/components/QuoteForm";
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
    path: "/quote",
    title: {
      en: `${dict.common.quote.title} | VilmoraTex`,
      ar: `${dict.common.quote.title} | فيلمورا تكس`,
    },
    description: {
      en: "Request a manufacturing or wholesale quote from VilmoraTex Trading & Industry — share your product type, fabric, quantity, and customization needs.",
      ar: "اطلب عرض سعر تصنيع أو جملة من فيلمورا تكس للتجارة والصناعة — شاركنا نوع المنتج والقماش والكمية ومتطلبات التخصيص.",
    },
  });
}

export default async function QuotePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);
  return (
    <div>
      <Breadcrumbs
        items={[{ label: dict.common.nav.home, href: "/" }, { label: dict.common.quote.title }]}
      />
      <section className="container-page pb-16">
        <SectionHeading
          eyebrow={dict.common.quote.title}
          title={dict.common.quote.subtitle}
          description={dict.common.quote.description}
        />
        <div className="mt-10 rounded-3xl border border-brand-plum/10 bg-white p-6 sm:p-10">
          <QuoteForm />
        </div>
      </section>
    </div>
  );
}
