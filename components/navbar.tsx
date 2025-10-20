"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false)
  const moreDropdownRef = useState<HTMLDivElement | null>(null)[0];

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Click outside to close More dropdown
  useEffect(() => {
    if (!isMoreDropdownOpen) return;
    const handleClick = (e: MouseEvent) => {
      const dropdown = document.getElementById("more-dropdown");
      const button = document.getElementById("more-button");
      if (
        dropdown &&
        !dropdown.contains(e.target as Node) &&
        button &&
        !button.contains(e.target as Node)
      ) {
        setIsMoreDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [isMoreDropdownOpen]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
    setIsMoreDropdownOpen(false)
  }

  return (
    <nav
      className={`fixed top-6 w-full z-50 transition-all duration-300 outline-none ${isScrolled ? "px-4 py-1" : ""}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-300 ${
          isScrolled
            ? "glass rounded-2xl px-6 py-2 border border-white/15"
            : "px-4 sm:px-6 py-3 border border-transparent"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="text-lg sm:text-xl font-bold text-white md:flex-1">
            Armaan Kumar
          </Link>

          <div className="hidden md:flex items-center space-x-6 mr-6">
            <button
              onClick={() => scrollToSection("about")}
              className="nav-item text-white/75 hover:text-white transition-colors relative"
              aria-label="Navigate to about section"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("certifications-section")}
              className="nav-item text-white/75 hover:text-white transition-colors relative"
              aria-label="Navigate to certifications section"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="nav-item text-white/75 hover:text-white transition-colors relative"
              aria-label="Navigate to projects section"
            >
              Projects
            </button>

            <div className="relative">
              <button
                id="more-button"
                className="nav-item text-white/75 hover:text-white transition-colors relative flex items-center gap-1"
                aria-label="More navigation options"
                aria-expanded={isMoreDropdownOpen}
                onClick={() => setIsMoreDropdownOpen((open) => !open)}
                type="button"
              >
                More
                <ChevronDown className={`w-4 h-4 transition-transform ${isMoreDropdownOpen ? "rotate-180" : "rotate-0"}`} />
              </button>

              {isMoreDropdownOpen && (
                <div
                  id="more-dropdown"
                  className="absolute top-full left-0 mt-2 w-56 glass rounded-xl border border-white/20 shadow-xl overflow-hidden z-50"
                  role="menu"
                >
                    <button
                      onClick={() => scrollToSection('about')}
                      className="w-full text-left px-4 py-3 text-white/75 hover:text-white hover:bg-white/10 transition-colors"
                      role="menuitem"
                    >
                      About Me
                    </button>
                    <button
                      onClick={() => scrollToSection('certifications-banner')}
                      className="w-full text-left px-4 py-3 text-white/75 hover:text-white hover:bg-white/10 transition-colors"
                      role="menuitem"
                    >
                      Certifications & Courses
                    </button>
                  <button
                    onClick={() => scrollToSection('skills')}
                    className="w-full text-left px-4 py-3 text-white/75 hover:text-white hover:bg-white/10 transition-colors"
                    role="menuitem"
                  >
                    Skills & Tools
                  </button>
                  <button
                    onClick={() => scrollToSection('achievements')}
                    className="w-full text-left px-4 py-3 text-white/75 hover:text-white hover:bg-white/10 transition-colors"
                    role="menuitem"
                  >
                    Achievements
                  </button>
                  <button
                    onClick={() => scrollToSection("ongoing")}
                    className="w-full text-left px-4 py-3 text-white/75 hover:text-white hover:bg-white/10 transition-colors"
                    role="menuitem"
                  >
                    Ongoing Projects
                  </button>
                  <button
                    onClick={() => scrollToSection("publications")}
                    className="w-full text-left px-4 py-3 text-white/75 hover:text-white hover:bg-white/10 transition-colors"
                    role="menuitem"
                  >
                    Publications
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection("contact")}
              className="nav-item text-white/75 hover:text-white transition-colors relative"
              aria-label="Navigate to contact section"
            >
              Contact
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-white/80 transition-colors glass p-2 rounded-lg"
              aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass rounded-lg p-4" role="menu">
            <div className="flex flex-col space-y-4 text-center">
              <button
                onClick={() => scrollToSection("about")}
                className="text-white hover:text-white/80 transition-colors py-2"
                role="menuitem"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("certifications-section")}
                className="text-white hover:text-white/80 transition-colors py-2"
                role="menuitem"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-white hover:text-white/80 transition-colors py-2"
                role="menuitem"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-white hover:text-white/80 transition-colors py-2"
                role="menuitem"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("achievements")}
                className="text-white hover:text-white/80 transition-colors py-2"
                role="menuitem"
              >
                Achievements
              </button>
              <button
                onClick={() => scrollToSection("ongoing")}
                className="text-white hover:text-white/80 transition-colors py-2"
                role="menuitem"
              >
                Ongoing Projects
              </button>
              <button
                onClick={() => scrollToSection("publications")}
                className="text-white hover:text-white/80 transition-colors py-2"
                role="menuitem"
              >
                Publications
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white hover:text-white/80 transition-colors py-2"
                role="menuitem"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
