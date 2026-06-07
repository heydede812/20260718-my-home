'use client'

import { Shield, Hammer, Feather } from 'lucide-react'

export default function BrandStory() {
  return (
    <section id="story" className="py-32 bg-brand-charcoal text-white relative overflow-hidden">
      {/* Decorative radial blur background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-lavender/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Brand Mockup Campaign Grid */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Large Billboard mockup */}
            <div className="relative aspect-[16/10] bg-neutral-900 rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl group">
              <img 
                src="images/mockup_billboard.jpg" 
                alt="ARLLOY 브랜드 빌보드 캠페인" 
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 bg-brand-black/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-[10px] text-white font-bold tracking-wider">
                ARLLOY 빌보드 캠페인
              </div>
            </div>
            
            {/* Sub-grid: Wood slat & Signboard */}
            <div className="grid grid-cols-2 gap-6">
              <div className="relative aspect-square bg-neutral-900 rounded-[2rem] overflow-hidden border border-white/5 shadow-lg group">
                <img 
                  src="images/mockup_wood_logo.png" 
                  alt="ARLLOY 브랜드 공간 슬랫 월" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="relative aspect-square bg-neutral-900 rounded-[2rem] overflow-hidden border border-white/5 shadow-lg group">
                <img 
                  src="images/mockup_signboard.png" 
                  alt="ARLLOY 시그니처 플래그십 스토어" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy and Pillars */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs font-heading font-extrabold tracking-widest text-brand-lavender uppercase block mb-3">
              브랜드 선언
            </span>
            <h2 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-none mb-6">
              ARLLOY 스탠다드
            </h2>
            
            <div className="space-y-6 text-neutral-300 font-medium text-sm sm:text-base leading-relaxed mb-10">
              <p>
                우리는 프리미엄 디자인이란 더하는 것이 아니라 정제하는 것이라고 믿습니다. 컬렉션의 모든 지퍼, 파티션, 봉제선, 안감은 글로벌 내구성 표준을 충족하기 위해 혹독한 여행 환경 테스트를 거쳤습니다.
              </p>
              <p>
                ARLLOY는 가방 속 무질서로부터 현대의 여행자와 전문가들을 해방시키기 위해 태어났습니다. 건축학적 공간 분할을 접목하여, 당신의 일상적 움직임에 명확함과 자유로움을 제공합니다.
              </p>
            </div>

            {/* Spec Features list */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10">
              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-lavender">
                  <Shield size={18} />
                </div>
                <span className="text-xs font-bold text-white block">강력한 내구성</span>
                <p className="text-[11px] text-neutral-400 leading-normal">
                  찢어짐, 습기, 극한의 마찰에도 손상 없이 견뎌냅니다.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-lavender">
                  <Hammer size={18} />
                </div>
                <span className="text-xs font-bold text-white block">정밀한 마감</span>
                <p className="text-[11px] text-neutral-400 leading-normal">
                  YKK 방수 지퍼와 이중 박음질 마감 처리를 적용했습니다.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-lavender">
                  <Feather size={18} />
                </div>
                <span className="text-xs font-bold text-white block">초경량 설계</span>
                <p className="text-[11px] text-neutral-400 leading-normal">
                  무게 타협이 전혀 없는, 온전한 이동성을 보여줍니다.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
