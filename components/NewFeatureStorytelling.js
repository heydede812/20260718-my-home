'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function NewFeatureStorytelling() {
  const containerRef = useRef(null)

  const features = [
    {
      num: 'FEATURE 01',
      title: 'See Everything Instantly',
      subtitle: '펼치면 완성되는 나만의 화장대',
      desc: '바닥까지 닿는 180도 오픈 지퍼 라인 설계로 지퍼를 여는 순간 모든 메이크업 제품이 눈앞에 펼쳐집니다. 어두운 파우치 깊은 곳을 뒤적이며 시간을 허비할 필요가 없습니다.',
      image: '/assets/ivory_open_flat.jpg',
      bgColor: 'bg-brand-white',
      textColor: 'text-brand-charcoal',
      subTextColor: 'text-brand-charcoal/60',
      zoom: true,
    },
    {
      num: 'FEATURE 02',
      title: 'Vertical Organization',
      subtitle: '쓰러지지 않고 꼿꼿하게 세워두다',
      desc: '토너, 세럼, 선크림, 향수까지 각각의 자리에 세워서 고정하는 밴딩 스토리지 시스템을 적용했습니다. 내용물이 눕거나 섞이지 않아 오염 걱정 없이 깔끔하게 보관합니다.',
      image: '/assets/ivory_open_standing.jpg',
      bgColor: 'bg-brand-ivory',
      textColor: 'text-brand-charcoal',
      subTextColor: 'text-brand-charcoal/60',
      parallax: true,
    },
    {
      num: 'FEATURE 03',
      title: 'Dedicated Brush Storage',
      subtitle: '오염 없이 위생적인 메이크업 브러쉬 보관',
      desc: '얼굴에 직접 닿는 브러쉬는 화장품 잔여물과 섞여 오염되기 쉽습니다. 투명 보호 덮개가 장착된 브러쉬 전용 수납 파티션이 설계되어 언제나 위생적이고 정갈한 메이크업 환경을 제공합니다.',
      image: '/assets/brown_open_makeup.jpg',
      bgColor: 'bg-brand-white',
      textColor: 'text-brand-charcoal',
      subTextColor: 'text-brand-charcoal/60',
      slide: true,
    },
    {
      num: 'FEATURE 04',
      title: 'Travel Optimized',
      subtitle: '공항 라운지부터 호텔 룸까지 자유롭게',
      desc: '생활방수 원단과 콤팩트한 비율로 캐리어와 백팩 내부 공간에 완벽하게 수납됩니다. 이동 중 흔들림 속에서도 내부 구조가 완벽하게 보호되며, 도착한 곳에서 바로 지퍼를 열어 품격 있는 뷰티 루틴을 이어나가세요.',
      image: '/assets/lifestyle_hotel.png',
      bgColor: 'bg-brand-charcoal',
      textColor: 'text-brand-white',
      subTextColor: 'text-brand-ivory/60',
      fade: true,
    },
  ]

  return (
    <div ref={containerRef} id="features" className="relative">
      {features.map((feat, index) => {
        const isEven = index % 2 === 0
        return (
          <section
            key={index}
            className={`min-h-screen w-full flex items-center justify-center py-20 px-6 md:px-12 overflow-hidden ${feat.bgColor}`}
          >
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Text Content */}
              <div
                className={`flex flex-col items-start ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <motion.span
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 1 }}
                  className="text-brand-purple text-xs font-bold tracking-[0.25em] mb-4"
                >
                  {feat.num}
                </motion.span>

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 1.2, delay: 0.1 }}
                  className={`text-4xl md:text-6xl font-heading font-light tracking-tight mb-2 ${feat.textColor}`}
                >
                  {feat.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                  className="text-brand-purple text-sm font-semibold tracking-wide mb-6"
                >
                  {feat.subtitle}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                  className={`text-sm md:text-base font-light tracking-wide leading-relaxed max-w-lg ${feat.subTextColor}`}
                >
                  {feat.desc}
                </motion.p>
              </div>

              {/* Visual Media with customized scroll-linked animation */}
              <div
                className={`relative flex justify-center items-center h-[350px] md:h-[550px] w-full rounded-2xl overflow-hidden shadow-2xl ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                {feat.zoom && (
                  <motion.div
                    initial={{ scale: 1.15, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full"
                  >
                    <img
                      src={feat.image}
                      alt={feat.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                )}

                {feat.parallax && (
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full"
                  >
                    <img
                      src={feat.image}
                      alt={feat.title}
                      className="w-full h-full object-cover scale-105"
                    />
                  </motion.div>
                )}

                {feat.slide && (
                  <motion.div
                    initial={{ x: isEven ? 80 : -80, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full"
                  >
                    <img
                      src={feat.image}
                      alt={feat.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                )}

                {feat.fade && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 1.8 }}
                    className="w-full h-full"
                  >
                    <img
                      src={feat.image}
                      alt={feat.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                )}
              </div>

            </div>
          </section>
        )
      })}
    </div>
  )
}
