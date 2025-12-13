"use client"

import { useEffect, useState } from "react"
import { X, Linkedin, Bug, Construction } from "lucide-react"

export default function WelcomePopup() {
  const [open, setOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show popup container immediately
    setOpen(true)
    // Trigger animation after a short delay
    setTimeout(() => {
      setIsVisible(true)
    }, 100)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    // Wait for animation to complete before hiding
    setTimeout(() => {
      setOpen(false)
    }, 500)
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-500 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
      />
      
      {/* Popup Container */}
      <div className={`relative w-full max-w-lg overflow-hidden rounded-xl border border-amber-500/20 bg-[#0a0a0a] shadow-2xl transition-all duration-500 ease-out ${
        isVisible 
          ? 'opacity-100 scale-100 translate-y-0' 
          : 'opacity-0 scale-95 translate-y-8'
      }`}>
        
        {/* Top Warning Strip */}
        <div className="h-1 w-full bg-gradient-to-r from-amber-500/0 via-amber-500 to-amber-500/0 opacity-50" />

        {/* Content Wrapper */}
        <div className="p-6 md:p-8 relative">
            
            {/* Header Section */}
            <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-500 shrink-0">
                    <Construction className="w-6 h-6 animate-pulse" />
                </div>
                <div className="flex flex-col">
                    <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                        Development in progress
                        <span className="px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-mono text-amber-500 uppercase tracking-wider">
                            Beta
                        </span>
                    </h2>
                </div>
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-white/20 hover:text-white transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>

            {/* Message Body */}
            <div className="space-y-4 mb-8">
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <div className="flex items-start gap-3">
                        <Bug className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                        <div className="space-y-1">
                            <p className="text-sm font-medium text-white/90">
                                Expect Visual Bugs & Misalignments
                            </p>
                            <p className="text-xs text-white/50 leading-relaxed">
                                This portfolio is currently under active construction. You may encounter broken layouts, glitchy animations, or incomplete sections.
                            </p>
                        </div>
                    </div>
                </div>
                
                <p className="text-sm text-white/60 leading-relaxed">
                    I'm pushing updates live as I build. Some information may be missing or outdated. For a stable view of my professional background, please visit my LinkedIn.
                </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
                <a
                    href="https://www.linkedin.com/in/armaan-kumar-631868343"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#0077b5]/10 border border-[#0077b5]/20 text-[#0077b5] hover:bg-[#0077b5] hover:text-white transition-all duration-300 font-medium text-sm group"
                >
                    <Linkedin className="w-4 h-4" />
                    <span>Visit LinkedIn</span>
                </a>
                <button
                    onClick={handleClose}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-black/40 border border-amber-500/20 text-amber-500 hover:bg-amber-500/10 hover:border-amber-500/40 transition-all duration-300 font-medium text-sm"
                >
                    <span>Continue</span>
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}
