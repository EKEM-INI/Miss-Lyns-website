import React, { useState, useEffect } from 'react';
import { X, Flame, Check, Sparkles, ShoppingBag, Plus, Minus } from 'lucide-react';
import { wingSauces, wingStyles } from '../data/saucesData';

export const getMaxSaucesForItem = (item) => {
  if (!item) return 1;
  const id = (item.id || '').toLowerCase();
  const name = (item.name || '').toLowerCase();
  
  // Combo 6: 5 sauces
  if (id === 'combo-6' || name.includes('combo 6') || name.includes('6 - half pound') || name.includes('5 sauce') || name.includes('5 sauces')) {
    return 5;
  }

  // FP5: 5 Lbs Wings: 3 sauces
  if (id === 'fp5-wings' || id.includes('fp5') || /\b5\s*(lb|lbs|pound|pounds)\b/i.test(name)) {
    return 3;
  }

  // FP3 (3 Lbs Wings), Combo 3 (1.5 Lbs Wings), Family Feast: 2 sauces
  if (
    id === 'combo-3' ||
    id === 'fp3-wings' ||
    id.includes('fp3') ||
    id.includes('family-feast') ||
    name.includes('family feast') ||
    name.includes('1.5 lb') ||
    name.includes('1.5 lbs') ||
    name.includes('1.5 pound') ||
    /\b3\s*(lb|lbs|pound|pounds)\b/i.test(name)
  ) {
    return 2;
  }

  return 1;
};

export const isWingCustomizableItem = (item) => {
  if (!item) return false;
  const id = (item.id || '').toLowerCase();
  const name = (item.name || '').toLowerCase();
  const cat = (item.categoryId || '').toLowerCase();

  return (
    cat === 'wings' ||
    cat === 'family-meals' ||
    id.includes('wing') ||
    name.includes('wing') ||
    id.startsWith('fp') ||
    ['combo-1', 'combo-2', 'combo-3', 'combo-6'].includes(id)
  );
};

export default function WingCustomizationModal({
  isOpen,
  onClose,
  wingItem,
  onConfirm
}) {
  const maxSauces = getMaxSaucesForItem(wingItem);
  const [selectedStyle, setSelectedStyle] = useState(wingStyles[0]); // default: Breaded
  const [selectedSauces, setSelectedSauces] = useState([wingSauces[6]]); // default: Honey Garlic
  const [quantity, setQuantity] = useState(1);

  // Reset or update selections when item opens
  useEffect(() => {
    if (wingItem) {
      setSelectedStyle(wingStyles[0]);
      setSelectedSauces([wingSauces[6]]); // Honey Garlic default
      setQuantity(1);
    }
  }, [wingItem]);

  if (!isOpen || !wingItem) return null;

  const price = (wingItem.price || 16.00) * quantity;

  const handleToggleSauce = (sauce) => {
    if (maxSauces === 1) {
      setSelectedSauces([sauce]);
      return;
    }

    const alreadySelected = selectedSauces.some(s => s.id === sauce.id);
    if (alreadySelected) {
      if (selectedSauces.length > 1) {
        setSelectedSauces(selectedSauces.filter(s => s.id !== sauce.id));
      }
    } else {
      if (selectedSauces.length < maxSauces) {
        setSelectedSauces([...selectedSauces, sauce]);
      } else {
        // Replace the oldest selection
        setSelectedSauces([...selectedSauces.slice(1), sauce]);
      }
    }
  };

  const handleConfirm = () => {
    const sauceNames = selectedSauces.map(s => s.name).join(', ');
    const customizedItem = {
      ...wingItem,
      quantity,
      price: wingItem.price,
      details: {
        ...(wingItem.details || {}),
        style: selectedStyle.name,
        sauce: sauceNames,
        saucesList: selectedSauces.map(s => s.name)
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
              <span>Wing Sauce & Style Selection</span>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white leading-tight">
              {wingItem.name}
            </h3>
            <p className="text-xs text-neutral-400 mt-0.5 line-clamp-2">
              {wingItem.description}
            </p>
            <span className="font-heading text-xl font-black text-[#ff481f] mt-1 inline-block">
              {wingItem.priceDisplay || `$${wingItem.price?.toFixed(2)}`}
            </span>
          </div>
        </div>

        <div className="space-y-6 pt-4">
          
          {/* SECTION 1: PREPARATION STYLE */}
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

          {/* SECTION 2: SAUCE SELECTION (13 Store Sauces) */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <h4 className="font-heading text-lg font-black uppercase tracking-wide text-white flex items-center gap-2">
                <span>2. SELECT YOUR SAUCE{maxSauces > 1 ? 'S' : ''}</span>
                <span className="text-xs font-normal text-[#ff481f] lowercase">({wingSauces.length} options)</span>
              </h4>
              <span className="text-xs font-bold text-amber-400 bg-amber-950/80 px-2.5 py-0.5 rounded-full border border-amber-800">
                {maxSauces === 1 ? 'Pick 1 Sauce' : `Pick up to ${maxSauces} Sauces (${selectedSauces.length}/${maxSauces})`}
              </span>
            </div>
            <p className="text-xs text-neutral-400 mb-3">
              {maxSauces > 1 
                ? `You can select up to ${maxSauces} different sauces for this order portion:`
                : 'Tossed fresh in your choice of signature scratch-made island sauce or dry rub:'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-64 overflow-y-auto pr-1">
              {wingSauces.map((sauce) => {
                const isSelected = selectedSauces.some(s => s.id === sauce.id);
                return (
                  <button
                    key={sauce.id}
                    type="button"
                    onClick={() => handleToggleSauce(sauce)}
                    className={`p-3 rounded-2xl text-left border transition-all flex items-center justify-between gap-2 ${
                      isSelected
                        ? 'bg-amber-950/60 border-amber-500 text-white shadow-md ring-1 ring-amber-500/50'
                        : 'bg-neutral-950 border-neutral-800 text-neutral-300 hover:border-neutral-700 hover:bg-neutral-900'
                    }`}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className={`font-heading text-base font-bold uppercase ${isSelected ? 'text-amber-400' : 'text-white'}`}>
                          {sauce.name}
                        </span>
                        {sauce.spiceLevel > 0 && (
                          <span className="inline-flex items-center text-[10px] font-extrabold text-red-400 bg-red-950/80 px-1.5 py-0.2 rounded border border-red-900">
                            {'🌶️'.repeat(sauce.spiceLevel)}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-neutral-400 line-clamp-1 mt-0.5">
                        {sauce.description}
                      </p>
                    </div>

                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                      isSelected
                        ? 'bg-amber-500 border-amber-500 text-gray-950'
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
              <span>Add to Order • ${price.toFixed(2)}</span>
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}
