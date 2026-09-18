import React, { useState, useEffect } from 'react';
import { X, Flame, Check, Sparkles, ShoppingBag, Plus, Minus } from 'lucide-react';
import { wingSauces, wingStyles } from '../data/saucesData';

export const getIncludedSaucesForItem = (item) => {
  if (!item) return 1;
  const desc = (item.description || '').toLowerCase();
  const name = (item.name || '').toLowerCase();
  const id = (item.id || '').toLowerCase();
  
  // Specific item ID matches
  if (id === 'combo-6' || name.includes('combo 6') || name.includes('5 sauces') || desc.includes('5 sauce')) {
    return 5;
  }
  if (id === 'fp5-wings' || name.includes('fp5') || name.includes('5 lbs') || desc.includes('3 sauce')) {
    return 3;
  }
  if (
    id === 'fp3-wings' ||
    id === 'combo-3' ||
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
  const text = `${name} ${desc}`;
  const match = text.match(/(\d+)\s*sauce/i);
  if (match && match[1]) {
    const num = parseInt(match[1], 10);
    if (!isNaN(num) && num > 0) {
      return num;
    }
  }

  // Wing size & piece counts fallback:
  if (/(^|[^\d.])5\s*(lb|lbs)/i.test(text)) return 3;
  if (/(^|[^\d.])3\s*(lb|lbs)/i.test(text) || /(^|[^\d.])1\.5\s*(lb|lbs)/i.test(text) || /(^|[^\d.])6\s*(pc|pcs)/i.test(text)) return 2;
  if (/(^|[^\d.])2\s*(lb|lbs)/i.test(text) || /(^|[^\d.])1\s*(lb|lbs)/i.test(text) || /(^|[^\d.])0\.5\s*(lb|lbs)/i.test(text) || /(^|[^\d.])half\s*pound/i.test(text) || /(^|[^\d.])3\s*(pc|pcs)/i.test(text)) return 1;

  return 1;
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
  const [selectedStyle, setSelectedStyle] = useState(wingStyles[0]); // default: Breaded
  const [selectedSauces, setSelectedSauces] = useState([]); // No sauce picked by default
  const [quantity, setQuantity] = useState(1);

  const isWing = wingItem && (
    (wingItem.name || '').toLowerCase().includes('wing') ||
    (wingItem.id || '').toLowerCase().includes('wing') ||
    (wingItem.id || '').toLowerCase().startsWith('fp') ||
    ['combo-1', 'combo-2', 'combo-3', 'combo-6'].includes((wingItem.id || '').toLowerCase())
  );

  // Calculate extra sauce fee ($1.25 each for any sauces beyond the included count)
  const extraSaucesCount = Math.max(0, selectedSauces.length - includedSaucesCount);
  const extraSaucesCost = extraSaucesCount * 1.25;
  const unitPrice = (wingItem?.price || 16.00) + extraSaucesCost;
  const totalPrice = unitPrice * quantity;

  // Reset selections when item opens
  useEffect(() => {
    if (wingItem) {
      setSelectedStyle(wingStyles[0]);
      setSelectedSauces([]); // No sauce picked by default
      setQuantity(1);
    }
  }, [wingItem]);

  if (!isOpen || !wingItem) return null;

  const handleToggleSauce = (sauce) => {
    const alreadySelected = selectedSauces.some(s => s.id === sauce.id);
    if (alreadySelected) {
      setSelectedSauces(selectedSauces.filter(s => s.id !== sauce.id));
    } else {
      setSelectedSauces([...selectedSauces, sauce]);
    }
  };

  const handleConfirm = () => {
    const sauceNames = selectedSauces.length > 0 
      ? selectedSauces.map(s => s.name).join(', ') 
      : 'Plain / No Sauce';
    const extraSauceText = extraSaucesCount > 0 ? ` (+${extraSaucesCount} Extra Sauces: +$${extraSaucesCost.toFixed(2)})` : '';
    const customizedItem = {
      ...wingItem,
      quantity,
      price: unitPrice,
      basePrice: wingItem.price,
      extraSauceCost: extraSaucesCost,
      details: {
        ...(wingItem.details || {}),
        ...(isWing ? { style: selectedStyle.name } : {}),
        sauce: `${sauceNames}${extraSauceText}`,
        saucesList: selectedSauces.map(s => s.name),
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
              <span>{isWing ? 'Wing Sauce & Style Selection' : 'Sauce Selection'}</span>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white leading-tight">
              {wingItem.name}
            </h3>
            <p className="text-xs text-neutral-400 mt-0.5 line-clamp-2">
              {wingItem.description}
            </p>
            <div className="flex items-center gap-2 mt-1">
              <span className="font-heading text-xl font-black text-[#ff481f]">
                ${unitPrice.toFixed(2)}
              </span>
              {extraSaucesCount > 0 && (
                <span className="text-[11px] font-bold text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800">
                  Includes +${extraSaucesCost.toFixed(2)} ({extraSaucesCount} Extra Sauce{extraSaucesCount > 1 ? 's' : ''})
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-64 overflow-y-auto pr-1">
              {wingSauces.map((sauce) => {
                const isSelected = selectedSauces.some(s => s.id === sauce.id);
                const selectedIndex = selectedSauces.findIndex(s => s.id === sauce.id);
                const isExtra = isSelected && selectedIndex >= includedSaucesCount;
                const willBeExtra = !isSelected && selectedSauces.length >= includedSaucesCount;

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
