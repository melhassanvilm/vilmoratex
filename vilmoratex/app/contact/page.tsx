import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with VilmoraTex Trading & Industry via WhatsApp, email, or our contact form. We're happy to help with retail orders, wholesale inquiries, and custom manufacturing.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact VilmoraTex",
          url: `${siteConfig.url}/contact`,
        }}
      />

      <section className="container-page pb-16">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Contact Us"
          description="Have a question about an order, a bulk quote, or a custom manufacturing project? Reach us any of the ways below."
        />

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-2xl border border-brand-plum/10 bg-white p-6">
              <h3 className="font-display text-lg font-semibold text-brand-plum">WhatsApp</h3>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-brand-charcoal/80 hover:text-brand-plum"
              >
                {siteConfig.contact.whatsappDisplay}
              </a>
            </div>
            <div className="rounded-2xl border border-brand-plum/10 bg-white p-6">
              <h3 className="font-display text-lg font-semibold text-brand-plum">Email</h3>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="mt-1 block text-brand-charcoal/80 hover:text-brand-plum"
              >
                {siteConfig.contact.email}
              </a>
            </div>
            <div className="rounded-2xl border border-brand-plum/10 bg-white p-6">
              <h3 className="font-display text-lg font-semibold text-brand-plum">Business Hours</h3>
              <ul className="mt-1 space-y-1 text-brand-charcoal/80">
                {siteConfig.contact.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4 text-sm">
                    <span>{h.day}</span>
                    <span className="font-medium">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-brand-plum/10 bg-white p-6">
              <h3 className="font-display text-lg font-semibold text-brand-plum">Address</h3>
              <p className="mt-1 text-brand-charcoal/80">{siteConfig.contact.address}</p>
              <div className="mt-4 aspect-video overflow-hidden rounded-xl bg-brand-cream">
                <iframe
                  title="VilmoraTex location map"
                  src="https://www.google.com/maps?q=Cairo,Egypt&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <div className="rounded-2xl border border-brand-plum/10 bg-white p-6">
              <h3 className="font-display text-lg font-semibold text-brand-plum">Follow Us</h3>
              <div className="mt-2 flex flex-wrap gap-3 text-sm">
                <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="text-brand-plum hover:underline">Instagram</a>
                <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="text-brand-plum hover:underline">Facebook</a>
                <a href={siteConfig.social.tiktok} target="_blank" rel="noopener noreferrer" className="text-brand-plum hover:underline">TikTok</a>
                <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-brand-plum hover:underline">LinkedIn</a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-brand-plum/10 bg-white p-6 sm:p-8">
            <h3 className="font-display text-lg font-semibold text-brand-plum">Send Us a Message</h3>
            <div className="mt-4">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
