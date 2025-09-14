"use client"

import { Badge } from "@/components/ui/badge"
import { useEffect, useRef, useState } from "react"
import { Code, Palette, Database, Cpu } from "lucide-react"

const skillCategories = [
  {
    category: "Programming",
    skills: ["Python", "Pandas", "NLTK"],
    icon: Code,
    color: "primary",
  },
  {
    category: "Frameworks",
    skills: ["FastAPI", "Hugging Face Spaces", "Gradio"],
    icon: Cpu,
    color: "accent",
  },
  {
    category: "Design",
    skills: ["HTML/CSS", "Scoped Animations", "Flexbox"],
    icon: Palette,
    color: "secondary",
  },
  {
    category: "Data",
    skills: ["CSV Wrangling", "Encoding Fixes", "Diagnostics"],
    icon: Database,
    color: "primary",
  },
]

export function SkillsSection() {
  const [visibleCategories, setVisibleCategories] = useState<boolean[]>([])
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = categoryRefs.current.indexOf(entry.target as HTMLDivElement)
          if (entry.isIntersecting && index !== -1) {
            setVisibleCategories((prev) => {
              const newVisible = [...prev]
              newVisible[index] = true
              return newVisible
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    categoryRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background"></div>
      <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-float"></div>
      <div
        className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance gradient-text">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            A comprehensive toolkit for building <span className="text-primary">impactful</span>{" "}
            <span className="text-accent">AI solutions</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div
                key={category.category}
                ref={(el) => {
                  categoryRefs.current[index] = el
                }}
                className={`text-center transition-all duration-700 ${
                  visibleCategories[index] ? "animate-slide-in-up opacity-100" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="glass-effect rounded-2xl p-6 hover-lift border border-border/50 group">
                  <div className="flex justify-center mb-4">
                    <div
                      className={`p-3 rounded-full bg-${category.color}/10 group-hover:bg-${category.color}/20 transition-colors animate-float`}
                    >
                      <IconComponent className={`h-6 w-6 text-${category.color}`} />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {category.category}
                  </h3>

                  <div className="flex flex-wrap justify-center gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className={`border-${category.color}/30 text-${category.color} hover:bg-${category.color}/20 hover:text-${category.color} transition-all duration-300 animate-fade-in-scale hover:scale-105`}
                        style={{ animationDelay: `${index * 150 + skillIndex * 100}ms` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
