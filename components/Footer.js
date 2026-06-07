import { MapPin, Mail, Instagram, Twitter, Facebook } from 'lucide-react'

export default function Footer() {
  const shopLinks = [
    { label: '뷰티 파우치', href: '#collection' },
    { label: '뷰티디바이스', href: '#collection' },
    { label: '트래블 악세사리', href: '#collection' },
  ]

  const brandLinks = [
    { label: '브랜드 철학', href: '#philosophy' },
    { label: '시그니처 제품', href: '#signature' },
    { label: '아를로이 스탠다드', href: '#story' },
    { label: '고객 리뷰', href: '#reviews' },
  ]

  const supportLinks = [
    { label: '글로벌 고객센터', href: '#' },
    { label: '배송 정책', href: '#' },
    { label: '교환 및 반품', href: '#' },
    { label: '자주 묻는 질문(FAQ)', href: '#' },
  ]

  return (
    <footer className="bg-white text-brand-black pt-24 pb-12 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Section: Brand & Link Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <span className="text-2xl font-heading font-extrabold tracking-tight text-brand-black">
              아를로이.
            </span>
            <p className="text-neutral-500 font-medium text-xs md:text-sm leading-relaxed max-w-sm">
              우리는 공간의 조화와 이동의 자유를 위한 도구를 디자인합니다. 아를로이는 현대의 노마드, 프로페셔널, 그리고 여행자가 더 자유롭게 움직일 수 있도록 돕습니다.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 text-neutral-400">
              <a href="#" className="hover:text-brand-lavender transition-colors"><Instagram size={18} /></a>
              <a href="#" className="hover:text-brand-lavender transition-colors"><Twitter size={18} /></a>
              <a href="#" className="hover:text-brand-lavender transition-colors"><Facebook size={18} /></a>
            </div>
          </div>

          {/* Shop Column */}
          <div className="lg:col-span-2.5 md:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6">쇼핑</h4>
            <ul className="space-y-4">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-xs font-semibold text-neutral-600 hover:text-brand-lavender transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand Column */}
          <div className="lg:col-span-2.5 md:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6">브랜드</h4>
            <ul className="space-y-4">
              {brandLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-xs font-semibold text-neutral-600 hover:text-brand-lavender transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help/Support Column */}
          <div className="lg:col-span-3 md:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6">고객지원</h4>
            <ul className="space-y-4">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-xs font-semibold text-neutral-600 hover:text-brand-lavender transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-xs text-neutral-500 font-medium space-y-2">
              <p className="flex items-center gap-2">
                <Mail size={12} className="text-brand-lavender" /> hello@arlloy.com
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={12} className="text-brand-lavender" /> 서울특별시 강남구
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Section: Business Disclosures */}
        <div className="border-t border-neutral-100 pt-8 flex flex-col md:flex-row items-baseline justify-between gap-6 text-[10px] text-neutral-400 font-medium">
          <div className="space-y-1 leading-relaxed">
            <p>주식회사 아를로이코리아 | 대표자: 박우아 | 사업자등록번호: 123-88-01234</p>
            <p>통신판매업신고번호: 제2026-서울강남-1234호 | 개인정보보호책임자: 박우아</p>
            <p>본 사이트의 모든 디자인 및 콘텐츠는 저작권법의 보호를 받으며 무단 복제를 금지합니다.</p>
          </div>
          <div className="text-neutral-400 text-xs font-semibold">
            &copy; {new Date().getFullYear()} 아를로이. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  )
}
