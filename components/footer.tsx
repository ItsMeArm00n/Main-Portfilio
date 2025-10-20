"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer id="contact" className="py-8 md:py-10 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-gray-900"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-10 text-center md:text-left">
          {/* Portfolio */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white tracking-wide uppercase">Portfolio</h3>
            <div className="space-y-2">
              <div
                className="text-white/75 hover:text-white transition-colors cursor-pointer"
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </div>
              <div
                className="text-white/75 hover:text-white transition-colors cursor-pointer"
                onClick={() => scrollToSection("certifications")}
              >
                Certifications
              </div>
              <div
                className="text-white/75 hover:text-white transition-colors cursor-pointer"
                onClick={() => scrollToSection("achievements")}
              >
                Achievements
              </div>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white tracking-wide uppercase">About</h3>
            <div className="space-y-2">
              <div
                className="text-white/75 hover:text-white transition-colors cursor-pointer"
                onClick={() => scrollToSection("about")}
              >
                Biography
              </div>
              <div
                className="text-white/75 hover:text-white transition-colors cursor-pointer"
                onClick={() => scrollToSection("skills")}
              >
                Skills
              </div>
              <div
                className="text-white/75 hover:text-white transition-colors cursor-pointer"
                onClick={() => scrollToSection("publications")}
              >
                Publications
              </div>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white tracking-wide uppercase">Let's Connect</h3>
            <p className="text-white/75 mb-4 text-sm">
              Interested in collaborating or learning more about my work? Reach out!
            </p>

            <div className="flex space-x-3 justify-center md:justify-start mb-2">
              <Button
                size="icon"
                className="glass glass-hover rounded-full border-white/20 hover:border-white/40"
                onClick={() => window.open("https://github.com/ItsMeArm00n", "_blank")}
              >
                <Github className="w-5 h-5 text-white" />
              </Button>
              <Button
                size="icon"
                className="glass glass-hover rounded-full border-white/20 hover:border-white/40"
                onClick={() => window.open("https://www.linkedin.com/in/armaan-kumar-631868343", "_blank")}
              >
                <Linkedin className="w-5 h-5 text-white" />
              </Button>
              <Button
                size="icon"
                className="glass glass-hover rounded-full border-white/20 hover:border-white/40"
                onClick={() => window.open("https://huggingface.co/ItsMeArm00n", "_blank")}
              >
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                </svg>
              </Button>
              <Button
                size="icon"
                className="glass glass-hover rounded-full border-white/20 hover:border-white/40"
                onClick={() => window.open("mailto:armaan27armaan@gmail.com ", "_blank")}
              >
                <Mail className="w-5 h-5 text-white" />
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex justify-center items-center pt-4 border-t border-white/10 mt-4">
          <div className="text-white/60 text-xs">
            © 2025 <span className="font-semibold text-white">Armaan Kumar</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
