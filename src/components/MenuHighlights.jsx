import React from 'react';
import { ArrowRight, Flame, Sparkles, ShoppingBag } from 'lucide-react';
import { menuItems } from '../data/menuData';

export default function MenuHighlights({ setCurrentView, openOrderingModal, addToCart }) {
  const highlightIds = [
    "wings-1lb",
    "jerk-chicken-2pc",
    "spicy-beef-patty",
    "poutine-classic",
    "fried-chicken-4pc",
    "garlic-bread"
  ];

  const highlightedItems = menuItems.filter(item => highlightIds.includes(item.id));

  const handleQuickAdd = (item) => {
    if (addToCart) {
      addToCart(item);
    }
    openOrderingModal('all', item);
  };

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 border-b border-gray-200 pb-8 text-center md:text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#e02e07] text-xs font-bold uppercase tracking-widest mb-3 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#d97706]" />
              <span>FRESH FROM THE KITCHEN</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-black uppercase text-gray-900 tracking-tight">
              POPULAR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e02e07] to-[#d97706]">FAVORITES</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-1">
              A quick taste of our bestsellers. Browse the full menu for all sizes, combos, and sides.
            </p>
          </div>

          <button
            onClick={() => setCurrentView('menu')}
            className="px-6 py-3.5 rounded-xl font-heading text-xl font-bold uppercase tracking-wider bg-gradient-to-r from-[#e02e07] to-[#e52516] hover:from-[#f03525] hover:to-[#ff481f] text-white shadow-md shadow-[#e02e07]/25 transition-all flex items-center gap-2 group shrink-0"
          >
            <span>VIEW FULL MENU</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Highlight Grid (Food Only - No Drinks) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlightedItems.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white border border-gray-200 hover:border-red-300 p-4 transition-all duration-300 group flex flex-col justify-between shadow-sm hover:shadow-lg"
            >
              <div>
                {/* Food Image */}
                <div className="aspect-4/3 rounded-xl overflow-hidden mb-4 bg-gray-100 relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Price Tag Badge */}
                  <div className="absolute top-2.5 right-2.5">
                    <span className="font-heading text-lg font-black text-gray-900 px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-md border border-gray-200 shadow-md">
                      {item.priceDisplay}
                    </span>
                  </div>

                  {/* Spice Tag if any */}
                  {item.spiceLevel > 0 && (
                    <div className="absolute top-2.5 left-2.5">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#e52516] text-white flex items-center gap-1 shadow">
                        <Flame className="w-3 h-3 text-yellow-300" />
                        {item.spiceLevel === 3 ? 'Extra Hot' : item.spiceLevel === 2 ? 'Medium Spicy' : 'Mild'}
                      </span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="space-y-1">
                  <h3 className="font-heading text-2xl font-bold uppercase text-gray-900 group-hover:text-[#e02e07] transition-colors leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-500">
                  {item.tags?.[0] || "Made Fresh"}
                </span>
                <button
                  onClick={() => handleQuickAdd(item)}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-red-50 hover:bg-[#e02e07] text-[#e02e07] hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Order</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Menu Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-orange-50/60 border border-orange-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <div>
            <h4 className="font-heading text-2xl font-bold uppercase text-gray-900">
              LOOKING FOR MORE SIZES, COMBOS & DRINKS?
            </h4>
            <p className="text-xs text-gray-600">
              Browse our complete categorized menu including Jamaican patties, sides, and chilled Island sodas.
            </p>
          </div>
          <button
            onClick={() => setCurrentView('menu')}
            className="px-6 py-3 rounded-xl font-heading text-lg font-bold uppercase tracking-wider bg-gray-900 text-white hover:bg-black transition-colors shrink-0 shadow"
          >
            OPEN FULL MENU PAGE →
          </button>
        </div>

      </div>
    </section>
  );
}
