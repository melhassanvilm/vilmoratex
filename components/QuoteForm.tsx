"use client";

import { useState, type FormEvent } from "react";
import { buildQuoteMessage, buildWhatsAppLink } from "@/lib/whatsapp";
import { useLocale } from "./LocaleProvider";

export default function QuoteForm() {
  const { lang, dict } = useLocale();
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const productTypes = dict.common.quote.productTypes as string[];
  const f = dict.common.forms;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = new FormData(e.currentTarget);
    const data = {
      [f.companyName]: String(form.get("company") || ""),
      [f.contactPerson]: String(form.get("contact") || ""),
      [f.email]: String(form.get("email") || ""),
      [f.phone]: String(form.get("phone") || ""),
      [f.country]: String(form.get("country") || ""),
      [f.productType]: String(form.get("productType") || ""),
      [f.quantity]: String(form.get("quantity") || ""),
      [f.fabric]: String(form.get("fabric") || ""),
      [f.customization]: String(form.get("customization") || ""),
      [f.embroidery]: String(form.get("embroidery") || ""),
      [f.printing]: String(form.get("printing") || ""),
      [f.deadline]: String(form.get("deadline") || ""),
      [f.uploadDesign]:
        fileName ||
        (lang === "ar"
          ? "غير مرفق (يرجى الإرسال عبر واتساب أو البريد الإلكتروني)"
          : "Not attached (please send via WhatsApp or email)"),
      [f.message]: String(form.get("message") || ""),
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

    const waLink = buildWhatsAppLink(buildQuoteMessage(data, lang));
    window.open(waLink, "_blank", "noopener,noreferrer");
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-brand-gold/40 bg-brand-gold/10 p-8 text-center">
        <h3 className="font-display text-2xl font-semibold text-brand-plum">
          {dict.common.quote.receivedTitle}
        </h3>
        <p className="mt-2 text-brand-charcoal/70">{dict.common.quote.receivedBody}</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-5 rounded-full border border-brand-plum/20 px-5 py-2 text-sm font-medium text-brand-plum hover:bg-brand-plum/5"
        >
          {dict.common.buttons.submitAnother}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <Field label={f.companyName} name="company" required />
      <Field label={f.contactPerson} name="contact" required />
      <Field label={f.email} name="email" type="email" required />
      <Field label={f.phone} name="phone" type="tel" required />
      <Field label={f.country} name="country" required />
      <div>
        <label className="mb-1 block text-sm font-medium text-brand-charcoal" htmlFor="productType">
          {f.productType}
        </label>
        <select
          id="productType"
          name="productType"
          required
          className="w-full rounded-xl border border-brand-plum/20 bg-white px-4 py-2.5 text-sm focus:border-brand-plum focus:outline-none"
        >
          <option value="">{f.selectProductType}</option>
          {productTypes.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>
      <Field
        label={f.quantity}
        name="quantity"
        placeholder={lang === "ar" ? "مثال: 500 قطعة" : "e.g. 500 pieces"}
        required
      />
      <Field
        label={f.fabric}
        name="fabric"
        placeholder={
          lang === "ar" ? "مثال: قطن مخلوط، 200 جرام" : "e.g. Cotton-poly blend, 200 GSM"
        }
      />
      <Field
        label={f.customization}
        name="customization"
        placeholder={
          lang === "ar" ? "الألوان، المقاسات، الإكسسوارات..." : "Colors, sizing, trims..."
        }
      />
      <Field
        label={f.embroidery}
        name="embroidery"
        placeholder={
          lang === "ar" ? "مكان الشعار، ألوان الخيط..." : "Logo placement, thread colors..."
        }
      />
      <Field
        label={f.printing}
        name="printing"
        placeholder={
          lang === "ar" ? "طباعة شاشة، DTF، سبليميشن..." : "Screen print, DTF, sublimation..."
        }
      />
      <Field label={f.deadline} name="deadline" type="date" />

      <div className="sm:col-span-2">
        <label className="mb-1 block text-sm font-medium text-brand-charcoal" htmlFor="design">
          {f.uploadDesign}
        </label>
        <input
          id="design"
          name="design"
          type="file"
          accept="image/*,.pdf,.ai,.eps"
          onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
          className="block w-full rounded-xl border border-dashed border-brand-plum/30 bg-white px-4 py-3 text-sm text-brand-charcoal/70 file:mr-4 file:rounded-full file:border-0 file:bg-brand-plum file:px-4 file:py-2 file:text-xs file:font-semibold file:text-white"
        />
        <p className="mt-1 text-xs text-brand-charcoal/50">{f.uploadHint}</p>
      </div>

      <div className="sm:col-span-2">
        <label className="mb-1 block text-sm font-medium text-brand-charcoal" htmlFor="message">
          {f.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-xl border border-brand-plum/20 bg-white px-4 py-2.5 text-sm focus:border-brand-plum focus:outline-none"
          placeholder={
            lang === "ar"
              ? "أخبرنا بمزيد من التفاصيل عن مشروعك..."
              : "Tell us more about your project..."
          }
        />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-full bg-brand-plum px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.01] disabled:opacity-60 sm:w-auto"
        >
          {submitting ? dict.common.buttons.preparingRequest : dict.common.buttons.requestQuote}
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
