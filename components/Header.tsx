"use client";

import Link from "@/components/LocaleLink";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { mainNav, siteConfig } from "@/lib/site-config";
import { locales, localeNames, localizePath, type Locale } from "@/lib/i18n-config";
import { useCart } from "./CartContext";
import { useLocale } from "./LocaleProvider";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const { count } = useCart();
  const { lang, dict } = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const nav = dict.common.nav as Record<string, string>;

  const switchTo = (target: Locale) => {
    router.push(localizePath(pathname || "/", target));
  };

  return (
    <header className="sticky top-0 z-40 border-b border-brand-plum/10 bg-brand-cream/95 backdrop-blur">
      <div className="bg-brand-plum text-brand-cream">
        <div className="container-page flex items-center justify-between gap-3 py-2 text-xs">
          <p className="hidden sm:block">{dict.common.topBar.message}</p>
          <div className="mx-auto flex items-center gap-4 sm:mx-0">
            <p>
              {dict.common.topBar.whatsapp}:{" "}
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                className="underline decoration-brand-gold underline-offset-2"
              >
                {siteConfig.contact.whatsappDisplay}
              </a>
            </p>
            <div className="flex items-center gap-1" aria-label={dict.common.misc.languageSwitcher}>
              {locales.map((l) => (
                <button
                  key={l}
                  onClick={() => switchTo(l)}
                  aria-pressed={lang === l}
                  className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                    lang === l
                      ? "bg-brand-gold text-brand-plum-dark"
                      : "text-brand-cream/70 hover:text-white"
                  }`}
                >
                  {localeNames[l]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container-page flex items-center justify-between py-4">
        <Link href="/" className="font-display text-2xl font-bold tracking-wide text-brand-plum">
          Vilmora<span className="text-brand-gold">Tex</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {mainNav.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => setOpenMenu(item.key)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-brand-charcoal transition-colors hover:bg-brand-plum/5 hover:text-brand-plum"
              >
                {nav[item.key]}
                {item.children && (
                  <svg viewBox="0 0 20 20" className="h-3 w-3 fill-current opacity-60">
                    <path d="M5 7l5 6 5-6z" />
                  </svg>
                )}
              </Link>
              {item.children && openMenu === item.key && (
                <div className="absolute start-0 top-full w-72 rounded-2xl border border-brand-plum/10 bg-white p-3 shadow-xl">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-xl px-3 py-2 text-sm text-brand-charcoal hover:bg-brand-cream hover:text-brand-plum"
                    >
                      {nav[child.key]}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/quote"
            className="hidden rounded-full bg-brand-gold px-5 py-2 text-sm font-semibold text-brand-plum-dark transition-transform hover:scale-105 md:inline-block"
          >
            {dict.common.buttons.requestQuote}
          </Link>
          <Link
            href="/cart"
            aria-label={nav.cart}
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-brand-plum/15 text-brand-plum hover:bg-brand-plum/5"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
              <path
                d="M3 3h2l2.4 12.4a2 2 0 0 0 2 1.6h7.2a2 2 0 0 0 2-1.6L21 8H6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="9" cy="20" r="1.4" />
              <circle cx="17" cy="20" r="1.4" />
            </svg>
            {count > 0 && (
              <span className="absolute -end-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-plum text-[10px] font-bold text-white">
                {count}
              </span>
            )}
          </Link>
          <button
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-plum/15 text-brand-plum lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
              {mobileOpen ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          className="border-t border-brand-plum/10 bg-white lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="container-page flex flex-col py-3">
            {mainNav.map((item) => (
              <div key={item.href} className="border-b border-brand-plum/5 py-2">
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-1 font-medium text-brand-charcoal"
                >
                  {nav[item.key]}
                </Link>
                {item.children && (
                  <div className="ms-3 mt-1 flex flex-col gap-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="py-1 text-sm text-brand-charcoal/70"
                      >
                        {nav[child.key]}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/quote"
              onClick={() => setMobileOpen(false)}
              className="mt-3 rounded-full bg-brand-gold px-5 py-2 text-center text-sm font-semibold text-brand-plum-dark"
            >
              {dict.common.buttons.requestQuote}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
