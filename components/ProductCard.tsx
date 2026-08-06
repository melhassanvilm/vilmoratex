"use client";

import Image from "next/image";
import Link from "@/components/LocaleLink";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";
import { getCategory } from "@/lib/categories";
import { useWishlist } from "./WishlistContext";
import { useLocale } from "./LocaleProvider";
import StarRating from "./StarRating";

export default function ProductCard({ product }: { product: Product }) {
  const { has, toggle } = useWishlist();
  const { lang, dict } = useLocale();
  const wished = has(product.slug);
  const category = getCategory(product.category);

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-brand-plum/8 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl">
      <Link
        href={`/shop/${product.slug}`}
        className="relative block aspect-[3/4] overflow-hidden bg-brand-cream"
      >
        <Image
          src={product.images[0]}
          alt={product.name[lang]}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.tags.includes("new-arrival") && (
          <span className="absolute start-3 top-3 rounded-full bg-brand-plum px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
            {dict.common.product.newArrival}
          </span>
        )}
        {product.compareAtPrice && (
          <span className="absolute end-3 top-3 rounded-full bg-brand-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-brand-plum-dark">
            {dict.common.product.sale}
          </span>
        )}
      </Link>

      <button
        type="button"
        aria-label={wished ? dict.common.wishlist.remove : dict.common.wishlist.add}
        aria-pressed={wished}
        onClick={() => toggle(product.slug)}
        className="absolute end-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-brand-plum shadow transition-transform hover:scale-110"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill={wished ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 21s-7.5-4.7-10-9.3C.5 8 2 4.5 5.5 4a5 5 0 0 1 6.5 2 5 5 0 0 1 6.5-2C22 4.5 23.5 8 22 11.7 19.5 16.3 12 21 12 21z" />
        </svg>
      </button>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-xs uppercase tracking-wide text-brand-charcoal/50">
          {category ? category.name[lang] : product.category.replaceAll("-", " ")}
        </p>
        <Link
          href={`/shop/${product.slug}`}
          className="font-medium text-brand-charcoal hover:text-brand-plum"
        >
          {product.name[lang]}
        </Link>
        <StarRating rating={product.rating} count={product.reviewCount} />
        <div className="mt-auto flex items-center gap-2 pt-1">
          <span className="font-semibold text-brand-plum">{formatPrice(product.price, lang)}</span>
          {product.compareAtPrice && (
            <span className="text-sm text-brand-charcoal/40 line-through">
              {formatPrice(product.compareAtPrice, lang)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
