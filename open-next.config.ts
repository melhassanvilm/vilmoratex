import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// See https://opennext.js.org/cloudflare/caching for incremental cache /
// tag-revalidation options (e.g. wiring up a KV or R2 binding) if you later
// add ISR/on-demand revalidation to any route.
export default defineCloudflareConfig();
