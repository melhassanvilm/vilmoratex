import type { Locale } from "./i18n-config";

const dictionaries = {
  en: () =>
    Promise.all([
      import("@/locales/en/common.json").then((m) => m.default),
      import("@/locales/en/homepage.json").then((m) => m.default),
      import("@/locales/en/products.json").then((m) => m.default),
      import("@/locales/en/services.json").then((m) => m.default),
    ]).then(([common, homepage, products, services]) => ({
      common,
      homepage,
      products,
      services,
    })),
  ar: () =>
    Promise.all([
      import("@/locales/ar/common.json").then((m) => m.default),
      import("@/locales/ar/homepage.json").then((m) => m.default),
      import("@/locales/ar/products.json").then((m) => m.default),
      import("@/locales/ar/services.json").then((m) => m.default),
    ]).then(([common, homepage, products, services]) => ({
      common,
      homepage,
      products,
      services,
    })),
};

export type Dictionary = Awaited<ReturnType<(typeof dictionaries)["en"]>>;

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
