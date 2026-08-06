import type { Metadata } from "next";
import { Suspense } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import SearchPageClient from "@/components/SearchPageClient";
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
    path: "/search",
    title: {
      en: `${dict.products.searchPage.title} | VilmoraTex`,
      ar: `${dict.products.searchPage.title} | فيلمورا تكس`,
    },
    description: {
      en: dict.common.search.placeholder,
      ar: dict.common.search.placeholder,
    },
  });
}

export default async function SearchPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);

  return (
    <div>
      <Breadcrumbs
        items={[
          { label: dict.common.nav.home, href: "/" },
          { label: dict.products.searchPage.title },
        ]}
      />
      <section className="container-page pb-16">
        <SectionHeading
          eyebrow={dict.products.searchPage.eyebrow}
          title={dict.products.searchPage.title}
          align="center"
        />
        <div className="mt-8">
          <Suspense fallback={null}>
            <SearchPageClient />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
