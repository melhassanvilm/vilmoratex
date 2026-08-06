import type { Metadata } from "next";
import { siteConfig } from "./site-config";
import type { Locale } from "./i18n-config";

/**
 * Builds a per-locale Metadata object for a static leaf page: bilingual
 * title/description, canonical + hreflang alternates, Open Graph, Twitter.
 * `path` is locale-agnostic (e.g. "/shop") — the `/en` or `/ar` prefix and
 * hreflang variants are added automatically.
 */
export function buildPageMetadata({
  lang,
  path,
  title,
  description,
  keywords,
  image,
}: {
  lang: Locale;
  path: string;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  keywords?: { en: string[]; ar: string[] };
  image?: string;
}): Metadata {
  const isAr = lang === "ar";
  const pageTitle = title[lang];
  const pageDescription = description[lang];
  const ogImage = image || siteConfig.ogImage;
  const normalizedPath = path === "/" ? "" : path;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: keywords ? keywords[lang] : undefined,
    openGraph: {
      type: "website",
      locale: isAr ? "ar_EG" : "en_US",
      url: `${siteConfig.url}/${lang}${normalizedPath}`,
      siteName: isAr ? siteConfig.fullNameAr : siteConfig.fullName,
      title: pageTitle,
      description: pageDescription,
      images: [{ url: ogImage, width: 1200, height: 630, alt: pageTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [ogImage],
    },
    alternates: {
      canonical: `/${lang}${normalizedPath}`,
      languages: {
        en: `/en${normalizedPath}`,
        ar: `/ar${normalizedPath}`,
        "x-default": `/en${normalizedPath}`,
      },
    },
  };
}
