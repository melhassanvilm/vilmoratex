import type { Metadata } from "next";
import Link from "@/components/LocaleLink";
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
      path: "/checkout/thank-you",
      title: {
        en: `${dict.common.checkout.thankYouTitle} | VilmoraTex`,
        ar: `${dict.common.checkout.thankYouTitle} | فيلمورا تكس`,
      },
      description: {
        en: "Thank you for your order from VilmoraTex.",
        ar: "شكرًا لطلبك من فيلمورا تكس.",
      },
    }),
    robots: { index: false, follow: true },
  };
}

export default async function ThankYouPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold/20 text-brand-gold">
        <svg viewBox="0 0 24 24" className="h-8 w-8 fill-none stroke-current stroke-2">
          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h1 className="mt-6 font-display text-3xl font-semibold text-brand-plum sm:text-4xl">
        {dict.common.checkout.thankYouTitle}
      </h1>
      <p className="mt-3 max-w-md text-brand-charcoal/70">{dict.common.checkout.thankYouBody}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/shop"
          className="rounded-full bg-brand-plum px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
        >
          {dict.common.buttons.continueShopping}
        </Link>
        <Link
          href="/"
          className="rounded-full border border-brand-plum/20 px-6 py-3 text-sm font-semibold text-brand-plum hover:bg-brand-plum/5"
        >
          {dict.common.buttons.backToHome}
        </Link>
      </div>
    </div>
  );
}
