"use client";

import { useLocale } from "./LocaleProvider";

export default function StarRating({ rating, count }: { rating: number; count?: number }) {
  const { lang } = useLocale();
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;
  const label = lang === "ar" ? `تقييم ${rating} من 5` : `Rated ${rating} out of 5`;
  return (
    <div className="flex items-center gap-1" role="img" aria-label={label}>
      <div className="flex text-brand-gold">
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i < full || (i === full && hasHalf);
          return (
            <svg key={i} viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
              <path
                d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1 1 5.79L10 14.9l-5.21 2.6 1-5.78-4.2-4.1 5.8-.86L10 1.5z"
                fill={filled ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          );
        })}
      </div>
      {typeof count === "number" && (
        <span className="text-sm text-brand-charcoal/60">({count})</span>
      )}
    </div>
  );
}
