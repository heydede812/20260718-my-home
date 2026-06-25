'use client'

import NewHeader from '../components/NewHeader'
import NewHero from '../components/NewHero'
import NewProductReveal from '../components/NewProductReveal'
import NewFeatureStorytelling from '../components/NewFeatureStorytelling'
import NewComparison from '../components/NewComparison'
import NewLifestyle from '../components/NewLifestyle'
import NewBrandStory from '../components/NewBrandStory'
import NewReviews from '../components/NewReviews'
import NewEcosystem from '../components/NewEcosystem'
import NewFinale from '../components/NewFinale'
import NewFooter from '../components/NewFooter'
import MobileStickyCTA from '../components/MobileStickyCTA'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-brand-white dark:bg-brand-charcoal text-brand-charcoal dark:text-brand-white antialiased overflow-x-hidden">
      {/* Elegant Header Navigation */}
      <NewHeader />

      <main className="relative">
        {/* SECTION 1: Fullscreen Video Hero */}
        <NewHero />

        {/* SECTION 2: 3D Pouch Reveal & Color Picker */}
        <NewProductReveal />

        {/* SECTION 4: Fullscreen Feature Storytelling */}
        <NewFeatureStorytelling />

        {/* SECTION 5: Interactive Comparison Experience */}
        <NewComparison />

        {/* SECTION 6: Immersive Lifestyle Experience */}
        <NewLifestyle />

        {/* SECTION 7: Editorial Brand Story */}
        <NewBrandStory />

        {/* SECTION 8: Luxury Reviews Carousel */}
        <NewReviews />

        {/* SECTION 9: Horizontal Scrolling Product Ecosystem */}
        <NewEcosystem />

        {/* SECTION 10: Emotional Finale Video & CTA */}
        <NewFinale />
      </main>

      {/* Minimal Luxury Footer */}
      <NewFooter />

      {/* Mobile-first Floating Sticky CTA */}
      <MobileStickyCTA />
    </div>
  )
}
