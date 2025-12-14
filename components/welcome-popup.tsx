"use client"

import { useEffect, useState } from "react"
import { X, Linkedin, Bug, Construction, Maximize, ArrowRight } from "lucide-react"

type PopupStep = 'welcome' | 'fullscreen' | 'closed'

export default function WelcomePopup() {
  const [step, setStep] = useState<PopupStep>('closed')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Start the flow
    setStep('welcome')
    setTimeout(() => setIsVisible(true), 100)
  }, [])

  const handleContinue = () => {
    // Check if already in fullscreen
    if (document.fullscreenElement) {
      closePopup()
    } else {
      // Transition to fullscreen suggestion immediately
      setStep('fullscreen')
    }
  }

  const handleRequestFullscreen = async () => {
    try {
      await document.documentElement.requestFullscreen()
    } catch (err) {
      console.error("Error attempting to enable full-screen mode:", err)
    }
    closePopup()
  }

  const closePopup = () => {
    setIsVisible(false)
    setTimeout(() => setStep('closed'), 500)
  }

  if (step === 'closed') return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-500 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={step === 'welcome' ? handleContinue : closePopup}
      />
      
      {/* Popup Container */}
      <div className={`relative w-full max-w-lg overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] shadow-2xl transition-all duration-500 ease-out ${
        isVisible 
          ? 'opacity-100 scale-100 translate-y-0' 
          : 'opacity-0 scale-95 translate-y-8'
      }`}>
        
        {step === 'welcome' ? (
          <>
            {/* Top Warning Strip */}
            <div className="h-1 w-full bg-gradient-to-r from-amber-500/0 via-amber-500 to-amber-500/0 opacity-50" />

            <div className="p-6 md:p-8 relative">
                {/* Header */}
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
                        onClick={handleContinue}
                        className="absolute top-4 right-4 text-white/20 hover:text-white transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Content */}
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
                        onClick={handleContinue}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-black/40 border border-amber-500/20 text-amber-500 hover:bg-amber-500/10 hover:border-amber-500/40 transition-all duration-300 font-medium text-sm"
                    >
                        <span>Continue to Site</span>
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
          </>
        ) : (
          <>
            {/* Fullscreen Suggestion Step */}
            <div className="h-1 w-full bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0 opacity-50" />

            <div className="p-6 md:p-8 relative text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20 flex items-center justify-center mb-6 shadow-inner shadow-blue-500/10">
                    <Maximize className="w-10 h-10 text-blue-400 drop-shadow-lg" />
                </div>

                <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">Optimize Your Experience</h2>
                <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-xs mx-auto">
                    For the most immersive and professional viewing experience, we recommend switching to full screen mode.
                </p>

                <div className="flex flex-col gap-3">
                    <button
                        onClick={handleRequestFullscreen}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-500 hover:to-blue-400 transition-all duration-300 font-medium shadow-lg shadow-blue-500/25 border border-blue-400/20"
                    >
                        <Maximize className="w-4 h-4" />
                        <span>Enter Full Screen</span>
                    </button>
                    <button
                        onClick={closePopup}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300 font-medium text-sm border border-white/5 hover:border-white/10"
                    >
                        Continue as is
                    </button>
                </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
