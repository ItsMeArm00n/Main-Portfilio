import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { StatsSection } from "@/components/stats-section"
import { SkillsSection } from "@/components/skills-section"
import { Footer } from "@/components/footer"
import { IntroTransition } from "@/components/intro-transition"
export default function HomePage() {
  return (
    <>
      <IntroTransition />
      <Navigation />
      <main className="min-h-screen">
        <div id="home">
          <HeroSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <StatsSection />
        <div id="projects">
          <ProjectsSection />
        </div>
        <div id="experience">
          <ExperienceSection />
        </div>
        <div id="skills">
          <SkillsSection />
        </div>
        <div id="footer">
          <Footer/>
        </div>
      </main>
    </>
  )
}
