import type { Metadata } from "next";
import { DM_Sans, DM_Mono, Poppins, Fraunces } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/Topbar";
import GlobalReveal from "@/components/GlobalReveal";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Muhammad Ahmed — Automation Engineer & AI Agent Builder",
    template: "%s — Muhammad Ahmed",
  },
  description:
    "Muhammad Ahmed is an Automation Engineer specializing in AI-powered workflows, agentic systems, and marketing automation. Based at Zigron, building for the US market.",
  keywords: [
    "automation engineer",
    "AI agent",
    "n8n workflows",
    "agentic AI",
    "marketing automation",
    "Muhammad Ahmed",
    "Zigron",
  ],
  icons: {
    icon: "/my-photo.webp",
    apple: "/my-photo.webp",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Muhammad Ahmed Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${dmMono.variable} ${poppins.variable} ${fraunces.variable} antialiased`}
      >
        <Topbar />
        <GlobalReveal />
        {children}
        <footer className="py-8 px-20 flex justify-between items-center border-t border-[var(--border)] max-w-[1440px] mx-auto">
          <p className="text-[var(--text-tertiary)] text-sm font-[family-name:var(--font-dm-mono)]">
            &copy; 2026 Muhammad Ahmed
          </p>
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/ahmed-m-xii"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-tertiary)] text-sm hover:text-[var(--accent)] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:muhammadahmed@zigron.com"
              className="text-[var(--text-tertiary)] text-sm hover:text-[var(--accent)] transition-colors"
            >
              Email
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
