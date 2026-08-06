"use client";

import { useLocale } from "./LocaleProvider";

export default function ShareButtons({ title, url }: { title: string; url: string }) {
  const { lang } = useLocale();
  const links = [
    {
      label: "WhatsApp",
      href: `https://wa.me/?text=${encodeURIComponent(`${title} — ${url}`)}`,
    },
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    {
      label: "X",
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    },
  ];

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-brand-charcoal/60">{lang === "ar" ? "مشاركة:" : "Share:"}</span>
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-brand-plum/15 px-3 py-1 text-xs font-medium text-brand-plum hover:bg-brand-plum/5"
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}
