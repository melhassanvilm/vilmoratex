import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions governing the use of the VilmoraTex Trading & Industry website and orders.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms & Conditions" }]} />
      <section className="container-page max-w-3xl pb-20">
        <h1 className="font-display text-3xl font-semibold text-brand-plum sm:text-4xl">Terms &amp; Conditions</h1>
        <p className="mt-2 text-sm text-brand-charcoal/50">Last updated: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}</p>

        <div className="mt-8 space-y-6 text-brand-charcoal/80">
          <p>
            These Terms &amp; Conditions govern your use of the {siteConfig.fullName} website and any
            orders, quote requests, or manufacturing agreements made through it. By using this site,
            you agree to these terms.
          </p>

          <div>
            <h2 className="font-display text-xl font-semibold text-brand-plum">Orders & Payment</h2>
            <p className="mt-2">
              Orders placed through this website are currently confirmed via WhatsApp and fulfilled on
              a cash payment or cash-on-delivery basis. Bank transfer and online payment options will
              be added as they become available. Prices are listed in Egyptian Pounds (EGP) and are
              subject to change without prior notice; the price confirmed at the time of order
              acceptance applies.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-brand-plum">Wholesale & Manufacturing Orders</h2>
            <p className="mt-2">
              Bulk, wholesale, OEM, and private label orders are subject to a separate quotation
              confirming price, minimum order quantity, sample approval, and lead time. Production on
              bulk orders begins only after a pre-production sample (where applicable) has been
              approved in writing by the customer.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-brand-plum">Shipping & Delivery</h2>
            <p className="mt-2">
              Delivery timelines are estimates and may vary based on location, order size, and
              production schedule. Risk of loss passes to the customer upon delivery.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-brand-plum">Returns & Exchanges</h2>
            <p className="mt-2">
              Retail items may be returned or exchanged within 7 days of delivery if unused, unwashed,
              and in original condition with tags attached. Made-to-order, custom, and bulk
              manufacturing orders are not eligible for return once production has begun, except in
              the case of a manufacturing defect.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-brand-plum">Intellectual Property</h2>
            <p className="mt-2">
              All designs, photography, and content on this website are the property of VilmoraTex
              Trading &amp; Industry unless otherwise noted, and may not be reproduced without
              permission. Private label and OEM clients retain ownership of their own brand marks and
              designs supplied to us for production.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-brand-plum">Limitation of Liability</h2>
            <p className="mt-2">
              VilmoraTex is not liable for indirect or consequential losses arising from delayed
              delivery, except where such delay results from our negligence.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-brand-plum">Governing Law</h2>
            <p className="mt-2">These terms are governed by the laws of the Arab Republic of Egypt.</p>
          </div>

          <p className="rounded-xl bg-brand-cream p-4 text-sm text-brand-charcoal/60">
            This document is a general template and should be reviewed by a qualified legal
            professional before being relied upon as your final published terms and conditions.
          </p>
        </div>
      </section>
    </div>
  );
}
