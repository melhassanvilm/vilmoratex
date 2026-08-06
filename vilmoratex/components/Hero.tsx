"use client";

import Image from "next/image";
import Link from "@/components/LocaleLink";
import { useEffect, useState } from "react";
import { useLocale } from "./LocaleProvider";

const slideImages = [
  "https://picsum.photos/seed/vilmora-hero-1/1800/1000",
  "https://picsum.photos/seed/vilmora-hero-2/1800/1000",
  "https://picsum.photos/seed/vilmora-hero-3/1800/1000",
];

export default function Hero() {
  const { dict } = useLocale();
  const slides = dict.homepage.hero.slides;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const slide = slides[index];

  return (
    <section className="relative h-[80vh] min-h-[520px] w-full overflow-hidden bg-brand-plum-dark">
      {slides.map((s, i) => (
        <div
          key={s.title}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <Image
            src={slideImages[i % slideImages.length]}
            alt={s.title}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-plum-dark/90 via-brand-plum-dark/40 to-brand-plum-dark/10" />
        </div>
      ))}

      <div className="container-page relative flex h-full items-end pb-16 sm:items-center sm:pb-0">
        <div key={slide.title} className="max-w-xl animate-fade-in-up text-brand-cream">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-brand-gold">
            {slide.eyebrow}
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {slide.title}
          </h1>
          <p className="mt-5 text-base text-brand-cream/85 sm:text-lg">{slide.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={slide.ctaHref}
              className="rounded-full bg-brand-gold px-7 py-3 text-sm font-semibold text-brand-plum-dark transition-transform hover:scale-105"
            >
              {slide.ctaLabel}
            </Link>
            <Link
              href="/quote"
              className="rounded-full border border-brand-cream/40 px-7 py-3 text-sm font-semibold text-brand-cream transition-colors hover:bg-brand-cream/10"
            >
              {dict.homepage.hero.requestQuote}
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((s, i) => (
          <button
            key={s.title}
            aria-label={`${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-8 bg-brand-gold" : "w-3 bg-brand-cream/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
