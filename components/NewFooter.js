'use client'

import { useState } from 'react'

export default function NewFooter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  const instagramImages = [
    '/assets/user_img_2.jpg',
    '/assets/user_img_1.jpg',
    '/assets/user_img_0.jpg',
    '/assets/user_img_4.jpg',
  ]

  return (
    <footer className="bg-brand-charcoal text-brand-white pt-24 pb-12 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
        
        {/* Newsletter Column (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-start">
          <span className="text-brand-purple text-xs font-bold tracking-[0.25em] uppercase block mb-3">
            JOURNAL
          </span>
          <h3 className="text-2xl md:text-3xl font-heading font-light tracking-wide mb-4 text-brand-white">
            Join the Nomad List.
          </h3>
          <p className="text-brand-ivory/60 text-xs md:text-sm font-light tracking-wide max-w-sm mb-6 leading-relaxed">
            아를로이의 신제품 소식, 오프닝 혜택 및 여행의 가치를 더하는 브랜드 저널을 이메일로 받아보세요.
          </p>
          
          {subscribed ? (
            <div className="p-4 bg-brand-purple/20 text-brand-purple text-xs font-semibold tracking-wider rounded-xl border border-brand-purple/30">
              ✓ 구독 신청이 성공적으로 완료되었습니다.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="w-full flex gap-2 max-w-md">
              <input
                type="email"
                placeholder="이메일 주소를 입력해 주세요"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs tracking-wider text-brand-white focus:outline-none focus:border-brand-purple transition-all"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-brand-white text-brand-charcoal font-bold text-xs tracking-widest uppercase rounded-xl hover:bg-brand-ivory transition-colors active:scale-95"
              >
                SUBSCRIBE
              </button>
            </form>
          )}
        </div>

        {/* Brand Links (3 cols) */}
        <div className="lg:col-span-3 grid grid-cols-2 gap-8 text-xs tracking-[0.15em] font-semibold text-brand-ivory/40">
          <div className="flex flex-col gap-4">
            <span className="text-brand-white mb-2 tracking-[0.2em]">SHOP</span>
            <a href="#reveal" className="hover:text-brand-white transition-colors">POUCH</a>
            <a href="#ecosystem" className="hover:text-brand-white transition-colors">STYLER</a>
            <a href="#ecosystem" className="hover:text-brand-white transition-colors">PACKING CUBES</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-brand-white mb-2 tracking-[0.2em]">STORY</span>
            <a href="#brand-story" className="hover:text-brand-white transition-colors">BRAND</a>
            <a href="#features" className="hover:text-brand-white transition-colors">DESIGN</a>
            <a href="#reviews" className="hover:text-brand-white transition-colors">REVIEWS</a>
          </div>
        </div>

        {/* Instagram Feed (4 cols) */}
        <div className="lg:col-span-4">
          <span className="text-brand-purple text-xs font-bold tracking-[0.25em] uppercase block mb-4">
            INSTAGRAM @ARLLOY
          </span>
          <div className="grid grid-cols-4 gap-3">
            {instagramImages.map((img, i) => (
              <a
                key={i}
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="relative aspect-square w-full rounded-lg overflow-hidden group border border-white/5"
              >
                <img
                  src={img}
                  alt={`ARLLOY Instagram post ${i}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-brand-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs text-brand-white font-medium">
                  보기
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Footer Bottom info */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-[11px] font-light tracking-wide text-brand-ivory/40 leading-relaxed">
        <div>
          <div className="mb-4">
            <img
              src="/images/logo.png"
              alt="arlloy"
              className="h-9 w-auto brightness-0 invert"
            />
          </div>
          <p>상호명: (주)아로이코리아 | 대표자: 홍길동 | 서울특별시 강남구 테헤란로 123</p>
          <p>사업자등록번호: 123-45-67890 | 통신판매업신고: 제 2026-서울강남-0000호</p>
          <p>고객센터: 1544-0000 | 이메일: support@arlloy.com</p>
        </div>
        <div className="flex flex-col md:items-end gap-2 text-xs">
          <div className="flex gap-4">
            <a href="#" className="hover:text-brand-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-brand-white transition-colors">Terms of Service</a>
          </div>
          <p className="text-[10px] text-brand-ivory/30 mt-1">
            &copy; 2026 ARLLOY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
