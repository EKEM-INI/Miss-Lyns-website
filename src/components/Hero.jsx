import React from 'react';
import { Flame, ShoppingBag, Phone, ArrowRight, Sparkles, Clock } from 'lucide-react';

export default function Hero({ openOrderingModal, setCurrentView }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/50 via-white to-white pt-6 pb-14 lg:py-16">
      
      {/* Background Decorative Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-gradient-to-tr from-red-100/40 to-amber-100/40 rounded-full blur-[140px] -z-10"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-100/30 rounded-full blur-[100px] -z-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 space-y-8">
        
        {/* MINI COVER PHOTO BANNER (Light Theme & Complete Food Visibility) */}
        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl border-2 border-orange-200 bg-gradient-to-br from-amber-50 via-orange-50/60 to-white p-3 sm:p-4 transition-all">
          
          {/* Inner Image Container (All 4 Plates Fit Completely) */}
          <div className="relative w-full rounded-2xl overflow-hidden bg-white border border-orange-100 shadow-sm flex items-center justify-center">
            
            {/* Top Badge Overlay */}
            <div className="absolute top-3 left-3 z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-orange-200 text-[#e02e07] text-[11px] sm:text-xs font-black uppercase tracking-wider shadow-sm">
                <Flame className="w-3.5 h-3.5 text-[#e02e07]" />
                <span>Chef’s Signature Combo Platter</span>
              </span>
            </div>

            <div className="absolute top-3 right-3 z-10">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#e02e07] text-white text-[11px] sm:text-xs font-extrabold uppercase tracking-wider shadow">
                Fresh & Made To Order
              </span>
            </div>

            {/* 100% Fit Food Photography (No Cropping) */}
            <img
              src="/images/dishes/hero-combo.jpg"
              alt="Miss Lyn's Authentic Caribbean Combo Platter"
              className="w-full h-auto max-h-[440px] object-contain block mx-auto hover:scale-[1.02] transition-transform duration-500"
              fetchPriority="high"
            />
          </div>

          {/* Bottom Banner Caption in Warm Website Color Theme */}
          <div className="mt-3 px-3 py-2.5 rounded-xl bg-white border border-orange-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-left">
            <div>
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#d97706] block">
                ★ AUTHENTIC CARIBBEAN COMBO FEAST
              </span>
              <h3 className="font-heading text-base sm:text-xl font-black text-gray-900 leading-tight">
                Crispy Jumbo Wings • Saucy Jerk Chicken • Golden Onion Rings
              </h3>
            </div>
            <span className="self-start sm:self-auto text-[11px] font-bold text-[#059669] bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200 shrink-0">
              📍 677 King St East, Hamilton
            </span>
          </div>

        </div>

        {/* Hero Copy & CTA Section */}
        <div className="max-w-4xl mx-auto text-center space-y-6 pt-2">
          
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#e02e07] text-xs sm:text-sm font-bold tracking-wider uppercase shadow-sm">
            <Flame className="w-4 h-4 text-[#e02e07] animate-bounce" />
            <span>Authentic Jamaican & Caribbean Heat</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#d97706]"></span>
            <span className="text-[#d97706] font-extrabold">Hamilton, ON</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <h1 className="font-heading text-5xl sm:text-7xl xl:text-8xl font-extrabold tracking-tight text-gray-900 leading-[1.0] uppercase">
              BUILD YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e02e07] via-[#d97706] to-[#b45309]">
                COMBO
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed pt-2">
              Hamilton’s favorite destination for deep-marinated Jamaican jerk chicken, crispy jumbo wings tossed in signature sauces, and authentic Caribbean comfort feast combos.
            </p>
          </div>

          {/* Three Primary CTA Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-2 max-w-xl mx-auto">
            
            {/* ORDER PICKUP */}
            <button
              onClick={() => openOrderingModal('pickup')}
              className="flex-1 px-7 py-4 rounded-2xl font-heading text-xl font-bold uppercase tracking-wider bg-gray-900 hover:bg-black text-white shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group"
            >
              <Phone className="w-5 h-5 text-yellow-400 group-hover:rotate-12 transition-transform" />
              <span>ORDER PICKUP</span>
            </button>

            {/* ORDER DELIVERY */}
            <button
              onClick={() => openOrderingModal('delivery')}
              className="flex-1 px-8 py-4 rounded-2xl font-heading text-xl font-extrabold uppercase tracking-wider bg-gradient-to-r from-[#e02e07] via-[#e52516] to-[#d92212] hover:from-[#f03525] hover:to-[#ff481f] text-white shadow-xl shadow-[#e52516]/25 transition-all hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-5 h-5 text-white" />
              <span>ORDER DELIVERY</span>
            </button>

            {/* VIEW MENU */}
            <button
              onClick={() => setCurrentView('menu')}
              className="px-6 py-4 rounded-2xl font-heading text-xl font-bold uppercase tracking-wider text-gray-800 hover:text-black bg-gray-100 hover:bg-gray-200 border border-gray-300 transition-all flex items-center justify-center gap-2"
            >
              <span>VIEW MENU</span>
              <ArrowRight className="w-4 h-4 text-gray-500 group-hover:translate-x-1 transition-transform" />
            </button>

          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-gray-200 max-w-2xl mx-auto text-left">
            <div className="flex items-center gap-2.5 justify-center">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-red-100/70 border border-red-200 flex items-center justify-center shrink-0">
                <Flame className="w-4 h-4 text-[#e02e07]" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">Fresh Chicken</div>
                <div className="text-[10px] sm:text-xs text-gray-500">Never pre-cooked</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 justify-center">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-amber-100/70 border border-amber-200 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-[#d97706]" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">Authentic Jerk</div>
                <div className="text-[10px] sm:text-xs text-gray-500">House recipe</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 justify-center">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-emerald-100/70 border border-emerald-200 flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4 text-[#059669]" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">Hot & Fast</div>
                <div className="text-[10px] sm:text-xs text-gray-500">Pickup & delivery</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
