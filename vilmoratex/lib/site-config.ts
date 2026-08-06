export const siteConfig = {
  name: "VilmoraTex",
  nameAr: "فيلمورا تكس",
  fullName: "VilmoraTex Trading & Industry",
  fullNameAr: "فيلمورا تكس للتجارة والصناعة",
  description: {
    en: "VilmoraTex Trading & Industry is an Egyptian garment manufacturer and wholesale supplier producing fashion apparel and professional uniforms — from summer dresses and abayas to school, hospital, and corporate uniforms — for retail customers, schools, institutions, and OEM/private label partners worldwide.",
    ar: "فيلمورا تكس للتجارة والصناعة مصنّع أزياء ومورّد بالجملة في مصر، ينتج الملابس الجاهزة واليونيفورم المهني — من الفساتين الصيفية والعبايات إلى الزي المدرسي ويونيفورم المستشفيات والشركات — لعملاء التجزئة والمدارس والمؤسسات وشركاء OEM والعلامة الخاصة حول العالم.",
  },
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.vilmoratex.com",
  ogImage: "/assets/banners/og-cover.jpg",
  contact: {
    whatsappDisplay: "+20 110 760 5774",
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "201107605774",
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "Info@vilmoratex.com",
    address: {
      en: "Industrial Zone, Greater Cairo, Egypt",
      ar: "المنطقة الصناعية، القاهرة الكبرى، مصر",
    },
    hours: [
      {
        day: { en: "Saturday – Thursday", ar: "السبت – الخميس" },
        time: { en: "9:00 AM – 6:00 PM", ar: "٩:٠٠ ص – ٦:٠٠ م" },
      },
      { day: { en: "Friday", ar: "الجمعة" }, time: { en: "Closed", ar: "إجازة" } },
    ],
  },
  social: {
    instagram: "https://instagram.com/vilmoratex",
    facebook: "https://facebook.com/vilmoratex",
    tiktok: "https://tiktok.com/@vilmoratex",
    linkedin: "https://linkedin.com/company/vilmoratex",
  },
  payments: {
    active: [
      { en: "Cash Payment", ar: "دفع نقدي" },
      { en: "Cash on Delivery", ar: "الدفع عند الاستلام" },
    ],
    comingSoon: [
      { en: "Bank Transfer", ar: "تحويل بنكي" },
      { en: "Online Payment (Visa/Mastercard)", ar: "دفع إلكتروني (فيزا/ماستركارد)" },
    ],
  },
} as const;

export type NavChild = { key: string; href: string };
export type NavItem = { key: string; href: string; children?: NavChild[] };

export const mainNav: NavItem[] = [
  { key: "home", href: "/" },
  {
    key: "shop",
    href: "/shop",
    children: [
      { key: "allProducts", href: "/shop" },
      { key: "womensFashion", href: "/categories/womens-fashion" },
      { key: "mensFashion", href: "/categories/mens-fashion" },
      { key: "kidsFashion", href: "/categories/kids-fashion" },
      { key: "abayas", href: "/categories/abayas" },
      { key: "schoolUniforms", href: "/categories/school-uniforms" },
      { key: "medicalScrubs", href: "/categories/medical-scrubs" },
      { key: "corporateUniforms", href: "/categories/corporate-uniforms" },
    ],
  },
  { key: "categories", href: "/categories" },
  { key: "collections", href: "/collections" },
  {
    key: "manufacturing",
    href: "/manufacturing",
    children: [
      { key: "manufacturingServices", href: "/manufacturing" },
      { key: "wholesale", href: "/wholesale" },
      { key: "privateLabel", href: "/private-label" },
      { key: "uniformSolutions", href: "/uniforms" },
      { key: "requestQuote", href: "/quote" },
    ],
  },
  { key: "gallery", href: "/gallery" },
  { key: "videoGallery", href: "/video-gallery" },
  { key: "blog", href: "/blog" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
];

export const footerLinks = {
  shop: [
    { key: "allProducts", href: "/shop" },
    { key: "categories", href: "/categories" },
    { key: "collections", href: "/collections" },
    { key: "gallery", href: "/gallery" },
    { key: "cart", href: "/cart" },
  ],
  business: [
    { key: "manufacturingServices", href: "/manufacturing" },
    { key: "wholesale", href: "/wholesale" },
    { key: "privateLabel", href: "/private-label" },
    { key: "uniformSolutions", href: "/uniforms" },
    { key: "requestQuote", href: "/quote" },
  ],
  company: [
    { key: "about", href: "/about" },
    { key: "blog", href: "/blog" },
    { key: "faq", href: "/faq" },
    { key: "contact", href: "/contact" },
  ],
  legal: [
    { labelKey: "privacyPolicy", href: "/privacy-policy" },
    { labelKey: "terms", href: "/terms" },
    { labelKey: "shippingPolicy", href: "/shipping-policy" },
    { labelKey: "returnsPolicy", href: "/returns-policy" },
  ],
};
