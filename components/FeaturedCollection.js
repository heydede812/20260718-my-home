'use client'

import { useCart } from '../context/CartContext'
import { Star, ShoppingCart } from 'lucide-react'
import { useState } from 'react'

export default function FeaturedCollection() {
  const { addToCart } = useCart()
  const [hoveredIdx, setHoveredIdx] = useState(null)

  const products = [
    {
      id: 'travel-org',
      name: '아를로이 트래블 오거나이저',
      category: '트래블 악세사리',
      price: 59,
      rating: 5,
      reviewsCount: 184,
      imagePrimary: 'images/아이보리브랜드.png',
      imageSecondary: 'images/아이보리내부-1.jpg'
    },
    {
      id: 'beauty-org',
      name: '아를로이 뷰티 파우치',
      category: '뷰티 파우치',
      price: 49,
      rating: 4.9,
      reviewsCount: 92,
      imagePrimary: 'images/pouch_pink.png',
      imageSecondary: 'images/pouch_pink_new.jpg'
    },
    {
      id: 'beauty-device',
      name: '아를로이 이로이 뷰티 디바이스',
      category: '뷰티디바이스',
      price: 129,
      rating: 5,
      reviewsCount: 38,
      imagePrimary: 'images/mockup_beauty_device.png',
      imageSecondary: 'images/mockup_beauty_device.png'
    },
    {
      id: 'tech-org',
      name: '아를로이 테크 오거나이저',
      category: '트래블 악세사리',
      price: 45,
      rating: 4.8,
      reviewsCount: 61,
      imagePrimary: 'images/pouch_beige.png',
      imageSecondary: 'images/pouch_black_open.png'
    },
    {
      id: 'travel-acc',
      name: '아를로이 트래블 액세서리 세트',
      category: '트래블 악세사리',
      price: 29,
      rating: 5,
      reviewsCount: 47,
      imagePrimary: 'images/브라운브랜드.png',
      imageSecondary: 'images/브라운내부-1.jpg'
    },
    {
      id: 'lifestyle-pack',
      name: '아를로이 포터블 라이프스타일 팩',
      category: '트래블 악세사리',
      price: 69,
      rating: 4.9,
      reviewsCount: 115,
      imagePrimary: 'images/pouch_blue.png',
      imageSecondary: 'images/브라운내부-2.jpg'
    }
  ]

  return (
    <section id="collection" className="py-32 bg-[#FAF8F5] border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-heading font-extrabold tracking-widest text-brand-lavender uppercase block mb-3">
              큐레이션 에센셜
            </span>
            <h2 className="text-4xl sm:text-5xl font-heading font-extrabold text-brand-black tracking-tight leading-none">
              추천 컬렉션
            </h2>
          </div>
          <p className="text-neutral-500 font-medium text-sm sm:text-base max-w-md leading-relaxed">
            섬세하게 설계된 오거나이저 라인업으로 당신의 일상과 여행의 격을 높여보세요.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {products.map((product, idx) => (
            <div 
              key={product.id}
              className="flex flex-col group relative"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] bg-brand-beige/40 rounded-[2rem] overflow-hidden border border-neutral-100/60 shadow-sm transition-all duration-500 hover:shadow-md mb-6">
                <img
                  src={hoveredIdx === idx ? product.imageSecondary : product.imagePrimary}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Floating Category Tag */}
                <span className="absolute top-6 left-6 bg-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-brand-black border border-white/20">
                  {product.category}
                </span>

                {/* Quick Add Button overlay */}
                <div className="absolute inset-x-6 bottom-6 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-brand-black hover:bg-brand-lavender text-white text-xs font-bold uppercase tracking-wider py-4 rounded-full flex items-center justify-center gap-2 shadow-lg transition-colors duration-300"
                  >
                    <ShoppingCart size={14} />
                    장바구니 담기
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col px-2">
                <div className="flex items-center gap-1.5 mb-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} fill="currentColor" stroke="none" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-neutral-400">
                    ({product.reviewsCount})
                  </span>
                </div>
                
                <h3 className="font-heading font-bold text-lg md:text-xl text-brand-black group-hover:text-brand-lavender transition-colors duration-300 mb-1">
                  {product.name}
                </h3>
                <span className="font-heading font-extrabold text-brand-lavender text-base md:text-lg">
                  ${product.price}.00
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
