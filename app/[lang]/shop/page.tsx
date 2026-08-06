import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import ShopExplorer from "@/components/ShopExplorer";
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
  return buildPageMetadata({
    lang,
    path: "/shop",
    title: { en: "Shop All Products | VilmoraTex", ar: "تسوق جميع المنتجات | فيلمورا تكس" },
    description: {
      en: "Browse the full VilmoraTex catalog — fashion apparel and professional uniforms, filterable by category, gender, price, and availability.",
      ar: "تصفح كتالوج فيلمورا تكس بالكامل — أزياء جاهزة ويونيفورم مهني، مع فلاتر حسب الفئة والنوع والسعر والتوفر.",
    },
  });
}

export default async function ShopPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);
  return (
    <div>
      <Breadcrumbs
        items={[
          { label: dict.common.nav.home, href: "/" },
          { label: dict.products.shopPage.title },
        ]}
      />
      <section className="container-page pb-16">
        <SectionHeading
          eyebrow={dict.products.shopPage.eyebrow}
          title={dict.products.shopPage.title}
          description={dict.products.shopPage.description}
        />
        <div className="mt-8">
          <ShopExplorer products={products} />
        </div>
      </section>
    </div>
  );
}
