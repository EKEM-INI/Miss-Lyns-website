import React, { useState } from 'react';
import { Check, Flame, Sparkles, ArrowRight, ShoppingBag, Layers, RefreshCw } from 'lucide-react';
import { comboProteins, comboSides, comboDrinks } from '../data/comboOptions';

export default function ComboBuilder({ openOrderingModal, addToCart }) {
  // State for active selections
  const [selectedProtein, setSelectedProtein] = useState(comboProteins[0]); // default: Wings
  const [selectedSide, setSelectedSide] = useState(comboSides.standard[0]); // default: Fries
  const [selectedDrink, setSelectedDrink] = useState(comboDrinks.standard[0]); // default: Pop
  const [activeStep, setActiveStep] = useState(1);

  // Helper to calculate total price estimate for checkout area
  const basePrice = 15.50;
  const isPremiumSide = selectedSide.type === 'premium';
  const isPremiumDrink = selectedDrink.type === 'premium';
  const sideUpgradeCost = isPremiumSide ? 3.00 : 0;
  const drinkUpgradeCost = isPremiumDrink ? 1.50 : 0;
  const totalComboPrice = (basePrice + sideUpgradeCost + drinkUpgradeCost).toFixed(2);

  const handleAddComboToOrder = () => {
    const comboItem = {
      id: `custom-combo-${Date.now()}`,
      name: `Custom Combo (${selectedProtein.name} + ${selectedSide.name} + ${selectedDrink.name})`,
      price: parseFloat(totalComboPrice),
      priceDisplay: `$${totalComboPrice}`,
      image: selectedProtein.image,
      details: {
        protein: selectedProtein.name,
        side: `${selectedSide.name} ${isPremiumSide ? '(Premium Upgrade)' : ''}`,
        drink: `${selectedDrink.name} ${isPremiumDrink ? '(Island Soda Upgrade)' : ''}`
      }
    };
    if (addToCart) {
      addToCart(comboItem);
    }
    openOrderingModal('all', comboItem);
  };

  return (
    <section id="combo-builder" className="py-16 lg:py-24 bg-[#0d0f14] relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#ff481f]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#f59e0b]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff481f]/15 border border-[#ff481f]/30 text-[#ff481f] text-xs sm:text-sm font-bold tracking-widest uppercase">
            <Layers className="w-4 h-4 text-[#fbbf24]" />
            <span>INTERACTIVE FOOD CONFIGURATOR</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none">
            BUILD YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff481f] via-[#f59e0b] to-[#fbbf24]">COMBO</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-300">
            Create your custom meal in 3 simple steps. Pick your protein, choose your favorite side, and grab a cold drink.
          </p>
        </div>

        {/* 8. LIVE COMBO PREVIEW TRAY (Prominently displayed) */}
        <div className="mb-14 rounded-3xl bg-gradient-to-b from-[#181c26] to-[#12141c] border-2 border-[#ff481f]/40 p-5 sm:p-7 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <span className="text-xl">✨</span>
              <div>
                <h3 className="font-heading text-2xl font-bold uppercase text-white tracking-wide leading-none">
                  LIVE COMBO PREVIEW
                </h3>
                <p className="text-xs text-gray-400">Updates in real-time with your selections</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <span className="text-[11px] uppercase tracking-wider text-gray-400 font-bold block">Combo Total</span>
                <span className="font-heading text-3xl font-black text-[#fbbf24] leading-none">${totalComboPrice}</span>
              </div>
              <button
                onClick={handleAddComboToOrder}
                className="px-5 py-3 rounded-xl font-heading text-lg font-bold uppercase tracking-wider bg-gradient-to-r from-[#ff481f] to-[#e52516] hover:from-[#ff5e36] hover:to-[#f03525] text-white shadow-lg shadow-[#ff481f]/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>ORDER THIS COMBO</span>
              </button>
            </div>
          </div>

          {/* 3 Tray Preview Cards (Protein + Side + Drink) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
            
            {/* Live Protein Slot */}
            <div className="relative rounded-2xl bg-[#0d0f14] border-2 border-[#ff481f]/50 p-4 flex items-center gap-4 transition-all duration-300">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-black/60 shrink-0 border border-white/10">
                <img
                  src={selectedProtein.image}
                  alt={selectedProtein.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#ff481f] block">
                  STEP 1 • PROTEIN
                </span>
                <h4 className="font-heading text-xl sm:text-2xl font-black text-white leading-tight">
                  {selectedProtein.name}
                </h4>
                <p className="text-xs text-gray-400 line-clamp-1">{selectedProtein.tagline}</p>
              </div>
              <div className="absolute top-2 right-2">
                <span className="w-5 h-5 rounded-full bg-[#ff481f] text-white text-[10px] font-bold flex items-center justify-center">✓</span>
              </div>
            </div>

            {/* Live Side Slot */}
            <div className="relative rounded-2xl bg-[#0d0f14] border-2 border-[#f59e0b]/50 p-4 flex items-center gap-4 transition-all duration-300">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-black/60 shrink-0 border border-white/10">
                <img
                  src={selectedSide.image}
                  alt={selectedSide.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#fbbf24] block">
                  STEP 2 • SIDE
                </span>
                <h4 className="font-heading text-xl sm:text-2xl font-black text-white leading-tight">
                  {selectedSide.name}
                </h4>
                {isPremiumSide ? (
                  <span className="inline-block text-[10px] font-bold text-[#fbbf24] bg-[#fbbf24]/10 px-1.5 py-0.5 rounded border border-[#fbbf24]/20">
                    Premium Upgrade
                  </span>
                ) : (
                  <span className="text-xs text-gray-400">Standard Side</span>
                )}
              </div>
              <div className="absolute top-2 right-2">
                <span className="w-5 h-5 rounded-full bg-[#f59e0b] text-black text-[10px] font-bold flex items-center justify-center">✓</span>
              </div>
            </div>

            {/* Live Drink Slot */}
            <div className="relative rounded-2xl bg-[#0d0f14] border-2 border-[#10b981]/50 p-4 flex items-center gap-4 transition-all duration-300">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-black/60 shrink-0 border border-white/10">
                <img
                  src={selectedDrink.image}
                  alt={selectedDrink.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#10b981] block">
                  STEP 3 • DRINK
                </span>
                <h4 className="font-heading text-xl sm:text-2xl font-black text-white leading-tight">
                  {selectedDrink.name}
                </h4>
                {isPremiumDrink ? (
                  <span className="inline-block text-[10px] font-bold text-[#10b981] bg-[#10b981]/10 px-1.5 py-0.5 rounded border border-[#10b981]/20">
                    Island Soda Upgrade
                  </span>
                ) : (
                  <span className="text-xs text-gray-400">Standard Soft Drink</span>
                )}
              </div>
              <div className="absolute top-2 right-2">
                <span className="w-5 h-5 rounded-full bg-[#10b981] text-white text-[10px] font-bold flex items-center justify-center">✓</span>
              </div>
            </div>

          </div>
        </div>

        {/* 3-STEP SELECTION INTERFACE */}
        <div className="space-y-12">
          
          {/* ================= STEP 1 — CHOOSE YOUR PROTEIN ================= */}
          <div className="space-y-5">
            <div className="flex items-center gap-3 border-b border-white/10 pb-3">
              <div className="w-8 h-8 rounded-full bg-[#ff481f] text-white font-heading text-lg font-bold flex items-center justify-center">
                1
              </div>
              <div>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-wide leading-none">
                  STEP 1 — CHOOSE YOUR PROTEIN
                </h3>
                <p className="text-xs text-gray-400">Select one core protein for your combo</p>
              </div>
            </div>

            {/* Protein Cards Grid (NO PRICES INSIDE CARDS) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {comboProteins.map((protein) => {
                const isSelected = selectedProtein.id === protein.id;
                return (
                  <button
                    key={protein.id}
                    onClick={() => setSelectedProtein(protein)}
                    className={`relative text-left rounded-2xl p-4 transition-all duration-300 group flex flex-col justify-between ${
                      isSelected
                        ? 'bg-[#1e2330] border-2 border-[#ff481f] shadow-xl shadow-[#ff481f]/20 scale-[1.02]'
                        : 'bg-[#141720] border border-white/10 hover:border-white/25 hover:bg-[#181c26]'
                    }`}
                  >
                    {/* Active Selected Checkmark */}
                    {isSelected && (
                      <div className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-[#ff481f] text-white flex items-center justify-center shadow-md">
                        <Check className="w-4 h-4" />
                      </div>
                    )}

                    {/* Badge */}
                    <div className="mb-3">
                      <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded ${
                        isSelected ? 'bg-[#ff481f] text-white' : 'bg-white/10 text-gray-300'
                      }`}>
                        {protein.badge}
                      </span>
                    </div>

                    {/* Food Photograph */}
                    <div className="aspect-4/3 rounded-xl overflow-hidden mb-3 bg-black/40 relative">
                      <img
                        src={protein.image}
                        alt={protein.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    {/* Food Name & Tagline (NO PRICE) */}
                    <div>
                      <h4 className={`font-heading text-2xl font-black uppercase leading-tight ${
                        isSelected ? 'text-[#ff481f]' : 'text-white'
                      }`}>
                        {protein.name}
                      </h4>
                      <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                        {protein.description}
                      </p>
                    </div>

                    {/* Selection Indicator Bar */}
                    <div className={`mt-4 w-full py-2 rounded-xl text-center text-xs font-bold uppercase tracking-wider transition-all ${
                      isSelected 
                        ? 'bg-[#ff481f] text-white' 
                        : 'bg-white/5 text-gray-400 group-hover:bg-white/10 group-hover:text-white'
                    }`}>
                      {isSelected ? '✓ SELECTED PROTEIN' : 'SELECT THIS PROTEIN'}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>


          {/* ================= STEP 2 — CHOOSE YOUR SIDE ================= */}
          <div className="space-y-5 pt-4">
            <div className="flex items-center gap-3 border-b border-white/10 pb-3">
              <div className="w-8 h-8 rounded-full bg-[#f59e0b] text-black font-heading text-lg font-bold flex items-center justify-center">
                2
              </div>
              <div>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-wide leading-none">
                  STEP 2 — CHOOSE YOUR SIDE
                </h3>
                <p className="text-xs text-gray-400">Choose a standard side or upgrade to a premium favorite</p>
              </div>
            </div>

            {/* Standard Sides Section */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-black uppercase tracking-widest text-gray-300">
                  STANDARD SIDES (Included)
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {comboSides.standard.map((side) => {
                  const isSelected = selectedSide.id === side.id;
                  return (
                    <button
                      key={side.id}
                      onClick={() => setSelectedSide(side)}
                      className={`relative text-left rounded-xl p-3 transition-all duration-200 group flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#1e2330] border-2 border-[#f59e0b] shadow-lg shadow-[#f59e0b]/20 scale-[1.02]'
                          : 'bg-[#141720] border border-white/10 hover:border-white/20 hover:bg-[#181c26]'
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute top-2 right-2 z-10 w-5 h-5 rounded-full bg-[#f59e0b] text-black flex items-center justify-center font-bold text-xs">
                          ✓
                        </div>
                      )}

                      <div className="aspect-square rounded-lg overflow-hidden mb-2 bg-black/40">
                        <img
                          src={side.image}
                          alt={side.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          loading="lazy"
                        />
                      </div>

                      <div>
                        <h4 className={`font-heading text-lg sm:text-xl font-bold uppercase leading-tight ${
                          isSelected ? 'text-[#fbbf24]' : 'text-white'
                        }`}>
                          {side.name}
                        </h4>
                      </div>

                      <div className={`mt-2 w-full py-1 rounded text-center text-[10px] font-bold uppercase tracking-wider ${
                        isSelected ? 'bg-[#f59e0b] text-black' : 'bg-white/5 text-gray-400'
                      }`}>
                        {isSelected ? 'SELECTED' : 'SELECT'}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Premium Upgrade Sides Section */}
            <div className="pt-3">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-black uppercase tracking-widest text-[#fbbf24] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#fbbf24]" />
                  PREMIUM UPGRADES
                </span>
                <span className="text-[10px] text-gray-400 font-semibold">(Distinguished Upgrades)</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {comboSides.premium.map((side) => {
                  const isSelected = selectedSide.id === side.id;
                  return (
                    <button
                      key={side.id}
                      onClick={() => setSelectedSide(side)}
                      className={`relative text-left rounded-xl p-3 transition-all duration-200 group flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#232018] border-2 border-[#fbbf24] shadow-lg shadow-[#fbbf24]/20 scale-[1.02]'
                          : 'bg-[#18171d] border border-[#fbbf24]/30 hover:border-[#fbbf24]/60 hover:bg-[#201e26]'
                      }`}
                    >
                      {/* Premium Upgrade Badge */}
                      <span className="absolute top-2 left-2 z-10 text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-[#fbbf24] text-black">
                        UPGRADE
                      </span>

                      {isSelected && (
                        <div className="absolute top-2 right-2 z-10 w-5 h-5 rounded-full bg-[#fbbf24] text-black flex items-center justify-center font-bold text-xs">
                          ✓
                        </div>
                      )}

                      <div className="aspect-square rounded-lg overflow-hidden mb-2 bg-black/40 mt-3">
                        <img
                          src={side.image}
                          alt={side.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          loading="lazy"
                        />
                      </div>

                      <div>
                        <h4 className={`font-heading text-lg sm:text-xl font-bold uppercase leading-tight ${
                          isSelected ? 'text-[#fbbf24]' : 'text-white'
                        }`}>
                          {side.name}
                        </h4>
                      </div>

                      <div className={`mt-2 w-full py-1 rounded text-center text-[10px] font-bold uppercase tracking-wider ${
                        isSelected ? 'bg-[#fbbf24] text-black' : 'bg-[#fbbf24]/15 text-[#fbbf24]'
                      }`}>
                        {isSelected ? 'SELECTED' : 'SELECT UPGRADE'}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>


          {/* ================= STEP 3 — CHOOSE YOUR DRINK ================= */}
          <div className="space-y-5 pt-4">
            <div className="flex items-center gap-3 border-b border-white/10 pb-3">
              <div className="w-8 h-8 rounded-full bg-[#10b981] text-white font-heading text-lg font-bold flex items-center justify-center">
                3
              </div>
              <div>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-wide leading-none">
                  STEP 3 — CHOOSE YOUR DRINK
                </h3>
                <p className="text-xs text-gray-400">Pick a cold can of pop or experience authentic Jamaican Island Sodas</p>
              </div>
            </div>

            {/* Standard Drinks */}
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-gray-300 block mb-3">
                STANDARD DRINKS (Included)
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4 max-w-xl">
                {comboDrinks.standard.map((drink) => {
                  const isSelected = selectedDrink.id === drink.id;
                  return (
                    <button
                      key={drink.id}
                      onClick={() => setSelectedDrink(drink)}
                      className={`relative text-left rounded-xl p-3 transition-all duration-200 group flex items-center gap-3 ${
                        isSelected
                          ? 'bg-[#1e2330] border-2 border-[#10b981] shadow-lg shadow-[#10b981]/20'
                          : 'bg-[#141720] border border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="w-14 h-14 rounded-lg overflow-hidden bg-black/40 shrink-0">
                        <img src={drink.image} alt={drink.name} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                      <div>
                        <h4 className={`font-heading text-lg font-bold uppercase ${isSelected ? 'text-[#10b981]' : 'text-white'}`}>
                          {drink.name}
                        </h4>
                        <p className="text-[10px] text-gray-400">Choice of canned varieties</p>
                      </div>
                      {isSelected && (
                        <div className="ml-auto w-5 h-5 rounded-full bg-[#10b981] text-white flex items-center justify-center text-xs font-bold">
                          ✓
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Island Sodas Premium Upgrades */}
            <div className="pt-2">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-black uppercase tracking-widest text-[#10b981] flex items-center gap-1.5">
                  🌴 ISLAND SODAS — PREMIUM UPGRADE
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {comboDrinks.premium.map((drink) => {
                  const isSelected = selectedDrink.id === drink.id;
                  return (
                    <button
                      key={drink.id}
                      onClick={() => setSelectedDrink(drink)}
                      className={`relative text-left rounded-xl p-3 transition-all duration-200 group flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#15231c] border-2 border-[#10b981] shadow-lg shadow-[#10b981]/20 scale-[1.02]'
                          : 'bg-[#141d18] border border-[#10b981]/30 hover:border-[#10b981]/60'
                      }`}
                    >
                      <span className="absolute top-2 left-2 z-10 text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-[#10b981] text-white">
                        ISLAND SODA
                      </span>

                      {isSelected && (
                        <div className="absolute top-2 right-2 z-10 w-5 h-5 rounded-full bg-[#10b981] text-white flex items-center justify-center font-bold text-xs">
                          ✓
                        </div>
                      )}

                      <div className="aspect-square rounded-lg overflow-hidden mb-2 bg-black/40 mt-3">
                        <img
                          src={drink.image}
                          alt={drink.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          loading="lazy"
                        />
                      </div>

                      <div>
                        <h4 className={`font-heading text-lg font-bold uppercase leading-tight ${
                          isSelected ? 'text-[#10b981]' : 'text-white'
                        }`}>
                          {drink.name}
                        </h4>
                      </div>

                      <div className={`mt-2 w-full py-1 rounded text-center text-[10px] font-bold uppercase tracking-wider ${
                        isSelected ? 'bg-[#10b981] text-white' : 'bg-[#10b981]/15 text-[#10b981]'
                      }`}>
                        {isSelected ? 'SELECTED' : 'SELECT SODAS'}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
