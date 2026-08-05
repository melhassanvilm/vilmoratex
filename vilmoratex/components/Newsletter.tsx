"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  return (
    <div>
      {status === "submitted" ? (
        <p className="text-sm font-medium text-brand-gold-light">
          Thank you — you&apos;re on the list for new collections and offers.
        </p>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setStatus("submitted");
          }}
          className="flex w-full max-w-md flex-col gap-2 sm:flex-row"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/50 focus:border-brand-gold focus:outline-none"
          />
          <button
            type="submit"
            className="whitespace-nowrap rounded-full bg-brand-gold px-5 py-2.5 text-sm font-semibold text-brand-plum-dark transition-transform hover:scale-105"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}
