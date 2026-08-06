"use client";

import { createContext, useContext, useEffect, type ReactNode } from "react";
import type { Locale } from "@/lib/i18n-config";
import { localeDirections } from "@/lib/i18n-config";
import type { Dictionary } from "@/lib/dictionaries";

type LocaleContextValue = { lang: Locale; dict: Dictionary; dir: "ltr" | "rtl" };

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  lang,
  dict,
  children,
}: {
  lang: Locale;
  dict: Dictionary;
  children: ReactNode;
}) {
  const dir = localeDirections[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  return (
    <LocaleContext.Provider value={{ lang, dict, dir }}>
      <div dir={dir}>{children}</div>
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
