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
    path: "/privacy-policy",
    title: { en: "Privacy Policy | VilmoraTex", ar: "سياسة الخصوصية | فيلمورا تكس" },
    description: {
      en: "How VilmoraTex Trading & Industry collects, uses, and protects your personal information.",
      ar: "كيف تقوم فيلمورا تكس للتجارة والصناعة بجمع بياناتك الشخصية واستخدامها وحمايتها.",
    },
  });
}

type Block = { type: "p"; en: string; ar: string } | { type: "ul"; en: string[]; ar: string[] };

const sections: { heading: { en: string; ar: string }; blocks: Block[] }[] = [
  {
    heading: { en: "Information We Collect", ar: "المعلومات التي نجمعها" },
    blocks: [
      {
        type: "p",
        en: "We collect information you provide directly, such as your name, phone number, email address, shipping address, and order details when you place an order, request a quote, or contact us. We do not collect payment card information, as we currently operate on a cash and cash-on-delivery basis.",
        ar: "نجمع المعلومات التي تقدمها مباشرة، مثل الاسم ورقم الهاتف والبريد الإلكتروني وعنوان الشحن وتفاصيل الطلب عند تقديم طلب أو طلب عرض سعر أو التواصل معنا. لا نجمع بيانات بطاقات الدفع، حيث نعمل حاليًا بنظام الدفع النقدي والدفع عند الاستلام.",
      },
    ],
  },
  {
    heading: { en: "How We Use Your Information", ar: "كيف نستخدم معلوماتك" },
    blocks: [
      {
        type: "ul",
        en: [
          "To process and fulfill your orders and quote requests.",
          "To communicate with you about your order, inquiry, or account.",
          "To send you updates about new collections or offers, only if you have subscribed to our newsletter.",
          "To improve our website, products, and services.",
        ],
        ar: [
          "لمعالجة وتنفيذ طلباتك وطلبات عروض الأسعار.",
          "للتواصل معك بخصوص طلبك أو استفسارك أو حسابك.",
          "لإرسال تحديثات عن المجموعات أو العروض الجديدة، فقط إذا كنت مشتركًا في نشرتنا البريدية.",
          "لتحسين موقعنا ومنتجاتنا وخدماتنا.",
        ],
      },
    ],
  },
  {
    heading: { en: "Sharing of Information", ar: "مشاركة المعلومات" },
    blocks: [
      {
        type: "p",
        en: "We do not sell your personal information. We may share necessary details with delivery partners solely to fulfill your order, or with service providers who help us operate this website, under confidentiality obligations.",
        ar: "لا نبيع معلوماتك الشخصية. قد نشارك البيانات الضرورية مع شركاء التوصيل فقط لتنفيذ طلبك، أو مع مزودي الخدمات الذين يساعدوننا في تشغيل هذا الموقع، وذلك بموجب التزامات سرية.",
      },
    ],
  },
  {
    heading: { en: "Data Retention & Security", ar: "الاحتفاظ بالبيانات وأمانها" },
    blocks: [
      {
        type: "p",
        en: "We retain order and inquiry information only as long as necessary for business, legal, or accounting purposes, and take reasonable technical and organizational measures to protect it against unauthorized access.",
        ar: "نحتفظ بمعلومات الطلبات والاستفسارات فقط للمدة اللازمة للأغراض التجارية أو القانونية أو المحاسبية، ونتخذ إجراءات تقنية وتنظيمية معقولة لحمايتها من الوصول غير المصرح به.",
      },
    ],
  },
  {
    heading: { en: "Cookies", ar: "ملفات تعريف الارتباط" },
    blocks: [
      {
        type: "p",
        en: "This site may use essential cookies and local storage to support core features such as your shopping cart and wishlist. These are not used for third-party advertising.",
        ar: "قد يستخدم هذا الموقع ملفات تعريف ارتباط أساسية وتخزينًا محليًا لدعم ميزات رئيسية مثل سلة التسوق والمفضلة. لا تُستخدم هذه البيانات لأغراض إعلانات طرف ثالث.",
      },
    ],
  },
];

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);
  const title = lang === "ar" ? "سياسة الخصوصية" : "Privacy Policy";
  const lastUpdated = new Date().toLocaleDateString(lang === "ar" ? "ar-EG" : "en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const lastUpdatedLabel = lang === "ar" ? "آخر تحديث" : "Last updated";
  const intro =
    lang === "ar"
      ? `توضح سياسة الخصوصية هذه كيف تقوم ${siteConfig.fullNameAr} ("فيلمورا تكس"، "نحن") بجمع المعلومات واستخدامها وحمايتها عند استخدامك لهذا الموقع، أو تقديم طلب، أو التواصل معنا عبر واتساب أو البريد الإلكتروني أو نماذج التواصل وطلب عرض السعر.`
      : `This Privacy Policy explains how ${siteConfig.fullName} ("VilmoraTex", "we", "us") collects, uses, and safeguards information when you use this website, place an order, or contact us through WhatsApp, email, or our contact and quote forms.`;
  const choicesText =
    lang === "ar"
      ? "يمكنك طلب الوصول إلى معلوماتك الشخصية أو تصحيحها أو حذفها، أو إلغاء الاشتراك من الرسائل التسويقية في أي وقت، بالتواصل معنا على"
      : "You may request access to, correction of, or deletion of your personal information, or unsubscribe from marketing communications at any time, by contacting us at";
  const contactText =
    lang === "ar"
      ? `يمكن توجيه أي استفسارات عن هذه السياسة إلى ${siteConfig.contact.email} أو عبر واتساب على ${siteConfig.contact.whatsappDisplay}.`
      : `Questions about this policy can be directed to ${siteConfig.contact.email} or via WhatsApp at ${siteConfig.contact.whatsappDisplay}.`;
  const disclaimer =
    lang === "ar"
      ? "هذه السياسة نموذج عام ويجب مراجعتها من قِبل مستشار قانوني مختص لضمان الامتثال الكامل للوائح حماية البيانات المصرية والدولية المعمول بها قبل اعتمادها كسياسة نهائية منشورة."
      : "This policy is provided as a general template and should be reviewed by a qualified legal professional to ensure full compliance with applicable Egyptian and international data protection regulations before relying on it as your final published policy.";

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
              {section.blocks.map((block, i) =>
                block.type === "p" ? (
                  <p key={i} className="mt-2">
                    {block[lang]}
                  </p>
                ) : (
                  <ul key={i} className="mt-2 list-disc space-y-1 ps-5">
                    {block[lang].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )
              )}
            </div>
          ))}

          <div>
            <h2 className="font-display text-xl font-semibold text-brand-plum">
              {lang === "ar" ? "خياراتك" : "Your Choices"}
            </h2>
            <p className="mt-2">
              {choicesText}{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-brand-plum underline">
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-brand-plum">
              {lang === "ar" ? "التواصل" : "Contact"}
            </h2>
            <p className="mt-2">{contactText}</p>
          </div>

          <p className="rounded-xl bg-brand-cream p-4 text-sm text-brand-charcoal/60">
            {disclaimer}
          </p>
        </div>
      </section>
    </div>
  );
}
