'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function NewLifestyle() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  // Smooth parallax motion for background photo
  const bgY = useTransform(scrollYProgress, [0, 1], ['-15%', '15%'])
  const textScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1.05])
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section
      ref={sectionRef}
      id="lifestyle"
      className="relative h-screen w-full overflow-hidden bg-brand-charcoal flex items-center justify-center"
    >
      {/* Parallax Background Lifestyle Image */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-[130%] -top-[15%]"
      >
        <img
          src="/assets/lifestyle_hotel.png"
          alt="ARLLOY premium vanity scene"
          className="w-full h-full object-cover"
        />
        {/* Rich dark overlay to ensure text contrast and premium cinematic feel */}
        <div className="absolute inset-0 bg-brand-charcoal/40 dark:bg-brand-charcoal/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/60 via-transparent to-brand-charcoal/60" />
      </motion.div>

      {/* Floating Aspirational Typography Overlay */}
      <motion.div
        style={{ scale: textScale, opacity: textOpacity }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center"
      >
        <span className="text-brand-purple text-xs font-bold tracking-[0.3em] uppercase mb-6 bg-brand-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-brand-white/10">
          Wherever You Roam
        </span>
        <h2 className="text-brand-white text-4xl md:text-7xl font-heading font-light tracking-wide leading-tight mb-8">
          Designed for the life <br className="hidden md:inline" />
          you actually live.
        </h2>
        
        {/* Lifestyle Chips */}
        <div className="flex flex-wrap gap-4 justify-center max-w-lg">
          {['Hotel Room', 'Airport Lounge', 'Vanity Table', 'Business Trip', 'Weekend Escape'].map((item, idx) => (
            <span
              key={idx}
              className="px-4 py-2 border border-brand-white/20 rounded-full text-brand-white/80 text-xs font-medium tracking-widest uppercase hover:bg-brand-white/10 transition-colors"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
