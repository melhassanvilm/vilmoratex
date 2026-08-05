import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Providers from "@/components/Providers";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.fullName} | Fashion & Uniform Manufacturer in Egypt`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
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
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.fullName,
    title: `${siteConfig.fullName} | Fashion & Uniform Manufacturer in Egypt`,
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.fullName }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.fullName} | Fashion & Uniform Manufacturer in Egypt`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col antialiased">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: siteConfig.fullName,
            alternateName: siteConfig.name,
            url: siteConfig.url,
            logo: `${siteConfig.url}/images/logo.png`,
            description: siteConfig.description,
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
          <Footer />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
