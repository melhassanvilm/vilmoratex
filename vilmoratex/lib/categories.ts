export type Category = {
  slug: string;
  name: string;
  group: "women" | "men" | "kids" | "uniforms" | "accessories";
  description: string;
  longDescription: string;
  image: string;
};

export const categories: Category[] = [
  {
    slug: "womens-fashion",
    name: "Women's Fashion",
    group: "women",
    description: "Elegant everyday and occasion wear for women.",
    longDescription:
      "From breezy summer dresses to tailored evening pieces, our women's collection blends comfortable, breathable fabrics with a refined silhouette suited to Egyptian summers and beyond. Every style is manufactured in-house, so wholesale buyers can also order any piece in bulk with custom colorways.",
    image: "https://picsum.photos/seed/vilmora-women-cover/1200/1400",
  },
  {
    slug: "summer-dresses",
    name: "Summer Dresses",
    group: "women",
    description: "Lightweight, breathable dresses for warm days.",
    longDescription:
      "Cut from airy cotton-blend and linen-look fabrics, our summer dress line is designed to stay cool and hold its shape wash after wash — ideal for retail racks and resort/hospitality uniform programs alike.",
    image: "https://picsum.photos/seed/vilmora-summer-dresses/1200/1400",
  },
  {
    slug: "casual-dresses",
    name: "Casual Dresses",
    group: "women",
    description: "Everyday dresses built for comfort and movement.",
    longDescription:
      "Relaxed fits, easy-care fabrics, and versatile prints make this line a staple for daily wear — a favorite among our wholesale and boutique retail partners.",
    image: "https://picsum.photos/seed/vilmora-casual-dresses/1200/1400",
  },
  {
    slug: "evening-dresses",
    name: "Evening Dresses",
    group: "women",
    description: "Statement pieces for special occasions.",
    longDescription:
      "Structured tailoring, richer fabrics, and refined detailing define our evening line, produced in small-batch runs or made-to-order for boutiques and private label partners.",
    image: "https://picsum.photos/seed/vilmora-evening-dresses/1200/1400",
  },
  {
    slug: "abayas",
    name: "Abayas",
    group: "women",
    description: "Modest, flowing abayas in premium fabrics.",
    longDescription:
      "Our abaya line is manufactured with attention to drape, opacity, and finish — available in classic black crepe as well as seasonal colorways, with custom embroidery available for wholesale orders.",
    image: "https://picsum.photos/seed/vilmora-abayas/1200/1400",
  },
  {
    slug: "mens-fashion",
    name: "Men's Fashion",
    group: "men",
    description: "Modern essentials and smart-casual pieces for men.",
    longDescription:
      "Clean lines, durable stitching, and fabrics chosen for hot climates make our men's line a reliable choice for retail and corporate gifting programs.",
    image: "https://picsum.photos/seed/vilmora-men-cover/1200/1400",
  },
  {
    slug: "kids-fashion",
    name: "Kids Fashion",
    group: "kids",
    description: "Durable, playful clothing built for active kids.",
    longDescription:
      "Reinforced seams, soft finishes, and easy-care fabrics make our kidswear line practical for parents and dependable for schools ordering in bulk.",
    image: "https://picsum.photos/seed/vilmora-kids-cover/1200/1400",
  },
  {
    slug: "pajamas",
    name: "Pajamas",
    group: "kids",
    description: "Soft, breathable sleepwear for the whole family.",
    longDescription:
      "Brushed cotton and jersey pajama sets designed for comfort, offered in adult and kids sizing and available for private label branding.",
    image: "https://picsum.photos/seed/vilmora-pajamas/1200/1400",
  },
  {
    slug: "school-uniforms",
    name: "School Uniforms",
    group: "uniforms",
    description: "Durable, comfortable uniforms for grades KG–12.",
    longDescription:
      "VilmoraTex manufactures full school uniform programs — shirts, pinafores, trousers, and skirts — sized from age 4 to 16, with fabric and consumption specifications tailored to each school's identity and budget. Bulk pricing scales from 100 to 1,000+ pieces per style.",
    image: "https://picsum.photos/seed/vilmora-school-uniforms/1200/1400",
  },
  {
    slug: "hospital-uniforms",
    name: "Hospital Uniforms",
    group: "uniforms",
    description: "Professional uniforms for clinical and support staff.",
    longDescription:
      "Built for long shifts and frequent washing, our hospital uniform line covers nursing staff, administration, and support teams, with fabric options selected for durability and easy-care performance.",
    image: "https://picsum.photos/seed/vilmora-hospital-uniforms/1200/1400",
  },
  {
    slug: "medical-scrubs",
    name: "Medical Scrubs",
    group: "uniforms",
    description: "Functional, breathable scrubs for medical teams.",
    longDescription:
      "Our scrub sets are cut for freedom of movement with practical pocket layouts, offered in solid clinic colors and available with embroidered department branding for bulk hospital orders.",
    image: "https://picsum.photos/seed/vilmora-medical-scrubs/1200/1400",
  },
  {
    slug: "engineering-uniforms",
    name: "Engineering Uniforms",
    group: "uniforms",
    description: "Rugged workwear for engineering teams and site staff.",
    longDescription:
      "Reinforced stitching, utility pockets, and hard-wearing fabrics make this line suited to engineering firms and site supervisors who need uniforms that last a full project cycle.",
    image: "https://picsum.photos/seed/vilmora-engineering-uniforms/1200/1400",
  },
  {
    slug: "industrial-uniforms",
    name: "Factory & Industrial Uniforms",
    group: "uniforms",
    description: "Heavy-duty uniforms built for factory floors.",
    longDescription:
      "Designed for demanding industrial environments, this line prioritizes abrasion resistance, visibility options, and comfort across full-shift wear, with labor and security uniform variants available.",
    image: "https://picsum.photos/seed/vilmora-industrial-uniforms/1200/1400",
  },
  {
    slug: "restaurant-uniforms",
    name: "Restaurant Uniforms",
    group: "uniforms",
    description: "Sharp, practical uniforms for front and back of house.",
    longDescription:
      "From chef wear to server aprons and front-of-house shirts, we produce restaurant uniform sets that hold color and shape through commercial laundering.",
    image: "https://picsum.photos/seed/vilmora-restaurant-uniforms/1200/1400",
  },
  {
    slug: "hotel-uniforms",
    name: "Hotel Uniforms",
    group: "uniforms",
    description: "Polished uniforms for hospitality teams.",
    longDescription:
      "Housekeeping, concierge, and front-desk uniform sets tailored to reflect your hotel's brand standards, with custom embroidery and fabric options available.",
    image: "https://picsum.photos/seed/vilmora-hotel-uniforms/1200/1400",
  },
  {
    slug: "corporate-uniforms",
    name: "Corporate Uniforms",
    group: "uniforms",
    description: "Bank, retail, and office uniform programs.",
    longDescription:
      "Structured shirts, blazers, and coordinated sets for banks, retail chains, and corporate teams who need a consistent, professional look across every branch.",
    image: "https://picsum.photos/seed/vilmora-corporate-uniforms/1200/1400",
  },
  {
    slug: "accessories",
    name: "Accessories",
    group: "accessories",
    description: "Coming soon.",
    longDescription:
      "We are preparing a curated accessories line to complement our apparel and uniform collections. Check back soon, or contact us to discuss custom accessory manufacturing.",
    image: "https://picsum.photos/seed/vilmora-accessories/1200/1400",
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
