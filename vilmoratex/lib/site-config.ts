export const siteConfig = {
  name: "VilmoraTex",
  fullName: "VilmoraTex Trading & Industry",
  description:
    "VilmoraTex Trading & Industry is an Egyptian garment manufacturer and wholesale supplier producing fashion apparel and professional uniforms — from summer dresses and abayas to school, hospital, and corporate uniforms — for retail customers, schools, institutions, and OEM/private label partners worldwide.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.vilmoratex.com",
  ogImage: "/images/og-cover.jpg",
  locale: "en",
  contact: {
    whatsappDisplay: "+20 110 760 5774",
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "201107605774",
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "Info@vilmoratex.com",
    address: "Industrial Zone, Greater Cairo, Egypt",
    hours: [
      { day: "Saturday – Thursday", time: "9:00 AM – 6:00 PM" },
      { day: "Friday", time: "Closed" },
    ],
  },
  social: {
    instagram: "https://instagram.com/vilmoratex",
    facebook: "https://facebook.com/vilmoratex",
    tiktok: "https://tiktok.com/@vilmoratex",
    linkedin: "https://linkedin.com/company/vilmoratex",
  },
  payments: {
    active: ["Cash Payment", "Cash on Delivery"],
    comingSoon: ["Bank Transfer", "Online Payment (Visa/Mastercard)"],
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Shop",
    href: "/shop",
    children: [
      { label: "All Products", href: "/shop", description: "Browse the full VilmoraTex catalog" },
      { label: "Women's Fashion", href: "/categories/womens-fashion" },
      { label: "Men's Fashion", href: "/categories/mens-fashion" },
      { label: "Kids Fashion", href: "/categories/kids-fashion" },
      { label: "Abayas", href: "/categories/abayas" },
      { label: "School Uniforms", href: "/categories/school-uniforms" },
      { label: "Medical Scrubs", href: "/categories/medical-scrubs" },
      { label: "Corporate Uniforms", href: "/categories/corporate-uniforms" },
    ],
  },
  { label: "Categories", href: "/categories" },
  {
    label: "Manufacturing",
    href: "/manufacturing",
    children: [
      { label: "Manufacturing Services", href: "/manufacturing" },
      { label: "Wholesale", href: "/wholesale" },
      { label: "Private Label (OEM)", href: "/private-label" },
      { label: "Uniform Solutions", href: "/uniforms" },
      { label: "Request a Quote", href: "/quote" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  shop: [
    { label: "All Products", href: "/shop" },
    { label: "Categories", href: "/categories" },
    { label: "Gallery", href: "/gallery" },
    { label: "Cart", href: "/cart" },
  ],
  business: [
    { label: "Manufacturing Services", href: "/manufacturing" },
    { label: "Wholesale", href: "/wholesale" },
    { label: "Private Label (OEM)", href: "/private-label" },
    { label: "Uniform Solutions", href: "/uniforms" },
    { label: "Request a Quote", href: "/quote" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "FAQs", href: "/faq" },
    { label: "Contact Us", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};
