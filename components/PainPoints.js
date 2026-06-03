import { EyeOff, HeartCrack, Layers3, Briefcase } from 'lucide-react'

export default function PainPoints() {
  const problems = [
    {
      icon: <Layers3 className="text-red-400" size={24} />,
      title: "파우치 안이 항상 엉망이다",
      desc: "정리정돈 없이 물건들이 한곳에 뒤섞여 매번 파우치를 다 쏟아부어야 하나요?"
    },
    {
      icon: <EyeOff className="text-red-400" size={24} />,
      title: "필요한 화장품을 찾기 어렵다",
      desc: "바쁜 여행지 아침, 립스틱 하나 찾느라 5분 이상 시간을 낭비하진 않으셨나요?"
    },
    {
      icon: <HeartCrack className="text-red-400" size={24} />,
      title: "브러쉬가 눌려 망가진다",
      desc: "다른 화장품 무게에 눌려 애지중지하던 비싼 메이크업 브러쉬가 망가진 적 있으시죠?"
    },
    {
      icon: <Briefcase className="text-red-400" size={24} />,
      title: "짐이 많아 가방이 복잡하다",
      desc: "뚱뚱하게 불어난 파우치가 캐리어와 가방의 넓은 공간을 낭비하고 무겁게 만듭니다."
    }
  ]

  return (
    <section id="problems" className="py-24 bg-brand-light-gray">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs md:text-sm font-heading font-extrabold tracking-widest text-brand-lavender uppercase block mb-3">
            THE EMOTION
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-brand-black tracking-tight leading-tight">
            여행 갈 때 <br className="sm:hidden" /> 이런 경험 있으신가요?
          </h2>
          <p className="text-neutral-500 font-medium text-sm md:text-base mt-4">
            기존 파우치들의 고질적인 불편함, 더 우아한 방법으로 해결할 수 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((prob, idx) => (
            <div 
              key={idx}
              className="flex gap-6 bg-white border border-neutral-100 p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-brand-lavender/25 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
                {prob.icon}
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-brand-black mb-2">
                  {prob.title}
                </h3>
                <p className="text-neutral-500 font-medium text-sm leading-relaxed">
                  {prob.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
