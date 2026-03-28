"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Trophy, Award, Star, Medal, GitCommit, Zap, Terminal, Bot, Palette, ArrowRight } from "lucide-react"
import styles from "./achievements-section.module.css"

interface Achievement {
  icon: React.ReactNode
  title: string
  description: React.ReactNode
  color: string
  status?: string
}

const achievements: Achievement[] = [
  {
    icon: <Bot className="w-10 h-10 text-cyan-400" />,
    title: "TechSprint – Leveraging the Power of AI Hackathon",
    description: <>Qualified for finals (Top 25 among 500+ participants) <span className="font-bold text-cyan-300">(Top 5%)</span>.</>,
    color: "from-cyan-500/20 to-blue-900/20",
    status: "Ongoing",
  },
  {
    icon: <Terminal className="w-10 h-10 text-cyan-400" />,
    title: "Finalist – Quantathon (Shaastra)",
    description: <>Qualified for the Grand Finale (Top 6 Nationwide) <span className="font-bold text-cyan-300">(Top 0.6%)</span> in a high-stakes algorithmic challenge among ~1000 participants.</>,
    color: "from-cyan-500/20 to-blue-900/20",
    status: "Ongoing",
  },
  {
    icon: <GitCommit className="w-10 h-10 text-green-400" />,
    title: "1st Place – Commit & Conquer",
    description: <>Ranked 1st <span className="font-bold text-green-300">(Top 0.25%)</span> among 400+ contributors in an Open-Source Hackathon.</>,
    color: "from-green-500/20 to-emerald-900/20",
  },
  {
    icon: <Zap className="w-10 h-10 text-orange-400" />,
    title: "National Finalist – SwastAI",
    description: <><span className="font-bold text-orange-300">Shortlisted</span> for Round 2 (Grand Finale) of the Bharath Innovation Challenge for an AI-driven holistic health platform.</>,
    color: "from-orange-500/20 to-red-900/20",
    status: "Ongoing",
  },

  {
    icon: <Medal className="w-10 h-10 text-blue-400" />,
    title: "3rd Place – Innovista (Eco Haven)",
    description: <>Came <span className="font-bold text-blue-300">3rd place</span> by developing 'Eco Haven' featuring Arduino-based autonomous plant systems, self-healing materials (concrete/circuits), and a robot fish that eats plastic.</>,
    color: "from-blue-500/20 to-indigo-900/20",
  },
  {
    icon: <Bot className="w-10 h-10 text-blue-400" />,
    title: "Google Gemini AI – Excellence",
    description: <>Awarded for <span className="font-bold text-blue-300">outstanding performance</span> and knowledge sharing during 'The Future is Now' AI ambassador session among 500+ people.</>,
    color: "from-blue-400/20 to-cyan-900/20",
  },
  {
    icon: <Trophy className="w-10 h-10 text-yellow-400" />,
    title: "1st Place – Techfest AI",
    description: <>Came <span className="font-bold text-yellow-300">first place</span> by leading the presentation of a winning AI project across a competitive field of three schools.</>,
    color: "from-yellow-500/20 to-amber-900/20",
  },
  {
    icon: <Award className="w-10 h-10 text-purple-400" />,
    title: "Project Prometheus (Spectrum)",
    description: <>Won '<span className="font-bold text-purple-300">Best Theme Relevance</span>' for a scientific model converting carbon compounds into graphene.</>,
    color: "from-purple-500/20 to-fuchsia-900/20",
  },

  {
    icon: <Terminal className="w-10 h-10 text-emerald-400" />,
    title: "Tough Tongue AI Challenge",
    description: <>Achieved <span className="font-bold text-emerald-300">Top 5%</span> (Rank 24/440) in a technical challenge covering AI logic and coding puzzles.</>,
    color: "from-emerald-500/20 to-teal-900/20",
  },
  {
    icon: <Star className="w-10 h-10 text-yellow-400" />,
    title: "Quiz-A-Thon 1.0",
    description: <>Achieved <span className="font-bold text-yellow-300">Top 4%</span> (Rank 19/471) in an advanced JavaScript and technical MCQ assessment.</>,
    color: "from-yellow-500/20 to-orange-900/20",
  },
  {
    icon: <GitCommit className="w-10 h-10 text-indigo-400" />,
    title: "Elite Coders Winter of Code",
    description: <>Achieved Rank 24 <span className="font-bold text-indigo-300">(Top 2.4%)</span> (as of January 5, 2026) in an exclusive 1,000+ developer community for open-source contribution.</>,
    color: "from-indigo-500/20 to-purple-900/20",
    status: "Ongoing",
  },
  {
    icon: <Award className="w-10 h-10 text-purple-400" />,
    title: "Runner-Up Best Staff (Quix MUN)",
    description: <>Recognized as the <span className="font-bold text-purple-300">Top 3%</span> of the Staff Board (Rank 2/60) for leadership and operational excellence.</>,
    color: "from-purple-500/20 to-violet-900/20",
  },
  {
    icon: <Palette className="w-10 h-10 text-pink-400" />,
    title: "VCREATE Creative Award",
    description: <>Recognized for <span className="font-bold text-pink-300">independent thinking</span> and creative problem-solving in multidisciplinary projects.</>,
    color: "from-pink-500/20 to-rose-900/20",
  },
  {
    icon: <Zap className="w-10 h-10 text-yellow-300" />,
    title: "Ignited Mind Award",
    description: <>Honored for <span className="font-bold text-yellow-300">consistent academic excellence</span> and superior performance in school enrichment assessments.</>,
    color: "from-yellow-400/20 to-orange-900/20",
  },
];

export default function AchievementsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const autoPlayTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (autoPlayTimeoutRef.current) {
        clearTimeout(autoPlayTimeoutRef.current)
      }
    }
  }, [])

  const handleCardClick = (index: number) => {
    setActiveIndex(index)
    setIsAutoPlaying(false)
    
    // Clear any existing timeout
    if (autoPlayTimeoutRef.current) {
      clearTimeout(autoPlayTimeoutRef.current)
    }
    
    // Restart auto-play after 5 seconds
    autoPlayTimeoutRef.current = setTimeout(() => {
      setIsAutoPlaying(true)
    }, 5000)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % achievements.length)
    setIsAutoPlaying(false)
    
    if (autoPlayTimeoutRef.current) {
      clearTimeout(autoPlayTimeoutRef.current)
    }
    
    autoPlayTimeoutRef.current = setTimeout(() => {
      setIsAutoPlaying(true)
    }, 5000)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + achievements.length) % achievements.length)
    setIsAutoPlaying(false)
    
    if (autoPlayTimeoutRef.current) {
      clearTimeout(autoPlayTimeoutRef.current)
    }
    
    autoPlayTimeoutRef.current = setTimeout(() => {
      setIsAutoPlaying(true)
    }, 5000)
  }

  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % achievements.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const getCardStyle = (index: number) => {
    const total = achievements.length
    let diff = (index - activeIndex + total) % total
    
    if (diff > total / 2) {
      diff -= total
    }

    // Base transform to center the card
    const baseTransform = "translateX(-50%)"

    if (diff === 0) {
      return {
        zIndex: 30,
        opacity: 1,
        transform: `${baseTransform} scale(1) translateZ(0)`,
        filter: "blur(0px)",
        left: "50%",
        pointerEvents: "auto" as const,
      }
    } 
    
    if (isMobile) {
      // Stack effect for mobile
      if (diff === 1) {
        return {
          zIndex: 20,
          opacity: 0.7,
          transform: `${baseTransform} translateY(-15px) scale(0.95) translateZ(-50px)`,
          filter: "blur(1px)",
          left: "50%",
          pointerEvents: "none" as const,
        }
      } else if (diff === 2) {
        return {
          zIndex: 10,
          opacity: 0.4,
          transform: `${baseTransform} translateY(-30px) scale(0.9) translateZ(-100px)`,
          filter: "blur(2px)",
          left: "50%",
          pointerEvents: "none" as const,
        }
      }
    } else {
      // Carousel effect for desktop
      if (diff === 1 || diff === -1) {
        const xOffset = diff === 1 ? "500px" : "-500px"
        return {
          zIndex: 20,
          opacity: 0.5,
          transform: `${baseTransform} translateX(${xOffset}) scale(0.8) translateZ(-100px)`,
          filter: "blur(1px)",
          left: "50%",
          pointerEvents: "auto" as const,
          cursor: "pointer",
        }
      } else if (diff === 2 || diff === -2) {
        const xOffset = diff === 2 ? "900px" : "-900px"
        return {
          zIndex: 10,
          opacity: 0.2,
          transform: `${baseTransform} translateX(${xOffset}) scale(0.6) translateZ(-200px)`,
          filter: "blur(3px)",
          left: "50%",
          pointerEvents: "auto" as const,
          cursor: "pointer",
        }
      }
    }

    // Hidden state
    return {
      zIndex: 0,
      opacity: 0,
      transform: `${baseTransform} scale(0.5) translateZ(-300px)`,
      filter: "blur(10px)",
      left: "50%",
      pointerEvents: "none" as const,
    }
  }

  const sectionRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleWheelEvent = (e: WheelEvent) => {
      // Prevent the default scroll behavior of the page
      e.preventDefault()
      e.stopPropagation()
      
      if (scrollTimeoutRef.current) return

      if (e.deltaY > 0) {
        handleNext()
      } else {
        handlePrev()
      }

      scrollTimeoutRef.current = setTimeout(() => {
        scrollTimeoutRef.current = null
      }, 300)
    }

    // Add non-passive event listener to prevent scrolling
    container.addEventListener('wheel', handleWheelEvent, { passive: false })

    return () => {
      container.removeEventListener('wheel', handleWheelEvent)
    }
  }, []) // Empty dependency array is fine as handleNext/Prev use functional state updates or refs

  return (
    <section 
      ref={sectionRef}
      id="achievements" 
      className="py-24 relative overflow-hidden bg-black min-h-[600px] flex flex-col justify-center"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800/20 via-black to-black"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Achievements & Awards
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Tap the card to reveal the next milestone.
          </p>
        </div>

        <div className={styles.container} ref={containerRef}>
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`${styles.card} ${achievement.status === "Ongoing" ? styles.ongoingCard : ''}`}
              style={getCardStyle(index)}
              onClick={() => handleCardClick(index)}
            >
              {/* Dynamic background gradient based on achievement type */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-20`}></div>
              
              {achievement.status === "Ongoing" && (
                <div className={styles.ongoingBadge}>
                  <div className={styles.pulseDot}></div>
                  <span>Ongoing Competition</span>
                </div>
              )}
              
              <div className={styles.cardContent}>
                <div className={styles.leftColumn}>
                  <div className={styles.iconWrapper}>
                    {achievement.icon}
                  </div>
                  <div className={styles.indexBadge}>
                    {String(index + 1).padStart(2, '0')} / {String(achievements.length).padStart(2, '0')}
                  </div>
                  <div className={styles.prevHint} onClick={(e) => { e.stopPropagation(); handlePrev(); }}>
                    <ArrowRight className="w-4 h-4 rotate-180" />
                    <span>Prev</span>
                  </div>
                </div>
                
                <div className={styles.rightColumn}>
                  {/* Status indicated by card glow */}
                  <h3 className={styles.cardTitle}>{achievement.title}</h3>
                  <p className={styles.cardDescription}>{achievement.description}</p>
                  
                  <div className={styles.swipeHint} onClick={(e) => { e.stopPropagation(); handleNext(); }}>
                    <span>Next</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-12 relative z-20">
          {achievements.map((_, index) => (
            <button
              key={index}
              onClick={() => handleCardClick(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? "bg-white w-8" 
                  : "bg-white/20 w-2 hover:bg-white/50"
              }`}
              aria-label={`Go to achievement ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
