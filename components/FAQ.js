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
      q: "Is it waterproof?",
      a: "Yes, both exterior fabric and interior linings feature a premium double water-resistant nylon coating to lock down makeup spills inside and keep countertops dry."
    },
    {
      q: "How many products fit inside?",
      a: "It comfortably holds 15-20 makeup products, including compact powders, foundation bottles, beauty tools, palettes, and lipsticks."
    },
    {
      q: "Can it store makeup brushes?",
      a: "Yes, there is a dedicated brush storage compartment with elastic loops and a PVC protective cover to keep bristles separated, straight, and clean."
    },
    {
      q: "Is it suitable for air travel?",
      a: "Absolutely, its 180° open layout is designed for fast security checks, and the slim folding compression profile slips easily into carry-on backpacks."
    },
    {
      q: "How do I clean it?",
      a: "Simply wipe the interior or exterior nylon with a damp cloth or warm soapy water. Makeup stains wipe off effortlessly in seconds."
    },
    {
      q: "What is the return policy?",
      a: "We offer a hassle-free 30-day return policy. If you are not completely satisfied with your organizer, return it unused for a full refund."
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
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-500 font-medium text-sm md:text-base mt-4">
            Clear answers to help you stay organised.
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
                  <span className="font-heading font-bold text-brand-black text-base md:text-lg">
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
                  <p className="p-6 md:p-8 text-neutral-600 font-medium text-sm md:text-base leading-relaxed bg-neutral-50/30">
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
