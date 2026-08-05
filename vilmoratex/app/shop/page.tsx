import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import ShopExplorer from "@/components/ShopExplorer";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop All Products",
  description:
    "Browse the full VilmoraTex catalog — fashion apparel and professional uniforms, filterable by category, gender, price, and availability.",
  alternates: { canonical: "/shop" },
};

export default function ShopPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Shop" }]} />
      <section className="container-page pb-16">
        <SectionHeading eyebrow="Shop" title="All Products" description="Search and filter our full catalog." />
        <div className="mt-8">
          <ShopExplorer products={products} />
        </div>
      </section>
    </div>
  );
}
