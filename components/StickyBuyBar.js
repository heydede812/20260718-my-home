'use client'
import { useState, useEffect } from 'react'

export default function StickyBuyBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 bg-[#FAF8F5]/90 border-t border-neutral-200/50 p-4 flex items-center justify-between z-[900] backdrop-blur-md transition-transform duration-500 shadow-md ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex items-center gap-4">
        <img src="images/pouch_pink_new.jpg" alt="아를로이 웜 아이보리" className="w-12 h-12 object-contain bg-white border border-neutral-100 rounded" />
        <div className="hidden sm:block">
          <h4 className="text-sm font-heading font-bold text-brand-black">아를로이 트래블 오거나이저</h4>
          <p className="text-xs text-neutral-500">선택된 색상: 웜 아이보리</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-lg font-heading font-bold text-brand-black">$59.00</div>
        <a href="#signature" className="bg-brand-black text-white hover:bg-brand-lavender text-xs md:text-sm font-bold px-6 py-2.5 rounded-full transition-all">
          지금 구매하기
        </a>
      </div>
    </div>
  )
}
