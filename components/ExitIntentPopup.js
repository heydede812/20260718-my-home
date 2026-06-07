'use client'
import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY < 20 && !shown) {
        setIsOpen(true)
        setShown(true)
      }
    }
    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [shown])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-brand-charcoal/40 backdrop-blur-sm z-[1000] flex items-center justify-center p-4 transition-all duration-300">
      <div className="bg-[#FAF8F5] border border-neutral-100 rounded-3xl w-full max-w-md p-8 md:p-10 relative shadow-xl transform scale-100 transition-all">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-neutral-400 hover:text-brand-black transition-colors"
          aria-label="Close popup"
        >
          <X size={20} />
        </button>
        <div className="text-center mb-6">
          <span className="text-xs font-heading font-extrabold tracking-widest text-brand-lavender uppercase block mb-2">
            단독 혜택
          </span>
          <h3 className="text-2xl font-heading font-extrabold text-brand-black mb-3">
            첫 주문 10% 할인 혜택 받기
          </h3>
          <p className="text-neutral-500 font-medium text-xs md:text-sm leading-relaxed">
            뉴스레터를 구독하고 ARLLOY 첫 주문에 적용 가능한 10% 할인 코드와 여행 정리 노하우를 받아보세요.
          </p>
        </div>
        <form 
          onSubmit={(e) => {
            e.preventDefault()
            alert('감사합니다! 10% 할인 코드가 이메일로 발송되었습니다.')
            setIsOpen(false)
          }}
          className="space-y-4"
        >
          <input 
            type="email" 
            placeholder="이메일 주소를 입력해 주세요" 
            required 
            className="w-full px-5 py-3.5 rounded-xl border border-neutral-200 focus:outline-none focus:border-brand-lavender text-sm bg-white text-brand-black"
          />
          <button 
            type="submit" 
            className="w-full bg-brand-black text-white hover:bg-brand-lavender text-sm font-bold py-4 rounded-full transition-all shadow-md"
          >
            할인 코드 받기
          </button>
        </form>
        <p className="text-center text-[10px] text-neutral-400 mt-4">
          스팸 없음. 언제든 해지 가능.
        </p>
      </div>
    </div>
  )
}
