"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Product } from "@/lib/products";
import { useCart } from "./CartContext";
import { useWishlist } from "./WishlistContext";
import { useLocale } from "./LocaleProvider";
import { buildProductInquiryMessage, buildWhatsAppLink } from "@/lib/whatsapp";

export default function AddToCartControls({ product }: { product: Product }) {
  const { lang, dict } = useLocale();
  const [size, setSize] = useState(product.sizes[0]);
  const [color, setColor] = useState(product.colors[0]?.name[lang]);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const { has, toggle } = useWishlist();
  const router = useRouter();

  const disabled = product.availability === "out-of-stock";

  const handleAdd = () => {
    addItem({
      slug: product.slug,
      name: product.name[lang],
      price: product.price,
      image: product.images[0],
      size,
      color,
      qty,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    handleAdd();
    router.push("/checkout");
  };

  const inquiryHref = buildWhatsAppLink(
    buildProductInquiryMessage(
      product.name[lang],
      typeof window !== "undefined" ? window.location.href : `/shop/${product.slug}`,
      lang
    )
  );

  const availabilityLabel =
    product.availability === "in-stock"
      ? dict.common.product.inStock
      : product.availability === "made-to-order"
        ? dict.common.product.madeToOrder
        : dict.common.product.outOfStock;

  return (
    <div className="space-y-5">
      <div>
        <p className="mb-2 text-sm font-semibold text-brand-charcoal">{dict.common.product.size}</p>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                size === s
                  ? "border-brand-plum bg-brand-plum text-white"
                  : "border-brand-plum/20 text-brand-charcoal hover:border-brand-plum"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {product.colors.length > 0 && (
        <div>
          <p className="mb-2 text-sm font-semibold text-brand-charcoal">
            {dict.common.product.color}
            {color ? `: ${color}` : ""}
          </p>
          <div className="flex flex-wrap gap-2">
            {product.colors.map((c) => (
              <button
                key={c.name[lang]}
                onClick={() => setColor(c.name[lang])}
                aria-label={c.name[lang]}
                aria-pressed={color === c.name[lang]}
                className={`h-8 w-8 rounded-full border-2 ${
                  color === c.name[lang] ? "border-brand-plum" : "border-transparent"
                }`}
                style={{ backgroundColor: c.hex }}
              />
            ))}
          </div>
        </div>
      )}

      <div>
        <p className="mb-2 text-sm font-semibold text-brand-charcoal">
          {dict.common.product.quantity}
        </p>
        <div className="inline-flex items-center rounded-full border border-brand-plum/20">
          <button
            aria-label={lang === "ar" ? "إنقاص الكمية" : "Decrease quantity"}
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="px-3 py-2 text-brand-plum"
          >
            −
          </button>
          <span className="w-10 text-center text-sm">{qty}</span>
          <button
            aria-label={lang === "ar" ? "زيادة الكمية" : "Increase quantity"}
            onClick={() => setQty((q) => q + 1)}
            className="px-3 py-2 text-brand-plum"
          >
            +
          </button>
        </div>
        {product.minOrderQty && (
          <p className="mt-1 text-xs text-brand-charcoal/50">
            {dict.common.product.wholesaleMinimum}: {product.minOrderQty}+{" "}
            {dict.common.product.piecesPerStyle}
          </p>
        )}
      </div>

      <div className="flex flex-wrap gap-3 pt-2">
        <button
          disabled={disabled}
          onClick={handleAdd}
          className="flex-1 rounded-full bg-brand-plum px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {added ? dict.common.buttons.added : dict.common.buttons.addToCart}
        </button>
        <button
          disabled={disabled}
          onClick={handleBuyNow}
          className="flex-1 rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-plum-dark transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {dict.common.buttons.buyNow}
        </button>
        <button
          onClick={() => toggle(product.slug)}
          aria-pressed={has(product.slug)}
          className="flex items-center justify-center gap-2 rounded-full border border-brand-plum/20 px-5 py-3 text-sm font-medium text-brand-plum hover:bg-brand-plum/5"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill={has(product.slug) ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 21s-7.5-4.7-10-9.3C.5 8 2 4.5 5.5 4a5 5 0 0 1 6.5 2 5 5 0 0 1 6.5-2C22 4.5 23.5 8 22 11.7 19.5 16.3 12 21 12 21z" />
          </svg>
          {lang === "ar" ? "المفضلة" : "Wishlist"}
        </button>
      </div>

      <a
        href={inquiryHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 rounded-full border border-[#25D366]/40 px-6 py-3 text-sm font-semibold text-[#128C4A] hover:bg-[#25D366]/10"
      >
        {dict.common.buttons.askOnWhatsApp}
      </a>

      <p className="text-xs uppercase tracking-wide text-brand-charcoal/50">
        {dict.common.product.availability}:{" "}
        <span className="font-semibold text-brand-charcoal">{availabilityLabel}</span>
      </p>
    </div>
  );
}
