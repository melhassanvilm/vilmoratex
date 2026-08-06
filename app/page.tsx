"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RootRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    const browserLang = typeof navigator !== "undefined" ? navigator.language : "en";
    const target = browserLang.toLowerCase().startsWith("ar") ? "/ar" : "/en";
    router.replace(target);
  }, [router]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        fontFamily: "sans-serif",
        color: "#4A1942",
        background: "#FBF8F3",
      }}
    >
      <p>Redirecting… / جارٍ التحويل…</p>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Link href="/en" style={{ color: "#4A1942", textDecoration: "underline" }}>
          Continue in English
        </Link>
        <Link href="/ar" style={{ color: "#4A1942", textDecoration: "underline" }}>
          المتابعة بالعربية
        </Link>
      </div>
    </div>
  );
}
