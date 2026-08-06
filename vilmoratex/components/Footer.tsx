import Link from "@/components/LocaleLink";
import { footerLinks, siteConfig } from "@/lib/site-config";
import Newsletter from "./Newsletter";
import type { Locale } from "@/lib/i18n-config";
import type { Dictionary } from "@/lib/dictionaries";

export default function Footer({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const nav = dict.common.nav as Record<string, string>;
  const footer = dict.common.footer as Record<string, string>;

  return (
    <footer className="bg-brand-plum-dark text-brand-cream">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="font-display text-2xl font-bold">
            Vilmora<span className="text-brand-gold">Tex</span>
          </p>
          <p className="mt-3 max-w-sm text-sm text-brand-cream/70">
            {siteConfig.description[lang]}
          </p>
          <div className="mt-6">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-brand-gold">
              {footer.newsletter}
            </p>
            <Newsletter />
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-gold">
            {footer.shop}
          </p>
          <ul className="space-y-2 text-sm text-brand-cream/80">
            {footerLinks.shop.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {nav[l.key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-gold">
            {footer.business}
          </p>
          <ul className="space-y-2 text-sm text-brand-cream/80">
            {footerLinks.business.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {nav[l.key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-gold">
            {footer.company}
          </p>
          <ul className="space-y-2 text-sm text-brand-cream/80">
            {footerLinks.company.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {nav[l.key]}
                </Link>
              </li>
            ))}
            {footerLinks.legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {footer[l.labelKey]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-5 text-xs text-brand-cream/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()}{" "}
            {lang === "ar" ? siteConfig.fullNameAr : siteConfig.fullName}. {footer.rightsReserved}
          </p>
          <div className="flex gap-4">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Instagram
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Facebook
            </a>
            <a
              href={siteConfig.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              TikTok
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
