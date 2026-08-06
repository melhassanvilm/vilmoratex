"use client";

import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { useLocale } from "./LocaleProvider";

const images = Array.from({ length: 8 }).map(
  (_, i) => `https://picsum.photos/seed/vilmora-insta-${i}/600/600`
);

export default function InstagramGallery() {
  const { lang } = useLocale();
  return (
    <div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-8">
        {images.map((src, i) => (
          <a
            key={src}
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden rounded-xl"
          >
            <Image
              src={src}
              alt={`VilmoraTex on Instagram ${i + 1}`}
              fill
              sizes="(min-width: 768px) 12vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </a>
        ))}
      </div>
      <p className="mt-4 text-center text-sm text-brand-charcoal/60">
        {lang === "ar" ? (
          <>
            تابعنا{" "}
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-plum hover:underline"
            >
              @vilmoratex
            </a>{" "}
            لمتابعة أحدث المنتجات وكواليس المصنع.
          </>
        ) : (
          <>
            Follow{" "}
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-plum hover:underline"
            >
              @vilmoratex
            </a>{" "}
            for new arrivals and behind-the-scenes from the factory floor.
          </>
        )}
      </p>
    </div>
  );
}
