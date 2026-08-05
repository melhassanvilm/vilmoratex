import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductGallery from "@/components/ProductGallery";
import AddToCartControls from "@/components/AddToCartControls";
import ShareButtons from "@/components/ShareButtons";
import StarRating from "@/components/StarRating";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import JsonLd from "@/components/JsonLd";
import { products, getProduct, getRelatedProducts, formatPrice } from "@/lib/products";
import { getCategory } from "@/lib/categories";
import { reviews } from "@/lib/reviews";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
    alternates: { canonical: `/shop/${slug}` },
    openGraph: { images: product.images.map((url) => ({ url })) },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const related = getRelatedProducts(product);
  const productReviews = reviews.slice(0, 2);
  const url = `${siteConfig.url}/shop/${product.slug}`;

  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.name,
          description: product.description,
          image: product.images,
          sku: product.slug,
          brand: { "@type": "Brand", name: siteConfig.name },
          offers: {
            "@type": "Offer",
            url,
            priceCurrency: "EGP",
            price: product.price || 0,
            availability:
              product.availability === "in-stock"
                ? "https://schema.org/InStock"
                : product.availability === "made-to-order"
                ? "https://schema.org/PreOrder"
                : "https://schema.org/OutOfStock",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: product.rating,
            reviewCount: product.reviewCount,
          },
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Shop", href: "/shop" },
          ...(category ? [{ label: category.name, href: `/categories/${category.slug}` }] : []),
          { label: product.name },
        ]}
      />

      <section className="container-page pb-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <ProductGallery images={product.images} name={product.name} />

          <div>
            <p className="text-xs uppercase tracking-wide text-brand-charcoal/50">
              {category?.name ?? product.category}
            </p>
            <h1 className="mt-1 font-display text-3xl font-semibold text-brand-plum">{product.name}</h1>
            <div className="mt-2">
              <StarRating rating={product.rating} count={product.reviewCount} />
            </div>
            <div className="mt-4 flex items-center gap-3">
              <span className="text-2xl font-semibold text-brand-plum">{formatPrice(product.price)}</span>
              {product.compareAtPrice && (
                <span className="text-lg text-brand-charcoal/40 line-through">
                  {formatPrice(product.compareAtPrice)}
                </span>
              )}
            </div>
            <p className="mt-4 text-brand-charcoal/70">{product.longDescription}</p>

            <div className="mt-6">
              <AddToCartControls product={product} />
            </div>

            <div className="mt-6">
              <ShareButtons title={product.name} url={url} />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <SectionHeading eyebrow="Reviews" title="Customer Reviews" />
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {productReviews.map((r) => (
              <figure key={r.name} className="rounded-2xl border border-brand-plum/10 bg-white p-6">
                <StarRating rating={r.rating} />
                <blockquote className="mt-3 text-brand-charcoal/80">&ldquo;{r.quote}&rdquo;</blockquote>
                <figcaption className="mt-3 text-sm font-semibold text-brand-plum">{r.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <SectionHeading eyebrow="You May Also Like" title="Related Products" />
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
