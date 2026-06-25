'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

export default function NewReviews() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const reviews = [
    {
      stars: 5,
      text: '“정말 찾기 편해요. 화장할 때 이것저것 뒤적거리던 짜증이 싹 사라졌습니다. 호텔 세면대 앞에 세워두고 지퍼만 열면 바로 쓸 수 있어서 비즈니스 출장 갈 때 필수품이 되었어요.”',
      name: '김민진',
      title: '금융계 직장인 (30대)',
      image: '/assets/brown_open_makeup.jpg',
    },
    {
      stars: 5,
      text: '“메이크업 브러쉬 수납부가 따로 분리되어 있어서 정말 마음에 듭니다. 투명 덮개 덕분에 브러쉬 모도 상하지 않고 다른 제품에 오염 묻을 일이 없어서 매일 만족스럽게 사용합니다.”',
      name: '이현아',
      title: '뷰티 전문 크리에이터',
      image: '/assets/black_open_pink_makeup.jpg',
    },
    {
      stars: 5,
      text: '“파우치가 넘어지지 않고 혼자 서있다는 게 이렇게 편한 줄 몰랐네요. 기초 화장품들을 세로로 꽂아두고 바로바로 뽑아 씁니다. 가방 가죽 질감도 매우 고급스럽고 견고합니다.”',
      name: '박서후',
      title: '프리랜서 디자이너 (40대)',
      image: '/assets/ivory_open_standing.jpg',
    },
    {
      stars: 5,
      text: '“여행용 파우치를 여러 개 써봤지만 아를로이가 단연 으뜸입니다. 수납 양도 엄청나고, 양쪽 지퍼가 부드럽게 열려 펼쳐놓은 채 사용하기 최고입니다. 주변 친구들에게 다 추천했어요.”',
      name: '최윤영',
      title: '잦은 해외 출장러 (30대)',
      image: '/assets/brown_closed.jpg',
    },
  ]

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const activeReview = reviews[currentIndex]

  return (
    <section
      id="reviews"
      className="relative min-h-screen w-full bg-brand-white py-24 md:py-36 flex flex-col justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-xl">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-purple text-xs font-bold tracking-[0.3em] uppercase block mb-4"
          >
            REAL EXPERIENCE
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-charcoal text-4xl md:text-5xl font-heading font-light tracking-tight mb-4"
          >
            Trusted by Nomads.
          </motion.h2>
          
          {/* Average rating */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2"
          >
            <div className="flex text-brand-purple">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-brand-charcoal font-semibold text-sm">
              4.9 / 5.0 Rating (800+ Reviews)
            </span>
          </motion.div>
        </div>

        {/* Immersive Testimonial Carousel */}
        <div className="relative w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-brand-ivory rounded-3xl p-8 md:p-16 shadow-lg border border-brand-charcoal/[0.04]">
          
          {/* Left Side: Photo review */}
          <div className="relative h-[300px] md:h-[450px] w-full rounded-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={activeReview.image}
                alt={activeReview.name}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute top-6 left-6 bg-brand-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-brand-white/20">
              <span className="text-brand-charcoal text-[10px] font-bold tracking-widest uppercase">
                Verified Purchase
              </span>
            </div>
          </div>

          {/* Right Side: Copy & Stars */}
          <div className="flex flex-col justify-between h-full min-h-[300px] lg:pl-6 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-6"
              >
                {/* Review Stars */}
                <div className="flex text-brand-purple">
                  {[...Array(activeReview.stars)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-current" />
                  ))}
                </div>

                {/* Review text */}
                <blockquote className="text-brand-charcoal text-xl md:text-2xl font-light tracking-wide leading-relaxed">
                  {activeReview.text}
                </blockquote>

                {/* Reviewer Details */}
                <div>
                  <p className="text-brand-charcoal text-base font-bold tracking-wider">
                    {activeReview.name}
                  </p>
                  <p className="text-brand-purple text-xs font-medium tracking-widest uppercase">
                    {activeReview.title}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="flex gap-4 mt-8 lg:mt-0 justify-start">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-brand-charcoal/20 flex items-center justify-center text-brand-charcoal hover:bg-brand-charcoal hover:text-brand-white hover:border-brand-charcoal active:scale-95 transition-all duration-300"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full border border-brand-charcoal/20 flex items-center justify-center text-brand-charcoal hover:bg-brand-charcoal hover:text-brand-white hover:border-brand-charcoal active:scale-95 transition-all duration-300"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
