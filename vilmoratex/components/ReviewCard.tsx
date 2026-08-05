import StarRating from "./StarRating";
import type { Review } from "@/lib/reviews";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex h-full flex-col justify-between rounded-2xl border border-brand-plum/10 bg-white p-6 shadow-sm">
      <blockquote className="text-brand-charcoal/80">&ldquo;{review.quote}&rdquo;</blockquote>
      <figcaption className="mt-6">
        <StarRating rating={review.rating} />
        <p className="mt-2 font-semibold text-brand-plum">{review.name}</p>
        <p className="text-sm text-brand-charcoal/50">{review.role}</p>
      </figcaption>
    </figure>
  );
}
