import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { LanguageSection } from "@/sections/Languages";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";


export default function Home() {

  

  return (
    <div className="scroll-smooth" style ={{ scrollBehavior:'smooth' }}>
      <Header />
      <section id="home">
        <HeroSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <LanguageSection />
      <section id="about">
        <AboutSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </div>
  );
}
