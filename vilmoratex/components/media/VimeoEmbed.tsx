"use client";

import { useState } from "react";
import Image from "next/image";
import { useLocale } from "../LocaleProvider";

/**
 * Facade-pattern Vimeo embed, mirroring YouTubeEmbed. Vimeo has no stable
 * unauthenticated thumbnail URL by ID, so the poster image is supplied by
 * the caller (e.g. from `public/assets/videos` or the product/factory photos).
 */
export default function VimeoEmbed({
  videoId,
  title,
  poster,
}: {
  videoId: string;
  title: string;
  poster: string;
}) {
  const { lang } = useLocale();
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        className="aspect-video w-full rounded-2xl"
        src={`https://player.vimeo.com/video/${videoId}?autoplay=1`}
        title={title}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      aria-label={lang === "ar" ? `تشغيل الفيديو: ${title}` : `Play video: ${title}`}
      className="group relative block aspect-video w-full overflow-hidden rounded-2xl bg-brand-plum-dark"
    >
      <Image
        src={poster}
        alt={title}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover opacity-80 transition-opacity group-hover:opacity-100"
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-brand-plum shadow-lg transition-transform group-hover:scale-110">
          <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  );
}
