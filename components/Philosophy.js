'use client'

import { Layers, Compass, Sun } from 'lucide-react'

export default function Philosophy() {
  const pillars = [
    {
      icon: <Layers className="text-brand-lavender" size={28} />,
      title: 'Organization',
      titleKo: '구조적 정리',
      desc: '스마트하고 독립된 수납 공간이 소지품에 미적 조화와 논리를 부여합니다. 모든 것이 제자리에 있을 때, 일상은 물 흐르듯 매끄러워집니다.'
    },
    {
      icon: <Compass className="text-brand-lavender" size={28} />,
      title: 'Mobility',
      titleKo: '자유로운 이동',
      desc: '가벼운 소재, 생활 방수 마감, 그리고 콤팩트한 실루엣이 목적지 사이를 자유롭게 이동할 수 있도록 돕습니다.'
    },
    {
      icon: <Sun className="text-brand-lavender" size={28} />,
      title: 'Simplicity',
      titleKo: '본질적 단순성',
      desc: '과도한 장식을 덜어냈습니다. 정돈된 라인과 직관적인 유틸리티에 집중하여, 제품이 사용자를 돕도록 설계했습니다.'
    }
  ]

  return (
    <section id="philosophy" className="py-32 bg-brand-charcoal text-white relative overflow-hidden border-b border-neutral-900">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-brand-lavender/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-brand-lavender/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-heading font-extrabold tracking-widest text-brand-lavender uppercase block mb-4">
            브랜드 철학
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight mb-6">
            움직임의 철학
          </h2>
          <p className="text-neutral-400 font-light text-base sm:text-lg leading-relaxed">
            {"'아름다움'과 '이로이(이롭게 하다)'를 연결하여 지은 이름입니다. 있는 그대로 충분히 아름다운 당신의 삶을 더 싱그럽고 이롭게 만듭니다. 자연스러운 미와 실질적인 유익함을 동시에 추구하며, 삶의 결을 한층 더 풍요롭게 가꾸어 줍니다."}
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx}
              className="bg-brand-black/40 border border-white/5 hover:border-brand-lavender/30 p-8 md:p-10 rounded-[2rem] transition-all duration-500 hover:scale-[1.01] hover:shadow-xl hover:shadow-brand-lavender/[0.02] flex flex-col items-start group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-brand-lavender/10 group-hover:scale-110 transition-all duration-300">
                {pillar.icon}
              </div>
              <div className="mb-4">
                <h3 className="text-2xl font-heading font-bold text-white group-hover:text-brand-lavender transition-colors duration-300">
                  {pillar.title}
                </h3>
                <span className="text-xs text-neutral-500 font-semibold tracking-wider block mt-1 uppercase">
                  {pillar.titleKo}
                </span>
              </div>
              <p className="text-neutral-400 font-medium text-sm sm:text-base leading-relaxed mt-4">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
