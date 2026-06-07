import { EyeOff, HeartCrack, Layers3, Briefcase } from 'lucide-react'

export default function PainPoints() {
  const problems = [
    {
      icon: <Layers3 className="text-red-400" size={24} />,
      title: "Cosmetics mixed together",
      desc: "All your cosmetic bottles, lipsticks and eye shadows are mixed up in a single dark pile."
    },
    {
      icon: <EyeOff className="text-red-400" size={24} />,
      title: "Wasted time searching",
      desc: "Diving deep inside your bag on small hotel vanities wasting precious travel minutes."
    },
    {
      icon: <HeartCrack className="text-red-400" size={24} />,
      title: "Damaged makeup brushes",
      desc: "Expensive brushes get crushed under other beauty tools and powders, damaging bristles."
    },
    {
      icon: <Briefcase className="text-red-400" size={24} />,
      title: "Leaking products",
      desc: "One loose lid leads to foundation leaks soaking into your clothing inside the suitcase."
    }
  ]

  return (
    <section id="problems" className="py-24 bg-brand-light-gray">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs md:text-sm font-heading font-extrabold tracking-widest text-brand-lavender uppercase block mb-3">
            THE FRUSTRATION
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-brand-black tracking-tight leading-tight">
            Tired of messy travel bags?
          </h2>
          <p className="text-neutral-600 font-medium text-base md:text-lg mt-4">
            Traditional bags create chaos and turn travel preparation into a stressful task.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((prob, idx) => (
            <div 
              key={idx}
              className="flex gap-6 bg-white border border-neutral-100 p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-brand-lavender/25 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
                {prob.icon}
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-brand-black mb-2">
                  {prob.title}
                </h3>
                <p className="text-neutral-600 font-medium text-sm md:text-base leading-relaxed">
                  {prob.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
