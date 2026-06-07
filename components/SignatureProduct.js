'use client'

import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { Check, ShieldCheck, Heart, Play } from 'lucide-react'

export default function SignatureProduct() {
  const { addToCart } = useCart()
  const [activeTab, setActiveTab] = useState(0)

  const signatureProduct = {
    id: 'travel-org',
    name: '아를로이 트래블 오거나이저',
    category: '트래블 악세사리',
    price: 59,
    rating: 5,
    reviewsCount: 184,
    imagePrimary: 'images/아이보리브랜드.png',
    imageSecondary: 'images/아이보리내부-1.jpg'
  }

  const features = [
    {
      title: '180° Flat Lay Open',
      titleKo: '180도 평면 개방형 구조',
      desc: '외곽을 둘러싼 지퍼를 통해 180도 평면으로 완전히 열립니다. 물건을 쏟거나 뒤질 필요 없이 원하는 소지품을 즉시 찾을 수 있습니다.',
      img: 'images/pouch_black_open.png'
    },
    {
      title: '3-Tier Modular Split',
      titleKo: '3단 분리 독립 파티션',
      desc: '테크 기기, 뷰티 제품, 스킨케어 등을 3개의 독립된 칸으로 분리합니다. 소지품 간의 마찰과 쓸림 현상을 최소화합니다.',
      img: 'images/아이보리내부-3.jpg'
    },
    {
      title: 'Dual Waterproof Coating',
      titleKo: '겉감/안감 이중 방수 코팅',
      desc: '프리미엄 고밀도 기능성 원단으로 제작되었습니다. 생활 방수 설계로 세척이 간편하며 외부로 액체가 새는 것을 방지합니다.',
      img: 'images/브라운내부-3.jpg'
    }
  ]

  return (
    <section id="signature" className="py-32 bg-brand-beige/50 border-b border-neutral-100 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Interactive Image Gallery */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="relative w-full aspect-[4/3] bg-white rounded-[2.5rem] p-8 border border-neutral-100 shadow-md flex items-center justify-center overflow-hidden">
              <img 
                src={features[activeTab].img} 
                alt={features[activeTab].title}
                className="w-full h-full object-contain rounded-2xl transition-all duration-700 ease-out hover:scale-105"
              />
              <div className="absolute top-6 left-6 bg-brand-black text-white text-[10px] font-bold tracking-widest uppercase px-4 py-2 rounded-full shadow-sm">
                인터랙티브 스펙 패널
              </div>
              <div className="absolute bottom-6 right-6 bg-brand-lavender/10 text-brand-lavender text-xs font-bold px-4 py-2 rounded-full border border-brand-lavender/20">
                {features[activeTab].titleKo}
              </div>
            </div>

            {/* Micro Thumbnail Indicators */}
            <div className="flex gap-4 mt-6">
              {features.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`w-20 h-16 rounded-xl border-2 overflow-hidden transition-all duration-300 ${
                    idx === activeTab ? 'border-brand-lavender scale-105 shadow-sm' : 'border-neutral-200 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={item.img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Copy & Actions */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-xs font-heading font-extrabold tracking-widest text-brand-lavender uppercase block mb-3">
              시그니처 제품
            </span>
            <h2 className="text-4xl sm:text-5xl font-heading font-extrabold text-brand-black tracking-tight leading-tight mb-4">
              아를로이 트래블 오거나이저
            </h2>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-lg font-heading font-extrabold text-brand-black">$59.00</span>
              <span className="text-xs font-bold text-neutral-400">| 기본 배송비 무료</span>
            </div>

            <p className="text-neutral-500 font-medium text-sm sm:text-base leading-relaxed mb-8">
              휴대용 오거나이저의 완성판. 압축 시에는 납작하게 보관이 가능하며, 지퍼를 열면 3.5L 크기의 3단 수납함으로 확장됩니다.
            </p>

            {/* Spec Features Tabs (Click triggers image change) */}
            <div className="flex flex-col gap-4 mb-8">
              {features.map((item, idx) => (
                <div 
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`cursor-pointer border-l-4 p-5 rounded-r-2xl transition-all duration-300 ${
                    idx === activeTab 
                      ? 'border-brand-lavender bg-white shadow-sm' 
                      : 'border-transparent hover:bg-neutral-50'
                  }`}
                >
                  <h4 className={`text-base font-bold transition-colors duration-300 ${
                    idx === activeTab ? 'text-brand-lavender' : 'text-brand-black'
                  }`}>
                    {item.titleKo}
                  </h4>
                  <span className="text-[10px] text-neutral-400 font-semibold uppercase tracking-wider block mt-0.5 mb-2">
                    {item.title}
                  </span>
                  <p className="text-xs text-neutral-500 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Checkout & Add CTA */}
            <div className="flex gap-4">
              <button
                onClick={() => addToCart(signatureProduct)}
                className="flex-1 bg-brand-black hover:bg-brand-lavender text-white text-xs font-bold uppercase tracking-wider py-4.5 rounded-full flex items-center justify-center gap-2 shadow-lg transition-colors duration-300"
              >
                바로 구매하기
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
