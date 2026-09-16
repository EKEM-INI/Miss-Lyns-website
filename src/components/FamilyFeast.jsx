import React, { useState } from 'react';
import { Users, Sparkles, Check, Flame, ShoppingBag } from 'lucide-react';

export default function FamilyFeast({ openOrderingModal, addToCart }) {
  const [selectedProteins, setSelectedProteins] = useState(["Wings", "Jerk Chicken"]);
  const [selectedSides, setSelectedSides] = useState(["Crispy French Fries", "Fresh Veggie and Dip", "Toasted Garlic Bread"]);

  const handleOrderFeast = () => {
    const feastItem = {
      id: `family-feast-${Date.now()}`,
      name: "Family Feast Promotional Bundle",
      price: 49.99,
      priceDisplay: "$49.99",
      image: "/images/dishes/0053.jpg",
      details: {
        proteins: selectedProteins,
        sides: selectedSides
      }
    };
    if (addToCart) {
      addToCart(feastItem);
    }
    openOrderingModal('all', feastItem);
  };

  return (
    <section id="family-feast" className="relative py-16 lg:py-24 bg-black text-white overflow-hidden border-y border-neutral-850">
      
      {/* Background Graphic Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-neutral-850/40"></div>
        <div className="absolute top-1/2 left-0 right-0 h-px bg-neutral-850/40"></div>
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-red-950/20 rounded-full blur-[140px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/60 border border-red-800 text-[#ff481f] text-xs sm:text-sm font-black uppercase tracking-widest shadow-sm">
            <Sparkles className="w-4 h-4 text-[#d97706]" />
            <span>TOP VALUE PROMOTION</span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none">
              THE FAMILY <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e02e07] via-[#d97706] to-[#b45309]">FEAST</span>
            </h2>
          </div>

          <p className="text-base sm:text-lg text-neutral-400">
            Feed the entire family with Hamilton’s most generous Caribbean bundle. 
            <span className="font-bold text-white"> Proteins + 3 Comfort Sides</span> made fresh to order!
          </p>
        </div>

        {/* The Dominant Feast Showcase Card (Black Theme) */}
        <div className="relative rounded-3xl bg-neutral-900 border-2 border-neutral-800 p-5 sm:p-8 lg:p-10 shadow-2xl">
          
          {/* Prominent Angled Ribbon Price Tag */}
          <div className="absolute -top-4 right-4 sm:right-8 z-30">
            <div className="ribbon-badge px-6 sm:px-8 py-3 rounded-lg text-center shadow-xl transform rotate-2 hover:rotate-0 transition-transform">
              <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-yellow-200 leading-none">
                COMPLETE BUNDLE
              </div>
              <div className="font-heading text-3xl sm:text-5xl font-black text-white leading-none pt-1">
                $49.99
                <span className="text-xs sm:text-sm font-sans font-bold text-gray-200 ml-1">+tax</span>
              </div>
            </div>
          </div>

          {/* Numbered Bundle Breakdown Grid (2 Columns: Proteins + Sides) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8 pt-4">
            
            {/* Step 1: Proteins */}
            <div className="relative rounded-2xl bg-neutral-950 border border-neutral-800 p-6 flex flex-col justify-between group hover:border-[#e02e07] transition-all">
              <div>
                {/* Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-full bg-[#e52516] text-white font-heading text-xl font-black flex items-center justify-center shadow-md">
                    1
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-amber-300 px-2.5 py-1 rounded-md bg-amber-950/80 border border-amber-800">
                    SIGNATURE PROTEINS
                  </span>
                </div>

                {/* Protein Platter Photography */}
                <div className="relative aspect-4/3 rounded-xl overflow-hidden mb-4 bg-neutral-900 shadow-sm">
                  <img
                    src="/images/dishes/0053.jpg"
                    alt="Platter of Wings and Jerk Chicken"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2 text-left">
                    <span className="text-xs font-bold text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                      Wings • Jerk Chicken
                    </span>
                  </div>
                </div>

                <h3 className="font-heading text-2xl font-bold text-white uppercase mb-2">
                  CHOOSE PROTEINS
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Mix and match juicy signature wings and authentic slow-marinated Jamaican jerk chicken.
                </p>
              </div>

              {/* Selected List */}
              <div className="mt-4 pt-3 border-t border-neutral-800 space-y-1.5 text-xs font-bold text-neutral-300">
                <div className="flex items-center gap-1.5 text-amber-300">
                  <Check className="w-3.5 h-3.5 text-[#059669]" />
                  <span>Jumbo Signature Wings (1 lb)</span>
                </div>
                <div className="flex items-center gap-1.5 text-amber-300">
                  <Check className="w-3.5 h-3.5 text-[#059669]" />
                  <span>Authentic Jerk Chicken</span>
                </div>
              </div>
            </div>

            {/* Step 2: 3 Sides */}
            <div className="relative rounded-2xl bg-neutral-950 border border-neutral-800 p-6 flex flex-col justify-between group hover:border-[#d97706] transition-all">
              <div>
                {/* Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-full bg-[#f59e0b] text-white font-heading text-xl font-black flex items-center justify-center shadow-md">
                    2
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-amber-300 px-2.5 py-1 rounded-md bg-amber-950/80 border border-amber-800">
                    3 SIDES
                  </span>
                </div>

                {/* Side Platter Photography */}
                <div className="relative aspect-4/3 rounded-xl overflow-hidden mb-4 bg-neutral-900 shadow-sm">
                  <img
                    src="/images/dishes/0021.jpg"
                    alt="Golden French Fries and Garlic Toast"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2 text-left">
                    <span className="text-xs font-bold text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                      Fries • Garlic Bread • Veggie & Dip
                    </span>
                  </div>
                </div>

                <h3 className="font-heading text-2xl font-bold text-white uppercase mb-2">
                  CHOOSE 3 SIDES
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Choose from crispy french fries, toasted garlic bread, or crunchy veggies and dip.
                </p>
              </div>

              {/* Selected List */}
              <div className="mt-4 pt-3 border-t border-neutral-800 space-y-1.5 text-xs font-bold text-neutral-300">
                <div className="flex items-center gap-1.5 text-amber-300">
                  <Check className="w-3.5 h-3.5 text-[#059669]" />
                  <span>Crispy French Fries</span>
                </div>
                <div className="flex items-center gap-1.5 text-amber-300">
                  <Check className="w-3.5 h-3.5 text-[#059669]" />
                  <span>Fresh Veggie and Dip</span>
                </div>
                <div className="flex items-center gap-1.5 text-amber-300">
                  <Check className="w-3.5 h-3.5 text-[#059669]" />
                  <span>Toasted Garlic Bread</span>
                </div>
              </div>
            </div>

          </div>

          {/* Big Action Bar */}
          <div className="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
            <div className="space-y-1">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="font-heading text-2xl font-bold text-white uppercase">
                  READY TO FEED THE WHOLE CREW?
                </span>
                <span className="hidden md:inline-block text-xs font-bold text-amber-300 px-2.5 py-0.5 bg-amber-950/80 rounded border border-amber-800">
                  FEEDS 4–6 PEOPLE
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400">
                Order directly for quick pickup at 677 King St East or fast delivery to your door.
              </p>
            </div>

            <button
              onClick={handleOrderFeast}
              className="w-full sm:w-auto px-10 py-5 rounded-2xl font-heading text-2xl font-black uppercase tracking-wider bg-gradient-to-r from-[#e52516] via-[#e02e07] to-[#e52516] hover:from-[#f03525] hover:to-[#ff481f] text-white shadow-xl shadow-[#e52516]/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 animate-pulse-subtle"
            >
              <ShoppingBag className="w-6 h-6" />
              <span>GET THE FAMILY FEAST ($49.99)</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
