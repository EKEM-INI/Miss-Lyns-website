import React from 'react';
import { Flame, ShoppingBag, Phone, ArrowRight, Sparkles, Clock } from 'lucide-react';

export default function Hero({ openOrderingModal, setCurrentView }) {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-black pt-8 pb-16 lg:py-20">
      
      {/* Background Decorative Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-gradient-to-tr from-red-950/30 to-amber-950/20 rounded-full blur-[140px] -z-10"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-950/20 rounded-full blur-[100px] -z-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Bold Copy & Action Buttons */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-8">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/60 border border-red-800 text-[#ff481f] text-xs sm:text-sm font-bold tracking-wider uppercase shadow-sm">
              <Flame className="w-4 h-4 text-[#ff481f] animate-bounce" />
              <span>Authentic Jamaican & Caribbean Heat</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#d97706]"></span>
              <span className="text-[#d97706] font-extrabold">Hamilton, ON</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-heading text-5xl sm:text-7xl xl:text-8xl font-extrabold tracking-tight text-white leading-[1.0] uppercase">
                BUILD YOUR <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e02e07] via-[#d97706] to-[#b45309]">
                  COMBO
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-neutral-300 max-w-2xl font-normal leading-relaxed pt-2">
                Hamilton’s favorite destination for deep-marinated Jamaican jerk chicken, crispy jumbo wings tossed in signature sauces, and authentic Caribbean comfort feast combos.
              </p>
            </div>

            {/* Three Primary CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              
              {/* ORDER PICKUP */}
              <button
                onClick={() => openOrderingModal('pickup')}
                className="px-7 py-4 rounded-2xl font-heading text-xl font-bold uppercase tracking-wider bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group"
              >
                <Phone className="w-5 h-5 text-yellow-400 group-hover:rotate-12 transition-transform" />
                <span>ORDER PICKUP</span>
              </button>

              {/* ORDER DELIVERY */}
              <button
                onClick={() => openOrderingModal('delivery')}
                className="px-8 py-4 rounded-2xl font-heading text-xl font-extrabold uppercase tracking-wider bg-gradient-to-r from-[#e02e07] via-[#e52516] to-[#d92212] hover:from-[#f03525] hover:to-[#ff481f] text-white shadow-xl shadow-[#e52516]/25 transition-all hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-5 h-5 text-white" />
                <span>ORDER DELIVERY</span>
              </button>

              {/* VIEW MENU */}
              <button
                onClick={() => setCurrentView('menu')}
                className="px-6 py-4 rounded-2xl font-heading text-xl font-bold uppercase tracking-wider text-neutral-200 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 transition-all flex items-center justify-center gap-2"
              >
                <span>VIEW MENU</span>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-1 transition-transform" />
              </button>

            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-neutral-800 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-red-950/60 border border-red-900 flex items-center justify-center shrink-0">
                  <Flame className="w-4 h-4 text-[#e02e07]" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white leading-tight">Fresh Chicken</div>
                  <div className="text-[10px] sm:text-xs text-neutral-400">Never pre-cooked</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-amber-950/60 border border-amber-900 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 text-[#d97706]" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white leading-tight">Authentic Jerk</div>
                  <div className="text-[10px] sm:text-xs text-neutral-400">House recipe</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-emerald-950/60 border border-emerald-900 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-[#059669]" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white leading-tight">Hot & Fast</div>
                  <div className="text-[10px] sm:text-xs text-neutral-400">Pickup & delivery</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: The Small Combo Picture Card in the Corner */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Glow Behind Dish */}
              <div className="absolute inset-4 bg-gradient-to-br from-red-900/30 to-amber-900/20 rounded-3xl blur-2xl -z-10"></div>

              {/* Main Visual Card */}
              <div className="relative rounded-3xl bg-neutral-900 border-2 border-neutral-800 p-3 sm:p-4 shadow-2xl overflow-hidden group">
                
                {/* Ribbon Tag */}
                <div className="absolute top-4 left-4 z-20">
                  <div className="px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-extrabold uppercase tracking-wider flex items-center gap-1.5 bg-[#e02e07] text-white shadow-md">
                    <Flame className="w-4 h-4 text-yellow-300" />
                    <span>CHEF’S SIGNATURE</span>
                  </div>
                </div>

                {/* Combo Image with 100% Fit in Corner */}
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 p-1 flex items-center justify-center">
                  <img
                    src="/images/dishes/hero-combo.jpg"
                    alt="Miss Lyn's Custom Combo Platter"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    fetchPriority="high"
                  />
                </div>

                {/* Bottom Card Info */}
                <div className="mt-3 px-2 py-1 flex items-center justify-between text-left">
                  <div>
                    <h3 className="font-heading text-xl sm:text-2xl font-black text-white leading-tight">
                      FRESH COMBO PLATTER
                    </h3>
                    <p className="text-xs text-neutral-400">
                      Crispy Wings, Jerk Chicken & Sides
                    </p>
                  </div>
                  <span className="font-heading text-sm font-black text-[#ff481f] px-2.5 py-1 rounded-lg bg-red-950/60 border border-red-900">
                    HOT & FRESH
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
