
import Image from "next/image";
import "./hero.css";

export function Hero() {
  return (
    <section
      id="home"
      className="hero-section relative isolate min-h-screen overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/images/profile/Madina1.png"
        alt="Madina, Frontend Developer"
        fill
        priority
        sizes="100vw"
        className="hero-image -z-20 object-cover"
      />

      {/* Theme-aware overlay */}
      <div className="hero-overlay absolute inset-0 -z-10" />

      {/* Hero content */}
      <div className="mx-auto flex min-h-screen w-full max-w-6xl items-center px-5 pb-16 pt-28 sm:px-8 lg:px-8">
        <div className="main-info w-full max-w-2xl">
          <h1 className="hero-title reveal-right reveal-2">
            Hi, I&apos;m Madina
          </h1>

          <div className="text-animate reveal-right reveal-3">
            <h3 className="home-info">
              Frontend Developer
            </h3>
          </div>

          <p className="hero-description reveal-right reveal-4 mt-3 max-w-xl">
            I create modern, fast, and user-friendly websites
          </p>

          <a
            href="#projects"
            className="btn reveal-right reveal-5 mt-5"
          >
            View my work
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
