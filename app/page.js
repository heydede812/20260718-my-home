import Header from '../components/Header'
import Hero from '../components/Hero'
import PainPoints from '../components/PainPoints'
import Solution from '../components/Solution'
import Features from '../components/Features'
import StorageTest from '../components/StorageTest'
import Comparison from '../components/Comparison'
import Reviews from '../components/Reviews'
import Philosophy from '../components/Philosophy'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden">
        <Hero />
        <PainPoints />
        <Solution />
        <Features />
        <StorageTest />
        <Comparison />
        <Reviews />
        <Philosophy />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
