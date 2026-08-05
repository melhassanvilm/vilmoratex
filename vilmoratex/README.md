# VilmoraTex — Fashion & Uniform Manufacturer Website

A production-ready, static e-commerce/catalog website for **VilmoraTex Trading & Industry**, built with Next.js 16 (App Router), TypeScript, and Tailwind CSS 4. The site is fully statically generated (SSG) and designed to deploy on **Cloudflare Pages** directly from **GitHub**.

Because VilmoraTex currently accepts **cash payment and cash on delivery only**, checkout and quote requests are handled by pre-filling a WhatsApp message with the order/quote details — no payment backend is required today, and the architecture is prepared to add real payment gateways, an ERP, and customer accounts later (see [Future Integrations](#future-integrations)).

## Tech Stack

- **Next.js 16** (App Router, static export)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4** (CSS-first theme via `app/globals.css`)
- System font stack for headings/body (no external font requests)
- No external backend/database — content lives in typed data files under `lib/`

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
```

Build a production static export:

```bash
npm run build     # outputs static site to /out
npm run start     # optional: serve the .next build locally (non-export mode preview)
```

The `npm run build` command produces a fully static site in the **`out/`** directory — this is what gets deployed to Cloudflare Pages.

## Environment Variables

Copy `.env.example` to `.env.local` and adjust as needed:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL, used for SEO metadata, sitemap, and OG tags |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number (digits only, international format) used for order/quote links |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Contact email shown across the site |
| `NEXT_PUBLIC_QUOTE_FORM_ENDPOINT` | Optional: a URL (e.g. a Cloudflare Worker or Formspree endpoint) that also receives a JSON POST of quote submissions, in addition to the WhatsApp message |

None of these are required for the site to build and run — sensible defaults matching VilmoraTex's current contact details are already set in `lib/site-config.ts`.

## Project Structure

```
app/                     App Router pages (one folder per route)
  layout.tsx             Root layout: fonts, metadata, header/footer, providers
  page.tsx                Home page
  shop/                   Shop listing + shop/[slug] product detail
  categories/             Categories listing + categories/[slug]
  blog/                   Blog listing + blog/[slug]
  manufacturing/, wholesale/, private-label/, uniforms/   Business pages
  quote/                  Request a Quote form page
  cart/, checkout/, checkout/thank-you/, wishlist/        Client-side cart flow
  contact/, faq/, about/, privacy-policy/, terms/
  not-found.tsx           Custom 404 page
  sitemap.ts, robots.ts   Generated at build time
components/              Reusable UI components (Header, Footer, ProductCard, forms, etc.)
lib/                     Typed content & config: products.ts, categories.ts, blog.ts,
                         reviews.ts, site-config.ts, whatsapp.ts
public/                  Static assets (add your logo and real product photos here)
```

## Editing Content

This site has **no CMS or database** — all content is plain TypeScript data, which keeps the site fast, free to host, and easy to statically export.

- **Products** — edit `lib/products.ts`. Each product has images, sizes, colors, price, availability, and tags (e.g. `"bestseller"`, `"new-arrival"`, `"summer-collection"`) that control where it appears on the homepage and category pages.
- **Categories** — edit `lib/categories.ts`.
- **Blog posts** — edit `lib/blog.ts`.
- **Testimonials** — edit `lib/reviews.ts`.
- **Company info, nav, footer links** — edit `lib/site-config.ts`.

Because pages are statically generated, changes to these files require a rebuild (`npm run build`) to appear live — this happens automatically on every push if you use the GitHub Actions workflow or Cloudflare's Git integration (see below).

## Branding & Logo

No official logo file was available at the time this project was generated, so the site currently ships with a **temporary luxury color palette** (deep plum, gold, cream — defined in `app/globals.css` under the `@theme` block as `--color-brand-*` variables) rather than colors extracted from a logo.

To apply your real logo and brand colors:

1. Add your logo file to `public/images/logo.png` (and update the `logo` reference in `app/layout.tsx`'s JSON-LD block).
2. Extract your brand's hex colors and update the `--color-brand-*` custom properties in `app/globals.css`. Every component uses Tailwind utility classes generated from these theme variables (`bg-brand-plum`, `text-brand-gold`, etc.), so updating the theme block re-themes the entire site.
3. Replace the `Header` logo text (`Vilmora<span>Tex</span>`) in `components/Header.tsx` and `components/Footer.tsx` with an `<Image>` of your logo if you'd prefer a wordmark image over styled text.

## Product Images

Product and category images currently use placeholder images from `picsum.photos` (deterministic seeded URLs, so they stay consistent across builds) — this is clearly a **temporary placeholder solution** pending real product photography.

To replace them:

1. Add real photos to `public/images/products/...`.
2. Update the `images` array for each product in `lib/products.ts` (and each category's `image` field in `lib/categories.ts`) to point to your local paths (e.g. `/images/products/linen-breeze-1.jpg`).
3. Because `next.config.ts` sets `images.unoptimized: true` (required for static export), any image path or external URL works without additional Cloudflare-side image optimization configuration.

## Typography

Headings use an elegant serif system stack (`Georgia, "Iowan Old Style", "Times New Roman", serif`) and body text uses a clean sans-serif system stack (`-apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`), both defined in `app/globals.css`. This avoids any build-time network dependency on Google Fonts (useful in restricted/offline build environments) while still rendering a refined, on-brand look on every device.

If you'd like to switch to a specific licensed or Google font instead, add it via `next/font/local` (self-hosted font files in `public/fonts/`) or `next/font/google`, then update the `--font-display` / `--font-body` variables in `app/globals.css` to reference it.

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

- Per-page `metadata` exports (title, description, canonical URL, Open Graph, Twitter Card) on every route.
- `app/sitemap.ts` and `app/robots.ts` generate `sitemap.xml` and `robots.txt` automatically at build time, including every product, category, and blog post.
- JSON-LD structured data: `Organization` (site-wide), `Product` (product pages), `BreadcrumbList` (every page with breadcrumbs), `FAQPage` (FAQ page), `BlogPosting` (blog posts), `ContactPage` (contact page).
- Cart, checkout, thank-you, and wishlist pages are set to `noindex` since they're transactional, not content pages.

## Accessibility

Semantic HTML landmarks (`header`, `nav`, `main`, `footer`), `aria-label`/`aria-expanded`/`aria-pressed` on interactive controls (mega menu, mobile nav, accordions, wishlist toggle, quantity steppers), keyboard-operable buttons and links throughout, and a brand palette checked for reasonable text/background contrast.

## Future Integrations

The codebase is deliberately structured so these can be added without a rewrite:

- **Real payment gateways** (Stripe, PayPal, Visa/Mastercard, Apple Pay, Google Pay): the checkout flow in `components/CheckoutPageClient.tsx` is isolated from the cart state (`components/CartContext.tsx`), so a payment step can be inserted before the WhatsApp/order-confirmation step without touching the cart logic.
- **ERP / inventory integration**: `lib/products.ts` is a single typed source of truth for product data — swapping it for a fetch from an ERP/inventory API is a localized change.
- **Customer login, order tracking, persistent wishlist**: `components/WishlistContext.tsx` and `components/CartContext.tsx` already persist to `localStorage` under versioned keys, making it straightforward to sync them to a real user account once authentication is added.
- **Arabic language / i18n**: content is centralized in `lib/*.ts` files and component copy, which can be extracted into locale dictionaries for `next-intl` or the App Router's built-in i18n routing.
- **Multi-currency**: `formatPrice()` in `lib/products.ts` is the single formatting function used everywhere prices are displayed — currency conversion/display logic can be added there.
- **Shipping company integration**: the checkout form in `components/CheckoutPageClient.tsx` already collects address and phone; a shipping-rate API call can be added alongside the existing "Shipping: Calculated at checkout" placeholder in the cart summary.

## Notes & Assumptions

- **TypeScript** is pinned to the latest 5.x line rather than the newly-released 7.x compiler for maximum tooling compatibility; upgrade at your discretion once the ecosystem catches up.
- **Product data, pricing, and images are illustrative placeholders** written to demonstrate every required page and feature — replace with real catalog data before launch.
- **Privacy Policy and Terms & Conditions** are professionally-written starting templates and should be reviewed by a qualified legal professional before publishing.
