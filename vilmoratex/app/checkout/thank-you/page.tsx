import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thank you for your order from VilmoraTex.",
  alternates: { canonical: "/checkout/thank-you" },
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold/20 text-brand-gold">
        <svg viewBox="0 0 24 24" className="h-8 w-8 fill-none stroke-current stroke-2">
          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h1 className="mt-6 font-display text-3xl font-semibold text-brand-plum sm:text-4xl">
        Thank you for your order
      </h1>
      <p className="mt-3 max-w-md text-brand-charcoal/70">
        We&apos;ve opened WhatsApp with your order details — please make sure to hit send so our team
        can confirm your order and delivery schedule.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/shop"
          className="rounded-full bg-brand-plum px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
        >
          Continue Shopping
        </Link>
        <Link
          href="/"
          className="rounded-full border border-brand-plum/20 px-6 py-3 text-sm font-semibold text-brand-plum hover:bg-brand-plum/5"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
