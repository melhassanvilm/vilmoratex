import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import { categories } from "@/lib/categories";

export const metadata: Metadata = {
  title: "Categories",
  description: "Browse all VilmoraTex categories — from women's, men's, and kids fashion to school, hospital, and corporate uniforms.",
  alternates: { canonical: "/categories" },
};

export default function CategoriesPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Categories" }]} />
      <section className="container-page pb-16">
        <SectionHeading eyebrow="Browse" title="All Categories" align="center" />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/categories/${c.slug}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
            >
              <Image
                src={c.image}
                alt={c.name}
                fill
                sizes="(min-width: 1024px) 25vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-plum-dark/85 via-brand-plum-dark/10 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <p className="font-display text-lg font-semibold text-white">{c.name}</p>
                <p className="mt-1 text-xs text-white/70 line-clamp-2">{c.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
