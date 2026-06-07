'use client'

import { ShieldCheck, Truck, RotateCcw } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-32 bg-brand-charcoal text-white relative overflow-hidden">
      {/* Decorative ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-lavender/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <span className="text-xs font-heading font-extrabold tracking-widest text-brand-lavender uppercase block mb-6">
          마지막 단계
        </span>
        
        <h2 className="text-5xl sm:text-7xl font-heading font-extrabold text-white tracking-tight leading-none mb-6">
          오늘부터 시작하는 완벽한 정리
        </h2>
        
        <p className="text-neutral-400 font-light text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          ARLLOY와 함께 공간의 자유와 일상의 효율을 경험해 보세요. 당신의 소지품 보관 기준을 한 단계 높여드립니다.
        </p>

        <div className="flex justify-center mb-16">
          <a
            href="#collection"
            className="bg-brand-lavender text-white hover:bg-brand-lavender-dark text-xs md:text-sm font-extrabold uppercase tracking-wider px-10 py-5 rounded-full shadow-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-brand-lavender/25"
          >
            ARLLOY 쇼핑하기
          </a>
        </div>

        {/* Global Store trust indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto border-t border-white/10 pt-12">
          <div className="flex flex-col items-center">
            <Truck size={22} className="text-brand-lavender mb-3" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">전 세계 무료 배송</h4>
            <p className="text-[10px] text-neutral-400 mt-1 max-w-[160px] leading-normal">
              $50 이상 주문 시 무료 우선 배송을 제공합니다.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <RotateCcw size={22} className="text-brand-lavender mb-3" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">30일 체험 제도</h4>
            <p className="text-[10px] text-neutral-400 mt-1 max-w-[160px] leading-normal">
              마음에 들지 않으시나요? 100% 전액 환불을 보장합니다.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <ShieldCheck size={22} className="text-brand-lavender mb-3" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">평생 품질 보증</h4>
            <p className="text-[10px] text-neutral-400 mt-1 max-w-[160px] leading-normal">
              모든 봉제선과 박음질 상태의 내구성을 평생 보증합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
