"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "About",
    "nav.portfolio": "Portfolio",
    "nav.articles": "Articles",
    "nav.talks": "Talks",
    "nav.streaming": "Streaming",
    "nav.hackathon": "Hackathon",
    "nav.contact": "Contact",

    // Hero Section
    "hero.greeting": "Welcome to my **personal portfolio**",
    "hero.title": "I vibecode and scale products people love",
    "hero.card1": "Expert in scalable product design & marketing.",
    "hero.card2": "Passionate about Web3, AI, and sustainability.",
    "hero.card3": "Remote work across 15+ countries as a digital nomad.",
    "hero.card4": "Helped 40+ companies with impactful solutions.",

    // Trusted By Section
    "trustedBy.title": "Trusted by",
    "trustedBy.subtitle":
      "Companies and organizations that have trusted my expertise to drive their digital transformation and growth strategies.",

    // Portfolio Section
    "portfolio.title": "Portfolio",
    "portfolio.subtitle": "Case studies and design projects showcasing user-centered solutions for digital products",

    // About Section
    "about.title": "ABOUT ME",
    "about.bio1":
      "Arturo Grande (Salta, 1995) is a *multimedia designer*, *entrepreneur*, and *technology enthusiast*. He served as *National Marketing Director* at *AIESEC* in Argentina and Spain, and is the founder and professor at *DESAFIA*, a program that helps entrepreneurs build and scale *digital products* globally.",
    "about.bio2":
      "He has spoken at *UX and technology events*, co-organized *SAIAConf*, and teaches in the postgraduate programs of *Digital Business (UCEMA)* and *CryptoEconomy (UNCUYO)*. Currently, he is *Head of Product & Marketing* at *Eluter*, leading *growth strategies* and *digital product design*.",
    "about.bio3":
      "He graduated from the *Polkadot Blockchain Academy X* and was selected as a *Scholar* for the *Devconnect 2025 Ethereum Community Organizers* track.",
    "about.links.title": "Links",
    "about.cta": "GET IN TOUCH",

    // Companies Section
    "companies.eluter.title": "More about Eluter",
    "companies.eluter.description":
      "**Eluter** is a **fintech platform** that simplifies **global payments** and **currency exchange** for companies in Argentina. It enables businesses to send, receive, and convert **ARS, USD, EUR, and stablecoins** with **speed, transparency, and compliance**, helping **importers, exporters, and e-commerce companies** grow internationally.",
    "companies.eluter.button": "More info",
    "companies.desafia.title": "More about DESAFIA",
    "companies.desafia.description":
      "**DESAFIA** is an **education platform** founded by **Arturo Grande** that helps **entrepreneurs and professionals** create and scale **digital products**. With a practical approach to **strategy, design, product, marketing, and finance**, DESAFIA trains the next generation of **builders in LATAM** to launch and grow their **startups globally**.",
    "companies.desafia.button": "More info",

    // Talks Section
    "talks.title": "Talks & Workshops",
    "talks.description":
      "I am an **international speaker**, delivering practical talks and workshops on **UX Design, Marketing, Sustainability**, and **exponential technologies** such as **crypto, blockchain, and Artificial Intelligence**. My approach combines **theory and practical experience** to empower **entrepreneurs and professionals** in the **digital era**.",
    "talks.cta": "REQUEST A TALK/WORKSHOP",
    "talks.argentina": "Argentina",
    "talks.international": "International",

    // Blog Section
    "blog.title": "Articles & Case Studies",
    "blog.subtitle": "Insights on design, technology, and business strategy from real projects and client work",
    "blog.readMore": "Read on Medium",
    "blog.noArticles": "No articles found. Check back soon!",
    "blog.viewAll": "View Latest 10 Articles",

    // Footer
    "footer.portfolio": "PORTFOLIO",
    "footer.portfolio.design": "Product Design",
    "footer.about": "ABOUT ME",
    "footer.about.bio": "Short Biography",
    "footer.about.talks": "Talks and Workshops",
    "footer.about.articles": "Articles",
    "footer.connect": "LET'S CONNECT",
    "footer.connect.project": "Have a project in mind?",
    "footer.connect.touch": "Get in touch",
    "footer.made": "MADE BY",

    // Streaming Section
    "streaming.title": "Live Streaming",
    "streaming.backHome": "Back to Home",
    "streaming.description":
      "Join me live for discussions about design, technology, and entrepreneurship. Follow along as I share insights, work on projects, and connect with the community.",
    "streaming.joinWhatsApp": "Join WhatsApp Group",

    // Hackathon Section
    "hackathon.backHome": "Back to Home",
  },
  es: {
    // Translations would go here for Spanish (es)
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
