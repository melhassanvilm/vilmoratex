import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Private Label (OEM)",
  description:
    "Launch your own fashion or uniform brand with VilmoraTex's private label and OEM manufacturing services — custom branding, embroidery, and packaging included.",
  alternates: { canonical: "/private-label" },
};

export default function PrivateLabelPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Private Label (OEM)" }]} />

      <section className="container-page pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Private Label & OEM"
              title="Launch your own brand with our factory behind you"
              description="Whether you're starting a new fashion label or adding a uniform line to your business, our private label and OEM services get you to market without owning a factory."
            />
            <div className="mt-6 space-y-4 text-brand-charcoal/70">
              <p>
                <strong className="text-brand-charcoal">Private Label</strong> — start from one of our
                proven, already-sampled styles and apply your own labels, hang tags, and packaging.
                This is the fastest route to market, typically with lower minimum order quantities.
              </p>
              <p>
                <strong className="text-brand-charcoal">OEM Manufacturing</strong> — bring your own
                design, pattern, and tech pack, and we produce it to your exact specification. Best
                suited to brands with an established design identity.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <img
                src="https://picsum.photos/seed/vilmora-private-label-1/600/800"
                alt="Sample garments being reviewed for private label production"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-2xl">
              <img
                src="https://picsum.photos/seed/vilmora-private-label-2/600/800"
                alt="Custom label and packaging being applied to finished garments"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-page">
          <SectionHeading eyebrow="What's Included" title="Everything you need to launch" align="center" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Sampling", desc: "A pre-production sample to approve before any bulk commitment." },
              { title: "Custom Labels & Packaging", desc: "Woven or printed labels, hang tags, and polybags in your branding." },
              { title: "Embroidery & Printing", desc: "Logo application via embroidery, screen print, or DTF." },
              { title: "Flexible Minimums", desc: "Lower minimums on private label styles than fully custom OEM runs." },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-brand-plum/10 bg-brand-cream p-6">
                <h3 className="font-display text-lg font-semibold text-brand-plum">{f.title}</h3>
                <p className="mt-2 text-sm text-brand-charcoal/70">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 text-center">
        <h2 className="font-display text-3xl font-semibold text-brand-plum">
          Have a brand idea? Let&apos;s scope it together.
        </h2>
        <Link
          href="/quote"
          className="mt-6 inline-block rounded-full bg-brand-plum px-7 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
        >
          Start a Private Label Project
        </Link>
      </section>
    </div>
  );
}
