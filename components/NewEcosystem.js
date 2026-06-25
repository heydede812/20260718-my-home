'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function NewEcosystem() {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Convert vertical scroll progress to horizontal translation of the track
  // Based on the number of cards and their widths
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-60%'])

  const products = [
    {
      num: '01',
      category: 'Signature Icon',
      title: 'Open View Pouch',
      desc: '180도 오픈 뷰와 세우는 수납 시스템을 갖춘 시그니처 뷰티 오거나이저 파우치.',
      price: '34,300원',
      image: '/assets/brown_open_makeup.jpg',
      tag: 'BESTSELLER',
    },
    {
      num: '02',
      category: 'Future Concept',
      title: 'Cordless Hair Styler',
      desc: '여행지와 출장지에서도 헤어 스타일을 기품 있게 정돈할 수 있는 무선 미니멀 스타일러.',
      price: 'COMING SOON',
      image: '/images/mockup_beauty_device.png',
      tag: 'NEW RELEASE',
    },
    {
      num: '03',
      category: 'Travel Expansion',
      title: 'Travel Organizers',
      desc: '의류와 여행 소품을 완벽한 가로 비율로 슬림하게 압축하는 프리미엄 패킹 큐브.',
      price: 'COMING SOON',
      image: '/assets/standing_storage.png',
      tag: 'IN DEVELOPMENT',
    },
    {
      num: '04',
      category: 'Beauty Skincare',
      title: 'Beauty Essentials',
      desc: '아를로이 파우치 전용 포켓에 정확하게 수납되도록 규격화된 트래블 스킨케어 앰플.',
      price: 'COMING SOON',
      image: '/images/clean_size_guide.jpg',
      tag: 'CONCEPT',
    },
  ]

  return (
    <div
      ref={containerRef}
      id="ecosystem"
      className="relative h-[300vh] bg-brand-charcoal"
    >
      {/* Sticky viewport frame */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">
        
        {/* Section Title Header */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-brand-purple text-xs font-bold tracking-[0.3em] uppercase block mb-3">
              THE SYSTEM
            </span>
            <h2 className="text-brand-white text-4xl md:text-6xl font-heading font-light tracking-tight leading-none">
              ARLLOY <span className="font-semibold">Ecosystem.</span>
            </h2>
          </div>
          <p className="text-brand-ivory/50 text-sm font-light tracking-wide max-w-sm">
            아를로이만의 비주얼 및 기능적 통일성을 극대화한 스마트 트래블 악세사리와 뷰티 테크 생태계를 탐색해 보세요.
          </p>
        </div>

        {/* Horizontal scroll track */}
        <div className="relative w-full flex items-center pl-6 md:pl-12 lg:pl-24">
          <motion.div style={{ x }} className="flex gap-8 pr-24">
            {products.map((prod, index) => (
              <div
                key={index}
                className="w-[280px] sm:w-[380px] md:w-[450px] flex-shrink-0 bg-brand-white/[0.04] backdrop-blur-md rounded-3xl p-6 md:p-10 border border-white/[0.06] flex flex-col justify-between h-[450px] md:h-[550px] hover:border-brand-purple/40 hover:bg-brand-white/[0.06] transition-all duration-500 group"
              >
                {/* Card Top */}
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-brand-purple/40 text-4xl font-heading font-light">
                      {prod.num}
                    </span>
                    <span className="px-3 py-1 bg-brand-purple/20 text-brand-purple text-[10px] font-bold tracking-widest rounded-full uppercase">
                      {prod.tag}
                    </span>
                  </div>
                  
                  <span className="text-brand-purple text-xs font-semibold tracking-wider uppercase block mb-2">
                    {prod.category}
                  </span>
                  
                  <h3 className="text-brand-white text-2xl md:text-3xl font-heading font-medium tracking-tight mb-3">
                    {prod.title}
                  </h3>
                  
                  <p className="text-brand-ivory/60 text-xs md:text-sm font-light tracking-wide leading-relaxed">
                    {prod.desc}
                  </p>
                </div>

                {/* Card Visual & Bottom */}
                <div className="relative w-full h-[180px] md:h-[240px] mt-6 flex items-center justify-center overflow-hidden rounded-2xl">
                  {/* Subtle hover zoom on product image */}
                  <img
                    src={prod.image}
                    alt={prod.title}
                    className="max-h-full max-w-full object-contain filter drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 right-0">
                    <span className="text-brand-white font-semibold text-sm md:text-base bg-brand-charcoal/80 backdrop-blur-md px-4 py-1.5 rounded-xl border border-white/10">
                      {prod.price}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  )
}
