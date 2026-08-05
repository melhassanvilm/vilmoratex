"use client";

import Link from "next/link";
import { useState } from "react";
import { mainNav, siteConfig } from "@/lib/site-config";
import { useCart } from "./CartContext";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-brand-plum/10 bg-brand-cream/95 backdrop-blur">
      <div className="bg-brand-plum text-brand-cream">
        <div className="container-page flex items-center justify-between py-2 text-xs">
          <p className="hidden sm:block">
            Manufacturing &amp; wholesale supply across Egypt · Bulk orders welcome
          </p>
          <p className="mx-auto sm:mx-0">
            WhatsApp: <a href={`https://wa.me/${siteConfig.contact.whatsappNumber}`} className="underline decoration-brand-gold underline-offset-2">{siteConfig.contact.whatsappDisplay}</a>
          </p>
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
              onMouseEnter={() => setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-brand-charcoal transition-colors hover:bg-brand-plum/5 hover:text-brand-plum"
              >
                {item.label}
                {item.children && (
                  <svg viewBox="0 0 20 20" className="h-3 w-3 fill-current opacity-60">
                    <path d="M5 7l5 6 5-6z" />
                  </svg>
                )}
              </Link>
              {item.children && openMenu === item.label && (
                <div className="absolute left-0 top-full w-72 rounded-2xl border border-brand-plum/10 bg-white p-3 shadow-xl">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-xl px-3 py-2 text-sm text-brand-charcoal hover:bg-brand-cream hover:text-brand-plum"
                    >
                      {child.label}
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
            Request a Quote
          </Link>
          <Link
            href="/cart"
            aria-label="View cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-brand-plum/15 text-brand-plum hover:bg-brand-plum/5"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
              <path d="M3 3h2l2.4 12.4a2 2 0 0 0 2 1.6h7.2a2 2 0 0 0 2-1.6L21 8H6" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="9" cy="20" r="1.4" />
              <circle cx="17" cy="20" r="1.4" />
            </svg>
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-plum text-[10px] font-bold text-white">
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
        <nav className="border-t border-brand-plum/10 bg-white lg:hidden" aria-label="Mobile navigation">
          <div className="container-page flex flex-col py-3">
            {mainNav.map((item) => (
              <div key={item.href} className="border-b border-brand-plum/5 py-2">
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-1 font-medium text-brand-charcoal"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-3 mt-1 flex flex-col gap-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="py-1 text-sm text-brand-charcoal/70"
                      >
                        {child.label}
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
              Request a Quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
