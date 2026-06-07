'use client'

import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email) {
      setError('이메일 주소를 입력해 주세요.')
      return
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError('올바른 이메일 주소를 입력해 주세요.')
      return
    }
    
    setError('')
    setSubmitted(true)
    // LocalStorage or state capture can sync here
  }

  return (
    <section className="py-28 bg-[#FAF8F5] border-b border-neutral-100 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        
        <span className="text-xs font-heading font-extrabold tracking-widest text-brand-lavender uppercase block mb-3">
          뉴스레터 구독
        </span>
        
        <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-brand-black tracking-tight leading-tight mb-4">
          아를로이 커뮤니티에 가입하세요
        </h2>
        <p className="text-neutral-500 font-medium text-sm sm:text-base max-w-lg mx-auto leading-relaxed mb-10">
          구독하고 여행 정리 팁, 신제품 출시 소식, 그리고 첫 주문에 적용 가능한 <strong className="text-brand-lavender">10% 특별 할인 코드</strong>를 받아보세요.
        </p>

        {submitted ? (
          <div className="bg-white border border-neutral-100 max-w-md mx-auto p-8 rounded-[2rem] shadow-sm flex flex-col items-center gap-4 animate-fade-in-up">
            <div className="w-12 h-12 rounded-full bg-brand-lavender/10 text-brand-lavender flex items-center justify-center">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <h4 className="text-base font-bold text-brand-black">구독이 완료되었습니다!</h4>
              <p className="text-xs text-neutral-400 mt-1">받은편지함에서 10% 할인 코드를 확인하세요: <strong>WELCOME10</strong></p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col gap-3">
            <div className="relative flex items-center">
              <input
                type="email"
                placeholder="이메일 주소를 입력해 주세요"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white border border-neutral-200/80 focus:border-brand-lavender focus:ring-1 focus:ring-brand-lavender text-brand-black px-6 py-4 rounded-full text-xs font-semibold placeholder:text-neutral-400 outline-none transition-all duration-300 shadow-sm"
              />
              <button
                type="submit"
                className="absolute right-2 bg-brand-black hover:bg-brand-lavender text-white p-2.5 rounded-full transition-colors duration-300"
                aria-label="Subscribe"
              >
                <Send size={14} />
              </button>
            </div>
            {error && (
              <span className="text-red-500 text-xs font-semibold mt-1 block">
                {error}
              </span>
            )}
          </form>
        )}

        {/* Benefits bullets list */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-12 text-xs font-semibold text-neutral-400 uppercase tracking-wider">
          <span>✓ 첫 구매 10% 할인 쿠폰</span>
          <span className="hidden sm:inline">•</span>
          <span>✓ 신제품 출시 사전 알림</span>
          <span className="hidden sm:inline">•</span>
          <span>✓ 패킹 가이드 제공</span>
        </div>

      </div>
    </section>
  )
}
