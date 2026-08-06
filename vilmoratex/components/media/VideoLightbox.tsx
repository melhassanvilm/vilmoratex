"use client";

import { useEffect } from "react";
import { useLocale } from "../LocaleProvider";

export type LightboxVideo = { type: "local" | "youtube" | "vimeo"; src: string; title: string };

/**
 * Full-screen modal player. `src` is a direct MP4 URL for type "local", or a
 * bare video ID for "youtube"/"vimeo". Closes on Escape, backdrop click, or
 * the close button.
 */
export default function VideoLightbox({
  video,
  onClose,
}: {
  video: LightboxVideo | null;
  onClose: () => void;
}) {
  const { lang } = useLocale();

  useEffect(() => {
    if (!video) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [video, onClose]);

  if (!video) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label={lang === "ar" ? "إغلاق" : "Close"}
        className="absolute end-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
          <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
        </svg>
      </button>
      <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
        {video.type === "local" ? (
          <video
            src={video.src}
            controls
            autoPlay
            className="aspect-video w-full rounded-2xl bg-black"
          />
        ) : (
          <iframe
            className="aspect-video w-full rounded-2xl"
            src={
              video.type === "youtube"
                ? `https://www.youtube-nocookie.com/embed/${video.src}?autoplay=1`
                : `https://player.vimeo.com/video/${video.src}?autoplay=1`
            }
            title={video.title}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
}
