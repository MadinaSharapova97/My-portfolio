import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/about/About";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}
