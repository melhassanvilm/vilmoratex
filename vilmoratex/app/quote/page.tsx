import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request a manufacturing or wholesale quote from VilmoraTex Trading & Industry — share your product type, fabric, quantity, and customization needs.",
  alternates: { canonical: "/quote" },
};

export default function QuotePage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Request a Quote" }]} />
      <section className="container-page pb-16">
        <SectionHeading
          eyebrow="Request a Quote"
          title="Tell us about your project"
          description="Share as much detail as you can — product type, fabric, quantity, and any customization — and our manufacturing team will follow up with pricing and lead time."
        />
        <div className="mt-10 rounded-3xl border border-brand-plum/10 bg-white p-6 sm:p-10">
          <QuoteForm />
        </div>
      </section>
    </div>
  );
}
