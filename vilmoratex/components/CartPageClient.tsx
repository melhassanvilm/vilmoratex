"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "./CartContext";
import { formatPrice } from "@/lib/products";

export default function CartPageClient() {
  const { items, updateQty, removeItem, subtotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-brand-plum/20 p-16 text-center">
        <p className="text-brand-charcoal/70">Your cart is empty.</p>
        <Link
          href="/shop"
          className="mt-5 inline-block rounded-full bg-brand-plum px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={`${item.slug}-${item.size}-${item.color}`}
            className="flex gap-4 rounded-2xl border border-brand-plum/10 bg-white p-4"
          >
            <div className="relative h-24 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-brand-cream">
              <Image src={item.image} alt={item.name} fill sizes="80px" className="object-cover" />
            </div>
            <div className="flex flex-1 flex-col justify-between">
              <div>
                <Link href={`/shop/${item.slug}`} className="font-medium text-brand-charcoal hover:text-brand-plum">
                  {item.name}
                </Link>
                <p className="text-sm text-brand-charcoal/50">
                  {item.size && `Size: ${item.size}`} {item.color && `· Color: ${item.color}`}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center rounded-full border border-brand-plum/20">
                  <button
                    aria-label="Decrease quantity"
                    onClick={() => updateQty(item.slug, item.size, item.color, item.qty - 1)}
                    className="px-3 py-1.5 text-brand-plum"
                  >
                    −
                  </button>
                  <span className="w-8 text-center text-sm">{item.qty}</span>
                  <button
                    aria-label="Increase quantity"
                    onClick={() => updateQty(item.slug, item.size, item.color, item.qty + 1)}
                    className="px-3 py-1.5 text-brand-plum"
                  >
                    +
                  </button>
                </div>
                <span className="font-semibold text-brand-plum">{formatPrice(item.price * item.qty)}</span>
              </div>
            </div>
            <button
              aria-label={`Remove ${item.name}`}
              onClick={() => removeItem(item.slug, item.size, item.color)}
              className="self-start text-brand-charcoal/40 hover:text-red-500"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        ))}
      </div>

      <aside className="h-fit rounded-2xl border border-brand-plum/10 bg-white p-6">
        <h2 className="font-display text-lg font-semibold text-brand-plum">Order Summary</h2>
        <div className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between text-brand-charcoal/70">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between text-brand-charcoal/70">
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>
          <div>
            <label htmlFor="coupon" className="mb-1 mt-3 block text-xs font-medium text-brand-charcoal/60">
              Coupon Code
            </label>
            <div className="flex gap-2">
              <input
                id="coupon"
                placeholder="Enter code"
                className="w-full rounded-full border border-brand-plum/20 px-4 py-2 text-sm"
              />
              <button className="rounded-full border border-brand-plum/20 px-4 py-2 text-sm font-medium text-brand-plum">
                Apply
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-between border-t border-brand-plum/10 pt-4 font-semibold text-brand-plum">
          <span>Total</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <Link
          href="/checkout"
          className="mt-6 block rounded-full bg-brand-plum px-6 py-3 text-center text-sm font-semibold text-white transition-transform hover:scale-105"
        >
          Proceed to Checkout
        </Link>
      </aside>
    </div>
  );
}
