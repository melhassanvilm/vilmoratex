import Link from "next/link";
import JsonLd from "./JsonLd";
import { siteConfig } from "@/lib/site-config";

export type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.label,
            item: item.href ? `${siteConfig.url}${item.href}` : undefined,
          })),
        }}
      />
      <nav aria-label="Breadcrumb" className="container-page py-4 text-sm text-brand-charcoal/60">
        <ol className="flex flex-wrap items-center gap-1">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center gap-1">
              {item.href ? (
                <Link href={item.href} className="hover:text-brand-plum">
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page" className="text-brand-charcoal">
                  {item.label}
                </span>
              )}
              {idx < items.length - 1 && <span className="mx-1 text-brand-charcoal/30">/</span>}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
