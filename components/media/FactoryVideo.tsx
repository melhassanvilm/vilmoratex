import LocalVideo from "./LocalVideo";

/**
 * Inline card-style video player for factory/manufacturing-process sections,
 * with an optional caption underneath.
 */
export default function FactoryVideo({
  src,
  poster,
  caption,
}: {
  src: string;
  poster?: string;
  caption?: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-brand-plum/10 bg-white shadow-sm">
      <LocalVideo
        src={src}
        poster={poster}
        className="aspect-video w-full bg-black object-cover"
        controls
      />
      {caption && <p className="px-5 py-3 text-sm text-brand-charcoal/70">{caption}</p>}
    </div>
  );
}
