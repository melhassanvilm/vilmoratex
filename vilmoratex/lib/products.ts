export type ProductColor = { name: string; hex: string };

export type Product = {
  slug: string;
  name: string;
  category: string;
  gender: "women" | "men" | "kids" | "unisex";
  price: number;
  compareAtPrice?: number;
  currency: "EGP";
  images: string[];
  description: string;
  longDescription: string;
  sizes: string[];
  colors: ProductColor[];
  availability: "in-stock" | "made-to-order" | "out-of-stock";
  minOrderQty?: number;
  tags: string[];
  rating: number;
  reviewCount: number;
};

export const products: Product[] = [
  {
    slug: "linen-breeze-summer-dress",
    name: "Linen Breeze Summer Dress",
    category: "summer-dresses",
    gender: "women",
    price: 890,
    compareAtPrice: 1100,
    currency: "EGP",
    images: [
      "https://picsum.photos/seed/vilmora-p-summer1-a/900/1200",
      "https://picsum.photos/seed/vilmora-p-summer1-b/900/1200",
      "https://picsum.photos/seed/vilmora-p-summer1-c/900/1200",
    ],
    description: "Airy linen-blend dress with an A-line cut for hot-weather comfort.",
    longDescription:
      "Cut from a breathable linen-cotton blend, the Linen Breeze dress is built for the Egyptian summer — lightweight, quick-drying, and cut in a flattering A-line silhouette. Finished with mother-of-pearl buttons and a self-tie waist.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Sand", hex: "#D8C7A8" },
      { name: "Sage", hex: "#9CAF88" },
      { name: "Ivory", hex: "#F6F1E8" },
    ],
    availability: "in-stock",
    tags: ["featured", "summer-collection", "new-arrival", "womens-collection"],
    rating: 4.7,
    reviewCount: 38,
  },
  {
    slug: "sunset-wrap-summer-dress",
    name: "Sunset Wrap Dress",
    category: "summer-dresses",
    gender: "women",
    price: 950,
    currency: "EGP",
    images: [
      "https://picsum.photos/seed/vilmora-p-summer2-a/900/1200",
      "https://picsum.photos/seed/vilmora-p-summer2-b/900/1200",
    ],
    description: "Flowing wrap-style summer dress with adjustable tie waist.",
    longDescription:
      "A wrap-front dress in a soft viscose blend, designed to flatter every body shape with an adjustable waist tie and a fluid, breathable drape.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Terracotta", hex: "#C1653A" },
      { name: "Navy", hex: "#1F2A44" },
    ],
    availability: "in-stock",
    tags: ["summer-collection", "womens-collection"],
    rating: 4.5,
    reviewCount: 21,
  },
  {
    slug: "everyday-jersey-casual-dress",
    name: "Everyday Jersey Casual Dress",
    category: "casual-dresses",
    gender: "women",
    price: 690,
    currency: "EGP",
    images: [
      "https://picsum.photos/seed/vilmora-p-casual1-a/900/1200",
      "https://picsum.photos/seed/vilmora-p-casual1-b/900/1200",
    ],
    description: "Soft jersey dress built for all-day comfort.",
    longDescription:
      "A relaxed-fit jersey dress with four-way stretch, designed for everyday errands, work-from-home days, and easy layering.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Charcoal", hex: "#3A3A3A" },
      { name: "Dusty Rose", hex: "#C08497" },
    ],
    availability: "in-stock",
    tags: ["bestseller", "womens-collection"],
    rating: 4.8,
    reviewCount: 64,
  },
  {
    slug: "midnight-satin-evening-gown",
    name: "Midnight Satin Evening Gown",
    category: "evening-dresses",
    gender: "women",
    price: 2450,
    compareAtPrice: 2900,
    currency: "EGP",
    images: [
      "https://picsum.photos/seed/vilmora-p-evening1-a/900/1200",
      "https://picsum.photos/seed/vilmora-p-evening1-b/900/1200",
      "https://picsum.photos/seed/vilmora-p-evening1-c/900/1200",
    ],
    description: "Floor-length satin gown with a fitted bodice.",
    longDescription:
      "A show-stopping floor-length gown in liquid satin, with a fitted bodice, subtle side slit, and a clean back detail — made to order in our atelier for weddings, galas, and formal events.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Midnight Blue", hex: "#101A33" },
      { name: "Wine", hex: "#5C1A2B" },
      { name: "Black", hex: "#0B0B0B" },
    ],
    availability: "made-to-order",
    tags: ["featured", "new-arrival"],
    rating: 4.9,
    reviewCount: 17,
  },
  {
    slug: "classic-crepe-abaya",
    name: "Classic Crepe Abaya",
    category: "abayas",
    gender: "women",
    price: 1250,
    currency: "EGP",
    images: [
      "https://picsum.photos/seed/vilmora-p-abaya1-a/900/1200",
      "https://picsum.photos/seed/vilmora-p-abaya1-b/900/1200",
    ],
    description: "Timeless crepe abaya with a clean, structured drape.",
    longDescription:
      "Our signature abaya in premium Korean crepe, chosen for its opacity, weight, and elegant drape. Available in classic black plus seasonal shades, with optional hand embroidery for wholesale orders.",
    sizes: ["52", "54", "56", "58", "60"],
    colors: [
      { name: "Black", hex: "#0B0B0B" },
      { name: "Mocha", hex: "#5B4636" },
    ],
    availability: "in-stock",
    tags: ["bestseller", "womens-collection"],
    rating: 4.9,
    reviewCount: 52,
  },
  {
    slug: "heritage-embroidered-abaya",
    name: "Heritage Embroidered Abaya",
    category: "abayas",
    gender: "women",
    price: 1690,
    currency: "EGP",
    images: [
      "https://picsum.photos/seed/vilmora-p-abaya2-a/900/1200",
      "https://picsum.photos/seed/vilmora-p-abaya2-b/900/1200",
    ],
    description: "Abaya with hand-finished embroidery at the cuffs.",
    longDescription:
      "A refined take on the classic abaya, finished with hand-guided embroidery along the cuffs and front panel. Custom embroidery patterns available for private label orders of 50 pieces or more.",
    sizes: ["52", "54", "56", "58"],
    colors: [{ name: "Black", hex: "#0B0B0B" }],
    availability: "made-to-order",
    minOrderQty: 20,
    tags: ["new-arrival"],
    rating: 4.6,
    reviewCount: 12,
  },
  {
    slug: "oxford-tailored-shirt",
    name: "Oxford Tailored Shirt",
    category: "mens-fashion",
    gender: "men",
    price: 780,
    currency: "EGP",
    images: [
      "https://picsum.photos/seed/vilmora-p-men1-a/900/1200",
      "https://picsum.photos/seed/vilmora-p-men1-b/900/1200",
    ],
    description: "Breathable Oxford cotton shirt with a tailored fit.",
    longDescription:
      "A wardrobe staple cut from breathable Oxford cotton with a tailored fit, mother-of-pearl buttons, and reinforced collar stays — equally suited to the office or weekend wear.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "White", hex: "#F7F7F7" },
      { name: "Sky Blue", hex: "#A9C6E8" },
      { name: "Charcoal", hex: "#3A3A3A" },
    ],
    availability: "in-stock",
    tags: ["mens-collection", "bestseller"],
    rating: 4.6,
    reviewCount: 44,
  },
  {
    slug: "urban-comfort-chino",
    name: "Urban Comfort Chino",
    category: "mens-fashion",
    gender: "men",
    price: 850,
    currency: "EGP",
    images: [
      "https://picsum.photos/seed/vilmora-p-men2-a/900/1200",
      "https://picsum.photos/seed/vilmora-p-men2-b/900/1200",
    ],
    description: "Slim-tapered chino trousers with a soft-touch finish.",
    longDescription:
      "Cut from a stretch cotton twill with a soft-touch finish, these slim-tapered chinos move with you through a full workday and beyond.",
    sizes: ["30", "32", "34", "36", "38", "40"],
    colors: [
      { name: "Khaki", hex: "#C3B091" },
      { name: "Navy", hex: "#1F2A44" },
      { name: "Black", hex: "#0B0B0B" },
    ],
    availability: "in-stock",
    tags: ["mens-collection", "new-arrival"],
    rating: 4.4,
    reviewCount: 19,
  },
  {
    slug: "little-explorer-playset",
    name: "Little Explorer Playset",
    category: "kids-fashion",
    gender: "kids",
    price: 460,
    currency: "EGP",
    images: [
      "https://picsum.photos/seed/vilmora-p-kids1-a/900/1200",
      "https://picsum.photos/seed/vilmora-p-kids1-b/900/1200",
    ],
    description: "Durable two-piece playset for active kids.",
    longDescription:
      "A reinforced-knee, easy-care two-piece set designed for kids on the move — soft jersey top paired with durable twill shorts.",
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    colors: [
      { name: "Sky Blue", hex: "#A9C6E8" },
      { name: "Coral", hex: "#E17B62" },
    ],
    availability: "in-stock",
    tags: ["kids-collection", "bestseller"],
    rating: 4.7,
    reviewCount: 28,
  },
  {
    slug: "sunny-days-kids-dress",
    name: "Sunny Days Kids Dress",
    category: "kids-fashion",
    gender: "kids",
    price: 420,
    currency: "EGP",
    images: [
      "https://picsum.photos/seed/vilmora-p-kids2-a/900/1200",
      "https://picsum.photos/seed/vilmora-p-kids2-b/900/1200",
    ],
    description: "Twirl-friendly summer dress for girls.",
    longDescription:
      "A soft cotton-blend dress with a twirl-friendly skirt and covered-elastic waist for all-day comfort — a favorite for birthdays, outings, and everyday summer wear.",
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
    colors: [
      { name: "Lemon", hex: "#F4D35E" },
      { name: "Blush", hex: "#F2C6C2" },
    ],
    availability: "in-stock",
    tags: ["kids-collection", "summer-collection", "new-arrival"],
    rating: 4.8,
    reviewCount: 15,
  },
  {
    slug: "cloudsoft-pajama-set",
    name: "CloudSoft Pajama Set",
    category: "pajamas",
    gender: "unisex",
    price: 520,
    currency: "EGP",
    images: [
      "https://picsum.photos/seed/vilmora-p-pajama1-a/900/1200",
      "https://picsum.photos/seed/vilmora-p-pajama1-b/900/1200",
    ],
    description: "Brushed cotton pajama set for year-round comfort.",
    longDescription:
      "A brushed-cotton pajama set with a relaxed fit, covered elastic waistband, and breathable knit — offered in adult and kids sizing and available for private-label branding.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Heather Grey", hex: "#B7B7B7" },
      { name: "Powder Blue", hex: "#C9DCE8" },
    ],
    availability: "in-stock",
    tags: ["new-arrival"],
    rating: 4.5,
    reviewCount: 9,
  },
  {
    slug: "primary-pinafore-uniform-set",
    name: "Primary Pinafore Uniform Set",
    category: "school-uniforms",
    gender: "kids",
    price: 0,
    currency: "EGP",
    images: [
      "https://picsum.photos/seed/vilmora-p-school1-a/900/1200",
      "https://picsum.photos/seed/vilmora-p-school1-b/900/1200",
    ],
    description: "Pinafore + long-sleeve shirt set for primary grades, priced per school specification.",
    longDescription:
      "Our most-ordered school uniform set: a pinafore dress paired with a long-sleeve shirt, offered from age 4 to 16. Fabric, color, and trim are matched to each school's identity, with fabric consumption calculated per size band. Contact us for a fabric-and-quantity-based quote.",
    sizes: ["4-6Y", "7-9Y", "10-12Y", "13-16Y"],
    colors: [{ name: "Made to School Spec", hex: "#4A1942" }],
    availability: "made-to-order",
    minOrderQty: 100,
    tags: ["uniform-solutions"],
    rating: 4.9,
    reviewCount: 31,
  },
  {
    slug: "classic-scrub-set",
    name: "Classic Scrub Set",
    category: "medical-scrubs",
    gender: "unisex",
    price: 480,
    currency: "EGP",
    images: [
      "https://picsum.photos/seed/vilmora-p-scrub1-a/900/1200",
      "https://picsum.photos/seed/vilmora-p-scrub1-b/900/1200",
    ],
    description: "V-neck top and drawstring trouser scrub set.",
    longDescription:
      "A breathable poly-cotton scrub set with a V-neck top, chest and hip pockets, and a drawstring-and-elastic trouser waist — built for long clinical shifts and frequent washing.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Ceil Blue", hex: "#7FA6C9" },
      { name: "Surgical Green", hex: "#5B8266" },
      { name: "Navy", hex: "#1F2A44" },
    ],
    availability: "in-stock",
    minOrderQty: 20,
    tags: ["uniform-solutions", "bestseller"],
    rating: 4.7,
    reviewCount: 40,
  },
  {
    slug: "engineer-cargo-workwear-set",
    name: "Engineer Cargo Workwear Set",
    category: "engineering-uniforms",
    gender: "unisex",
    price: 690,
    currency: "EGP",
    images: [
      "https://picsum.photos/seed/vilmora-p-eng1-a/900/1200",
      "https://picsum.photos/seed/vilmora-p-eng1-b/900/1200",
    ],
    description: "Reinforced work shirt and cargo trouser set for site engineers.",
    longDescription:
      "Built for site conditions: a reinforced-stitch shirt and cargo trouser set with multiple utility pockets, offered in ripstop and twill fabric options with company logo embroidery.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Navy", hex: "#1F2A44" },
      { name: "Khaki", hex: "#C3B091" },
    ],
    availability: "made-to-order",
    minOrderQty: 30,
    tags: ["uniform-solutions"],
    rating: 4.6,
    reviewCount: 11,
  },
  {
    slug: "grand-hotel-concierge-blazer-set",
    name: "Grand Hotel Concierge Blazer Set",
    category: "hotel-uniforms",
    gender: "unisex",
    price: 1450,
    currency: "EGP",
    images: [
      "https://picsum.photos/seed/vilmora-p-hotel1-a/900/1200",
      "https://picsum.photos/seed/vilmora-p-hotel1-b/900/1200",
    ],
    description: "Structured blazer and trouser set for front-desk and concierge teams.",
    longDescription:
      "A tailored blazer and trouser set finished to hospitality standards, with custom lapel piping and embroidered branding available for full-property uniform programs.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Charcoal", hex: "#3A3A3A" },
      { name: "Bordeaux", hex: "#6B2737" },
    ],
    availability: "made-to-order",
    minOrderQty: 15,
    tags: ["uniform-solutions"],
    rating: 4.8,
    reviewCount: 8,
  },
  {
    slug: "brasserie-chef-apron-set",
    name: "Brasserie Chef & Server Apron Set",
    category: "restaurant-uniforms",
    gender: "unisex",
    price: 380,
    currency: "EGP",
    images: [
      "https://picsum.photos/seed/vilmora-p-rest1-a/900/1200",
      "https://picsum.photos/seed/vilmora-p-rest1-b/900/1200",
    ],
    description: "Chef coat and server apron set in stain-resistant fabric.",
    longDescription:
      "A durable, stain-resistant fabric chef coat paired with an adjustable server apron, designed to hold up through commercial kitchen laundering cycles.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "White", hex: "#F7F7F7" },
      { name: "Black", hex: "#0B0B0B" },
    ],
    availability: "in-stock",
    minOrderQty: 20,
    tags: ["uniform-solutions"],
    rating: 4.5,
    reviewCount: 14,
  },
  {
    slug: "teller-corporate-shirt-set",
    name: "Teller Corporate Shirt Set",
    category: "corporate-uniforms",
    gender: "unisex",
    price: 620,
    currency: "EGP",
    images: [
      "https://picsum.photos/seed/vilmora-p-corp1-a/900/1200",
      "https://picsum.photos/seed/vilmora-p-corp1-b/900/1200",
    ],
    description: "Structured shirt set for bank and retail branch teams.",
    longDescription:
      "A crisp, easy-iron shirt cut for a full day on the branch floor, offered with embroidered logo placement and coordinated scarf/tie accessories for full corporate uniform programs.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "White", hex: "#F7F7F7" },
      { name: "Light Blue", hex: "#A9C6E8" },
    ],
    availability: "made-to-order",
    minOrderQty: 25,
    tags: ["uniform-solutions"],
    rating: 4.6,
    reviewCount: 10,
  },
  {
    slug: "site-safety-industrial-coverall",
    name: "Site Safety Industrial Coverall",
    category: "industrial-uniforms",
    gender: "unisex",
    price: 540,
    currency: "EGP",
    images: [
      "https://picsum.photos/seed/vilmora-p-ind1-a/900/1200",
      "https://picsum.photos/seed/vilmora-p-ind1-b/900/1200",
    ],
    description: "Heavy-duty coverall with reflective safety trim.",
    longDescription:
      "A single-piece coverall cut from abrasion-resistant twill with reflective safety trim and reinforced knees and elbows — built for factory floors and industrial sites.",
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    colors: [
      { name: "Safety Orange", hex: "#E2711D" },
      { name: "Navy", hex: "#1F2A44" },
    ],
    availability: "made-to-order",
    minOrderQty: 30,
    tags: ["uniform-solutions"],
    rating: 4.4,
    reviewCount: 7,
  },
  {
    slug: "ward-comfort-hospital-set",
    name: "Ward Comfort Hospital Uniform Set",
    category: "hospital-uniforms",
    gender: "unisex",
    price: 450,
    currency: "EGP",
    images: [
      "https://picsum.photos/seed/vilmora-p-hosp1-a/900/1200",
      "https://picsum.photos/seed/vilmora-p-hosp1-b/900/1200",
    ],
    description: "Easy-care uniform set for nursing and support staff.",
    longDescription:
      "Designed for long hospital shifts, this uniform set uses an easy-care poly-cotton blend that resists shrinking and holds color through frequent commercial washing.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "White", hex: "#F7F7F7" },
      { name: "Ceil Blue", hex: "#7FA6C9" },
    ],
    availability: "in-stock",
    minOrderQty: 20,
    tags: ["uniform-solutions"],
    rating: 4.6,
    reviewCount: 22,
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string) {
  return products.filter((p) => p.category === categorySlug);
}

export function getRelatedProducts(product: Product, limit = 4) {
  return products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, limit);
}

export function formatPrice(price: number) {
  if (price === 0) return "Quote on request";
  return `EGP ${price.toLocaleString("en-US")}`;
}
