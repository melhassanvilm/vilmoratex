export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { locales } from "@/lib/i18n-config";

export default function robots(): MetadataRoute.Robots {
  const disallow = locales.flatMap((lang) => [
    `/${lang}/cart`,
    `/${lang}/checkout`,
    `/${lang}/checkout/thank-you`,
    `/${lang}/wishlist`,
  ]);

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow,
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
