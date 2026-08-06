import Image, { type ImageProps } from "next/image";
import { getFirstAssetImage } from "@/lib/assets";

/**
 * Renders the first image found in `public/assets/<folder>`, falling back to
 * `fallback` (e.g. a placeholder URL) when the folder is still empty.
 * Server Component.
 */
export default function AssetImage({
  folder,
  fallback,
  alt,
  ...imageProps
}: { folder: string; fallback: string; alt: string } & Omit<ImageProps, "src" | "alt">) {
  const src = getFirstAssetImage(folder, fallback);
  return <Image src={src} alt={alt} {...imageProps} />;
}
