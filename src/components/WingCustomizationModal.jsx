import React, { useState, useEffect } from 'react';
import { X, Flame, Check, Sparkles, ShoppingBag, Plus, Minus, Coffee } from 'lucide-react';
import { wingSauces, wingStyles } from '../data/saucesData';
import { comboDrinks, allComboDrinksList } from '../data/comboOptions';

export const getIncludedSaucesForItem = (item) => {
  if (!item) return 1;
  const desc = (item.description || '').toLowerCase();
  const name = (item.name || '').toLowerCase();
  const id = (item.id || '').toLowerCase();
  
  // Combo 3 (3 - 1.5 Lbs Wings Combo): Strictly 2 free sauces
  if (id === 'combo-3' || id.includes('combo-3') || name.includes('1.5 lbs') || name.includes('1.5 lb') || name.startsWith('3 - 1.5')) {
    return 2;
  }

  // Combo 6: 5 sauces included
  if (id === 'combo-6' || name.includes('combo 6') || name.includes('5 sauces') || desc.includes('5 sauce')) {
    return 5;
  }

  // FP5: 5 Lbs Wings: 3 sauces included
  if (id === 'fp5-wings' || id.includes('fp5') || name.includes('5 lbs') || (desc.includes('3 sauce') && !name.includes('1.5'))) {
    return 3;
  }

  // FP3, 6 Pcs Jerk/Fried: 2 sauces included
  if (
    id === 'fp3-wings' ||
    id === 'jerk-chicken-6pc' ||
    id === 'fried-chicken-6pc' ||
    name.includes('2 sauces') ||
    desc.includes('2 sauce')
  ) {
    return 2;
  }

  if (id === 'family-feast-bundle' || name.includes('family feast')) {
    return 2;
  }

  // Regex extraction from description or name (e.g. "1 sauce", "2 sauces", "3 sauces", "5 sauces")
  const match = (desc + ' ' + name).match(/(\d+)\s*sauce/i);
  if (match && match[1]) {
    const num = parseInt(match[1], 10);
    if (!isNaN(num) && num > 0) {
      return num;
    }
  }

  // Wing size & piece counts fallback:
  if (/(^|[^\d.])5\s*(lb|lbs)/i.test(name)) return 3;
  if (/(^|[^\d.])3\s*(lb|lbs)/i.test(name) || /(^|[^\d.])1\.5\s*(lb|lbs)/i.test(name) || /(^|[^\d.])6\s*(pc|pcs)/i.test(name)) return 2;
  if (/(^|[^\d.])2\s*(lb|lbs)/i.test(name) || /(^|[^\d.])1\s*(lb|lbs)/i.test(name) || /(^|[^\d.])0\.5\s*(lb|lbs)/i.test(name) || /(^|[^\d.])half\s*pound/i.test(name) || /(^|[^\d.])3\s*(pc|pcs)/i.test(name)) return 1;

  return 1;
};

export const getIncludedDrinksForItem = (item) => {
  if (!item) return 0;
  const id = (item.id || '').toLowerCase();
  const name = (item.name || '').toLowerCase();
  const desc = (item.description || '').toLowerCase();
  const cat = (item.categoryId || '').toLowerCase();

  if (id === 'fp5-wings' || name.includes('fp5') || desc.includes('5 pop')) return 5;
  if (id === 'fp3-wings' || name.includes('fp3') || desc.includes('3 pop')) return 3;
  if (id === 'fp2-wings' || name.includes('fp2') || desc.includes('2 pop')) return 2;
  if (cat === 'combos' || id.startsWith('combo') || name.includes('combo') || desc.includes('1 pop')) return 1;

  return 0;
};

// Backwards-compatible alias for existing imports
export const getMaxSaucesForItem = getIncludedSaucesForItem;

export const isWingCustomizableItem = (item) => {
  if (!item) return false;
  const id = (item.id || '').toLowerCase();
  const name = (item.name || '').toLowerCase();
  const cat = (item.categoryId || '').toLowerCase();

  return (
    cat === 'wings' ||
    cat === 'family-meals' ||
    cat === 'chicken' ||
    cat === 'combos' ||
    id.includes('wing') ||
    name.includes('wing') ||
    id.includes('jerk') ||
    name.includes('jerk') ||
    id.includes('fried') ||
    name.includes('fried') ||
    id.startsWith('fp') ||
    ['combo-1', 'combo-2', 'combo-3', 'combo-4', 'combo-5', 'combo-6', 'family-feast-bundle'].includes(id)
  );
};

export default function WingCustomizationModal({
  isOpen,
  onClose,
  wingItem,
  onConfirm
}) {
  const includedSaucesCount = getIncludedSaucesForItem(wingItem);
  const includedDrinksCount = getIncludedDrinksForItem(wingItem);
  const [selectedStyle, setSelectedStyle] = useState(wingStyles[0]); // default: Breaded
  const [selectedSauces, setSelectedSauces] = useState([]); // No sauce picked by default
  const [selectedDrink, setSelectedDrink] = useState(comboDrinks.standard[0]); // Default: Coke
  const [selectedDrinksList, setSelectedDrinksList] = useState([]); // For multi-drink family packs
  const [quantity, setQuantity] = useState(1);

  const isWing = wingItem && (
    (wingItem.name || '').toLowerCase().includes('wing') ||
    (wingItem.id || '').toLowerCase().includes('wing') ||
    (wingItem.id || '').toLowerCase().startsWith('fp') ||
    ['combo-1', 'combo-2', 'combo-3', 'combo-6'].includes((wingItem.id || '').toLowerCase())
  );

  // Check if this is the "1 - Half Pound Wings (1 Sauce) Combo" (single sauce only, no extra sauces allowed)
  const isSingleSauceOnlyItem = wingItem && (
    wingItem.id === 'combo-1' ||
    (wingItem.name || '').toLowerCase().includes('half pound wings') ||
    (wingItem.name || '').toLowerCase().startsWith('1 - half pound')
  );

  // Calculate extra sauce fee ($1.25 each for any sauces beyond the included count, unless single-sauce-only item)
  const extraSaucesCount = isSingleSauceOnlyItem ? 0 : Math.max(0, selectedSauces.length - includedSaucesCount);
  const extraSaucesCost = extraSaucesCount * 1.25;

  // Calculate drink upgrade fee
  const drinkUpgradeCost = includedDrinksCount === 1 
    ? (selectedDrink?.price || 0) 
    : (includedDrinksCount > 1 
        ? selectedDrinksList.reduce((acc, d) => acc + (d.price || 0), 0)
        : 0);

  const unitPrice = (wingItem?.price || 16.00) + extraSaucesCost + drinkUpgradeCost;
  const totalPrice = unitPrice * quantity;

  // Reset selections when item opens
  useEffect(() => {
    if (wingItem) {
      setSelectedStyle(wingStyles[0]);
      setSelectedSauces([]); // No sauce picked by default
      setSelectedDrink(comboDrinks.standard[0]);
      const drinkCount = getIncludedDrinksForItem(wingItem);
      if (drinkCount > 1) {
        // Pre-fill family pack with standard drinks (e.g. Cokes)
        const defaultList = Array(drinkCount).fill(comboDrinks.standard[0]);
        setSelectedDrinksList(defaultList);
      } else {
        setSelectedDrinksList([]);
      }
      setQuantity(1);
    }
  }, [wingItem]);

  if (!isOpen || !wingItem) return null;

  const handleToggleSauce = (sauce) => {
    if (isSingleSauceOnlyItem) {
      const alreadySelected = selectedSauces.some(s => s.id === sauce.id);
      if (alreadySelected) {
        setSelectedSauces([]);
      } else {
        setSelectedSauces([sauce]);
      }
      return;
    }

    const alreadySelected = selectedSauces.some(s => s.id === sauce.id);
    if (alreadySelected) {
      setSelectedSauces(selectedSauces.filter(s => s.id !== sauce.id));
    } else {
      setSelectedSauces([...selectedSauces, sauce]);
    }
  };

  const handleUpdateFamilyDrink = (index, drink) => {
    const updated = [...selectedDrinksList];
    updated[index] = drink;
    setSelectedDrinksList(updated);
  };

  const handleConfirm = () => {
    const sauceNames = selectedSauces.length > 0 
      ? selectedSauces.map(s => s.name).join(', ') 
      : 'Plain / No Sauce';
    const extraSauceText = extraSaucesCount > 0 ? ` (+${extraSaucesCount} Extra Sauces: +$${extraSaucesCost.toFixed(2)})` : '';
    
    let drinkDisplay = '';
    if (includedDrinksCount === 1) {
      drinkDisplay = selectedDrink.price > 0 ? `${selectedDrink.name} (+$${selectedDrink.price.toFixed(2)})` : `${selectedDrink.name} (Included)`;
    } else if (includedDrinksCount > 1) {
      drinkDisplay = selectedDrinksList.map(d => d.name).join(', ');
    }

    const customizedItem = {
      ...wingItem,
      quantity,
      price: unitPrice,
      basePrice: wingItem.price,
      extraSauceCost: extraSaucesCost,
      drinkUpgradeCost,
      details: {
        ...(wingItem.details || {}),
        ...(isWing ? { style: selectedStyle.name } : {}),
        sauce: `${sauceNames}${extraSauceText}`,
        saucesList: selectedSauces.map(s => s.name),
        ...(includedDrinksCount > 0 ? { drink: drinkDisplay } : {}),
        extraSaucesCount,
        extraSaucesCost
      }
    };
    onConfirm(customizedItem);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl max-h-[92vh] rounded-3xl bg-neutral-900 border border-neutral-700 shadow-2xl overflow-y-auto text-white p-5 sm:p-7 text-left">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header */}
        <div className="flex items-start gap-4 pb-4 border-b border-neutral-800">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-neutral-950 shrink-0 border border-neutral-800">
            <img
              src={wingItem.image}
              alt={wingItem.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 pr-6">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-950/80 text-[#ff481f] text-[10px] font-bold uppercase tracking-wider border border-red-900 mb-1">
              <Sparkles className="w-3 h-3 text-yellow-400" />
              <span>{isWing ? 'Wing Sauce & Style Selection' : 'Customization & Drink'}</span>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white leading-tight">
              {wingItem.name}
            </h3>
            <p className="text-xs text-neutral-400 mt-0.5 line-clamp-2">
              {wingItem.description}
            </p>
            <div className="flex items-center gap-2 mt-1 flex-wrap">
              <span className="font-heading text-xl font-black text-[#ff481f]">
                ${unitPrice.toFixed(2)}
              </span>
              {extraSaucesCount > 0 && (
                <span className="text-[11px] font-bold text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800">
                  +${extraSaucesCost.toFixed(2)} ({extraSaucesCount} Extra Sauce{extraSaucesCount > 1 ? 's' : ''})
                </span>
              )}
              {drinkUpgradeCost > 0 && (
                <span className="text-[11px] font-bold text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800">
                  +${drinkUpgradeCost.toFixed(2)} (Drink Upgrade)
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-6 pt-4">
          
          {/* SECTION 1: PREPARATION STYLE (Only for wings) */}
          {isWing && (
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <h4 className="font-heading text-lg font-black uppercase tracking-wide text-white">
                  1. CHOOSE WING STYLE
                </h4>
                <span className="text-xs text-neutral-400 font-medium">Required</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {wingStyles.map((style) => {
                  const isSelected = selectedStyle.id === style.id;
                  return (
                    <button
                      key={style.id}
                      type="button"
                      onClick={() => setSelectedStyle(style)}
                      className={`p-3 rounded-2xl text-left border transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-red-950/40 border-[#e02e07] text-white shadow-md'
                          : 'bg-neutral-950 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                      }`}
                    >
                      <div>
                        <div className="font-heading text-base font-bold uppercase text-white">
                          {style.name}
                        </div>
                        <div className="text-[11px] text-neutral-400">
                          {style.description}
                        </div>
                      </div>
                      {isSelected && (
                        <div className="w-5 h-5 rounded-full bg-[#e02e07] text-white flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* SECTION 2: SAUCE SELECTION */}
          <div>
            {isSingleSauceOnlyItem ? (
              <>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1.5">
                  <h4 className="font-heading text-lg font-black uppercase tracking-wide text-white flex items-center gap-2">
                    <span>{isWing ? '2. ' : ''}CHOOSE YOUR SAUCE</span>
                    <span className="text-xs font-normal text-[#ff481f] lowercase">({wingSauces.length} options)</span>
                  </h4>
                  <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border w-fit ${
                    selectedSauces.length === 1 
                      ? 'text-emerald-400 bg-emerald-950/80 border-emerald-800' 
                      : 'text-neutral-300 bg-neutral-800/80 border-neutral-700'
                  }`}>
                    {selectedSauces.length === 1 ? '1 Sauce Selected (Free)' : '1 Sauce Included (Free)'}
                  </span>
                </div>
                <p className="text-xs text-neutral-400 mb-3">
                  Your order includes <strong className="text-emerald-400 font-bold">1 free sauce</strong>. Select 1 flavour from our signature scratch-made sauces:
                </p>
              </>
            ) : (
              <>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1.5">
                  <h4 className="font-heading text-lg font-black uppercase tracking-wide text-white flex items-center gap-2">
                    <span>{isWing ? '2. ' : ''}CHOOSE YOUR SAUCES</span>
                    <span className="text-xs font-normal text-[#ff481f] lowercase">({wingSauces.length} options)</span>
                  </h4>
                  <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border w-fit ${
                    extraSaucesCount > 0 
                      ? 'text-amber-300 bg-amber-950/80 border-amber-700' 
                      : (selectedSauces.length > 0 ? 'text-emerald-400 bg-emerald-950/80 border-emerald-800' : 'text-neutral-300 bg-neutral-800/80 border-neutral-700')
                  }`}>
                    {extraSaucesCount > 0 
                      ? `${includedSaucesCount} Included + ${extraSaucesCount} Extra (+$${extraSaucesCost.toFixed(2)})`
                      : (selectedSauces.length > 0 
                          ? `${selectedSauces.length}/${includedSaucesCount} Free Sauce${includedSaucesCount > 1 ? 's' : ''} Chosen`
                          : `${includedSaucesCount} Sauce${includedSaucesCount > 1 ? 's' : ''} Included (Free)`)}
                  </span>
                </div>
                <p className="text-xs text-neutral-400 mb-3">
                  Your order includes <strong className="text-emerald-400 font-bold">{includedSaucesCount} free sauce{includedSaucesCount > 1 ? 's' : ''}</strong>. 
                  You can pick any additional sauce from our 13 flavours for only <strong className="text-amber-400 font-bold">+$1.25 each</strong>:
                </p>
              </>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-56 overflow-y-auto pr-1">
              {wingSauces.map((sauce) => {
                const isSelected = selectedSauces.some(s => s.id === sauce.id);
                const selectedIndex = selectedSauces.findIndex(s => s.id === sauce.id);
                const isExtra = !isSingleSauceOnlyItem && isSelected && selectedIndex >= includedSaucesCount;
                const willBeExtra = !isSingleSauceOnlyItem && !isSelected && selectedSauces.length >= includedSaucesCount;

                return (
                  <button
                    key={sauce.id}
                    type="button"
                    onClick={() => handleToggleSauce(sauce)}
                    className={`p-3 rounded-2xl text-left border transition-all flex items-center justify-between gap-2 ${
                      isSelected
                        ? isExtra
                          ? 'bg-amber-950/70 border-amber-400 text-white shadow-md ring-1 ring-amber-400/50'
                          : 'bg-red-950/60 border-[#e02e07] text-white shadow-md ring-1 ring-[#e02e07]/50'
                        : 'bg-neutral-950 border-neutral-800 text-neutral-300 hover:border-neutral-700 hover:bg-neutral-900'
                    }`}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className={`font-heading text-base font-bold uppercase ${
                          isSelected ? (isExtra ? 'text-amber-400' : 'text-[#ff481f]') : 'text-white'
                        }`}>
                          {sauce.name}
                        </span>
                        {sauce.spiceLevel > 0 && (
                          <span className="inline-flex items-center text-[10px] font-extrabold text-red-400 bg-red-950/80 px-1.5 py-0.2 rounded border border-red-900">
                            {'🌶️'.repeat(sauce.spiceLevel)}
                          </span>
                        )}
                        {isSelected && (
                          <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded ${
                            isExtra ? 'bg-amber-400/20 text-amber-300 border border-amber-500/50' : 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                          }`}>
                            {isExtra ? '+$1.25 Extra' : 'Included'}
                          </span>
                        )}
                        {!isSelected && willBeExtra && (
                          <span className="text-[10px] font-bold text-neutral-400 bg-neutral-900 px-1.5 py-0.2 rounded border border-neutral-800">
                            +$1.25
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-neutral-400 line-clamp-1 mt-0.5">
                        {sauce.description}
                      </p>
                    </div>

                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                      isSelected
                        ? isExtra ? 'bg-amber-400 border-amber-400 text-gray-950' : 'bg-[#e02e07] border-[#e02e07] text-white'
                        : 'border-neutral-700 bg-neutral-900'
                    }`}>
                      {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* SECTION 3: DRINK SELECTION (If combo or family pack includes drinks) */}
          {includedDrinksCount > 0 && (
            <div className="pt-2 border-t border-neutral-800">
              
              {/* Single Combo Drink Selector */}
              {includedDrinksCount === 1 && (
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h4 className="font-heading text-lg font-black uppercase tracking-wide text-white flex items-center gap-2">
                      <span>{isWing ? '3. ' : '2. '}CHOOSE YOUR DRINK</span>
                      <span className="text-xs font-normal text-emerald-400">(1 Pop / Drink Included)</span>
                    </h4>
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-800 w-fit">
                      Selected: {selectedDrink.name} {selectedDrink.price > 0 && `(+$${selectedDrink.price.toFixed(2)})`}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-400 mb-3">
                    Choose 1 chilled drink for your combo meal, or upgrade to an authentic Jamaican Bigga soda:
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 max-h-56 overflow-y-auto pr-1">
                    {allComboDrinksList.map((drink) => {
                      const isSelected = selectedDrink.id === drink.id;
                      return (
                        <button
                          key={drink.id}
                          type="button"
                          onClick={() => setSelectedDrink(drink)}
                          className={`p-2.5 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                            isSelected
                              ? drink.price > 0
                                ? 'bg-amber-950/70 border-amber-400 text-white shadow ring-1 ring-amber-400/50'
                                : 'bg-emerald-950/60 border-emerald-500 text-white shadow ring-1 ring-emerald-500/50'
                              : 'bg-neutral-950 border-neutral-800 text-neutral-300 hover:border-neutral-700 hover:bg-neutral-900'
                          }`}
                        >
                          <div className="aspect-4/3 rounded-xl overflow-hidden mb-2 bg-neutral-900 border border-neutral-800">
                            <img
                              src={drink.image}
                              alt={drink.name}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>

                          <div>
                            <div className="flex items-center justify-between gap-1">
                              <span className={`font-heading text-xs font-bold uppercase truncate ${
                                isSelected ? (drink.price > 0 ? 'text-amber-400' : 'text-emerald-400') : 'text-white'
                              }`}>
                                {drink.name}
                              </span>
                            </div>
                            <span className="text-[9px] text-neutral-400 block truncate">
                              {drink.category}
                            </span>
                          </div>

                          <div className="mt-2 flex items-center justify-between">
                            <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                              drink.price > 0
                                ? 'bg-amber-400/20 text-amber-300 border border-amber-500/50'
                                : 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                            }`}>
                              {drink.price > 0 ? '+$2.50' : 'Included'}
                            </span>

                            {isSelected && (
                              <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
                                drink.price > 0 ? 'bg-amber-400 text-gray-950' : 'bg-emerald-500 text-gray-950'
                              }`}>
                                <Check className="w-3 h-3 stroke-[3]" />
                              </div>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Family Pack Multi-Drink Picker */}
              {includedDrinksCount > 1 && (
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h4 className="font-heading text-lg font-black uppercase tracking-wide text-white flex items-center gap-2">
                      <span>{isWing ? '3. ' : '2. '}CHOOSE YOUR {includedDrinksCount} DRINKS</span>
                    </h4>
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-800 w-fit">
                      {includedDrinksCount} Drinks Included
                    </span>
                  </div>

                  <p className="text-xs text-neutral-400 mb-3">
                    Select your {includedDrinksCount} drinks for this family pack:
                  </p>

                  <div className="space-y-2.5">
                    {selectedDrinksList.map((curDrink, slotIdx) => (
                      <div key={slotIdx} className="p-3 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full bg-emerald-900 text-emerald-300 text-xs font-black flex items-center justify-center shrink-0">
                            {slotIdx + 1}
                          </span>
                          <div className="w-10 h-10 rounded-lg overflow-hidden bg-neutral-900 shrink-0 border border-neutral-800">
                            <img src={curDrink.image} alt={curDrink.name} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <div className="font-heading text-sm font-bold text-white uppercase">{curDrink.name}</div>
                            <span className="text-[10px] text-neutral-400">{curDrink.category}</span>
                          </div>
                        </div>

                        <select
                          value={curDrink.id}
                          onChange={(e) => {
                            const found = allComboDrinksList.find(d => d.id === e.target.value) || comboDrinks.standard[0];
                            handleUpdateFamilyDrink(slotIdx, found);
                          }}
                          className="bg-neutral-900 border border-neutral-700 text-white text-xs font-bold rounded-xl px-3 py-2 focus:outline-none focus:border-emerald-500"
                        >
                          {allComboDrinksList.map(d => (
                            <option key={d.id} value={d.id}>
                              {d.name} {d.price > 0 ? '(+$2.50)' : '(Included)'}
                            </option>
                          ))}
                        </select>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}

          {/* Quantity & Summary Footer */}
          <div className="pt-3 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Quantity Selector */}
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase font-bold text-neutral-400">Qty:</span>
              <div className="flex items-center gap-2 bg-neutral-950 border border-neutral-800 rounded-xl p-1">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white flex items-center justify-center"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-heading text-base font-bold text-white w-6 text-center">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white flex items-center justify-center"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Confirm Button */}
            <button
              type="button"
              onClick={handleConfirm}
              className="w-full sm:w-auto flex-1 py-3.5 px-6 rounded-2xl font-heading text-lg font-black uppercase tracking-wider bg-gradient-to-r from-[#e02e07] to-[#e52516] hover:from-[#f03525] hover:to-[#ff481f] text-white shadow-lg flex items-center justify-center gap-2 transition-all"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Add to Order • ${totalPrice.toFixed(2)}</span>
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}
