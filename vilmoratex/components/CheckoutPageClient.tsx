"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { useCart } from "./CartContext";
import { formatPrice } from "@/lib/products";
import { buildOrderMessage, buildWhatsAppLink } from "@/lib/whatsapp";

export default function CheckoutPageClient() {
  const { items, subtotal, clear } = useCart();
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "cod">("cod");
  const [submitting, setSubmitting] = useState(false);

  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-brand-plum/20 p-16 text-center">
        <p className="text-brand-charcoal/70">Your cart is empty — add a few items before checking out.</p>
      </div>
    );
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = new FormData(e.currentTarget);
    const customerName = String(form.get("name") || "");
    const phone = String(form.get("phone") || "");
    const address = String(form.get("address") || "");
    const notes = String(form.get("notes") || "");

    const message = buildOrderMessage({
      items: items.map((i) => ({ name: i.name, qty: i.qty, size: i.size, color: i.color, price: i.price })),
      subtotal,
      customerName,
      phone,
      address,
      notes: `${notes ? notes + " — " : ""}Payment: ${paymentMethod === "cash" ? "Cash Payment" : "Cash on Delivery"}`,
    });

    window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
    clear();
    router.push("/checkout/thank-you");
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">
      <div className="space-y-8">
        <div className="rounded-2xl border border-brand-plum/10 bg-white p-6">
          <h2 className="font-display text-lg font-semibold text-brand-plum">Customer Information</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-brand-charcoal">
                Full Name
              </label>
              <input id="name" name="name" required className="w-full rounded-xl border border-brand-plum/20 px-4 py-2.5 text-sm" />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1 block text-sm font-medium text-brand-charcoal">
                Phone Number
              </label>
              <input id="phone" name="phone" type="tel" required className="w-full rounded-xl border border-brand-plum/20 px-4 py-2.5 text-sm" />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-brand-plum/10 bg-white p-6">
          <h2 className="font-display text-lg font-semibold text-brand-plum">Shipping Address</h2>
          <div className="mt-4">
            <label htmlFor="address" className="mb-1 block text-sm font-medium text-brand-charcoal">
              Full Address
            </label>
            <textarea id="address" name="address" required rows={3} className="w-full rounded-xl border border-brand-plum/20 px-4 py-2.5 text-sm" />
          </div>
          <div className="mt-4">
            <label htmlFor="notes" className="mb-1 block text-sm font-medium text-brand-charcoal">
              Order Notes (optional)
            </label>
            <textarea id="notes" name="notes" rows={2} className="w-full rounded-xl border border-brand-plum/20 px-4 py-2.5 text-sm" />
          </div>
        </div>

        <div className="rounded-2xl border border-brand-plum/10 bg-white p-6">
          <h2 className="font-display text-lg font-semibold text-brand-plum">Payment Method</h2>
          <div className="mt-4 space-y-3">
            <label className="flex items-center gap-3 rounded-xl border border-brand-plum/15 p-4">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "cod"}
                onChange={() => setPaymentMethod("cod")}
              />
              <span className="text-sm font-medium text-brand-charcoal">Cash on Delivery</span>
            </label>
            <label className="flex items-center gap-3 rounded-xl border border-brand-plum/15 p-4">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "cash"}
                onChange={() => setPaymentMethod("cash")}
              />
              <span className="text-sm font-medium text-brand-charcoal">Cash Payment (in person)</span>
            </label>
            <p className="text-xs text-brand-charcoal/50">
              Bank transfer and online payment (Visa/Mastercard) are coming soon.
            </p>
          </div>
        </div>
      </div>

      <aside className="h-fit rounded-2xl border border-brand-plum/10 bg-white p-6">
        <h2 className="font-display text-lg font-semibold text-brand-plum">Order Summary</h2>
        <div className="mt-4 space-y-3">
          {items.map((item) => (
            <div key={`${item.slug}-${item.size}-${item.color}`} className="flex justify-between text-sm">
              <span className="text-brand-charcoal/70">
                {item.name} × {item.qty}
              </span>
              <span className="font-medium text-brand-charcoal">{formatPrice(item.price * item.qty)}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-between border-t border-brand-plum/10 pt-4 font-semibold text-brand-plum">
          <span>Total</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="mt-6 w-full rounded-full bg-brand-plum px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105 disabled:opacity-60"
        >
          {submitting ? "Placing order..." : "Place Order via WhatsApp"}
        </button>
        <p className="mt-3 text-center text-xs text-brand-charcoal/50">
          We&apos;ll open WhatsApp with your order details pre-filled — just hit send to confirm.
        </p>
      </aside>
    </form>
  );
}
