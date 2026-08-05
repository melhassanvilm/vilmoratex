import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers to common questions about VilmoraTex products, ordering, payment, manufacturing, and wholesale services.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  {
    question: "What payment methods do you accept?",
    answer:
      "Currently we accept cash payment and cash on delivery (COD) only. Bank transfer and online payment (Visa/Mastercard) are coming soon.",
  },
  {
    question: "Do you ship across Egypt?",
    answer:
      "Yes, we deliver across Egypt with cash on delivery. For bulk and wholesale orders, delivery is scheduled directly with our logistics team.",
  },
  {
    question: "Can I order custom sizes or colors?",
    answer:
      "Yes. Many of our styles support custom sizing and colorways for bulk and private label orders — contact us or submit a quote request with your requirements.",
  },
  {
    question: "What is the minimum order quantity (MOQ) for wholesale?",
    answer:
      "MOQs vary by product and category, typically starting around 20–100 pieces per style, with uniform programs sized to your institution.",
  },
  {
    question: "How long does production take?",
    answer:
      "Lead time depends on the product, quantity, and whether fabric is already in stock. Most bulk orders are confirmed with a lead time once your quote is finalized.",
  },
  {
    question: "Do you manufacture school uniforms for a specific age range?",
    answer:
      "Yes, our school uniform programs are sized from age 4 through 16, with fabric consumption calculated separately for each age band to keep pricing accurate.",
  },
  {
    question: "Can I visit the factory?",
    answer:
      "Wholesale and institutional clients are welcome to arrange a factory visit — reach out via WhatsApp or our contact form to schedule one.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "We support export documentation and logistics for international wholesale and private label clients — contact us to discuss your destination country.",
  },
];

export default function FAQPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "FAQs" }]} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }}
      />
      <section className="container-page pb-16">
        <SectionHeading eyebrow="Support" title="Frequently Asked Questions" align="center" />
        <div className="mx-auto mt-10 max-w-3xl">
          <FAQAccordion items={faqs} />
        </div>
      </section>
    </div>
  );
}
