"use client";

import { useEffect, useRef } from "react";

const BOOT_LINES = [
  { text: "INITIALIZING SYSTEM...", delay: 0 },
  { text: "LOADING MODULES: n8n · python · react · elevenlabs", delay: 300 },
  { text: "CONNECTING TO AUTOMATION ENGINE...", delay: 700 },
  { text: "ESTABLISHING SECURE CHANNEL...", delay: 1100 },
  { text: "OPERATOR IDENTIFIED", delay: 1500, accent: true },
];

interface LogoEntry {
  src: string;
  invert?: boolean;
  style: React.CSSProperties;
}

const LOGOS: LogoEntry[] = [
  // Left column
  { src: "/logos/n8n_logo-white.svg",                  style: { width: 85,  top: "16%", left: "5%",   animationDelay: "0s",   animationDuration: "6.5s" } },
  { src: "/logos/slack-logo-svgrepo-com.svg",          style: { width: 65,  top: "30%", left: "14%",  animationDelay: "0.5s", animationDuration: "7s"   }, invert: true },
  { src: "/logos/supabase-logo-wordmark--dark.svg",    style: { width: 105, top: "46%", left: "4%",   animationDelay: "1s",   animationDuration: "8s"   } },
  { src: "/logos/notion-svgrepo-com.svg",              style: { width: 60,  top: "62%", left: "14%",  animationDelay: "1.5s", animationDuration: "6s"   } },
  { src: "/logos/python-svgrepo-com.svg",              style: { width: 55,  top: "76%", left: "6%",   animationDelay: "0.8s", animationDuration: "7.5s" } },
  { src: "/logos/react-svgrepo-com.svg",               style: { width: 55,  top: "88%", left: "16%",  animationDelay: "1.8s", animationDuration: "6.5s" } },
  // Right column
  { src: "/logos/vercel-logotype-light.svg",           style: { width: 95,  top: "18%", right: "5%",  animationDelay: "0.3s", animationDuration: "7s"   }, invert: true },
  { src: "/logos/linkedin-1-svgrepo-com.svg",          style: { width: 60,  top: "32%", right: "14%", animationDelay: "0.9s", animationDuration: "6s"   } },
  { src: "/logos/nextjs-logotype-dark-background.svg", style: { width: 95,  top: "46%", right: "4%",  animationDelay: "1.3s", animationDuration: "7.5s" } },
  { src: "/logos/figma-svgrepo-com.svg",               style: { width: 55,  top: "62%", right: "15%", animationDelay: "0.6s", animationDuration: "8s"   } },
  { src: "/logos/vs-code-svgrepo-com.svg",             style: { width: 58,  top: "76%", right: "6%",  animationDelay: "1.7s", animationDuration: "6.5s" } },
  { src: "/logos/discord-svgrepo-com.svg",             style: { width: 58,  top: "88%", right: "17%", animationDelay: "1.1s", animationDuration: "7s"   } },
  // Top edge
  { src: "/logos/google-color-svgrepo-com.svg",        style: { width: 70,  top: "6%",  left: "27%",  animationDelay: "0.4s", animationDuration: "7s"   } },
  { src: "/logos/mailchimp-svgrepo-com.svg",           style: { width: 65,  top: "5%",  left: "42%",  animationDelay: "1.2s", animationDuration: "6s"   } },
  { src: "/logos/instagram-2016-logo-svgrepo-com.svg", style: { width: 52,  top: "7%",  right: "26%", animationDelay: "0.7s", animationDuration: "8s"   } },
  { src: "/logos/buffer-color-svgrepo-com.svg",        style: { width: 60,  top: "5%",  right: "40%", animationDelay: "1.6s", animationDuration: "7.5s" } },
  // Bottom edge
  { src: "/logos/node-js-svgrepo-com.svg",             style: { width: 70,  top: "88%", left: "28%",  animationDelay: "0.2s", animationDuration: "6.5s" } },
  { src: "/logos/js-svgrepo-com.svg",                  style: { width: 52,  top: "90%", left: "42%",  animationDelay: "1.4s", animationDuration: "7s"   } },
  { src: "/logos/npm-svgrepo-com.svg",                 style: { width: 65,  top: "89%", right: "41%", animationDelay: "0.6s", animationDuration: "8s"   } },
  { src: "/logos/rss-color-svgrepo-com.svg",           style: { width: 48,  top: "88%", right: "28%", animationDelay: "1.9s", animationDuration: "6s"   } },
  // Scattered mid
  { src: "/logos/drive-color-svgrepo-com.svg",         style: { width: 55,  top: "38%", left: "20%",  animationDelay: "2s",   animationDuration: "7s"   } },
  { src: "/logos/blogger-color-svgrepo-com.svg",       style: { width: 52,  top: "60%", left: "21%",  animationDelay: "1.3s", animationDuration: "6.5s" } },
  { src: "/logos/pinterest-color-svgrepo-com.svg",     style: { width: 52,  top: "38%", right: "21%", animationDelay: "2.2s", animationDuration: "7.5s" } },
  { src: "/logos/tor-svgrepo-com.svg",                 style: { width: 55,  top: "60%", right: "22%", animationDelay: "1.6s", animationDuration: "6s"   } },
  { src: "/logos/linux-svgrepo-com.svg",               style: { width: 52,  top: "50%", left: "21%",  animationDelay: "2.4s", animationDuration: "7s"   } },
  { src: "/logos/docker-svgrepo-com.svg",              style: { width: 58,  top: "50%", right: "22%", animationDelay: "1.9s", animationDuration: "6.5s" } },
];

export default function TerminalHero() {
  const linesRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = linesRef.current;
    const card = cardRef.current;
    if (!el || !card) return;

    const timeouts: ReturnType<typeof setTimeout>[] = [];

    BOOT_LINES.forEach(({ text, delay, accent }) => {
      const t = setTimeout(() => {
        const line = document.createElement("p");
        line.className = "terminal-boot-line" + (accent ? " terminal-boot-accent" : "");
        line.textContent = "> " + text;
        el.appendChild(line);

        if (accent) {
          const t2 = setTimeout(() => {
            card.classList.add("terminal-card--visible");
          }, 300);
          timeouts.push(t2);
        }
      }, delay);
      timeouts.push(t);
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <section className="hero-terminal">
      {LOGOS.map((logo, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={i}
          src={logo.src}
          className={"hero-logo" + (logo.invert ? " hero-logo--invert" : "")}
          style={logo.style}
          alt=""
          aria-hidden="true"
        />
      ))}

      <div className="terminal-wrap">
        <div className="terminal-lines" ref={linesRef} />
        <div className="terminal-card" ref={cardRef}>
          <div className="terminal-name-block">
            <p className="tname-heading">Muhammad Ahmed&apos;s</p>
            <p className="tname-portfolio">Portfolio</p>
            <p className="tname-role">Automation Engineer &amp; Agentic AI Workflows Dev</p>
          </div>
          <p className="terminal-sub">[ portfolio &middot; 2026 ]</p>
        </div>
        <span className="terminal-cursor">█</span>
      </div>
      <div className="terminal-scroll-hint">SCROLL</div>
    </section>
  );
}
