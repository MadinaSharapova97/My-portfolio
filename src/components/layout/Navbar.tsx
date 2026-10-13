
"use client";

import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";
import "./navbar.css";

const navigationItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const isLight = theme === "light";

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <nav
        aria-label="Main navigation"
        className="navbar-container"
      >
        <a
          href="#home"
          className="portfolio-name nav-logo"
          onClick={closeMenu}
        >
          Madina.
        </a>

        <div className="desktop-navigation">
          {navigationItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className={`link-animation nav-reveal nav-item-${index + 1}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="navbar-actions">
          <button
            type="button"
            className="theme-toggle nav-reveal nav-item-5"
            onClick={toggleTheme}
            aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
            title={isLight ? "Dark mode" : "Light mode"}
          >
            {isLight ? (
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M20.5 15.5A8.5 8.5 0 0 1 8.5 3.5 8.5 8.5 0 1 0 20.5 15.5Z" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
              </svg>
            )}
          </button>

          <button
            type="button"
            className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`mobile-navigation ${menuOpen ? "menu-open" : ""}`}
          aria-hidden={!menuOpen}
          inert={!menuOpen}
        >
          {navigationItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className={`mobile-nav-link mobile-item-${index + 1}`}
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
            >
              {item.label}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
