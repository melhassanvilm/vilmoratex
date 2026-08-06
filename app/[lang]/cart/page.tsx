import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import CartPageClient from "@/components/CartPageClient";
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
      path: "/cart",
      title: {
        en: `${dict.common.cart.title} | VilmoraTex`,
        ar: `${dict.common.cart.title} | فيلمورا تكس`,
      },
      description: {
        en: "Review the items in your VilmoraTex shopping cart before checkout.",
        ar: "راجع منتجات سلة التسوق قبل إتمام الطلب في فيلمورا تكس.",
      },
    }),
    robots: { index: false, follow: true },
  };
}

export default async function CartPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);
  return (
    <div>
      <Breadcrumbs
        items={[{ label: dict.common.nav.home, href: "/" }, { label: dict.common.cart.title }]}
      />
      <section className="container-page pb-16">
        <SectionHeading eyebrow={dict.common.cart.yourBag} title={dict.common.cart.title} />
        <div className="mt-8">
          <CartPageClient />
        </div>
      </section>
    </div>
  );
}
