import { siteConfig } from "./site-config";

export function buildWhatsAppLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encoded}`;
}

export function buildProductInquiryMessage(productName: string, url: string) {
  return `Hello VilmoraTex, I'm interested in "${productName}" (${url}). Could you share availability, pricing for bulk orders, and lead time?`;
}

export function buildOrderMessage(params: {
  items: { name: string; qty: number; size?: string; color?: string; price: number }[];
  subtotal: number;
  customerName: string;
  phone: string;
  address: string;
  notes?: string;
}) {
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

export function buildQuoteMessage(params: Record<string, string>) {
  const lines = Object.entries(params)
    .filter(([, v]) => v && v.trim().length > 0)
    .map(([k, v]) => `${k}: ${v}`);
  return ["New quote request from vilmoratex.com", "", ...lines].join("\n");
}
