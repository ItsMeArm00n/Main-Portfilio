"use client"

import { Card } from "@/components/ui/card"
import { Code, Database, Palette, Wrench, Laptop } from "lucide-react"

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8 text-gray-400" />,
      title: "AI & Machine Learning",
      skills: [
        "Python",
        "Scikit-learn",
        "TensorFlow (basics)",
        "Pandas",
        "NumPy",
        "Matplotlib",
      ],
    },
    {
      icon: <Laptop className="w-8 h-8 text-gray-400" />,
      title: "Development",
      skills: [
        "FastAPI",
        "Flask",
        "Web Development (HTML, CSS, JS)",
        "API Integration",
      ],
    },
    {
      icon: <Palette className="w-8 h-8 text-gray-400" />,
      title: "Design & Prototyping",
      skills: [
        "Figma",
        "Canva",
        "UI/UX Basics",
      ],
    },
    {
      icon: <Database className="w-8 h-8 text-gray-400" />,
      title: "Tools & Platforms",
      skills: [
        "Google Colab",
        "VS Code",
        "GitHub",
        "Hugging Face",
      ],
    },
    {
      icon: <Wrench className="w-8 h-8 text-gray-400" />,
      title: "Professional Skills",
      skills: [
        "Problem Solving",
        "Teamwork",
        "Leadership",
        "Critical Thinking",
        "Project Management",
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-float-slow-reverse"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-shine">Skills & Tools</h2>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">
            Technical expertise across AI, data science, and software development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="glass glass-hover p-8 hover:scale-102 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 border border-white/10 relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex flex-col items-center text-center space-y-6 relative z-10">
                <div className="p-4 glass rounded-2xl bg-white/5 group-hover:bg-white/10 transition-colors duration-300 transform group-hover:scale-110">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                  {category.title}
                </h3>
                <div className="space-y-3 w-full">
                  {category.skills.map((skill, idx) => (
                    <div 
                      key={idx} 
                      className="text-white/75 text-sm py-2 px-4 rounded-lg bg-white/5 hover:bg-white/10 transform hover:scale-105 transition-all duration-200 border border-white/5"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <span className="text-white/60 text-base italic">AI Assisted/Guided*</span>
        </div>
      </div>
    </section>
  )
}
