import type { LocalizedText } from "./categories";

export type Review = {
  name: string;
  role: LocalizedText;
  quote: LocalizedText;
  rating: number;
};

export const reviews: Review[] = [
  {
    name: "Mona El-Sayed",
    role: { en: "Boutique Owner, Alexandria", ar: "صاحبة بوتيك، الإسكندرية" },
    quote: {
      en: "VilmoraTex has been our private label partner for two seasons now. Sample turnaround is fast, and the finishing quality matches brands we used to import.",
      ar: "فيلمورا تكس شريكنا في العلامة الخاصة من موسمين دلوقتي. مدة العينات سريعة، وجودة التشطيب بتنافس البراندات اللي كنا بنستوردها.",
    },
    rating: 5,
  },
  {
    name: "Ahmed Farouk",
    role: {
      en: "Operations Manager, Al Nour International School",
      ar: "مدير العمليات، مدرسة النور الدولية",
    },
    quote: {
      en: "We switched our entire school uniform program to VilmoraTex last year. The fabric consumption breakdown by age group made budgeting for 900 students straightforward for the first time.",
      ar: "حوّلنا برنامج الزي المدرسي بالكامل لفيلمورا تكس السنة اللي فاتت. تفصيل استهلاك القماش حسب الفئة العمرية خلّى تخطيط ميزانية 900 طالب سهل لأول مرة.",
    },
    rating: 5,
  },
  {
    name: "Dr. Heba Kamal",
    role: {
      en: "Procurement Lead, Private Hospital Group",
      ar: "مسؤولة المشتريات، مجموعة مستشفيات خاصة",
    },
    quote: {
      en: "Reliable delivery, consistent sizing across batches, and a fabric that actually survives industrial laundering. That combination is harder to find than it should be.",
      ar: "توصيل موثوق، ثبات في المقاسات بين الدفعات، وقماش فعلًا بيتحمل الغسيل الصناعي. الكومبينيشن ده أصعب ما تلاقيه من المفروض.",
    },
    rating: 4.5,
  },
  {
    name: "Karim Hassan",
    role: { en: "Founder, Menswear Startup Brand", ar: "مؤسس، علامة ناشئة للأزياء الرجالي" },
    quote: {
      en: "Started with a 50-piece OEM trial run. The factory was upfront about lead times and MOQs from day one, and the finished shirts matched our tech pack exactly.",
      ar: "بدأنا بتجربة OEM بـ50 قطعة. المصنع كان واضح بالنسبة للمدة الزمنية والحد الأدنى من أول يوم، والقمصان النهائية طابقت مواصفاتنا بالظبط.",
    },
    rating: 5,
  },
];
