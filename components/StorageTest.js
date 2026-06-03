import { Check } from 'lucide-react'

export default function StorageTest() {
  const items = [
    { name: "리퀴드 파운데이션", category: "Base Make-up" },
    { name: "메이크업 쿠션", category: "Base Make-up" },
    { name: "립스틱 & 립틴트 (4개)", category: "Point Make-up" },
    { name: "메이크업 브러쉬 (5개)", category: "Beauty Tools" },
    { name: "향수 보틀 (30ml)", category: "Fragrance" },
    { name: "보조배터리", category: "Electronics" },
    { name: "충전기 및 케이블", category: "Electronics" }
  ]

  return (
    <section className="py-24 bg-white border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Packing List */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-xs md:text-sm font-heading font-extrabold tracking-widest text-brand-lavender uppercase block mb-3">
              STORAGE CAPACITY TEST
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-brand-black tracking-tight leading-tight mb-4">
              이 모든 것이 <br /> 들어갑니다.
            </h2>
            <p className="text-neutral-500 font-medium text-sm md:text-base mb-8 leading-relaxed">
              화장품뿐만 아니라 여행에 꼭 필요한 전자기기 충전 세트까지. 넉넉하고 안전하게 한곳에 수납해 가방 부피를 50% 줄여보세요.
            </p>

            <div className="flex flex-col gap-4">
              {items.map((item, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-4 bg-brand-light-gray px-5 py-4.5 rounded-xl border border-neutral-100/50"
                >
                  <div className="w-5 h-5 rounded-full bg-brand-lavender/10 text-brand-lavender flex items-center justify-center flex-shrink-0">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <div className="flex items-baseline justify-between w-full">
                    <span className="font-heading font-bold text-brand-black text-sm md:text-base">
                      {item.name}
                    </span>
                    <span className="text-[10px] md:text-xs font-semibold text-brand-gray tracking-wider uppercase">
                      {item.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: High-fidelity image of open black pouch */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-lg aspect-square bg-brand-light-gray rounded-[2.5rem] p-6 border border-neutral-100 shadow-md flex items-center justify-center overflow-hidden">
              <img 
                src="images/pouch_black_open.png" 
                alt="ARLLOY open black pouch packed test" 
                className="w-full h-full object-contain rounded-2xl transition-transform duration-700 ease-out hover:scale-105"
              />
              <div className="absolute bottom-6 right-6 bg-brand-black/85 backdrop-blur-sm border border-white/10 px-5 py-3 rounded-full text-white text-xs font-bold tracking-wider uppercase shadow-md">
                Verified Storage Capacity
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
