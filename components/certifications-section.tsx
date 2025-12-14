"use client"

import { useEffect, useRef, useState } from "react"
import { X } from "lucide-react"

const certifications = [
  {
    name: "Harvard CS50",
    logo: "/harvard-cs50-logo.png",
    description:
      "Completed Harvard’s CS50: Introduction to Programming with Python — a foundational course in computer science and software engineering. It covers programming logic, functions, loops, data structures, file handling, testing, and algorithms. The course also introduces web and game development, emphasizing problem-solving and computational thinking with Python.",
  },
  {
    name: "IBM SkillsBuild – Artificial Intelligence Fundamentals",
    logo: "/ibm-ai-logo.jpg",
    description:
      "Earned IBM’s credential in AI Fundamentals, covering AI history, foundations, and real-world applications. Completed six modules spanning Machine Learning, Deep Learning, NLP, Computer Vision, AI Ethics, and Watson Studio. Gained hands-on experience building and testing ML models, exploring neural networks, and applying responsible AI principles, with career insights into emerging AI roles.",
  },
  {
    name: "DeepLearning.AI",
    logo: "/deeplearning-ai-logo.png",
    description:
      "Completed the 'AI Python for Beginners' course by DeepLearning.AI — an entry-level program that bridges Python programming with foundational AI concepts. It focuses on Python syntax, control flow, data manipulation using NumPy and Pandas, and introduces core AI/ML concepts such as supervised learning, basic neural networks, and data preprocessing techniques for AI projects.",
  },
  {
    name: "Great Learning",
    logo: "/great-learning-logo.jpg",
    description:
      "Completed two courses: 'Python Fundamentals for Beginners' and 'Introduction to TensorFlow and Keras.' The Python course covered variables, data types, loops, functions, and object-oriented programming using Jupyter Notebook. The TensorFlow & Keras course introduced neural networks, tensors, TensorFlow 2.x, and performing linear regression. It also included hands-on sessions in image classification and character recognition using CNNs, preparing learners for practical deep learning applications.",
  },
  {
    name: "Forage – British Airways: Data Science",
    logo: "/british-airways-logo.png",
    description:
      "A virtual job simulation focused on real-world data science challenges at British Airways. Tasks included cleaning and analyzing customer review datasets, creating visualizations, and building predictive models to forecast seat sales. The experience emphasized data-driven decision-making, analytical storytelling, and presenting insights aligned with business goals in the airline industry.",
  },
  {
    name: "Forage – BCG X",
    logo: "/generic-geometric-logo.png",
    description:
      "Completed two BCG X virtual job simulations — 'Data Science' and 'Generative AI.' The Data Science simulation covered the complete workflow of a consulting project, from framing business problems and performing exploratory data analysis to building predictive models and presenting client-ready insights. The Generative AI simulation focused on building an AI-powered chatbot for financial data interpretation, applying large language model techniques, and understanding how GenAI transforms enterprise solutions in consulting contexts.",
  },
  {
    name: "Forage – Commonwealth Bank: Introduction to Data Science",
    logo: "/generic-bank-logo.png",
    description:
      "A data science virtual experience by Commonwealth Bank of Australia. The program simulated real-world data engineering and analytics tasks such as anonymizing customer data, integrating social media data using APIs, and designing databases for tweet analysis. It provided insights into how data teams in the financial sector manage and leverage large-scale datasets for strategic decision-making.",
  },
  {
    name: "Forage – Tata: GenAI Powered Data Analytics",
    logo: "/tata-logo.png",
    description:
      "A virtual internship by Tata Group exploring how generative AI can be used in analytics. The experience involved identifying stakeholder needs, generating insights from data using GenAI tools, creating dashboards, and converting analytical findings into business recommendations. It offered exposure to modern data visualization and AI-assisted business intelligence workflows.",
  },
];


export default function CertificationsSection() {
  const [translateX, setTranslateX] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [itemWidth, setItemWidth] = useState(0)
  const [selectedCert, setSelectedCert] = useState<(typeof certifications)[0] | null>(null)

  useEffect(() => {
    const calculateItemWidth = () => {
      if (containerRef.current) {
        const firstItem = containerRef.current.querySelector(".cert-item")
        if (firstItem) {
          const rect = firstItem.getBoundingClientRect()
          const styles = window.getComputedStyle(firstItem)
          const marginLeft = Number.parseInt(styles.marginLeft)
          const marginRight = Number.parseInt(styles.marginRight)
          setItemWidth(rect.width + marginLeft + marginRight)
        }
      }
    }

    calculateItemWidth()
    window.addEventListener("resize", calculateItemWidth)

    return () => window.removeEventListener("resize", calculateItemWidth)
  }, [])

  useEffect(() => {
    if (itemWidth === 0) return

    const animate = () => {
      setTranslateX((prev) => {
        const newTranslateX = prev - 1
        const resetPoint = -(itemWidth * certifications.length)

        if (newTranslateX <= resetPoint) {
          return 0
        }
        return newTranslateX
      })
    }

    const intervalId = setInterval(animate, 16)

    return () => clearInterval(intervalId)
  }, [itemWidth])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedCert) {
        setSelectedCert(null)
      }
    }

    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [selectedCert])

  return (
    <>
      <section id="certifications-banner" className="py-16 bg-black overflow-hidden relative">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Certifications & Courses</h2>
            <p className="text-white/75 text-lg max-w-2xl mx-auto">
              Completed top AI & programming courses and simulations, building real-world AI applications.
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div
              ref={containerRef}
              className="flex transition-none"
              style={{ transform: `translateX(${translateX}px)` }}
            >
              {certifications.map((cert, index) => (
                <div key={`first-${index}`} className="cert-item flex-shrink-0 mx-6 flex items-center justify-center">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
                  >
                    <img
                      src={cert.logo || "/placeholder.svg"}
                      alt={`${cert.name} certification logo`}
                      className="w-full h-full object-contain transition-all duration-300 rounded-lg"
                      loading="lazy"
                    />
                  </button>
                </div>
              ))}

              {certifications.map((cert, index) => (
                <div key={`second-${index}`} className="cert-item flex-shrink-0 mx-6 flex items-center justify-center">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
                  >
                    <img
                      src={cert.logo || "/placeholder.svg"}
                      alt={`${cert.name} certification logo`}
                      className="w-full h-full object-contain transition-all duration-300 rounded-lg"
                      loading="lazy"
                    />
                  </button>
                </div>
              ))}
            </div>

            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none z-10" />
          </div>
            <div className="text-center mt-4">
              <span className="text-white/70 text-base">Click on any logo to view details about the course and certificate earned</span>
            </div>
        </div>
      </section>

      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative bg-black/40 border border-white/10 rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl shadow-blue-500/10 animate-in zoom-in-95 duration-300 backdrop-blur-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 z-10 text-white/60 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all duration-200"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col md:flex-row">
              {/* Left Side: Logo & Visuals */}
              <div className="w-full md:w-1/3 bg-white/5 p-8 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
                <div className="relative z-10 w-40 h-40 md:w-48 md:h-48 bg-white rounded-2xl p-4 shadow-xl shadow-black/20 flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
                  <img
                    src={selectedCert.logo || "/placeholder.svg"}
                    alt={`${selectedCert.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Right Side: Content */}
              <div className="w-full md:w-2/3 p-8 md:p-10 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-3">
                    Certification
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                    {selectedCert.name}
                  </h3>
                </div>
                
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    {selectedCert.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm text-gray-400">Verified Credential</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
