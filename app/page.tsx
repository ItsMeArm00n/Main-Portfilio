import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import CertificationsSection from "@/components/certifications-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import AchievementsSection from "@/components/achievements-section"
import InternshipsExperienceSection from "@/components/internships-experience-section"
import LeadershipSection from "@/components/leadership-section"
import PortfolioSection from "@/components/portfolio-section"
import OngoingProjectsSection from "@/components/ongoing-projects-section"
import PublicationsSection from "@/components/publications-section"
import Footer from "@/components/footer"
import ScrollFadeWrapper from "@/components/scroll-fade-wrapper"
import WelcomePopup from "@/components/welcome-popup"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <WelcomePopup />
      <Navbar />

      <ScrollFadeWrapper delay={100}>
        <HeroSection />
      </ScrollFadeWrapper>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

      <ScrollFadeWrapper delay={200}>
        <AboutSection />
      </ScrollFadeWrapper>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

      <ScrollFadeWrapper delay={250}>
        <CertificationsSection />
      </ScrollFadeWrapper>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

      <ScrollFadeWrapper delay={350}>
        <SkillsSection />
      </ScrollFadeWrapper>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

      <ScrollFadeWrapper delay={450}>
        <AchievementsSection />
      </ScrollFadeWrapper>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

        <ScrollFadeWrapper delay={475}>
          <InternshipsExperienceSection />
        </ScrollFadeWrapper>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

      <ScrollFadeWrapper delay={490}>
        <LeadershipSection />
      </ScrollFadeWrapper>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

      <ScrollFadeWrapper delay={500}>
        <PortfolioSection />
      </ScrollFadeWrapper>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

      <ScrollFadeWrapper delay={550}>
        <OngoingProjectsSection />
      </ScrollFadeWrapper>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

      <ScrollFadeWrapper delay={650}>
        <PublicationsSection />
      </ScrollFadeWrapper>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

      <ScrollFadeWrapper delay={700}>
        <Footer />
      </ScrollFadeWrapper>
    </main>
  )
}
