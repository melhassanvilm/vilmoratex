import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How VilmoraTex Trading & Industry collects, uses, and protects your personal information.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
      <section className="container-page max-w-3xl pb-20">
        <h1 className="font-display text-3xl font-semibold text-brand-plum sm:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-brand-charcoal/50">Last updated: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}</p>

        <div className="mt-8 space-y-6 text-brand-charcoal/80">
          <p>
            This Privacy Policy explains how {siteConfig.fullName} (&quot;VilmoraTex&quot;, &quot;we&quot;,
            &quot;us&quot;) collects, uses, and safeguards information when you use this website, place an
            order, or contact us through WhatsApp, email, or our contact and quote forms.
          </p>

          <div>
            <h2 className="font-display text-xl font-semibold text-brand-plum">Information We Collect</h2>
            <p className="mt-2">
              We collect information you provide directly, such as your name, phone number, email
              address, shipping address, and order details when you place an order, request a quote,
              or contact us. We do not collect payment card information, as we currently operate on a
              cash and cash-on-delivery basis.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-brand-plum">How We Use Your Information</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>To process and fulfill your orders and quote requests.</li>
              <li>To communicate with you about your order, inquiry, or account.</li>
              <li>To send you updates about new collections or offers, only if you have subscribed to our newsletter.</li>
              <li>To improve our website, products, and services.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-brand-plum">Sharing of Information</h2>
            <p className="mt-2">
              We do not sell your personal information. We may share necessary details with delivery
              partners solely to fulfill your order, or with service providers who help us operate
              this website, under confidentiality obligations.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-brand-plum">Data Retention & Security</h2>
            <p className="mt-2">
              We retain order and inquiry information only as long as necessary for business, legal,
              or accounting purposes, and take reasonable technical and organizational measures to
              protect it against unauthorized access.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-brand-plum">Your Choices</h2>
            <p className="mt-2">
              You may request access to, correction of, or deletion of your personal information, or
              unsubscribe from marketing communications at any time, by contacting us at{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-brand-plum underline">
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-brand-plum">Cookies</h2>
            <p className="mt-2">
              This site may use essential cookies and local storage to support core features such as
              your shopping cart and wishlist. These are not used for third-party advertising.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-brand-plum">Contact</h2>
            <p className="mt-2">
              Questions about this policy can be directed to {siteConfig.contact.email} or via
              WhatsApp at {siteConfig.contact.whatsappDisplay}.
            </p>
          </div>

          <p className="rounded-xl bg-brand-cream p-4 text-sm text-brand-charcoal/60">
            This policy is provided as a general template and should be reviewed by a qualified legal
            professional to ensure full compliance with applicable Egyptian and international data
            protection regulations before relying on it as your final published policy.
          </p>
        </div>
      </section>
    </div>
  );
}
