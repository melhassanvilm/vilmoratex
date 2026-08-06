import type { Metadata } from "next";
import Image from "next/image";
import Link from "@/components/LocaleLink";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
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
    path: "/private-label",
    title: {
      en: `${dict.services.privateLabelPage.title} | VilmoraTex`,
      ar: `${dict.services.privateLabelPage.title} | فيلمورا تكس`,
    },
    description: {
      en: dict.services.privateLabelPage.description,
      ar: dict.services.privateLabelPage.description,
    },
  });
}

export default async function PrivateLabelPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);
  const p = dict.services.privateLabelPage;

  return (
    <div>
      <Breadcrumbs
        items={[
          { label: dict.common.nav.home, href: "/" },
          { label: dict.common.nav.privateLabel },
        ]}
      />

      <section className="container-page pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow={p.eyebrow} title={p.title} description={p.description} />
            <div className="mt-6 space-y-4 text-brand-charcoal/70">
              <p>
                <strong className="text-brand-charcoal">
                  {lang === "ar" ? "العلامة الخاصة" : "Private Label"}
                </strong>{" "}
                — {p.privateLabelDesc}
              </p>
              <p>
                <strong className="text-brand-charcoal">
                  {lang === "ar" ? "تصنيع OEM" : "OEM Manufacturing"}
                </strong>{" "}
                — {p.oemDesc}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src="https://picsum.photos/seed/vilmora-private-label-1/600/800"
                alt={
                  lang === "ar"
                    ? "مراجعة عينات الملابس لإنتاج العلامة الخاصة"
                    : "Sample garments being reviewed for private label production"
                }
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src="https://picsum.photos/seed/vilmora-private-label-2/600/800"
                alt={
                  lang === "ar"
                    ? "وضع ليبل وتغليف مخصص على الملابس النهائية"
                    : "Custom label and packaging being applied to finished garments"
                }
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-page">
          <SectionHeading eyebrow={p.eyebrow} title={p.includedTitle} align="center" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {p.included.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-brand-plum/10 bg-brand-cream p-6"
              >
                <h3 className="font-display text-lg font-semibold text-brand-plum">{f.title}</h3>
                <p className="mt-2 text-sm text-brand-charcoal/70">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 text-center">
        <h2 className="font-display text-3xl font-semibold text-brand-plum">{p.ctaTitle}</h2>
        <Link
          href="/quote"
          className="mt-6 inline-block rounded-full bg-brand-plum px-7 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
        >
          {dict.common.buttons.startPrivateLabel}
        </Link>
      </section>
    </div>
  );
}
