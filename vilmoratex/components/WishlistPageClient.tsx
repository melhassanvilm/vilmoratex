"use client";

import Link from "next/link";
import { useWishlist } from "./WishlistContext";
import { products } from "@/lib/products";
import ProductCard from "./ProductCard";

export default function WishlistPageClient() {
  const { slugs } = useWishlist();
  const items = products.filter((p) => slugs.includes(p.slug));

  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-brand-plum/20 p-16 text-center">
        <p className="text-brand-charcoal/70">You haven&apos;t saved any products yet.</p>
        <Link
          href="/shop"
          className="mt-5 inline-block rounded-full bg-brand-plum px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
        >
          Browse Shop
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
