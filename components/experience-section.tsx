"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {MapPin, Briefcase } from "lucide-react"

const experiences = [
  {
    title: "CS50 – Introduction to Programming with Python",
    company: "Harvard University",
    location: "Online",
    description:
      "Completed 9 problem sets + 1 final project. Built strong foundations in Python, algorithms, and debugging with hands-on practice in structured programming and problem-solving.",
    technologies: ["Python", "Loops", "OOP", "Regular Expressions", "Exceptions", "File I/O", "Problem Solving", "Critical Thinking"],
    type: "blue",
  },
  {
    title: "Hackathon Winner – TechFest AI",
    company: "From School",
    location: "Dubai, UAE",
    description:
      "Developed a sustainable AI solution that won 1st place. Leveraged scikit-learn (Random Forests) on real datasets, gained hands-on ML Experience, and refined the project further as a Capstone.",
    technologies: ["Scikit-learn", "Pandas", "Matplotlib", "FastAPI", "Web Integration", "Dataset Creation"],
    type: "red",
  },
  {
    title: "Awards & Recognition",
    company: "Various Institutions",
    location: "Dubai, UAE",
    description:
      "Recognized for academic and extracurricular achievements. Notable items: Spectrum 2022 (Best project relevance), Ignited Mind Award, 100% Attendance Medal, Republic Day Volunteer Certificate. Also participated in Model United Nations and served as a Student Teacher/tutor.",
    technologies: ["Spectrum 2022", "Ignited Mind", "Attendance Medal", "Republic Day Volunteer", "MUN", "Student Teacher"],
    type: "blue",
  },
  {
    title: "Certifications & Participation",
    company: "Online & In-Person Programs",
    location: "Dubai, UAE",
    description:
      "Completed multiple courses and programs including Artificial Intelligence Fundamentals (IBM), Python Fundamentals (Great Learning, with OOP), iOS Design Challenge (participation), school Python hackathons, and LEGO EV3 Robotics Basics (ATLAB).",
    technologies: ["IBM", "Great Learning", "iOS Challenge", "Hackathon Participation", "Scikit-learn", "Team Leadership", "Team Managment"],
    type: "red",
  },
];



export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".experience-card")
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-slide-in-up")
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="py-20 px-6 relative floating-particles">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Experience & Achievements</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey in building innovative solutions across AI, healthcare, and web development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`experience-card opacity-0 hover-lift ${
                exp.type === "red" ? "glass-effect-red hover:animate-red-glow" : "glass-effect hover:animate-glow"
              } border-0 overflow-hidden relative group`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${
                  exp.type === "red"
                    ? "from-red-500/5 via-rose-500/5 to-pink-500/5"
                    : "from-blue-500/5 via-cyan-500/5 to-indigo-500/5"
                } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <CardContent className="p-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h3
                      className={`text-2xl font-bold mb-2 ${
                        exp.type === "red" ? "gradient-text-red" : "gradient-text"
                      }`}
                    >
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-4 text-muted-foreground mb-2">
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-foreground/80 mb-6 leading-relaxed">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className={`${
                        exp.type === "red"
                          ? "bg-red-500/10 text-red-300 border-red-500/20 hover:bg-red-500/20"
                          : "bg-blue-500/10 text-blue-300 border-blue-500/20 hover:bg-blue-500/20"
                      } transition-colors duration-300`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
