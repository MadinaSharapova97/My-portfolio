
"use client";

import { useEffect, useRef, useState } from "react";
import "./skills.css";

const skills = [
  { name: "HTML", level: 85 },
  { name: "CSS", level: 80 },
  { name: "JavaScript", level: 65 },
  { name: "TypeScript", level: 55 },
  { name: "React", level: 65 },
  { name: "Next.js", level: 60 },
  { name: "Tailwind CSS", level: 75 },
];

export function Skills() {


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
    <section id="skills"
    ref={sectionRef}
     className={`skills-section h-screen ${isVisible ? "is-visible" : ""}`}>
      <div className="skills-container">
        <h2 className="skills-title reveal-title">Skills</h2>

        <div className="skills-box reveal-progress">
          {skills.map((skill, index) => (
            <div
              className="skill-item"
              key={skill.name}
              style={
                {
                  "--skill-level": `${skill.level}%`,
                  "--skill-delay": `${index * 0.15}s`,
                } as React.CSSProperties
              }
            >
              <div className="skill-info">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              <div className="skill-track">
                <div className="skill-progress" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
