'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-4 bg-white/80 backdrop-blur-md border-b border-neutral-100 shadow-sm' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a 
          href="#" 
          className="flex flex-col items-start transition-transform duration-300 hover:scale-[1.02]"
        >
          <span 
            className={`font-heading text-xl font-extrabold lowercase transition-colors duration-300 leading-none ${
              scrolled 
                ? 'text-brand-black' 
                : 'text-white'
            }`}
          >
            arlloy
          </span>
          <span 
            className={`font-body text-[8px] font-bold tracking-[0.22em] uppercase transition-colors duration-300 mt-0.5 leading-none ${
              scrolled ? 'text-brand-gray' : 'text-white/80'
            }`}
          >
            NATURALLY YOURS
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {['위크포인트', '솔루션', '핵심기능', '후기', 'FAQ'].map((item, idx) => {
            const targets = ['#problems', '#solution', '#features', '#reviews', '#faq']
            return (
              <a 
                key={item} 
                href={targets[idx]} 
                className={`text-sm font-medium transition-colors duration-300 ${
                  scrolled 
                    ? 'text-brand-gray hover:text-brand-black' 
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="#checkout" 
            className={`text-xs md:text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-300 ${
              scrolled 
                ? 'bg-brand-black text-white hover:bg-brand-lavender shadow-md' 
                : 'bg-white text-brand-black hover:bg-brand-lavender hover:text-white'
            }`}
          >
            지금 구매하기
          </a>
        </div>
      </div>
    </header>
  )
}
