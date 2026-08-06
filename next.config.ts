import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    // Cloudflare Workers deployment: keep unoptimized to avoid requiring a
    // paid Cloudflare Images subscription. Switch this to a Cloudflare
    // Images loader later if you want on-the-fly image optimization.
    unoptimized: true,
  },
};

export default nextConfig;

// Added for Cloudflare: enables `getCloudflareContext()` during `next dev`
// so local development can access Cloudflare bindings/env the same way the
// deployed Worker does. Only affects `next dev`, not the production build.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
