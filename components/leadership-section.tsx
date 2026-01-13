"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { 
  Users, 
  Palette, 
  Flag, 
  Shield, 
  Monitor, 
  School, 
  Heart,
  GraduationCap,
  ChevronRight,
  ChevronDown,
  Terminal,
  Cpu,
  Globe
} from "lucide-react"

interface LeadershipRole {
  id: string
  title: string
  role: string
  description: string
  icon: React.ReactNode
  color: string
  stats?: string
}

const leadershipRoles: LeadershipRole[] = [
  {
    id: "01",
    title: "AI & Mathematics",
    role: "Student Teacher",
    description: "Taught Grade 9 students foundational Computer Vision concepts and Trigonometry during Teacher’s Day, breaking down complex topics through clear explanations and real-world examples.",
    icon: <GraduationCap className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-500",
    stats: "Grade 9 • AI & Math"
  },
  {
    id: "02",
    title: "Innovista Competition",
    role: "Team Lead",
    description: "Directed multiple teams in competitive engineering challenges, orchestrating ideation sessions, technical implementations, and presentation strategies that secured top placements. Extended leadership to various inter-school competitions, cultivating collaborative environments and driving teams toward excellence through strategic oversight and motivational guidance.",
    icon: <Flag className="w-8 h-8" />,
    color: "from-orange-500 to-red-500",
    stats: "Multiple Teams • Leadership"
  },
  {
    id: "03",
    title: "Class Magazine",
    role: "Design Lead & Deputy Chief",
    description: "Led the visual design and layout of the class magazine, coordinated with writers and editors, managed timelines, and ensured consistency in creative direction and final publication quality.",
    icon: <Palette className="w-8 h-8" />,
    color: "from-purple-500 to-pink-500",
    stats: "Visual Design • Layout"
  },
  {
    id: "04",
    title: "Quix MUN",
    role: "Admin & Core Staff",
    description: "Served as an Admin at Quix MUN, managing committee operations, coordinating staff workflows, and ensuring smooth execution of the conference; recognized as Runner-Up Best Staff (Rank 2/60).",
    icon: <Shield className="w-8 h-8" />,
    color: "from-emerald-500 to-green-500",
    stats: "Rank 2/60 • Operations"
  },
  {
    id: "05",
    title: "School ICT Dept",
    role: "ICT Monitor",
    description: "Appointed as ICT Monitor for two consecutive years, responsible for managing classroom technology, assisting faculty with digital tools, and supporting the smooth conduct of tech-enabled sessions.",
    icon: <Monitor className="w-8 h-8" />,
    color: "from-cyan-500 to-blue-500",
    stats: "2 Years • Tech Support"
  },
  {
    id: "06",
    title: "Classroom Mgmt",
    role: "Class Monitor",
    description: "Served as Class Monitor for one academic year, acting as a liaison between students and faculty and supporting classroom coordination and discipline.",
    icon: <School className="w-8 h-8" />,
    color: "from-yellow-500 to-orange-500",
    stats: "1 Year • Coordination"
  },
  {
    id: "07",
    title: "Republic Day '25",
    role: "Volunteer",
    description: "Volunteered during the Republic Day Celebrations at The Indian High School, Oud Metha, contributing to event coordination and on-ground support for smooth execution.",
    icon: <Heart className="w-8 h-8" />,
    color: "from-pink-500 to-rose-500",
    stats: "Event • Coordination"
  },
  {
    id: "08",
    title: "Class Wellness",
    role: "Wellness Manager",
    description: "Promoted student well-being by organizing wellness activities, mental health awareness sessions, and fostering a positive classroom environment to support academic and personal growth.",
    icon: <Heart className="w-8 h-8" />,
    color: "from-green-500 to-teal-500",
    stats: "Wellness • Management"
  }
]

export default function LeadershipSection() {
  const [activeId, setActiveId] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const ref = useRef(null)
  const listRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const isVisible = useInView(ref, { amount: 0.2 }) // Track visibility for auto-scroll

  // Auto-scroll / Cycle logic
  useEffect(() => {
    if (isPaused || !isVisible) return

    const interval = setInterval(() => {
      setActiveId((prev) => (prev + 1) % leadershipRoles.length)
    }, 5000) // Cycle every 5 seconds

    return () => clearInterval(interval)
  }, [isPaused, isVisible])

  // Scroll active item into view
  useEffect(() => {
    if (listRef.current) {
      const activeElement = listRef.current.children[activeId] as HTMLElement
      if (activeElement) {
        const container = listRef.current
        const scrollTop = activeElement.offsetTop - container.offsetTop - (container.clientHeight / 2) + (activeElement.clientHeight / 2)
        
        container.scrollTo({
          top: scrollTop,
          behavior: "smooth"
        })
      }
    }
  }, [activeId])

  return (
    <section id="leadership" className="py-24 relative overflow-hidden bg-black">
      {/* Background Grid & Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] left-[10%] w-72 h-72 bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-blue-400 mb-4">
            <Terminal className="w-4 h-4" />
            <span>Leadership & Impact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
            Leading by Example
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Taking initiative and driving change through various leadership roles and community contributions.
          </p>
        </motion.div>

        <div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Column: Navigation List */}
          <div className="lg:col-span-5 relative">
            {/* Scroll Indicators */}
            <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none flex items-end justify-center pb-6">
              <div className="flex flex-col items-center gap-1 text-xs text-gray-500 font-mono animate-pulse">
                <span>SCROLL / AUTO-CYCLE</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>

            <div 
              ref={listRef}
              className="flex flex-col gap-3 max-h-[500px] overflow-y-auto pr-2 scrollbar-hide pb-24 pt-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {leadershipRoles.map((item, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setActiveId(index)}
                className={`group relative w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                  activeId === index 
                    ? "bg-white/10 border-white/20 shadow-lg shadow-black/20" 
                    : "bg-transparent border-transparent hover:bg-white/5 hover:border-white/5"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                      activeId === index ? `bg-gradient-to-br ${item.color} text-white` : "bg-white/5 text-gray-400 group-hover:text-white"
                    }`}>
                      {/* Render a smaller version of the icon here if needed, or just a number/dot */}
                      <span className="font-mono font-bold text-sm">{item.id}</span>
                    </div>
                    <div>
                      <h3 className={`font-semibold transition-colors duration-300 ${
                        activeId === index ? "text-white" : "text-gray-400 group-hover:text-white"
                      }`}>
                        {item.role}
                      </h3>
                      <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                        {item.title}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-all duration-300 ${
                    activeId === index ? "text-white opacity-100 translate-x-0" : "text-gray-600 opacity-0 -translate-x-2 group-hover:opacity-50"
                  }`} />
                </div>
                
                {/* Active Indicator Bar */}
                {activeId === index && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-xl bg-gradient-to-b ${item.color}`}
                  />
                )}
              </motion.button>
            ))}
            </div>
          </div>

          {/* Right Column: Detail View */}
          <div className="lg:col-span-7 relative min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                transition={{ duration: 0.4, ease: "circOut" }}
                className="relative h-full"
              >
                <div className="relative h-full p-8 md:p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden group">
                  {/* Decorative Background Gradients */}
                  <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${leadershipRoles[activeId].color} opacity-20 blur-[100px] rounded-full animate-pulse`} />
                  <div className={`absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr ${leadershipRoles[activeId].color} opacity-10 blur-[80px] rounded-full`} />
                  
                  {/* Tech Decorations */}
                  <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-white/10 rounded-tr-3xl" />
                  <div className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-white/10 rounded-bl-3xl" />
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-8">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${leadershipRoles[activeId].color} shadow-lg shadow-black/20 ring-1 ring-white/20`}>
                        <div className="text-white">
                          {leadershipRoles[activeId].icon}
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-6xl md:text-8xl font-bold text-white/5 font-mono tracking-tighter">
                          {leadershipRoles[activeId].id}
                        </span>
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 mt-[-1.5rem] backdrop-blur-md">
                          <Globe className="w-3 h-3" />
                          <span>{leadershipRoles[activeId].stats}</span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                      {leadershipRoles[activeId].role}
                    </h3>
                    <div className={`text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r ${leadershipRoles[activeId].color} mb-6`}>
                      {leadershipRoles[activeId].title}
                    </div>

                    <div className="w-full h-px bg-gradient-to-r from-white/20 to-transparent mb-6" />

                    <p className="text-gray-300 text-lg leading-relaxed flex-grow">
                      {leadershipRoles[activeId].description}
                    </p>

                    <div className="mt-8 flex items-center gap-4">
                      <div className="h-1 flex-grow bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
                          className={`h-full bg-gradient-to-r ${leadershipRoles[activeId].color}`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
