'use client'

import { Star, CheckCircle } from 'lucide-react'

export default function Reviews() {
  const reviews = [
    {
      title: "디지털 노마드의 필수템.",
      text: "듀얼 충전기, 어댑터, 스킨케어 제품과 열쇠를 늘 들고 다닙니다. 테크 수납칸은 케이블을 완벽하게 수납하고, 반대편은 크림이 터지지 않게 보호해 줍니다. ARLLOY 덕분에 가방 공간이 확 줄었어요.",
      author: "Samantha K.",
      job: "디지털 노마드 & 디자이너",
      tag: "구매자 인증"
    },
    {
      title: "더 이상 호텔 수건 위에 늘어놓지 마세요.",
      text: "예전에는 아이라이너 하나 찾으려고 호텔 화장대에 화장품을 전부 쏟아붓곤 했어요. ARLLOY를 쓰고 나서는 지퍼만 열면 옷장 선반처럼 평평하게 펼쳐지니 아침 준비 시간이 혁신적으로 바뀌었습니다.",
      author: "이혜진",
      job: "여행 저널리스트",
      tag: "구매자 인증"
    },
    {
      title: "압도적인 퀄리티와 깔끔한 디자인.",
      text: "원단, 생활 방수 지퍼, 전체적인 마감 구조가 프리미엄 브랜드 수준으로 느껴집니다. 미니멀한 구성을 선호하는 여행자에게 강력히 추천합니다.",
      author: "Marcus J.",
      job: "비즈니스 여행자",
      tag: "구매자 인증"
    }
  ]

  const ugcImages = [
    'images/브라운내부-1.jpg',
    'images/아이보리내부-3.jpg',
    'images/pouch_pink_new.jpg',
    'images/브라운내부-3.jpg'
  ]

  return (
    <section id="reviews" className="py-32 bg-[#FAF8F5] border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Rating Metrics Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6">
            <span className="text-xs font-heading font-extrabold tracking-widest text-brand-lavender uppercase block mb-3">
              커뮤니티의 목소리
            </span>
            <h2 className="text-4xl sm:text-5xl font-heading font-extrabold text-brand-black tracking-tight leading-none mb-4">
              글로벌 여행자들의 찬사
            </h2>
            <p className="text-neutral-500 font-medium text-sm sm:text-base max-w-lg leading-relaxed">
              ARLLOY와 함께 여행의 정리를 완성한 디지털 노마드, 뷰티 전문가, 그리고 비즈니스 여행자들의 생생한 리뷰를 확인해 보세요.
            </p>
          </div>
          
          <div className="lg:col-span-6 flex items-center lg:justify-end gap-8">
            <div className="text-left">
              <span className="text-5xl sm:text-6xl font-heading font-extrabold text-brand-black block">4.92</span>
              <div className="flex text-amber-400 my-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" stroke="none" />
                ))}
              </div>
              <span className="text-xs text-neutral-400 font-bold uppercase tracking-wider block">평균 평점 (12,400+건)</span>
            </div>
            
            <div className="h-16 w-[1px] bg-neutral-200 hidden sm:block" />
            
            <div className="text-left hidden sm:block">
              <span className="text-5xl sm:text-6xl font-heading font-extrabold text-brand-black block">98%</span>
              <span className="text-xs text-neutral-400 font-bold uppercase tracking-wider block my-1">ARLLOY 추천 의사</span>
            </div>
          </div>
        </div>

        {/* UGC Photos Grid */}
        <div className="mb-20">
          <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6">
            소셜 미디어 공유 #ARLLOY스탠다드
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {ugcImages.map((img, idx) => (
              <div key={idx} className="relative aspect-square bg-neutral-100 rounded-3xl overflow-hidden border border-neutral-100 group">
                <img 
                  src={img} 
                  alt="UGC Customer Share" 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-brand-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-xs font-bold tracking-widest uppercase bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full">
                    게시글 보기
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div 
              key={idx}
              className="bg-white p-8 md:p-10 rounded-[2rem] border border-neutral-100/80 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-1.5 mb-6">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" stroke="none" />
                    ))}
                  </div>
                  <span className="text-[10px] text-brand-lavender bg-brand-lavender/10 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider flex items-center gap-1">
                    <CheckCircle size={10} /> 구매자 인증
                  </span>
                </div>

                <h4 className="text-lg md:text-xl font-heading font-bold text-brand-black mb-4">
                  &ldquo;{rev.title}&rdquo;
                </h4>
                <p className="text-neutral-500 font-medium text-xs md:text-sm leading-relaxed mb-6">
                  {rev.text}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-neutral-100 pt-5 mt-4">
                <div>
                  <span className="text-xs md:text-sm font-bold text-brand-black block">{rev.author}</span>
                  <span className="text-[10px] text-neutral-400 font-semibold uppercase tracking-wider">{rev.job}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
