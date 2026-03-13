import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { WorkExperienceSection } from "@/components/sections/WorkExperienceSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { WorkshopsSection } from "@/components/sections/WorkshopsSection";
import { LeadershipSection } from "@/components/sections/LeadershipSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { AIPipelineSection } from "@/components/sections/AIPipelineSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <WorkExperienceSection />
      <ExperienceSection />
      <CertificationsSection />
      <WorkshopsSection />
      <LeadershipSection />
      <EducationSection />
      <AIPipelineSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
