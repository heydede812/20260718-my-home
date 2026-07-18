'use client'

import { useCart } from '../context/CartContext'
import { X, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react'

export default function StickyCart() {
  const { 
    cartItems, 
    isCartOpen, 
    setIsCartOpen, 
    updateQuantity, 
    removeFromCart, 
    cartCount, 
    cartTotal,
    clearCart
  } = useCart()

  const freeShippingThreshold = 75
  const isFreeShipping = cartTotal >= freeShippingThreshold
  const amountNeeded = freeShippingThreshold - cartTotal

  const handleCheckout = async () => {
    try {
      const PortOne = await import('@portone/browser-sdk/v2');

      const paymentId = `payment-${crypto.randomUUID()}`;
      const orderName = cartItems.map(item => `${item.name} x${item.quantity}`).join(', ');

      const response = await PortOne.requestPayment({
        storeId: process.env.NEXT_PUBLIC_PORTONE_STORE_ID || 'store-3375c3db-8bb0-4d57-9d7a-cfb3b9b4b02e',
        channelKey: process.env.NEXT_PUBLIC_PORTONE_CHANNEL_KEY || 'channel-key-8302d99d-16a8-42f1-b850-705b630dc65a',
        paymentId: paymentId,
        orderName: orderName.substring(0, 100),
        totalAmount: cartTotal,
        currency: 'CURRENCY_KRW',
        payMethod: 'CARD',
        redirectUrl: `${window.location.origin}/payment-redirect`,
      });

      if (response.code != null) {
        alert(`결제 실패: ${response.message}`);
        return;
      }

      const verifyResponse = await fetch('/api/payment/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          paymentId: response.paymentId,
          totalAmount: cartTotal,
        }),
      });

      const verifyData = await verifyResponse.json();
      if (verifyData.success) {
        alert('결제가 성공적으로 완료 및 검증되었습니다!');
        clearCart();
        setIsCartOpen(false);
      } else {
        alert(`결제 검증 실패: ${verifyData.message || '결제 정보가 올바르지 않습니다.'}`);
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('결제 창을 여는 과정에서 오류가 발생했습니다.');
    }
  };

  return (
    <>
      {/* Floating Cart Bubble (visible when cart count > 0) */}
      {cartCount > 0 && !isCartOpen && (
        <button
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-8 right-8 z-40 bg-brand-black hover:bg-brand-lavender text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 border border-white/10"
          aria-label="Open cart"
        >
          <ShoppingBag size={22} />
          <span className="absolute -top-1 -right-1 bg-brand-lavender text-white font-heading font-bold text-xs w-6 h-6 rounded-full flex items-center justify-center border-2 border-white animate-bounce">
            {cartCount}
          </span>
        </button>
      )}

      {/* Cart Backdrop Overlay */}
      <div 
        onClick={() => setIsCartOpen(false)}
        className={`fixed inset-0 bg-brand-black/40 backdrop-blur-sm z-50 transition-opacity duration-500 ${
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Cart Slide-out Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white z-50 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col`}
      >
        {/* Drawer Header */}
        <div className="p-6 border-b border-neutral-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingBag className="text-brand-lavender" size={20} />
            <h3 className="font-heading font-extrabold text-lg text-brand-black">장바구니</h3>
            <span className="text-xs text-neutral-400 font-bold">({cartCount}개)</span>
          </div>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 rounded-full hover:bg-neutral-100 text-neutral-400 hover:text-brand-black transition-all"
          >
            <X size={18} />
          </button>
        </div>

        {/* Free Shipping Meter */}
        <div className="bg-brand-beige/30 p-6 border-b border-neutral-100">
          {isFreeShipping ? (
            <span className="text-xs font-bold text-brand-lavender block text-center uppercase tracking-wide">
              🎉 축하합니다! 무료 글로벌 배송 대상입니다.
            </span>
          ) : (
            <div>
              <span className="text-xs font-bold text-neutral-600 block mb-2 text-center">
                무료 배송까지 <strong className="text-brand-lavender">${amountNeeded.toFixed(2)}</strong> 남았습니다.
              </span>
              <div className="w-full bg-neutral-200 h-1.5 rounded-full overflow-hidden">
                <div 
                  className="bg-brand-lavender h-full transition-all duration-500" 
                  style={{ width: `${Math.min((cartTotal / freeShippingThreshold) * 100, 100)}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-4 text-neutral-400">
              <ShoppingBag size={48} className="opacity-30" />
              <p className="text-sm font-semibold uppercase tracking-wider">장바구니가 비어 있습니다</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="text-xs font-bold text-brand-lavender uppercase tracking-widest hover:underline"
              >
                컬렉션 쇼핑하기
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 items-center border-b border-neutral-100/50 pb-6 last:border-b-0 last:pb-0">
                <div className="w-20 h-24 bg-brand-beige/40 rounded-2xl overflow-hidden flex-shrink-0 border border-neutral-100">
                  <img src={item.imagePrimary} alt={item.name} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-1">
                  <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest block mb-1">
                    {item.category}
                  </span>
                  <h4 className="text-sm font-bold text-brand-black leading-tight mb-2">
                    {item.name}
                  </h4>
                  
                  {/* Quantity Actions */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center border border-neutral-200 rounded-full py-1 px-3 bg-neutral-50">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:text-brand-lavender transition-colors"
                      >
                        <Minus size={10} />
                      </button>
                      <span className="text-xs font-bold px-3 text-brand-black">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:text-brand-lavender transition-colors"
                      >
                        <Plus size={10} />
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-xs font-semibold text-red-400 hover:text-red-500 transition-colors uppercase tracking-wider"
                    >
                      삭제
                    </button>
                  </div>
                </div>

                <div className="text-right flex-shrink-0">
                  <span className="font-heading font-extrabold text-sm md:text-base text-brand-black block">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                  <span className="text-[10px] text-neutral-400 font-bold block mt-0.5">
                    개당 ${item.price}.00
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer Checkout Summary */}
        {cartItems.length > 0 && (
          <div className="p-6 bg-neutral-50 border-t border-neutral-100 flex flex-col gap-4">
            <div className="flex items-center justify-between text-brand-black">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">소계</span>
              <span className="font-heading font-extrabold text-xl">${cartTotal.toFixed(2)}</span>
            </div>
            
            <p className="text-[10px] text-neutral-400 font-medium">
              세금 및 배송비는 결제 단계에서 계산됩니다. 할인 코드는 다음 단계에서 적용됩니다.
            </p>

            <button
              onClick={handleCheckout}
              className="w-full bg-brand-black hover:bg-brand-lavender text-white text-xs font-bold uppercase tracking-wider py-4.5 rounded-full flex items-center justify-center gap-2 shadow-lg transition-colors duration-300 group"
            >
              안전하게 결제하기
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </>
  )
}
