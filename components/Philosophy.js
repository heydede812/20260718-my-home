export default function Philosophy() {
  return (
    <section className="py-28 bg-brand-black text-white relative overflow-hidden">
      {/* Decorative ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-brand-lavender/10 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Big Philosophy Quote */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs md:text-sm font-heading font-extrabold tracking-widest text-brand-lavender uppercase block mb-6">
              BRAND PHILOSOPHY
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white leading-tight tracking-tight mb-8">
              &ldquo;정리는 공간을 <br className="hidden md:block" /> 만드는 것이 아니라, <br />
              여행의 <span className="text-brand-lavender">여유</span>를 만드는 것입니다.&rdquo;
            </h2>
            <div className="w-16 h-1 bg-brand-lavender rounded-full" />
          </div>

          {/* Right Column: Narrative Brand Story */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h3 className="text-xl font-heading font-bold text-neutral-200 mb-6 uppercase tracking-wider">
              ARLLOY Brand Story
            </h3>
            <div className="space-y-6 text-neutral-400 font-medium text-sm md:text-base leading-relaxed">
              <p>
                우리는 여행지의 낯선 설렘보다, 캐리어 가방을 싸고 정리하는 순간의 불편함에 주목했습니다. 번거로운 짐 싸기가 귀찮은 숙제가 아닌, 여행의 시작을 준비하는 가장 우아한 과정이 될 수 있도록 ARLLOY가 탄생했습니다.
              </p>
              <p>
                ARLLOY의 모든 구조는 화장대나 책상 서랍을 그대로 옮겨놓은 듯한 직관적이고 규칙적인 세로 수납을 목표로 설계되었습니다. 필요한 물건을 단 1초 만에 찾을 수 있는 정리 정돈의 여유, 그것이 우리가 전하고자 하는 프리미엄 라이프스타일 가치입니다.
              </p>
              <p className="text-brand-lavender font-semibold text-base md:text-lg">
                "여행의 준비를 더 우아하게, ARLLOY"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
