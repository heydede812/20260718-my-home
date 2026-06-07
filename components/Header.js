'use client'

import { useState, useEffect } from 'react'
import { useCart } from '../context/CartContext'
import { ShoppingBag, Menu, X } from 'lucide-react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { setIsCartOpen, cartCount } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: '브랜드 철학', href: '#philosophy' },
    { label: '추천 컬렉션', href: '#collection' },
    { label: '시그니처', href: '#signature' },
    { label: '라이프스타일', href: '#lifestyle' },
    { label: '고객 리뷰', href: '#reviews' },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-4 bg-white/80 backdrop-blur-md border-b border-neutral-100 shadow-sm' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          className="flex items-center transition-transform duration-300 hover:scale-[1.02]"
        >
          <span 
            className={`font-heading font-extrabold text-2xl tracking-tight transition-all duration-300 ${
              scrolled ? 'text-brand-black' : 'text-white'
            }`}
          >
            ARLLOY.
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className={`text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                scrolled 
                  ? 'text-brand-gray hover:text-brand-black' 
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4">
          {/* Cart Trigger Button */}
          <button 
            onClick={() => setIsCartOpen(true)}
            className={`relative p-2.5 rounded-full transition-all duration-300 ${
              scrolled 
                ? 'bg-neutral-100 text-brand-black hover:bg-brand-lavender hover:text-white' 
                : 'bg-white/10 text-white hover:bg-white hover:text-brand-black'
            }`}
            aria-label="Open Cart"
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand-lavender text-white font-heading font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-white animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`p-2.5 rounded-full md:hidden transition-all duration-300 ${
              scrolled 
                ? 'bg-neutral-100 text-brand-black hover:bg-neutral-200' 
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div 
        className={`fixed inset-x-0 top-[72px] bg-white border-b border-neutral-100 p-6 md:hidden shadow-lg transition-all duration-300 origin-top ${
          menuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-bold uppercase tracking-wider text-brand-black hover:text-brand-lavender transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
