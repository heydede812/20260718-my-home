'use client'

import { useState, useEffect } from 'react'

export default function NewHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-brand-white/80 dark:bg-brand-charcoal/80 backdrop-blur-md border-b border-brand-charcoal/[0.08] dark:border-brand-white/[0.08] py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="transition-opacity hover:opacity-80">
          <img
            src="/images/logo.png"
            alt="arlloy"
            className={`h-[54px] w-auto transition-all duration-300 ${
              isScrolled ? 'dark:invert' : 'brightness-0 invert'
            }`}
          />
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex gap-10 text-xs font-semibold tracking-[0.15em] text-brand-charcoal/70 dark:text-brand-white/70">
          <a href="#reveal" className="hover:text-brand-charcoal dark:hover:text-brand-white transition-colors duration-300">
            PRODUCT
          </a>
          <a href="#features" className="hover:text-brand-charcoal dark:hover:text-brand-white transition-colors duration-300">
            FEATURES
          </a>
          <a href="#lifestyle" className="hover:text-brand-charcoal dark:hover:text-brand-white transition-colors duration-300">
            LIFESTYLE
          </a>
          <a href="#reviews" className="hover:text-brand-charcoal dark:hover:text-brand-white transition-colors duration-300">
            REVIEWS
          </a>
        </nav>

        {/* CTA Button */}
        <div>
          <a
            href="#purchase"
            className="px-5 py-2.5 rounded-full bg-brand-charcoal text-brand-white dark:bg-brand-white dark:text-brand-charcoal text-xs font-semibold tracking-wider hover:opacity-90 active:scale-95 transition-all duration-300"
          >
            Shop Now
          </a>
        </div>
      </div>
    </header>
  )
}
