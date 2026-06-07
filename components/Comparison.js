import { Check, X } from 'lucide-react'

export default function Comparison() {
  const specs = [
    {
      category: "수납력",
      arlloy: "3단 분리 독립 대용량 (3L+)",
      ordinary: "구분 없는 단순 단일 포켓 (1L)",
      win: true
    },
    {
      category: "브러쉬 보관",
      arlloy: "전용 밴드 & 투명 위생 PVC 커버",
      ordinary: "기타 화장품과 섞여 브러쉬 모 훼손",
      win: true
    },
    {
      category: "생활방수",
      arlloy: "겉감/안감 이중 방수 코팅 원단",
      ordinary: "방수 미지원, 화장품 오염 시 세척 불가",
      win: true
    },
    {
      category: "개방성",
      arlloy: "180도 풀오픈 바닥 자립형 구조",
      ordinary: "입구가 좁아 뒤집어서 내용물 추출",
      win: true
    },
    {
      category: "휴대성",
      arlloy: "지퍼를 닫으면 납작하게 슬림 밀착",
      ordinary: "조금만 담아도 뚱뚱해져 캐리어 공간 차지",
      win: true
    }
  ]

  return (
    <section className="py-24 bg-brand-light-gray border-b border-neutral-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs md:text-sm font-heading font-extrabold tracking-widest text-brand-lavender uppercase block mb-3">
            THE COMPARISON
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-brand-black tracking-tight leading-tight">
            Before vs After
          </h2>
          <p className="text-neutral-500 font-medium text-sm md:text-base mt-4">
            Compare a traditional pouch with the organized simplicity of 아를로이.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left min-w-[600px] bg-white rounded-3xl overflow-hidden shadow-sm border border-neutral-100">
            <thead>
              <tr className="border-b border-neutral-100 bg-neutral-50">
                <th className="p-6 md:p-8 font-heading font-bold text-brand-black text-sm md:text-base">비교 항목</th>
                <th className="p-6 md:p-8 font-heading font-extrabold text-brand-lavender text-sm md:text-base bg-brand-lavender/[0.03]">아를로이</th>
                <th className="p-6 md:p-8 font-heading font-bold text-brand-gray text-sm md:text-base">일반 파우치</th>
              </tr>
            </thead>
            <tbody>
              {specs.map((spec, idx) => (
                <tr key={idx} className="border-b border-neutral-100/70 hover:bg-neutral-50/50 transition-colors">
                  <td className="p-6 md:p-8 font-heading font-bold text-brand-black text-xs md:text-sm">
                    {spec.category}
                  </td>
                  <td className="p-6 md:p-8 text-xs md:text-sm bg-brand-lavender/[0.01]">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-brand-lavender/10 text-brand-lavender flex items-center justify-center flex-shrink-0">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="font-semibold text-brand-black">{spec.arlloy}</span>
                    </div>
                  </td>
                  <td className="p-6 md:p-8 text-xs md:text-sm text-brand-gray">
                    <div className="flex items-center gap-3">
                      <X className="text-red-400 flex-shrink-0" size={16} />
                      <span>{spec.ordinary}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
