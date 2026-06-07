'use client'

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-brand-black flex items-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
        poster="images/hero_lifestyle.png"
      >
        <source 
          src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0227e338d3c9f2e707e0b5f1e843c0d&profile_id=139&oauth2_token_id=57447761" 
          type="video/mp4" 
        />
      </video>

      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-brand-black/40 z-10" />

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-8 w-full text-left relative z-20 mt-16">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 mb-6 text-white text-xs md:text-sm font-semibold tracking-wider uppercase">
          <span className="text-brand-lavender font-bold">●</span>
          <span>아를로이 글로벌 라이프스타일 스탠다드</span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-heading font-extrabold text-white leading-[1.05] tracking-tight mb-6 max-w-4xl">
          정리는 완벽하게.<br />
          이동은 자유롭게.
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-light max-w-2xl leading-relaxed mb-10">
          여행과 일상을 위해 세심하게 설계된 에센셜. 현대의 노마드, 프로페셔널, 그리고 자주 여행을 떠나는 이들을 위해 만듭니다.
        </p>
        <div className="flex gap-4">
          <a 
            href="#collection" 
            className="inline-flex items-center justify-center bg-brand-lavender text-white hover:bg-brand-lavender-dark text-xs md:text-sm font-extrabold uppercase tracking-wider px-8 py-4.5 rounded-full transition-all duration-300 shadow-lg hover:scale-[1.02] hover:shadow-brand-lavender/20"
          >
            컬렉션 쇼핑하기
          </a>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/40 hover:text-white/80 transition-colors duration-300 cursor-pointer">
        <span className="text-[10px] uppercase font-bold tracking-widest">스크롤하여 탐색</span>
        <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-brand-lavender rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
