"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("about")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <div className="space-y-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">About Me</h2>

            <div className="space-y-4 text-white/75 leading-relaxed max-w-4xl mx-auto text-lg">
              <p>
                I am a Grade 12 student passionate about Artificial Intelligence, Computer Vision, and NLP,
                with a strong foundation in Python and machine learning. I enjoy exploring how AI can be applied to
                real-world challenges in healthcare, environment, and daily life.
              </p>

              <p>
                Alongside AI, I build web apps and APIs that bring my models to life. 
                I’ve developed interactive prototypes using Flask, HTML/CSS, and JavaScript, 
                and integrated machine learning systems into functional user interfaces and dashboards.
              </p>

              <p>
                Beyond academics, I bring leadership, teamwork, and adaptability skills developed through hackathons,
                design challenges, and collaborative projects. My goal is to deepen my expertise in AI research and
                contribute to building innovative solutions that create meaningful impact.
              </p>
            </div>

            <div className="flex justify-center mt-8">
              <Button
                className="glass glass-hover border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 mt-8 group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
