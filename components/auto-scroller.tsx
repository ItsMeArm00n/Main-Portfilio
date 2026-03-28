"use client"

import { useState, useEffect, useRef } from "react"
import { Play, Pause, FastForward, Rewind } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function AutoScroller() {
  const [isScrolling, setIsScrolling] = useState(false)
  const [speed, setSpeed] = useState(0.5) // pixels per frame
  const [isVisible, setIsVisible] = useState(true)
  const requestRef = useRef<number>()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsScrolling(true)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  const animate = () => {
    // Scroll down by 'speed' pixels
    window.scrollBy({ top: speed, behavior: "auto" })
    
    // Check if we reached the bottom
    if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 2) {
        window.scrollTo(0, 0)
    }

    if (isScrolling) {
        requestRef.current = requestAnimationFrame(animate)
    }
  }

  useEffect(() => {
    if (isScrolling) {
      requestRef.current = requestAnimationFrame(animate)
    } else {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [isScrolling, speed])

  // Hide UI when scrolling starts to keep the video clean? 
  // Maybe just keep it minimal. User said "toggable... or hidden button".
  // Let's keep it visible but small.

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 z-50 group flex flex-col gap-2 transition-opacity duration-300 hover:opacity-100 opacity-50">
      <div className="flex gap-2">
        <Button
          variant={isScrolling ? "destructive" : "default"}
          size="icon"
          onClick={() => setIsScrolling(!isScrolling)}
          title={isScrolling ? "Pause Auto-Scroll" : "Start Demo Mode"}
          className="rounded-full shadow-lg h-10 w-10"
        >
          {isScrolling ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
        
        {isScrolling && (
            <>
                <Button
                    variant="secondary"
                    size="icon"
                    onClick={() => setSpeed(prev => Math.max(0.2, prev - 0.2))}
                    title="Slower"
                    className="rounded-full shadow-lg h-10 w-10"
                >
                   <Rewind className="h-4 w-4" /> 
                </Button>
                <div className="flex items-center justify-center bg-black/50 text-white rounded-full px-2 text-xs font-mono h-10 min-w-[3rem]">
                    {speed.toFixed(1)}x
                </div>
                <Button
                    variant="secondary"
                    size="icon"
                    onClick={() => setSpeed(prev => Math.min(5, prev + 0.2))}
                    title="Faster"
                    className="rounded-full shadow-lg h-10 w-10"
                >
                    <FastForward className="h-4 w-4" />
                </Button>
            </>
        )}
      </div>
    </div>
  )
}
