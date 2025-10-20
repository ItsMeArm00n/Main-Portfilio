"use client"

import React from "react"


interface Experience {
  title: string
  description: string
  logo?: string
}

const experiences: Experience[] = [
  {
    title: "AI Intern – Seed Paper India",
    description:
      "Contributed to research on sustainable and AI-driven production methods. Completed a hands-on internship developing AI solutions for eco-friendly paper production.",
    logo: "/image_2025-10-19_003403042-removebg-preview.png",
  },
  {
    title: "More coming soon...",
    description: "Stay tuned for future experiences and internships!",
  },
]

export default function InternshipsExperienceSection() {
  return (
    <section id="experience" className="py-20 relative bg-black/90">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Internships & Experience</h2>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">
            Practical exposure to AI, research, and industry projects
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="glass p-8 rounded-2xl border border-white/10 h-full flex flex-row items-center text-left gap-6"
            >
              <div className="flex flex-col justify-center flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{exp.title}</h3>
                <p className="text-white/75 text-base md:text-lg leading-relaxed">{exp.description}</p>
              </div>
              {exp.logo && (
                <img
                  src={exp.logo}
                  alt={exp.title + ' logo'}
                  className="w-36 h-36 md:w-44 md:h-44 object-contain rounded-xl bg-white/10 flex-shrink-0"
                  loading="lazy"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
