import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Manufacturing insights, fabric guides, and industry notes from the VilmoraTex team.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
      <section className="container-page pb-16">
        <SectionHeading eyebrow="Insights" title="The VilmoraTex Blog" align="center" />
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-2xl border border-brand-plum/10 bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-wide text-brand-charcoal/50">
                  {new Date(post.date).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })} · {post.readingTime}
                </p>
                <h2 className="mt-2 font-display text-xl font-semibold text-brand-plum">{post.title}</h2>
                <p className="mt-2 text-sm text-brand-charcoal/70">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
