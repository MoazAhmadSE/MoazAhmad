import Header from '@/components/header';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import ExperienceSection from '@/components/sections/experience';
import ProjectsSection from '@/components/sections/projects';
import ContactSection from '@/components/sections/contact';
import Footer from '@/components/footer';
import EducationSection from '@/components/sections/education';
import SkillsSection from '@/components/sections/skills';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
