'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA bar once user scrolls past 500px (past the hero)
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollToPurchase = (e) => {
    e.preventDefault()
    document.getElementById('reveal')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-brand-charcoal/90 backdrop-blur-lg border-t border-white/10 px-6 py-4 flex items-center justify-between gap-4 md:hidden"
        >
          <div>
            <span className="text-brand-purple text-[8px] font-bold tracking-widest block uppercase">
              ARLLOY POUCH
            </span>
            <span className="text-brand-white text-sm font-bold block">
              34,300원 <span className="text-brand-white/40 text-xs line-through ml-1.5">49,000원</span>
            </span>
          </div>

          <a
            href="#reveal"
            onClick={handleScrollToPurchase}
            className="flex-grow max-w-[180px] bg-brand-white text-brand-charcoal text-center py-3 rounded-xl font-bold text-xs tracking-widest uppercase hover:bg-brand-ivory transition-colors active:scale-95 shadow-md"
          >
            Buy Now
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
