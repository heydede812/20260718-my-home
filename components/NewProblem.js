'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function NewProblem() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Map scroll progress to opacity for each sentence (Apple Keynote style)
  const line1Opacity = useTransform(scrollYProgress, [0, 0.08, 0.16, 0.2], [0, 1, 1, 0])
  const line1Scale = useTransform(scrollYProgress, [0, 0.08, 0.16, 0.2], [0.95, 1, 1, 0.95])
  
  const line2Opacity = useTransform(scrollYProgress, [0.2, 0.28, 0.36, 0.4], [0, 1, 1, 0])
  const line2Scale = useTransform(scrollYProgress, [0.2, 0.28, 0.36, 0.4], [0.95, 1, 1, 0.95])
  
  const line3Opacity = useTransform(scrollYProgress, [0.4, 0.48, 0.56, 0.6], [0, 1, 1, 0])
  const line3Scale = useTransform(scrollYProgress, [0.4, 0.48, 0.56, 0.6], [0.95, 1, 1, 0.95])

  const line4Opacity = useTransform(scrollYProgress, [0.6, 0.68, 0.76, 0.8], [0, 1, 1, 0])
  const line4Scale = useTransform(scrollYProgress, [0.6, 0.68, 0.76, 0.8], [0.95, 1, 1, 0.95])

  const line5Opacity = useTransform(scrollYProgress, [0.85, 0.92, 1], [0, 1, 1])
  const line5Scale = useTransform(scrollYProgress, [0.85, 0.92, 1], [0.95, 1, 1])

  return (
    <div
      ref={containerRef}
      id="problem"
      className="relative h-[500vh] bg-brand-charcoal"
    >
      {/* Sticky container for text display */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-6">
        <div className="max-w-4xl mx-auto w-full text-center relative h-32 flex items-center justify-center">
          
          {/* Line 1 */}
          <motion.p
            style={{ opacity: line1Opacity, scale: line1Scale }}
            className="absolute text-brand-white text-3xl md:text-6xl font-heading font-light tracking-wide"
          >
            You pack.
          </motion.p>

          {/* Line 2 */}
          <motion.p
            style={{ opacity: line2Opacity, scale: line2Scale }}
            className="absolute text-brand-white text-3xl md:text-6xl font-heading font-light tracking-wide"
          >
            You search.
          </motion.p>

          {/* Line 3 */}
          <motion.p
            style={{ opacity: line3Opacity, scale: line3Scale }}
            className="absolute text-brand-white text-3xl md:text-6xl font-heading font-light tracking-wide"
          >
            You unpack.
          </motion.p>

          {/* Line 4 */}
          <motion.p
            style={{ opacity: line4Opacity, scale: line4Scale }}
            className="absolute text-brand-white text-3xl md:text-6xl font-heading font-light tracking-wide"
          >
            You search again.
          </motion.p>

          {/* Line 5 (The Reveal Resolution) */}
          <motion.div
            style={{ opacity: line5Opacity, scale: line5Scale }}
            className="absolute flex flex-col items-center"
          >
            <h2 className="text-brand-white text-4xl md:text-7xl font-heading font-light tracking-wide leading-tight">
              Your beauty routine deserves better.
            </h2>
          </motion.div>

        </div>
      </div>
    </div>
  )
}
