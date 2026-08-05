import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "VilmoraTex Trading & Industry is an Egyptian garment manufacturer producing fashion apparel and professional uniforms from our own factory. Learn about our story, our factory, and our team.",
  alternates: { canonical: "/about" },
};

const milestones = [
  { year: "Founded", label: "Established as a garment manufacturing workshop in Greater Cairo." },
  { year: "Expansion", label: "Scaled production to serve schools, hospitals, and hospitality clients across Egypt." },
  { year: "Today", label: "Full in-house cutting, sewing, embroidery, and printing capacity, serving retail and wholesale clients." },
];

export default function AboutPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />

      <section className="container-page pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
              About VilmoraTex
            </p>
            <h1 className="font-display text-4xl font-semibold text-brand-plum">
              Fashion and uniforms, manufactured with intent
            </h1>
            <p className="mt-5 text-brand-charcoal/70">
              VilmoraTex Trading &amp; Industry is an Egyptian garment manufacturer and wholesale
              supplier. We produce fashion apparel — dresses, menswear, kidswear, abayas, and
              pajamas — alongside a full range of professional uniforms for schools, hospitals,
              hotels, restaurants, factories, and corporate teams.
            </p>
            <p className="mt-4 text-brand-charcoal/70">
              What sets us apart is control: every stage of production, from fabric sourcing and
              pattern-making to cutting, sewing, embroidery, and printing, happens inside our own
              facility. That means tighter quality control, faster sample turnaround, and pricing
              that reflects real production cost rather than a chain of subcontractor markups.
            </p>
            <p className="mt-4 text-brand-charcoal/70">
              We work with two kinds of clients side by side: individual shoppers buying directly
              through this site, and business clients — schools, hospitals, hotels, restaurants,
              and boutique brands — ordering in bulk or under private label.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="https://picsum.photos/seed/vilmora-about-team/1000/1250"
              alt="The VilmoraTex production team at work"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Our Factory" title="Built for consistency at scale" align="center" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                title: "Cutting & Pattern Making",
                desc: "In-house pattern development and precision cutting keep sizing consistent across every batch.",
                img: "https://picsum.photos/seed/vilmora-factory-cutting/700/500",
              },
              {
                title: "Sewing & Finishing",
                desc: "Skilled sewing lines and a dedicated quality-control step before any order leaves the floor.",
                img: "https://picsum.photos/seed/vilmora-factory-sewing/700/500",
              },
              {
                title: "Embroidery & Printing",
                desc: "In-house embroidery and printing stations for branded uniforms and custom apparel runs.",
                img: "https://picsum.photos/seed/vilmora-factory-embroidery/700/500",
              },
            ].map((f) => (
              <div key={f.title} className="overflow-hidden rounded-2xl border border-brand-plum/10 bg-brand-cream">
                <div className="relative aspect-[7/5]">
                  <Image src={f.img} alt={f.title} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-brand-plum">{f.title}</h3>
                  <p className="mt-2 text-sm text-brand-charcoal/70">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <SectionHeading eyebrow="Our Journey" title="Milestones" align="center" />
        <div className="mx-auto mt-10 max-w-2xl space-y-6">
          {milestones.map((m) => (
            <div key={m.year} className="flex gap-5 rounded-2xl border border-brand-plum/10 bg-white p-6">
              <span className="font-display text-lg font-semibold text-brand-gold">{m.year}</span>
              <p className="text-brand-charcoal/70">{m.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
