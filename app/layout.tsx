import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"
import AutoScroller from "@/components/auto-scroller"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  preload: true,
  fallback: ["system-ui", "arial"],
})

export const metadata: Metadata = {
  title: "Armaan Kumar - Portfolio",
  description:
    "Personal portfolio of Armaan Kumar, a Grade 12 student and AI & Data Science enthusiast. Showcasing projects, skills, and achievements & awards in Python development and data science.",
  keywords: [
    "Armaan Kumar",
    "Portfolio",
    "AI Enthusiast",
    "Data Science",
    "Python Developer",
    "Machine Learning",
    "Student Projects",
    "Tech Portfolio",
    "Algorithms",
    "Web Development",
    "Software Engineering",
    "Data Analysis",
    "Predictive Modeling",
    "Neural Networks",
    "Deep Learning",
  ],
  authors: [{ name: "Armaan Kumar" }],
  creator: "Armaan Kumar",
  publisher: "Armaan Kumar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://armaan-ai.vercel.app",
    siteName: "Armaan Kumar Portfolio",
    title: "Armaan Kumar - AI & Data Science Portfolio",
    description:
      "Personal portfolio of Armaan Kumar, a Grade 12 student and AI & Data Science enthusiast. Showcasing projects, skills, and achievements & awards in Python development and data science.",
    images: [
      {
        url: "/images/portfolioimage.png",
        width: 1200,
        height: 630,
        alt: "Armaan Kumar - AI & Data Science Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Armaan Kumar - AI & Data Science Portfolio",
    description:
      "Personal portfolio of Armaan Kumar, a Grade 12 student and AI & Data Science enthusiast. Showcasing projects, skills, and achievements & awards in Python development and data science.",
    creator: "@armaan_kumar",
    images: ["/images/portfolioimage.png"],
  },
  alternates: {
    canonical: "https://armaan-ai.vercel.app",
  },    
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} antialiased`}>
      <head>
        <link rel="preload" href="/images/portfolioimage.png" as="image" type="image/png" />
        <link rel="dns-prefetch" href="https://medium.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </head>
      <body className={spaceGrotesk.className}>
        <LanguageProvider>
          {children}
          <AutoScroller />
        </LanguageProvider>
      </body>
    </html>
  )
}
