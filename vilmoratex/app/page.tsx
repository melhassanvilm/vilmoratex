import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import ReviewCard from "@/components/ReviewCard";
import InstagramGallery from "@/components/InstagramGallery";
import { products } from "@/lib/products";
import { categories } from "@/lib/categories";
import { blogPosts } from "@/lib/blog";
import { reviews } from "@/lib/reviews";

function byTag(tag: string, limit = 4) {
  return products.filter((p) => p.tags.includes(tag)).slice(0, limit);
}

const featured = byTag("featured", 4);
const bestSellers = byTag("bestseller", 4);
const newArrivals = byTag("new-arrival", 4);
const summerCollection = byTag("summer-collection", 4);
const womensCollection = byTag("womens-collection", 4);
const mensCollection = byTag("mens-collection", 4);
const kidsCollection = byTag("kids-collection", 4);
const uniformSolutions = byTag("uniform-solutions", 4);

const whyChooseUs = [
  {
    title: "In-House Manufacturing",
    description: "Cutting, sewing, and finishing all under one roof, so every order is quality-checked at the source.",
  },
  {
    title: "Fabric-Accurate Costing",
    description: "We calculate consumption per size, not flat averages — so quotes stay accurate from sample to bulk order.",
  },
  {
    title: "Flexible Minimums",
    description: "From boutique private-label trial runs to 1,000+ piece institutional orders, we scale with your business.",
  },
  {
    title: "Custom Branding",
    description: "Embroidery, printing, and woven labels applied in-house for a consistent, professional finish.",
  },
];

function ProductRow({
  title,
  description,
  items,
  href,
}: {
  title: string;
  description?: string;
  items: typeof products;
  href: string;
}) {
  if (items.length === 0) return null;
  return (
    <section className="container-page py-14">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <SectionHeading title={title} description={description} />
        <Link href={href} className="text-sm font-semibold text-brand-plum hover:underline">
          View all →
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {items.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />

      <ProductRow title="Featured Products" items={featured} href="/shop" />

      <section className="bg-white py-14">
        <div className="container-page">
          <SectionHeading
            eyebrow="Shop by Category"
            title="Fashion & Uniforms, Manufactured to Order"
            description="Explore our core collections — every category is backed by our own production floor, so wholesale and custom orders are always possible."
            align="center"
          />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {categories.slice(0, 8).map((c) => (
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
                <div className="absolute inset-0 bg-gradient-to-t from-brand-plum-dark/80 via-brand-plum-dark/10 to-transparent" />
                <p className="absolute bottom-3 left-3 font-display text-lg font-semibold text-white">
                  {c.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ProductRow title="Best Sellers" items={bestSellers} href="/shop" />
      <ProductRow title="New Arrivals" items={newArrivals} href="/shop" />
      <ProductRow
        title="Summer Collection"
        description="Lightweight, breathable pieces made for Egypt's warmest months."
        items={summerCollection}
        href="/categories/summer-dresses"
      />
      <ProductRow title="Women's Collection" items={womensCollection} href="/categories/womens-fashion" />
      <ProductRow title="Men's Collection" items={mensCollection} href="/categories/mens-fashion" />
      <ProductRow title="Kids Collection" items={kidsCollection} href="/categories/kids-fashion" />

      <section className="bg-brand-plum py-16 text-brand-cream">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
              Uniform Solutions
            </p>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              Full uniform programs, manufactured to your exact specification
            </h2>
            <p className="mt-4 text-brand-cream/80">
              Schools, hospitals, hotels, restaurants, and factories trust VilmoraTex to manufacture
              uniform programs sized from age 4 through adult, priced transparently by fabric
              consumption and quantity — not guesswork.
            </p>
            <Link
              href="/uniforms"
              className="mt-6 inline-block rounded-full bg-brand-gold px-7 py-3 text-sm font-semibold text-brand-plum-dark transition-transform hover:scale-105"
            >
              Explore Uniform Solutions
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {uniformSolutions.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <SectionHeading
          eyebrow="Manufacturing Services"
          title="From pattern to production, all in-house"
          description="OEM manufacturing, private label, bulk orders, and custom branding — our factory floor supports every stage of your product's journey."
        />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "OEM Manufacturing", href: "/manufacturing", desc: "Bring your own design, we produce to spec." },
            { title: "Private Label", href: "/private-label", desc: "Launch under your brand with proven, ready styles." },
            { title: "Wholesale", href: "/wholesale", desc: "Factory-direct pricing for retailers and distributors." },
            { title: "Custom Embroidery & Printing", href: "/manufacturing", desc: "In-house branding for uniforms and apparel." },
          ].map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="rounded-2xl border border-brand-plum/10 bg-white p-6 transition-shadow hover:shadow-lg"
            >
              <h3 className="font-display text-lg font-semibold text-brand-plum">{s.title}</h3>
              <p className="mt-2 text-sm text-brand-charcoal/70">{s.desc}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-brand-gold">Learn more →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="https://picsum.photos/seed/vilmora-factory/1200/900"
              alt="Inside the VilmoraTex production floor"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
              About VilmoraTex
            </p>
            <h2 className="font-display text-3xl font-semibold text-brand-plum sm:text-4xl">
              Our Factory
            </h2>
            <p className="mt-4 text-brand-charcoal/70">
              VilmoraTex Trading &amp; Industry manufactures fashion apparel and professional uniforms
              from our own production facility in Egypt. Cutting, sewing, finishing, embroidery, and
              printing all happen in-house, which means tighter quality control, faster sampling, and
              pricing that reflects real production cost — not a middleman&apos;s markup.
            </p>
            <p className="mt-4 text-brand-charcoal/70">
              We supply retail customers directly and partner with schools, hospitals, hotels,
              restaurants, and corporate clients on bulk and private label orders across Egypt.
            </p>
            <Link href="/about" className="mt-6 inline-block text-sm font-semibold text-brand-plum hover:underline">
              More about our story →
            </Link>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <SectionHeading eyebrow="Why VilmoraTex" title="Why Choose Us" align="center" />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item) => (
            <div key={item.title} className="rounded-2xl border border-brand-plum/10 bg-white p-6 text-center">
              <h3 className="font-display text-lg font-semibold text-brand-plum">{item.title}</h3>
              <p className="mt-2 text-sm text-brand-charcoal/70">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-cream py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Testimonials" title="What Our Customers Say" align="center" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reviews.map((r) => (
              <ReviewCard key={r.name} review={r} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <SectionHeading eyebrow="Follow Along" title="From the VilmoraTex Floor" align="center" />
        <div className="mt-10">
          <InstagramGallery />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-page">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Latest News" title="From the Blog" />
            <Link href="/blog" className="text-sm font-semibold text-brand-plum hover:underline">
              View all articles →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
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
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-wide text-brand-charcoal/50">
                    {post.readingTime}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-semibold text-brand-plum line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-charcoal/70 line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="rounded-3xl bg-gradient-to-br from-brand-plum to-brand-plum-dark px-8 py-14 text-center text-brand-cream">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Ready to manufacture with VilmoraTex?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-brand-cream/80">
            Whether it&apos;s a 100-piece school uniform run or a full private label collection, our
            team will walk you through fabric, pricing, and timelines.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/quote"
              className="rounded-full bg-brand-gold px-7 py-3 text-sm font-semibold text-brand-plum-dark transition-transform hover:scale-105"
            >
              Request a Quote
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-brand-cream/40 px-7 py-3 text-sm font-semibold hover:bg-brand-cream/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
