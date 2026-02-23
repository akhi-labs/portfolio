import Link from "next/link";
import { Metadata } from "next";
import TerminalHero from "@/components/TerminalHero";
import RevealSection from "@/components/RevealSection";
import ContactForm from "@/components/ContactForm";
import { experience, skillCategories } from "@/data/experience";
import { techStack } from "@/data/techstack";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Muhammad Ahmed — Automation Engineer & Agentic Workflows Dev",
  description:
    "Muhammad Ahmed is an Automation Engineer specializing in AI-powered workflows, agentic systems, and marketing automation. Based at Zigron, building for the US market.",
};

export default function HomePage() {
  return (
    <main>
      {/* ═══ HERO ═══ */}
      <TerminalHero />

      <div className="divider" />

      {/* ═══ ABOUT ME ═══ */}
      <RevealSection as="section" className="about">
        <div className="about-badge"><span>About me</span></div>
        <div className="about-photo">
          <img src="/my-photo.webp" alt="Muhammad Ahmed" />
        </div>
        <div className="about-content">
          <h2 className="greeting">Hi, I&apos;m Muhammad Ahmed</h2>
          <p className="bio">
            I&apos;m an Automation Engineer at Zigron, a US-based company where I own the full
            automation stack — from AI voice agents and RAG chatbots to cold email engines,
            LinkedIn outreach, and SEO content pipelines. I don&apos;t just set up tools; I
            architect systems that run themselves.
            <br /><br />
            Before this, I worked with Alibaba in China on international market research and live
            broadcasting, and managed large-scale community and growth operations across Pakistan.
            That cross-industry background means I understand both the technical build and the
            business outcome it needs to drive.
            <br /><br />
            Today I work with clients globally — turning manual, repetitive processes into
            intelligent workflows that scale without headcount.
          </p>
          <p className="spec-title">WHAT I SPECIALIZE IN</p>

          <div className="spec-item">
            <div className="spec-dot" />
            <div>
              <h4>Agentic AI Workflows</h4>
              <p>AI agents and automation systems that run complex, multi-step tasks without human input — voice platforms, RAG chatbots, multi-channel calling agents, content pipelines. Built to replace a department, not just save a few hours.</p>
            </div>
          </div>

          <div className="spec-item">
            <div className="spec-dot" />
            <div>
              <h4>Marketing Automation &amp; Outreach</h4>
              <p>Cold email engines, LinkedIn sequencing, and Meta Ads campaigns that generate qualified leads on autopilot. Lemlist, N8N, and data-driven optimization combine into one predictable outreach machine.</p>
            </div>
          </div>

          <div className="spec-item">
            <div className="spec-dot" />
            <div>
              <h4>SEO Topical Clustering</h4>
              <p>Automated content pipelines that build topical authority — AI drafts pillar posts and cluster articles, applies SEO layers, and publishes directly to WordPress. Your site compounds in organic traffic without manual effort.</p>
            </div>
          </div>
        </div>

      </RevealSection>

      <div className="divider" />

      {/* ═══ ORGANIZATIONS ═══ */}
      <section className="orgs-section">
        <p className="orgs-label">ORGANIZATIONS &amp; PRODUCTS I&apos;VE WORKED WITH</p>
        <div className="orgs-marquee">
          <div className="orgs-track">
            {[...Array(2)].map((_, pass) => (
              <div key={pass} className="orgs-set" aria-hidden={pass === 1}>
                <img src="/orgs/Zigron.png" alt="Zigron" className="org-logo-item" />
                <img src="/orgs/MySentry.AI.png" alt="MySentry.AI" className="org-logo-item" />
                <img src="/orgs/DentaSmart.AI.png" alt="DentaSmart.AI" className="org-logo-item" />
                <img src="/orgs/StressGuru.png" alt="StressGuru.AI" className="org-logo-item" />
                <span className="org-mono-item">KM</span>
                <img src="/orgs/Funoonkadah.png" alt="Funoonkadah" className="org-logo-item" />
                <img src="/orgs/Hireaible.png" alt="Hireaible" className="org-logo-item" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ═══ EXPERIENCE & SKILLS ═══ */}
      <RevealSection as="section" className="experience-skills">
        <p className="section-label">EXPERIENCE &amp; SKILLS</p>
        <div className="section-heading-row">
          <h2 className="section-heading">What I Bring to the Table</h2>
          <div className="line" />
        </div>

        <div className="exp-skills-grid">
          <div className="exp-col">
            {experience.map((entry) => (
              <div key={entry.role} className="exp-card">
                <span className="date">{entry.date}</span>
                <h3 className="role">{entry.role}</h3>
                <p className="company">{entry.company}</p>
                <p className="desc">{entry.description}</p>
                <div className="accent-bar" />
              </div>
            ))}
          </div>

          <div className="skills-col">
            <h3>Skills</h3>
            {skillCategories.map((cat) => (
              <div key={cat.label} className="skill-category">
                <p className="skill-category-label">{cat.label}</p>
                <div className="skill-tags">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      <div className="divider" />

      {/* ═══ TECH STACK ═══ */}
      <RevealSection as="section" className="tech-stack">
        <div className="tech-stack-header">
          <h2>Tech <span className="accent">Stack</span></h2>
          <div className="line" />
        </div>
        <div className="tech-grid stagger">
          {techStack.map((item) => (
            <div key={item.name} className="tech-card">
              <div className="tech-card-icon">
                {item.icon}
              </div>
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </RevealSection>

      <div className="divider" />

      {/* ═══ PROJECTS ═══ */}
      <RevealSection as="section" className="projects">
        <div className="projects-header">
          <h2>Projects</h2>
          <div className="line" />
        </div>
        <div className="project-slider-wrapper">
          <div className="project-grid">
            {projects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="project-card">
                <div className="project-card-img">
                  {project.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={project.image} alt={project.title} className="proj-img" />
                  ) : (
                    <div className="card-ph-inner">
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5}>
                        <rect x={3} y={3} width={18} height={18} rx={2} />
                        <path d="M3 9l4-4 4 4 4-4 4 4" />
                      </svg>
                      <span>PROJECT PREVIEW</span>
                    </div>
                  )}
                </div>
                <div className="project-card-content">
                  <span className="tech">{project.tech.slice(0, 3).join("  ")}</span>
                  <h3>{project.title}</h3>
                  <p className="desc">{project.useCase}</p>
                  <span className="btn">View →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </RevealSection>

      <div className="divider" />

      {/* ═══ CONTACT ═══ */}
      <RevealSection as="section" className="contact-section-home">
        <div className="projects-header">
          <h2>Contact</h2>
          <div className="line" />
        </div>
        <p className="contact-tagline" style={{ marginBottom: "2rem" }}>Got an idea? Let&apos;s make it real.</p>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <ContactForm />
        </div>
      </RevealSection>

    </main>
  );
}
