"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type WishlistContextValue = {
  slugs: string[];
  toggle: (slug: string) => void;
  has: (slug: string) => boolean;
};

const WishlistContext = createContext<WishlistContextValue | null>(null);
const STORAGE_KEY = "vilmoratex_wishlist_v1";

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [slugs, setSlugs] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time hydration from localStorage after mount, required to avoid an SSR/client markup mismatch
      if (raw) setSlugs(JSON.parse(raw));
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(slugs));
  }, [slugs, hydrated]);

  const toggle = (slug: string) => {
    setSlugs((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]));
  };

  const has = (slug: string) => slugs.includes(slug);

  return (
    <WishlistContext.Provider value={{ slugs, toggle, has }}>{children}</WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
  return ctx;
}
