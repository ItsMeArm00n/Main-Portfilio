"use client"

import type React from "react"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Award, Trophy, Users, Calendar } from "lucide-react"

interface Achievement {
  icon: React.ReactNode
  title: string
  description: string
}

const achievements: Achievement[] = [
  {
    icon: <Trophy className="w-8 h-8 text-yellow-500" />,
    title: "Spectrum Science Exhibition Winner",
    description: "Best project relevance to theme",
  },
  {
    icon: <Award className="w-8 h-8 text-yellow-400" />,
    title: "Ignited Mind Award",
    description: "Academic curiosity and innovative thinking",
  },
  {
    icon: <Trophy className="w-8 h-8 text-yellow-600" />,
    title: "TechFest AI 2025 - 1st Place",
    description: "Inter-School AI Project Competition",
  },
  {
    icon: <Users className="w-8 h-8 text-yellow-300" />,
    title: "iOS App Design Challenge",
    description: "Team Leader",
  },
  {
    icon: <Users className="w-8 h-8 text-amber-400" />,
    title: "Python Hackathon",
    description: "Team Leader - Polynomial Regression",
  },
  {
    icon: <Calendar className="w-8 h-8 text-amber-500" />,
    title: "100% Attendance",
    description: "Grade 10",
  },
  {
    icon: <Users className="w-8 h-8 text-amber-300" />,
    title: "Republic Day Volunteer",
    description: "Event organization support",
  },
  {
    icon: <Users className="w-8 h-8 text-yellow-200" />,
    title: "Model United Nations",
    description: "Debates & public speaking",
  },
]

export default function AchievementsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 3

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % achievements.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + achievements.length) % achievements.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-yellow-500/30 rounded-full blur-3xl animate-float-1"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl animate-float-2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-shine">Achievements</h2>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">
            Recognition for academic excellence, leadership, and innovation
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/20"
            aria-label="Previous achievements"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/20"
            aria-label="Next achievements"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {achievements.map((achievement, index) => (
                <div key={index} className="w-1/3 flex-shrink-0 px-3">
                  <div className="glass glass-hover p-8 rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 group border border-white/10 h-full">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="p-4 glass rounded-xl group-hover:scale-110 transition-transform duration-300 bg-white/5">
                        {achievement.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                      <p className="text-white/75 text-sm leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-10">
            {achievements.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-8 bg-blue-500" : "w-2 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to achievement ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


// Internships & Experience Section
