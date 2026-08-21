import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Research from "@/components/sections/Research";
import Certifications from "@/components/sections/Certifications";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center overflow-x-hidden">
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Research />
      <Certifications />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
