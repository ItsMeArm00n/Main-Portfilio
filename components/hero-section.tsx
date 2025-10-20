"use client"
import { ChevronDown, Code2, Database, Sparkles } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url(/images/background.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div>
          <div className="flex items-center justify-center mb-8 sm:mb-12">
            <div className="text-center">
              <p className="text-sm sm:text-lg text-white/75">
                Welcome to my <strong>personal portfolio</strong> 👋
              </p>
            </div>
          </div>

          <div className="relative mb-10 sm:mb-16">
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white px-2 mb-4">
              Armaan Kumar
              <br />
              <span className="text-sm sm:text-lg md:text-xl lg:text-2xl font-normal text-white/90 block mt-4">
                “Hi, I’m Armaan — An AI Enthusiast.”
              </span>
            </h1>

            <div className="absolute top-12 sm:top-16 -left-8 sm:-left-12 md:-left-16 animate-float-2 transform -rotate-6">
              <div className="glass glass-hover rounded-xl sm:rounded-2xl p-2 sm:p-4 w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center">
                <Code2 className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 text-gray-400" />
              </div>
            </div>

            <div className="absolute -top-8 sm:-top-12 -right-8 sm:-right-12 md:-right-16 animate-float-3 transform rotate-6">
              <div className="glass glass-hover rounded-xl sm:rounded-2xl p-2 sm:p-4 w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-12 sm:mb-16 px-2">
            <Card className="glass glass-hover p-3 sm:p-6 text-center group">
              <div className="flex items-start justify-center space-x-2 sm:space-x-3">
                <div>
                  <p className="font-semibold text-white text-xs sm:text-base">
                     I build AI & data-driven solutions for real-world challenges.  
                  </p>
                </div>
              </div>
            </Card>

            <Card className="glass glass-hover p-3 sm:p-6 text-center group">
              <div className="flex items-start justify-center space-x-2 sm:space-x-3">
                <div>
                  <p className="font-semibold text-white text-xs sm:text-base">
                    I make intelligent systems using Python & machine learning.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="glass glass-hover p-3 sm:p-6 text-center group">
              <div className="flex items-start justify-center space-x-2 sm:space-x-3">
                <div>
                  <p className="font-semibold text-white text-xs sm:text-base">
                    I love exploring new technologies and innovative ideas.  
                  </p>
                </div>
              </div>
            </Card>

            <Card className="glass glass-hover p-3 sm:p-6 text-center group">
              <div className="flex items-start justify-center space-x-2 sm:space-x-3">
                <div>
                  <p className="font-semibold text-white text-xs sm:text-base">
                    I want to pursue AI and make an impact in the field.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={scrollToAbout}
              className="animate-gentle-bounce hover:scale-105 transition-all duration-500 group"
            >
              <div className="glass glass-hover rounded-full p-2 sm:p-4 w-10 h-10 sm:w-16 sm:h-16 flex items-center justify-center">
                <ChevronDown className="w-5 h-5 sm:w-8 sm:h-8 text-white group-hover:text-white/80 transition-colors duration-300" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
