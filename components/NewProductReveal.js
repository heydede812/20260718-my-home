'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function NewProductReveal() {
  const [selectedColor, setSelectedColor] = useState('brown')

  const colors = [
    {
      id: 'brown',
      name: 'Saddle Brown',
      hex: '#8C5A3C',
      image: '/assets/brown_closed.jpg',
      desc: '클래식하고 기품 있는 가죽의 결을 살린 따뜻하고 세련된 새들 브라운',
    },
    {
      id: 'beige',
      name: 'Sand Beige',
      hex: '#EADBC8',
      image: '/images/아이보리브랜드.png',
      desc: '자연의 모래바람처럼 부드럽고 차분한 감성의 샌드 베이지',
    },
    {
      id: 'charcoal',
      name: 'Aesthetic Charcoal',
      hex: '#2B2B2A',
      image: '/assets/black_open_pink_makeup.jpg',
      desc: '시크한 에스테틱 차콜과 사랑스러운 핑크의 세련된 조화',
    },
  ]

  const activeColor = colors.find((c) => c.id === selectedColor)

  return (
    <section
      id="reveal"
      className="relative min-h-screen w-full bg-brand-white py-24 md:py-32 flex flex-col justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Elegant Copy & Color Picker */}
        <div className="flex flex-col items-start z-10">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-brand-purple text-xs font-bold tracking-[0.2em] uppercase mb-4"
          >
            Introducing the Icon
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.1 }}
            className="text-brand-charcoal text-5xl md:text-7xl font-heading font-light tracking-tight leading-none mb-6"
          >
            Meet <br />
            <span className="font-medium">Open View.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-brand-charcoal/60 text-lg font-light tracking-wide max-w-md mb-8 leading-relaxed"
          >
            See everything. Find anything. Organize beautifully.
            The final cosmetics pouch you will ever need.
          </motion.p>

          {/* Color Selector */}
          <div className="mb-12">
            <span className="text-xs font-semibold tracking-[0.1em] text-brand-charcoal/40 uppercase block mb-4">
              Select Hue
            </span>
            <div className="flex gap-4">
              {colors.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedColor(c.id)}
                  className={`w-12 h-12 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                    selectedColor === c.id
                      ? 'border-brand-purple scale-110 shadow-md'
                      : 'border-transparent hover:scale-105'
                  }`}
                  aria-label={c.name}
                >
                  <span
                    className="w-8 h-8 rounded-full block border border-brand-charcoal/10"
                    style={{ backgroundColor: c.hex }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Interactive description */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeColor.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="border-l-2 border-brand-purple/30 pl-4 py-1"
            >
              <h4 className="text-brand-charcoal text-sm font-bold tracking-wider uppercase mb-1">
                {activeColor.name}
              </h4>
              <p className="text-brand-charcoal/50 text-xs font-light tracking-wide leading-relaxed max-w-sm">
                {activeColor.desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Column: Visual Product Showcase */}
        <div className="relative flex justify-center items-center h-[400px] md:h-[600px] w-full">
          {/* Subtle luxurious background glow */}
          <div className="absolute w-[80%] h-[80%] rounded-full bg-brand-ivory/80 filter blur-3xl -z-10" />

          {/* Product Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeColor.id}
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.95, rotate: 2 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.03, rotate: 1 }}
              className="w-full h-full max-w-[500px] flex items-center justify-center cursor-pointer"
            >
              <img
                src={activeColor.image}
                alt={activeColor.name}
                className="max-w-full max-h-full object-contain filter drop-shadow-2xl"
              />
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}
