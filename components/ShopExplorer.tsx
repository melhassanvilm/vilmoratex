"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/lib/products";
import { categories } from "@/lib/categories";
import ProductCard from "./ProductCard";
import { useLocale } from "./LocaleProvider";

type SortOption = "newest" | "popular" | "price-asc" | "price-desc";

export default function ShopExplorer({ products }: { products: Product[] }) {
  const { lang, dict } = useLocale();
  const flt = dict.common.filters;
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("all");
  const [gender, setGender] = useState<string>("all");
  const [availability, setAvailability] = useState<string>("all");
  const [maxPrice, setMaxPrice] = useState<number>(3000);
  const [sort, setSort] = useState<SortOption>("newest");

  const genderLabels: Record<string, string> = {
    all: flt.all,
    women: flt.women,
    men: flt.men,
    kids: flt.kids,
  };

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      if (search && !p.name[lang].toLowerCase().includes(search.toLowerCase())) return false;
      if (category !== "all" && p.category !== category) return false;
      if (gender !== "all" && p.gender !== gender && p.gender !== "unisex") return false;
      if (availability !== "all" && p.availability !== availability) return false;
      if (p.price > 0 && p.price > maxPrice) return false;
      return true;
    });

    switch (sort) {
      case "popular":
        list = [...list].sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      case "price-asc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      default:
        list = [...list].sort((a, b) =>
          a.tags.includes("new-arrival") === b.tags.includes("new-arrival")
            ? 0
            : a.tags.includes("new-arrival")
              ? -1
              : 1
        );
    }
    return list;
  }, [products, search, category, gender, availability, maxPrice, sort, lang]);

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr]">
      <aside className="space-y-6 lg:sticky lg:top-28 lg:h-fit">
        <div>
          <label htmlFor="search" className="mb-1 block text-sm font-semibold text-brand-charcoal">
            {flt.search}
          </label>
          <input
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={dict.common.search.placeholder}
            className="w-full rounded-xl border border-brand-plum/20 bg-white px-4 py-2.5 text-sm focus:border-brand-plum focus:outline-none"
          />
        </div>

        <div>
          <p className="mb-2 text-sm font-semibold text-brand-charcoal">{flt.category}</p>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-xl border border-brand-plum/20 bg-white px-3 py-2 text-sm"
          >
            <option value="all">{flt.allCategories}</option>
            {categories.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name[lang]}
              </option>
            ))}
          </select>
        </div>

        <div>
          <p className="mb-2 text-sm font-semibold text-brand-charcoal">{flt.gender}</p>
          <div className="flex flex-wrap gap-2">
            {["all", "women", "men", "kids"].map((g) => (
              <button
                key={g}
                onClick={() => setGender(g)}
                className={`rounded-full border px-3 py-1.5 text-xs ${
                  gender === g
                    ? "border-brand-plum bg-brand-plum text-white"
                    : "border-brand-plum/20 text-brand-charcoal"
                }`}
              >
                {genderLabels[g]}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-semibold text-brand-charcoal">{flt.availability}</p>
          <div className="flex flex-wrap gap-2">
            {[
              { value: "all", label: flt.all },
              { value: "in-stock", label: dict.common.product.inStock },
              { value: "made-to-order", label: dict.common.product.madeToOrder },
            ].map((a) => (
              <button
                key={a.value}
                onClick={() => setAvailability(a.value)}
                className={`rounded-full border px-3 py-1.5 text-xs ${
                  availability === a.value
                    ? "border-brand-plum bg-brand-plum text-white"
                    : "border-brand-plum/20 text-brand-charcoal"
                }`}
              >
                {a.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label
            htmlFor="maxPrice"
            className="mb-2 block text-sm font-semibold text-brand-charcoal"
          >
            {flt.maxPrice}:{" "}
            {lang === "ar"
              ? `${maxPrice.toLocaleString("ar-EG")} ج.م`
              : `EGP ${maxPrice.toLocaleString("en-US")}`}
          </label>
          <input
            id="maxPrice"
            type="range"
            min={200}
            max={3000}
            step={50}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full accent-brand-plum"
          />
        </div>
      </aside>

      <div>
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-brand-charcoal/60">
            {filtered.length} {dict.common.search.productsFound}
          </p>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="rounded-xl border border-brand-plum/20 bg-white px-3 py-2 text-sm"
          >
            <option value="newest">{flt.newest}</option>
            <option value="popular">{flt.popular}</option>
            <option value="price-asc">{flt.priceLowHigh}</option>
            <option value="price-desc">{flt.priceHighLow}</option>
          </select>
        </div>

        {filtered.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-brand-plum/20 p-12 text-center text-brand-charcoal/60">
            {dict.common.search.noResults}
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
            {filtered.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
