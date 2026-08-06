import type { Metadata } from "next";
import Image from "next/image";
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
    path: "/about",
    title: {
      en: `${dict.products.aboutPage.title} | VilmoraTex`,
      ar: `${dict.products.aboutPage.title} | فيلمورا تكس`,
    },
    description: {
      en: "VilmoraTex Trading & Industry is an Egyptian garment manufacturer producing fashion apparel and professional uniforms from our own factory. Learn about our story, our factory, and our team.",
      ar: "فيلمورا تكس للتجارة والصناعة مصنّع أزياء مصري ينتج ملابس جاهزة ويونيفورم مهني من داخل مصنعه الخاص. تعرّف على قصتنا ومصنعنا وفريقنا.",
    },
  });
}

const factoryImages = [
  "https://picsum.photos/seed/vilmora-factory-cutting/700/500",
  "https://picsum.photos/seed/vilmora-factory-sewing/700/500",
  "https://picsum.photos/seed/vilmora-factory-embroidery/700/500",
];

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);
  const a = dict.products.aboutPage;

  return (
    <div>
      <Breadcrumbs
        items={[{ label: dict.common.nav.home, href: "/" }, { label: dict.common.nav.about }]}
      />

      <section className="container-page pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
              {a.eyebrow}
            </p>
            <h1 className="font-display text-4xl font-semibold text-brand-plum">{a.title}</h1>
            <p className="mt-5 text-brand-charcoal/70">{a.para1}</p>
            <p className="mt-4 text-brand-charcoal/70">{a.para2}</p>
            <p className="mt-4 text-brand-charcoal/70">{a.para3}</p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="https://picsum.photos/seed/vilmora-about-team/1000/1250"
              alt={
                lang === "ar"
                  ? "فريق الإنتاج في فيلمورا تكس أثناء العمل"
                  : "The VilmoraTex production team at work"
              }
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-page">
          <SectionHeading eyebrow={a.factoryEyebrow} title={a.factoryTitle} align="center" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {a.factoryFeatures.map((f, i) => (
              <div
                key={f.title}
                className="overflow-hidden rounded-2xl border border-brand-plum/10 bg-brand-cream"
              >
                <div className="relative aspect-[7/5]">
                  <Image
                    src={factoryImages[i]}
                    alt={f.title}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-brand-plum">{f.title}</h3>
                  <p className="mt-2 text-sm text-brand-charcoal/70">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <SectionHeading eyebrow={a.journeyEyebrow} title={a.journeyTitle} align="center" />
        <div className="mx-auto mt-10 max-w-2xl space-y-6">
          {a.milestones.map((m) => (
            <div
              key={m.year}
              className="flex gap-5 rounded-2xl border border-brand-plum/10 bg-white p-6"
            >
              <span className="font-display text-lg font-semibold text-brand-gold">{m.year}</span>
              <p className="text-brand-charcoal/70">{m.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
