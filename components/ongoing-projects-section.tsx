"use client"

import { Card } from "@/components/ui/card"
import { Clock, Loader2 } from "lucide-react"

export default function OngoingProjectsSection() {
  const projects = [
    {
      title: "Bus Delay Predictor",
      description: "Predicts bus arrival using RTA data with machine learning algorithms",
      status: "In Development",
      icon: <Clock className="w-6 h-6 text-gray-400" />,
    },
    {
      title: "Nutrition & Health Analysis Website",
      description: "ML-powered platform for nutrition analysis and disease risk insights",
      status: "In Development",
      icon: <Clock className="w-6 h-6 text-gray-500" />,
    },
    {
      title: "AI-Powered Waste Segregation System",
      description: "Computer vision model detecting waste types for sustainable management",
      status: "In Development",
      icon: <Clock className="w-6 h-6 text-gray-600" />,
    },
  ]

  return (
    <section id="ongoing" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Ongoing Projects</h2>
            <Loader2 className="w-8 h-8 md:w-10 md:h-10 text-blue-400 animate-spin" />
          </div>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">
            Current work in progress - Building innovative AI solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass glass-hover p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  {project.icon}
                  <span className="text-xs px-3 py-1 rounded-full glass text-gray-400 border border-gray-400/30">
                    {project.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/75 text-sm leading-relaxed">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
