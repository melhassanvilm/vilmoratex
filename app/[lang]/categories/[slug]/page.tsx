import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import { categories, getCategory } from "@/lib/categories";
import { getProductsByCategory } from "@/lib/products";
import { getDictionary } from "@/lib/dictionaries";
import { buildPageMetadata } from "@/lib/seo";
import type { Locale } from "@/lib/i18n-config";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang: langParam, slug } = await params;
  const lang = langParam as Locale;
  const category = getCategory(slug);
  if (!category) return {};
  return buildPageMetadata({
    lang,
    path: `/categories/${slug}`,
    title: {
      en: `${category.name.en} | VilmoraTex`,
      ar: `${category.name.ar} | فيلمورا تكس`,
    },
    description: { en: category.description.en, ar: category.description.ar },
    image: category.image,
  });
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang: langParam, slug } = await params;
  const lang = langParam as Locale;
  const category = getCategory(slug);
  if (!category) notFound();

  const dict = await getDictionary(lang);
  const categoryProducts = getProductsByCategory(slug);

  return (
    <div>
      <Breadcrumbs
        items={[
          { label: dict.common.nav.home, href: "/" },
          { label: dict.products.categoriesPage.title, href: "/categories" },
          { label: category.name[lang] },
        ]}
      />

      <section className="container-page pb-16">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={category.image}
              alt={category.name[lang]}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow={dict.products.categoryPage.eyebrow}
              title={category.name[lang]}
              description={category.longDescription[lang]}
            />
          </div>
        </div>

        <div className="mt-12">
          {categoryProducts.length === 0 ? (
            <p className="rounded-2xl border border-dashed border-brand-plum/20 p-12 text-center text-brand-charcoal/60">
              {dict.products.categoryPage.comingSoon}
            </p>
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
              {categoryProducts.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
