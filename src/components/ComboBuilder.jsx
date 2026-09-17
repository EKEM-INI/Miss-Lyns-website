import React, { useState } from 'react';
import { Check, Sparkles, ShoppingBag, Layers, Flame } from 'lucide-react';
import { comboProteins, comboSides, comboPremiumUpgrades, comboDrinks } from '../data/comboOptions';
import { wingSauces, wingStyles } from '../data/saucesData';

export default function ComboBuilder({ openOrderingModal, addToCart }) {
  const [selectedProtein, setSelectedProtein] = useState(comboProteins[0]);
  const [selectedWingStyle, setSelectedWingStyle] = useState(wingStyles[0]);
  const [selectedWingSauce, setSelectedWingSauce] = useState(wingSauces[6]); // Honey Garlic
  const [selectedSide, setSelectedSide] = useState(comboSides.standard[0]);
  const [selectedUpgrade, setSelectedUpgrade] = useState(null); // null or one of comboPremiumUpgrades
  const selectedDrink = comboDrinks.standard[0];

  const basePrice = selectedProtein?.price || 16.85;
  const upgradeCost = selectedUpgrade ? selectedUpgrade.price : 0;
  const totalComboPrice = (basePrice + upgradeCost).toFixed(2);

  const handleAddComboToOrder = () => {
    const sideDisplay = selectedUpgrade 
      ? `${selectedSide.name} (Upgraded to ${selectedUpgrade.name} +$${upgradeCost.toFixed(2)})`
      : selectedSide.name;

    const isWing = selectedProtein.id === 'wings-half-lb';
    const proteinLabel = isWing 
      ? `${selectedProtein.name} (${selectedWingStyle.name}, ${selectedWingSauce.name})`
      : selectedProtein.name;

    const comboItem = {
      id: `custom-combo-${Date.now()}`,
      name: `Custom Combo (${proteinLabel} + ${selectedUpgrade ? selectedUpgrade.name : selectedSide.name} + ${selectedDrink.name})`,
      price: parseFloat(totalComboPrice),
      priceDisplay: `$${totalComboPrice}`,
      image: selectedProtein.image,
      details: {
        protein: proteinLabel,
        ...(isWing ? { sauce: selectedWingSauce.name, style: selectedWingStyle.name } : {}),
        side: sideDisplay,
        upgrade: selectedUpgrade ? `${selectedUpgrade.name} (+$${upgradeCost.toFixed(2)} Premium Upgrade)` : 'None (Standard Side)',
        drink: `${selectedDrink.name} (Included)`
      }
    };
    if (addToCart) {
      addToCart(comboItem);
    }
    openOrderingModal('all', comboItem);
  };

  const renderPreviewTray = (isBottom = false) => (
    <div className={`${isBottom ? 'mt-12' : 'mb-14'} rounded-3xl bg-neutral-900 border-2 border-neutral-800 p-5 sm:p-7 shadow-2xl relative overflow-hidden`}>
      
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-neutral-800">
        <div className="flex items-center gap-2.5">
          <span className="text-xl">✨</span>
          <div>
            <h3 className="font-heading text-2xl font-bold uppercase text-white tracking-wide leading-none">
              LIVE COMBO PREVIEW
            </h3>
            <p className="text-xs text-neutral-400">Updates in real-time with your selections</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-bold block">Combo Total</span>
            <span className="font-heading text-3xl font-black text-[#ff481f] leading-none">${totalComboPrice}</span>
          </div>
          <button
            onClick={handleAddComboToOrder}
            className="px-5 py-3 rounded-xl font-heading text-lg font-bold uppercase tracking-wider bg-gradient-to-r from-[#e02e07] to-[#e52516] hover:from-[#f03525] hover:to-[#ff481f] text-white shadow-md shadow-[#e02e07]/25 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>ADD COMBO TO ORDER</span>
          </button>
        </div>
      </div>

      {/* 3 Tray Preview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
        
        {/* Live Protein Slot */}
        <div className="relative rounded-2xl bg-neutral-950 border-2 border-red-900/60 p-4 flex items-center gap-4 shadow-sm transition-all duration-300">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-neutral-900 shrink-0 border border-neutral-800">
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
            <h4 className="font-heading text-xl sm:text-2xl font-bold uppercase text-white leading-tight">
              {selectedProtein.name}
            </h4>
            <p className="text-xs text-neutral-400 line-clamp-1">{selectedProtein.tagline}</p>
          </div>
        </div>

        {/* Live Side Slot */}
        <div className="relative rounded-2xl bg-neutral-950 border-2 border-amber-900/60 p-4 flex items-center gap-4 shadow-sm transition-all duration-300">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-neutral-900 shrink-0 border border-neutral-800">
            <img
              src={selectedUpgrade ? selectedUpgrade.image : selectedSide.image}
              alt={selectedUpgrade ? selectedUpgrade.name : selectedSide.name}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#d97706] block">
              STEP 2 • SIDE
            </span>
            <h4 className="font-heading text-xl sm:text-2xl font-bold uppercase text-white leading-tight">
              {selectedSide.name}
            </h4>
            {selectedUpgrade && (
              <span className="text-[10px] font-extrabold text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800 inline-block mt-0.5">
                Upgraded to {selectedUpgrade.name} (+$3.00)
              </span>
            )}
          </div>
        </div>

        {/* Live Drink & Upgrade Slot */}
        <div className={`relative rounded-2xl bg-neutral-950 border-2 p-4 flex items-center gap-4 shadow-sm transition-all duration-300 ${
          selectedUpgrade ? 'border-amber-700 bg-neutral-950' : 'border-emerald-800/80'
        }`}>
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-neutral-900 shrink-0 border border-neutral-800">
            <img
              src={selectedDrink.image}
              alt={selectedDrink.name}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#059669] block">
              STEP 3 • DRINK & UPGRADE
            </span>
            <h4 className="font-heading text-lg sm:text-xl font-bold uppercase text-white leading-tight">
              {selectedDrink.name}
            </h4>
            <div className="flex flex-wrap gap-1 mt-1">
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                Drink Included
              </span>
              {selectedUpgrade && (
                <span className="text-[10px] font-bold text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800">
                  +{selectedUpgrade.name} (+$3.00)
                </span>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );

  return (
    <section id="combo-builder" className="py-16 lg:py-24 bg-black text-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/60 border border-red-800 text-[#ff481f] text-xs sm:text-sm font-bold tracking-widest uppercase shadow-sm">
            <Layers className="w-4 h-4 text-[#d97706]" />
            <span>INTERACTIVE FOOD CONFIGURATOR</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none">
            BUILD YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e02e07] via-[#d97706] to-[#b45309]">COMBO</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-400">
            Create your custom meal in 3 simple steps. Pick your protein, choose your side, and select your drinks & premium upgrades.
          </p>
        </div>

        {/* LIVE COMBO PREVIEW TRAY (Top) */}
        {renderPreviewTray(false)}


        {/* CONFIGURATION STEPS */}
        <div className="space-y-12">
          
          {/* STEP 1: PROTEINS */}
          <div className="space-y-5">
            <div className="flex items-center gap-3 border-b border-neutral-800 pb-3">
              <div className="w-8 h-8 rounded-full bg-[#e02e07] text-white font-heading text-lg font-bold flex items-center justify-center">
                1
              </div>
              <div>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-wide leading-none">
                  STEP 1 — CHOOSE YOUR MAIN PROTEIN
                </h3>
                <p className="text-xs text-neutral-400">Pick the centerpiece of your Caribbean meal</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {comboProteins.map((protein) => {
                const isSelected = selectedProtein.id === protein.id;
                return (
                  <button
                    key={protein.id}
                    onClick={() => setSelectedProtein(protein)}
                    className={`relative text-left rounded-2xl p-4 transition-all duration-300 group flex flex-col justify-between ${
                      isSelected
                        ? 'bg-red-950/40 border-2 border-[#e02e07] shadow-lg shadow-red-950/20 scale-[1.02]'
                        : 'bg-neutral-900 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-850 shadow-sm'
                    }`}
                  >
                    {protein.badge && (
                      <span className="absolute top-3 left-3 z-10 text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-gradient-to-r from-[#e02e07] to-[#d97706] text-white shadow-sm">
                        {protein.badge}
                      </span>
                    )}

                    {isSelected && (
                      <div className="absolute top-3 right-3 z-10 w-6 h-6 rounded-full bg-[#e02e07] text-white flex items-center justify-center font-bold text-xs shadow">
                        <Check className="w-4 h-4" />
                      </div>
                    )}

                    <div className="aspect-4/3 rounded-xl overflow-hidden mb-3 bg-neutral-950 relative mt-4">
                      <img
                        src={protein.image}
                        alt={protein.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    <div>
                      <h4 className={`font-heading text-2xl font-bold uppercase ${isSelected ? 'text-[#ff481f]' : 'text-white'}`}>
                        {protein.name}
                      </h4>
                      <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                        {protein.description}
                      </p>
                    </div>

                    <div className={`mt-4 w-full py-2 rounded-xl text-center text-xs font-bold uppercase tracking-wider transition-colors ${
                      isSelected
                        ? 'bg-[#e02e07] text-white'
                        : 'bg-neutral-800 text-neutral-300 group-hover:bg-neutral-700'
                    }`}>
                      {isSelected ? 'SELECTED' : 'SELECT THIS PROTEIN'}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* If Wings are selected, show Style & Sauce Selector */}
            {selectedProtein.id === 'wings-half-lb' && (
              <div className="mt-5 p-5 rounded-2xl bg-neutral-950 border border-red-900/60 shadow-lg space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
                  <div>
                    <h4 className="font-heading text-lg font-black uppercase text-white flex items-center gap-2">
                      <span>🍗 CHOOSE WING STYLE & SAUCE</span>
                      <span className="text-xs font-normal text-[#ff481f]">({wingSauces.length} sauce flavours)</span>
                    </h4>
                    <p className="text-xs text-neutral-400">Select how your wings are prepared and tossed</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                    Included with Combo
                  </span>
                </div>

                {/* Style Toggle */}
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase text-neutral-400 shrink-0">Style:</span>
                  <div className="grid grid-cols-2 gap-2 flex-1">
                    {wingStyles.map((style) => (
                      <button
                        key={style.id}
                        type="button"
                        onClick={() => setSelectedWingStyle(style)}
                        className={`py-2 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${
                          selectedWingStyle.id === style.id
                            ? 'bg-[#e02e07] border-[#e02e07] text-white shadow'
                            : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                        }`}
                      >
                        {style.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sauce Selection Grid */}
                <div>
                  <span className="text-xs font-bold uppercase text-neutral-400 block mb-2">
                    Pick Your Sauce (Selected: <strong className="text-amber-400">{selectedWingSauce.name}</strong>):
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-h-48 overflow-y-auto pr-1">
                    {wingSauces.map((sauce) => {
                      const isChosen = selectedWingSauce.id === sauce.id;
                      return (
                        <button
                          key={sauce.id}
                          type="button"
                          onClick={() => setSelectedWingSauce(sauce)}
                          className={`p-2.5 rounded-xl text-left border transition-all flex flex-col justify-between ${
                            isChosen
                              ? 'bg-amber-950/70 border-amber-500 text-white shadow'
                              : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-1">
                            <span className={`font-heading text-sm font-bold uppercase ${isChosen ? 'text-amber-400' : 'text-white'}`}>
                              {sauce.name}
                            </span>
                            {sauce.spiceLevel > 0 && (
                              <span className="text-[9px]">{'🌶️'.repeat(sauce.spiceLevel)}</span>
                            )}
                          </div>
                          <span className="text-[10px] text-neutral-400 line-clamp-1 mt-0.5">
                            {sauce.tag}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>


          {/* STEP 2: STANDARD SIDES */}
          <div className="space-y-5 pt-4">
            <div className="flex items-center gap-3 border-b border-neutral-800 pb-3">
              <div className="w-8 h-8 rounded-full bg-[#d97706] text-white font-heading text-lg font-bold flex items-center justify-center">
                2
              </div>
              <div>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-wide leading-none">
                  STEP 2 — CHOOSE YOUR INCLUDED SIDE
                </h3>
                <p className="text-xs text-neutral-400">Included in base combo price</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {comboSides.standard.map((side) => {
                const isSelected = selectedSide.id === side.id;
                return (
                  <button
                    key={side.id}
                    onClick={() => setSelectedSide(side)}
                    className={`relative text-left rounded-2xl p-4 transition-all duration-300 group flex flex-col justify-between ${
                      isSelected
                        ? 'bg-amber-950/40 border-2 border-[#d97706] shadow-md scale-[1.02]'
                        : 'bg-neutral-900 border border-neutral-800 hover:border-neutral-700 shadow-sm'
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute top-3 right-3 z-10 w-6 h-6 rounded-full bg-[#d97706] text-white flex items-center justify-center font-bold text-xs shadow">
                        <Check className="w-4 h-4" />
                      </div>
                    )}

                    <div className="aspect-4/3 rounded-xl overflow-hidden mb-3 bg-neutral-950">
                      <img
                        src={side.image}
                        alt={side.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    <div>
                      <h4 className={`font-heading text-xl font-bold uppercase ${isSelected ? 'text-[#fbbf24]' : 'text-white'}`}>
                        {side.name}
                      </h4>
                      <p className="text-xs text-neutral-400 mt-1">
                        {side.description}
                      </p>
                    </div>

                    <div className={`mt-3 w-full py-1.5 rounded-lg text-center text-xs font-bold uppercase tracking-wider ${
                      isSelected ? 'bg-[#d97706] text-white' : 'bg-neutral-800 text-neutral-300 group-hover:bg-neutral-700'
                    }`}>
                      {isSelected ? 'SELECTED (INCLUDED)' : 'SELECT SIDE'}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>


          {/* STEP 3: DRINKS & PREMIUM UPGRADES */}
          <div className="space-y-6 pt-4">
            <div className="flex items-center gap-3 border-b border-neutral-800 pb-3">
              <div className="w-8 h-8 rounded-full bg-[#10b981] text-white font-heading text-lg font-bold flex items-center justify-center">
                3
              </div>
              <div>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-wide leading-none">
                  STEP 3 — CHOOSE YOUR DRINK & PREMIUM UPGRADE
                </h3>
                <p className="text-xs text-neutral-400">Drink is included with your combo. Upgrade your side to fries, toasted garlic bread, or onion rings!</p>
              </div>
            </div>

            {/* PART 1: THE INCLUDED DRINK SPOT (Clean Menu Style) */}
            <div className="rounded-3xl bg-neutral-900 border-2 border-emerald-800/80 p-5 sm:p-6 shadow-md text-white transition-all">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
                
                {/* Authentic Drinks Photography */}
                <div className="md:col-span-4">
                  <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 shadow-sm group">
                    <img
                      src={selectedDrink.image}
                      alt="Authentic Jamaican Island Drinks, Cran Wata and Sodas"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md bg-emerald-600 text-white shadow-sm">
                        🌴 Included with Combo
                      </span>
                    </div>
                  </div>
                </div>

                {/* Drinks Description */}
                <div className="md:col-span-8 space-y-2 text-left">
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 text-[11px] font-bold uppercase tracking-wide border border-emerald-800">
                    <Sparkles className="w-3 h-3 text-emerald-400" />
                    <span>INCLUDED BEVERAGE SPOT</span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h4 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white leading-none">
                      Cold Drinks & Island Sodas
                    </h4>
                    <span className="font-heading text-sm font-black text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-xl border border-emerald-800 w-fit">
                      ✓ Included in Base Combo
                    </span>
                  </div>

                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Your combo meal comes with your choice of any refreshing chilled canned soft drink, bottled spring water, Cran Wata, or authentic imported Jamaican Island soda (Bigga, Ting, D&G) with no extra upgrade fee.
                  </p>
                </div>

              </div>
            </div>

            {/* PART 2: PREMIUM UPGRADES */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black uppercase tracking-widest text-[#fbbf24] flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#d97706]" />
                  <span>PREMIUM SIDE UPGRADES (+$3.00)</span>
                </span>
                {selectedUpgrade && (
                  <button
                    onClick={() => setSelectedUpgrade(null)}
                    className="text-xs font-bold text-neutral-400 hover:text-red-400 underline"
                  >
                    Remove Upgrade
                  </button>
                )}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {comboPremiumUpgrades.map((upgrade) => {
                  const isSelected = selectedUpgrade?.id === upgrade.id;
                  return (
                    <button
                      key={upgrade.id}
                      onClick={() => setSelectedUpgrade(isSelected ? null : upgrade)}
                      className={`relative text-left rounded-2xl p-3.5 transition-all duration-200 group flex flex-col justify-between ${
                        isSelected
                          ? 'bg-amber-950/40 border-2 border-[#d97706] shadow-md scale-[1.02]'
                          : 'bg-neutral-900 border border-neutral-800 hover:border-neutral-700 shadow-sm'
                      }`}
                    >
                      <span className="absolute top-2 left-2 z-10 text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-[#d97706] text-white shadow-sm">
                        +$3.00
                      </span>

                      {isSelected && (
                        <div className="absolute top-2 right-2 z-10 w-5 h-5 rounded-full bg-[#d97706] text-white flex items-center justify-center font-bold text-xs shadow">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                      )}

                      <div className="aspect-square rounded-xl overflow-hidden mb-2 bg-neutral-950 mt-4">
                        <img
                          src={upgrade.image}
                          alt={upgrade.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          loading="lazy"
                        />
                      </div>

                      <div>
                        <h4 className={`font-heading text-lg font-bold uppercase leading-tight ${
                          isSelected ? 'text-[#fbbf24]' : 'text-white'
                        }`}>
                          {upgrade.name}
                        </h4>
                        <p className="text-[11px] text-neutral-400 line-clamp-2 mt-0.5">
                          {upgrade.description}
                        </p>
                      </div>

                      <div className={`mt-2 w-full py-1.5 rounded-lg text-center text-[10px] font-bold uppercase tracking-wider transition-colors ${
                        isSelected ? 'bg-[#d97706] text-white font-bold' : 'bg-neutral-800 text-neutral-300 group-hover:bg-neutral-700'
                      }`}>
                        {isSelected ? 'SELECTED (+ $3.00)' : 'UPGRADE (+ $3.00)'}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

        {/* REPEATED LIVE COMBO PREVIEW TRAY AT BOTTOM */}
        {renderPreviewTray(true)}

      </div>
    </section>
  );
}
