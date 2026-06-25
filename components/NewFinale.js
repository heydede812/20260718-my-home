'use client'

import { motion } from 'framer-motion'

export default function NewFinale() {
  return (
    <section
      id="purchase"
      className="relative h-screen w-full overflow-hidden bg-brand-charcoal flex items-center justify-center"
    >
      {/* Background Video (Airport Gate / Terminal Walk) */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://player.vimeo.com/external/510850877.sd.mp4?s=d5e9dc2e5f3c98dc1c741496fa41b52a26569123&profile_id=165&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
        {/* Soft elegant vignette overlay */}
        <div className="absolute inset-0 bg-brand-charcoal/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-brand-charcoal/70" />
      </div>

      {/* Finale Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-brand-ivory text-xs font-bold tracking-[0.3em] uppercase mb-6 bg-brand-purple/40 px-5 py-2 rounded-full border border-brand-purple/20 backdrop-blur-md"
        >
          THE JOURNEY BEGINS
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-brand-white text-5xl md:text-8xl font-heading font-light tracking-wide leading-none mb-6"
        >
          Travel lighter.<br />
          <span className="font-medium">Live beautifully.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-brand-ivory/80 text-base md:text-xl font-light tracking-wide max-w-lg mb-12"
        >
          당신의 다음 목적지가 어디든, 아를로이와 함께 더 가볍고 품격 있게 준비하세요.
        </motion.p>

        {/* Dynamic checkout box mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="bg-brand-white/10 backdrop-blur-xl rounded-3xl p-8 max-w-md w-full border border-white/20 shadow-2xl"
        >
          <div className="flex justify-between items-center mb-6">
            <div className="text-left">
              <span className="text-brand-purple text-[10px] font-bold tracking-widest block uppercase">
                ARLLOY PREMIUM
              </span>
              <h4 className="text-brand-white text-lg font-bold">
                Open View Pouch
              </h4>
            </div>
            <div className="text-right">
              <span className="text-brand-white/40 text-xs line-through block">
                49,000원
              </span>
              <span className="text-brand-white text-lg font-bold">
                34,300원
              </span>
            </div>
          </div>

          <a
            href="#reveal"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('reveal')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="w-full py-4 rounded-xl bg-brand-white text-brand-charcoal text-xs font-bold tracking-widest uppercase hover:bg-brand-ivory transition-all duration-300 block text-center active:scale-98"
          >
            Shop ARLLOY
          </a>

          <div className="flex justify-between text-brand-ivory/40 text-[10px] tracking-widest font-semibold uppercase mt-6">
            <span>Free Shipping</span>
            <span>•</span>
            <span>Easy Exchange</span>
            <span>•</span>
            <span>Secure Checkout</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
