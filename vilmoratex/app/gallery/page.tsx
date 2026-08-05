import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse the VilmoraTex gallery — fashion collections, uniform programs, and behind-the-scenes photos from our factory floor.",
  alternates: { canonical: "/gallery" },
};

const galleryImages = [
  ...products.flatMap((p) => p.images.slice(0, 1).map((img) => ({ src: img, alt: p.name }))),
];

export default function GalleryPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Gallery" }]} />
      <section className="container-page pb-16">
        <SectionHeading
          eyebrow="Gallery"
          title="Our Collections & Factory Floor"
          description="A look at our fashion collections, uniform programs, and the production process behind every piece."
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
