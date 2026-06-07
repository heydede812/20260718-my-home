'use client'

import { CartProvider } from '../context/CartContext'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Philosophy from '../components/Philosophy'
import FeaturedCollection from '../components/FeaturedCollection'
import SignatureProduct from '../components/SignatureProduct'
import LifestyleGallery from '../components/LifestyleGallery'
import Reviews from '../components/Reviews'
import BrandStory from '../components/BrandStory'
import Newsletter from '../components/Newsletter'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import StickyCart from '../components/StickyCart'
import ExitIntentPopup from '../components/ExitIntentPopup'

export default function Home() {
  return (
    <CartProvider>
      <Header />
      <main className="relative overflow-hidden bg-brand-ivory">
        <Hero />
        <Philosophy />
        <FeaturedCollection />
        <SignatureProduct />
        <LifestyleGallery />
        <Reviews />
        <BrandStory />
        <Newsletter />
        <CTA />
      </main>
      <Footer />
      <StickyCart />
      <ExitIntentPopup />
    </CartProvider>
  )
}
