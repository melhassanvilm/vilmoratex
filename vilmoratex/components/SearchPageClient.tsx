"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "./ProductCard";
import { products } from "@/lib/products";
import { useLocale } from "./LocaleProvider";

export default function SearchPageClient() {
  const { lang, dict } = useLocale();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(initialQuery);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return products.filter(
      (p) =>
        p.name[lang].toLowerCase().includes(q) ||
        p.description[lang].toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }, [query, lang]);

  return (
    <div>
      <div className="mx-auto max-w-xl">
        <label htmlFor="site-search" className="sr-only">
          {dict.common.search.placeholder}
        </label>
        <input
          id="site-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={dict.common.search.placeholder}
          autoFocus
          className="w-full rounded-full border border-brand-plum/20 bg-white px-5 py-3.5 text-sm shadow-sm focus:border-brand-plum focus:outline-none"
        />
      </div>

      <div className="mt-10">
        {query.trim() === "" ? (
          <p className="text-center text-sm text-brand-charcoal/60">
            {dict.products.searchPage.startTyping}
          </p>
        ) : results.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-brand-plum/20 p-12 text-center text-sm text-brand-charcoal/60">
            {dict.common.search.noResults}
          </p>
        ) : (
          <>
            <p className="mb-6 text-sm text-brand-charcoal/60">
              {dict.common.search.resultsFor} &ldquo;{query}&rdquo; — {results.length}{" "}
              {dict.common.search.productsFound}
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
              {results.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
