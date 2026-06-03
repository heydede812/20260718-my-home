import { Star } from 'lucide-react'

export default function Reviews() {
  const reviews = [
    {
      title: "화장품 찾는 시간이 줄었어요",
      text: "립스틱 하나 찾느라 파우치 다 엎어놓던 날들은 이제 끝났어요. 지퍼만 열면 책 꽂아두듯 세워서 바로 찾으니까 메이크업 준비 시간이 대폭 줄어들었습니다.",
      author: "김*희 님",
      job: "32세 여행 크리에이터",
      tag: "대용량 수납 만족"
    },
    {
      title: "여행갈 때 필수품이 됐어요",
      text: "비행기 기내 반입 시 스킨케어와 메이크업 화장품들을 이중 안감 덕분에 누수 걱정 없이 깔끔하게 보관할 수 있어 출장이나 해외여행 갈 때 무조건 챙기는 필수템입니다.",
      author: "이*진 님",
      job: "45세 전문직",
      tag: "생활방수 우수"
    },
    {
      title: "생각보다 정말 많이 들어갑니다",
      text: "파운데이션 보틀에 보조배터리 세트까지 다 들어가는데 닫으면 콤팩트하고 납작해져요. 캐리어 패킹할 때 데드 스페이스를 싹 없애줍니다. 수납력이 진짜 사기 수준이에요.",
      author: "박*연 님",
      job: "38세 프리랜서",
      tag: "콤팩트 패킹"
    }
  ]

  return (
    <section id="reviews" className="py-24 bg-white border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs md:text-sm font-heading font-extrabold tracking-widest text-brand-lavender uppercase block mb-3">
            CUSTOMER REVIEWS
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-brand-black tracking-tight leading-tight">
            ARLLOY 고객들의 리얼 후기
          </h2>
          <p className="text-neutral-500 font-medium text-sm md:text-base mt-4">
            직접 수납의 편리함을 경험한 실사용자분들의 검증된 후기입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div 
              key={idx}
              className="bg-brand-light-gray p-8 rounded-3xl border border-neutral-100 flex flex-col justify-between hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-brand-lavender text-brand-lavender" />
                  ))}
                </div>

                <h3 className="text-lg font-heading font-bold text-brand-black mb-4">
                  &ldquo;{rev.title}&rdquo;
                </h3>
                <p className="text-neutral-500 font-medium text-sm leading-relaxed mb-6">
                  {rev.text}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-neutral-200/50 pt-5">
                <div>
                  <span className="text-xs font-bold text-brand-black block">{rev.author}</span>
                  <span className="text-[10px] text-neutral-400 font-medium">{rev.job}</span>
                </div>
                <span className="text-[10px] font-bold text-brand-lavender bg-brand-lavender/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {rev.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
