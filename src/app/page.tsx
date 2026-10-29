import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
