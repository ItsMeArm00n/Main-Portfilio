"use client"
import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, ExternalLink, Github, FlaskConical, X, Leaf, Waves, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

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
    id: "careersim",
    title: "CareerSim AI",
    description:
      "A generative AI platform simulating career trajectories based on academic profiles. Leverages advanced Gemini Prompt Engineering to produce structured JSON data for personalized roadmaps, stream selection, and ROI analysis.",
    image: "/Career-sim.png",
    techStack: ["Next.js", "TypeScript", "Gemini API", "Prompt Engineering", "Tailwind CSS"],
    demoLink: "https://careersim-ai.vercel.app/",
  },
  {
    id: "aqintel",
    title: "AQIntel",
    description:
      "Dual-model air quality forecasting system. Features a Basic Classifier (97% accuracy) for simple inputs and an Advanced Regressor (99% R2 score) for complex pollutant data, deployed via a custom FastAPI wrapper on Hugging Face.",
    image: "/air-quality-prediction-dashboard.jpg",
    techStack: ["Python", "FastAPI", "Scikit-learn", "Random Forest", "HTML/CSS"],
    demoLink: "https://aqintel.netlify.app/",
  },
  {
    id: "medrisk",
    title: "MedRisk AI",
    description:
      "Clinical triage system analyzing patient vitals (Respiratory, Cardiovascular, Neurological) to predict health risk levels. Powered by an XGBoost Classifier achieving 95% diagnostic accuracy.",
    image: "/medical-health-risk-prediction-interface.jpg",
    techStack: ["Python", "XGBoost", "FastAPI", "Pandas", "Next.js"],
    demoLink: "https://med-risk-ai.vercel.app/",
  },
  {
    id: "politruth",
    title: "PoliTruth AI",
    description:
      "Political misinformation detection system utilizing Natural Language Processing. Implements a PassiveAggressiveClassifier with NLTK preprocessing to identify fake news with 99% accuracy.",
    image: "/fake-news-detection-interface.jpg",
    techStack: ["Python", "NLTK", "PassiveAggressiveClassifier", "FastAPI", "Next.js"],
    demoLink: "https://politruth-ai.vercel.app/",
  },
  {
    id: "bhavsense",
    title: "BhāvSense AI",
    description:
      "Linguistic sentiment analysis tool tailored for Hindi social media text. Utilizes a Logistic Regression model achieving 90% classification accuracy, bridging the gap in non-English NLP resources.",
    image: "/hindi-sentiment-analysis-interface.jpg",
    techStack: ["Python", "Scikit-learn", "LogisticRegression", "FastAPI", "Next.js"],
    demoLink: "https://bhavsense-ai.vercel.app",
  },
  {
    id: "nexgen",
    title: "NexGen AI",
    description:
      "Real-time market intelligence dashboard generating competitor analysis and customer insights. Uses Gemini to structure unstructured AI data into dynamic JSON visualizations for immediate business intelligence.",
    image: "/market-intelligence-dashboard.jpg",
    techStack: ["Next.js", "TypeScript", "Gemini API", "Prompt Engineering", "PostgreSQL"],
    demoLink: "https://nexgen-ai-pro.vercel.app",
  },
];

const miscProjects = [
  {
    id: "swasth-ai",
    title: "Swasth AI",
    description: "AI-powered health assistant for early detection of nutrition deficiencies and lifestyle diseases.",
    link: "https://swasth-ai-prototype.vercel.app",
    icon: <Activity className="w-8 h-8 text-red-400" />,
    color: "from-red-500/20 to-orange-500/20",
    border: "border-red-500/30"
  },
  {
    id: "eco-haven",
    title: "Eco Haven",
    description: "Sustainable tech innovations featuring autonomous plant care (BioSync) and self-healing concrete.",
    link: "https://ecohvn.vercel.app",
    icon: <Leaf className="w-8 h-8 text-green-400" />,
    color: "from-green-500/20 to-emerald-500/20",
    border: "border-green-500/30"
  },
  {
    id: "project-riptide",
    title: "Project Riptide",
    description: "Ocean conservation initiative using AI and technology for plastic waste removal and ecological restoration.",
    link: "https://project-riptide.netlify.app",
    icon: <Waves className="w-8 h-8 text-blue-400" />,
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/30"
  }
]

export default function PortfolioSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isMiscOpen, setIsMiscOpen] = useState(false)
  const [isAqIntelOpen, setIsAqIntelOpen] = useState(false)
  const autoPlayTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const currentProject = projects[currentIndex]

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (autoPlayTimeoutRef.current) {
        clearTimeout(autoPlayTimeoutRef.current)
      }
    }
  }, [])

  const handleInteraction = () => {
    setIsAutoPlaying(false)
    if (autoPlayTimeoutRef.current) {
      clearTimeout(autoPlayTimeoutRef.current)
    }
    autoPlayTimeoutRef.current = setTimeout(() => {
      setIsAutoPlaying(true)
    }, 5000)
  }

  const nextSlide = () => {
    if (isTransitioning) return
    handleInteraction()
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev + 1) % projects.length)
    setTimeout(() => setIsTransitioning(false), 700)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    handleInteraction()
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
    setTimeout(() => setIsTransitioning(false), 700)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return
    handleInteraction()
    setIsTransitioning(true)
    setCurrentIndex(index)
    setTimeout(() => setIsTransitioning(false), 700)
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true)
        setCurrentIndex((prev) => (prev + 1) % projects.length)
        setTimeout(() => setIsTransitioning(false), 700)
      }
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, isTransitioning])

  return (
    <section 
      id="projects" 
      className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url('${currentProject.image}')`,
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
                  <div className="bg-gradient-to-br from-gray-900/40 to-black/40 border border-white/5 rounded-2xl p-6 md:p-10 space-y-6 animate-portfolio-float">
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
                        project.id === "aqintel" ? (
                          <button
                            onClick={() => setIsAqIntelOpen(true)}
                            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300 hover:scale-105 font-medium shadow-lg shadow-blue-500/30"
                          >
                            <ExternalLink className="w-5 h-5" />
                            Live Demo
                          </button>
                        ) : (
                          <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300 hover:scale-105 font-medium shadow-lg shadow-blue-500/30"
                          >
                            <ExternalLink className="w-5 h-5" />
                            Live Demo
                          </a>
                        )
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

          {/* Misc Projects Button */}
          <div className="flex justify-center mt-12">
            <Button
              onClick={() => setIsMiscOpen(true)}
              className="group relative px-8 py-6 bg-transparent border border-white/10 hover:border-white/30 rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center gap-3 relative z-10">
                <FlaskConical className="w-5 h-5 text-blue-400 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-lg font-light tracking-wider text-white/80 group-hover:text-white transition-colors">
                  View Experimental Lab
                </span>
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Misc Projects Overlay */}
      {isMiscOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300"
            onClick={() => setIsMiscOpen(false)}
          />

          {/* Content Container */}
          <div className="relative w-full max-w-5xl bg-black/40 border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden animate-in zoom-in-95 duration-300 shadow-2xl">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsMiscOpen(false)}
              className="absolute top-6 right-6 p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header */}
            <div className="text-center mb-12 space-y-4">
              <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-full mb-4">
                <FlaskConical className="w-8 h-8 text-blue-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Experimental Projects</h2>
              <p className="text-white/60 max-w-xl mx-auto text-lg">
                A collection of prototypes, concepts, and innovations exploring the intersection of AI, sustainability, and health.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {miscProjects.map((project, index) => (
                <a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-6 rounded-2xl border ${project.border} bg-gradient-to-br ${project.color} hover:scale-[1.02] transition-all duration-300 flex flex-col h-full`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4 p-3 bg-black/20 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/70 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-2 text-xs font-medium text-white/50 group-hover:text-white transition-colors mt-auto">
                    <span>View Prototype</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* AqIntel Version Dialog */}
      <Dialog open={isAqIntelOpen} onOpenChange={setIsAqIntelOpen}>
        <DialogContent className="bg-gray-900 border-white/10 text-white sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Select AQIntel Version</DialogTitle>
            <DialogDescription className="text-gray-400">
              Choose which version of the Air Quality Intelligence system you would like to view.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
            <a
              href="https://aqintel.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
              onClick={() => setIsAqIntelOpen(false)}
            >
              <div>
                <h4 className="font-semibold text-lg text-white group-hover:text-blue-400 transition-colors">AQIntel V1</h4>
                <p className="text-sm text-gray-400">Original Prototype</p>
              </div>
              <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
            </a>
            
            <a
              href="https://eco-360-phi.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
              onClick={() => setIsAqIntelOpen(false)}
            >
              <div>
                <h4 className="font-semibold text-lg text-white group-hover:text-purple-400 transition-colors">AQIntel V2</h4>
                <p className="text-sm text-gray-400">Enhanced Version (Eco 360)</p>
              </div>
              <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-400" />
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
