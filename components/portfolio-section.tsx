"use client"
import { useState } from "react"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  image: string
  techStack: string[]
  codeLink?: string
  demoLink?: string
}

const projects: Project[] = [
  {
    id: "aqintel",
    title: "AQIntel",
    description:
      "Full-stack AI system predicting Air Quality Index using advanced classification & regression models with real-time data visualization.",
    image: "/air-quality-prediction-dashboard.jpg",
    techStack: ["Python", "JavaScript", "FastAPI", "HTML/CSS", "Scikit-learn", "Random Forest", "pandas", "Numpy", "Evaluation Metrics"]  ,
    demoLink: "https://aqintel.netlify.app/",
  },
  {
    id: "medrisk",
    title: "MedRisk AI",
    description:
      "Health Risk Classifier that predicts potential medical risks using Random Forest Classifier with high accuracy diagnostics.",
    image: "/medical-health-risk-prediction-interface.jpg",
    techStack: ["Python", "Random Forest", "Pandas", "Next.js", "Kaggle", "Data Preprocessing", "V0.Dev", "Model Evaluation",],
    demoLink: "https://med-risk-ai.vercel.app/",
  },
  {
    id: "politruth",
    title: "PoliTruth AI",
    description:
      "Political & government-focused fake news detection system using advanced NLP and machine learning techniques.",
    image: "/fake-news-detection-interface.jpg",
    techStack: ["Python", "NLP", "NLTK", "PassiveAggressiveClassifier", "Next.js", "Text Preprocessing"],
    demoLink: "https://politruth-ai.vercel.app/",
  },
  {
    id: "bhavsense",
    title: "BhāvSense AI",
    description:
      "AI-powered Hindi language sentiment analysis tool for social media and text classification with cultural context awareness.",
    image: "/hindi-sentiment-analysis-interface.jpg",
    techStack: ["Python", "NLP", "TfidfVectorizer", "LogisticRegression", "LinearSVC", "Transformers", "Flask", "Fine-tuning"],
    demoLink: "https://bhavsense-ai.vercel.app",
  },
  {
    id: "nexgen",
    title: "NexGen AI",
    description:
      "Market Intelligence Dashboard providing real-time competitor analysis and customer insights using AI-driven analytics.",
    image: "/market-intelligence-dashboard.jpg",
    techStack: ["Next.js", "OpenAI", "Python", "PostgreSQL"],
    demoLink: "https://nexgen-ai-pro.vercel.app",
  },
]

export default function PortfolioSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const currentProject = projects[currentIndex]

  const nextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev + 1) % projects.length)
    setTimeout(() => setIsTransitioning(false), 700)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
    setTimeout(() => setIsTransitioning(false), 700)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return
    setIsTransitioning(true)
    setCurrentIndex(index)
    setTimeout(() => setIsTransitioning(false), 700)
  }

  return (
    <section id="projects" className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${currentProject.image})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/50 to-black/95 backdrop-blur-sm"></div>
      </div>

      {/* Animated gradient overlays */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-float-1"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-float-2"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-lg md:text-xl text-white/75 max-w-3xl mx-auto">
            AI-powered solutions solving real-world problems
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>

          {/* Smooth slide transition with proper animation */}
          <div className="relative overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-br from-gray-900/40 to-black/40 border border-white/5 rounded-2xl p-6 md:p-10 space-y-6">
                    <div className="space-y-4">
                      <h4 className="text-3xl md:text-4xl font-bold text-white">{project.title}</h4>
                      <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 text-sm font-medium bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30 hover:bg-blue-500/30 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      {project.codeLink && (
                        <a
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 hover:scale-105 border border-white/20 font-medium"
                        >
                          <Github className="w-5 h-5" />
                          View Code
                        </a>
                      )}
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300 hover:scale-105 font-medium shadow-lg shadow-blue-500/30"
                        >
                          <ExternalLink className="w-5 h-5" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-8 bg-blue-500" : "w-2 bg-white/30 hover:bg-white/50"
                } disabled:cursor-not-allowed`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
