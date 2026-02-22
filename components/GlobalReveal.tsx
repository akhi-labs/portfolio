"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Global IntersectionObserver that adds "visible" to every .reveal and .stagger
 * element on the page — equivalent to the script.js reveal logic in the HTML version.
 * Re-runs on every route change so new-page elements are always observed.
 */
export default function GlobalReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal, .stagger")
    );
    const observers: IntersectionObserver[] = [];

    els.forEach((el) => {
      if (el.classList.contains("visible")) return; // already triggered

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add("visible");
            observer.disconnect();
          }
        },
        { threshold: 0.08 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [pathname]);

  return null;
}
