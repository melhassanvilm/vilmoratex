import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import CartPageClient from "@/components/CartPageClient";

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "Review the items in your VilmoraTex shopping cart before checkout.",
  alternates: { canonical: "/cart" },
  robots: { index: false, follow: true },
};

export default function CartPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Cart" }]} />
      <section className="container-page pb-16">
        <SectionHeading eyebrow="Your Bag" title="Shopping Cart" />
        <div className="mt-8">
          <CartPageClient />
        </div>
      </section>
    </div>
  );
}
