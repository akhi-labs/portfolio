import Link from "next/link";
import { Metadata } from "next";
import ProjectFlowchart from "@/components/ProjectFlowchart";
import { flowcharts } from "@/data/flowcharts";

export const metadata: Metadata = {
  title: "Meta Ads — Paid Marketing",
  description:
    "End-to-end Meta Ads campaign management for lead generation — audience research, creative strategy, A/B testing, and CPL optimisation.",
};

const FEATURES = [
  {
    icon: "01",
    title: "Audience Research & ICP Targeting",
    desc: "Define your ideal customer profile, build custom audiences, and layer interest, behaviour, and lookalike targeting for precision reach.",
  },
  {
    icon: "02",
    title: "Campaign Architecture & Setup",
    desc: "Structure campaigns with the right objectives, ad sets, and bid strategies — awareness, lead gen, or conversion campaigns built to scale.",
  },
  {
    icon: "03",
    title: "Ad Creative Direction",
    desc: "Copy angles, visual briefs, and CTA optimisation that speak to pain points and drive action. Multiple creative variations per launch.",
  },
  {
    icon: "04",
    title: "A/B Testing Framework",
    desc: "Systematic split tests across audiences, creatives, and copy. Data-driven decisions at every stage — no guesswork.",
  },
  {
    icon: "05",
    title: "CPL & ROAS Optimisation",
    desc: "Weekly budget allocation, bid adjustments, and audience refinement to reduce cost per lead and improve return on ad spend.",
  },
  {
    icon: "06",
    title: "Performance Reporting",
    desc: "Clear weekly reports with metrics that matter — CPL, ROAS, lead volume, and prioritised next steps.",
  },
];

export default function PaidMarketingPage() {
  return (
    <main style={{ paddingTop: 60 }}>

      {/* ── BACK LINK — uses project-detail wrapper for max-width alignment ── */}
      <div className="project-detail">
        <Link href="/projects" className="back-link">← Back to Projects</Link>
      </div>

      {/* ── HERO ── */}
      <div className="ma-hero reveal">
        <div className="ma-hero-inner">
          <div className="ma-hero-left">
            <span className="ma-badge">META ADS · PAID MARKETING</span>
            <h1>Lead Generation<br />via Meta Ads</h1>
            <p className="ma-sub">
              Full-service paid media management — from ICP research and audience
              targeting to creative direction, A/B testing, and ongoing CPL
              optimisation. I manage the whole funnel so you get qualified leads,
              not just clicks.
            </p>
            <div className="ma-actions">
              <Link href="/contact" className="btn-primary">Get a Quote →</Link>
              <Link href="/services" className="btn-outline">All Services</Link>
            </div>
          </div>

          <div className="ma-hero-stats">
            <div className="ma-stat">
              <span className="ma-stat-value">A/B</span>
              <span className="ma-stat-label">Creative & Audience Testing</span>
            </div>
            <div className="ma-stat">
              <span className="ma-stat-value">CPL↓</span>
              <span className="ma-stat-label">Cost Per Lead Optimisation</span>
            </div>
            <div className="ma-stat">
              <span className="ma-stat-value">Meta</span>
              <span className="ma-stat-label">Facebook & Instagram Ads</span>
            </div>
            <div className="ma-stat">
              <span className="ma-stat-value">Full</span>
              <span className="ma-stat-label">End-to-End Management</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── WHAT'S INCLUDED ── */}
      <div className="ma-section reveal">
        <div className="ma-section-head">
          <p className="label">WHAT YOU GET</p>
          <h2>Everything Needed to Run Ads That Convert</h2>
        </div>
        <div className="ma-features">
          {FEATURES.map((f) => (
            <div key={f.icon} className="ma-feature-card">
              <span className="ma-feature-num">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── PROCESS FLOWCHART ── */}
      <div className="ma-section">
        <div className="ma-section-head reveal">
          <p className="label">SERVICE PROCESS</p>
          <h2>How a Campaign Is Built</h2>
        </div>
        <ProjectFlowchart sections={flowcharts["paid-marketing"]} />
      </div>

      {/* ── PAST CLIENT ── */}
      <div className="ma-client reveal">
        <p className="label" style={{ marginBottom: 20 }}>PAST CLIENT WORK</p>
        <div className="ma-client-card">
          <div className="ma-client-left">
            <span className="ma-client-chip">Japanese Language Institute</span>
            <h3>Lead Generation for Language School Enrollment</h3>
            <p>
              Managed a full Meta Ads campaign for a Japanese language institute targeting
              prospective students. The scope included audience research, ad creative design,
              campaign architecture, and multiple rounds of A/B testing across creatives and
              audiences. Ongoing weekly CPL optimisation reduced cost-per-enrollment inquiry
              consistently across the campaign lifecycle.
            </p>
          </div>
          <div className="ma-client-tags">
            <span>Audience Research</span>
            <span>Ad Creative</span>
            <span>A/B Testing</span>
            <span>CPL Optimisation</span>
            <span>Campaign Management</span>
          </div>
        </div>
      </div>

      {/* ── CTA BANNER ── */}
      <div className="ma-cta reveal">
        <h2>Ready to Run Ads That Actually Convert?</h2>
        <p>Tell me about your product and target audience — I&apos;ll build the campaign.</p>
        <Link href="/contact" className="btn-primary">Start a Campaign →</Link>
      </div>

      <div className="project-footer">
        <Link href="/projects">← All Projects</Link>
        <Link href="/services" className="next">Services →</Link>
      </div>
    </main>
  );
}
