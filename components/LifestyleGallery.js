'use client'

export default function LifestyleGallery() {
  const galleries = [
    {
      title: '공항',
      desc: '보안 검색대 통과가 더욱 가벼워집니다. 즉시 개방되는 레이아웃으로 여권과 필수품을 항상 준비된 상태로 보관하세요.',
      img: 'images/hero_lifestyle.png'
    },
    {
      title: '호텔',
      desc: '어지럽혀진 화장대는 이제 안녕. 파우치를 걸거나 세워두고 필요한 뷰티 아이템을 간편하게 사용하세요.',
      img: 'images/아이보리내부-2.jpg'
    },
    {
      title: '오피스',
      desc: '일상과 업무의 원활한 전환. 오피스에 필요한 충전기, 테크 기기부터 데일리 화장품까지 슬리브 하나에 보관하세요.',
      img: 'images/브라운내부-2.jpg'
    },
    {
      title: '피트니스',
      desc: '운동 후 캐비닛 속을 더욱 쾌적하게. 이중 방수 안감이 젖은 소지품이나 파우더의 누출을 보호합니다.',
      img: 'images/브라운내부-1.jpg'
    },
    {
      title: '주말 여행',
      desc: '짐은 가볍게, 발걸음은 멀리. 압축 시 아주 얇아져서 캐리어나 더플백 내부에 군더더기 없이 수납됩니다.',
      img: 'images/hero_wood_bg.png'
    },
    {
      title: '데일리 루틴',
      desc: '구조화된 시스템으로 시작하는 아침. 정리가 습관이 될 때 삶의 여유가 생깁니다.',
      img: 'images/아이보리내부-1.jpg'
    }
  ]

  return (
    <section id="lifestyle" className="py-32 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-heading font-extrabold tracking-widest text-brand-lavender uppercase block mb-3">
            라이프스타일 씬
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-extrabold text-brand-black tracking-tight leading-tight">
            당신의 모든 순간을 위해
          </h2>
          <p className="text-neutral-500 font-medium text-sm sm:text-base mt-4">
            이른 아침의 공항철도부터 매일의 작업실 공간까지, ARLLOY는 모든 순간에 자연스럽게 녹아듭니다.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleries.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-neutral-100/60 shadow-sm transition-all duration-500 hover:scale-[1.01] hover:shadow-lg"
            >
              {/* Background Image */}
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Text Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-lavender mb-2 block">
                  시나리오 0{idx + 1}
                </span>
                <h3 className="text-2xl font-heading font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-neutral-300 font-medium leading-relaxed opacity-0 group-hover:opacity-100 max-height-0 group-hover:max-height-20 transition-all duration-500 overflow-hidden">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
