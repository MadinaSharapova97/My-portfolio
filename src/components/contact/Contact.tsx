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
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-intro">
          <p className="contact-eyebrow">GET IN TOUCH</p>
          <h2 className="contact-title">Let&apos;s Work Together</h2>
          <p className="contact-description">
            Have a project in mind or want to work together? Reach out through
            any of the channels below.
          </p>

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

        <div className="contact-panel">
          <span className="contact-panel-mark" aria-hidden="true">✳</span>
          <p className="contact-panel-eyebrow">OPEN TO OPPORTUNITIES</p>
          <h3>Contact <span>Me!</span></h3>
          <p className="contact-panel-copy">
            I&apos;m always happy to talk about thoughtful design, frontend work,
            and new ideas.
          </p>
          <div className="contact-panel-line" />
          <p className="contact-panel-foot">Madina <span>·</span> Frontend Developer</p>
        </div>
      </div>
    </section>
  );
}
