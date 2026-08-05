import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import CheckoutPageClient from "@/components/CheckoutPageClient";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Complete your VilmoraTex order with cash payment or cash on delivery.",
  alternates: { canonical: "/checkout" },
  robots: { index: false, follow: true },
};

export default function CheckoutPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Cart", href: "/cart" }, { label: "Checkout" }]} />
      <section className="container-page pb-16">
        <SectionHeading eyebrow="Checkout" title="Complete Your Order" />
        <div className="mt-8">
          <CheckoutPageClient />
        </div>
      </section>
    </div>
  );
}
