"use client";

import { useState, type FormEvent } from "react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { useLocale } from "./LocaleProvider";

export default function ContactForm() {
  const { lang, dict } = useLocale();
  const [submitted, setSubmitted] = useState(false);
  const f = dict.common.forms;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const phone = String(form.get("phone") || "");
    const message = String(form.get("message") || "");

    const text =
      lang === "ar"
        ? [
            dict.common.contact.contactFormHeading,
            "",
            `${f.fullName}: ${name}`,
            `${f.email}: ${email}`,
            `${f.phone}: ${phone}`,
            "",
            `${f.message}: ${message}`,
          ].join("\n")
        : [
            dict.common.contact.contactFormHeading,
            "",
            `Name: ${name}`,
            `Email: ${email}`,
            `Phone: ${phone}`,
            "",
            `Message: ${message}`,
          ].join("\n");

    window.open(buildWhatsAppLink(text), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-brand-gold/40 bg-brand-gold/10 p-6 text-center">
        <p className="font-semibold text-brand-plum">{dict.common.contact.thankYouTitle}</p>
        <p className="mt-1 text-sm text-brand-charcoal/70">{dict.common.contact.thankYouBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-brand-charcoal">
          {f.fullName}
        </label>
        <input
          id="name"
          name="name"
          required
          className="w-full rounded-xl border border-brand-plum/20 bg-white px-4 py-2.5 text-sm focus:border-brand-plum focus:outline-none"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-brand-charcoal">
            {f.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-xl border border-brand-plum/20 bg-white px-4 py-2.5 text-sm focus:border-brand-plum focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-brand-charcoal">
            {f.phone}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full rounded-xl border border-brand-plum/20 bg-white px-4 py-2.5 text-sm focus:border-brand-plum focus:outline-none"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-brand-charcoal">
          {f.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-xl border border-brand-plum/20 bg-white px-4 py-2.5 text-sm focus:border-brand-plum focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="rounded-full bg-brand-plum px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
      >
        {dict.common.buttons.sendMessage}
      </button>
    </form>
  );
}
