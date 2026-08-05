import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Wholesale",
  description:
    "Factory-direct wholesale pricing on fashion apparel and uniforms from VilmoraTex Trading & Industry. Bulk order tiers, transparent pricing, and dedicated account support.",
  alternates: { canonical: "/wholesale" },
};

const tiers = [
  { range: "100 – 300 pieces", note: "Ideal for boutique retailers and single-branch institutions" },
  { range: "301 – 500 pieces", note: "Best value for multi-branch retailers and mid-size schools" },
  { range: "501 – 1,000 pieces", note: "Our most competitive per-piece pricing tier" },
  { range: "1,000+ pieces", note: "Custom quote with dedicated production scheduling" },
];

const faqs = [
  {
    question: "What is the minimum wholesale order quantity?",
    answer:
      "Minimums vary by style and category — most fashion styles start at 100 pieces per color/size run, while uniform programs are typically quoted per school or institution size.",
  },
  {
    question: "Can I mix sizes within a wholesale order?",
    answer:
      "Yes. We ask for a size breakdown (a size curve) at the time of order confirmation so cutting can be planned accurately.",
  },
  {
    question: "Do you offer samples before a bulk order?",
    answer:
      "Yes, we always recommend approving a pre-production sample before bulk cutting begins, especially for first-time orders or custom designs.",
  },
  {
    question: "What payment methods do you accept for wholesale orders?",
    answer:
      "Currently cash payment and cash on delivery. Bank transfer and online payment options are coming soon.",
  },
];

export default function WholesalePage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Wholesale" }]} />

      <section className="container-page pb-16">
        <SectionHeading
          eyebrow="Wholesale"
          title="Factory-direct pricing for retailers and institutions"
          description="Because we manufacture everything in-house, our wholesale pricing reflects real production cost — with clear tiers that scale as your order grows."
        />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((t) => (
            <div key={t.range} className="rounded-2xl border border-brand-plum/10 bg-white p-6 text-center">
              <p className="font-display text-xl font-semibold text-brand-plum">{t.range}</p>
              <p className="mt-2 text-sm text-brand-charcoal/70">{t.note}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-sm text-brand-charcoal/50">
          Exact pricing depends on fabric, customization, and product type — request a quote for a
          breakdown specific to your order.
        </p>
      </section>

      <section className="bg-white py-16">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="How It Works" title="From inquiry to delivery" />
            <ol className="mt-6 space-y-4">
              {[
                "Share your product type, fabric preference, and target quantity via our quote form or WhatsApp.",
                "We confirm pricing, minimums, and lead time based on your fabric and quantity tier.",
                "A pre-production sample is prepared and approved before bulk cutting begins.",
                "Production runs on a dedicated line, with quality checks at cutting, sewing, and finishing.",
                "Your order is packed and delivered, or prepared for pickup / export documentation.",
              ].map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-plum text-sm font-semibold text-white">
                    {i + 1}
                  </span>
                  <p className="text-brand-charcoal/70">{step}</p>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <SectionHeading eyebrow="Wholesale FAQs" title="Common Questions" />
            <div className="mt-6">
              <FAQAccordion items={faqs} />
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16 text-center">
        <h2 className="font-display text-3xl font-semibold text-brand-plum">
          Ready to place a wholesale order?
        </h2>
        <Link
          href="/quote"
          className="mt-6 inline-block rounded-full bg-brand-plum px-7 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
        >
          Request a Wholesale Quote
        </Link>
      </section>
    </div>
  );
}
