'use client'

import { motion } from 'framer-motion'
import { X, Check } from 'lucide-react'

export default function NewComparison() {
  const comparisonItems = [
    {
      title: 'Visibility (시인성)',
      traditional: '눕혀서 보관하여 내용물이 엉키고 바닥에 깔려 찾기 어려움',
      arlloy: '180도 완전히 펼쳐져 전 제품이 한눈에 들어오는 오픈 뷰 레이아웃',
    },
    {
      title: 'Organization (정리 수납)',
      traditional: '칸막이가 없어 흔들릴 때마다 화장품이 섞이고 파손 위험 높음',
      arlloy: '각 전용 크기별 탄력 밴드와 메시 지퍼 포켓으로 세우는 완벽 고정',
    },
    {
      title: 'Brush Storage (브러쉬 보호)',
      traditional: '다른 화장품과 엉켜 브러쉬 모가 찌그러지고 위생 오염 노출',
      arlloy: '투명 오염 방지 가드가 장착된 위생적인 브러쉬 전용 파티션 탑재',
    },
    {
      title: 'Travel Convenience (휴대 편의성)',
      traditional: '캐리어 내 부피를 지나치게 많이 차지하고 방수가 되지 않음',
      arlloy: '공간 효율을 높인 콤팩트 규격 및 고급 생활방수 소재 설계',
    },
  ]

  return (
    <section
      id="comparison"
      className="relative min-h-screen w-full bg-brand-ivory py-24 md:py-36 flex flex-col justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        {/* Section Header */}
        <div className="text-center mb-20 max-w-xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-purple text-xs font-bold tracking-[0.3em] uppercase block mb-4"
          >
            THE STANDARD
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-charcoal text-4xl md:text-6xl font-heading font-light tracking-tight mb-4"
          >
            A Class of <br className="md:hidden" />
            <span className="font-semibold">Its Own.</span>
          </motion.h2>
          <p className="text-brand-charcoal/50 text-sm font-light tracking-wide mt-4">
            단순히 짐을 담는 기존 파우치의 한계를 넘어, 모든 세부 디테일이 사용성을 위해 다시 설계되었습니다.
          </p>
        </div>

        {/* Comparison Grid (No tables, premium luxury visual panels) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Panel: Traditional Pouch */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-brand-beige/50 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-brand-charcoal/[0.06] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-brand-charcoal/40 text-xs font-bold tracking-widest uppercase">
                  TRADITIONAL POUCH
                </span>
                <span className="px-3 py-1 bg-red-500/10 text-red-500 text-[10px] font-bold tracking-widest rounded-full uppercase">
                  COMPROMISE
                </span>
              </div>
              <h3 className="text-brand-charcoal text-2xl font-heading font-light mb-8">
                기존의 일반 파우치
              </h3>

              <div className="space-y-8">
                {comparisonItems.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start border-b border-brand-charcoal/[0.04] pb-6 last:border-0 last:pb-0">
                    <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 flex-shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-brand-charcoal/80 text-sm font-semibold tracking-wide mb-1">
                        {item.title}
                      </h4>
                      <p className="text-brand-charcoal/50 text-xs font-light tracking-wide leading-relaxed">
                        {item.traditional}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-12 w-full h-[180px] rounded-2xl overflow-hidden bg-brand-charcoal/5 border border-brand-charcoal/[0.06]">
              <img
                src="/assets/messy_pouch.png"
                alt="Messy traditional pouch"
                className="w-full h-full object-cover filter grayscale contrast-125 opacity-70"
              />
            </div>
          </motion.div>

          {/* Right Panel: ARLLOY Pouch */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-brand-charcoal text-brand-white rounded-3xl p-8 md:p-12 border border-white/[0.06] flex flex-col justify-between shadow-2xl relative overflow-hidden"
          >
            {/* Elegant Background purple glow */}
            <div className="absolute -right-20 -top-20 w-60 h-60 rounded-full bg-brand-purple/20 filter blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <span className="text-brand-purple text-xs font-bold tracking-widest uppercase">
                  ARLLOY OPEN VIEW
                </span>
                <span className="px-3 py-1 bg-brand-purple/30 text-brand-white text-[10px] font-bold tracking-widest rounded-full uppercase">
                  INNOVATION
                </span>
              </div>
              <h3 className="text-brand-white text-2xl font-heading font-light mb-8">
                아를로이 오픈 뷰 파우치
              </h3>

              <div className="space-y-8">
                {comparisonItems.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start border-b border-white/[0.04] pb-6 last:border-0 last:pb-0">
                    <div className="w-6 h-6 rounded-full bg-brand-purple/30 flex items-center justify-center text-brand-white flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-brand-white text-sm font-semibold tracking-wide mb-1">
                        {item.title}
                      </h4>
                      <p className="text-brand-ivory/60 text-xs font-light tracking-wide leading-relaxed">
                        {item.arlloy}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-12 w-full h-[180px] rounded-2xl overflow-hidden bg-white/5 border border-white/10 z-10">
              <img
                src="/assets/user_img_0.jpg"
                alt="Organized ARLLOY pouch"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
