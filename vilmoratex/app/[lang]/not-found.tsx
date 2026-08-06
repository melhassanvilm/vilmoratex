"use client";

import { usePathname } from "next/navigation";
import Link from "@/components/LocaleLink";

const copy = {
  en: {
    heading: "This page has stepped out of the collection",
    body: "The page you're looking for may have been moved or no longer exists. Let's get you back to shopping or exploring our manufacturing services.",
    home: "Back to Home",
    shop: "Browse Shop",
  },
  ar: {
    heading: "يبدو أن هذه الصفحة غير موجودة",
    body: "الصفحة اللي بتدور عليها ممكن تكون اتنقلت أو مبقتش موجودة. خلينا نرجّعك للتسوق أو لاستكشاف خدمات التصنيع عندنا.",
    home: "العودة للرئيسية",
    shop: "تصفح المتجر",
  },
};

export default function NotFound() {
  const pathname = usePathname();
  const lang = pathname?.startsWith("/ar") ? "ar" : "en";
  const t = copy[lang];

  return (
    <div
      className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <p className="font-display text-8xl font-bold text-brand-plum/20">404</p>
      <h1 className="mt-4 font-display text-3xl font-semibold text-brand-plum">{t.heading}</h1>
      <p className="mt-3 max-w-md text-brand-charcoal/70">{t.body}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-full bg-brand-plum px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
        >
          {t.home}
        </Link>
        <Link
          href="/shop"
          className="rounded-full border border-brand-plum/20 px-6 py-3 text-sm font-semibold text-brand-plum hover:bg-brand-plum/5"
        >
          {t.shop}
        </Link>
      </div>
    </div>
  );
}
