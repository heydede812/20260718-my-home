import { Maximize, Eye, Package, Droplets, Sparkles, Lock } from 'lucide-react'

export default function Features() {
  const list = [
    {
      icon: <Maximize className="text-brand-lavender" size={24} />,
      title: "180도 풀오픈",
      desc: "바닥 면까지 끝까지 열려 화장대를 펼친 것처럼 내부 수납물이 한눈에 보이고 정리하기 쉽습니다."
    },
    {
      icon: <Eye className="text-brand-lavender" size={24} />,
      title: "넓은 입구",
      desc: "지퍼를 여는 순간 와이드 오프닝 구조로 부피가 큰 기초 제품이나 보조배터리도 걸림 없이 자유롭게 넣고 뺍니다."
    },
    {
      icon: <Package className="text-brand-lavender" size={24} />,
      title: "대용량 수납",
      desc: "화장품부터 전자기기 충전기까지. 여유로운 폭과 늘어나는 주머니 구조로 공간 효율을 극한으로 끌어올렸습니다."
    },
    {
      icon: <Droplets className="text-brand-lavender" size={24} />,
      title: "생활방수 원단",
      desc: "겉감과 안감에 고밀도 PVC 코팅 발수 가공을 거쳐 물방울이나 화장품 오염이 내부/외부로 스며들지 않습니다."
    },
    {
      icon: <Sparkles className="text-brand-lavender" size={24} />,
      title: "손쉬운 세척",
      desc: "안감에 내화학성 방수 안감을 적용해 섀도우 가루나 파운데이션이 묻어도 물티슈 한 장으로 간편하게 닦아낼 수 있습니다."
    },
    {
      icon: <Lock className="text-brand-lavender" size={24} />,
      title: "튼튼한 지퍼",
      desc: "부드럽고 내구성이 우수한 프리미엄 더블 지퍼 라인을 적용해 많이 수납해도 지퍼가 씹히거나 고장 나지 않습니다."
    }
  ]

  return (
    <section id="features" className="py-24 bg-brand-light-gray border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs md:text-sm font-heading font-extrabold tracking-widest text-brand-lavender uppercase block mb-3">
            KEY FEATURES
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-brand-black tracking-tight leading-tight">
            우아함을 더하는 디테일 기능
          </h2>
          <p className="text-neutral-500 font-medium text-sm md:text-base mt-4">
            단순히 담는 파우치를 넘어, 완벽한 사용자 편의를 위해 디테일하게 설계된 ARLLOY의 가치를 확인해 보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {list.map((feat, idx) => (
            <div 
              key={idx}
              className="bg-white border border-neutral-100 p-8 rounded-2xl transition-all duration-300 hover:shadow-md hover:border-brand-lavender/20 flex flex-col items-start"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-lavender/5 flex items-center justify-center mb-6">
                {feat.icon}
              </div>
              <h3 className="text-lg font-heading font-bold text-brand-black mb-3">
                {feat.title}
              </h3>
              <p className="text-neutral-500 font-medium text-sm leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
