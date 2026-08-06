"use client";

import { useState } from "react";
import { useLocale } from "./LocaleProvider";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitted">("idle");
  const { dict } = useLocale();
  const footer = dict.common.footer as Record<string, string>;

  return (
    <div>
      {status === "submitted" ? (
        <p className="text-sm font-medium text-brand-gold-light">{footer.subscribed}</p>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setStatus("submitted");
          }}
          className="flex w-full max-w-md flex-col gap-2 sm:flex-row"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            {footer.newsletterPlaceholder}
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={footer.newsletterPlaceholder}
            className="w-full rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/50 focus:border-brand-gold focus:outline-none"
          />
          <button
            type="submit"
            className="whitespace-nowrap rounded-full bg-brand-gold px-5 py-2.5 text-sm font-semibold text-brand-plum-dark transition-transform hover:scale-105"
          >
            {footer.subscribe}
          </button>
        </form>
      )}
    </div>
  );
}
