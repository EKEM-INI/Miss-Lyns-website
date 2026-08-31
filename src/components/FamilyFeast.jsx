import React, { useState } from 'react';
import { Users, Sparkles, Check, Flame, ShoppingBag, Plus, Phone } from 'lucide-react';

export default function FamilyFeast({ openOrderingModal, addToCart }) {
  const [selectedProteins, setSelectedProteins] = useState(["Wings", "Jerk Chicken", "Fried Chicken"]);
  const [selectedSides, setSelectedSides] = useState(["Fries", "Coleslaw", "Mac & Cheese Pie"]);
  const [selectedDrinks, setSelectedDrinks] = useState(["Pop (Can)", "Ting Sparkling Grapefruit", "Bigga Pineapple", "D&G Cream Soda"]);
  const [customizing, setCustomizing] = useState(false);

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
    <section id="family-feast" className="relative py-16 lg:py-24 bg-[#0a0c10] overflow-hidden border-y border-white/10">
      
      {/* Background Graphic Lines inspired by reference image */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Pitch / Stadium markings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/[0.04]"></div>
        <div className="absolute top-1/2 left-0 right-0 h-px bg-white/[0.04]"></div>
        {/* Ambient glow */}
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#e52516]/15 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#f59e0b]/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Reference Ribbon Vibe */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e52516]/20 border border-[#e52516]/40 text-[#ff5e36] text-xs sm:text-sm font-black uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span>TOP VALUE PROMOTION</span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none">
              THE FAMILY <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff481f] via-[#f59e0b] to-[#fbbf24]">FEAST</span>
            </h2>
          </div>

          <p className="text-base sm:text-lg text-gray-300">
            Feed the entire family with Hamilton’s most generous Caribbean bundle. 
            <span className="font-bold text-white"> 3 Proteins + 3 Comfort Sides + 4 Cold Drinks</span> made fresh to order!
          </p>
        </div>

        {/* The Dominant Feast Showcase Card (Inspired by reference layout) */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#161a24] to-[#10131a] border-2 border-[#ff481f]/40 p-5 sm:p-8 lg:p-10 shadow-2xl shadow-black/80">
          
          {/* Prominent Angled Ribbon Price Tag */}
          <div className="absolute -top-4 right-4 sm:right-8 z-30">
            <div className="ribbon-badge px-6 sm:px-8 py-3 rounded-lg text-center shadow-2xl transform rotate-2 hover:rotate-0 transition-transform">
              <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-yellow-200 leading-none">
                COMPLETE BUNDLE
              </div>
              <div className="font-heading text-3xl sm:text-5xl font-black text-white leading-none pt-1">
                $49.99
                <span className="text-xs sm:text-sm font-sans font-bold text-gray-200 ml-1">+tax</span>
              </div>
            </div>
          </div>

          {/* Numbered Bundle Breakdown Grid (1, 2, 3 numbered badges like reference) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8 pt-4">
            
            {/* Step 1: 3 Proteins */}
            <div className="relative rounded-2xl bg-[#0e1017] border border-white/10 p-5 flex flex-col justify-between group hover:border-[#ff481f]/50 transition-all">
              <div>
                {/* Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-full bg-[#e52516] text-white font-heading text-xl font-black flex items-center justify-center shadow-lg">
                    1
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-[#fbbf24] px-2.5 py-1 rounded-md bg-[#fbbf24]/10 border border-[#fbbf24]/20">
                    3 PROTEINS
                  </span>
                </div>

                {/* Protein Platter Photography */}
                <div className="relative aspect-4/3 rounded-xl overflow-hidden mb-4 bg-black/40">
                  <img
                    src="/images/dishes/0053.jpg"
                    alt="Platter of Wings and Jerk Chicken"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2 text-left">
                    <span className="text-xs font-bold text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                      Wings • Jerk Chicken • Fried Chicken
                    </span>
                  </div>
                </div>

                <h3 className="font-heading text-2xl font-bold text-white uppercase mb-2">
                  CHOOSE 3 PROTEINS
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Mix and match juicy signature wings, authentic Jamaican jerk chicken, and golden crispy fried chicken.
                </p>
              </div>

              {/* Selected List */}
              <div className="mt-4 pt-3 border-t border-white/5 space-y-1 text-xs font-semibold text-gray-300">
                <div className="flex items-center gap-1.5 text-yellow-300">
                  <Check className="w-3.5 h-3.5 text-[#10b981]" />
                  <span>Jumbo Signature Wings (1 lb)</span>
                </div>
                <div className="flex items-center gap-1.5 text-yellow-300">
                  <Check className="w-3.5 h-3.5 text-[#10b981]" />
                  <span>Authentic Jerk Chicken</span>
                </div>
                <div className="flex items-center gap-1.5 text-yellow-300">
                  <Check className="w-3.5 h-3.5 text-[#10b981]" />
                  <span>Crispy Fried Chicken</span>
                </div>
              </div>
            </div>

            {/* Step 2: 3 Sides */}
            <div className="relative rounded-2xl bg-[#0e1017] border border-white/10 p-5 flex flex-col justify-between group hover:border-[#f59e0b]/50 transition-all">
              <div>
                {/* Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-full bg-[#f59e0b] text-black font-heading text-xl font-black flex items-center justify-center shadow-lg">
                    2
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-[#fbbf24] px-2.5 py-1 rounded-md bg-[#fbbf24]/10 border border-[#fbbf24]/20">
                    3 SIDES
                  </span>
                </div>

                {/* Side Platter Photography */}
                <div className="relative aspect-4/3 rounded-xl overflow-hidden mb-4 bg-black/40">
                  <img
                    src="/images/dishes/0021.jpg"
                    alt="Golden French Fries and Mac Pie"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2 text-left">
                    <span className="text-xs font-bold text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                      Fries • Mac Pie • Coleslaw
                    </span>
                  </div>
                </div>

                <h3 className="font-heading text-2xl font-bold text-white uppercase mb-2">
                  CHOOSE 3 SIDES
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Choose from crispy french fries, freshly baked mac & cheese pie, cool coleslaw, or macaroni salad.
                </p>
              </div>

              {/* Selected List */}
              <div className="mt-4 pt-3 border-t border-white/5 space-y-1 text-xs font-semibold text-gray-300">
                <div className="flex items-center gap-1.5 text-yellow-300">
                  <Check className="w-3.5 h-3.5 text-[#10b981]" />
                  <span>Crispy French Fries</span>
                </div>
                <div className="flex items-center gap-1.5 text-yellow-300">
                  <Check className="w-3.5 h-3.5 text-[#10b981]" />
                  <span>Fresh Caribbean Coleslaw</span>
                </div>
                <div className="flex items-center gap-1.5 text-yellow-300">
                  <Check className="w-3.5 h-3.5 text-[#10b981]" />
                  <span>Crispy Mac & Cheese Pie</span>
                </div>
              </div>
            </div>

            {/* Step 3: 4 Drinks */}
            <div className="relative rounded-2xl bg-[#0e1017] border border-white/10 p-5 flex flex-col justify-between group hover:border-[#10b981]/50 transition-all">
              <div>
                {/* Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-full bg-[#10b981] text-white font-heading text-xl font-black flex items-center justify-center shadow-lg">
                    3
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-[#10b981] px-2.5 py-1 rounded-md bg-[#10b981]/10 border border-[#10b981]/20">
                    4 DRINKS
                  </span>
                </div>

                {/* Drinks Photography */}
                <div className="relative aspect-4/3 rounded-xl overflow-hidden mb-4 bg-black/40">
                  <img
                    src="/images/dishes/0047.jpg"
                    alt="Chilled Island Drinks and Pop"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2 text-left">
                    <span className="text-xs font-bold text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                      Ting • Bigga • D&G • Soft Drinks
                    </span>
                  </div>
                </div>

                <h3 className="font-heading text-2xl font-bold text-white uppercase mb-2">
                  CHOOSE 4 DRINKS
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Quench your thirst with ice-cold Jamaican Island sodas (Ting, Bigga, D&G) or standard canned sodas.
                </p>
              </div>

              {/* Selected List */}
              <div className="mt-4 pt-3 border-t border-white/5 space-y-1 text-xs font-semibold text-gray-300">
                <div className="flex items-center gap-1.5 text-yellow-300">
                  <Check className="w-3.5 h-3.5 text-[#10b981]" />
                  <span>4 Chilled Cans or Island Sodas</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-400">
                  <Check className="w-3.5 h-3.5 text-[#10b981]" />
                  <span>Served ice-cold with cups upon request</span>
                </div>
              </div>
            </div>

          </div>

          {/* Big Action Bar — Click To Order CTA */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
            <div className="space-y-1">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="font-heading text-2xl font-bold text-white uppercase">
                  READY TO FEED THE WHOLE CREW?
                </span>
                <span className="hidden md:inline-block text-xs font-bold text-[#fbbf24] px-2 py-0.5 bg-[#fbbf24]/10 rounded border border-[#fbbf24]/30">
                  FEEDS 4–6 PEOPLE
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-400">
                Order directly for quick pickup at 677 King St East or fast delivery to your door.
              </p>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleOrderFeast}
              className="w-full sm:w-auto px-10 py-5 rounded-2xl font-heading text-2xl font-black uppercase tracking-wider bg-gradient-to-r from-[#e52516] via-[#ff481f] to-[#e52516] hover:from-[#f03525] hover:to-[#ff5e36] text-white shadow-2xl shadow-[#e52516]/50 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 animate-pulse-subtle"
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
