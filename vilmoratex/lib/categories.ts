export type LocalizedText = { en: string; ar: string };

export type Category = {
  slug: string;
  name: LocalizedText;
  group: "women" | "men" | "kids" | "uniforms" | "accessories";
  description: LocalizedText;
  longDescription: LocalizedText;
  image: string;
};

export const categories: Category[] = [
  {
    slug: "womens-fashion",
    name: { en: "Women's Fashion", ar: "أزياء حريمي" },
    group: "women",
    description: {
      en: "Elegant everyday and occasion wear for women.",
      ar: "أزياء أنيقة للاستخدام اليومي والمناسبات.",
    },
    longDescription: {
      en: "From breezy summer dresses to tailored evening pieces, our women's collection blends comfortable, breathable fabrics with a refined silhouette suited to Egyptian summers and beyond. Every style is manufactured in-house, so wholesale buyers can also order any piece in bulk with custom colorways.",
      ar: "من الفساتين الصيفية الخفيفة إلى القطع السهرة المفصّلة، مجموعتنا الحريمي بتجمع بين الأقمشة المريحة اللي بتسمح بمرور الهواء وقصّة أنيقة تناسب صيف مصر. كل موديل بيتصنّع داخل مصنعنا، فمشتري الجملة يقدروا يطلبوا أي قطعة بكميات كبيرة وألوان مخصصة.",
    },
    image: "https://picsum.photos/seed/vilmora-women-cover/1200/1400",
  },
  {
    slug: "summer-dresses",
    name: { en: "Summer Dresses", ar: "فساتين صيفية" },
    group: "women",
    description: {
      en: "Lightweight, breathable dresses for warm days.",
      ar: "فساتين خفيفة تسمح بمرور الهواء للأيام الحارة.",
    },
    longDescription: {
      en: "Cut from airy cotton-blend and linen-look fabrics, our summer dress line is designed to stay cool and hold its shape wash after wash — ideal for retail racks and resort/hospitality uniform programs alike.",
      ar: "مقصوصة من أقمشة قطنية مخلوطة وأقمشة بمظهر الكتان، خط الفساتين الصيفية عندنا مصمم عشان يفضل بارد ومحتفظ بشكله بعد كل غسلة — مثالي لمعارض التجزئة وبرامج يونيفورم المنتجعات والفنادق.",
    },
    image: "https://picsum.photos/seed/vilmora-summer-dresses/1200/1400",
  },
  {
    slug: "casual-dresses",
    name: { en: "Casual Dresses", ar: "فساتين كاجوال" },
    group: "women",
    description: {
      en: "Everyday dresses built for comfort and movement.",
      ar: "فساتين يومية مصممة للراحة وسهولة الحركة.",
    },
    longDescription: {
      en: "Relaxed fits, easy-care fabrics, and versatile prints make this line a staple for daily wear — a favorite among our wholesale and boutique retail partners.",
      ar: "قصّات مريحة، أقمشة سهلة العناية، وطبعات متعددة الاستخدام بتخلي الخط ده أساسي للبس اليومي — ومفضّل عند شركاء الجملة والبوتيكات.",
    },
    image: "https://picsum.photos/seed/vilmora-casual-dresses/1200/1400",
  },
  {
    slug: "evening-dresses",
    name: { en: "Evening Dresses", ar: "فساتين سهرة" },
    group: "women",
    description: {
      en: "Statement pieces for special occasions.",
      ar: "قطع مميزة للمناسبات الخاصة.",
    },
    longDescription: {
      en: "Structured tailoring, richer fabrics, and refined detailing define our evening line, produced in small-batch runs or made-to-order for boutiques and private label partners.",
      ar: "تفصيل منسّق، أقمشة فاخرة، وتفاصيل دقيقة بتميّز خط السهرة عندنا، بيتصنّع بدفعات صغيرة أو حسب الطلب للبوتيكات وشركاء العلامة الخاصة.",
    },
    image: "https://picsum.photos/seed/vilmora-evening-dresses/1200/1400",
  },
  {
    slug: "abayas",
    name: { en: "Abayas", ar: "عبايات" },
    group: "women",
    description: {
      en: "Modest, flowing abayas in premium fabrics.",
      ar: "عبايات محتشمة وانسيابية بأقمشة فاخرة.",
    },
    longDescription: {
      en: "Our abaya line is manufactured with attention to drape, opacity, and finish — available in classic black crepe as well as seasonal colorways, with custom embroidery available for wholesale orders.",
      ar: "خط العبايات عندنا بيتصنّع بعناية فائقة للانسدال والكثافة والتشطيب — متوفر بالكريب الأسود الكلاسيكي وألوان موسمية، مع تطريز مخصص لطلبات الجملة.",
    },
    image: "https://picsum.photos/seed/vilmora-abayas/1200/1400",
  },
  {
    slug: "mens-fashion",
    name: { en: "Men's Fashion", ar: "أزياء رجالي" },
    group: "men",
    description: {
      en: "Modern essentials and smart-casual pieces for men.",
      ar: "أساسيات عصرية وقطع سمارت كاجوال للرجال.",
    },
    longDescription: {
      en: "Clean lines, durable stitching, and fabrics chosen for hot climates make our men's line a reliable choice for retail and corporate gifting programs.",
      ar: "خطوط نظيفة، حياكة متينة، وأقمشة مختارة للمناخ الحار بتخلي خط الرجالي عندنا اختيار موثوق للتجزئة وبرامج الهدايا المؤسسية.",
    },
    image: "https://picsum.photos/seed/vilmora-men-cover/1200/1400",
  },
  {
    slug: "kids-fashion",
    name: { en: "Kids Fashion", ar: "أزياء أطفال" },
    group: "kids",
    description: {
      en: "Durable, playful clothing built for active kids.",
      ar: "ملابس متينة ومرحة مصممة للأطفال النشيطين.",
    },
    longDescription: {
      en: "Reinforced seams, soft finishes, and easy-care fabrics make our kidswear line practical for parents and dependable for schools ordering in bulk.",
      ar: "خياطة مقوّاة، تشطيب ناعم، وأقمشة سهلة العناية بتخلي خط الأطفال عملي للأهالي وموثوق للمدارس اللي بتطلب بالجملة.",
    },
    image: "https://picsum.photos/seed/vilmora-kids-cover/1200/1400",
  },
  {
    slug: "pajamas",
    name: { en: "Pajamas", ar: "بيجامات" },
    group: "kids",
    description: {
      en: "Soft, breathable sleepwear for the whole family.",
      ar: "ملابس نوم ناعمة ومريحة لكل أفراد العائلة.",
    },
    longDescription: {
      en: "Brushed cotton and jersey pajama sets designed for comfort, offered in adult and kids sizing and available for private label branding.",
      ar: "أطقم بيجامات من القطن المصنفر والجيرسيه مصممة للراحة، متوفرة بمقاسات الكبار والأطفال ومتاحة للعلامة الخاصة.",
    },
    image: "https://picsum.photos/seed/vilmora-pajamas/1200/1400",
  },
  {
    slug: "school-uniforms",
    name: { en: "School Uniforms", ar: "الزي المدرسي" },
    group: "uniforms",
    description: {
      en: "Durable, comfortable uniforms for grades KG–12.",
      ar: "يونيفورم متين ومريح من مرحلة الحضانة حتى الثانوية.",
    },
    longDescription: {
      en: "VilmoraTex manufactures full school uniform programs — shirts, pinafores, trousers, and skirts — sized from age 4 to 16, with fabric and consumption specifications tailored to each school's identity and budget. Bulk pricing scales from 100 to 1,000+ pieces per style.",
      ar: "فيلمورا تكس تصنّع برامج زي مدرسي كاملة — قمصان، مرايل، بناطيل، وجيبات — بمقاسات من سن 4 لـ16 سنة، مع مواصفات قماش واستهلاك مخصصة لهوية وميزانية كل مدرسة. أسعار الجملة تتدرج من 100 لأكثر من 1000 قطعة للموديل.",
    },
    image: "https://picsum.photos/seed/vilmora-school-uniforms/1200/1400",
  },
  {
    slug: "hospital-uniforms",
    name: { en: "Hospital Uniforms", ar: "يونيفورم المستشفيات" },
    group: "uniforms",
    description: {
      en: "Professional uniforms for clinical and support staff.",
      ar: "يونيفورم مهني للطاقم الطبي وطاقم الدعم.",
    },
    longDescription: {
      en: "Built for long shifts and frequent washing, our hospital uniform line covers nursing staff, administration, and support teams, with fabric options selected for durability and easy-care performance.",
      ar: "مصمم للورديات الطويلة والغسيل المتكرر، خط يونيفورم المستشفيات عندنا بيغطي طاقم التمريض والإدارة وفرق الدعم، بخيارات أقمشة مختارة للمتانة وسهولة العناية.",
    },
    image: "https://picsum.photos/seed/vilmora-hospital-uniforms/1200/1400",
  },
  {
    slug: "medical-scrubs",
    name: { en: "Medical Scrubs", ar: "سكراب طبي" },
    group: "uniforms",
    description: {
      en: "Functional, breathable scrubs for medical teams.",
      ar: "سكراب عملي ومريح للفرق الطبية.",
    },
    longDescription: {
      en: "Our scrub sets are cut for freedom of movement with practical pocket layouts, offered in solid clinic colors and available with embroidered department branding for bulk hospital orders.",
      ar: "أطقم السكراب عندنا مقصوصة لحرية الحركة بجيوب عملية، متوفرة بألوان العيادات الصلبة ومتاحة بتطريز اسم القسم لطلبات المستشفيات بالجملة.",
    },
    image: "https://picsum.photos/seed/vilmora-medical-scrubs/1200/1400",
  },
  {
    slug: "engineering-uniforms",
    name: { en: "Engineering Uniforms", ar: "يونيفورم هندسي" },
    group: "uniforms",
    description: {
      en: "Rugged workwear for engineering teams and site staff.",
      ar: "ملابس عمل متينة لفرق الهندسة وطاقم الموقع.",
    },
    longDescription: {
      en: "Reinforced stitching, utility pockets, and hard-wearing fabrics make this line suited to engineering firms and site supervisors who need uniforms that last a full project cycle.",
      ar: "حياكة مقوّاة، جيوب عملية، وأقمشة شديدة التحمل بتخلي الخط ده مناسب لشركات الهندسة ومشرفي المواقع اللي محتاجين يونيفورم يعيش دورة مشروع كاملة.",
    },
    image: "https://picsum.photos/seed/vilmora-engineering-uniforms/1200/1400",
  },
  {
    slug: "industrial-uniforms",
    name: { en: "Factory & Industrial Uniforms", ar: "يونيفورم مصانع وصناعي" },
    group: "uniforms",
    description: {
      en: "Heavy-duty uniforms built for factory floors.",
      ar: "يونيفورم شديد التحمل مصمم لأرضيات المصانع.",
    },
    longDescription: {
      en: "Designed for demanding industrial environments, this line prioritizes abrasion resistance, visibility options, and comfort across full-shift wear, with labor and security uniform variants available.",
      ar: "مصمم للبيئات الصناعية الصعبة، الخط ده بيركّز على مقاومة الاحتكاك وخيارات الوضوح والراحة طوال الوردية، مع نسخ متاحة لعمال المصانع والأمن.",
    },
    image: "https://picsum.photos/seed/vilmora-industrial-uniforms/1200/1400",
  },
  {
    slug: "restaurant-uniforms",
    name: { en: "Restaurant Uniforms", ar: "يونيفورم مطاعم" },
    group: "uniforms",
    description: {
      en: "Sharp, practical uniforms for front and back of house.",
      ar: "يونيفورم أنيق وعملي لصالة المطعم والمطبخ.",
    },
    longDescription: {
      en: "From chef wear to server aprons and front-of-house shirts, we produce restaurant uniform sets that hold color and shape through commercial laundering.",
      ar: "من ملابس الشيف لمرايل النادل وقمصان الاستقبال، بننتج أطقم يونيفورم مطاعم بتحافظ على لونها وشكلها مع الغسيل التجاري المتكرر.",
    },
    image: "https://picsum.photos/seed/vilmora-restaurant-uniforms/1200/1400",
  },
  {
    slug: "hotel-uniforms",
    name: { en: "Hotel Uniforms", ar: "يونيفورم فنادق" },
    group: "uniforms",
    description: {
      en: "Polished uniforms for hospitality teams.",
      ar: "يونيفورم أنيق لفرق الضيافة.",
    },
    longDescription: {
      en: "Housekeeping, concierge, and front-desk uniform sets tailored to reflect your hotel's brand standards, with custom embroidery and fabric options available.",
      ar: "أطقم يونيفورم للتدبير المنزلي والاستقبال والكونسيرج مفصّلة تعكس معايير علامة فندقك، مع تطريز مخصص وخيارات أقمشة متاحة.",
    },
    image: "https://picsum.photos/seed/vilmora-hotel-uniforms/1200/1400",
  },
  {
    slug: "corporate-uniforms",
    name: { en: "Corporate Uniforms", ar: "يونيفورم الشركات" },
    group: "uniforms",
    description: {
      en: "Bank, retail, and office uniform programs.",
      ar: "برامج يونيفورم للبنوك والمحلات والمكاتب.",
    },
    longDescription: {
      en: "Structured shirts, blazers, and coordinated sets for banks, retail chains, and corporate teams who need a consistent, professional look across every branch.",
      ar: "قمصان مفصّلة، بليزرات، وأطقم منسقة للبنوك وسلاسل المحلات والفرق المؤسسية اللي محتاجة مظهر احترافي متسق في كل فرع.",
    },
    image: "https://picsum.photos/seed/vilmora-corporate-uniforms/1200/1400",
  },
  {
    slug: "accessories",
    name: { en: "Accessories", ar: "إكسسوارات" },
    group: "accessories",
    description: { en: "Coming soon.", ar: "قريبًا." },
    longDescription: {
      en: "We are preparing a curated accessories line to complement our apparel and uniform collections. Check back soon, or contact us to discuss custom accessory manufacturing.",
      ar: "بنجهّز خط إكسسوارات مختار يكمّل مجموعات الملابس واليونيفورم عندنا. تابعنا قريبًا، أو تواصل معنا لمناقشة تصنيع إكسسوارات مخصصة.",
    },
    image: "https://picsum.photos/seed/vilmora-accessories/1200/1400",
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
