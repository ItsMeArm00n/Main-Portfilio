"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Code, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 floating-particles">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/8 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-32 h-32 bg-cyan-500/12 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute top-10 right-10 w-20 h-20 bg-indigo-500/15 rounded-full blur-xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-10 left-10 w-24 h-24 bg-rose-500/12 rounded-full blur-xl animate-pulse-slow"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="text-center max-w-4xl mx-auto relative z-10">
        <div className="bg-background/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-border/20 glass-effect hover-lift">
          <div
            className={`transition-all duration-1000 ${isVisible ? "animate-slide-in-up opacity-100" : "opacity-0"}`}
          >
            <div className="flex justify-center items-center gap-4 mb-6">
              <Code className="h-8 w-8 text-blue-400 animate-float" />
              <Sparkles className="h-6 w-6 text-red-400 animate-float" style={{ animationDelay: "1s" }} />
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-balance text-white gradient-text">Armaan Kumar</h1>

            <div className="relative">
              <p className="text-xl md:text-2xl text-white mb-8 text-pretty leading-relaxed">
                Turning data into impact through <span className="text-blue-400 font-semibold">AI</span>,{" "}
                <span className="text-cyan-400 font-semibold">design</span>, and{" "}
                <span className="text-red-400 font-semibold">diagnostics</span>
              </p>
              <div className="absolute inset-0 animate-shimmer pointer-events-none"></div>
            </div>

            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-red-500 hover:from-blue-600 hover:to-red-600 text-white px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 animate-glow hover-lift glass-effect border-0"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
