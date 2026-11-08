'use client';

import { useEffect, useRef, useState } from "react";
import "./contact.css";

// Replace these four values with your own contact details.

const contactItems = [
  {
    label: "Phone",
    value: "+998 XX XXX XX XX",
    href: "tel:+998XXXXXXXXX",
    icon: "phone",
  },
  {
    label: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
    icon: "email",
  },
  {
    label: "Instagram",
    value: "@yourusername",
    href: "https://instagram.com/yourusername",
    icon: "instagram",
  },
  {
    label: "Telegram",
    value: "@yourusername",
    href: "https://t.me/yourusername",
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
  return <><path d="M21 5.5 18 20l-5.2-4-2.8 2.7.4-5.3L19 6.2 8 12l-5-1.7 18-7.1Z" /></>;
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
