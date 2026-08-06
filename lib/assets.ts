/**
 * Digital Asset Management helpers.
 *
 * These utilities read directly from `public/assets/...` at build time (Node `fs`),
 * so this module must only be imported from Server Components, `generateStaticParams`,
 * or other build-time code — never from a "use client" component.
 *
 * Drop new files into the matching folder under `public/assets/` and they are picked
 * up automatically on the next build — no code changes or hardcoded paths required.
 */
import fs from "node:fs";
import path from "node:path";

const ASSETS_ROOT = path.join(process.cwd(), "public", "assets");

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".svg", ".gif", ".avif"]);
const VIDEO_EXTENSIONS = new Set([".mp4", ".webm", ".mov"]);
const DOCUMENT_EXTENSIONS = new Set([".pdf", ".doc", ".docx", ".xls", ".xlsx"]);

function listFiles(relFolder: string, extensions: Set<string>): string[] {
  const dir = path.join(ASSETS_ROOT, relFolder);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => !name.startsWith(".")) // skip .gitkeep, dotfiles
    .filter((name) => extensions.has(path.extname(name).toLowerCase()))
    .sort((a, b) => a.localeCompare(b))
    .map((name) => `/assets/${relFolder}/${name}`.split(path.sep).join("/"));
}

/** All images in a given `public/assets/<relFolder>` directory, as public URLs. */
export function getAssetImages(relFolder: string): string[] {
  return listFiles(relFolder, IMAGE_EXTENSIONS);
}

/** All videos (mp4/webm/mov) in a given `public/assets/<relFolder>` directory. */
export function getAssetVideos(relFolder: string): string[] {
  return listFiles(relFolder, VIDEO_EXTENSIONS);
}

/** All documents (pdf/doc/xls...) in a given `public/assets/<relFolder>` directory. */
export function getAssetDocuments(relFolder: string): string[] {
  return listFiles(relFolder, DOCUMENT_EXTENSIONS);
}

/** First image in a folder, or a fallback placeholder if the folder is empty. */
export function getFirstAssetImage(relFolder: string, fallback: string): string {
  const images = getAssetImages(relFolder);
  return images[0] ?? fallback;
}

/**
 * Canonical map of the asset folder structure (relative to `public/assets/`).
 * Use these constants instead of typing folder paths by hand.
 */
export const ASSET_FOLDERS = {
  logo: "logo",
  hero: "hero",
  banners: "banners",
  collections: "collections",
  products: {
    women: "products/women",
    men: "products/men",
    kids: "products/kids",
    uniforms: "products/uniforms",
    dresses: "products/dresses",
    abayas: "products/abayas",
    pajamas: "products/pajamas",
    accessories: "products/accessories",
  },
  uniforms: {
    schools: "uniforms/schools",
    hospitals: "uniforms/hospitals",
    engineering: "uniforms/engineering",
    corporate: "uniforms/corporate",
    restaurants: "uniforms/restaurants",
    hotels: "uniforms/hotels",
    factories: "uniforms/factories",
  },
  factory: "factory",
  team: "team",
  gallery: "gallery",
  blog: "blog",
  videos: "videos",
  icons: "icons",
  documents: "documents",
  downloads: "downloads",
} as const;
