import { siteConfig } from "./site-config";
import type { Locale } from "./i18n-config";

export function buildWhatsAppLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encoded}`;
}

export function buildProductInquiryMessage(productName: string, url: string, lang: Locale = "en") {
  if (lang === "ar") {
    return `أهلاً فيلمورا تكس، أنا مهتم بمنتج "${productName}" (${url}). ممكن تفيدوني بالتوفر والأسعار للكميات والمدة اللازمة للتنفيذ؟`;
  }
  return `Hello VilmoraTex, I'm interested in "${productName}" (${url}). Could you share availability, pricing for bulk orders, and lead time?`;
}

export function buildOrderMessage(params: {
  items: { name: string; qty: number; size?: string; color?: string; price: number }[];
  subtotal: number;
  customerName: string;
  phone: string;
  address: string;
  notes?: string;
  lang?: Locale;
}) {
  const lang = params.lang ?? "en";
  if (lang === "ar") {
    const lines = params.items.map(
      (i) =>
        `• ${i.name}${i.size ? ` (المقاس: ${i.size})` : ""}${i.color ? ` (اللون: ${i.color})` : ""} × ${i.qty} — ${(
          i.price * i.qty
        ).toLocaleString("ar-EG")} ج.م`
    );
    return [
      "طلب جديد من vilmoratex.com",
      "",
      `الاسم: ${params.customerName}`,
      `الهاتف: ${params.phone}`,
      `العنوان: ${params.address}`,
      "",
      "الأصناف:",
      ...lines,
      "",
      `الإجمالي: ${params.subtotal.toLocaleString("ar-EG")} ج.م`,
      "طريقة الدفع: الدفع عند الاستلام",
      params.notes ? `ملاحظات: ${params.notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");
  }
  const lines = params.items.map(
    (i) =>
      `• ${i.name}${i.size ? ` (Size: ${i.size})` : ""}${i.color ? ` (Color: ${i.color})` : ""} x${i.qty} — EGP ${(
        i.price * i.qty
      ).toLocaleString("en-US")}`
  );
  return [
    "New order from vilmoratex.com",
    "",
    `Customer: ${params.customerName}`,
    `Phone: ${params.phone}`,
    `Address: ${params.address}`,
    "",
    "Items:",
    ...lines,
    "",
    `Subtotal: EGP ${params.subtotal.toLocaleString("en-US")}`,
    "Payment: Cash on Delivery",
    params.notes ? `Notes: ${params.notes}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

export function buildQuoteMessage(params: Record<string, string>, lang: Locale = "en") {
  const lines = Object.entries(params)
    .filter(([, v]) => v && v.trim().length > 0)
    .map(([k, v]) => `${k}: ${v}`);
  const heading =
    lang === "ar" ? "طلب عرض سعر جديد من vilmoratex.com" : "New quote request from vilmoratex.com";
  return [heading, "", ...lines].join("\n");
}
