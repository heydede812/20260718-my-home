'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null)

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx)
  }

  const faqs = [
    {
      q: "세탁이 가능한가요?",
      a: "겉감과 안감 모두 특수 코팅이 되어 있어 세탁기 사용은 권장하지 않습니다. 가벼운 오염은 물티슈나 젖은 수건으로 닦아주시고, 전체 세척이 필요한 경우 미지근한 물에 중성세제를 풀어 가볍게 손세탁 후 그늘에서 건조해 주세요."
    },
    {
      q: "브러쉬는 몇 개까지 들어가나요?",
      a: "브러쉬 전용 포켓 공간의 탄력 고무 밴드 홀더는 얇은 아이브로우부터 볼드한 파우더 브러쉬까지 총 5~8개까지 섞이지 않고 안전하게 분리 고정 및 수납이 가능합니다."
    },
    {
      q: "비행기 기내용으로 휴대가 가능한가요?",
      a: "네, 휴대하기 이상적인 콤팩트 규격으로 기내 반입 휴대 수하물 백팩이나 캐리어에 쏙 들어갑니다. 단, 100ml 초과 액체 화장품을 담아 기내 탑재하실 경우 국제선 액체류 반입 규정에 맞추어 지퍼백에 별도 분리해야 할 수 있습니다."
    },
    {
      q: "생활방수는 어느 정도인가요?",
      a: "고밀도 옥스포드 나일론 원단 겉면 발수 코팅과 안쪽 PVC 방수 안감 2중 가공으로, 일상적인 세면대 물방울, 가벼운 비, 화장품 오염 등을 완벽하게 튕겨내며 내용물을 뽀송하게 보호합니다."
    },
    {
      q: "화장품 외에 전자기기 수납도 가능한가요?",
      a: "네, 다용도 스마트 오거나이저 구조로 설계되어 여행용 보조배터리, 220V 플러그 어댑터, 외장 하드, 마우스, 각종 충전용 케이블 타이 등을 깔끔하게 수납하는 IT 파우치로도 인기가 매우 높습니다."
    },
    {
      q: "180도로 활짝 열리면 안의 소품들이 쏟아지지 않나요?",
      a: "포켓 내부가 각 영역별로 고무 마감 밴딩 처리와 분리 수납 격벽 구조로 이루어져 있어, 180도 완전히 개방하여 흔들어도 수납해 놓은 화장품들이 이탈하거나 뒤섞여 쏟아지지 않습니다."
    },
    {
      q: "제품 크기와 무게가 어떻게 되나요?",
      a: "가로 22cm x 세로 16cm x 폭 7cm 사이즈입니다. 내구성을 위한 3D 완충 보강재가 들어갔음에도 빈 파우치 기준 약 120g의 초경량 무게로 제작되어 장시간 여행길에도 무리가 없습니다."
    },
    {
      q: "보조배터리도 함께 보관해도 안전한가요?",
      a: "파우치 내부와 외부 벽면에 도톰한 고밀도 완충재 패딩이 내장되어 있어 가벼운 외부 충격과 눌림을 차단합니다. 따라서 화장품 컴팩트 섀도우 깨짐 방지는 물론 전자기기도 안전하게 보관할 수 있습니다."
    },
    {
      q: "지퍼가 쉽게 고장 나거나 씹히지 않나요?",
      a: "고가의 아웃도어 기어에 들어가는 대형 라운드 더블 지퍼 슬라이더 공정을 거쳤습니다. 파우치를 풀 수납한 상태에서도 걸림 없이 양방향에서 부드럽게 개폐됩니다."
    },
    {
      q: "구매 후 반품이나 교환이 가능한가요?",
      a: "네, 제품 수령 후 사용하지 않으신 상태(포장 제거 전)라면 7일 이내에 단순 변심이라도 100% 무료 반품 및 교환 서비스를 신청하실 수 있습니다. 고객님의 만족을 최우선으로 합니다."
    },
    {
      q: "대량 주문이나 단체 선물 제작이 가능한가요?",
      a: "네, 기업 사은품 판촉, 웰컴 키트 선물 등 대량 구매의 경우 공식 고객지원 문의처를 통해 수량별 할인율 및 로고 각인 가공 가능 여부를 신속하게 맞춤 상담해 드립니다."
    }
  ]

  return (
    <section id="faq" className="py-24 bg-brand-light-gray">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs md:text-sm font-heading font-extrabold tracking-widest text-brand-lavender uppercase block mb-3">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-brand-black tracking-tight leading-tight">
            자주 묻는 질문
          </h2>
          <p className="text-neutral-500 font-medium text-sm md:text-base mt-4">
            ARLLOY에 대해 궁금한 점을 직관적으로 확인하세요.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx
            return (
              <div 
                key={idx}
                className="bg-white border border-neutral-100/70 rounded-2xl overflow-hidden shadow-sm transition-all duration-300"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                >
                  <span className="font-heading font-bold text-brand-black text-sm md:text-base">
                    {faq.q}
                  </span>
                  <ChevronDown 
                    size={18} 
                    className={`text-brand-gray transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-lavender' : ''}`}
                  />
                </button>

                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[300px] border-t border-neutral-50' : 'max-h-0'
                  }`}
                >
                  <p className="p-6 md:p-8 text-neutral-500 font-medium text-xs md:text-sm leading-relaxed bg-neutral-50/30">
                    {faq.a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
