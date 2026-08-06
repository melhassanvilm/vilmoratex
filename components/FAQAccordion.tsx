"use client";

import { useState } from "react";

export type FAQItem = { question: string; answer: string };

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-brand-plum/10 rounded-2xl border border-brand-plum/10 bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-medium text-brand-charcoal">{item.question}</span>
              <svg
                viewBox="0 0 20 20"
                className={`h-4 w-4 flex-shrink-0 fill-current text-brand-plum transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <path d="M5 7l5 6 5-6z" />
              </svg>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-sm leading-relaxed text-brand-charcoal/70">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
