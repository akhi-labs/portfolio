"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Topbar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className="flex items-center justify-center gap-5 sm:gap-8 px-5 sm:px-10 py-3 sm:py-4"
        style={{
          background: "rgba(10,10,10,0.8)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
        aria-label="Primary"
      >
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="relative text-sm font-medium transition-colors duration-200"
            style={{
              color: isActive(href)
                ? "var(--accent)"
                : "var(--text-secondary)",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            {label}
            {isActive(href) && (
              <span
                className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full"
                style={{ background: "var(--accent)" }}
              />
            )}
          </Link>
        ))}
      </nav>
    </header>
  );
}
