'use client';

import { useEffect, useRef, useState } from "react";
import "./contact.css";

// Replace these four values with your own contact details.

const contactItems = [
  {
    label: "Phone",
    value: "+998 88 308 97 27",
    href: "+998883089727",
    icon: "phone",
  },
  {
    label: "Email",
    value: "madinasharopova308@gmail.com",
    href: "madinasharopova308@gmail.com",
    icon: "email",
  },
  {
    label: "Github",
    value: "https://github.com/MadinaSharapova97",
    href: "https://github.com/MadinaSharapova97",
    icon: "github",
  },
  {
    label: "Instagram",
    value: "madina5018336",
    href: "https://www.instagram.com/madina5018336?obrf=MXY2bTJzYTJiMHVzeg==",
    icon: "instagram",
  },
  {
    label: "Telegram",
    value: "@Madina_Sharopova",
    href: "https://t.me/Madina_Sharopova",
    icon: "telegram",
  },
];

function ContactIcon({ name }: { name: string }) {
  if (name === "phone") {
    return <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.32.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.6 21 3 13.4 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.26.2 2.46.57 3.58a1 1 0 0 1-.25 1.02l-2.22 2.2Z" />;
  }

  if (name === "email") {
    return <><path d="M3 6.5 12 13l9-6.5" /><rect x="3" y="5" width="18" height="14" rx="2" /></>;
  }

  if (name === "instagram") {
    return <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>;
  }

  if (name === "github") {
    return (
      <path
        d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
      />
    );
  }

  return <path d="M21 5.5 18 20l-5.2-4-2.8 2.7.4-5.3L19 6.2 8 12l-5-1.7 18-7.1Z" />;
}

export function Contact() {

  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);


  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`contact-section ${isVisible ? "is-visible" : ""}`}
    >
      <div className="contact-reveal">
        <div className="contact-container">
          {/* left side */}
          <div className="contact-intro">
            <h2 className="contact-title">Let&apos;s Work Together</h2>

            <ul className="contact-list" aria-label="Contact details">
              {contactItems.map((item) => (
                <li key={item.label}>
                  <span className="contact-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <ContactIcon name={item.icon} />
                    </svg>
                  </span>
                  <div className="contact-item-copy">
                    <span className="contact-label">{item.label}</span>
                    <a
                      href={item.href}
                      target={item.href.startsWith("https:") ? "_blank" : undefined}
                      rel={item.href.startsWith("https:") ? "noreferrer" : undefined}
                    >
                      {item.value}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>


          {/* Right side — Contact Form */}
          <div className="contact-panel">
            <div className="contact-form-header">
              <h3>
                Send Me a <span>Message</span>
              </h3>
            </div>

            <form
              className="contact-form"
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
            >
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    placeholder="Enter your name"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    placeholder="Enter your email"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  placeholder="What is this about?"
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Write your message here..."
                  rows={5}
                  required
                />
              </div>

              <button type="submit" className="contact-submit">
                Send Message
                <span aria-hidden="true">↗</span>
              </button>


            </form>
          </div>
        </div>
      </div>


    </section>
  );
}
