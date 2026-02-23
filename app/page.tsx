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

        <div className="contact-card">
          <ContactForm />

          <div className="contact-divider-v" />

          <div className="contact-socials">
            <a href="https://www.instagram.com/akhi_muhmed" target="_blank" rel="noopener noreferrer" className="social-link social-link--ig">
              <div className="social-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </div>
              <div className="social-text">
                <span className="name">Instagram</span>
                <span className="handle">@akhi_muhmed</span>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/ahmed-m-xii" target="_blank" rel="noopener noreferrer" className="social-link social-link--li">
              <div className="social-icon-wrap">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </div>
              <div className="social-text">
                <span className="name">LinkedIn</span>
                <span className="handle">ahmed-m-xii</span>
              </div>
            </a>

            <a href="https://wa.me/923360017782" target="_blank" rel="noopener noreferrer" className="social-link social-link--wa">
              <div className="social-icon-wrap">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <div className="social-text">
                <span className="name">WhatsApp</span>
                <span className="handle">Direct message</span>
              </div>
            </a>

            <a className="social-link social-link--fv social-link--disabled">
              <div className="social-icon-wrap">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 0H1C.4 0 0 .4 0 1v22c0 .6.4 1 1 1h22c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1zM10.7 17.4c0 1.3-1 2.1-2.5 2.1-1 0-2-.4-2.7-1.1l.8-1.1c.5.5 1.1.8 1.8.8.5 0 .8-.2.8-.6v-.1c0-.5-.6-.7-1.3-.9C6.4 16 5.3 15.4 5.3 14v-.1c0-1.3 1-2.1 2.4-2.1.9 0 1.8.3 2.4.9l-.7 1.1c-.5-.4-1-.7-1.7-.7-.5 0-.7.2-.7.6v.1c0 .5.6.6 1.3.9 1.2.4 2.4 1 2.4 2.6zm5.8-5.5h-1.6V15c0 .6.3.9.9.9.3 0 .5 0 .7-.1v1.4c-.3.1-.7.2-1.1.2-1.4 0-2.2-.7-2.2-2.2v-3.2H12v-1.5h1.2V8.9h1.8v1.6h1.6v1.4z"/>
                </svg>
              </div>
              <div className="social-text">
                <span className="name">Fiverr</span>
                <span className="handle">Hire me on Fiverr</span>
              </div>
            </a>

            <a className="social-link social-link--uw social-link--disabled">
              <div className="social-icon-wrap">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
                </svg>
              </div>
              <div className="social-text">
                <span className="name">Upwork</span>
                <span className="handle">Hire me on Upwork</span>
              </div>
            </a>
          </div>
        </div>
      </RevealSection>
    </main>
  );
}
