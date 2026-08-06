import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import WishlistPageClient from "@/components/WishlistPageClient";
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
  return {
    ...buildPageMetadata({
      lang,
      path: "/wishlist",
      title: {
        en: `${dict.common.wishlist.title} | VilmoraTex`,
        ar: `${dict.common.wishlist.title} | فيلمورا تكس`,
      },
      description: {
        en: "Products you've saved for later at VilmoraTex.",
        ar: "المنتجات التي حفظتها لوقت لاحق في فيلمورا تكس.",
      },
    }),
    robots: { index: false, follow: true },
  };
}

export default async function WishlistPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);
  return (
    <div>
      <Breadcrumbs
        items={[{ label: dict.common.nav.home, href: "/" }, { label: dict.common.wishlist.title }]}
      />
      <section className="container-page pb-16">
        <SectionHeading eyebrow={dict.common.nav.wishlist} title={dict.common.wishlist.title} />
        <div className="mt-8">
          <WishlistPageClient />
        </div>
      </section>
    </div>
  );
}
