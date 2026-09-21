import React, { useState } from 'react';
import { Check, Sparkles, ShoppingBag, Layers, Flame, Coffee } from 'lucide-react';
import { comboProteins, comboSides, comboPremiumUpgrades, comboDrinks, allComboDrinksList } from '../data/comboOptions';
import { wingSauces, wingStyles } from '../data/saucesData';

export default function ComboBuilder({ openOrderingModal, addToCart }) {
  const [selectedProtein, setSelectedProtein] = useState(comboProteins[0]); // Wings first
  const [selectedWingStyle, setSelectedWingStyle] = useState(wingStyles[0]); // Breaded
  const [selectedSauces, setSelectedSauces] = useState([]); // No sauce picked by default
  const [selectedSide, setSelectedSide] = useState(comboSides.standard[0]);
  const [selectedUpgrade, setSelectedUpgrade] = useState(null); // null or one of comboPremiumUpgrades
  const [selectedDrink, setSelectedDrink] = useState(comboDrinks.standard[0]); // Coke by default

  const basePrice = selectedProtein?.price || 17.10;
  const upgradeCost = selectedUpgrade ? selectedUpgrade.price : 0;
  const drinkUpgradeCost = selectedDrink?.price || 0;
  const totalComboPrice = (basePrice + upgradeCost + drinkUpgradeCost).toFixed(2);

  const handleToggleSauce = (sauce) => {
    const alreadySelected = selectedSauces.some(s => s.id === sauce.id);
    if (alreadySelected) {
      setSelectedSauces([]);
    } else {
      setSelectedSauces([sauce]); // Single sauce only, no extra sauces
    }
  };

  const handleAddComboToOrder = () => {
    const sideDisplay = selectedUpgrade 
      ? `${selectedSide.name} (Upgraded to ${selectedUpgrade.name} +$${upgradeCost.toFixed(2)})`
      : selectedSide.name;

    const isWing = selectedProtein.id === 'wings-half-lb';
    const sauceNames = selectedSauces.length > 0 ? selectedSauces.map(s => s.name).join(', ') : 'Plain / No Sauce';
    
    const proteinLabel = isWing 
      ? `${selectedProtein.name} (${selectedWingStyle.name}, ${sauceNames})`
      : `${selectedProtein.name} (${sauceNames})`;

    const drinkLabel = drinkUpgradeCost > 0 
      ? `${selectedDrink.name} (+$${drinkUpgradeCost.toFixed(2)} Upgrade)`
      : `${selectedDrink.name} (Included)`;

    const comboItem = {
      id: `custom-combo-${Date.now()}`,
      name: `Custom Combo (${proteinLabel} + ${selectedUpgrade ? selectedUpgrade.name : selectedSide.name} + ${selectedDrink.name})`,
      price: parseFloat(totalComboPrice),
      priceDisplay: `$${totalComboPrice}`,
      image: selectedProtein.image,
      details: {
        protein: proteinLabel,
        sauce: sauceNames,
        saucesList: selectedSauces.map(s => s.name),
        ...(isWing ? { style: selectedWingStyle.name } : {}),
        side: sideDisplay,
        upgrade: selectedUpgrade ? `${selectedUpgrade.name} (+$${upgradeCost.toFixed(2)} Premium Upgrade)` : 'None (Standard Side)',
        drink: drinkLabel,
        drinkItem: selectedDrink
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
          <div className="min-w-0 flex-1">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#ff481f] block">
              STEP 1 • PROTEIN & SAUCE
            </span>
            <h4 className="font-heading text-xl sm:text-2xl font-bold uppercase text-white leading-tight truncate">
              {selectedProtein.name}
            </h4>
            <div className="flex flex-wrap items-center gap-1 mt-0.5">
              <span className="text-[11px] font-bold text-amber-400 truncate max-w-full">
                {selectedSauces.length > 0 ? selectedSauces.map(s => s.name).join(', ') : 'Select Sauce (1 Included)'}
              </span>
            </div>
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
          drinkUpgradeCost > 0 ? 'border-amber-600 bg-neutral-950' : 'border-emerald-800/80'
        }`}>
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-neutral-900 shrink-0 border border-neutral-800">
            <img
              src={selectedDrink.image}
              alt={selectedDrink.name}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="min-w-0 flex-1">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#059669] block">
              STEP 3 • DRINK SELECTION
            </span>
            <h4 className="font-heading text-lg sm:text-xl font-bold uppercase text-white leading-tight truncate">
              {selectedDrink.name}
            </h4>
            <div className="flex flex-wrap gap-1 mt-1">
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                drinkUpgradeCost > 0
                  ? 'text-amber-300 bg-amber-950/80 border-amber-700'
                  : 'text-emerald-400 bg-emerald-950/80 border-emerald-800'
              }`}>
                {drinkUpgradeCost > 0 ? `+${selectedDrink.name} (+$2.50)` : 'Drink Included'}
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

          <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
            BUILD YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e02e07] via-[#d97706] to-[#b45309]">COMBO</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-400">
            Create your custom meal in 3 simple steps. Pick your protein, choose your sauce and sides, and select your drinks & premium upgrades.
          </p>
        </div>

        {/* TOP LIVE COMBO PREVIEW TRAY */}
        {renderPreviewTray(false)}

        {/* 3 Steps Stacked Grid */}
        <div className="space-y-12">
          
          {/* STEP 1: PROTEINS & SAUCES */}
          <div className="space-y-5">
            <div className="flex items-center gap-3 border-b border-neutral-800 pb-3">
              <div className="w-8 h-8 rounded-full bg-[#e02e07] text-white font-heading text-lg font-bold flex items-center justify-center">
                1
              </div>
              <div>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-wide leading-none">
                  STEP 1 — CHOOSE YOUR MAIN PROTEIN
                </h3>
                <p className="text-xs text-neutral-400">Select 1 core protein dish for your combo platter</p>
              </div>
            </div>

            {/* Protein Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {comboProteins.map((protein) => {
                const isSelected = selectedProtein.id === protein.id;
                return (
                  <button
                    key={protein.id}
                    onClick={() => setSelectedProtein(protein)}
                    className={`relative text-left rounded-3xl p-5 sm:p-6 transition-all duration-300 group flex flex-col justify-between ${
                      isSelected
                        ? 'bg-red-950/40 border-2 border-[#e02e07] shadow-xl shadow-red-950/30 scale-[1.02]'
                        : 'bg-neutral-900 border border-neutral-800 hover:border-neutral-700 shadow-sm'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-black uppercase px-2.5 py-1 rounded-full bg-red-950/80 text-[#ff481f] border border-red-900">
                        {protein.badge}
                      </span>
                      <span className="font-heading text-2xl font-black text-white">
                        ${protein.price.toFixed(2)}
                      </span>
                    </div>

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

            {/* Sauce & Style Selector for Combo */}
            <div className="mt-5 p-5 sm:p-6 rounded-2xl bg-neutral-950 border border-red-900/60 shadow-lg space-y-4 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-800 pb-3">
                <div>
                  <h4 className="font-heading text-lg sm:text-xl font-black uppercase text-white flex items-center gap-2">
                    <span>🍗 CHOOSE YOUR COMBO SAUCE</span>
                    <span className="text-xs font-normal text-[#ff481f]">({wingSauces.length} sauce flavours)</span>
                  </h4>
                  <p className="text-xs text-neutral-400">
                    1 Sauce included with combo. Select 1 flavour from our signature sauces.
                  </p>
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full border w-fit ${
                  selectedSauces.length === 1 
                    ? 'text-emerald-400 bg-emerald-950/80 border-emerald-800' 
                    : 'text-neutral-300 bg-neutral-800/80 border-neutral-700'
                }`}>
                  {selectedSauces.length === 1 ? '1 Sauce Selected (Free)' : '1 Sauce Included (Free)'}
                </span>
              </div>

              {/* Style Toggle (If Wings) */}
              {selectedProtein.id === 'wings-half-lb' && (
                <div className="flex items-center gap-3 pb-2 border-b border-neutral-900">
                  <span className="text-xs font-bold uppercase text-neutral-400 shrink-0">Wing Style:</span>
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
              )}

              {/* Sauce Selection Grid */}
              <div>
                <span className="text-xs font-bold uppercase text-neutral-400 block mb-2">
                  Select Sauce (Selected: <strong className="text-amber-400">{selectedSauces.length > 0 ? selectedSauces.map(s => s.name).join(', ') : 'None selected'}</strong>):
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-h-52 overflow-y-auto pr-1">
                  {wingSauces.map((sauce) => {
                    const isChosen = selectedSauces.some(s => s.id === sauce.id);

                    return (
                      <button
                        key={sauce.id}
                        type="button"
                        onClick={() => handleToggleSauce(sauce)}
                        className={`p-2.5 rounded-xl text-left border transition-all flex flex-col justify-between ${
                          isChosen
                            ? 'bg-amber-950/70 border-amber-500 text-white shadow ring-1 ring-amber-500/50'
                            : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-1">
                            <span className={`font-heading text-sm font-bold uppercase ${
                              isChosen ? 'text-amber-400' : 'text-white'
                            }`}>
                              {sauce.name}
                            </span>
                            {sauce.spiceLevel > 0 && (
                              <span className="text-[9px]">{'🌶️'.repeat(sauce.spiceLevel)}</span>
                            )}
                          </div>
                          <span className="text-[10px] text-neutral-400 line-clamp-1 mt-0.5">
                            {sauce.tag}
                          </span>
                        </div>

                        <div className="mt-2 flex items-center justify-between">
                          {isChosen ? (
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                              Included
                            </span>
                          ) : (
                            <span className="text-[9px] text-neutral-500">
                              Included
                            </span>
                          )}

                          {isChosen && (
                            <div className="w-4 h-4 rounded-full flex items-center justify-center bg-amber-400 text-gray-950">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
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
          <div className="space-y-8 pt-4">
            
            {/* Step 3 Header */}
            <div className="flex items-center gap-3 border-b border-neutral-800 pb-3">
              <div className="w-8 h-8 rounded-full bg-[#10b981] text-white font-heading text-lg font-bold flex items-center justify-center">
                3
              </div>
              <div>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-wide leading-none">
                  STEP 3 — CHOOSE YOUR DRINK & PREMIUM UPGRADE
                </h3>
                <p className="text-xs text-neutral-400">Select your drink with small thumbnail pictures, and optionally upgrade your side!</p>
              </div>
            </div>

            {/* PART 1: DRINK SELECTION WITH REAL PICTURES */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-widest text-[#10b981] flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#10b981]" />
                  <span>CHOOSE YOUR DRINK (1 INCLUDED)</span>
                </span>
                <span className="text-xs text-neutral-400">
                  Selected: <strong className="text-emerald-400 font-bold">{selectedDrink.name}</strong>
                  {drinkUpgradeCost > 0 && <span className="text-amber-400 font-bold"> (+$2.50)</span>}
                </span>
              </div>

              {/* Standard Cans & Water (Included) */}
              <div>
                <span className="text-[11px] font-bold uppercase text-neutral-400 block mb-2">
                  Standard Chilled Drinks (Included with Combo):
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  {comboDrinks.standard.map((drink) => {
                    const isSelected = selectedDrink.id === drink.id;
                    return (
                      <button
                        key={drink.id}
                        type="button"
                        onClick={() => setSelectedDrink(drink)}
                        className={`relative text-left rounded-2xl p-3 transition-all duration-200 group flex flex-col justify-between ${
                          isSelected
                            ? 'bg-emerald-950/50 border-2 border-emerald-500 shadow-md ring-1 ring-emerald-500/50 scale-[1.02]'
                            : 'bg-neutral-900 border border-neutral-800 hover:border-neutral-700 shadow-sm hover:bg-neutral-850'
                        }`}
                      >
                        {isSelected && (
                          <div className="absolute top-2 right-2 z-10 w-5 h-5 rounded-full bg-emerald-500 text-gray-950 flex items-center justify-center font-bold text-xs shadow">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                        )}

                        <div className="aspect-4/3 rounded-xl overflow-hidden mb-2 bg-neutral-950 border border-neutral-800/80">
                          <img
                            src={drink.image}
                            alt={drink.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                            loading="lazy"
                          />
                        </div>

                        <div>
                          <h4 className={`font-heading text-sm font-bold uppercase leading-tight truncate ${
                            isSelected ? 'text-emerald-400' : 'text-white'
                          }`}>
                            {drink.name}
                          </h4>
                          <p className="text-[10px] text-neutral-400 line-clamp-1 mt-0.5">
                            {drink.category}
                          </p>
                        </div>

                        <div className={`mt-2 w-full py-1 rounded-lg text-center text-[10px] font-bold uppercase tracking-wider transition-colors ${
                          isSelected ? 'bg-emerald-500 text-gray-950 font-bold' : 'bg-neutral-800 text-neutral-300 group-hover:bg-neutral-700'
                        }`}>
                          {isSelected ? 'SELECTED' : 'INCLUDED'}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Imported Jamaican Bigga Sodas (+$2.50 Upgrade) */}
              <div className="pt-2">
                <span className="text-[11px] font-bold uppercase text-amber-400 flex items-center gap-1.5 mb-2">
                  <span>🌴 Imported Jamaican Island Sodas (+$2.50 Upgrade):</span>
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {comboDrinks.premium.map((drink) => {
                    const isSelected = selectedDrink.id === drink.id;
                    return (
                      <button
                        key={drink.id}
                        type="button"
                        onClick={() => setSelectedDrink(drink)}
                        className={`relative text-left rounded-2xl p-3 transition-all duration-200 group flex flex-col justify-between ${
                          isSelected
                            ? 'bg-amber-950/60 border-2 border-amber-400 shadow-md ring-1 ring-amber-400/50 scale-[1.02]'
                            : 'bg-neutral-900 border border-neutral-800 hover:border-neutral-700 shadow-sm hover:bg-neutral-850'
                        }`}
                      >
                        <span className="absolute top-2 left-2 z-10 text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-amber-500 text-gray-950 shadow-sm">
                          +$2.50
                        </span>

                        {isSelected && (
                          <div className="absolute top-2 right-2 z-10 w-5 h-5 rounded-full bg-amber-400 text-gray-950 flex items-center justify-center font-bold text-xs shadow">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                        )}

                        <div className="aspect-4/3 rounded-xl overflow-hidden mb-2 bg-neutral-950 border border-neutral-800/80 mt-4">
                          <img
                            src={drink.image}
                            alt={drink.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                            loading="lazy"
                          />
                        </div>

                        <div>
                          <h4 className={`font-heading text-sm font-bold uppercase leading-tight truncate ${
                            isSelected ? 'text-amber-400' : 'text-white'
                          }`}>
                            {drink.name}
                          </h4>
                          <p className="text-[10px] text-neutral-400 line-clamp-1 mt-0.5">
                            Jamaican Import (600ml)
                          </p>
                        </div>

                        <div className={`mt-2 w-full py-1 rounded-lg text-center text-[10px] font-bold uppercase tracking-wider transition-colors ${
                          isSelected ? 'bg-amber-400 text-gray-950 font-bold' : 'bg-neutral-800 text-neutral-300 group-hover:bg-neutral-700'
                        }`}>
                          {isSelected ? 'SELECTED (+ $2.50)' : 'UPGRADE (+ $2.50)'}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* PART 2: PREMIUM SIDE UPGRADES */}
            <div className="pt-4 border-t border-neutral-850">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black uppercase tracking-widest text-[#fbbf24] flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#d97706]" />
                  <span>PREMIUM SIDE UPGRADES (+$3.00)</span>
                </span>
                {selectedUpgrade && (
                  <button
                    type="button"
                    onClick={() => setSelectedUpgrade(null)}
                    className="text-xs font-bold text-neutral-400 hover:text-red-400 underline"
                  >
                    Remove Upgrade
                  </button>
                )}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                {comboPremiumUpgrades.map((upgrade) => {
                  const isSelected = selectedUpgrade?.id === upgrade.id;
                  return (
                    <button
                      key={upgrade.id}
                      type="button"
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
