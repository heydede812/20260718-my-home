'use client'

import { useState } from 'react'
import { Archive, Paintbrush, Grid } from 'lucide-react'

export default function Solution() {
  const [activeTab, setActiveTab] = useState(0)

  const tiers = [
    {
      icon: <Archive size={20} />,
      title: "메인 수납공간",
      sub: "쿠션, 파운데이션, 스킨케어 전용",
      desc: "두껍고 부피가 큰 화장품을 세워서 안정적으로 고정하고 보관할 수 있습니다. 칸막이가 유연하게 움직여 선크림이나 기초 제품도 쏟아짐 없이 깔끔하게 자립 수납됩니다.",
      highlight: "립스틱 홀더 4개 & 분리형 가벽 수납"
    },
    {
      icon: <Paintbrush size={20} />,
      title: "브러쉬 전용 공간",
      sub: "소중한 메이크업 브러쉬 보호",
      desc: "브러쉬 모가 꺾이거나 립스틱 뚜껑에 닿아 위생적으로 오염되는 문제를 완벽하게 예방합니다. 밴드가 꽉 잡아주어 흔들려도 도구들이 움직이지 않습니다.",
      highlight: "오염 방지 PVC 밴딩 커버 적용"
    },
    {
      icon: <Grid size={20} />,
      title: "메쉬 포켓 공간",
      sub: "작고 잃어버리기 쉬운 아이템",
      desc: "헤어핀, 화장솜, 면봉, 샘플용 팩 등 파우치 바닥으로 굴러다니기 쉬운 소품들을 메쉬 격벽 포켓에 분리 보관하세요. 투명하게 보여 바로 찾을 수 있습니다.",
      highlight: "지퍼형 고밀도 메쉬 오거나이저"
    }
  ]

  return (
    <section id="solution" className="py-24 bg-brand-white border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs md:text-sm font-heading font-extrabold tracking-widest text-brand-lavender uppercase block mb-3">
            THE SOLUTION
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-brand-black tracking-tight leading-tight">
            Meet 아를로이.
          </h2>
          <p className="text-neutral-600 font-medium text-base md:text-lg mt-4">
            Experience a smart structural design that adapts to your cosmetic shapes and compresses down flat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Tabs */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {tiers.map((tier, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                  activeTab === idx
                    ? 'bg-brand-lavender/5 border-brand-lavender/30 shadow-sm'
                    : 'bg-white border-neutral-100 hover:border-neutral-200'
                }`}
              >
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    activeTab === idx 
                      ? 'bg-brand-lavender text-white' 
                      : 'bg-neutral-100 text-brand-gray'
                  }`}
                >
                  {tier.icon}
                </div>
                <div>
                  <h3 className={`text-base md:text-lg font-heading font-bold transition-colors duration-300 ${
                    activeTab === idx ? 'text-brand-black' : 'text-brand-gray'
                  }`}>
                    {tier.title}
                  </h3>
                  <p className="text-xs md:text-sm text-neutral-500 font-medium mt-0.5">
                    {tier.sub}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Right Side: Tab Details Visual & Explanation */}
          <div className="lg:col-span-7">
            <div className="bg-brand-light-gray p-8 md:p-12 rounded-3xl border border-neutral-100 flex flex-col justify-between min-h-[380px]">
              <div>
                <span className="text-xs md:text-sm font-bold text-brand-lavender tracking-wider uppercase block mb-4">
                  {tiers[activeTab].sub}
                </span>
                <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-brand-black mb-6">
                  {tiers[activeTab].title}
                </h3>
                <p className="text-neutral-700 font-medium text-base md:text-lg leading-relaxed mb-8">
                  {tiers[activeTab].desc}
                </p>
              </div>

              <div className="bg-white border border-brand-lavender/10 px-6 py-4 rounded-xl flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-lavender animate-pulse flex-shrink-0" />
                <span className="text-xs md:text-sm font-semibold text-brand-lavender">
                  {tiers[activeTab].highlight}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
