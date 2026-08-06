import Image from "next/image";
import Link from "@/components/LocaleLink";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import ReviewCard from "@/components/ReviewCard";
import InstagramGallery from "@/components/InstagramGallery";
import { products, type Product } from "@/lib/products";
import { categories } from "@/lib/categories";
import { blogPosts } from "@/lib/blog";
import { reviews } from "@/lib/reviews";
import { getDictionary, type Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n-config";

function byTag(tag: string, limit = 4) {
  return products.filter((p) => p.tags.includes(tag)).slice(0, limit);
}

function ProductRow({
  title,
  description,
  items,
  href,
  viewAllLabel,
}: {
  title: string;
  description?: string;
  items: Product[];
  href: string;
  viewAllLabel: string;
}) {
  if (items.length === 0) return null;
  return (
    <section className="container-page py-14">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <SectionHeading title={title} description={description} />
        <Link href={href} className="text-sm font-semibold text-brand-plum hover:underline">
          {viewAllLabel} →
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

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict: Dictionary = await getDictionary(lang);
  const h = dict.homepage;

  const featured = byTag("featured", 4);
  const bestSellers = byTag("bestseller", 4);
  const newArrivals = byTag("new-arrival", 4);
  const summerCollection = byTag("summer-collection", 4);
  const womensCollection = byTag("womens-collection", 4);
  const mensCollection = byTag("mens-collection", 4);
  const kidsCollection = byTag("kids-collection", 4);
  const uniformSolutions = byTag("uniform-solutions", 4);

  const serviceHrefs = ["/manufacturing", "/private-label", "/wholesale", "/manufacturing"];

  return (
    <>
      <Hero />

      <ProductRow
        title={h.rows.featured}
        items={featured}
        href="/shop"
        viewAllLabel={dict.common.buttons.viewAll}
      />

      <section className="bg-white py-14">
        <div className="container-page">
          <SectionHeading
            eyebrow={h.categorySection.eyebrow}
            title={h.categorySection.title}
            description={h.categorySection.description}
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
                  alt={c.name[lang]}
                  fill
                  sizes="(min-width: 1024px) 25vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-plum-dark/80 via-brand-plum-dark/10 to-transparent" />
                <p className="absolute bottom-3 start-3 font-display text-lg font-semibold text-white">
                  {c.name[lang]}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ProductRow
        title={h.rows.bestSellers}
        items={bestSellers}
        href="/shop"
        viewAllLabel={dict.common.buttons.viewAll}
      />
      <ProductRow
        title={h.rows.newArrivals}
        items={newArrivals}
        href="/shop"
        viewAllLabel={dict.common.buttons.viewAll}
      />
      <ProductRow
        title={h.rows.summerCollection}
        description={h.rows.summerCollectionDesc}
        items={summerCollection}
        href="/categories/summer-dresses"
        viewAllLabel={dict.common.buttons.viewAll}
      />
      <ProductRow
        title={h.rows.womensCollection}
        items={womensCollection}
        href="/categories/womens-fashion"
        viewAllLabel={dict.common.buttons.viewAll}
      />
      <ProductRow
        title={h.rows.mensCollection}
        items={mensCollection}
        href="/categories/mens-fashion"
        viewAllLabel={dict.common.buttons.viewAll}
      />
      <ProductRow
        title={h.rows.kidsCollection}
        items={kidsCollection}
        href="/categories/kids-fashion"
        viewAllLabel={dict.common.buttons.viewAll}
      />

      <section className="bg-brand-plum py-16 text-brand-cream">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
              {h.uniformSection.eyebrow}
            </p>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              {h.uniformSection.title}
            </h2>
            <p className="mt-4 text-brand-cream/80">{h.uniformSection.description}</p>
            <Link
              href="/uniforms"
              className="mt-6 inline-block rounded-full bg-brand-gold px-7 py-3 text-sm font-semibold text-brand-plum-dark transition-transform hover:scale-105"
            >
              {dict.common.buttons.exploreUniforms}
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
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {h.statistics.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-brand-plum/10 bg-white p-6 text-center"
            >
              <p className="font-display text-3xl font-bold text-brand-plum sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-brand-charcoal/60">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-16">
        <SectionHeading
          eyebrow={h.servicesSection.eyebrow}
          title={h.servicesSection.title}
          description={h.servicesSection.description}
        />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {h.servicesSection.items.map((s, i) => (
            <Link
              key={s.title}
              href={serviceHrefs[i] ?? "/manufacturing"}
              className="rounded-2xl border border-brand-plum/10 bg-white p-6 transition-shadow hover:shadow-lg"
            >
              <h3 className="font-display text-lg font-semibold text-brand-plum">{s.title}</h3>
              <p className="mt-2 text-sm text-brand-charcoal/70">{s.desc}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-brand-gold">
                {dict.common.buttons.learnMore} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="https://picsum.photos/seed/vilmora-factory/1200/900"
              alt={
                lang === "ar"
                  ? "داخل مصنع إنتاج فيلمورا تكس"
                  : "Inside the VilmoraTex production floor"
              }
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
              {h.factorySection.eyebrow}
            </p>
            <h2 className="font-display text-3xl font-semibold text-brand-plum sm:text-4xl">
              {h.factorySection.title}
            </h2>
            <p className="mt-4 text-brand-charcoal/70">{h.factorySection.paragraph1}</p>
            <p className="mt-4 text-brand-charcoal/70">{h.factorySection.paragraph2}</p>
            <Link
              href="/about"
              className="mt-6 inline-block text-sm font-semibold text-brand-plum hover:underline"
            >
              {h.factorySection.linkText} →
            </Link>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <SectionHeading
          eyebrow={h.whyChooseUs.eyebrow}
          title={h.whyChooseUs.title}
          align="center"
        />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {h.whyChooseUs.items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-brand-plum/10 bg-white p-6 text-center"
            >
              <h3 className="font-display text-lg font-semibold text-brand-plum">{item.title}</h3>
              <p className="mt-2 text-sm text-brand-charcoal/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-cream py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow={h.testimonials.eyebrow}
            title={h.testimonials.title}
            align="center"
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reviews.map((r) => (
              <ReviewCard key={r.name} review={r} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <SectionHeading eyebrow={h.instagram.eyebrow} title={h.instagram.title} align="center" />
        <div className="mt-10">
          <InstagramGallery />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-page">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow={h.blogSection.eyebrow} title={h.blogSection.title} />
            <Link href="/blog" className="text-sm font-semibold text-brand-plum hover:underline">
              {h.blogSection.viewAll} →
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
                    alt={post.title[lang]}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-wide text-brand-charcoal/50">
                    {post.readingTime[lang]}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-semibold text-brand-plum line-clamp-2">
                    {post.title[lang]}
                  </h3>
                  <p className="mt-2 text-sm text-brand-charcoal/70 line-clamp-2">
                    {post.excerpt[lang]}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="rounded-3xl bg-gradient-to-br from-brand-plum to-brand-plum-dark px-8 py-14 text-center text-brand-cream">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">{h.finalCta.title}</h2>
          <p className="mx-auto mt-3 max-w-xl text-brand-cream/80">{h.finalCta.description}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/quote"
              className="rounded-full bg-brand-gold px-7 py-3 text-sm font-semibold text-brand-plum-dark transition-transform hover:scale-105"
            >
              {h.finalCta.quoteButton}
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-brand-cream/40 px-7 py-3 text-sm font-semibold hover:bg-brand-cream/10"
            >
              {h.finalCta.contactButton}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
