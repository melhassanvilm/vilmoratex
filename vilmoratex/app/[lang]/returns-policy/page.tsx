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
    path: "/returns-policy",
    title: { en: "Returns Policy | VilmoraTex", ar: "سياسة الاسترجاع | فيلمورا تكس" },
    description: {
      en: "Return and exchange terms for VilmoraTex retail orders, and our defect and quality guarantee for made-to-order and bulk manufacturing orders.",
      ar: "شروط الاسترجاع والاستبدال لطلبات التجزئة من فيلمورا تكس، وضمان الجودة والعيوب لطلبات التصنيع حسب الطلب والجملة.",
    },
  });
}

const sections: { heading: { en: string; ar: string }; body: { en: string; ar: string }[] }[] = [
  {
    heading: { en: "Retail Returns & Exchanges", ar: "استرجاع واستبدال طلبات التجزئة" },
    body: [
      {
        en: "Ready-stock retail items may be returned or exchanged within 14 days of delivery, provided they are unworn, unwashed, undamaged, and in their original packaging with tags attached. To start a return, contact our team on WhatsApp with your order number and the reason for the return.",
        ar: "يمكن استرجاع أو استبدال قطع التجزئة الجاهزة خلال 14 يومًا من تاريخ الاستلام، بشرط ألا تكون القطعة قد لُبست أو غُسلت أو تعرضت لأي تلف، وأن تكون بتغليفها الأصلي مع البطاقات. لبدء عملية الاسترجاع، تواصل مع فريقنا عبر واتساب مع ذكر رقم الطلب وسبب الاسترجاع.",
      },
    ],
  },
  {
    heading: {
      en: "Made-to-Order, Bulk & Custom Orders",
      ar: "الطلبات المصنّعة حسب الطلب والجملة والمخصصة",
    },
    body: [
      {
        en: "Because uniform programs, private label/OEM production, bulk wholesale orders, and any item customized with embroidery, printing, or a specific colorway are manufactured specifically for you, these orders are not eligible for return or exchange once production has started — except in the case of a manufacturing defect (see below). Cancellations are accepted only before cutting/production begins, and any sampling or setup costs already incurred may be deducted.",
        ar: "نظرًا لأن برامج اليونيفورم وإنتاج العلامة الخاصة (OEM) وطلبات الجملة وأي قطعة مخصصة بالتطريز أو الطباعة أو لون معين يتم تصنيعها خصيصًا لك، فإن هذه الطلبات غير قابلة للاسترجاع أو الاستبدال بعد بدء التصنيع — إلا في حالة وجود عيب تصنيعي (انظر أدناه). يُقبل الإلغاء فقط قبل بدء القص أو التصنيع، وقد يتم خصم أي تكاليف عينات أو تجهيزات تم تكبدها بالفعل.",
      },
    ],
  },
  {
    heading: { en: "Manufacturing Defects & Quality Issues", ar: "العيوب التصنيعية ومشاكل الجودة" },
    body: [
      {
        en: "If an item arrives with a manufacturing defect or doesn't match the agreed specification, please contact us within 48 hours of delivery with clear photos and your order details. We will repair, replace, or refund the affected item at no cost to you, depending on the issue and your preference.",
        ar: "إذا وصلتك قطعة بها عيب تصنيعي أو لا تطابق المواصفات المتفق عليها، يُرجى التواصل معنا خلال 48 ساعة من الاستلام مع صور واضحة وتفاصيل الطلب. سنقوم بإصلاح القطعة أو استبدالها أو استرداد قيمتها دون أي تكلفة إضافية عليك، حسب طبيعة المشكلة وما يناسبك.",
      },
    ],
  },
  {
    heading: { en: "How Refunds Work", ar: "كيفية استرداد المبالغ" },
    body: [
      {
        en: "Since we currently operate on a cash and cash-on-delivery basis, approved refunds are issued by bank transfer to your account or as credit toward a future order — whichever you prefer. Refunds are processed within 5–7 business days of the returned item being received and inspected.",
        ar: "بما أننا نعمل حاليًا بنظام الدفع النقدي والدفع عند الاستلام، يتم صرف المبالغ المستردة المعتمدة عن طريق تحويل بنكي لحسابك أو كرصيد لطلب قادم — حسب رغبتك. تتم معالجة المبالغ المستردة خلال 5–7 أيام عمل من استلام وفحص القطعة المرتجعة.",
      },
    ],
  },
  {
    heading: { en: "Return Shipping", ar: "تكلفة شحن الاسترجاع" },
    body: [
      {
        en: "If the return is due to a manufacturing defect or an error on our part, we cover the return shipping cost. For returns or exchanges due to change of mind (eligible retail items only), return shipping is the customer's responsibility.",
        ar: "إذا كان سبب الاسترجاع عيبًا تصنيعيًا أو خطأً من جانبنا، فإننا نتحمل تكلفة شحن الاسترجاع بالكامل. أما في حالة الاسترجاع أو الاستبدال لتغيير الرأي (لقطع التجزئة المؤهلة فقط)، فتكون تكلفة شحن الاسترجاع على العميل.",
      },
    ],
  },
  {
    heading: { en: "Questions About a Return", ar: "استفسارات عن الاسترجاع" },
    body: [
      {
        en: `Our team is happy to help — reach us on WhatsApp at ${siteConfig.contact.whatsappDisplay} or by email at ${siteConfig.contact.email}.`,
        ar: `فريقنا جاهز لمساعدتك — تواصل معنا عبر واتساب على ${siteConfig.contact.whatsappDisplay} أو عن طريق البريد الإلكتروني ${siteConfig.contact.email}.`,
      },
    ],
  },
];

export default async function ReturnsPolicyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);
  const title = lang === "ar" ? "سياسة الاسترجاع" : "Returns Policy";
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
