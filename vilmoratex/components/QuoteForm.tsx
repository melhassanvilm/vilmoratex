"use client";

import { useState, type FormEvent } from "react";
import { buildQuoteMessage, buildWhatsAppLink } from "@/lib/whatsapp";

const productTypes = [
  "Summer / Casual Dresses",
  "Evening Dresses",
  "Abayas",
  "Men's Fashion",
  "Kids Fashion",
  "Pajamas",
  "School Uniforms",
  "Hospital Uniforms / Medical Scrubs",
  "Engineering / Industrial Uniforms",
  "Restaurant / Hotel Uniforms",
  "Corporate Uniforms",
  "Other / Custom Design",
];

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = new FormData(e.currentTarget);
    const data = {
      "Company Name": String(form.get("company") || ""),
      "Contact Person": String(form.get("contact") || ""),
      Email: String(form.get("email") || ""),
      Phone: String(form.get("phone") || ""),
      Country: String(form.get("country") || ""),
      "Product Type": String(form.get("productType") || ""),
      Quantity: String(form.get("quantity") || ""),
      Fabric: String(form.get("fabric") || ""),
      Customization: String(form.get("customization") || ""),
      Embroidery: String(form.get("embroidery") || ""),
      Printing: String(form.get("printing") || ""),
      Deadline: String(form.get("deadline") || ""),
      "Design File": fileName || "Not attached (please send via WhatsApp or email)",
      Message: String(form.get("message") || ""),
    };

    const endpoint = process.env.NEXT_PUBLIC_QUOTE_FORM_ENDPOINT;
    if (endpoint) {
      try {
        await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      } catch {
        // best-effort only — WhatsApp remains the reliable fallback below
      }
    }

    const waLink = buildWhatsAppLink(buildQuoteMessage(data));
    window.open(waLink, "_blank", "noopener,noreferrer");
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-brand-gold/40 bg-brand-gold/10 p-8 text-center">
        <h3 className="font-display text-2xl font-semibold text-brand-plum">Request received</h3>
        <p className="mt-2 text-brand-charcoal/70">
          We&apos;ve opened WhatsApp with your quote details pre-filled — please hit send so our
          manufacturing team can review it. We typically respond within one business day.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-5 rounded-full border border-brand-plum/20 px-5 py-2 text-sm font-medium text-brand-plum hover:bg-brand-plum/5"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <Field label="Company Name" name="company" required />
      <Field label="Contact Person" name="contact" required />
      <Field label="Email" name="email" type="email" required />
      <Field label="Phone" name="phone" type="tel" required />
      <Field label="Country" name="country" required />
      <div>
        <label className="mb-1 block text-sm font-medium text-brand-charcoal" htmlFor="productType">
          Product Type
        </label>
        <select
          id="productType"
          name="productType"
          required
          className="w-full rounded-xl border border-brand-plum/20 bg-white px-4 py-2.5 text-sm focus:border-brand-plum focus:outline-none"
        >
          <option value="">Select a product type</option>
          {productTypes.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>
      <Field label="Quantity" name="quantity" placeholder="e.g. 500 pieces" required />
      <Field label="Fabric" name="fabric" placeholder="e.g. Cotton-poly blend, 200 GSM" />
      <Field label="Customization" name="customization" placeholder="Colors, sizing, trims..." />
      <Field label="Embroidery" name="embroidery" placeholder="Logo placement, thread colors..." />
      <Field label="Printing" name="printing" placeholder="Screen print, DTF, sublimation..." />
      <Field label="Deadline" name="deadline" type="date" />

      <div className="sm:col-span-2">
        <label className="mb-1 block text-sm font-medium text-brand-charcoal" htmlFor="design">
          Upload Design (optional)
        </label>
        <input
          id="design"
          name="design"
          type="file"
          accept="image/*,.pdf,.ai,.eps"
          onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
          className="block w-full rounded-xl border border-dashed border-brand-plum/30 bg-white px-4 py-3 text-sm text-brand-charcoal/70 file:mr-4 file:rounded-full file:border-0 file:bg-brand-plum file:px-4 file:py-2 file:text-xs file:font-semibold file:text-white"
        />
        <p className="mt-1 text-xs text-brand-charcoal/50">
          File selection is prepared here for your reference — please also attach the file directly
          to your WhatsApp message or email, since this form sends inquiries via WhatsApp.
        </p>
      </div>

      <div className="sm:col-span-2">
        <label className="mb-1 block text-sm font-medium text-brand-charcoal" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-xl border border-brand-plum/20 bg-white px-4 py-2.5 text-sm focus:border-brand-plum focus:outline-none"
          placeholder="Tell us more about your project..."
        />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-full bg-brand-plum px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.01] disabled:opacity-60 sm:w-auto"
        >
          {submitting ? "Preparing your request..." : "Submit Quote Request"}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-brand-charcoal" htmlFor={name}>
        {label}
        {required && <span className="text-brand-gold"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-brand-plum/20 bg-white px-4 py-2.5 text-sm focus:border-brand-plum focus:outline-none"
      />
    </div>
  );
}
