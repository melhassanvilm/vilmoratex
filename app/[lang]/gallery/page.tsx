import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import { products } from "@/lib/products";
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
  return buildPageMetadata({
    lang,
    path: "/gallery",
    title: { en: "Gallery | VilmoraTex", ar: "المعرض | فيلمورا تكس" },
    description: {
      en: "Browse the VilmoraTex gallery — fashion collections, uniform programs, and behind-the-scenes photos from our factory floor.",
      ar: "تصفح معرض فيلمورا تكس — مجموعات الأزياء وبرامج اليونيفورم وصور من كواليس المصنع.",
    },
  });
}

export default async function GalleryPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);
  const galleryImages = products.flatMap((p) =>
    p.images.slice(0, 1).map((img) => ({ src: img, alt: p.name[lang] }))
  );

  return (
    <div>
      <Breadcrumbs
        items={[{ label: dict.common.nav.home, href: "/" }, { label: dict.common.nav.gallery }]}
      />
      <section className="container-page pb-16">
        <SectionHeading
          eyebrow={dict.products.galleryPage.eyebrow}
          title={dict.products.galleryPage.title}
          description={dict.products.galleryPage.description}
          align="center"
        />
        <div className="mt-10 columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
          {galleryImages.map((img, i) => (
            <div key={i} className="relative overflow-hidden rounded-2xl break-inside-avoid">
              <Image
                src={img.src}
                alt={img.alt}
                width={500}
                height={i % 3 === 0 ? 650 : 400}
                sizes="(min-width: 1024px) 25vw, 33vw"
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
