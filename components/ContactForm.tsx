"use client";

export default function ContactForm() {
  return (
    <div className="contact-form">
      <h3>Drop me a message</h3>
      <p className="sub">I&apos;ll get back to you within 24 hours.</p>

      <form action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="669ad038-9c2d-442a-b8b9-cf2137997f39" />
        <input type="hidden" name="subject" value="New message from Portfolio" />
        <input type="hidden" name="redirect" value="false" />
        <div className="form-group">
          <label htmlFor="name">NAME</label>
          <input type="text" id="name" name="name" placeholder="Muhammad Ahmed" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">EMAIL</label>
          <input type="email" id="email" name="email" placeholder="hello@example.com" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">MESSAGE</label>
          <textarea id="message" name="message" placeholder="Tell me about your project..." required />
        </div>

        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
}
