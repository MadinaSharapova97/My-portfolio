import Image from "next/image";
import "./hero.css"

export function Hero() {
  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden bg-[#09090b]">
      <Image
        src="/images/profile/Madina.png"
        alt="Madina, Frontend Developer"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[68%_center]"
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#07141f]/92 via-[#0b2434]/80 via-37% to-transparent" />

      <div className="mx-auto flex min-h-screen max-w-6xl items-center px-6 pb-16 pt-28 lg:px-8">
        <div className="max-w-2xl main-info">

          <h1 className="text-4xl font-semibold relative inline-block w-[350px] sm:text-5xl lg:text-6xl">
            {/* Hi, It&apos;s Madina */}
            Hi, It's Madina
          </h1>
          <div className="text-animate">
            <h3 className="home-info mt-2">Frontend Developer</h3>
          </div>
          <p className="mt-3 max-w-xl text-lg leading-8 text-zinc-300 sm:text-xl">
            I create modern, fast, and user-friendly websites
          </p>
          <a
            href="#projects"
            className="btn mt-4"
          >
            View my work <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
