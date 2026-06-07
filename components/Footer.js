import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  const specs = [
    { label: "제품명", val: "ARLLOY Travel Organizer Pouch" },
    { label: "크기", val: "가로 22cm x 세로 16cm x 폭 7cm" },
    { label: "무게", val: "약 120g (초경량)" },
    { label: "소재", val: "겉감: 고밀도 나일론 (PVC 발수코팅), 안감: 이중방수 나일론" },
    { label: "색상", val: "웜 아이보리, 차콜 블랙, 클래식 브라운" },
    { label: "제조국", val: "대한민국 디자인 / 중국 OEM" },
    { label: "품질보증", val: "제품 수령 후 1년간 무상 A/S 지원" }
  ]

  return (
    <footer className="bg-brand-black text-white pt-20 pb-12 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Info & Contacts */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex flex-col items-start mb-6">
                <img 
                  src="images/logo.png" 
                  alt="arlloy logo" 
                  className="h-14 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <p className="text-neutral-400 font-medium text-xs md:text-sm leading-relaxed max-w-sm mb-8">
                우리는 일상과 여정의 경계를 우아하게 채우는 고품격 오거나이징 툴을 연구합니다.
              </p>
            </div>
            
            <div className="space-y-3.5 text-xs md:text-sm text-neutral-500 font-medium">
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-brand-lavender" />
                <span>CS Center: 1644-0000 (평일 10:00 - 17:00)</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-brand-lavender" />
                <span>Email: support@arlloy.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={14} className="text-brand-lavender" />
                <span>서울특별시 강남구 테헤란로 123, 5층</span>
              </div>
            </div>
          </div>

          {/* Product Specifications Table (Naver Shopping Optimization) */}
          <div className="lg:col-span-7">
            <h4 className="text-sm font-heading font-bold text-neutral-300 uppercase tracking-widest block mb-6">
              Product Specifications
            </h4>
            <div className="border border-white/10 rounded-2xl overflow-hidden">
              <table className="w-full text-left border-collapse text-xs md:text-sm">
                <tbody>
                  {specs.map((spec, idx) => (
                    <tr 
                      key={idx} 
                      className={`border-b border-white/[0.05] last:border-b-0 hover:bg-white/[0.02] transition-colors`}
                    >
                      <td className="p-4 font-bold text-neutral-400 w-1/3 border-r border-white/[0.05]">
                        {spec.label}
                      </td>
                      <td className="p-4 text-neutral-300 font-semibold">
                        {spec.val}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* E-Commerce Disclosures */}
        <div className="border-t border-white/[0.05] pt-8 flex flex-col md:flex-row items-baseline justify-between gap-6 text-[10px] text-neutral-600 font-medium">
          <div className="space-y-1 leading-relaxed">
            <p>상호명: 주식회사 알로이코리아 | 대표자: 김알로 | 사업자등록번호: 000-00-00000</p>
            <p>통신판매업신고번호: 제2026-서울강남-0000호 | 개인정보보호책임자: 박우아</p>
            <p>본 사이트의 모든 디자인 및 콘텐츠는 저작권법의 보호를 받으며 무단 복제를 금지합니다.</p>
          </div>
          <div className="text-neutral-500 text-xs">
            &copy; {new Date().getFullYear()} ARLLOY. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
