"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Heart, ExternalLink } from "lucide-react"
import { useEffect, useState } from "react"

export function Footer() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const handleGitHubClick = () => {
    window.open("https://github.com/ItsMeArm00n", "_blank", "noopener,noreferrer")
  }

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/armaan-kumar-631868343", "_blank", "noopener,noreferrer")
  }

  const handleEmailClick = () => {
    window.location.href = "mailto:armaankumardxb@gmail.com"
  }

  return (
    <footer className="py-16 px-4 relative overflow-hidden border-t border-border/50 floating-particles">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/50"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500/8 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-0 right-1/4 w-48 h-48 bg-red-500/10 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "3s" }}
      ></div>
      <div
        className="absolute top-0 right-1/3 w-32 h-32 bg-cyan-500/12 rounded-full blur-xl animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-in-up opacity-100" : "opacity-0"}`}>
          <h2 className="text-4xl font-bold mb-8 text-balance gradient-text">Let's Connect</h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Open to <span className="text-blue-400">collaborations, guidance, or simply networking</span> —{" "}
            <span className="text-red-300">feel free to connect.</span>?
          </p>

          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            <Button
              variant="outline"
              size="lg"
              onClick={handleGitHubClick}
              className="glass-effect border-blue-500/30 text-blue-400 hover:bg-blue-500/20 hover:text-blue-300 hover-lift animate-glow bg-transparent group"
            >
              <Github className="h-5 w-5 mr-2 group-hover:animate-pulse" />
              GitHub
              <ExternalLink className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleLinkedInClick}
              className="glass-effect border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 hover:text-cyan-300 hover-lift animate-glow bg-transparent group"
              style={{ animationDelay: "0.2s" }}
            >
              <Linkedin className="h-5 w-5 mr-2 group-hover:animate-pulse" />
              LinkedIn
              <ExternalLink className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleEmailClick}
              className="glass-effect border-red-500/30 text-red-400 hover:bg-red-500/20 hover:text-red-300 hover-lift animate-red-glow bg-transparent group"
              style={{ animationDelay: "0.4s" }}
            >
              <Mail className="h-5 w-5 mr-2 group-hover:animate-pulse" />
              Email
            </Button>
          </div>

          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            © 2024 Armaan Kumar. Built with <Heart className="h-4 w-4 text-red-500 animate-pulse" /> for AI and
            environmental impact.
          </p>
        </div>
      </div>
    </footer>
  )
}
