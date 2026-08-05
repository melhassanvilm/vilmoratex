import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import { categories } from "@/lib/categories";

export const metadata: Metadata = {
  title: "Uniform Solutions",
  description:
    "School, hospital, hotel, restaurant, engineering, industrial, and corporate uniform manufacturing from VilmoraTex Trading & Industry — sized, priced, and produced to your specification.",
  alternates: { canonical: "/uniforms" },
};

const uniformCategories = categories.filter((c) => c.group === "uniforms");

export default function UniformsPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Uniform Solutions" }]} />

      <section className="container-page pb-16">
        <SectionHeading
          eyebrow="Uniform Solutions"
          title="Uniform programs built around your fabric and your budget"
          description="We manufacture full uniform programs for schools, hospitals, hotels, restaurants, factories, and corporate teams — with fabric consumption calculated by size, not a flat estimate, so pricing stays transparent from 100 pieces to 1,000+."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {uniformCategories.map((c) => (
            <Link
              key={c.slug}
              href={`/categories/${c.slug}`}
              className="group overflow-hidden rounded-2xl border border-brand-plum/10 bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-brand-plum">{c.name}</h3>
                <p className="mt-1 text-sm text-brand-charcoal/70">{c.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-brand-plum py-16 text-brand-cream">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold">How we price uniform programs</h2>
            <p className="mt-4 text-brand-cream/80">
              Uniform pricing is driven by two things: fabric price per meter, and fabric consumption
              per piece — which changes by size. A size-13-16 trouser can use meaningfully more fabric
              than a size-4-6 trouser, so we break down consumption by size band rather than quoting a
              single flat price across an entire age range.
            </p>
            <p className="mt-4 text-brand-cream/80">
              Every quote includes fabric cost, manufacturing (cutting and sewing), and any embroidery
              or branding — broken out clearly so schools, hospitals, and institutions can budget with
              confidence across quantity tiers from 100 to 1,000+ pieces.
            </p>
          </div>
          <div className="rounded-2xl bg-white/5 p-6">
            <h3 className="font-display text-lg font-semibold text-brand-gold">A typical uniform quote includes:</h3>
            <ul className="mt-4 space-y-3 text-sm text-brand-cream/85">
              <li>• Fabric selection and price per meter</li>
              <li>• Consumption per size band (e.g. ages 4-6, 7-9, 10-12, 13-16)</li>
              <li>• Manufacturing cost (cutting, sewing, finishing)</li>
              <li>• Optional embroidery / branding cost</li>
              <li>• Final price per piece across your requested quantity tiers</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container-page py-16 text-center">
        <h2 className="font-display text-3xl font-semibold text-brand-plum">
          Get a fabric-and-quantity based uniform quote
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-brand-charcoal/70">
          Tell us your institution type, approximate headcount, and fabric preference, and our team
          will prepare a detailed cost breakdown by size.
        </p>
        <Link
          href="/quote"
          className="mt-6 inline-block rounded-full bg-brand-plum px-7 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
        >
          Request a Uniform Quote
        </Link>
      </section>
    </div>
  );
}
