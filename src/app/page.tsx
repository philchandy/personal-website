import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { LanguageSection } from "@/sections/Languages";
import { AboutSection } from "@/sections/About";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <LanguageSection />
      <AboutSection />
    </div>
  );
}
