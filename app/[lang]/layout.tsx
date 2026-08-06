import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Providers from "@/components/Providers";
import { LocaleProvider } from "@/components/LocaleProvider";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/site-config";
import { getDictionary } from "@/lib/dictionaries";
import { locales, type Locale } from "@/lib/i18n-config";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const isAr = lang === "ar";
  const title = isAr
    ? `${siteConfig.fullNameAr} | مصنّع أزياء ويونيفورم في مصر`
    : `${siteConfig.fullName} | Fashion & Uniform Manufacturer in Egypt`;
  const description = siteConfig.description[lang];

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: title,
      template: `%s | ${isAr ? siteConfig.nameAr : siteConfig.name}`,
    },
    description,
    keywords: isAr
      ? [
          "مصنع ملابس في مصر",
          "تصنيع يونيفورم مصر",
          "مصنع زي مدرسي",
          "علامة خاصة ملابس مصر",
          "تصنيع OEM ملابس",
          "أزياء بالجملة مصر",
          "مصنع سكراب طبي",
          "مصنع عبايات مصر",
        ]
      : [
          "garment manufacturer Egypt",
          "uniform manufacturing Egypt",
          "school uniform manufacturer",
          "private label clothing Egypt",
          "OEM garment manufacturer",
          "wholesale fashion Egypt",
          "medical scrubs manufacturer",
          "abaya manufacturer Egypt",
        ],
    openGraph: {
      type: "website",
      locale: isAr ? "ar_EG" : "en_US",
      url: `${siteConfig.url}/${lang}`,
      siteName: isAr ? siteConfig.fullNameAr : siteConfig.fullName,
      title,
      description,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.fullName }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
    },
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: "/en",
        ar: "/ar",
        "x-default": "/en",
      },
    },
    robots: { index: true, follow: true },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);

  return (
    <LocaleProvider lang={lang} dict={dict}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: siteConfig.fullName,
          alternateName: [siteConfig.name, siteConfig.fullNameAr],
          url: siteConfig.url,
          logo: `${siteConfig.url}/assets/logo/logo.png`,
          description: siteConfig.description[lang],
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: `+${siteConfig.contact.whatsappNumber}`,
              contactType: "sales",
              areaServed: "EG",
              availableLanguage: ["English", "Arabic"],
            },
          ],
          sameAs: Object.values(siteConfig.social),
        }}
      />
      <Providers>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer lang={lang} dict={dict} />
        <WhatsAppButton />
      </Providers>
    </LocaleProvider>
  );
}
