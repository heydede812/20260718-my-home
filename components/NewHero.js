'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function NewHero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  // Apple-like scroll zoom and fade out transitions
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const textY = useTransform(scrollYProgress, [0, 0.6], [0, -100])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0.4, 0.8])

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-brand-charcoal flex items-center justify-center"
    >
      {/* Background Image */}
      <motion.div
        style={{ scale: videoScale }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/images/hero_wood_bg.png"
          alt="ARLLOY logo wood backdrop"
          className="w-full h-full object-cover"
        />
        {/* Dark Cinematic Gradient Overlay */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-brand-charcoal/70"
        />
      </motion.div>

      {/* Hero Content */}
      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center"
      >
        {/* Luxury Badge */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-brand-ivory text-xs font-bold tracking-[0.4em] uppercase mb-6"
        >
          ARLLOY
        </motion.span>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-brand-white text-4xl md:text-7xl font-heading font-light tracking-widest leading-normal mb-8 uppercase"
        >
          Beautifully Useful.
        </motion.h1>

        {/* Subheadline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-brand-ivory/90 text-sm md:text-base font-light tracking-widest max-w-2xl mb-12 space-y-3 leading-relaxed"
        >
          <p>아름다움은 보여지는 것만이 아닙니다.</p>
          <p>사용하기 편하고, 오래 곁에 머물며, 일상을 더 나아지게 만드는 것.</p>
          <p className="text-brand-white font-normal">
            ARLLOY는 감각적인 디자인과 실용적인 기능으로 당신의 삶을 더욱 아름답고 이롭게 만듭니다.
          </p>
          <p className="text-brand-purple text-xs font-semibold tracking-widest uppercase pt-2">
            아름다움과 이로움이 만나는 곳, ARLLOY.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <a
            href="#reveal"
            className="w-48 sm:w-auto px-8 py-4 rounded-full bg-brand-white text-brand-charcoal text-xs font-bold tracking-widest uppercase hover:bg-brand-ivory hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Explore
          </a>
          <a
            href="#brand-story"
            className="w-48 sm:w-auto px-8 py-4 rounded-full border border-brand-white/30 text-brand-white text-xs font-bold tracking-widest uppercase hover:bg-brand-white/10 hover:border-brand-white/60 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Watch Story
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        style={{ opacity: textOpacity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
        onClick={() => {
          document.getElementById('reveal')?.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        <span className="text-[10px] tracking-[0.2em] font-semibold text-brand-ivory/40 uppercase">
          SCROLL TO EXPLORE
        </span>
        <div className="w-5 h-9 rounded-full border border-brand-ivory/30 flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full bg-brand-ivory"
          />
        </div>
      </motion.div>
    </section>
  )
}
