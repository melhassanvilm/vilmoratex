import type { LocalizedText } from "./categories";
import type { Locale } from "./i18n-config";

export type ProductColor = { name: LocalizedText; hex: string };

export type Product = {
  slug: string;
  name: LocalizedText;
  category: string;
  gender: "women" | "men" | "kids" | "unisex";
  price: number;
  compareAtPrice?: number;
  currency: "EGP";
  images: string[];
  description: LocalizedText;
  longDescription: LocalizedText;
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
    name: { en: "Linen Breeze Summer Dress", ar: "فستان صيفي لينين بريز" },
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
    description: {
      en: "Airy linen-blend dress with an A-line cut for hot-weather comfort.",
      ar: "فستان كتان مخلوط خفيف بقصة A مريحة للطقس الحار.",
    },
    longDescription: {
      en: "Cut from a breathable linen-cotton blend, the Linen Breeze dress is built for the Egyptian summer — lightweight, quick-drying, and cut in a flattering A-line silhouette. Finished with mother-of-pearl buttons and a self-tie waist.",
      ar: "مقصوص من خليط كتان وقطن يسمح بمرور الهواء، فستان لينين بريز مصمم لصيف مصر — خفيف، سريع الجفاف، وبقصة A أنيقة. مُشطّب بأزرار الصدف وحزام خصر ذاتي الربط.",
    },
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: { en: "Sand", ar: "رملي" }, hex: "#D8C7A8" },
      { name: { en: "Sage", ar: "أخضر سيج" }, hex: "#9CAF88" },
      { name: { en: "Ivory", ar: "عاجي" }, hex: "#F6F1E8" },
    ],
    availability: "in-stock",
    tags: ["featured", "summer-collection", "new-arrival", "womens-collection"],
    rating: 4.7,
    reviewCount: 38,
  },
  {
    slug: "sunset-wrap-summer-dress",
    name: { en: "Sunset Wrap Dress", ar: "فستان صيفي راب صانسيت" },
    category: "summer-dresses",
    gender: "women",
    price: 950,
    currency: "EGP",
    images: [
      "https://picsum.photos/seed/vilmora-p-summer2-a/900/1200",
      "https://picsum.photos/seed/vilmora-p-summer2-b/900/1200",
    ],
    description: {
      en: "Flowing wrap-style summer dress with adjustable tie waist.",
      ar: "فستان صيفي بقصة راب انسيابية وحزام خصر قابل للتعديل.",
    },
    longDescription: {
      en: "A wrap-front dress in a soft viscose blend, designed to flatter every body shape with an adjustable waist tie and a fluid, breathable drape.",
      ar: "فستان بقصة راب أمامية من خليط فيسكوز ناعم، مصمم يناسب كل أشكال الجسم بحزام خصر قابل للتعديل وانسدال مريح يسمح بمرور الهواء.",
    },
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: { en: "Terracotta", ar: "طوبي" }, hex: "#C1653A" },
      { name: { en: "Navy", ar: "كحلي" }, hex: "#1F2A44" },
    ],
    availability: "in-stock",
    tags: ["summer-collection", "womens-collection"],
    rating: 4.5,
    reviewCount: 21,
  },
  {
    slug: "everyday-jersey-casual-dress",
    name: { en: "Everyday Jersey Casual Dress", ar: "فستان كاجوال جيرسيه يومي" },
    category: "casual-dresses",
    gender: "women",
    price: 690,
    currency: "EGP",
    images: [
      "https://picsum.photos/seed/vilmora-p-casual1-a/900/1200",
      "https://picsum.photos/seed/vilmora-p-casual1-b/900/1200",
    ],
    description: {
      en: "Soft jersey dress built for all-day comfort.",
      ar: "فستان جيرسيه ناعم مريح طوال اليوم.",
    },
    longDescription: {
      en: "A relaxed-fit jersey dress with four-way stretch, designed for everyday errands, work-from-home days, and easy layering.",
      ar: "فستان جيرسيه بقصة مريحة ومرونة في كل الاتجاهات، مصمم للاستخدام اليومي وأيام العمل من المنزل وسهولة اللبس فوق بعض.",
    },
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: { en: "Charcoal", ar: "كحلي غامق" }, hex: "#3A3A3A" },
      { name: { en: "Dusty Rose", ar: "وردي ترابي" }, hex: "#C08497" },
    ],
    availability: "in-stock",
    tags: ["bestseller", "womens-collection"],
    rating: 4.8,
    reviewCount: 64,
  },
  {
    slug: "midnight-satin-evening-gown",
    name: { en: "Midnight Satin Evening Gown", ar: "فستان سهرة ساتان ميدنايت" },
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
    description: {
      en: "Floor-length satin gown with a fitted bodice.",
      ar: "فستان سهرة ساتان طويل بقصة مفصّلة عند الصدر.",
    },
    longDescription: {
      en: "A show-stopping floor-length gown in liquid satin, with a fitted bodice, subtle side slit, and a clean back detail — made to order in our atelier for weddings, galas, and formal events.",
      ar: "فستان سهرة طويل مبهر من الساتان اللامع، بقصة مفصّلة عند الصدر وفتحة جانبية خفيفة وتفصيلة ظهر نظيفة — يُصنّع حسب الطلب في أتيليه فيلمورا تكس للأفراح والحفلات الرسمية.",
    },
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: { en: "Midnight Blue", ar: "كحلي ميدنايت" }, hex: "#101A33" },
      { name: { en: "Wine", ar: "نبيتي" }, hex: "#5C1A2B" },
      { name: { en: "Black", ar: "أسود" }, hex: "#0B0B0B" },
    ],
    availability: "made-to-order",
    tags: ["featured", "new-arrival"],
    rating: 4.9,
    reviewCount: 17,
  },
  {
    slug: "classic-crepe-abaya",
    name: { en: "Classic Crepe Abaya", ar: "عباية كريب كلاسيك" },
    category: "abayas",
    gender: "women",
    price: 1250,
    currency: "EGP",
    images: [
      "https://picsum.photos/seed/vilmora-p-abaya1-a/900/1200",
      "https://picsum.photos/seed/vilmora-p-abaya1-b/900/1200",
    ],
    description: {
      en: "Timeless crepe abaya with a clean, structured drape.",
      ar: "عباية كريب خالدة بانسدال نظيف ومنسّق.",
    },
    longDescription: {
      en: "Our signature abaya in premium Korean crepe, chosen for its opacity, weight, and elegant drape. Available in classic black plus seasonal shades, with optional hand embroidery for wholesale orders.",
      ar: "عبايتنا المميزة من الكريب الكوري الفاخر، مختارة لكثافتها ووزنها وانسدالها الأنيق. متوفرة بالأسود الكلاسيكي وألوان موسمية، مع تطريز يدوي اختياري لطلبات الجملة.",
    },
    sizes: ["52", "54", "56", "58", "60"],
    colors: [
      { name: { en: "Black", ar: "أسود" }, hex: "#0B0B0B" },
      { name: { en: "Mocha", ar: "موكا" }, hex: "#5B4636" },
    ],
    availability: "in-stock",
    tags: ["bestseller", "womens-collection"],
    rating: 4.9,
    reviewCount: 52,
  },
  {
    slug: "heritage-embroidered-abaya",
    name: { en: "Heritage Embroidered Abaya", ar: "عباية مطرزة هيريتدج" },
    category: "abayas",
    gender: "women",
    price: 1690,
    currency: "EGP",
    images: [
      "https://picsum.photos/seed/vilmora-p-abaya2-a/900/1200",
      "https://picsum.photos/seed/vilmora-p-abaya2-b/900/1200",
    ],
    description: {
      en: "Abaya with hand-finished embroidery at the cuffs.",
      ar: "عباية بتطريز يدوي عند الأكمام.",
    },
    longDescription: {
      en: "A refined take on the classic abaya, finished with hand-guided embroidery along the cuffs and front panel. Custom embroidery patterns available for private label orders of 50 pieces or more.",
      ar: "لمسة راقية على العباية الكلاسيكية، مُشطّبة بتطريز يدوي على الأكمام واللوحة الأمامية. تصاميم تطريز مخصصة متاحة لطلبات العلامة الخاصة من 50 قطعة فأكثر.",
    },
    sizes: ["52", "54", "56", "58"],
    colors: [{ name: { en: "Black", ar: "أسود" }, hex: "#0B0B0B" }],
    availability: "made-to-order",
    minOrderQty: 20,
    tags: ["new-arrival"],
    rating: 4.6,
    reviewCount: 12,
  },
  {
    slug: "oxford-tailored-shirt",
    name: { en: "Oxford Tailored Shirt", ar: "قميص أكسفورد مفصّل" },
    category: "mens-fashion",
    gender: "men",
    price: 780,
    currency: "EGP",
    images: [
      "https://picsum.photos/seed/vilmora-p-men1-a/900/1200",
      "https://picsum.photos/seed/vilmora-p-men1-b/900/1200",
    ],
    description: {
      en: "Breathable Oxford cotton shirt with a tailored fit.",
      ar: "قميص قطن أكسفورد مريح بقصة مفصّلة.",
    },
    longDescription: {
      en: "A wardrobe staple cut from breathable Oxford cotton with a tailored fit, mother-of-pearl buttons, and reinforced collar stays — equally suited to the office or weekend wear.",
      ar: "قطعة أساسية من قطن أكسفورد يسمح بمرور الهواء، بقصة مفصّلة وأزرار صدف وياقة مقوّاة — مناسب للمكتب أو للخروج في الويكند.",
    },
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: { en: "White", ar: "أبيض" }, hex: "#F7F7F7" },
      { name: { en: "Sky Blue", ar: "أزرق سماوي" }, hex: "#A9C6E8" },
      { name: { en: "Charcoal", ar: "كحلي غامق" }, hex: "#3A3A3A" },
    ],
    availability: "in-stock",
    tags: ["mens-collection", "bestseller"],
    rating: 4.6,
    reviewCount: 44,
  },
  {
    slug: "urban-comfort-chino",
    name: { en: "Urban Comfort Chino", ar: "بنطلون شينو أوربان كومفورت" },
    category: "mens-fashion",
    gender: "men",
    price: 850,
    currency: "EGP",
    images: [
      "https://picsum.photos/seed/vilmora-p-men2-a/900/1200",
      "https://picsum.photos/seed/vilmora-p-men2-b/900/1200",
    ],
    description: {
      en: "Slim-tapered chino trousers with a soft-touch finish.",
      ar: "بنطلون شينو ضيق بتشطيب ناعم الملمس.",
    },
    longDescription: {
      en: "Cut from a stretch cotton twill with a soft-touch finish, these slim-tapered chinos move with you through a full workday and beyond.",
      ar: "مقصوص من قطن توِل مطاطي بتشطيب ناعم، البنطلون ده بيتحرك معاك طول يوم شغلك وأكتر.",
    },
    sizes: ["30", "32", "34", "36", "38", "40"],
    colors: [
      { name: { en: "Khaki", ar: "كاكي" }, hex: "#C3B091" },
      { name: { en: "Navy", ar: "كحلي" }, hex: "#1F2A44" },
      { name: { en: "Black", ar: "أسود" }, hex: "#0B0B0B" },
    ],
    availability: "in-stock",
    tags: ["mens-collection", "new-arrival"],
    rating: 4.4,
    reviewCount: 19,
  },
  {
    slug: "little-explorer-playset",
    name: { en: "Little Explorer Playset", ar: "طقم لعب ليتل إكسبلورر" },
    category: "kids-fashion",
    gender: "kids",
    price: 460,
    currency: "EGP",
    images: [
      "https://picsum.photos/seed/vilmora-p-kids1-a/900/1200",
      "https://picsum.photos/seed/vilmora-p-kids1-b/900/1200",
    ],
    description: {
      en: "Durable two-piece playset for active kids.",
      ar: "طقم قطعتين متين للأطفال النشيطين.",
    },
    longDescription: {
      en: "A reinforced-knee, easy-care two-piece set designed for kids on the move — soft jersey top paired with durable twill shorts.",
      ar: "طقم قطعتين بركبة مقوّاة وسهل العناية، مصمم للأطفال الحركيين — بلوزة جيرسيه ناعمة مع شورت توِل متين.",
    },
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    colors: [
      { name: { en: "Sky Blue", ar: "أزرق سماوي" }, hex: "#A9C6E8" },
      { name: { en: "Coral", ar: "مرجاني" }, hex: "#E17B62" },
    ],
    availability: "in-stock",
    tags: ["kids-collection", "bestseller"],
    rating: 4.7,
    reviewCount: 28,
  },
  {
    slug: "sunny-days-kids-dress",
    name: { en: "Sunny Days Kids Dress", ar: "فستان أطفال صني ديز" },
    category: "kids-fashion",
    gender: "kids",
    price: 420,
    currency: "EGP",
    images: [
      "https://picsum.photos/seed/vilmora-p-kids2-a/900/1200",
      "https://picsum.photos/seed/vilmora-p-kids2-b/900/1200",
    ],
    description: {
      en: "Twirl-friendly summer dress for girls.",
      ar: "فستان صيفي للبنات بتنورة واسعة للف والدوران.",
    },
    longDescription: {
      en: "A soft cotton-blend dress with a twirl-friendly skirt and covered-elastic waist for all-day comfort — a favorite for birthdays, outings, and everyday summer wear.",
      ar: "فستان قطن مخلوط ناعم بتنورة واسعة وحزام خصر مطاطي مغطى للراحة طوال اليوم — مفضّل لأعياد الميلاد والخروجات ولبس الصيف اليومي.",
    },
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
    colors: [
      { name: { en: "Lemon", ar: "ليموني" }, hex: "#F4D35E" },
      { name: { en: "Blush", ar: "وردي فاتح" }, hex: "#F2C6C2" },
    ],
    availability: "in-stock",
    tags: ["kids-collection", "summer-collection", "new-arrival"],
    rating: 4.8,
    reviewCount: 15,
  },
  {
    slug: "cloudsoft-pajama-set",
    name: { en: "CloudSoft Pajama Set", ar: "طقم بيجامة كلاود سوفت" },
    category: "pajamas",
    gender: "unisex",
    price: 520,
    currency: "EGP",
    images: [
      "https://picsum.photos/seed/vilmora-p-pajama1-a/900/1200",
      "https://picsum.photos/seed/vilmora-p-pajama1-b/900/1200",
    ],
    description: {
      en: "Brushed cotton pajama set for year-round comfort.",
      ar: "طقم بيجامة قطن مصنفر للراحة طوال العام.",
    },
    longDescription: {
      en: "A brushed-cotton pajama set with a relaxed fit, covered elastic waistband, and breathable knit — offered in adult and kids sizing and available for private-label branding.",
      ar: "طقم بيجامة من القطن المصنفر بقصة مريحة وحزام خصر مطاطي مغطى وخامة تسمح بمرور الهواء — متوفر بمقاسات الكبار والأطفال ومتاح للعلامة الخاصة.",
    },
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: { en: "Heather Grey", ar: "رمادي هيذر" }, hex: "#B7B7B7" },
      { name: { en: "Powder Blue", ar: "أزرق فاتح" }, hex: "#C9DCE8" },
    ],
    availability: "in-stock",
    tags: ["new-arrival"],
    rating: 4.5,
    reviewCount: 9,
  },
  {
    slug: "primary-pinafore-uniform-set",
    name: { en: "Primary Pinafore Uniform Set", ar: "طقم مريلة الزي المدرسي الابتدائي" },
    category: "school-uniforms",
    gender: "kids",
    price: 0,
    currency: "EGP",
    images: [
      "https://picsum.photos/seed/vilmora-p-school1-a/900/1200",
      "https://picsum.photos/seed/vilmora-p-school1-b/900/1200",
    ],
    description: {
      en: "Pinafore + long-sleeve shirt set for primary grades, priced per school specification.",
      ar: "طقم مريلة وقميص كم طويل للمرحلة الابتدائية، السعر حسب مواصفات المدرسة.",
    },
    longDescription: {
      en: "Our most-ordered school uniform set: a pinafore dress paired with a long-sleeve shirt, offered from age 4 to 16. Fabric, color, and trim are matched to each school's identity, with fabric consumption calculated per size band. Contact us for a fabric-and-quantity-based quote.",
      ar: "أكتر طقم زي مدرسي بيتم طلبه عندنا: مريلة مع قميص كم طويل، متوفر من سن 4 لـ16 سنة. القماش واللون والتفاصيل بتتطابق مع هوية كل مدرسة، مع حساب استهلاك القماش لكل فئة عمرية. تواصل معنا لعرض سعر حسب القماش والكمية.",
    },
    sizes: ["4-6Y", "7-9Y", "10-12Y", "13-16Y"],
    colors: [{ name: { en: "Made to School Spec", ar: "حسب مواصفات المدرسة" }, hex: "#4A1942" }],
    availability: "made-to-order",
    minOrderQty: 100,
    tags: ["uniform-solutions"],
    rating: 4.9,
    reviewCount: 31,
  },
  {
    slug: "classic-scrub-set",
    name: { en: "Classic Scrub Set", ar: "طقم سكراب كلاسيك" },
    category: "medical-scrubs",
    gender: "unisex",
    price: 480,
    currency: "EGP",
    images: [
      "https://picsum.photos/seed/vilmora-p-scrub1-a/900/1200",
      "https://picsum.photos/seed/vilmora-p-scrub1-b/900/1200",
    ],
    description: {
      en: "V-neck top and drawstring trouser scrub set.",
      ar: "طقم سكراب بلوزة رقبة V وبنطلون بحزام سحب.",
    },
    longDescription: {
      en: "A breathable poly-cotton scrub set with a V-neck top, chest and hip pockets, and a drawstring-and-elastic trouser waist — built for long clinical shifts and frequent washing.",
      ar: "طقم سكراب من قطن بوليستر يسمح بمرور الهواء، ببلوزة رقبة V وجيوب صدر ووسط، وبنطلون بحزام سحب ومطاط — مصمم للورديات الطبية الطويلة والغسيل المتكرر.",
    },
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: { en: "Ceil Blue", ar: "أزرق سيل" }, hex: "#7FA6C9" },
      { name: { en: "Surgical Green", ar: "أخضر جراحي" }, hex: "#5B8266" },
      { name: { en: "Navy", ar: "كحلي" }, hex: "#1F2A44" },
    ],
    availability: "in-stock",
    minOrderQty: 20,
    tags: ["uniform-solutions", "bestseller"],
    rating: 4.7,
    reviewCount: 40,
  },
  {
    slug: "engineer-cargo-workwear-set",
    name: { en: "Engineer Cargo Workwear Set", ar: "طقم عمل هندسي كارجو" },
    category: "engineering-uniforms",
    gender: "unisex",
    price: 690,
    currency: "EGP",
    images: [
      "https://picsum.photos/seed/vilmora-p-eng1-a/900/1200",
      "https://picsum.photos/seed/vilmora-p-eng1-b/900/1200",
    ],
    description: {
      en: "Reinforced work shirt and cargo trouser set for site engineers.",
      ar: "طقم قميص عمل وبنطلون كارجو مقوّى لمهندسي المواقع.",
    },
    longDescription: {
      en: "Built for site conditions: a reinforced-stitch shirt and cargo trouser set with multiple utility pockets, offered in ripstop and twill fabric options with company logo embroidery.",
      ar: "مصمم لظروف الموقع: طقم قميص وبنطلون كارجو بحياكة مقوّاة وجيوب عملية متعددة، متوفر بخيارات قماش ريبستوب وتوِل مع تطريز شعار الشركة.",
    },
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: { en: "Navy", ar: "كحلي" }, hex: "#1F2A44" },
      { name: { en: "Khaki", ar: "كاكي" }, hex: "#C3B091" },
    ],
    availability: "made-to-order",
    minOrderQty: 30,
    tags: ["uniform-solutions"],
    rating: 4.6,
    reviewCount: 11,
  },
  {
    slug: "grand-hotel-concierge-blazer-set",
    name: { en: "Grand Hotel Concierge Blazer Set", ar: "طقم بليزر كونسيرج جراند هوتيل" },
    category: "hotel-uniforms",
    gender: "unisex",
    price: 1450,
    currency: "EGP",
    images: [
      "https://picsum.photos/seed/vilmora-p-hotel1-a/900/1200",
      "https://picsum.photos/seed/vilmora-p-hotel1-b/900/1200",
    ],
    description: {
      en: "Structured blazer and trouser set for front-desk and concierge teams.",
      ar: "طقم بليزر وبنطلون منسّق لفرق الاستقبال والكونسيرج.",
    },
    longDescription: {
      en: "A tailored blazer and trouser set finished to hospitality standards, with custom lapel piping and embroidered branding available for full-property uniform programs.",
      ar: "طقم بليزر وبنطلون مفصّل بمعايير الضيافة، مع حواف ياقة مخصصة وتطريز علامة تجارية متاح لبرامج يونيفورم الفندق بالكامل.",
    },
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: { en: "Charcoal", ar: "كحلي غامق" }, hex: "#3A3A3A" },
      { name: { en: "Bordeaux", ar: "بوردو" }, hex: "#6B2737" },
    ],
    availability: "made-to-order",
    minOrderQty: 15,
    tags: ["uniform-solutions"],
    rating: 4.8,
    reviewCount: 8,
  },
  {
    slug: "brasserie-chef-apron-set",
    name: { en: "Brasserie Chef & Server Apron Set", ar: "طقم مريلة شيف وسيرفر براسيري" },
    category: "restaurant-uniforms",
    gender: "unisex",
    price: 380,
    currency: "EGP",
    images: [
      "https://picsum.photos/seed/vilmora-p-rest1-a/900/1200",
      "https://picsum.photos/seed/vilmora-p-rest1-b/900/1200",
    ],
    description: {
      en: "Chef coat and server apron set in stain-resistant fabric.",
      ar: "طقم روب شيف ومريلة سيرفر بقماش مقاوم للبقع.",
    },
    longDescription: {
      en: "A durable, stain-resistant fabric chef coat paired with an adjustable server apron, designed to hold up through commercial kitchen laundering cycles.",
      ar: "روب شيف متين من قماش مقاوم للبقع مع مريلة سيرفر قابلة للتعديل، مصممة تتحمل دورات غسيل المطابخ التجارية.",
    },
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: { en: "White", ar: "أبيض" }, hex: "#F7F7F7" },
      { name: { en: "Black", ar: "أسود" }, hex: "#0B0B0B" },
    ],
    availability: "in-stock",
    minOrderQty: 20,
    tags: ["uniform-solutions"],
    rating: 4.5,
    reviewCount: 14,
  },
  {
    slug: "teller-corporate-shirt-set",
    name: { en: "Teller Corporate Shirt Set", ar: "طقم قميص موظف بنك مؤسسي" },
    category: "corporate-uniforms",
    gender: "unisex",
    price: 620,
    currency: "EGP",
    images: [
      "https://picsum.photos/seed/vilmora-p-corp1-a/900/1200",
      "https://picsum.photos/seed/vilmora-p-corp1-b/900/1200",
    ],
    description: {
      en: "Structured shirt set for bank and retail branch teams.",
      ar: "طقم قميص منسّق لفرق فروع البنوك والمحلات.",
    },
    longDescription: {
      en: "A crisp, easy-iron shirt cut for a full day on the branch floor, offered with embroidered logo placement and coordinated scarf/tie accessories for full corporate uniform programs.",
      ar: "قميص أنيق سهل الكي مقصوص ليوم كامل في الفرع، متوفر بتطريز الشعار وإكسسوارات إيشارب/كرافتة منسقة لبرامج يونيفورم الشركات الكاملة.",
    },
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: { en: "White", ar: "أبيض" }, hex: "#F7F7F7" },
      { name: { en: "Light Blue", ar: "أزرق فاتح" }, hex: "#A9C6E8" },
    ],
    availability: "made-to-order",
    minOrderQty: 25,
    tags: ["uniform-solutions"],
    rating: 4.6,
    reviewCount: 10,
  },
  {
    slug: "site-safety-industrial-coverall",
    name: { en: "Site Safety Industrial Coverall", ar: "أفرول سلامة صناعي" },
    category: "industrial-uniforms",
    gender: "unisex",
    price: 540,
    currency: "EGP",
    images: [
      "https://picsum.photos/seed/vilmora-p-ind1-a/900/1200",
      "https://picsum.photos/seed/vilmora-p-ind1-b/900/1200",
    ],
    description: {
      en: "Heavy-duty coverall with reflective safety trim.",
      ar: "أفرول شديد التحمل بشرائط سلامة عاكسة.",
    },
    longDescription: {
      en: "A single-piece coverall cut from abrasion-resistant twill with reflective safety trim and reinforced knees and elbows — built for factory floors and industrial sites.",
      ar: "أفرول قطعة واحدة من قماش توِل مقاوم للاحتكاك بشرائط سلامة عاكسة وركب وأكواع مقوّاة — مصمم لأرضيات المصانع والمواقع الصناعية.",
    },
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    colors: [
      { name: { en: "Safety Orange", ar: "برتقالي سلامة" }, hex: "#E2711D" },
      { name: { en: "Navy", ar: "كحلي" }, hex: "#1F2A44" },
    ],
    availability: "made-to-order",
    minOrderQty: 30,
    tags: ["uniform-solutions"],
    rating: 4.4,
    reviewCount: 7,
  },
  {
    slug: "ward-comfort-hospital-set",
    name: { en: "Ward Comfort Hospital Uniform Set", ar: "طقم يونيفورم مستشفى وارد كومفورت" },
    category: "hospital-uniforms",
    gender: "unisex",
    price: 450,
    currency: "EGP",
    images: [
      "https://picsum.photos/seed/vilmora-p-hosp1-a/900/1200",
      "https://picsum.photos/seed/vilmora-p-hosp1-b/900/1200",
    ],
    description: {
      en: "Easy-care uniform set for nursing and support staff.",
      ar: "طقم يونيفورم سهل العناية لطاقم التمريض والدعم.",
    },
    longDescription: {
      en: "Designed for long hospital shifts, this uniform set uses an easy-care poly-cotton blend that resists shrinking and holds color through frequent commercial washing.",
      ar: "مصمم للورديات الطويلة في المستشفى، الطقم ده بيستخدم خليط قطن بوليستر سهل العناية بيقاوم الانكماش ويحافظ على اللون مع الغسيل التجاري المتكرر.",
    },
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: { en: "White", ar: "أبيض" }, hex: "#F7F7F7" },
      { name: { en: "Ceil Blue", ar: "أزرق سيل" }, hex: "#7FA6C9" },
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

export function formatPrice(price: number, lang: Locale) {
  if (price === 0) return lang === "ar" ? "السعر عند الطلب" : "Quote on request";
  const formatted = price.toLocaleString(lang === "ar" ? "ar-EG" : "en-US");
  return lang === "ar" ? `${formatted} ج.م` : `EGP ${formatted}`;
}
