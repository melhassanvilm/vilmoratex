import Link from "@/components/LocaleLink";
import BackgroundVideo from "./BackgroundVideo";

/**
 * Ready-to-use video hero banner: full-height background video with
 * eyebrow/title/description/CTA content, mirroring the image Hero's layout.
 */
export default function HeroVideo({
  src,
  poster,
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
}: {
  src: string;
  poster?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <BackgroundVideo src={src} poster={poster} className="h-[70vh] min-h-[420px] w-full">
      <div className="container-page flex h-full items-end pb-14 sm:items-center sm:pb-0">
        <div className="max-w-xl text-brand-cream">
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-brand-gold">
              {eyebrow}
            </p>
          )}
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-base text-brand-cream/85 sm:text-lg">{description}</p>
          )}
          {ctaLabel && ctaHref && (
            <Link
              href={ctaHref}
              className="mt-7 inline-block rounded-full bg-brand-gold px-7 py-3 text-sm font-semibold text-brand-plum-dark transition-transform hover:scale-105"
            >
              {ctaLabel}
            </Link>
          )}
        </div>
      </div>
    </BackgroundVideo>
  );
}
