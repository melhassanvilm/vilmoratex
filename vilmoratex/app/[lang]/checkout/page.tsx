import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import CheckoutPageClient from "@/components/CheckoutPageClient";
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
      path: "/checkout",
      title: {
        en: `${dict.common.checkout.title} | VilmoraTex`,
        ar: `${dict.common.checkout.title} | فيلمورا تكس`,
      },
      description: {
        en: "Complete your VilmoraTex order with cash payment or cash on delivery.",
        ar: "أكمل طلبك من فيلمورا تكس بالدفع النقدي أو الدفع عند الاستلام.",
      },
    }),
    robots: { index: false, follow: true },
  };
}

export default async function CheckoutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);
  return (
    <div>
      <Breadcrumbs
        items={[
          { label: dict.common.nav.home, href: "/" },
          { label: dict.common.cart.title, href: "/cart" },
          { label: dict.common.checkout.title },
        ]}
      />
      <section className="container-page pb-16">
        <SectionHeading eyebrow={dict.common.nav.cart} title={dict.common.checkout.title} />
        <div className="mt-8">
          <CheckoutPageClient />
        </div>
      </section>
    </div>
  );
}
