import type { Metadata } from "next";
import Image from "next/image";
import Link from "@/components/LocaleLink";
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
  return buildPageMetadata({
    lang,
    path: "/categories",
    title: { en: "Categories | VilmoraTex", ar: "الفئات | فيلمورا تكس" },
    description: {
      en: "Browse all VilmoraTex categories — from women's, men's, and kids fashion to school, hospital, and corporate uniforms.",
      ar: "تصفح جميع فئات فيلمورا تكس — من أزياء حريمي ورجالي وأطفال إلى الزي المدرسي وزي المستشفيات والشركات.",
    },
  });
}

export default async function CategoriesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);
  return (
    <div>
      <Breadcrumbs
        items={[
          { label: dict.common.nav.home, href: "/" },
          { label: dict.products.categoriesPage.title },
        ]}
      />
      <section className="container-page pb-16">
        <SectionHeading
          eyebrow={dict.products.categoriesPage.eyebrow}
          title={dict.products.categoriesPage.title}
          align="center"
        />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/categories/${c.slug}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
            >
              <Image
                src={c.image}
                alt={c.name[lang]}
                fill
                sizes="(min-width: 1024px) 25vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-plum-dark/85 via-brand-plum-dark/10 to-transparent" />
              <div className="absolute bottom-3 start-3 end-3">
                <p className="font-display text-lg font-semibold text-white">{c.name[lang]}</p>
                <p className="mt-1 text-xs text-white/70 line-clamp-2">{c.description[lang]}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
