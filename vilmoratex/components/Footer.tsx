import Link from "next/link";
import { footerLinks, siteConfig } from "@/lib/site-config";
import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <footer className="bg-brand-plum-dark text-brand-cream">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="font-display text-2xl font-bold">
            Vilmora<span className="text-brand-gold">Tex</span>
          </p>
          <p className="mt-3 max-w-sm text-sm text-brand-cream/70">{siteConfig.description}</p>
          <div className="mt-6">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-brand-gold">
              Join our newsletter
            </p>
            <Newsletter />
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-gold">Shop</p>
          <ul className="space-y-2 text-sm text-brand-cream/80">
            {footerLinks.shop.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-gold">Business</p>
          <ul className="space-y-2 text-sm text-brand-cream/80">
            {footerLinks.business.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-gold">Company</p>
          <ul className="space-y-2 text-sm text-brand-cream/80">
            {footerLinks.company.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
            {footerLinks.legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-5 text-xs text-brand-cream/60 sm:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.fullName}. All rights reserved.</p>
          <div className="flex gap-4">
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
            <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white">Facebook</a>
            <a href={siteConfig.social.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-white">TikTok</a>
            <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
