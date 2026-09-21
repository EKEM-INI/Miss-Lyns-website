import React, { useState, useMemo } from 'react';
import { Flame, ShoppingBag, Search, ArrowLeft, Sparkles } from 'lucide-react';
import { menuCategories, menuItems } from '../data/menuData';
import WingCustomizationModal, { isWingCustomizableItem } from './WingCustomizationModal';

export default function MenuPage({ setCurrentView, openOrderingModal, addToCart }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItemDetail, setSelectedItemDetail] = useState(null);
  const [wingCustomizingItem, setWingCustomizingItem] = useState(null);

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
    if (isWingCustomizableItem(item)) {
      setWingCustomizingItem(item);
      return;
    }

    if (addToCart) {
      addToCart(item);
    }
    openOrderingModal('all', item);
  };

  const handleWingCustomizedConfirm = (customizedItem) => {
    if (addToCart) {
      addToCart(customizedItem);
    }
    openOrderingModal('all', customizedItem);
  };

  return (
    <div className="min-h-screen bg-black pt-6 pb-24 text-white">
      
      {/* Header Banner */}
      <div className="bg-black border-b border-neutral-800 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <button
            onClick={() => setCurrentView('home')}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white mb-4 bg-neutral-900 px-3.5 py-2 rounded-lg border border-neutral-700 shadow-sm transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Homepage
          </button>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-800 text-[#ff481f] text-xs font-bold uppercase tracking-widest mb-2 shadow-sm">
                <span>AUTHENTIC RESTAURANT MENU</span>
              </div>
              <h1 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none">
                OUR COMPLETE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e02e07] via-[#d97706] to-[#b45309]">MENU</span>
              </h1>
              <p className="text-sm sm:text-base text-neutral-400 max-w-xl mt-2">
                Every dish is cooked fresh to order using authentic Jamaican spices and high-quality fresh chicken.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search dishes, wings, sides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#e02e07] shadow-sm"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Sticky Category Filter Tabs Bar */}
      <div className="sticky top-[69px] z-30 bg-black/95 backdrop-blur-md border-b border-neutral-800 py-3 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            
            {/* All Items Pill */}
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                activeCategory === "all"
                  ? 'bg-[#e02e07] text-white shadow-md'
                  : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 border border-neutral-800'
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
                      : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 border border-neutral-800'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-black/40 text-white' : 'bg-neutral-800 text-neutral-400'}`}>
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
          <div className="text-center py-20 rounded-3xl bg-neutral-900 border border-neutral-800 my-8 shadow-sm">
            <p className="text-lg font-bold text-white">No menu items found matching "{searchQuery}"</p>
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
                    <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                      <h2 className="font-heading text-3xl sm:text-4xl font-black uppercase text-white tracking-wide flex items-center gap-2">
                        <span>{cat.name}</span>
                      </h2>
                      <span className="text-xs font-bold text-neutral-400">{itemsInCat.length} {itemsInCat.length === 1 ? 'item' : 'items'}</span>
                    </div>

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
                  </div>
                );
              })
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                  <h2 className="font-heading text-3xl sm:text-4xl font-black uppercase text-white tracking-wide flex items-center gap-2">
                    <span>{menuCategories.find(c => c.id === activeCategory)?.name || "Menu Items"}</span>
                  </h2>
                  <span className="text-xs font-bold text-neutral-400">{filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}</span>
                </div>
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
              </div>
            )}

          </div>
        )}

      </div>

      {/* Item Detail Modal */}
      {selectedItemDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg rounded-3xl bg-neutral-900 border border-neutral-700 p-6 shadow-2xl overflow-hidden animate-fadeIn text-white">
            
            <button
              onClick={() => setSelectedItemDetail(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300"
            >
              ✕
            </button>

            <div className="aspect-4/3 rounded-2xl overflow-hidden mb-5 bg-neutral-950 relative">
              <img
                src={selectedItemDetail.image}
                alt={selectedItemDetail.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 right-3">
                <span className="font-heading text-2xl font-black text-white px-3 py-1 rounded-xl bg-black/90 backdrop-blur-md border border-neutral-700 shadow-md">
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
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-950/80 text-[#ff481f] flex items-center gap-1 border border-red-900">
                    <Flame className="w-3 h-3 text-[#ff481f]" />
                    Spicy Level: {selectedItemDetail.spiceLevel}/3
                  </span>
                )}
              </div>

              <h3 className="font-heading text-3xl font-black uppercase text-white leading-tight">
                {selectedItemDetail.name}
              </h3>

              <p className="text-sm text-neutral-400 leading-relaxed">
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

      {/* Wing Sauce & Style Customization Modal */}
      <WingCustomizationModal
        isOpen={Boolean(wingCustomizingItem)}
        onClose={() => setWingCustomizingItem(null)}
        wingItem={wingCustomizingItem}
        onConfirm={handleWingCustomizedConfirm}
      />

    </div>
  );
}


// Sub-component for individual dish cards
function MenuItemCard({ item, onOrder, onDetail }) {
  return (
    <div className="rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-red-600 p-4 transition-all duration-200 group flex flex-col justify-between shadow-sm hover:shadow-lg">
      <div>
        
        {/* Photo Container */}
        <div 
          onClick={onDetail}
          className="aspect-4/3 rounded-xl overflow-hidden mb-3 bg-neutral-950 relative cursor-pointer"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          
          {/* Price Tag */}
          <div className="absolute top-2.5 right-2.5">
            <span className="font-heading text-lg font-black text-white px-2.5 py-1 rounded-lg bg-black/90 backdrop-blur-md border border-neutral-700 shadow-md">
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
            className="font-heading text-2xl font-black uppercase text-white group-hover:text-[#ff481f] transition-colors leading-tight cursor-pointer"
          >
            {item.name}
          </h3>
          <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2">
            {item.description}
          </p>
        </div>

      </div>

      {/* Action Footer */}
      <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center justify-between">
        <button
          onClick={onDetail}
          className="text-xs text-neutral-400 hover:text-white font-medium underline"
        >
          Details
        </button>

        <button
          onClick={onOrder}
          className="px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-red-950/60 hover:bg-[#e02e07] text-[#ff481f] hover:text-white transition-colors flex items-center gap-1.5 shadow-sm border border-red-900"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>Add to Order</span>
        </button>
      </div>
    </div>
  );
}
