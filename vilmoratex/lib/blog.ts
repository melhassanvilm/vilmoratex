import type { LocalizedText } from "./categories";

export type BlogPost = {
  slug: string;
  title: LocalizedText;
  excerpt: LocalizedText;
  content: { en: string[]; ar: string[] };
  coverImage: string;
  date: string;
  author: LocalizedText;
  readingTime: { en: string; ar: string };
  tags: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-choose-fabric-for-school-uniforms",
    title: {
      en: "How to Choose the Right Fabric for School Uniforms in Egypt",
      ar: "إزاي تختار القماش المناسب للزي المدرسي في مصر",
    },
    excerpt: {
      en: "Fabric choice drives most of a school uniform's cost and durability. Here's how we help schools balance budget, comfort, and longevity.",
      ar: "اختيار القماش هو اللي بيحدد أغلب تكلفة ومتانة الزي المدرسي. إليك إزاي بنساعد المدارس توازن بين الميزانية والراحة وطول العمر.",
    },
    coverImage: "https://picsum.photos/seed/vilmora-blog-1/1200/800",
    date: "2026-06-12",
    author: { en: "VilmoraTex Manufacturing Team", ar: "فريق التصنيع بفيلمورا تكس" },
    readingTime: { en: "5 min read", ar: "5 دقائق قراءة" },
    tags: ["uniforms", "manufacturing", "fabric"],
    content: {
      en: [
        "When a school asks us to quote a uniform program, the very first question we ask is about fabric — not color, not price. Fabric weight, weave, and fiber blend determine almost everything else: how the uniform holds up to a full school year of washing, how it breathes in Cairo's summer heat, and ultimately how much it costs per piece.",
        "For everyday shirts and blouses, a cotton-polyester blend in the 170–200 GSM range strikes the best balance between breathability and durability for most primary and preparatory schools. Pure cotton feels softer but wrinkles faster and shrinks more over repeated washes, which matters when a uniform needs to last an entire academic year.",
        "For pinafores, skirts, and trousers, we typically recommend a slightly heavier fabric — often in the 220–260 GSM range — since these pieces see more stress at seams and pleats. Winter and summer variants of the same uniform often use different weights of the same base fabric, which is why our fabric price sheets separate 'winter' and 'summer' weights for items like our biscuit-weave trouser fabric.",
        "Consumption also matters as much as price per meter: a size-13-16 trouser can use 50% more fabric than a size-4-6 trouser, so any accurate quote has to account for consumption by age band, not just a flat per-piece estimate. This is exactly the kind of calculation our manufacturing team runs for every school uniform quote — matching fabric, consumption, and quantity to land on a fair, transparent price per piece.",
        "If you're planning a uniform program and want a fabric-and-quantity based quote, our team can walk you through the trade-offs for your specific budget and durability needs — reach out through our Request a Quote page.",
      ],
      ar: [
        "لما مدرسة تطلب منّا عرض سعر لبرنامج يونيفورم، أول سؤال بنسأله يكون عن القماش — مش اللون ولا السعر. وزن القماش ونوع النسج وخليط الخامة هي اللي بتحدد كل حاجة تقريبًا: إزاي اليونيفورم هيتحمل غسيل سنة دراسية كاملة، إزاي هيسمح بمرور الهواء في حر القاهرة، وفي الآخر التكلفة لكل قطعة.",
        "بالنسبة للقمصان اليومية، خليط قطن وبوليستر بوزن 170-200 جرام/م² بيدي أفضل توازن بين التهوية والمتانة لمعظم المدارس الابتدائية والإعدادية. القطن الخالص أنعم لكن بيتجعّد أسرع وبيتقلّص أكتر مع الغسيل المتكرر، وده مهم لما اليونيفورم لازم يعيش سنة دراسية كاملة.",
        "بالنسبة للمرايل والجيبات والبناطيل، عادة بننصح بقماش أثقل شوية — غالبًا 220-260 جرام/م² — لأن القطع دي بتتعرض لضغط أكتر عند الغرز والطيات. النسخة الشتوية والصيفية من نفس اليونيفورم غالبًا بتستخدم أوزان مختلفة من نفس القماش الأساسي، وده سبب إننا بنفصل في جداول أسعار القماش بين وزن الشتوي والصيفي زي قماش البسكوته للبنطلون.",
        "الاستهلاك مهم بقد سعر المتر بالظبط: بنطلون مقاس 13-16 سنة ممكن ياخد قماش أكتر بـ50% من بنطلون مقاس 4-6 سنوات، فأي عرض سعر دقيق لازم يحسب الاستهلاك حسب الفئة العمرية مش تقدير ثابت لكل قطعة. وده بالظبط نوع الحساب اللي فريق التصنيع بيعمله لكل عرض سعر زي مدرسي — بيربط القماش والاستهلاك والكمية عشان يوصل لسعر عادل وشفاف لكل قطعة.",
        "لو بتخطط لبرنامج يونيفورم وعايز عرض سعر حسب القماش والكمية، فريقنا يقدر يوضحلك المفاضلات المناسبة لميزانيتك ومتطلبات المتانة عندك — تواصل معنا من صفحة اطلب عرض سعر.",
      ],
    },
  },
  {
    slug: "oem-vs-private-label-manufacturing-explained",
    title: {
      en: "OEM vs. Private Label Manufacturing: What's the Difference?",
      ar: "تصنيع OEM مقابل العلامة الخاصة: إيه الفرق؟",
    },
    excerpt: {
      en: "Both let you sell under your own brand — but they're not the same service. Here's how to decide which one fits your business.",
      ar: "الاتنين بيخلوك تبيع تحت علامتك التجارية — بس مش نفس الخدمة. إليك إزاي تقرر أيهما يناسب مشروعك.",
    },
    coverImage: "https://picsum.photos/seed/vilmora-blog-2/1200/800",
    date: "2026-05-03",
    author: { en: "VilmoraTex Manufacturing Team", ar: "فريق التصنيع بفيلمورا تكس" },
    readingTime: { en: "4 min read", ar: "4 دقائق قراءة" },
    tags: ["OEM", "private label", "wholesale"],
    content: {
      en: [
        "We get this question from almost every new wholesale client: what's the actual difference between OEM manufacturing and private label manufacturing? Both result in a finished garment carrying your brand — but the starting point is different.",
        "With OEM (Original Equipment Manufacturing), you bring us your own design, pattern, and specification, and we produce it exactly to your brief — your fabric choices, your measurements, your trims. This is the route for brands that already have a design identity and need a reliable factory partner to execute it at scale.",
        "With private label manufacturing, you start from one of our existing, tested styles — already patterned, sampled, and proven in production — and we simply apply your labels, packaging, and any color or trim customization you want. This route is faster and typically has a lower minimum order quantity, which makes it a strong option for new brands or boutiques testing a category for the first time.",
        "Most of our wholesale clients actually use a mix of both: private label for core, fast-moving styles, and OEM for signature pieces that define their brand identity. Whichever route fits your business, our production team can walk you through minimum order quantities, sampling timelines, and cost breakdowns before you commit.",
      ],
      ar: [
        "بنسمع السؤال ده من كل عميل جملة جديد تقريبًا: إيه الفرق الحقيقي بين تصنيع OEM والعلامة الخاصة؟ الاتنين نتيجتهم قطعة نهائية تحمل علامتك التجارية — لكن نقطة البداية مختلفة.",
        "مع OEM (التصنيع الأصلي)، بتهاتلنا تصميمك وباترونك ومواصفاتك، وإحنا بننتجها بالظبط حسب طلبك — اختيارات القماش، المقاسات، التفاصيل. ده الطريق للعلامات اللي عندها هوية تصميم جاهزة ومحتاجة شريك مصنع موثوق ينفذها بكميات كبيرة.",
        "مع تصنيع العلامة الخاصة، بتبدأ من موديل موجود عندنا ومجرّب — باترون جاهز، عينة معتمدة، ومُنتج فعليًا — وإحنا بس بنطبّق ليبلاتك وتغليفك وأي تخصيص لون أو تفاصيل عايزه. الطريق ده أسرع وعادة بحد أدنى أقل للطلبية، وده بيخليه اختيار قوي للعلامات الجديدة أو البوتيكات اللي بتجرب قسم لأول مرة.",
        "أغلب عملاء الجملة عندنا بيستخدموا مزيج من الاتنين: علامة خاصة للموديلات الأساسية سريعة الحركة، وOEM للقطع المميزة اللي بتحدد هوية علامتهم. أيًا كان الطريق المناسب لمشروعك، فريق الإنتاج عندنا يقدر يوضحلك الحد الأدنى للطلبية ومواعيد العينات وتفصيل التكلفة قبل ما تلتزم.",
      ],
    },
  },
  {
    slug: "5-questions-to-ask-before-a-bulk-uniform-order",
    title: {
      en: "5 Questions to Ask Before Placing a Bulk Uniform Order",
      ar: "5 أسئلة اسألها قبل ما تطلب يونيفورم بالجملة",
    },
    excerpt: {
      en: "A bulk order is hard to unwind once it's in production. These are the questions that prevent expensive surprises.",
      ar: "صعب تتراجع في طلبية الجملة بعد ما تدخل الإنتاج. دي الأسئلة اللي بتمنع مفاجآت مكلفة.",
    },
    coverImage: "https://picsum.photos/seed/vilmora-blog-3/1200/800",
    date: "2026-03-21",
    author: { en: "VilmoraTex Manufacturing Team", ar: "فريق التصنيع بفيلمورا تكس" },
    readingTime: { en: "6 min read", ar: "6 دقائق قراءة" },
    tags: ["wholesale", "bulk orders", "manufacturing"],
    content: {
      en: [
        "Whether you're outfitting a hospital, a hotel, or a school, a bulk uniform order is a significant commitment — and it's much harder to fix a mistake after 500 pieces are already cut than before the first sample is approved. Here are the five questions we recommend every buyer ask before signing off.",
        "1. What's the fabric consumption per size, not just per style? A single 'price per piece' number can hide big differences between your smallest and largest sizes. Ask for a size-by-size fabric consumption breakdown.",
        "2. Is the quoted price per piece inclusive of labor, or fabric only? Fabric and manufacturing (cutting, sewing, trims, finishing) are usually quoted separately, and it's easy to compare two quotes that aren't actually apples-to-apples.",
        "3. What's the minimum order quantity per size, per color? Some factories set MOQs per style; others set them per size/color combination, which changes your total commitment considerably.",
        "4. What does the sampling and approval process look like? A pre-production sample should be approved in writing before bulk cutting begins — this is your last checkpoint before the fabric is committed.",
        "5. What's the realistic lead time, including fabric sourcing? Lead times quoted from 'order confirmation' can look very different from lead times quoted from 'fabric in hand.' Always confirm which one you're getting.",
        "Our team walks every wholesale and institutional client through these five points before we confirm a production schedule — it's the difference between a smooth bulk order and an expensive one.",
      ],
      ar: [
        "سواء بتجهّز مستشفى أو فندق أو مدرسة، طلبية اليونيفورم بالجملة التزام كبير — وأصعب بكتير تصلّح غلطة بعد ما 500 قطعة اتقصّت من قبل ما تعتمد أول عينة. دي خمس أسئلة بننصح كل مشتري يسألها قبل ما يوقّع.",
        "1. إيه استهلاك القماش لكل مقاس، مش لكل موديل بس؟ رقم 'السعر لكل قطعة' الواحد ممكن يخبي فروق كبيرة بين أصغر وأكبر مقاس. اطلب تفصيل استهلاك القماش لكل مقاس على حدة.",
        "2. السعر المعروض لكل قطعة شامل التصنيع ولا القماش بس؟ عادة القماش والتصنيع (القص، الحياكة، التفاصيل، التشطيب) بيتم تسعيرهم منفصلين، وسهل إنك تقارن عرضين مش فعليًا على نفس الأساس.",
        "3. إيه الحد الأدنى للطلبية لكل مقاس ولون؟ بعض المصانع بتحدد الحد الأدنى لكل موديل؛ وتانيين بيحددوه لكل توليفة مقاس/لون، وده بيغيّر التزامك الإجمالي بشكل كبير.",
        "4. إزاي شكل عملية العينات والاعتماد؟ لازم عينة الإنتاج تتعتمد كتابيًا قبل بداية القص بالجملة — دي آخر نقطة فحص قبل ما القماش يتحجز.",
        "5. إيه المدة الزمنية الواقعية، شاملة توفير القماش؟ المدة المحسوبة من 'تأكيد الطلب' ممكن تكون مختلفة جدًا عن المدة المحسوبة من 'القماش متوفر في المصنع'. اتأكد دايمًا من أنهي واحدة بتاخد.",
        "فريقنا بيوضح النقاط الخمسة دي لكل عميل جملة أو مؤسسي قبل ما نأكد جدول الإنتاج — وده الفرق بين طلبية جملة سلسة وطلبية مكلفة.",
      ],
    },
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
