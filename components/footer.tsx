"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer id="contact" className="py-12 md:py-16 relative border-t border-white/10 bg-black font-sans">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-12 text-center md:text-left">
          {/* Portfolio */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white tracking-wide uppercase bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 w-fit mx-auto md:mx-0 font-heading">
              Portfolio
            </h3>
            <div className="space-y-3">
              <div
                className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer text-sm md:text-base font-medium tracking-wide"
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </div>
              <div
                className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer text-sm md:text-base font-medium tracking-wide"
                onClick={() => scrollToSection("certifications")}
              >
                Certifications
              </div>
              <div
                className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer text-sm md:text-base font-medium tracking-wide"
                onClick={() => scrollToSection("achievements")}
              >
                Achievements
              </div>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white tracking-wide uppercase bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 w-fit mx-auto md:mx-0 font-heading">
              About
            </h3>
            <div className="space-y-3">
              <div
                className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer text-sm md:text-base font-medium tracking-wide"
                onClick={() => scrollToSection("about")}
              >
                Biography
              </div>
              <div
                className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer text-sm md:text-base font-medium tracking-wide"
                onClick={() => scrollToSection("skills")}
              >
                Skills
              </div>
              <div
                className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer text-sm md:text-base font-medium tracking-wide"
                onClick={() => scrollToSection("publications")}
              >
                Publications
              </div>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white tracking-wide uppercase bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-500 w-fit mx-auto md:mx-0 font-heading">
              Let's Connect
            </h3>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed font-light tracking-wide">
              Interested in collaborating or learning more about my work? Reach out!
            </p>

            <div className="flex space-x-4 justify-center md:justify-start">
              <Button
                size="icon"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gray-500 hover:text-gray-300 rounded-full transition-all duration-300 hover:scale-110"
                onClick={() => window.open("https://github.com/ItsMeArm00n", "_blank")}
              >
                <Github className="w-5 h-5 text-white group-hover:text-current" />
              </Button>
              <Button
                size="icon"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500 hover:text-blue-400 rounded-full transition-all duration-300 hover:scale-110"
                onClick={() => window.open("https://www.linkedin.com/in/armaan-kumar-631868343", "_blank")}
              >
                <Linkedin className="w-5 h-5 text-white group-hover:text-current" />
              </Button>
              
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="icon"
                      className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-yellow-500 hover:text-yellow-400 rounded-full transition-all duration-300 hover:scale-110"
                      onClick={() => window.open("https://huggingface.co/ItsMeArm00n", "_blank")}
                    >
                      <svg className="w-5 h-5 text-white group-hover:text-current" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                      </svg>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="z-50 bg-gray-900 text-white border-white/20">
                    <p>This is Hugging Face</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <Button
                size="icon"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-500 hover:text-red-400 rounded-full transition-all duration-300 hover:scale-110"
                onClick={() => window.open("mailto:armaan27armaan@gmail.com", "_blank")}
              >
                <Mail className="w-5 h-5 text-white group-hover:text-current" />
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex justify-center items-center pt-8 border-t border-white/10">
          <div className="text-gray-500 text-sm">
            © 2025 <span className="font-semibold text-white">Armaan Kumar</span>. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
