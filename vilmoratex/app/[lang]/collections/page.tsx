import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import LocaleLink from "@/components/LocaleLink";
import { products } from "@/lib/products";
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
    path: "/collections",
    title: {
      en: `${dict.products.collectionsPage.title} | VilmoraTex`,
      ar: `${dict.products.collectionsPage.title} | فيلمورا تكس`,
    },
    description: {
      en: dict.products.collectionsPage.description,
      ar: dict.products.collectionsPage.description,
    },
  });
}

const COLLECTION_TAGS = [
  { tag: "new-arrival", titleKey: "newArrivals" as const, href: "/shop" },
  { tag: "bestseller", titleKey: "bestSellers" as const, href: "/shop" },
  {
    tag: "summer-collection",
    titleKey: "summerCollection" as const,
    href: "/categories/summer-dresses",
  },
  {
    tag: "womens-collection",
    titleKey: "womensCollection" as const,
    href: "/categories/womens-fashion",
  },
  { tag: "mens-collection", titleKey: "mensCollection" as const, href: "/categories/mens-fashion" },
  { tag: "kids-collection", titleKey: "kidsCollection" as const, href: "/categories/kids-fashion" },
  { tag: "uniform-solutions", titleKey: "uniformsCollection" as const, href: "/uniforms" },
];

export default async function CollectionsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);
  const rows = dict.homepage.rows;

  const sections = COLLECTION_TAGS.map((c) => ({
    ...c,
    title: rows[c.titleKey] as string,
    items: products.filter((p) => p.tags.includes(c.tag)).slice(0, 8),
  })).filter((s) => s.items.length > 0);

  return (
    <div>
      <Breadcrumbs
        items={[{ label: dict.common.nav.home, href: "/" }, { label: dict.common.nav.collections }]}
      />
      <section className="container-page pb-16">
        <SectionHeading
          eyebrow={dict.products.collectionsPage.eyebrow}
          title={dict.products.collectionsPage.title}
          description={dict.products.collectionsPage.description}
        />

        <div className="mt-10 space-y-14">
          {sections.map((section) => (
            <div key={section.tag}>
              <div className="mb-5 flex items-center justify-between gap-4">
                <h2 className="font-display text-2xl font-semibold text-brand-plum">
                  {section.title}
                </h2>
                <LocaleLink
                  href={section.href}
                  className="text-sm font-medium text-brand-plum hover:underline"
                >
                  {dict.common.buttons.viewAll}
                </LocaleLink>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
                {section.items.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
