import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import WishlistPageClient from "@/components/WishlistPageClient";

export const metadata: Metadata = {
  title: "Wishlist",
  description: "Products you've saved for later at VilmoraTex.",
  alternates: { canonical: "/wishlist" },
  robots: { index: false, follow: true },
};

export default function WishlistPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Wishlist" }]} />
      <section className="container-page pb-16">
        <SectionHeading eyebrow="Saved" title="Your Wishlist" />
        <div className="mt-8">
          <WishlistPageClient />
        </div>
      </section>
    </div>
  );
}
