import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/site-config";
import { getDictionary } from "@/lib/dictionaries";
import { buildPageMetadata } from "@/lib/seo";
import type { Locale } from "@/lib/i18n-config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);
  return buildPageMetadata({
    lang,
    path: "/contact",
    title: {
      en: `${dict.products.contactPage.title} | VilmoraTex`,
      ar: `${dict.products.contactPage.title} | فيلمورا تكس`,
    },
    description: {
      en: "Get in touch with VilmoraTex Trading & Industry via WhatsApp, email, or our contact form. We're happy to help with retail orders, wholesale inquiries, and custom manufacturing.",
      ar: "تواصل مع فيلمورا تكس للتجارة والصناعة عبر واتساب أو البريد الإلكتروني أو نموذج التواصل. يسعدنا مساعدتك في طلبات التجزئة واستفسارات الجملة والتصنيع المخصص.",
    },
  });
}

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);
  const c = dict.products.contactPage;

  return (
    <div>
      <Breadcrumbs items={[{ label: dict.common.nav.home, href: "/" }, { label: c.title }]} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: `${lang === "ar" ? "تواصل مع" : "Contact"} ${siteConfig.fullName}`,
          url: `${siteConfig.url}/${lang}/contact`,
          inLanguage: lang,
        }}
      />

      <section className="container-page pb-16">
        <SectionHeading eyebrow={c.eyebrow} title={c.title} description={c.description} />

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-2xl border border-brand-plum/10 bg-white p-6">
              <h3 className="font-display text-lg font-semibold text-brand-plum">{c.whatsapp}</h3>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-brand-charcoal/80 hover:text-brand-plum"
              >
                {siteConfig.contact.whatsappDisplay}
              </a>
            </div>
            <div className="rounded-2xl border border-brand-plum/10 bg-white p-6">
              <h3 className="font-display text-lg font-semibold text-brand-plum">{c.email}</h3>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="mt-1 block text-brand-charcoal/80 hover:text-brand-plum"
              >
                {siteConfig.contact.email}
              </a>
            </div>
            <div className="rounded-2xl border border-brand-plum/10 bg-white p-6">
              <h3 className="font-display text-lg font-semibold text-brand-plum">
                {c.businessHours}
              </h3>
              <ul className="mt-1 space-y-1 text-brand-charcoal/80">
                {siteConfig.contact.hours.map((h) => (
                  <li key={h.day.en} className="flex justify-between gap-4 text-sm">
                    <span>{h.day[lang]}</span>
                    <span className="font-medium">{h.time[lang]}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-brand-plum/10 bg-white p-6">
              <h3 className="font-display text-lg font-semibold text-brand-plum">{c.address}</h3>
              <p className="mt-1 text-brand-charcoal/80">{siteConfig.contact.address[lang]}</p>
              <div className="mt-4 aspect-video overflow-hidden rounded-xl bg-brand-cream">
                <iframe
                  title={c.mapTitle}
                  src="https://www.google.com/maps?q=Cairo,Egypt&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <div className="rounded-2xl border border-brand-plum/10 bg-white p-6">
              <h3 className="font-display text-lg font-semibold text-brand-plum">{c.followUs}</h3>
              <div className="mt-2 flex flex-wrap gap-3 text-sm">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-plum hover:underline"
                >
                  Instagram
                </a>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-plum hover:underline"
                >
                  Facebook
                </a>
                <a
                  href={siteConfig.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-plum hover:underline"
                >
                  TikTok
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-plum hover:underline"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-brand-plum/10 bg-white p-6 sm:p-8">
            <h3 className="font-display text-lg font-semibold text-brand-plum">{c.sendMessage}</h3>
            <div className="mt-4">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
