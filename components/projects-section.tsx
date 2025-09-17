"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Brain, Wind } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const projects = [
  {
    title: "AQIntel",
    description: "Air Quality Index Predictor with basic and advanced AI models",
    link: "https://aqintel.netlify.app",
    tags: ["Python", "Scikit-learn", "Random Forest", "FastAPI" ,"Data Preprocessing"],
    icon: Wind,
    gradient: "from-blue-500/20 via-cyan-500/15 to-blue-600/20",
    glowClass: "animate-glow",
    textGradient: "gradient-text",
    glassEffect: "glass-effect",
  },
  {
    title: "MedRisk AI",
    description: "Health Risk Prediction Platform using clinical data and machine learning",
    link: "https://med-risk-ai.vercel.app",
    tags: ["Python", "Scikit-learn", "Random Forest", "Data Analysis","Risk Assessment"],
    icon: Brain,
    gradient: "from-red-500/20 via-rose-500/15 to-red-600/20",
    glowClass: "animate-red-glow",
    textGradient: "gradient-text-red",
    glassEffect: "glass-effect-red",
  },
]

export function ProjectsSection() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.indexOf(entry.target as HTMLDivElement)
          if (entry.isIntersecting && index !== -1) {
            setVisibleCards((prev) => {
              const newVisible = [...prev]
              newVisible[index] = true
              return newVisible
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-20 px-4 relative floating-particles">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance gradient-text animate-slide-in-up">
            My Projects
          </h2>
          <p
            className="text-lg text-muted-foreground text-pretty animate-slide-in-up"
            style={{ animationDelay: "200ms" }}
          >
            My collection of <span className="text-primary animate-pulse-slow"></span>{" "}
            <span className="text-red-400 animate-pulse-slow" style={{ animationDelay: "1s" }}>
              AI projects{" "}
            </span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <div
                key={project.title}
                ref={(el) => {
                  cardRefs.current[index] = el
                }}
                className={`transition-all duration-700 ${
                  visibleCards[index]
                    ? index === 0
                      ? "animate-slide-in-left opacity-100"
                      : "animate-slide-in-right opacity-100"
                    : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <Card
                  className={`group hover-lift ${project.glassEffect} border-border/50 relative overflow-hidden ${project.glowClass}`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-all duration-700`}
                  ></div>

                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>

                  <CardHeader className="relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 animate-float`}
                      >
                        {/* Set Brain icon color to red for MedRisk AI, otherwise use default */}
                        {project.title === "MedRisk AI" ? (
                          <Brain className="h-6 w-6 text-red-500 group-hover:scale-110 transition-transform duration-300" />
                        ) : (
                          <IconComponent className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                        )}
                      </div>
                      <CardTitle
                        className={`text-2xl ${project.textGradient} group-hover:scale-105 transition-all duration-300`}
                      >
                        {project.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-muted-foreground text-pretty leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-muted/50 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300 animate-fade-in-scale hover:scale-110"
                          style={{ animationDelay: `${index * 300 + tagIndex * 100}ms` }}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      asChild
                      className={`w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105 ${project.glowClass} group-hover:shadow-2xl`}
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        View Live Site
                        <ExternalLink className="h-4 w-4 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground/70 italic animate-pulse-slow">More projects coming soon...</p>
        </div>
      </div>
    </section>
  )
}
