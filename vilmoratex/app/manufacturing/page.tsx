import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Manufacturing Services",
  description:
    "OEM manufacturing, private label, bulk orders, uniform manufacturing, custom embroidery, printing, pattern making, sampling, mass production, and export services from VilmoraTex Trading & Industry.",
  alternates: { canonical: "/manufacturing" },
};

const services = [
  {
    title: "OEM Manufacturing",
    desc: "Send us your own tech pack, pattern, and fabric specification — we produce it exactly to your brief, with pre-production samples approved before bulk cutting begins.",
  },
  {
    title: "Private Label Manufacturing",
    desc: "Choose from our tested, ready-to-produce styles and apply your own labels, packaging, and color customization — faster turnaround, lower minimums.",
  },
  {
    title: "Bulk Orders",
    desc: "Production scales from 100 to 1,000+ pieces per style, with transparent per-piece pricing based on fabric consumption and quantity tier.",
  },
  {
    title: "School Uniform Manufacturing",
    desc: "Full uniform programs — shirts, pinafores, trousers, skirts — sized from age 4 to 16, with fabric consumption calculated per size band.",
  },
  {
    title: "Hospital Uniform Manufacturing",
    desc: "Scrubs, ward uniforms, and administrative attire built for frequent commercial laundering and long shifts.",
  },
  {
    title: "Corporate Uniforms",
    desc: "Bank, retail, and office uniform programs with consistent sizing and branding across every branch or location.",
  },
  {
    title: "Custom Designs",
    desc: "Our pattern team can develop a new style from a sketch, reference photo, or written brief.",
  },
  {
    title: "Embroidery",
    desc: "In-house embroidery for logos, names, and department branding, with thread-color matching to your brand palette.",
  },
  {
    title: "Printing",
    desc: "Screen printing, DTF, and sublimation options depending on fabric type and design complexity.",
  },
  {
    title: "Pattern Making",
    desc: "Digital and manual pattern development, with grading across your full size range.",
  },
  {
    title: "Sampling",
    desc: "Pre-production samples for approval before any bulk fabric is committed — the checkpoint that protects your order.",
  },
  {
    title: "Mass Production",
    desc: "Dedicated production lines for confirmed bulk orders, with consistent quality control at every stage.",
  },
  {
    title: "Export Services",
    desc: "Documentation and logistics support for international wholesale and private label clients.",
  },
];

export default function ManufacturingPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Manufacturing Services" }]} />

      <section className="container-page pb-8">
        <SectionHeading
          eyebrow="Manufacturing Services"
          title="A full-service factory for fashion and uniforms"
          description="From a single sample to a 1,000-piece bulk order, VilmoraTex manages every stage of production in-house — pattern making, cutting, sewing, embroidery, printing, and finishing."
        />
      </section>

      <section className="container-page pb-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-brand-plum/10 bg-white p-6">
              <h3 className="font-display text-lg font-semibold text-brand-plum">{s.title}</h3>
              <p className="mt-2 text-sm text-brand-charcoal/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-plum py-16 text-brand-cream">
        <div className="container-page text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Tell us what you need to manufacture
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-brand-cream/80">
            Share your product type, fabric preference, and quantity — our team will follow up with
            pricing, minimums, and lead time.
          </p>
          <Link
            href="/quote"
            className="mt-7 inline-block rounded-full bg-brand-gold px-7 py-3 text-sm font-semibold text-brand-plum-dark transition-transform hover:scale-105"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
