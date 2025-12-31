"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Code, Database, Globe, Cpu, Terminal, Layers, Brain, Sparkles } from "lucide-react"

const keywords = [
  { name: "Artificial Intelligence", icon: <Brain className="w-8 h-8" /> },
  { name: "Machine Learning", icon: <Cpu className="w-8 h-8" /> },
  { name: "Web Development", icon: <Globe className="w-8 h-8" /> },
  { name: "Python", icon: <Code className="w-8 h-8" /> },
  { name: "Data Science", icon: <Database className="w-8 h-8" /> },
  { name: "Problem Solving", icon: <Terminal className="w-8 h-8" /> },
  { name: "Leadership", icon: <Layers className="w-8 h-8" /> },
  { name: "Innovation", icon: <Sparkles className="w-8 h-8" /> },
]

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [translateX, setTranslateX] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [itemWidth, setItemWidth] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("about")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const calculateItemWidth = () => {
      if (containerRef.current) {
        const totalWidth = containerRef.current.scrollWidth
        // We have 12 sets of keywords
        setItemWidth(totalWidth / 12)
      }
    }

    // Small delay to ensure rendering
    setTimeout(calculateItemWidth, 100)
    window.addEventListener("resize", calculateItemWidth)

    return () => window.removeEventListener("resize", calculateItemWidth)
  }, [])

  useEffect(() => {
    if (itemWidth === 0) return

    const animate = () => {
      setTranslateX((prev) => {
        const newTranslateX = prev - 0.9 // Increased speed
        // Reset when we've scrolled past one full set of keywords
        const resetPoint = -itemWidth

        if (newTranslateX <= resetPoint) {
          return 0
        }
        return newTranslateX
      })
    }

    const intervalId = setInterval(animate, 16)

    return () => clearInterval(intervalId)
  }, [itemWidth])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="about" className="py-32 relative overflow-hidden min-h-[800px] flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>

      {/* Diagonal Background Scrolling */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] -rotate-12 flex flex-col gap-24 justify-center opacity-[0.03]">
           {/* Row 1 */}
           <div ref={containerRef} className="flex whitespace-nowrap" style={{ transform: `translateX(${translateX}px)` }}>
              {Array(12).fill(keywords).flat().map((keyword, i) => (
                 <div key={`r1-${i}`} className="keyword-item flex items-center gap-6 mx-12 text-6xl font-black text-white uppercase tracking-widest">
                    {keyword.icon}
                    <span>{keyword.name}</span>
                 </div>
              ))}
           </div>
           {/* Row 2 (Reverse) */}
           <div className="flex whitespace-nowrap" style={{ transform: `translateX(${-translateX - 1000}px)` }}>
              {Array(12).fill(keywords).flat().map((keyword, i) => (
                 <div key={`r2-${i}`} className="flex items-center gap-6 mx-12 text-6xl font-black text-white uppercase tracking-widest">
                    {keyword.icon}
                    <span>{keyword.name}</span>
                 </div>
              ))}
           </div>
           {/* Row 2.5 (Reverse - Added) */}
           <div className="flex whitespace-nowrap" style={{ transform: `translateX(${-translateX - 200}px)` }}>
              {Array(12).fill(keywords).flat().map((keyword, i) => (
                 <div key={`r2.5-${i}`} className="flex items-center gap-6 mx-12 text-6xl font-black text-white uppercase tracking-widest">
                    {keyword.icon}
                    <span>{keyword.name}</span>
                 </div>
              ))}
           </div>
           {/* Row 3 */}
           <div className="flex whitespace-nowrap" style={{ transform: `translateX(${translateX - 500}px)` }}>
              {Array(12).fill(keywords).flat().map((keyword, i) => (
                 <div key={`r3-${i}`} className="flex items-center gap-6 mx-12 text-6xl font-black text-white uppercase tracking-widest">
                    {keyword.icon}
                    <span>{keyword.name}</span>
                 </div>
              ))}
           </div>
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <div className="space-y-8 text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white tracking-tight">About Me</h2>

            <div className="space-y-6 text-white/80 leading-relaxed text-lg md:text-xl font-light">
              <p>
                I am a Grade 12 student passionate about <span className="text-blue-400 font-medium">Artificial Intelligence</span>, <span className="text-indigo-400 font-medium">Computer Vision</span>, and <span className="text-violet-400 font-medium">NLP</span>,
                with a strong foundation in <span className="text-green-400 font-medium">Python</span> and <span className="text-emerald-400 font-medium">machine learning</span>. I enjoy exploring how AI can be applied to
                real-world challenges in <span className="text-teal-400 font-medium">healthcare</span>, <span className="text-cyan-400 font-medium">environment</span>, and daily life.
              </p>

              <p>
                Alongside AI, I build <span className="text-orange-400 font-medium">web apps</span> and <span className="text-amber-400 font-medium">APIs</span> that bring my models to life. 
                I’ve developed interactive prototypes using <span className="text-purple-400 font-medium">Flask, HTML/CSS, and JavaScript</span>, 
                and integrated machine learning systems into functional user interfaces and dashboards.
              </p>

              <p>
                Beyond academics, I bring <span className="text-pink-400 font-medium">leadership</span>, <span className="text-rose-400 font-medium">teamwork</span>, and adaptability skills developed through hackathons,
                design challenges, and collaborative projects. My goal is to deepen my expertise in <span className="text-blue-300 font-medium">AI research</span> and
                contribute to building <span className="text-yellow-300 font-medium">innovative solutions</span> that create meaningful impact.
              </p>
            </div>

            <div className="flex justify-center pt-8">
              <Button
                className="glass glass-hover border border-white/20 hover:border-white/40 text-white font-semibold px-10 py-6 text-lg rounded-full group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
