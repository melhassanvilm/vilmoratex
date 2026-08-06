# VilmoraTex — Bilingual Fashion & Uniform Manufacturer Website

A production-ready, fully bilingual (Arabic & English) static e-commerce/catalog website for **VilmoraTex Trading & Industry**, built with Next.js 16 (App Router), TypeScript, and Tailwind CSS 4. The site is statically generated (SSG) for every page in both languages and is designed to deploy on **Cloudflare Pages** directly from **GitHub**.

Because VilmoraTex currently accepts **cash payment and cash on delivery only**, checkout and quote requests are handled by pre-filling a WhatsApp message (in the visitor's language) with the order/quote details — no payment backend is required today, and the architecture is prepared to add real payment gateways, an ERP, and customer accounts later (see [Future Integrations](#future-integrations)).

## Tech Stack

- **Next.js 16** (App Router, static export, no middleware)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4** (CSS-first theme via `app/globals.css`, RTL-safe logical properties)
- **ESLint 9** (`eslint-config-next`) + **Prettier 3** for consistent, lint-clean code
- System font stack for headings/body (no external font requests, works in offline/restricted build environments)
- No external backend/database — content and translations live in typed data files under `lib/` and `locales/`

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000 — auto-redirects to /en or /ar based on your browser language
```

Build a production static export:

```bash
npm run build     # outputs static site to /out, prerenders every page in both /en and /ar
npm run start     # optional: serve the .next build locally (non-export mode preview)
```

Lint & format:

```bash
npm run lint          # ESLint (Next.js + TypeScript + accessibility rules)
npm run lint:fix       # ESLint with auto-fix
npm run format         # Prettier — writes formatting fixes
npm run format:check   # Prettier — check only, no writes (used in CI)
```

The `npm run build` command produces a fully static site in the **`out/`** directory — this is what gets deployed to Cloudflare Pages.

## Bilingual / i18n Architecture

The site supports **English (`/en`)** and **Arabic (`/ar`)**, fully statically generated, with no middleware (required for static export / Cloudflare Pages compatibility).

**How routing works:**

- `app/[lang]/` is the dynamic-segment "root" for every real page (`/en/shop`, `/ar/shop`, etc.). `app/[lang]/layout.tsx` calls `generateStaticParams()` to prerender both locales for every route, and loads that locale's dictionary via `getDictionary(lang)`.
- The bare `app/page.tsx` (outside `[lang]`) is a tiny client component that runs on first visit to `/`: it reads `navigator.language`, remembers the choice, and redirects to `/en` or `/ar`. It renders visible fallback links too, so it degrades gracefully with JavaScript disabled.
- `components/LocaleLink.tsx` wraps `next/link` and automatically prefixes every `href` with the current locale, so page/component code just writes `<Link href="/shop">` instead of manually building `/en/shop` or `/ar/shop` everywhere.
- `components/LocaleProvider.tsx` exposes `useLocale()` (returns `{ lang, dict, dir }`) to every Client Component, and sets `document.documentElement.lang` / `dir` after mount.

**Where translations live:**

```
locales/
  en/
    common.json      # nav, footer, buttons, forms, cart, checkout, quote, wishlist, search, product, filters, errors
    homepage.json     # every homepage section (hero slides, rows, statistics, testimonials, etc.)
    products.json     # shop/categories/collections/search/gallery/video-gallery/blog/FAQ/about/contact page copy
    services.json     # manufacturing/wholesale/private-label/uniforms page copy
  ar/
    (same 4 files, in Arabic)
```

`lib/dictionaries.ts` dynamically imports the right locale's 4 JSON files and merges them into one `Dictionary` object, loaded once per page in `app/[lang]/layout.tsx` and passed down via `LocaleProvider`. **No UI copy is hardcoded inside components** — everything reads from `dict.common.*`, `dict.homepage.*`, `dict.products.*`, or `dict.services.*`.

Catalog data (products, categories, blog posts, reviews) lives in `lib/*.ts` as before, but every user-facing string field is now a `LocalizedText` object — `{ en: string; ar: string }` — instead of a plain string, e.g. `product.name.en` / `product.name[lang]`.

**Adding a third language later:** add its code to `locales/xx/*.json` (copy the `en/` files as a starting point), add `"xx"` to the `locales` array in `lib/i18n-config.ts`, add an `xx: () => Promise.all([...])` entry to `lib/dictionaries.ts`, and add `xx` bilingual→multilingual fields to `LocalizedText` types in `lib/categories.ts`, `lib/products.ts`, `lib/blog.ts`, `lib/reviews.ts`. `generateStaticParams()` in `app/[lang]/layout.tsx` will then automatically prerender the new locale for every route.

**A known, documented trade-off:** because Next.js requires `<html>`/`<body>` to be declared exactly once, in the true root `app/layout.tsx` — which sits _above_ the `[lang]` segment and therefore cannot read the locale at render time — the outermost `<html lang>` attribute is set to a default on the server and corrected to the real locale (`lang`/`dir`) by a small client-side effect in `LocaleProvider` immediately after hydration. This is the standard workaround used across the Next.js App Router ecosystem for static, middleware-free i18n. It does **not** affect the actual page content: every visible section is rendered server-side with the correct `dir="rtl"`/`dir="ltr"` from the very first byte (verify by viewing source on any `/ar/*` page), and Google's crawler executes JavaScript before indexing, so this has no meaningful SEO impact in practice. If you later add an edge function or reverse proxy in front of Cloudflare Pages, you can rewrite the `<html lang>` attribute at the edge for a fully server-correct value on every request.

## Environment Variables

Copy `.env.example` to `.env.local` and adjust as needed:

| Variable                          | Purpose                                                                                                                                                   |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`            | Canonical site URL, used for SEO metadata, sitemap, and OG tags                                                                                           |
| `NEXT_PUBLIC_WHATSAPP_NUMBER`     | WhatsApp number (digits only, international format) used for order/quote links                                                                            |
| `NEXT_PUBLIC_CONTACT_EMAIL`       | Contact email shown across the site                                                                                                                       |
| `NEXT_PUBLIC_QUOTE_FORM_ENDPOINT` | Optional: a URL (e.g. a Cloudflare Worker or Formspree endpoint) that also receives a JSON POST of quote submissions, in addition to the WhatsApp message |

None of these are required for the site to build and run — sensible defaults matching VilmoraTex's current contact details are already set in `lib/site-config.ts`.

## Project Structure

```
app/
  layout.tsx              True root: <html>/<body>, global CSS, minimal metadata
  page.tsx                 Bare "/" — detects browser language, redirects to /en or /ar
  robots.ts, sitemap.ts    Generated at build time, covering both locales with hreflang
  [lang]/
    layout.tsx              Per-locale layout: generateStaticParams(en, ar), loads dictionary,
                            renders Header/Footer/WhatsAppButton inside LocaleProvider
    page.tsx                 Home page
    shop/, shop/[slug]/      Shop listing + product detail
    categories/, categories/[slug]/
    collections/              Curated tag-based product rows (New Arrivals, Best Sellers, ...)
    blog/, blog/[slug]/
    gallery/, video-gallery/  Photo gallery + video gallery (reads public/assets automatically)
    search/                   Client-side catalog search (?q=...)
    manufacturing/, wholesale/, private-label/, uniforms/   Business/service pages
    quote/, contact/, faq/, about/
    cart/, checkout/, checkout/thank-you/, wishlist/         Client-side cart flow
    privacy-policy/, terms/, shipping-policy/, returns-policy/
    not-found.tsx             Bilingual 404 (detects locale from the URL client-side)
components/
  media/                    Reusable image/video components (see below)
  Header.tsx, Footer.tsx, LocaleProvider.tsx, LocaleLink.tsx, ...
lib/
  i18n-config.ts            locales, defaultLocale, localizePath(), isLocale()
  dictionaries.ts           getDictionary(lang) — loads the 4 locale/*.json files
  seo.ts                    buildPageMetadata() — bilingual title/description/hreflang helper
  assets.ts                 getAssetImages/Videos/Documents() — reads public/assets/* at build time
  products.ts, categories.ts, blog.ts, reviews.ts, site-config.ts, whatsapp.ts
locales/
  en/, ar/                  Translation JSON files (see "Bilingual / i18n Architecture" above)
public/
  assets/                   Digital asset library (see "Digital Asset Management" below)
```

## Editing Content

This site has **no CMS or database** — all content is plain TypeScript/JSON data, which keeps the site fast, free to host, and easy to statically export.

- **Products** — edit `lib/products.ts`. Each product's `name`/`description`/`longDescription` (and color `name`s) are `{ en, ar }` objects. Tags like `"bestseller"`, `"new-arrival"`, `"summer-collection"` control where a product appears on the homepage, in Collections, and in category filters.
- **Categories** — edit `lib/categories.ts` (same bilingual `{ en, ar }` pattern).
- **Blog posts** — edit `lib/blog.ts`. `title`/`excerpt`/`author`/`readingTime` are bilingual objects; `content` is `{ en: string[], ar: string[] }` (one string per paragraph).
- **Testimonials** — edit `lib/reviews.ts`.
- **UI copy / page headings / buttons / forms** — edit the relevant `locales/en/*.json` **and** `locales/ar/*.json` file. Keep both files' keys in sync; `lib/dictionaries.ts` assumes matching shapes.
- **Company info, nav, footer links, contact details, payment methods** — edit `lib/site-config.ts` (bilingual fields use `{ en, ar }`).

Because pages are statically generated, changes to these files require a rebuild (`npm run build`) to appear live — this happens automatically on every push if you use the GitHub Actions workflow or Cloudflare's Git integration (see below).

## Digital Asset Management

`public/assets/` is pre-scaffolded with a full folder structure for photos, videos, and documents you'll add over time:

```
public/assets/
  logo/  hero/  banners/  collections/  factory/  team/  gallery/  blog/  videos/  icons/  documents/  downloads/
  products/  women/ men/ kids/ uniforms/ dresses/ abayas/ pajamas/ accessories/
  uniforms/  schools/ hospitals/ engineering/ corporate/ restaurants/ hotels/ factories/
```

**Files dropped into these folders are picked up automatically** — no code changes or hardcoded paths required. `lib/assets.ts` exports:

- `getAssetImages(folder)` / `getAssetVideos(folder)` / `getAssetDocuments(folder)` — return every matching file in a `public/assets/<folder>` directory as public URLs, read from the filesystem at build time (Server Components / build-time code only, never `"use client"`).
- `getFirstAssetImage(folder, fallback)` — first image in a folder, or a fallback if it's still empty.
- `ASSET_FOLDERS` — typed constants for every folder path above, so you don't have to type them by hand.
- `components/media/AssetImageGrid.tsx` / `AssetImage.tsx` — ready-to-use components built on top of these helpers, with a graceful empty state.

The **Gallery**, **Video Gallery**, and product imagery are all wired to this system. For example, the Video Gallery page (`app/[lang]/video-gallery/page.tsx`) automatically lists every video in `public/assets/videos/`, pairs each with a same-named poster image if one exists, and shows a friendly bilingual empty state (with a WhatsApp CTA) until you add your first video.

Supported formats: WebP, JPG, PNG, SVG, GIF, AVIF for images; MP4, WebM, MOV for video; PDF/DOC/XLS for documents. All images use `next/image` with `images.unoptimized: true` (required for static export) and lazy loading by default.

## Video Components

Reusable video components live in `components/media/`:

| Component         | Use case                                                                                           |
| ----------------- | -------------------------------------------------------------------------------------------------- |
| `LocalVideo`      | Plain local MP4 player (native `<video>` controls)                                                 |
| `BackgroundVideo` | Full-bleed autoplay/muted/looping video with a gradient overlay + content slot                     |
| `HeroVideo`       | Ready-made video hero banner (eyebrow/title/description/CTA over a `BackgroundVideo`)              |
| `FactoryVideo`    | Card-style video player with a caption, for manufacturing/process sections                         |
| `ProductVideo`    | Silent looping video that plays on hover/focus — a motion preview on product cards                 |
| `YouTubeEmbed`    | Click-to-load, privacy-enhanced (`youtube-nocookie.com`) embed with a lightweight thumbnail facade |
| `VimeoEmbed`      | Same click-to-load facade pattern for Vimeo                                                        |
| `VideoGallery`    | Grid of video thumbnails (local or YouTube/Vimeo) that open in a lightbox                          |
| `VideoLightbox`   | Full-screen modal player, closes on Escape/backdrop click                                          |

All of them accept bilingual `aria-label`s automatically via `useLocale()` where relevant.

## Branding & Logo

No official logo file was provided at the time this project was generated, so the site currently ships with a **temporary luxury color palette** (deep plum, gold, cream — defined in `app/globals.css` under the `@theme` block as `--color-brand-*` variables) rather than colors extracted from a logo.

To apply your real logo and brand colors:

1. Add your logo file to `public/assets/logo/` (e.g. `logo.png` / `logo.svg`) — `app/[lang]/layout.tsx`'s Organization JSON-LD already references `${siteConfig.url}/assets/logo/logo.png`.
2. Extract your brand's hex colors and update the `--color-brand-*` custom properties in `app/globals.css`. Every component uses Tailwind utility classes generated from these theme variables (`bg-brand-plum`, `text-brand-gold`, etc.), so updating the theme block re-themes the entire site.
3. Swap the `Header`/`Footer` wordmark text for an `<Image>` of your logo if you'd prefer an image over styled text.

## Product Images

Product and category images currently use placeholder images from `picsum.photos` (deterministic seeded URLs, so they stay consistent across builds) — this is a **temporary placeholder solution** pending real product photography.

To replace them:

1. Add real photos to the matching folder under `public/assets/products/...` or `public/assets/uniforms/...`.
2. Update the `images` array for each product in `lib/products.ts` (and each category's `image` field in `lib/categories.ts`) to point to your local paths, or use `getAssetImages()` from `lib/assets.ts` to auto-load them.
3. Because `next.config.ts` sets `images.unoptimized: true` (required for static export), any local path or external URL works without additional Cloudflare-side image optimization configuration.

## Typography

Headings use an elegant serif system stack and body text uses a clean sans-serif system stack, both defined in `app/globals.css`. This avoids any build-time network dependency on Google Fonts (useful in restricted/offline build environments) while still rendering a refined, on-brand look on every device — in both Arabic and Latin scripts.

If you'd like to switch to a specific licensed or Google font instead, add it via `next/font/local` (self-hosted font files in `public/assets/`) or `next/font/google`, then update the `--font-display` / `--font-body` variables in `app/globals.css`. If you add an Arabic-specific font, make sure it has proper Arabic glyph coverage (e.g. Cairo, Tajawal, IBM Plex Sans Arabic) rather than relying on the Latin font's fallback stack for Arabic text.

## Deployment to Cloudflare Pages

### Option A — Cloudflare Git Integration (simplest, no secrets needed)

1. Push this repository to GitHub.
2. In the Cloudflare dashboard, go to **Workers & Pages → Create → Pages → Connect to Git**, and select this repository.
3. Set the build configuration:
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Environment variables:** add `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_WHATSAPP_NUMBER`, etc. as needed (see table above).
4. Deploy — Cloudflare will rebuild automatically on every push to your chosen branch.

### Option B — GitHub Actions (`.github/workflows/deploy.yml`)

This repo includes a ready-made workflow that builds the site and deploys it via `cloudflare/pages-action`. To use it:

1. Create a Cloudflare Pages project named `vilmoratex` (or update `projectName` in the workflow file).
2. In your GitHub repo settings, add these **secrets**: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`.
3. Add any of the environment variables from the table above as **repository variables** (`vars`) if you want to override the defaults.
4. Push to `main` — the workflow builds and deploys automatically.

## SEO

- Per-page, per-locale `generateMetadata()` (title, description, canonical URL, `hreflang` alternates for `en`/`ar`/`x-default`, Open Graph, Twitter Card) on every route, via the shared `buildPageMetadata()` helper in `lib/seo.ts`.
- `app/sitemap.ts` lists every static page, product, category, and blog post **in both languages**, each entry carrying `hreflang` alternate links to its sibling in the other language. `app/robots.ts` disallows the transactional cart/checkout/wishlist pages in both locales.
- JSON-LD structured data: `Organization` (site-wide), `Product` (product pages), `BreadcrumbList` (every page with breadcrumbs), `FAQPage` (FAQ page), `BlogPosting` (blog posts, with `inLanguage`), `ContactPage` (contact page).
- Cart, checkout, thank-you, and wishlist pages are set to `noindex` since they're transactional, not content pages.

## Accessibility

Semantic HTML landmarks (`header`, `nav`, `main`, `footer`), `aria-label`/`aria-expanded`/`aria-pressed` on interactive controls (mega menu, mobile nav, accordions, wishlist toggle, quantity steppers, video players), keyboard-operable buttons and links throughout, RTL-safe layout using Tailwind's logical properties (`start-`/`end-`/`ms-`/`me-` instead of hardcoded `left-`/`right-`), and a brand palette checked for reasonable text/background contrast — all translated aria-labels included, not just visible copy.

## Code Quality

- **ESLint** (`eslint-config-next` flat config, `core-web-vitals` + TypeScript rules) — run `npm run lint`.
- **Prettier** — run `npm run format` to auto-format, or `npm run format:check` in CI to fail on unformatted code.
- Both are zero-warning/zero-error clean on the codebase as shipped.

## Future Integrations

The codebase is deliberately structured so these can be added without a rewrite:

- **Real payment gateways** (Stripe, PayPal, Visa/Mastercard, Apple Pay, Google Pay): the checkout flow in `components/CheckoutPageClient.tsx` is isolated from the cart state (`components/CartContext.tsx`), so a payment step can be inserted before the WhatsApp/order-confirmation step without touching the cart logic.
- **ERP / inventory integration**: `lib/products.ts` is a single typed source of truth for product data — swapping it for a fetch from an ERP/inventory API is a localized change.
- **Customer login, order tracking, persistent wishlist**: `components/WishlistContext.tsx` and `components/CartContext.tsx` already persist to `localStorage` under versioned keys, making it straightforward to sync them to a real user account once authentication is added.
- **Additional languages**: see "Adding a third language later" above — the dictionary/routing system was built to extend beyond `en`/`ar`.
- **Multi-currency**: `formatPrice(price, lang)` in `lib/products.ts` is the single formatting function used everywhere prices are displayed — currency conversion/display logic can be added there.
- **Shipping company integration**: the checkout form in `components/CheckoutPageClient.tsx` already collects address and phone; a shipping-rate API call can be added alongside the existing "Shipping: Calculated at checkout" placeholder in the cart summary.

## Notes & Assumptions

- **TypeScript** is pinned to the latest 5.x line rather than the newly-released 7.x compiler for maximum tooling compatibility; upgrade at your discretion once the ecosystem catches up.
- **Product data, pricing, and images are illustrative placeholders** written to demonstrate every required page and feature in both languages — replace with real catalog data and photography before launch.
- **Arabic translations** were written to read naturally for Egyptian/Gulf customers, but as with any commercial site, a native-speaker legal/marketing review before launch is recommended — especially for the Privacy Policy, Terms & Conditions, Shipping Policy, and Returns Policy pages.
- **Privacy Policy, Terms & Conditions, Shipping Policy, and Returns Policy** are professionally-written starting templates (in both languages) and should be reviewed by a qualified legal professional before publishing.
- **No video files ship with this project** (only the component library to play/display them) — add your factory/product videos to `public/assets/videos/` and they'll appear on the Video Gallery page automatically.
