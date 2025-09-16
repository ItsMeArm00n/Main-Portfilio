"use client"

import { useEffect, useRef, useState } from "react"
import { Heart, Code2, Database } from "lucide-react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-in-up opacity-100" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance gradient-text">About Me</h2>

          <div className="glass-effect rounded-2xl p-8 shadow-2xl border border-border/50 hover-lift">
            <div className="flex justify-center gap-6 mb-6">
              <div className="p-3 rounded-full bg-primary/10 animate-float">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <div className="p-3 rounded-full bg-accent/10 animate-float" style={{ animationDelay: "1s" }}>
                <Code2 className="h-6 w-6 text-accent" />
              </div>
              <div className="p-3 rounded-full bg-secondary/10 animate-float" style={{ animationDelay: "2s" }}>
                <Database className="h-6 w-6 text-secondary" />
              </div>
            </div>

            <p className="text-lg text-card-foreground leading-relaxed text-pretty">
              I am a student developer passionate about<span className="text-primary font-semibold">artificial intelligence</span> and{" "}
              <span className="text-accent font-semibold">data-driven problem solving</span>. I enjoy building projects that turn raw data into clear insights, with a focus on clean workflows, intuitive design, and practical applications. With experience in{" "}
              <span className="text-secondary font-semibold">Python, machine learning, and front-end design tools,</span>I have worked on projects ranging from air quality prediction to risk assessment platforms. I am continuously exploring new ways to bridge the gap between complex models and user-friendly solutions, aswell as expanding my skill set in AI and web development.
            </p>

            <div className="absolute inset-0 animate-shimmer pointer-events-none rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
