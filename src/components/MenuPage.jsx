import React, { useState, useMemo } from 'react';
import { Flame, ShoppingBag, Search, ArrowLeft, Sparkles, Check } from 'lucide-react';
import { menuCategories, menuItems } from '../data/menuData';

export default function MenuPage({ setCurrentView, openOrderingModal, addToCart }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItemDetail, setSelectedItemDetail] = useState(null);

  const filteredItems = useMemo(() => {
    return menuItems.filter(item => {
      const matchesCategory = activeCategory === "all" || item.categoryId === activeCategory;
      const matchesSearch = searchQuery === "" || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleItemOrder = (item) => {
    if (addToCart) {
      addToCart(item);
    }
    openOrderingModal('all', item);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-6 pb-24 text-gray-900">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-b from-orange-50/70 to-gray-50 border-b border-gray-200 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <button
            onClick={() => setCurrentView('home')}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-600 hover:text-gray-900 mb-4 bg-white px-3.5 py-2 rounded-lg border border-gray-200 shadow-sm transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Homepage
          </button>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#e02e07] text-xs font-bold uppercase tracking-widest mb-2 shadow-sm">
                <span>AUTHENTIC RESTAURANT MENU</span>
              </div>
              <h1 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-gray-900 leading-none">
                OUR COMPLETE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e02e07] via-[#d97706] to-[#b45309]">MENU</span>
              </h1>
              <p className="text-sm sm:text-base text-gray-600 max-w-xl mt-2">
                Every dish is cooked fresh to order using authentic Jamaican spices and high-quality fresh chicken.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search dishes, wings, sides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-gray-300 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#e02e07] shadow-sm"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Sticky Category Filter Tabs Bar */}
      <div className="sticky top-[69px] z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 py-3 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            
            {/* All Items Pill */}
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                activeCategory === "all"
                  ? 'bg-[#e02e07] text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Items ({menuItems.length})
            </button>

            {/* Category Pills */}
            {menuCategories.map((cat) => {
              const count = menuItems.filter(i => i.categoryId === cat.id).length;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#e02e07] text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-black/20 text-white' : 'bg-gray-200 text-gray-700'}`}>
                    {count}
                  </span>
                </button>
              );
            })}

          </div>
        </div>
      </div>

      {/* Main Menu Grid Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 rounded-3xl bg-white border border-gray-200 my-8 shadow-sm">
            <p className="text-lg font-bold text-gray-800">No menu items found matching "{searchQuery}"</p>
            <button
              onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
              className="mt-4 px-4 py-2 rounded-xl text-xs font-bold uppercase bg-[#e02e07] text-white"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            
            {activeCategory === "all" ? (
              menuCategories.map((cat) => {
                const itemsInCat = filteredItems.filter(i => i.categoryId === cat.id);
                if (itemsInCat.length === 0) return null;

                return (
                  <div key={cat.id} className="space-y-6">
                    <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                      <h2 className="font-heading text-3xl sm:text-4xl font-black uppercase text-gray-900 tracking-wide flex items-center gap-2">
                        <span>{cat.name}</span>
                      </h2>
                      <span className="text-xs font-bold text-gray-500">{itemsInCat.length} {itemsInCat.length === 1 ? 'item' : 'items'}</span>
                    </div>

                    {cat.id === 'drinks' ? (
                      /* SINGLE SPOT FOR DRINKS WITH LIGHT DESIGN */
                      <DrinksSpotlightCard 
                        item={itemsInCat[0]} 
                        onOrder={() => handleItemOrder(itemsInCat[0])} 
                      />
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {itemsInCat.map((item) => (
                          <MenuItemCard 
                            key={item.id} 
                            item={item} 
                            onOrder={() => handleItemOrder(item)} 
                            onDetail={() => setSelectedItemDetail(item)}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              activeCategory === 'drinks' ? (
                /* SINGLE SPOT FOR DRINKS WHEN FILTERED */
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                    <h2 className="font-heading text-3xl sm:text-4xl font-black uppercase text-gray-900 tracking-wide flex items-center gap-2">
                      <span>Island Sodas & Drinks</span>
                    </h2>
                  </div>
                  {filteredItems[0] && (
                    <DrinksSpotlightCard 
                      item={filteredItems[0]} 
                      onOrder={() => handleItemOrder(filteredItems[0])} 
                    />
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredItems.map((item) => (
                    <MenuItemCard 
                      key={item.id} 
                      item={item} 
                      onOrder={() => handleItemOrder(item)} 
                      onDetail={() => setSelectedItemDetail(item)}
                    />
                  ))}
                </div>
              )
            )}

          </div>
        )}

      </div>

      {/* Item Detail Modal */}
      {selectedItemDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <div className="relative w-full max-w-lg rounded-3xl bg-white border border-gray-200 p-6 shadow-2xl overflow-hidden animate-fadeIn text-gray-900">
            
            <button
              onClick={() => setSelectedItemDetail(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700"
            >
              ✕
            </button>

            <div className="aspect-4/3 rounded-2xl overflow-hidden mb-5 bg-gray-100 relative">
              <img
                src={selectedItemDetail.image}
                alt={selectedItemDetail.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 right-3">
                <span className="font-heading text-2xl font-black text-gray-900 px-3 py-1 rounded-xl bg-white/95 backdrop-blur-md border border-gray-200 shadow-md">
                  {selectedItemDetail.priceDisplay}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-[#e02e07] text-white">
                  {selectedItemDetail.tags?.[0] || "Fresh Item"}
                </span>
                {selectedItemDetail.spiceLevel > 0 && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-100 text-[#e02e07] flex items-center gap-1 border border-red-200">
                    <Flame className="w-3 h-3 text-[#e02e07]" />
                    Spicy Level: {selectedItemDetail.spiceLevel}/3
                  </span>
                )}
              </div>

              <h3 className="font-heading text-3xl font-black uppercase text-gray-900 leading-tight">
                {selectedItemDetail.name}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {selectedItemDetail.description}
              </p>

              <div className="pt-4 flex items-center gap-3">
                <button
                  onClick={() => {
                    handleItemOrder(selectedItemDetail);
                    setSelectedItemDetail(null);
                  }}
                  className="flex-1 py-3.5 rounded-xl font-heading text-xl font-bold uppercase tracking-wider bg-gradient-to-r from-[#e02e07] to-[#e52516] hover:from-[#f03525] hover:to-[#ff481f] text-white shadow-lg flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Order Now ({selectedItemDetail.priceDisplay})</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

// Dedicated single spot for drinks with clean light design
function DrinksSpotlightCard({ item, onOrder }) {
  return (
    <div className="rounded-3xl bg-gradient-to-br from-orange-50/70 via-amber-50/30 to-white border-2 border-orange-200 p-6 sm:p-8 shadow-md hover:shadow-lg transition-all text-gray-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        
        {/* Left: Authentic Drinks Photography */}
        <div className="lg:col-span-5">
          <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-white border border-orange-200 shadow-sm group">
            <img
              src={item.image}
              alt="Authentic Jamaican Island Drinks, Bigga, Cran Wata and Sodas"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 left-3">
              <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md bg-emerald-600 text-white shadow-sm flex items-center gap-1">
                🌴 Direct Jamaican Imports
              </span>
            </div>
            <div className="absolute bottom-3 right-3">
              <span className="font-heading text-xl font-black text-gray-900 px-3 py-1 rounded-xl bg-white/95 backdrop-blur-md border border-gray-200 shadow-sm">
                $1.75 – $3.50
              </span>
            </div>
          </div>
        </div>

        {/* Right: Drinks Breakdown & Order Button */}
        <div className="lg:col-span-7 space-y-4 text-left">
          
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-red-100 text-[#e02e07] text-[11px] font-bold uppercase tracking-wide mb-1.5 border border-red-200">
              <Sparkles className="w-3 h-3 text-[#d97706]" />
              <span>REFRESHING BEVERAGES SELECTION</span>
            </div>
            <h3 className="font-heading text-3xl sm:text-4xl font-black uppercase text-gray-900 leading-none">
              Island Sodas & Cold Beverages
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1.5 leading-relaxed">
              Pair your wings and jerk chicken with authentic Jamaican tropical sodas, Cran Wata, or chilled soft drinks.
            </p>
          </div>

          {/* 2-Column Varieties List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            
            {/* Column 1: Island Sodas */}
            <div className="p-3.5 rounded-xl bg-white border border-orange-200 shadow-sm space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-[#b45309] flex items-center gap-1">
                  <span>🌴 Island Sodas</span>
                </span>
                <span className="text-xs font-bold text-gray-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">$3.50</span>
              </div>
              <ul className="text-xs text-gray-600 space-y-1">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-[#059669]" />
                  <span>Bigga (Pineapple, Fruit Punch, Ginger, Orange, Kola)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-[#059669]" />
                  <span>Ting Sparkling Grapefruit</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-[#059669]" />
                  <span>D&G Cream Soda & Ginger Beer</span>
                </li>
              </ul>
            </div>

            {/* Column 2: Standard Soft Drinks & Water */}
            <div className="p-3.5 rounded-xl bg-white border border-gray-200 shadow-sm space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-gray-800">
                  🥤 Soft Drinks & Water
                </span>
                <span className="text-xs font-bold text-gray-900 bg-gray-100 px-2 py-0.5 rounded border border-gray-200">$1.75 – $2.00</span>
              </div>
              <ul className="text-xs text-gray-600 space-y-1">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-[#059669]" />
                  <span>Canned Pop (Coke, Sprite, Ginger Ale, Nestea, etc.)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-[#059669]" />
                  <span>Jamaican Cranberry Wata</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-[#059669]" />
                  <span>Pure Bottled Spring Water</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Action Row */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-gray-500 font-medium">
              * Served ice-cold with cups upon request
            </span>
            <button
              onClick={onOrder}
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-heading text-lg font-bold uppercase tracking-wider bg-[#e02e07] hover:bg-[#ff481f] text-white shadow-md flex items-center justify-center gap-2 transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Order Drinks</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

// Sub-component for individual dish cards
function MenuItemCard({ item, onOrder, onDetail }) {
  return (
    <div className="rounded-2xl bg-white border border-gray-200 hover:border-red-300 p-4 transition-all duration-200 group flex flex-col justify-between shadow-sm hover:shadow-lg">
      <div>
        
        {/* Photo Container */}
        <div 
          onClick={onDetail}
          className="aspect-4/3 rounded-xl overflow-hidden mb-3 bg-gray-100 relative cursor-pointer"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          
          {/* Price Tag */}
          <div className="absolute top-2.5 right-2.5">
            <span className="font-heading text-lg font-black text-gray-900 px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-md border border-gray-200 shadow-md">
              {item.priceDisplay}
            </span>
          </div>

          {/* Tag */}
          {item.tags?.[0] && (
            <div className="absolute top-2.5 left-2.5">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-black/75 text-yellow-300 backdrop-blur-sm shadow">
                {item.tags[0]}
              </span>
            </div>
          )}
        </div>

        {/* Name & Description */}
        <div className="space-y-1">
          <h3 
            onClick={onDetail}
            className="font-heading text-2xl font-black uppercase text-gray-900 group-hover:text-[#e02e07] transition-colors leading-tight cursor-pointer"
          >
            {item.name}
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
            {item.description}
          </p>
        </div>

      </div>

      {/* Action Footer */}
      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
        <button
          onClick={onDetail}
          className="text-xs text-gray-500 hover:text-gray-900 font-medium underline"
        >
          Details
        </button>

        <button
          onClick={onOrder}
          className="px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-red-50 hover:bg-[#e02e07] text-[#e02e07] hover:text-white transition-colors flex items-center gap-1.5 shadow-sm"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>Add to Order</span>
        </button>
      </div>
    </div>
  );
}
