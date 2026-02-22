import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Muhammad Ahmed — Automation Engineer. Let's discuss your next automation project.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ContactPage() {
  return (
    <main>
      <div className="contact-page">
        <h1 className="contact-headline reveal">Contact</h1>
        <p className="contact-tagline reveal">Got an idea? Let&apos;s make it real.</p>

        <div className="contact-card reveal">
          <ContactForm />

          <div className="contact-divider-v" />

          <div className="contact-socials">
            <h3>Connect with me</h3>
            <p className="sub">Available for new projects &amp; collaborations</p>

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

          <div className="contact-footer">
            <span>&copy; 2026 Muhammad Ahmed — All rights reserved.</span>
            <span className="legal">Privacy · Terms · Cookies</span>
          </div>
        </div>
      </div>
    </main>
  );
}
