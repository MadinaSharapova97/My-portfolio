"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "./about.css";

export function About() {
  const sectionRef = useRef(null);
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
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`about-section h-screen ${isVisible ? "is-visible" : ""}`}
    >
      <div className="about-container">
        {/* LEFT SIDE — CONTENT */}

        <div className="about-visual">
          <div className="about-image-wrapper reveal-image">
            <div className="about-image-glow" />

            <div className="about-image-circle">
              <Image
                src="/images/profile/Madina1.png"
                alt="Madina, Frontend Developer"
                fill
                sizes="(max-width: 767px) 220px, (max-width: 1024px) 280px, 340px"
                className="about-image"
              />
            </div>

            <span className="about-image-ring" />
          </div>
        </div>



        {/* RIGHT SIDE — PORTRAIT */}
        <div className="about-content">
          <h2 className="about-title reveal-title">
            About <span>Me.</span>
          </h2>

          <div className="about-description reveal-description">
            <p>
              Hi, I&apos;m Madina — a frontend developer passionate about
              creating modern, visually appealing, and user-friendly websites.
            </p>

            <p>
              I enjoy turning ideas into clean, responsive interfaces that
              look great and work smoothly across different devices. I work
              with HTML, CSS, JavaScript, TypeScript, React, Next.js, and
              Tailwind CSS, focusing on responsive design and intuitive
              user experiences.
            </p>

            <p>
              I&apos;m responsible, self-motivated, and always eager to learn.
              My goal is to create web experiences that combine thoughtful
              design, usability, and functionality.
            </p>
          </div>

          <div className="about-skills reveal-skills">
            <span>Responsive Design</span>
            <span>Clean Code</span>
            <span>Continuous Learning</span>
          </div>
        </div>
      </div>
    </section>
  );
}