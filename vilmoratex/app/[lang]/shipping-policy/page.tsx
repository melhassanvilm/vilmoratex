import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
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
    path: "/shipping-policy",
    title: { en: "Shipping Policy | VilmoraTex", ar: "سياسة الشحن | فيلمورا تكس" },
    description: {
      en: "How VilmoraTex ships retail orders and bulk/wholesale manufacturing orders across Egypt and internationally.",
      ar: "كيفية شحن فيلمورا تكس لطلبات التجزئة وطلبات التصنيع بالجملة داخل مصر ودوليًا.",
    },
  });
}

const sections: { heading: { en: string; ar: string }; body: { en: string; ar: string }[] }[] = [
  {
    heading: { en: "Where We Ship", ar: "أماكن الشحن" },
    body: [
      {
        en: "We currently ship retail orders to addresses across Egypt via courier partners. For customers outside Egypt, and for bulk manufacturing or private label orders of any size, shipping is arranged directly with our team by freight or courier based on order volume and destination.",
        ar: "نشحن حاليًا طلبات التجزئة لجميع محافظات مصر عبر شركات الشحن المعتمدة. أما العملاء خارج مصر، وطلبات التصنيع بالجملة أو العلامة الخاصة بأي كمية، فيتم ترتيب الشحن مباشرة مع فريقنا عن طريق شحن بحري/جوي أو شركات شحن دولية حسب حجم الطلب والوجهة.",
      },
    ],
  },
  {
    heading: { en: "Order Confirmation & Processing Time", ar: "تأكيد الطلب ومدة التجهيز" },
    body: [
      {
        en: "Orders placed through the website checkout are confirmed by our team over WhatsApp before dispatch. Ready-stock retail items are typically dispatched within 2–4 business days of confirmation. Made-to-order pieces and uniform program orders follow the production lead time agreed with you at the time of order — this is communicated clearly before you confirm, since production only begins once fabric, sizing, and quantities are finalized.",
        ar: "يتم تأكيد الطلبات المقدمة عبر الموقع من فريقنا على واتساب قبل الشحن. القطع المتوفرة جاهزة للشحن عادةً خلال 2–4 أيام عمل من التأكيد. أما القطع المصنّعة حسب الطلب وطلبات برامج اليونيفورم فتُشحن حسب مدة التصنيع المتفق عليها وقت الطلب — ويتم إبلاغك بها بوضوح قبل التأكيد، حيث يبدأ التصنيع فقط بعد الاتفاق النهائي على القماش والمقاسات والكميات.",
      },
    ],
  },
  {
    heading: { en: "Delivery Times & Cost", ar: "مواعيد وتكلفة التوصيل" },
    body: [
      {
        en: "Retail orders within Greater Cairo typically arrive within 1–3 business days of dispatch; other governorates typically take 2–5 business days. Delivery cost depends on your location and is confirmed with you via WhatsApp before your order ships. Bulk and uniform program orders are delivered per the schedule agreed in your production plan, with factory pick-up also available on request.",
        ar: "طلبات التجزئة داخل القاهرة الكبرى تصل عادةً خلال 1–3 أيام عمل من الشحن، وباقي المحافظات خلال 2–5 أيام عمل تقريبًا. تكلفة التوصيل تعتمد على موقعك ويتم تأكيدها معك عبر واتساب قبل شحن الطلب. أما طلبات الجملة وبرامج اليونيفورم فتُسلَّم حسب الجدول الزمني المتفق عليه في خطة التصنيع، مع إمكانية الاستلام من المصنع مباشرة عند الطلب.",
      },
    ],
  },
  {
    heading: { en: "Payment on Delivery", ar: "الدفع عند التوصيل" },
    body: [
      {
        en: "We currently operate on a cash payment and cash-on-delivery basis. Please have the exact amount ready for the courier, as confirmed in your WhatsApp order summary. Bank transfer and online payment (Visa/Mastercard) are coming soon.",
        ar: "نعمل حاليًا بنظام الدفع النقدي والدفع عند الاستلام. يُرجى تجهيز المبلغ المطلوب بالضبط لمندوب الشحن، كما هو مؤكد في ملخص طلبك على واتساب. التحويل البنكي والدفع الإلكتروني (فيزا/ماستركارد) قريبًا.",
      },
    ],
  },
  {
    heading: { en: "Order Tracking", ar: "متابعة الشحنة" },
    body: [
      {
        en: "We don't yet have an online tracking portal. Our team will keep you updated on your order status by WhatsApp — from confirmation, through production (if applicable), to dispatch and estimated delivery.",
        ar: "لا يتوفر حاليًا نظام تتبع إلكتروني للشحنات. سيقوم فريقنا بإبلاغك بحالة طلبك أولًا بأول عبر واتساب — من التأكيد، مرورًا بالتصنيع (إن وجد)، وحتى الشحن وموعد التسليم المتوقع.",
      },
    ],
  },
  {
    heading: { en: "Delivery Issues", ar: "مشاكل التوصيل" },
    body: [
      {
        en: "If the courier is unable to reach you at the address or phone number provided, they will attempt to contact you to reschedule. Please make sure your address and phone number are accurate and complete when checking out — VilmoraTex is not responsible for delays caused by incomplete or incorrect delivery information.",
        ar: "في حالة تعذر وصول مندوب الشحن للعنوان أو رقم الهاتف المُدخل، سيحاول التواصل معك لإعادة جدولة التسليم. يُرجى التأكد من صحة واكتمال العنوان ورقم الهاتف عند إتمام الطلب — فيلمورا تكس غير مسؤولة عن أي تأخير ناتج عن بيانات توصيل غير مكتملة أو غير صحيحة.",
      },
    ],
  },
  {
    heading: { en: "Questions About Your Shipment", ar: "استفسارات عن شحنتك" },
    body: [
      {
        en: `Reach our team anytime on WhatsApp at ${siteConfig.contact.whatsappDisplay} or by email at ${siteConfig.contact.email}, and reference your name and order details.`,
        ar: `تواصل مع فريقنا في أي وقت عبر واتساب على ${siteConfig.contact.whatsappDisplay} أو عن طريق البريد الإلكتروني ${siteConfig.contact.email}، مع ذكر اسمك وتفاصيل طلبك.`,
      },
    ],
  },
];

export default async function ShippingPolicyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);
  const title = lang === "ar" ? "سياسة الشحن" : "Shipping Policy";
  const lastUpdated = new Date().toLocaleDateString(lang === "ar" ? "ar-EG" : "en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const lastUpdatedLabel = lang === "ar" ? "آخر تحديث" : "Last updated";

  return (
    <div>
      <Breadcrumbs items={[{ label: dict.common.nav.home, href: "/" }, { label: title }]} />
      <section className="container-page max-w-3xl pb-20">
        <h1 className="font-display text-3xl font-semibold text-brand-plum sm:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-brand-charcoal/50">
          {lastUpdatedLabel}: {lastUpdated}
        </p>

        <div className="mt-8 space-y-6 text-brand-charcoal/80">
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
        </div>
      </section>
    </div>
  );
}
