import type { ReactNode } from "react";
import LocalVideo from "./LocalVideo";

/**
 * Full-bleed autoplay/muted/looping video used as a section background,
 * with a gradient overlay and an optional content slot on top.
 */
export default function BackgroundVideo({
  src,
  poster,
  overlayClassName = "bg-gradient-to-t from-brand-plum-dark/85 via-brand-plum-dark/40 to-brand-plum-dark/10",
  className = "",
  children,
}: {
  src: string;
  poster?: string;
  overlayClassName?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={`relative overflow-hidden bg-brand-plum-dark ${className}`}>
      <LocalVideo
        src={src}
        poster={poster}
        className="absolute inset-0 h-full w-full object-cover"
        loop
        muted
        autoPlay
        controls={false}
      />
      <div className={`absolute inset-0 ${overlayClassName}`} />
      {children && <div className="relative z-10 h-full">{children}</div>}
    </div>
  );
}
