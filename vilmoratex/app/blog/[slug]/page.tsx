import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import ShareButtons from "@/components/ShareButtons";
import JsonLd from "@/components/JsonLd";
import { blogPosts, getBlogPost } from "@/lib/blog";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: { images: [{ url: post.coverImage }], type: "article" },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const url = `${siteConfig.url}/blog/${post.slug}`;
  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          image: [post.coverImage],
          datePublished: post.date,
          author: { "@type": "Organization", name: post.author },
          publisher: { "@type": "Organization", name: siteConfig.fullName },
          mainEntityOfPage: url,
        }}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: post.title }]} />

      <article className="container-page max-w-3xl pb-16">
        <p className="text-xs uppercase tracking-wide text-brand-charcoal/50">
          {new Date(post.date).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })} · {post.readingTime} · By {post.author}
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-brand-plum sm:text-4xl">{post.title}</h1>

        <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-2xl">
          <Image src={post.coverImage} alt={post.title} fill sizes="(min-width: 1024px) 768px, 100vw" className="object-cover" priority />
        </div>

        <div className="prose-none mt-8 space-y-5 text-brand-charcoal/80">
          {post.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-brand-plum/10 pt-6">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-brand-cream px-3 py-1 text-xs text-brand-charcoal/60">
                #{tag}
              </span>
            ))}
          </div>
          <ShareButtons title={post.title} url={url} />
        </div>

        {otherPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="font-display text-xl font-semibold text-brand-plum">More from the blog</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="rounded-xl border border-brand-plum/10 bg-white p-4 hover:shadow-md"
                >
                  <p className="font-medium text-brand-plum">{p.title}</p>
                  <p className="mt-1 text-sm text-brand-charcoal/60 line-clamp-2">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
