import Image from "next/image";
import { getAssetImages } from "@/lib/assets";

/**
 * Renders every image found in `public/assets/<folder>` as a responsive grid.
 * Server Component — reads the filesystem at build time, so new files dropped
 * into the folder appear automatically on the next deploy with no code changes.
 */
export default function AssetImageGrid({
  folder,
  altPrefix,
  emptyMessage,
  columns = "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
}: {
  folder: string;
  altPrefix: string;
  emptyMessage: string;
  columns?: string;
}) {
  const images = getAssetImages(folder);

  if (images.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-brand-plum/20 p-12 text-center text-sm text-brand-charcoal/60">
        {emptyMessage}
      </p>
    );
  }

  return (
    <div className={`grid gap-3 ${columns}`}>
      {images.map((src, i) => (
        <div
          key={src}
          className="relative aspect-square overflow-hidden rounded-2xl bg-brand-cream"
        >
          <Image
            src={src}
            alt={`${altPrefix} ${i + 1}`}
            fill
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
