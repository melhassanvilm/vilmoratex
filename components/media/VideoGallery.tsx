"use client";

import { useState } from "react";
import Image from "next/image";
import VideoLightbox, { type LightboxVideo } from "./VideoLightbox";
import { useLocale } from "../LocaleProvider";

export type VideoGalleryItem = LightboxVideo & { poster: string };

/**
 * Grid of video thumbnails that open in a VideoLightbox on click. Works with
 * local MP4s (pass poster + src) as well as YouTube/Vimeo IDs.
 */
export default function VideoGallery({
  items,
  emptyMessage,
}: {
  items: VideoGalleryItem[];
  emptyMessage: string;
}) {
  const { lang } = useLocale();
  const [active, setActive] = useState<LightboxVideo | null>(null);

  if (items.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-brand-plum/20 p-12 text-center text-sm text-brand-charcoal/60">
        {emptyMessage}
      </p>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item, i) => (
          <button
            key={`${item.src}-${i}`}
            type="button"
            onClick={() => setActive(item)}
            aria-label={
              lang === "ar" ? `تشغيل الفيديو: ${item.title}` : `Play video: ${item.title}`
            }
            className="group relative block aspect-video overflow-hidden rounded-xl bg-brand-plum-dark"
          >
            <Image
              src={item.poster}
              alt={item.title}
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover opacity-85 transition-opacity group-hover:opacity-100"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-brand-plum shadow transition-transform group-hover:scale-110">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
            <span className="absolute inset-x-0 bottom-0 truncate bg-gradient-to-t from-black/70 to-transparent px-2 pb-1.5 pt-4 text-start text-xs font-medium text-white">
              {item.title}
            </span>
          </button>
        ))}
      </div>
      <VideoLightbox video={active} onClose={() => setActive(null)} />
    </>
  );
}
