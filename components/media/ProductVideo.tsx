"use client";

import { useRef } from "react";

/**
 * Silent, looping product video that plays on hover/focus and pauses (and
 * resets) otherwise — used on product cards/detail pages as a motion preview.
 */
export default function ProductVideo({
  src,
  poster,
  className = "",
}: {
  src: string;
  poster?: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  const play = () => ref.current?.play().catch(() => undefined);
  const stop = () => {
    if (!ref.current) return;
    ref.current.pause();
    ref.current.currentTime = 0;
  };

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      onMouseEnter={play}
      onMouseLeave={stop}
      onFocus={play}
      onBlur={stop}
    />
  );
}
