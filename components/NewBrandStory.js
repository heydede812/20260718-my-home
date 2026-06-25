'use client'

import { motion } from 'framer-motion'

export default function NewBrandStory() {
  return (
    <section
      id="brand-story"
      className="relative min-h-screen w-full bg-brand-ivory py-24 md:py-36 flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Visual Showcase (5 cols) */}
        <div className="lg:col-span-5 relative w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full"
          >
            <img
              src="/assets/brown_closed.jpg"
              alt="ARLLOY cosmetic design story"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Text Storytelling (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-start lg:pl-10">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-brand-purple text-xs font-bold tracking-[0.3em] uppercase mb-6"
          >
            OUR ESSENCE & PHILOSOPHY
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.1 }}
            className="text-brand-charcoal text-4xl md:text-5xl font-heading font-light tracking-tight leading-tight mb-4"
          >
            Beautiful by nature.<br />
            <span className="font-semibold text-brand-purple">Better by design.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.15 }}
            className="text-brand-charcoal font-medium text-lg md:text-xl tracking-wide mb-8"
          >
            &ldquo;있는 그대로 충분히 아름다운 당신의 삶을 더 이롭게.&rdquo;
          </motion.p>

          <div className="space-y-6 text-brand-charcoal/70 text-sm md:text-base font-light tracking-wide leading-relaxed max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              ARLLOY는 <strong>&apos;아름다움&apos;</strong>과 <strong>&apos;이롭게 하다&apos;</strong>라는 뜻을 담아 탄생했습니다. 우리는 아름다움이 특별한 누군가에게만 주어지는 것이 아니라, 누구나 자신의 방식으로 가지고 있는 가치라고 믿습니다.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              그리고 좋은 제품은 단순히 보기 좋은 것을 넘어, 일상을 더 편리하게 만들고 삶의 질을 높여야 한다고 생각합니다. ARLLOY는 감각적인 디자인과 실용적인 기능을 통해 일상 속 작은 불편을 줄이고, 더 나은 경험을 제공합니다.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="text-brand-purple font-semibold text-sm md:text-base pl-4 border-l-2 border-brand-purple/40"
            >
              매일 사용하는 물건 하나에도 아름다움과 유용함이 함께할 때, 삶은 조금 더 풍요로워질 수 있습니다. 우리는 화려함보다 오래 남는 가치, 유행보다 꾸준히 곁에 머무는 편안함을 추구합니다.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              ARLLOY는 당신의 일상을 더욱 아름답고 이롭게 만드는 라이프스타일 브랜드입니다.
            </motion.p>
          </div>

          {/* Mission & Vision cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-12 pt-12 border-t border-brand-charcoal/10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="p-6 bg-brand-white rounded-2xl border border-brand-charcoal/[0.04]"
            >
              <h4 className="text-brand-charcoal font-bold text-xs tracking-[0.2em] uppercase mb-2">
                Brand Mission
              </h4>
              <p className="text-brand-charcoal/70 text-xs font-light tracking-wide leading-relaxed">
                일상을 더 아름답게, 삶을 더 이롭게. 사용자의 하루를 세심하게 관찰하고, 작은 불편을 해결하며, 감각적인 경험을 더하는 제품을 만듭니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.7 }}
              className="p-6 bg-brand-white rounded-2xl border border-brand-charcoal/[0.04]"
            >
              <h4 className="text-brand-charcoal font-bold text-xs tracking-[0.2em] uppercase mb-2">
                Brand Vision
              </h4>
              <p className="text-brand-charcoal/70 text-xs font-light tracking-wide leading-relaxed">
                일상에 필요한 가장 아름다운 솔루션을 제공하는 글로벌 넘버원 럭셔리 라이프스타일 브랜드
              </p>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  )
}
