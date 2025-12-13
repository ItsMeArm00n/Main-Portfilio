"use client"

import React, { useState, useEffect, useRef } from "react"
import { Code, Database, Palette, Wrench, Laptop, Brain, Cpu, Globe, Terminal, Layers } from "lucide-react"
import styles from "./skills-section.module.css"

// Data Structure
interface Skill {
  name: string
}

interface Category {
  id: string
  title: string
  icon: React.ReactNode
  skills: Skill[]
  angle: number // Angle in degrees on the circle
  color: string
}

const categories: Category[] = [
  {
    id: "ai",
    title: "AI & ML",
    icon: <Brain />,
    angle: 270, // Top
    color: "#ec4899", // Pink
    skills: [
      { name: "Python" },
      { name: "TensorFlow" },
      { name: "PyTorch" },
      { name: "Scikit-learn" },
      { name: "Pandas" },
      { name: "NumPy" },
    ],
  },
  {
    id: "dev",
    title: "Development",
    icon: <Code />,
    angle: 342, // Top Right
    color: "#3b82f6", // Blue
    skills: [
      { name: "React / Next.js" },
      { name: "TypeScript" },
      { name: "Node.js" },
      { name: "FastAPI" },
      { name: "HTML/CSS" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    icon: <Terminal />,
    angle: 54, // Bottom Right
    color: "#f59e0b", // Amber
    skills: [
      { name: "Git / GitHub" },
      { name: "Docker" },
      { name: "VS Code" },
      { name: "Linux" },
      { name: "Postman" },
    ],
  },
  {
    id: "design",
    title: "Design",
    icon: <Palette />,
    angle: 126, // Bottom Left
    color: "#8b5cf6", // Purple
    skills: [
      { name: "Figma" },
      { name: "UI/UX" },
      { name: "Tailwind CSS" },
      { name: "Canva" },
      { name: "Prototyping" },
    ],
  },
  {
    id: "soft",
    title: "Soft Skills",
    icon: <Layers />,
    angle: 198, // Top Left
    color: "#10b981", // Emerald
    skills: [
      { name: "Leadership" },
      { name: "Problem Solving" },
      { name: "Communication" },
      { name: "Agile" },
      { name: "Teamwork" },
    ],
  },
]

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [showAll, setShowAll] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [showTutorial, setShowTutorial] = useState(true)
  const [dimensions, setDimensions] = useState({ width: 1000, height: 600 })
  const containerRef = useRef<HTMLDivElement>(null)

  // Update dimensions on resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width } = containerRef.current.getBoundingClientRect()
        // Maintain aspect ratio but limit height
        const height = Math.min(width * 0.6, 600)
        setDimensions({ width, height })
      }
    }
    
    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  // Auto-play loop
  useEffect(() => {
    if (!isAutoPlaying || showAll) return

    const interval = setInterval(() => {
      setActiveCategory((prev) => {
        // If no category is active, start with the first one
        if (!prev) return categories[0].id
        
        const currentIndex = categories.findIndex(c => c.id === prev)
        const nextIndex = (currentIndex + 1) % categories.length
        return categories[nextIndex].id
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, showAll])

  const handleCenterClick = () => {
    setShowAll(!showAll)
    setActiveCategory(null)
    setIsAutoPlaying(false)
    setShowTutorial(false)
  }

  const handleCategoryHover = (id: string) => {
    if (showAll) return
    setActiveCategory(id)
    setIsAutoPlaying(false)
    setShowTutorial(false)
  }

  const handleCategoryLeave = () => {
    if (showAll) return
    setActiveCategory(null)
    setIsAutoPlaying(true)
  }

  // Calculate positions
  const centerX = dimensions.width / 2
  const centerY = dimensions.height / 2
  
  // Elliptical radii for wider spread (Reduced for better visibility)
  const categoryRadiusX = dimensions.width * 0.30
  const categoryRadiusY = dimensions.height * 0.35
  
  const skillRadiusX = dimensions.width * 0.42
  const skillRadiusY = dimensions.height * 0.45

  const getPosition = (angle: number, radiusX: number, radiusY: number) => {
    const radian = (angle * Math.PI) / 180
    return {
      x: centerX + radiusX * Math.cos(radian),
      y: centerY + radiusY * Math.sin(radian),
    }
  }

  return (
    <section id="skills" className="pt-20 pb-10 bg-black relative overflow-hidden">
      <div className="text-center mb-2 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Skills Mindmap</h2>
        <p className="text-white/60">Interactive visualization of my technical expertise</p>
      </div>

      <div className={styles.container}>
        <div className={styles.mindmapWrapper} ref={containerRef}>
          
          {/* SVG Connections Layer */}
          <svg className={styles.svgLayer}>
            {categories.map((cat) => {
              const catPos = getPosition(cat.angle, categoryRadiusX, categoryRadiusY)
              const isActive = showAll || activeCategory === cat.id

              return (
                <React.Fragment key={cat.id}>
                  {/* Line from Center to Category */}
                  <line
                    x1={centerX}
                    y1={centerY}
                    x2={catPos.x}
                    y2={catPos.y}
                    className={`${styles.connectionLine} ${isActive ? styles.active : ""}`}
                    style={{ 
                      opacity: isActive ? 1 : 0.1,
                      stroke: isActive ? cat.color : undefined
                    }}
                  />

                  {/* Lines from Category to Skills */}
                  {cat.skills.map((skill, index) => {
                    const spread = 60
                    const startAngle = cat.angle - spread / 2
                    const step = spread / (cat.skills.length - 1 || 1)
                    const skillAngle = startAngle + index * step
                    const skillPos = getPosition(skillAngle, skillRadiusX, skillRadiusY)

                    return (
                      <line
                        key={skill.name}
                        x1={catPos.x}
                        y1={catPos.y}
                        x2={skillPos.x}
                        y2={skillPos.y}
                        className={`${styles.connectionLine} ${isActive ? styles.active : ""}`}
                        style={{ 
                          opacity: isActive ? 0.6 : 0,
                          stroke: isActive ? cat.color : undefined
                        }}
                      />
                    )
                  })}
                </React.Fragment>
              )
            })}
          </svg>

          {/* Center Node */}
          <div 
            className={`${styles.node} ${styles.centerNode} ${showAll ? styles.active : ""}`}
            style={{ left: centerX, top: centerY }}
            onClick={handleCenterClick}
          >
            <div className={styles.coreInner} />
            <div className={styles.coreOuter} />
            <Cpu className="w-10 h-10 text-white relative z-10" />
          </div>

          {/* Tutorial Hint */}
          <div className={`${styles.tutorialHint} ${styles.visible}`}>
            <div className={styles.pointer} />
            <div className={styles.hintText}>Click center to view all</div>
            <div className={styles.subHintText}>Hover categories to explore</div>
          </div>

          {/* Collapse Hint (only when expanded) */}
          <div 
            className={`${styles.collapseHint} ${showAll ? styles.visible : ""}`}
            style={{ top: centerY }}
          >
            Click center to collapse
          </div>

          {/* Category Nodes */}
          {categories.map((cat) => {
            const pos = getPosition(cat.angle, categoryRadiusX, categoryRadiusY)
            const isActive = showAll || activeCategory === cat.id

            return (
              <div
                key={cat.id}
                className={`${styles.node} ${styles.categoryNode} ${isActive ? styles.active : ""}`}
                style={{ 
                  left: pos.x, 
                  top: pos.y,
                  '--category-color': cat.color
                } as React.CSSProperties}
                onMouseEnter={() => handleCategoryHover(cat.id)}
                onMouseLeave={handleCategoryLeave}
              >
                <div className={styles.icon} style={{ color: isActive ? cat.color : undefined }}>
                  {cat.icon}
                </div>
                <span className={styles.label} style={{ color: isActive ? cat.color : undefined }}>
                  {cat.title}
                </span>
              </div>
            )
          })}

          {/* Skill Nodes (Leafs) */}
          {categories.map((cat) => {
            const isActive = showAll || activeCategory === cat.id
            
            return cat.skills.map((skill, index) => {
              const spread = 60
              const startAngle = cat.angle - spread / 2
              const step = spread / (cat.skills.length - 1 || 1)
              const skillAngle = startAngle + index * step
              const pos = getPosition(skillAngle, skillRadiusX, skillRadiusY)

              return (
                <div
                  key={skill.name}
                  className={`${styles.node} ${styles.skillNode} ${isActive ? styles.visible : ""}`}
                  style={{ 
                    left: pos.x, 
                    top: pos.y,
                    transitionDelay: isActive ? `${index * 50}ms` : '0ms',
                    '--category-color': cat.color,
                    borderColor: isActive ? cat.color : undefined,
                    boxShadow: isActive ? `0 0 15px ${cat.color}40` : undefined
                  } as React.CSSProperties}
                >
                  {skill.name}
                </div>
              )
            })
          })}

        </div>
      </div>
    </section>
  )
}
