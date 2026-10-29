
"use client";

import { useEffect, useRef, useState } from "react";
import "./projects.css";

const projects = [
  {
    title: "Madina Portfolio",
    description:
      "A personal portfolio showcasing my frontend skills and projects.",
    image: "/images/projects/burger2.jpg",
    demo: "#",
    github: "#",
  },
  {
    title: "Pattify",
    description:
      "A sewing pattern platform designed to make finding styles easier.",
    image: "/images/projects/pattify.jpg",
    demo: "#",
    github: "#",
  },
  {
    title: "Creative Store",
    description:
      "A responsive e-commerce interface with a modern shopping experience.",
    image: "/images/projects/creative-store.jpg",
    demo: "#",
    github: "#",
  },
  {
    title: "Explore Uzbekistan",
    description:
      "A landing page introducing the beauty and destinations of Uzbekistan.",
    image: "/images/projects/Uzbekistan.jpg",
    demo: "#",
    github: "#",
  },
];

function ExternalIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="19"
      height="19"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 3h7v7" />
      <path d="M10 14 21 3" />
      <path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="19"
      height="19"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.77 1.52 3.02 1.16.1-.73.4-1.22.7-1.5-2.48-.28-5.1-1.24-5.1-5.52 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.1-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.16 1.78 1.16 3 0 4.29-2.63 5.24-5.12 5.51.4.35.75 1.03.75 2.08v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`projects-section ${isVisible ? "is-visible" : ""}`}
    >
      <div className="projects-container">
        <h2 className="projects-title">View My Work</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="project-card"
              style={
                {
                  "--card-delay": `${index * 0.15}s`,
                } as React.CSSProperties
              }
            >
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="project-image"
                loading="lazy"
              />

              <div className="project-overlay">
                <div className="project-details">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-links">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.title} live demo`}
                      title="Live Demo"
                    >
                      <ExternalIcon />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} source code on GitHub`}
                      title="GitHub"
                    >
                      <GithubIcon />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
