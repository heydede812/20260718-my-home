import { Package, Maximize2, Shield } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-brand-black">
      {/* Background Image with Dark Premium Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-out scale-105"
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(10, 10, 10, 0.6), rgba(10, 10, 10, 0.75)), url('images/hero_lifestyle.png')` }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Editorial Subtitle Badge */}
        <span className="inline-flex items-center gap-1.5 px-4.5 py-1.5 bg-brand-lavender/25 border border-brand-lavender/35 rounded-full text-brand-lavender text-xs md:text-sm font-semibold tracking-wider uppercase mb-8 shadow-sm">
          Premium Travel Organizer Pouch
        </span>

        {/* Hero Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-extrabold text-white leading-tight tracking-tight mb-8">
          흩어진 여행짐을 <br className="sm:hidden" />
          <span className="text-brand-lavender">하나로</span>
        </h1>

        {/* Hero Subcopy */}
        <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-medium max-w-2xl leading-relaxed mb-12">
          화장품부터 브러쉬, 충전기까지. <br />
          여행에 필요한 모든 것을 깔끔하고 우아하게 정리하세요.
        </p>

        {/* Call to Action Button */}
        <a 
          href="#checkout" 
          className="inline-flex items-center justify-center bg-brand-lavender text-white hover:bg-brand-lavender-hover text-base md:text-lg font-bold px-10 py-5 rounded-full shadow-lg shadow-brand-lavender/20 transform hover:-translate-y-0.5 transition-all duration-300 mb-20"
        >
          지금 구매하기
        </a>

        {/* USP Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl mt-6 border-t border-white/10 pt-10">
          <div className="flex flex-col items-center gap-3 text-white">
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-brand-lavender">
              <Package size={22} />
            </div>
            <div>
              <h3 className="font-heading font-bold text-sm tracking-wide">대용량 수납</h3>
              <p className="text-xs text-neutral-400 mt-1">여행짐 부피를 획기적으로 축소</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 text-white">
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-brand-lavender">
              <Maximize2 size={22} />
            </div>
            <div>
              <h3 className="font-heading font-bold text-sm tracking-wide">세워서 보관</h3>
              <p className="text-xs text-neutral-400 mt-1">쏟아질 염려 없는 직관적인 자립</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 text-white">
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-brand-lavender">
              <Shield size={22} />
            </div>
            <div>
              <h3 className="font-heading font-bold text-sm tracking-wide">생활방수 원단</h3>
              <p className="text-xs text-neutral-400 mt-1">화장품 오염 및 침수 완벽 방지</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
