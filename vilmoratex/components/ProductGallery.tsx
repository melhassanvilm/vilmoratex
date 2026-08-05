"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [origin, setOrigin] = useState("50% 50%");

  return (
    <div>
      <div
        className="relative aspect-[3/4] w-full cursor-zoom-in overflow-hidden rounded-2xl bg-brand-cream"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;
          setOrigin(`${x}% ${y}%`);
        }}
        onMouseEnter={() => setZoomed(true)}
        onMouseLeave={() => setZoomed(false)}
      >
        <Image
          src={images[active]}
          alt={`${name} — view ${active + 1}`}
          fill
          sizes="(min-width: 1024px) 40vw, 90vw"
          className="object-cover transition-transform duration-300"
          style={{ transform: zoomed ? "scale(1.8)" : "scale(1)", transformOrigin: origin }}
          priority
        />
      </div>
      {images.length > 1 && (
        <div className="mt-3 flex gap-3">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setActive(i)}
              aria-label={`Show image ${i + 1}`}
              className={`relative h-20 w-16 flex-shrink-0 overflow-hidden rounded-lg border-2 ${
                active === i ? "border-brand-plum" : "border-transparent"
              }`}
            >
              <Image src={src} alt="" fill sizes="64px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
