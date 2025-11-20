"use client"

import { useEffect, useState } from "react"
import { X, Linkedin } from "lucide-react"

export default function WelcomePopup() {
  const [open, setOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    // Show popup container immediately
    setOpen(true)
    // Trigger animation after a short delay
    setTimeout(() => {
      setIsVisible(true)
    }, 100)
  }, [])

  const handleClose = () => {
    setIsClosing(true)
    setIsVisible(false)
    // Wait for animation to complete before hiding
    setTimeout(() => {
      setOpen(false)
      setIsClosing(false)
    }, 600)
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
      />
      
      {/* Popup */}
      <div className={`relative bg-gradient-to-br from-[#212121] via-[#1a1a1a] to-[#0a0a0a] border border-white/10 rounded-lg max-w-md w-full shadow-2xl transition-all duration-500 ease-out ${
        isVisible 
          ? 'opacity-100 scale-100 translate-y-0' 
          : 'opacity-0 scale-95 translate-y-4'
      }`}>
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-white/40 hover:text-white/80 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="p-8">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-xl font-light text-white mb-2 tracking-wide">
              <span className="inline-block animate-pulse">🚧</span> Under Construction
            </h2>
            <div className="relative w-full h-px bg-white/5 overflow-hidden rounded-full">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 animate-loading-bar rounded-full"></div>
            </div>
          </div>

          {/* Body */}
          <div className="space-y-3 text-white/70 text-sm leading-relaxed">
            <p>
              This website is still under construction. Some sections may be outdated or incomplete.
            </p>
            <p>
              For the most up-to-date information, feel free to check out my LinkedIn:
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-6">
            {/* Follow me Button */}
            <a
              href="https://www.linkedin.com/in/armaan-kumar-631868343"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center flex-1 px-4 py-2.5 bg-black/40 border border-blue-500/30 rounded-lg overflow-hidden cursor-pointer transition-all duration-500 hover:bg-[#0077b5] hover:border-[#0077b5] hover:pr-10"
            >
              <span className="relative text-blue-400 font-medium text-sm whitespace-nowrap transition-colors duration-500 group-hover:text-white pointer-events-none">
                Follow me
              </span>
              <Linkedin className="absolute right-2.5 top-1/2 -translate-y-1/2 translate-x-[100px] w-5 h-5 text-white opacity-0 transition-all duration-300 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 group-hover:delay-300" />
            </a>

            {/* Continue Button */}
            <button
              onClick={handleClose}
              className="group relative flex-1 px-4 py-2.5 text-sm border border-white/10 rounded-lg transition-all duration-500 hover:border-white/20 hover:bg-white/5 hover:pr-10 overflow-hidden"
            >
              <span className="relative text-white/80 font-medium whitespace-nowrap transition-colors duration-500 group-hover:text-white pointer-events-none">
                Continue
              </span>
              <span className="absolute right-2.5 top-1/2 -translate-y-1/2 translate-x-[100px] text-white text-base font-bold opacity-0 transition-all duration-300 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 group-hover:delay-300">
                &lt;/&gt;
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
