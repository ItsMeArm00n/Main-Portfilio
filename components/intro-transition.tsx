"use client"

import { useEffect, useState } from "react"

export function IntroTransition() {
  const [isAnimating, setIsAnimating] = useState(true)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    // Check if animation has already played in this session
    const hasPlayedBefore = sessionStorage.getItem("intro-animation-played")

    if (hasPlayedBefore) {
      setIsAnimating(false)
      setHasAnimated(true)
      return
    }

    const timer = setTimeout(() => {
      setIsAnimating(false)
      sessionStorage.setItem("intro-animation-played", "true")

      setTimeout(() => {
        setHasAnimated(true)
      }, 2000) // Match the new animation duration
    }, 800) // Longer delay before panels start moving

    return () => clearTimeout(timer)
  }, [])

  // Don't render if animation has completed
  if (hasAnimated) return null

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Top Panel */}
      <div
        className={`absolute top-0 left-0 w-full h-1/2 bg-background transition-transform ease-out ${
          isAnimating ? "translate-y-0 duration-0" : "-translate-y-full duration-[2000ms]"
        }`}
        style={{
          background: "linear-gradient(180deg, oklch(0.08 0.02 240) 0%, oklch(0.06 0.03 250) 100%)",
        }}
      />

      {/* Bottom Panel */}
      <div
        className={`absolute bottom-0 left-0 w-full h-1/2 bg-background transition-transform ease-out ${
          isAnimating ? "translate-y-0 duration-0" : "translate-y-full duration-[2000ms]"
        }`}
        style={{
          background: "linear-gradient(0deg, oklch(0.08 0.02 240) 0%, oklch(0.06 0.03 250) 100%)",
        }}
      />
    </div>
  )
}
