/**
 * Plain local MP4 player. Server Component — no client JS needed for native
 * HTML5 video controls.
 */
export default function LocalVideo({
  src,
  poster,
  className = "",
  loop = false,
  muted = false,
  autoPlay = false,
  controls = true,
  ariaLabel,
}: {
  src: string;
  poster?: string;
  className?: string;
  loop?: boolean;
  muted?: boolean;
  autoPlay?: boolean;
  controls?: boolean;
  ariaLabel?: string;
}) {
  return (
    <video
      className={className}
      poster={poster}
      controls={controls}
      loop={loop}
      muted={muted}
      autoPlay={autoPlay}
      playsInline
      preload="metadata"
      aria-label={ariaLabel}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
