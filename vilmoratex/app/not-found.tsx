import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-display text-8xl font-bold text-brand-plum/20">404</p>
      <h1 className="mt-4 font-display text-3xl font-semibold text-brand-plum">
        This page has stepped out of the collection
      </h1>
      <p className="mt-3 max-w-md text-brand-charcoal/70">
        The page you&apos;re looking for may have been moved or no longer exists. Let&apos;s get you
        back to shopping or exploring our manufacturing services.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-full bg-brand-plum px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
        >
          Back to Home
        </Link>
        <Link
          href="/shop"
          className="rounded-full border border-brand-plum/20 px-6 py-3 text-sm font-semibold text-brand-plum hover:bg-brand-plum/5"
        >
          Browse Shop
        </Link>
      </div>
    </div>
  );
}
