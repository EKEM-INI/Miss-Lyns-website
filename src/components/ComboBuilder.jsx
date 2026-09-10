import React, { useState } from 'react';
import { Check, Sparkles, ShoppingBag, Layers, Flame } from 'lucide-react';
import { comboProteins, comboSides, comboDrinks } from '../data/comboOptions';

export default function ComboBuilder({ openOrderingModal, addToCart }) {
  const [selectedProtein, setSelectedProtein] = useState(comboProteins[0]);
  const [selectedSide, setSelectedSide] = useState(comboSides.standard[0]);
  const [selectedDrink, setSelectedDrink] = useState(comboDrinks.standard[0]);

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
        side: `${selectedSide.name} ${isPremiumSide ? '(+$3.00 Premium Upgrade)' : ''}`,
        drink: `${selectedDrink.name} ${isPremiumDrink ? '(+$1.50 Premium Island Soda Upgrade)' : '(Included)'}`
      }
    };
    if (addToCart) {
      addToCart(comboItem);
    }
    openOrderingModal('all', comboItem);
  };

  return (
    <section id="combo-builder" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#e02e07] text-xs sm:text-sm font-bold tracking-widest uppercase shadow-sm">
            <Layers className="w-4 h-4 text-[#d97706]" />
            <span>INTERACTIVE FOOD CONFIGURATOR</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-gray-900 leading-none">
            BUILD YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e02e07] via-[#d97706] to-[#b45309]">COMBO</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600">
            Create your custom meal in 3 simple steps. Pick your protein, choose your favorite side, and select your beverage.
          </p>
        </div>

        {/* LIVE COMBO PREVIEW TRAY (Light Theme) */}
        <div className="mb-14 rounded-3xl bg-gradient-to-b from-orange-50/80 to-amber-50/40 border-2 border-orange-200 p-5 sm:p-7 shadow-xl shadow-orange-900/5 relative overflow-hidden">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-orange-200">
            <div className="flex items-center gap-2.5">
              <span className="text-xl">✨</span>
              <div>
                <h3 className="font-heading text-2xl font-bold uppercase text-gray-900 tracking-wide leading-none">
                  LIVE COMBO PREVIEW
                </h3>
                <p className="text-xs text-gray-500">Updates in real-time with your selections</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <span className="text-[11px] uppercase tracking-wider text-gray-500 font-bold block">Combo Total</span>
                <span className="font-heading text-3xl font-black text-[#e02e07] leading-none">${totalComboPrice}</span>
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
            <div className="relative rounded-2xl bg-white border-2 border-red-300 p-4 flex items-center gap-4 shadow-sm transition-all duration-300">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-gray-100 shrink-0 border border-gray-200">
                <img
                  src={selectedProtein.image}
                  alt={selectedProtein.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#e02e07] block">
                  STEP 1 • PROTEIN
                </span>
                <h4 className="font-heading text-xl sm:text-2xl font-bold uppercase text-gray-900 leading-tight">
                  {selectedProtein.name}
                </h4>
                <p className="text-xs text-gray-500 line-clamp-1">{selectedProtein.tagline}</p>
              </div>
            </div>

            {/* Live Side Slot */}
            <div className={`relative rounded-2xl bg-white border-2 p-4 flex items-center gap-4 shadow-sm transition-all duration-300 ${
              isPremiumSide ? 'border-amber-400 bg-amber-50/30' : 'border-amber-300'
            }`}>
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-gray-100 shrink-0 border border-gray-200">
                <img
                  src={selectedSide.image}
                  alt={selectedSide.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#d97706] block">
                    STEP 2 • SIDE
                  </span>
                  {isPremiumSide && (
                    <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.2 rounded bg-amber-200 text-amber-900">
                      +$3.00
                    </span>
                  )}
                </div>
                <h4 className="font-heading text-xl sm:text-2xl font-bold uppercase text-gray-900 leading-tight">
                  {selectedSide.name}
                </h4>
                <p className="text-xs text-gray-500 line-clamp-1">{selectedSide.description}</p>
              </div>
            </div>

            {/* Live Drink Slot */}
            <div className={`relative rounded-2xl bg-white border-2 p-4 flex items-center gap-4 shadow-sm transition-all duration-300 ${
              isPremiumDrink ? 'border-emerald-500 bg-emerald-50/30' : 'border-emerald-300'
            }`}>
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-gray-100 shrink-0 border border-gray-200">
                <img
                  src={selectedDrink.image}
                  alt={selectedDrink.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#059669] block">
                    STEP 3 • DRINK
                  </span>
                  {isPremiumDrink ? (
                    <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.2 rounded bg-emerald-200 text-emerald-900">
                      +$1.50 Upgrade
                    </span>
                  ) : (
                    <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.2 rounded bg-gray-100 text-gray-700">
                      Included
                    </span>
                  )}
                </div>
                <h4 className="font-heading text-lg sm:text-xl font-bold uppercase text-gray-900 leading-tight">
                  {selectedDrink.name}
                </h4>
                <p className="text-xs text-gray-500 line-clamp-1">{selectedDrink.description}</p>
              </div>
            </div>

          </div>
        </div>


        {/* CONFIGURATION STEPS */}
        <div className="space-y-12">
          
          {/* STEP 1: PROTEINS */}
          <div className="space-y-5">
            <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
              <div className="w-8 h-8 rounded-full bg-[#e02e07] text-white font-heading text-lg font-bold flex items-center justify-center">
                1
              </div>
              <div>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-gray-900 uppercase tracking-wide leading-none">
                  STEP 1 — CHOOSE YOUR MAIN PROTEIN
                </h3>
                <p className="text-xs text-gray-500">Pick the centerpiece of your Caribbean meal</p>
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
                        ? 'bg-red-50/90 border-2 border-[#e02e07] shadow-lg shadow-red-900/5 scale-[1.02]'
                        : 'bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50/50 shadow-sm'
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

                    <div className="aspect-4/3 rounded-xl overflow-hidden mb-3 bg-gray-100 relative mt-4">
                      <img
                        src={protein.image}
                        alt={protein.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    <div>
                      <h4 className={`font-heading text-2xl font-bold uppercase ${isSelected ? 'text-[#e02e07]' : 'text-gray-900'}`}>
                        {protein.name}
                      </h4>
                      <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                        {protein.description}
                      </p>
                    </div>

                    <div className={`mt-4 w-full py-2 rounded-xl text-center text-xs font-bold uppercase tracking-wider transition-colors ${
                      isSelected
                        ? 'bg-[#e02e07] text-white'
                        : 'bg-gray-100 text-gray-700 group-hover:bg-gray-200'
                    }`}>
                      {isSelected ? 'SELECTED' : 'SELECT THIS PROTEIN'}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>


          {/* STEP 2: SIDES */}
          <div className="space-y-6 pt-4">
            <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
              <div className="w-8 h-8 rounded-full bg-[#d97706] text-white font-heading text-lg font-bold flex items-center justify-center">
                2
              </div>
              <div>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-gray-900 uppercase tracking-wide leading-none">
                  STEP 2 — CHOOSE YOUR SIDE
                </h3>
                <p className="text-xs text-gray-500">Pick a standard side or upgrade to premium poutine or fried mac pie</p>
              </div>
            </div>

            {/* Standard Sides */}
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-gray-700 block mb-3">
                STANDARD SIDES (Included in base combo)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {comboSides.standard.map((side) => {
                  const isSelected = selectedSide.id === side.id;
                  return (
                    <button
                      key={side.id}
                      onClick={() => setSelectedSide(side)}
                      className={`relative text-left rounded-2xl p-4 transition-all duration-300 group flex flex-col justify-between ${
                        isSelected
                          ? 'bg-amber-50/90 border-2 border-[#d97706] shadow-md scale-[1.02]'
                          : 'bg-white border border-gray-200 hover:border-gray-300 shadow-sm'
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute top-3 right-3 z-10 w-6 h-6 rounded-full bg-[#d97706] text-white flex items-center justify-center font-bold text-xs shadow">
                          <Check className="w-4 h-4" />
                        </div>
                      )}

                      <div className="aspect-4/3 rounded-xl overflow-hidden mb-3 bg-gray-100">
                        <img
                          src={side.image}
                          alt={side.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>

                      <div>
                        <h4 className={`font-heading text-xl font-bold uppercase ${isSelected ? 'text-[#d97706]' : 'text-gray-900'}`}>
                          {side.name}
                        </h4>
                        <p className="text-xs text-gray-600 mt-1">
                          {side.description}
                        </p>
                      </div>

                      <div className={`mt-3 w-full py-1.5 rounded-lg text-center text-xs font-bold uppercase tracking-wider ${
                        isSelected ? 'bg-[#d97706] text-white' : 'bg-gray-100 text-gray-700'
                      }`}>
                        {isSelected ? 'SELECTED' : 'SELECT SIDE'}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Premium Sides */}
            <div className="pt-2">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-black uppercase tracking-widest text-[#d97706] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#d97706]" />
                  PREMIUM UPGRADES (+$3.00)
                </span>
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
                          ? 'bg-amber-50 border-2 border-[#d97706] shadow-md scale-[1.02]'
                          : 'bg-amber-50/20 border border-amber-200 hover:border-amber-400 shadow-sm'
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

                      <div className="aspect-square rounded-lg overflow-hidden mb-2 bg-gray-100 mt-3">
                        <img
                          src={side.image}
                          alt={side.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          loading="lazy"
                        />
                      </div>

                      <div>
                        <h4 className={`font-heading text-lg sm:text-xl font-bold uppercase leading-tight ${
                          isSelected ? 'text-[#b45309]' : 'text-gray-900'
                        }`}>
                          {side.name}
                        </h4>
                      </div>

                      <div className={`mt-2 w-full py-1 rounded text-center text-[10px] font-bold uppercase tracking-wider ${
                        isSelected ? 'bg-[#d97706] text-white font-bold' : 'bg-amber-100 text-[#b45309]'
                      }`}>
                        {isSelected ? 'SELECTED' : 'SELECT UPGRADE'}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>


          {/* STEP 3: DRINKS WITH PREMIUM UPGRADE OPTION */}
          <div className="space-y-6 pt-4">
            <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
              <div className="w-8 h-8 rounded-full bg-[#10b981] text-white font-heading text-lg font-bold flex items-center justify-center">
                3
              </div>
              <div>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-gray-900 uppercase tracking-wide leading-none">
                  STEP 3 — CHOOSE YOUR DRINK
                </h3>
                <p className="text-xs text-gray-500">Pick standard drink (included) or upgrade to authentic Premium Jamaican Island Soda</p>
              </div>
            </div>

            {/* DRINK OPTIONS: STANDARD VS PREMIUM UPGRADE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* Option 1: Standard Drink (Included) */}
              {comboDrinks.standard.map((drink) => {
                const isSelected = selectedDrink.id === drink.id;
                return (
                  <button
                    key={drink.id}
                    onClick={() => setSelectedDrink(drink)}
                    className={`relative text-left rounded-3xl p-5 sm:p-6 transition-all duration-300 group flex flex-col justify-between ${
                      isSelected
                        ? 'bg-emerald-50/90 border-2 border-[#10b981] shadow-lg shadow-emerald-900/5 scale-[1.01]'
                        : 'bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 shadow-sm'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-black uppercase tracking-wider text-gray-700 px-2.5 py-1 rounded-md bg-gray-100 border border-gray-200">
                        STANDARD DRINK
                      </span>
                      <span className="text-xs font-extrabold text-[#059669] bg-emerald-100 px-2.5 py-1 rounded-md border border-emerald-200">
                        INCLUDED IN COMBO
                      </span>
                    </div>

                    <div className="flex items-center gap-4 my-2">
                      <div className="w-20 h-20 rounded-xl overflow-hidden bg-white border border-gray-200 shrink-0">
                        <img src={drink.image} alt={drink.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className={`font-heading text-2xl font-black uppercase ${isSelected ? 'text-[#059669]' : 'text-gray-900'}`}>
                          Standard Soft Drink / Water
                        </h4>
                        <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                          {drink.description}
                        </p>
                      </div>
                    </div>

                    <div className={`mt-4 w-full py-2.5 rounded-xl text-center text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 ${
                      isSelected
                        ? 'bg-[#10b981] text-white shadow-sm'
                        : 'bg-gray-100 text-gray-700 group-hover:bg-gray-200'
                    }`}>
                      {isSelected && <Check className="w-4 h-4" />}
                      <span>{isSelected ? 'SELECTED (INCLUDED)' : 'CHOOSE STANDARD DRINK'}</span>
                    </div>
                  </button>
                );
              })}

              {/* Option 2: Premium Island Soda Upgrade */}
              {comboDrinks.premium.map((drink) => {
                const isSelected = selectedDrink.id === drink.id;
                return (
                  <button
                    key={drink.id}
                    onClick={() => setSelectedDrink(drink)}
                    className={`relative text-left rounded-3xl p-5 sm:p-6 transition-all duration-300 group flex flex-col justify-between ${
                      isSelected
                        ? 'bg-amber-50/90 border-2 border-[#d97706] shadow-lg shadow-amber-900/5 scale-[1.01]'
                        : 'bg-gradient-to-br from-amber-50/30 to-orange-50/20 border border-amber-300 hover:border-amber-400 shadow-sm'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-black uppercase tracking-wider text-[#b45309] px-2.5 py-1 rounded-md bg-amber-100 border border-amber-200 flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-[#d97706]" />
                        <span>PREMIUM UPGRADE</span>
                      </span>
                      <span className="text-xs font-black text-amber-900 bg-amber-200 px-2.5 py-1 rounded-md border border-amber-300">
                        +$1.50 UPGRADE
                      </span>
                    </div>

                    <div className="flex items-center gap-4 my-2">
                      <div className="w-20 h-20 rounded-xl overflow-hidden bg-white border border-amber-200 shrink-0">
                        <img src={drink.image} alt={drink.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className={`font-heading text-2xl font-black uppercase ${isSelected ? 'text-[#b45309]' : 'text-gray-900'}`}>
                          🌴 Jamaican Island Soda
                        </h4>
                        <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                          {drink.description}
                        </p>
                      </div>
                    </div>

                    <div className={`mt-4 w-full py-2.5 rounded-xl text-center text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 ${
                      isSelected
                        ? 'bg-[#d97706] text-white shadow-sm'
                        : 'bg-amber-100 text-[#b45309] group-hover:bg-amber-200'
                    }`}>
                      {isSelected && <Check className="w-4 h-4" />}
                      <span>{isSelected ? 'SELECTED (+ $1.50)' : 'UPGRADE TO ISLAND SODA (+ $1.50)'}</span>
                    </div>
                  </button>
                );
              })}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
