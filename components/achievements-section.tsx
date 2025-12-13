"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Trophy, Award, Star, Medal, GitCommit, Zap, Terminal, Bot, Palette, ArrowRight } from "lucide-react"
import styles from "./achievements-section.module.css"

interface Achievement {
  icon: React.ReactNode
  title: string
  description: string
  color: string
}

const achievements: Achievement[] = [
  {
    icon: <GitCommit className="w-10 h-10 text-green-400" />,
    title: "1st Place – Commit & Conquer",
    description: "Top-ranked contributor among 400+ participants in Open-Source Hackathon.",
    color: "from-green-500/20 to-emerald-900/20",
  },
  {
    icon: <Trophy className="w-10 h-10 text-yellow-400" />,
    title: "1st Place – Techfest AI",
    description: "Led and presented winning AI project across 3 schools.",
    color: "from-yellow-500/20 to-amber-900/20",
  },
  {
    icon: <Medal className="w-10 h-10 text-blue-400" />,
    title: "3rd Place – Innovista 2025",
    description: "Led interdisciplinary team for “Eco Haven” – AI-integrated sustainable urban living system.",
    color: "from-blue-500/20 to-indigo-900/20",
  },
  {
    icon: <Zap className="w-10 h-10 text-yellow-300" />,
    title: "Ignited Mind Award",
    description: "Recognized for innovative thinking and academic curiosity.",
    color: "from-yellow-400/20 to-orange-900/20",
  },
  {
    icon: <Award className="w-10 h-10 text-purple-400" />,
    title: "Spectrum Science Exhibition",
    description: "Best project relevance to theme.",
    color: "from-purple-500/20 to-fuchsia-900/20",
  },
  {
    icon: <Terminal className="w-10 h-10 text-emerald-400" />,
    title: "Tough Tongue AI Challenge",
    description: "Rank 24 with 100% scores among college students.",
    color: "from-emerald-500/20 to-teal-900/20",
  },
  {
    icon: <Bot className="w-10 h-10 text-blue-400" />,
    title: "Google Gemini AI Webinar",
    description: "Certificate of Excellence for Outstanding Performance.",
    color: "from-blue-400/20 to-cyan-900/20",
  },
  {
    icon: <Star className="w-10 h-10 text-yellow-200" />,
    title: "Elite Student – JAZZ ROCKERS",
    description: "Winter Camp 2019 Award.",
    color: "from-yellow-300/20 to-amber-900/20",
  },
  {
    icon: <Palette className="w-10 h-10 text-pink-400" />,
    title: "VCREATE Award",
    description: "Awarded for exhibiting excellent creativity and independent thinking.",
    color: "from-pink-500/20 to-rose-900/20",
  },
]

export default function AchievementsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const autoPlayTimeoutRef = useRef<NodeJS.Timeout | null>(null)

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

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-black min-h-[600px] flex flex-col justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800/20 via-black to-black"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Achievements
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Tap the card to reveal the next milestone.
          </p>
        </div>

        <div className={styles.container}>
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={styles.card}
              style={getCardStyle(index)}
              onClick={() => handleCardClick(index)}
            >
              {/* Dynamic background gradient based on achievement type */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-20`}></div>
              
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
      </div>
    </section>
  )
}
