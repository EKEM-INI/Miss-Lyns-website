import React, { useState } from 'react';
import { Users, Sparkles, Check, Flame, ShoppingBag } from 'lucide-react';

export default function FamilyFeast({ openOrderingModal, addToCart }) {
  const [selectedProteins, setSelectedProteins] = useState(["Wings", "Jerk Chicken"]);
  const [selectedSides, setSelectedSides] = useState(["Crispy Fries", "Veggie and Dip", "Toasted Garlic Bread"]);
  const [selectedDrinks, setSelectedDrinks] = useState(["Pop (Can)", "Ting Sparkling Grapefruit", "Bigga Pineapple", "D&G Cream Soda"]);

  const handleOrderFeast = () => {
    const feastItem = {
      id: `family-feast-${Date.now()}`,
      name: "Family Feast Promotional Bundle",
      price: 49.99,
      priceDisplay: "$49.99",
      image: "/images/dishes/0053.jpg",
      details: {
        proteins: selectedProteins,
        sides: selectedSides,
        drinks: selectedDrinks
      }
    };
    if (addToCart) {
      addToCart(feastItem);
    }
    openOrderingModal('all', feastItem);
  };

  return (
    <section id="family-feast" className="relative py-16 lg:py-24 bg-[#fffaf5] overflow-hidden border-y border-orange-100">
      
      {/* Background Graphic Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-orange-200/40"></div>
        <div className="absolute top-1/2 left-0 right-0 h-px bg-orange-200/40"></div>
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-red-100/40 rounded-full blur-[140px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 border border-red-200 text-[#e02e07] text-xs sm:text-sm font-black uppercase tracking-widest shadow-sm">
            <Sparkles className="w-4 h-4 text-[#d97706]" />
            <span>TOP VALUE PROMOTION</span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-gray-900 leading-none">
              THE FAMILY <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e02e07] via-[#d97706] to-[#b45309]">FEAST</span>
            </h2>
          </div>

          <p className="text-base sm:text-lg text-gray-600">
            Feed the entire family with Hamilton’s most generous Caribbean bundle. 
            <span className="font-bold text-gray-900"> Proteins + 3 Comfort Sides + 4 Cold Drinks</span> made fresh to order!
          </p>
        </div>

        {/* The Dominant Feast Showcase Card */}
        <div className="relative rounded-3xl bg-white border-2 border-orange-300 p-5 sm:p-8 lg:p-10 shadow-2xl shadow-orange-900/10">
          
          {/* Prominent Angled Ribbon Price Tag */}
          <div className="absolute -top-4 right-4 sm:right-8 z-30">
            <div className="ribbon-badge px-6 sm:px-8 py-3 rounded-lg text-center shadow-xl transform rotate-2 hover:rotate-0 transition-transform">
              <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-yellow-200 leading-none">
                COMPLETE BUNDLE
              </div>
              <div className="font-heading text-3xl sm:text-5xl font-black text-white leading-none pt-1">
                $49.99
                <span className="text-xs sm:text-sm font-sans font-bold text-gray-100 ml-1">+tax</span>
              </div>
            </div>
          </div>

          {/* Numbered Bundle Breakdown Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8 pt-4">
            
            {/* Step 1: Proteins */}
            <div className="relative rounded-2xl bg-orange-50/50 border border-orange-200/80 p-5 flex flex-col justify-between group hover:border-[#e02e07] transition-all">
              <div>
                {/* Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-full bg-[#e52516] text-white font-heading text-xl font-black flex items-center justify-center shadow-md">
                    1
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-[#b45309] px-2.5 py-1 rounded-md bg-amber-100 border border-amber-200">
                    SIGNATURE PROTEINS
                  </span>
                </div>

                {/* Protein Platter Photography */}
                <div className="relative aspect-4/3 rounded-xl overflow-hidden mb-4 bg-gray-100 shadow-sm">
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

                <h3 className="font-heading text-2xl font-bold text-gray-900 uppercase mb-2">
                  CHOOSE PROTEINS
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Mix and match juicy signature wings and authentic slow-marinated Jamaican jerk chicken.
                </p>
              </div>

              {/* Selected List */}
              <div className="mt-4 pt-3 border-t border-orange-200/60 space-y-1.5 text-xs font-bold text-gray-700">
                <div className="flex items-center gap-1.5 text-[#b45309]">
                  <Check className="w-3.5 h-3.5 text-[#059669]" />
                  <span>Jumbo Signature Wings (1 lb)</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#b45309]">
                  <Check className="w-3.5 h-3.5 text-[#059669]" />
                  <span>Authentic Jerk Chicken</span>
                </div>
              </div>
            </div>

            {/* Step 2: 3 Sides */}
            <div className="relative rounded-2xl bg-orange-50/50 border border-orange-200/80 p-5 flex flex-col justify-between group hover:border-[#d97706] transition-all">
              <div>
                {/* Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-full bg-[#f59e0b] text-white font-heading text-xl font-black flex items-center justify-center shadow-md">
                    2
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-[#b45309] px-2.5 py-1 rounded-md bg-amber-100 border border-amber-200">
                    3 SIDES
                  </span>
                </div>

                {/* Side Platter Photography */}
                <div className="relative aspect-4/3 rounded-xl overflow-hidden mb-4 bg-gray-100 shadow-sm">
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

                <h3 className="font-heading text-2xl font-bold text-gray-900 uppercase mb-2">
                  CHOOSE 3 SIDES
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Choose from crispy french fries, toasted garlic bread, or crunchy veggies and dip.
                </p>
              </div>

              {/* Selected List */}
              <div className="mt-4 pt-3 border-t border-orange-200/60 space-y-1.5 text-xs font-bold text-gray-700">
                <div className="flex items-center gap-1.5 text-[#b45309]">
                  <Check className="w-3.5 h-3.5 text-[#059669]" />
                  <span>Crispy French Fries</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#b45309]">
                  <Check className="w-3.5 h-3.5 text-[#059669]" />
                  <span>Fresh Veggie and Dip</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#b45309]">
                  <Check className="w-3.5 h-3.5 text-[#059669]" />
                  <span>Toasted Garlic Bread</span>
                </div>
              </div>
            </div>

            {/* Step 3: 4 Drinks */}
            <div className="relative rounded-2xl bg-orange-50/50 border border-orange-200/80 p-5 flex flex-col justify-between group hover:border-[#059669] transition-all">
              <div>
                {/* Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-full bg-[#10b981] text-white font-heading text-xl font-black flex items-center justify-center shadow-md">
                    3
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-[#059669] px-2.5 py-1 rounded-md bg-emerald-100 border border-emerald-200">
                    4 DRINKS
                  </span>
                </div>

                {/* Drinks Photography */}
                <div className="relative aspect-4/3 rounded-xl overflow-hidden mb-4 bg-gray-100 shadow-sm">
                  <img
                    src="/images/dishes/drinks.png"
                    alt="Chilled Island Drinks, Bigga, Cran Wata and Sodas"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2 text-left">
                    <span className="text-xs font-bold text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                      Ting • Bigga • D&G • Soft Drinks
                    </span>
                  </div>
                </div>

                <h3 className="font-heading text-2xl font-bold text-gray-900 uppercase mb-2">
                  CHOOSE 4 DRINKS
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Quench your thirst with ice-cold Jamaican Island sodas (Ting, Bigga, D&G) or standard canned sodas.
                </p>
              </div>

              {/* Selected List */}
              <div className="mt-4 pt-3 border-t border-orange-200/60 space-y-1.5 text-xs font-bold text-gray-700">
                <div className="flex items-center gap-1.5 text-[#059669]">
                  <Check className="w-3.5 h-3.5 text-[#059669]" />
                  <span>4 Chilled Cans or Island Sodas</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-500">
                  <Check className="w-3.5 h-3.5 text-[#059669]" />
                  <span>Served cold with cups upon request</span>
                </div>
              </div>
            </div>

          </div>

          {/* Big Action Bar */}
          <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
            <div className="space-y-1">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="font-heading text-2xl font-bold text-gray-900 uppercase">
                  READY TO FEED THE WHOLE CREW?
                </span>
                <span className="hidden md:inline-block text-xs font-bold text-[#b45309] px-2.5 py-0.5 bg-amber-100 rounded border border-amber-200">
                  FEEDS 4–6 PEOPLE
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-500">
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
