export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { products } from "@/lib/products";
import { categories } from "@/lib/categories";
import { blogPosts } from "@/lib/blog";
import { locales } from "@/lib/i18n-config";

function entry(
  path: string,
  opts: {
    lastModified?: Date;
    changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority?: number;
  } = {}
) {
  const normalized = path === "" ? "" : path;
  return locales.map((lang) => ({
    url: `${siteConfig.url}/${lang}${normalized}`,
    lastModified: opts.lastModified ?? new Date(),
    changeFrequency: opts.changeFrequency ?? ("weekly" as const),
    priority: opts.priority ?? 0.7,
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `${siteConfig.url}/${l}${normalized}`])),
    },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    { path: "", priority: 1 },
    { path: "/about", priority: 0.7 },
    { path: "/shop", priority: 0.9 },
    { path: "/categories", priority: 0.8 },
    { path: "/collections", priority: 0.8 },
    { path: "/manufacturing", priority: 0.8 },
    { path: "/wholesale", priority: 0.8 },
    { path: "/private-label", priority: 0.7 },
    { path: "/uniforms", priority: 0.8 },
    { path: "/gallery", priority: 0.6 },
    { path: "/video-gallery", priority: 0.6 },
    { path: "/blog", priority: 0.6 },
    { path: "/faq", priority: 0.5 },
    { path: "/contact", priority: 0.6 },
    { path: "/quote", priority: 0.7 },
    { path: "/privacy-policy", priority: 0.3 },
    { path: "/terms", priority: 0.3 },
    { path: "/shipping-policy", priority: 0.3 },
    { path: "/returns-policy", priority: 0.3 },
  ];

  const staticRoutes = staticPaths.flatMap(({ path, priority }) => entry(path, { priority }));

  const productRoutes = products.flatMap((p) => entry(`/shop/${p.slug}`, { priority: 0.6 }));

  const categoryRoutes = categories.flatMap((c) =>
    entry(`/categories/${c.slug}`, { priority: 0.6 })
  );

  const blogRoutes = blogPosts.flatMap((b) =>
    entry(`/blog/${b.slug}`, {
      lastModified: new Date(b.date),
      changeFrequency: "monthly",
      priority: 0.5,
    })
  );

  return [...staticRoutes, ...productRoutes, ...categoryRoutes, ...blogRoutes];
}
