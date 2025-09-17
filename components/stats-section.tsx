"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Users, Award, Keyboard } from "lucide-react"

const stats = [
  {
    icon: Code,
    value: 2,
    label: "Projects Completed (More coming soon!)",
    suffix: "",
    color: "blue",
  },
  {
    icon: Users,
    value: 20,
    label: "Collaborations",
    suffix: "+",
    color: "red",
  },
  {
    icon: Award,
    value: 5,
    label: "Awards Won",
    suffix: "+",
    color: "blue",
  },
  {
    icon: Keyboard,
    value: 1000,
    label: "Hours of Coding",
    suffix: "+",
    color: "red",
  },
]

export function StatsSection() {
  const [counters, setCounters] = useState(stats.map(() => 0))
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)

            stats.forEach((stat, index) => {
              const duration = 2000
              const steps = 60
              const increment = stat.value / steps
              let current = 0

              const timer = setInterval(() => {
                current += increment
                if (current >= stat.value) {
                  current = stat.value
                  clearInterval(timer)
                }

                setCounters((prev) => {
                  const newCounters = [...prev]
                  newCounters[index] = Math.floor(current)
                  return newCounters
                })
              }, duration / steps)
            })
          }
        })
      },
      { threshold: 0.5 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <section ref={sectionRef} className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card
                key={index}
                className={`${
                  stat.color === "red" ? "glass-effect-red hover:animate-red-glow" : "glass-effect hover:animate-glow"
                } border-0 hover-lift text-center group`}
              >
                <CardContent className="p-6">
                  <div
                    className={`inline-flex p-4 rounded-full mb-4 ${
                      stat.color === "red" ? "bg-red-500/10 text-red-400" : "bg-blue-500/10 text-blue-400"
                    } group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="h-8 w-8" />
                  </div>
                  <div
                    className={`text-3xl font-bold mb-2 ${
                      stat.color === "red" ? "gradient-text-red" : "gradient-text"
                    }`}
                  >
                    {counters[index]}
                    {stat.suffix}
                  </div>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
