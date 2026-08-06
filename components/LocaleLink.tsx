"use client";

import NextLink from "next/link";
import type { ComponentProps } from "react";
import { useLocale } from "./LocaleProvider";

type Props = ComponentProps<typeof NextLink>;

export default function LocaleLink({ href, ...rest }: Props) {
  const { lang } = useLocale();
  let localizedHref = href;

  if (typeof href === "string" && href.startsWith("/") && !href.startsWith("http")) {
    const alreadyLocalized = href === `/${lang}` || href.startsWith(`/${lang}/`);
    localizedHref = alreadyLocalized ? href : `/${lang}${href}`;
  }

  return <NextLink href={localizedHref} {...rest} />;
}
