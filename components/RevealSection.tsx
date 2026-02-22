"use client";

import { useEffect, useRef, ElementType, ComponentPropsWithRef } from "react";

type Props<T extends ElementType> = {
  as?: T;
  children: React.ReactNode;
  className?: string;
} & Omit<ComponentPropsWithRef<T>, "as" | "children" | "className">;

export default function RevealSection<T extends ElementType = "div">({
  as,
  children,
  className = "",
  ...rest
}: Props<T>) {
  const ref = useRef<HTMLElement>(null);
  const Tag = (as ?? "div") as ElementType;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
