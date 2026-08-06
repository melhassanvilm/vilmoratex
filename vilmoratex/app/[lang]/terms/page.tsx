import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "@/components/LocaleLink";
import { siteConfig } from "@/lib/site-config";
import { getDictionary } from "@/lib/dictionaries";
import { buildPageMetadata } from "@/lib/seo";
import type { Locale } from "@/lib/i18n-config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  return buildPageMetadata({
    lang,
    path: "/terms",
    title: { en: "Terms & Conditions | VilmoraTex", ar: "الشروط والأحكام | فيلمورا تكس" },
    description: {
      en: "Terms and conditions governing the use of the VilmoraTex Trading & Industry website and orders.",
      ar: "الشروط والأحكام التي تحكم استخدام موقع فيلمورا تكس للتجارة والصناعة والطلبات المقدمة من خلاله.",
    },
  });
}

const sections: { heading: { en: string; ar: string }; body: { en: string; ar: string }[] }[] = [
  {
    heading: { en: "Orders & Payment", ar: "الطلبات والدفع" },
    body: [
      {
        en: "Orders placed through this website are currently confirmed via WhatsApp and fulfilled on a cash payment or cash-on-delivery basis. Bank transfer and online payment options will be added as they become available. Prices are listed in Egyptian Pounds (EGP) and are subject to change without prior notice; the price confirmed at the time of order acceptance applies.",
        ar: "يتم تأكيد الطلبات المقدمة عبر هذا الموقع حاليًا عبر واتساب وتنفيذها بنظام الدفع النقدي أو الدفع عند الاستلام. سيتم إضافة خيارات التحويل البنكي والدفع الإلكتروني فور توفرها. الأسعار معروضة بالجنيه المصري وقابلة للتغيير دون إشعار مسبق؛ ويُعتمد السعر المؤكد وقت قبول الطلب.",
      },
    ],
  },
  {
    heading: { en: "Wholesale & Manufacturing Orders", ar: "طلبات الجملة والتصنيع" },
    body: [
      {
        en: "Bulk, wholesale, OEM, and private label orders are subject to a separate quotation confirming price, minimum order quantity, sample approval, and lead time. Production on bulk orders begins only after a pre-production sample (where applicable) has been approved in writing by the customer.",
        ar: "طلبات الجملة و OEM والعلامة الخاصة تخضع لعرض سعر منفصل يحدد السعر والحد الأدنى للكمية واعتماد العينة ومدة التصنيع. لا يبدأ التصنيع لطلبات الجملة إلا بعد اعتماد العميل الكتابي للعينة الأولية (إن وجدت).",
      },
    ],
  },
  {
    heading: { en: "Shipping & Delivery", ar: "الشحن والتوصيل" },
    body: [
      {
        en: "Delivery timelines are estimates and may vary based on location, order size, and production schedule. Risk of loss passes to the customer upon delivery. Full shipping details are available on our Shipping Policy page.",
        ar: "مواعيد التوصيل تقديرية وقد تختلف حسب الموقع وحجم الطلب وجدول التصنيع. تنتقل مسؤولية فقدان الشحنة للعميل بمجرد التسليم. تفاصيل الشحن الكاملة متاحة في صفحة سياسة الشحن.",
      },
    ],
  },
  {
    heading: { en: "Returns & Exchanges", ar: "الاسترجاع والاستبدال" },
    body: [
      {
        en: "Retail items may be returned or exchanged if unused, unwashed, and in original condition with tags attached. Made-to-order, custom, and bulk manufacturing orders are not eligible for return once production has begun, except in the case of a manufacturing defect. Full terms and eligibility windows are available on our Returns Policy page.",
        ar: "يمكن استرجاع أو استبدال قطع التجزئة إذا لم تُستخدم أو تُغسل وكانت بحالتها الأصلية مع البطاقات. الطلبات المصنّعة حسب الطلب والمخصصة وطلبات الجملة غير قابلة للاسترجاع بعد بدء التصنيع، إلا في حالة وجود عيب تصنيعي. الشروط الكاملة ومدد الاسترجاع متاحة في صفحة سياسة الاسترجاع.",
      },
    ],
  },
  {
    heading: { en: "Intellectual Property", ar: "الملكية الفكرية" },
    body: [
      {
        en: "All designs, photography, and content on this website are the property of VilmoraTex Trading & Industry unless otherwise noted, and may not be reproduced without permission. Private label and OEM clients retain ownership of their own brand marks and designs supplied to us for production.",
        ar: "جميع التصميمات والصور والمحتوى على هذا الموقع ملك لفيلمورا تكس للتجارة والصناعة ما لم يُذكر خلاف ذلك، ولا يجوز نسخها دون إذن. يحتفظ عملاء العلامة الخاصة و OEM بملكية علاماتهم التجارية وتصميماتهم التي يزوّدوننا بها للتصنيع.",
      },
    ],
  },
  {
    heading: { en: "Limitation of Liability", ar: "حدود المسؤولية" },
    body: [
      {
        en: "VilmoraTex is not liable for indirect or consequential losses arising from delayed delivery, except where such delay results from our negligence.",
        ar: "فيلمورا تكس غير مسؤولة عن أي خسائر غير مباشرة أو تبعية ناتجة عن تأخر التوصيل، إلا إذا كان هذا التأخير ناتجًا عن إهمال من جانبنا.",
      },
    ],
  },
  {
    heading: { en: "Governing Law", ar: "القانون الحاكم" },
    body: [
      {
        en: "These terms are governed by the laws of the Arab Republic of Egypt.",
        ar: "تخضع هذه الشروط لقوانين جمهورية مصر العربية.",
      },
    ],
  },
];

export default async function TermsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);
  const title = lang === "ar" ? "الشروط والأحكام" : "Terms & Conditions";
  const lastUpdated = new Date().toLocaleDateString(lang === "ar" ? "ar-EG" : "en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const lastUpdatedLabel = lang === "ar" ? "آخر تحديث" : "Last updated";
  const intro =
    lang === "ar"
      ? `تحكم هذه الشروط والأحكام استخدامك لموقع ${siteConfig.fullNameAr} وأي طلبات أو طلبات عروض أسعار أو اتفاقيات تصنيع تتم من خلاله. باستخدامك لهذا الموقع، فإنك توافق على هذه الشروط.`
      : `These Terms & Conditions govern your use of the ${siteConfig.fullName} website and any orders, quote requests, or manufacturing agreements made through it. By using this site, you agree to these terms.`;
  const disclaimer =
    lang === "ar"
      ? "هذا المستند نموذج عام ويجب مراجعته من قِبل مستشار قانوني مختص قبل اعتماده كشروط وأحكام نهائية منشورة."
      : "This document is a general template and should be reviewed by a qualified legal professional before being relied upon as your final published terms and conditions.";

  return (
    <div>
      <Breadcrumbs items={[{ label: dict.common.nav.home, href: "/" }, { label: title }]} />
      <section className="container-page max-w-3xl pb-20">
        <h1 className="font-display text-3xl font-semibold text-brand-plum sm:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-brand-charcoal/50">
          {lastUpdatedLabel}: {lastUpdated}
        </p>

        <div className="mt-8 space-y-6 text-brand-charcoal/80">
          <p>{intro}</p>

          {sections.map((section) => (
            <div key={section.heading.en}>
              <h2 className="font-display text-xl font-semibold text-brand-plum">
                {section.heading[lang]}
              </h2>
              {section.body.map((p, i) => (
                <p key={i} className="mt-2">
                  {p[lang]}
                </p>
              ))}
            </div>
          ))}

          <p className="text-sm">
            <Link href="/shipping-policy" className="font-medium text-brand-plum hover:underline">
              {dict.common.footer.shippingPolicy}
            </Link>
            {" · "}
            <Link href="/returns-policy" className="font-medium text-brand-plum hover:underline">
              {dict.common.footer.returnsPolicy}
            </Link>
            {" · "}
            <Link href="/privacy-policy" className="font-medium text-brand-plum hover:underline">
              {dict.common.footer.privacyPolicy}
            </Link>
          </p>

          <p className="rounded-xl bg-brand-cream p-4 text-sm text-brand-charcoal/60">
            {disclaimer}
          </p>
        </div>
      </section>
    </div>
  );
}
