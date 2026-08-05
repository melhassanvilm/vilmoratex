export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  coverImage: string;
  date: string;
  author: string;
  readingTime: string;
  tags: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-choose-fabric-for-school-uniforms",
    title: "How to Choose the Right Fabric for School Uniforms in Egypt",
    excerpt:
      "Fabric choice drives most of a school uniform's cost and durability. Here's how we help schools balance budget, comfort, and longevity.",
    coverImage: "https://picsum.photos/seed/vilmora-blog-1/1200/800",
    date: "2026-06-12",
    author: "VilmoraTex Manufacturing Team",
    readingTime: "5 min read",
    tags: ["uniforms", "manufacturing", "fabric"],
    content: [
      "When a school asks us to quote a uniform program, the very first question we ask is about fabric — not color, not price. Fabric weight, weave, and fiber blend determine almost everything else: how the uniform holds up to a full school year of washing, how it breathes in Cairo's summer heat, and ultimately how much it costs per piece.",
      "For everyday shirts and blouses, a cotton-polyester blend in the 170–200 GSM range strikes the best balance between breathability and durability for most primary and preparatory schools. Pure cotton feels softer but wrinkles faster and shrinks more over repeated washes, which matters when a uniform needs to last an entire academic year.",
      "For pinafores, skirts, and trousers, we typically recommend a slightly heavier fabric — often in the 220–260 GSM range — since these pieces see more stress at seams and pleats. Winter and summer variants of the same uniform often use different weights of the same base fabric, which is why our fabric price sheets separate 'winter' and 'summer' weights for items like our biscuit-weave trouser fabric.",
      "Consumption also matters as much as price per meter: a size-13-16 trouser can use 50% more fabric than a size-4-6 trouser, so any accurate quote has to account for consumption by age band, not just a flat per-piece estimate. This is exactly the kind of calculation our manufacturing team runs for every school uniform quote — matching fabric, consumption, and quantity to land on a fair, transparent price per piece.",
      "If you're planning a uniform program and want a fabric-and-quantity based quote, our team can walk you through the trade-offs for your specific budget and durability needs — reach out through our Request a Quote page.",
    ],
  },
  {
    slug: "oem-vs-private-label-manufacturing-explained",
    title: "OEM vs. Private Label Manufacturing: What's the Difference?",
    excerpt:
      "Both let you sell under your own brand — but they're not the same service. Here's how to decide which one fits your business.",
    coverImage: "https://picsum.photos/seed/vilmora-blog-2/1200/800",
    date: "2026-05-03",
    author: "VilmoraTex Manufacturing Team",
    readingTime: "4 min read",
    tags: ["OEM", "private label", "wholesale"],
    content: [
      "We get this question from almost every new wholesale client: what's the actual difference between OEM manufacturing and private label manufacturing? Both result in a finished garment carrying your brand — but the starting point is different.",
      "With OEM (Original Equipment Manufacturing), you bring us your own design, pattern, and specification, and we produce it exactly to your brief — your fabric choices, your measurements, your trims. This is the route for brands that already have a design identity and need a reliable factory partner to execute it at scale.",
      "With private label manufacturing, you start from one of our existing, tested styles — already patterned, sampled, and proven in production — and we simply apply your labels, packaging, and any color or trim customization you want. This route is faster and typically has a lower minimum order quantity, which makes it a strong option for new brands or boutiques testing a category for the first time.",
      "Most of our wholesale clients actually use a mix of both: private label for core, fast-moving styles, and OEM for signature pieces that define their brand identity. Whichever route fits your business, our production team can walk you through minimum order quantities, sampling timelines, and cost breakdowns before you commit.",
    ],
  },
  {
    slug: "5-questions-to-ask-before-a-bulk-uniform-order",
    title: "5 Questions to Ask Before Placing a Bulk Uniform Order",
    excerpt:
      "A bulk order is hard to unwind once it's in production. These are the questions that prevent expensive surprises.",
    coverImage: "https://picsum.photos/seed/vilmora-blog-3/1200/800",
    date: "2026-03-21",
    author: "VilmoraTex Manufacturing Team",
    readingTime: "6 min read",
    tags: ["wholesale", "bulk orders", "manufacturing"],
    content: [
      "Whether you're outfitting a hospital, a hotel, or a school, a bulk uniform order is a significant commitment — and it's much harder to fix a mistake after 500 pieces are already cut than before the first sample is approved. Here are the five questions we recommend every buyer ask before signing off.",
      "1. What's the fabric consumption per size, not just per style? A single 'price per piece' number can hide big differences between your smallest and largest sizes. Ask for a size-by-size fabric consumption breakdown.",
      "2. Is the quoted price per piece inclusive of labor, or fabric only? Fabric and manufacturing (cutting, sewing, trims, finishing) are usually quoted separately, and it's easy to compare two quotes that aren't actually apples-to-apples.",
      "3. What's the minimum order quantity per size, per color? Some factories set MOQs per style; others set them per size/color combination, which changes your total commitment considerably.",
      "4. What does the sampling and approval process look like? A pre-production sample should be approved in writing before bulk cutting begins — this is your last checkpoint before the fabric is committed.",
      "5. What's the realistic lead time, including fabric sourcing? Lead times quoted from 'order confirmation' can look very different from lead times quoted from 'fabric in hand.' Always confirm which one you're getting.",
      "Our team walks every wholesale and institutional client through these five points before we confirm a production schedule — it's the difference between a smooth bulk order and an expensive one.",
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
