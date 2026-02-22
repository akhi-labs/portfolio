import { Metadata } from "next";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Automation & AI Agents, SEO Topical Authority, Meta Ads, and Python Scripting — services by Muhammad Ahmed.",
};

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero reveal">
        <h1>What I Do</h1>
        <p className="sub">Automation engineering and digital marketing — two disciplines, one system.</p>
      </section>

      <section className="services-grid">
        {services.map((svc) => (
          <article key={svc.num} className="service-card reveal">
            <h2>{svc.title}</h2>
            <p className="svc-desc">{svc.description}</p>
            <div className="svc-tags">
              {svc.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
