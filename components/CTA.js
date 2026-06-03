'use client'

import { useState } from 'react'
import { ShieldCheck, Truck, RotateCcw } from 'lucide-react'

export default function CTA() {
  const [selectedColor, setSelectedColor] = useState('black')

  const colors = {
    ivory: {
      name: "웜 아이보리",
      img: "images/아이보리브랜드.png",
      hex: "#F7F4EF"
    },
    black: {
      name: "차콜 블랙",
      img: "images/pouch_black_open.png",
      hex: "#1E1D1A"
    },
    brown: {
      name: "클래식 브라운",
      img: "images/브라운브랜드.png",
      hex: "#6E473B"
    }
  }

  const handleCheckout = () => {
    alert(`${colors[selectedColor].name} 제품이 임시 결제창으로 이동합니다.`)
  }

  return (
    <section id="checkout" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-brand-light-gray rounded-[2.5rem] border border-neutral-100 p-8 md:p-16 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Interactive Product Color Preview */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <div className="w-full max-w-sm aspect-square bg-white rounded-3xl p-6 border border-neutral-100 shadow-sm flex items-center justify-center overflow-hidden">
                <img 
                  src={colors[selectedColor].img} 
                  alt={`ARLLOY Pouch ${colors[selectedColor].name}`} 
                  className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            {/* Right: Pricing, Options & Checkout Form */}
            <div className="lg:col-span-6">
              <span className="text-xs md:text-sm font-heading font-extrabold tracking-widest text-brand-lavender uppercase block mb-3">
                LIMITED OFFER
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-brand-black tracking-tight leading-tight mb-4">
                다음 여행 전, <br /> 정리의 차이를 경험해보세요.
              </h2>
              <p className="text-neutral-500 font-medium text-xs md:text-sm mb-8 leading-relaxed">
                정리에 투자하는 작은 차이가 여행 전체의 품격을 결정합니다. 15% 얼리버드 특별 할인 기간에 만나보세요.
              </p>

              {/* Pricing Card */}
              <div className="bg-white border border-neutral-100 p-6 rounded-2xl mb-8 flex items-center justify-between">
                <div>
                  <span className="text-xs text-neutral-400 font-bold block mb-1">정상가 ₩45,000</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-heading font-extrabold text-brand-black">₩38,250</span>
                    <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded">15% OFF</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-brand-lavender bg-brand-lavender/10 px-3 py-1 rounded-full font-bold">
                    서울/경기 무료 배송
                  </span>
                </div>
              </div>

              {/* Color Selectors */}
              <div className="mb-8">
                <span className="text-xs font-bold text-brand-black uppercase tracking-wider block mb-3">
                  색상 선택: <span className="text-brand-lavender font-extrabold">{colors[selectedColor].name}</span>
                </span>
                <div className="flex gap-4">
                  {Object.keys(colors).map((key) => (
                    <button
                      key={key}
                      onClick={() => setSelectedColor(key)}
                      className={`w-10 h-10 rounded-full border-2 transition-all duration-300 transform hover:scale-110 flex items-center justify-center ${
                        selectedColor === key 
                          ? 'border-brand-lavender ring-2 ring-brand-lavender/25' 
                          : 'border-transparent'
                      }`}
                      style={{ backgroundColor: colors[key].hex }}
                      title={colors[key].name}
                      aria-label={`Select ${colors[key].name}`}
                    >
                      {selectedColor === key && (
                        <span className="w-2.5 h-2.5 rounded-full bg-white shadow-sm mix-blend-difference" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Purchase Button */}
              <button
                onClick={handleCheckout}
                className="w-full bg-brand-black text-white hover:bg-brand-lavender hover:shadow-lg hover:shadow-brand-lavender/10 text-base md:text-lg font-bold py-5 rounded-full shadow-md transition-all duration-300 mb-8"
              >
                {colors[selectedColor].name} 구매하기
              </button>

              {/* Trust Badges Grid */}
              <div className="grid grid-cols-3 gap-4 border-t border-neutral-200/60 pt-6">
                <div className="flex flex-col items-center text-center">
                  <Truck size={18} className="text-brand-lavender mb-2" />
                  <span className="text-[10px] font-bold text-brand-black">무료 당일 배송</span>
                  <span className="text-[8px] text-neutral-400 mt-0.5">오후 2시 이전 주문 시</span>
                </div>

                <div className="flex flex-col items-center text-center">
                  <RotateCcw size={18} className="text-brand-lavender mb-2" />
                  <span className="text-[10px] font-bold text-brand-black">7일 안심 보장</span>
                  <span className="text-[8px] text-neutral-400 mt-0.5">100% 무료 반품 및 교환</span>
                </div>

                <div className="flex flex-col items-center text-center">
                  <ShieldCheck size={18} className="text-brand-lavender mb-2" />
                  <span className="text-[10px] font-bold text-brand-black">보안 결제 지원</span>
                  <span className="text-[8px] text-neutral-400 mt-0.5">안전 거래 승인 보장</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
