import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/about/About";
import { Skills } from "@/components/skills/Skills";
import { Projects } from "@/components/projects/Projects";
import { Contact } from "@/components/contact/Contact";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
