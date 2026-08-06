"use client";

import Link from "@/components/LocaleLink";
import { useWishlist } from "./WishlistContext";
import { products } from "@/lib/products";
import ProductCard from "./ProductCard";
import { useLocale } from "./LocaleProvider";

export default function WishlistPageClient() {
  const { dict } = useLocale();
  const { slugs } = useWishlist();
  const items = products.filter((p) => slugs.includes(p.slug));

  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-brand-plum/20 p-16 text-center">
        <p className="text-brand-charcoal/70">{dict.common.wishlist.empty}</p>
        <Link
          href="/shop"
          className="mt-5 inline-block rounded-full bg-brand-plum px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
        >
          {dict.common.buttons.browseShop}
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
      {items.map((p) => (
        <ProductCard key={p.slug} product={p} />
      ))}
    </div>
  );
}
