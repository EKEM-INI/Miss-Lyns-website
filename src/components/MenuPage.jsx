import React, { useState, useMemo } from 'react';
import { Flame, Sparkles, ShoppingBag, Plus, Filter, Search, ArrowLeft, Check, Phone } from 'lucide-react';
import { menuCategories, menuItems } from '../data/menuData';

export default function MenuPage({ setCurrentView, openOrderingModal, addToCart }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItemDetail, setSelectedItemDetail] = useState(null);

  // Filter items based on active category and search
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
    <div className="min-h-screen bg-[#0d0f14] pt-6 pb-24 text-white">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-b from-[#161a24] to-[#0d0f14] border-b border-white/10 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <button
            onClick={() => setCurrentView('home')}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-white mb-4 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Homepage
          </button>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff481f]/15 border border-[#ff481f]/30 text-[#ff481f] text-xs font-bold uppercase tracking-widest mb-2">
                <span>AUTHENTIC RESTAURANT MENU</span>
              </div>
              <h1 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none">
                OUR COMPLETE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff481f] via-[#f59e0b] to-[#fbbf24]">MENU</span>
              </h1>
              <p className="text-sm sm:text-base text-gray-300 max-w-xl mt-2">
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
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#141720] border border-white/15 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#ff481f]"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Sticky Category Filter Tabs Bar */}
      <div className="sticky top-[69px] z-30 bg-[#0d0f14]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            
            {/* All Items Pill */}
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                activeCategory === "all"
                  ? 'bg-[#ff481f] text-white shadow-lg shadow-[#ff481f]/30'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
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
                      ? 'bg-[#ff481f] text-white shadow-lg shadow-[#ff481f]/30'
                      : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-black/30 text-white' : 'bg-white/10 text-gray-400'}`}>
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
          <div className="text-center py-20 rounded-3xl bg-[#141720] border border-white/10 my-8">
            <p className="text-lg font-bold text-gray-300">No menu items found matching "{searchQuery}"</p>
            <button
              onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
              className="mt-4 px-4 py-2 rounded-xl text-xs font-bold uppercase bg-[#ff481f] text-white"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            
            {/* If "all" is selected, group logically by categories with headings */}
            {activeCategory === "all" ? (
              menuCategories.map((cat) => {
                const itemsInCat = filteredItems.filter(i => i.categoryId === cat.id);
                if (itemsInCat.length === 0) return null;

                return (
                  <div key={cat.id} className="space-y-6">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <h2 className="font-heading text-3xl sm:text-4xl font-black uppercase text-white tracking-wide flex items-center gap-2">
                        <span>{cat.name}</span>
                      </h2>
                      <span className="text-xs font-bold text-gray-400">{itemsInCat.length} items</span>
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
            )}

          </div>
        )}

      </div>

      {/* Item Detail Modal */}
      {selectedItemDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg rounded-3xl bg-[#141720] border-2 border-white/10 p-6 shadow-2xl overflow-hidden animate-fadeIn">
            
            <button
              onClick={() => setSelectedItemDetail(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-gray-300 hover:text-white hover:bg-black"
            >
              ✕
            </button>

            <div className="aspect-4/3 rounded-2xl overflow-hidden mb-5 bg-black/50 relative">
              <img
                src={selectedItemDetail.image}
                alt={selectedItemDetail.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 right-3">
                <span className="font-heading text-2xl font-black text-white px-3 py-1 rounded-xl bg-black/80 backdrop-blur-md border border-white/20">
                  {selectedItemDetail.priceDisplay}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-[#ff481f] text-white">
                  {selectedItemDetail.tags?.[0] || "Fresh Item"}
                </span>
                {selectedItemDetail.spiceLevel > 0 && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#e52516]/90 text-white flex items-center gap-1">
                    <Flame className="w-3 h-3 text-yellow-300" />
                    Spicy Level: {selectedItemDetail.spiceLevel}/3
                  </span>
                )}
              </div>

              <h3 className="font-heading text-3xl font-black uppercase text-white leading-tight">
                {selectedItemDetail.name}
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed">
                {selectedItemDetail.description}
              </p>

              <div className="pt-4 flex items-center gap-3">
                <button
                  onClick={() => {
                    handleItemOrder(selectedItemDetail);
                    setSelectedItemDetail(null);
                  }}
                  className="flex-1 py-3.5 rounded-xl font-heading text-xl font-bold uppercase tracking-wider bg-gradient-to-r from-[#ff481f] to-[#e52516] hover:from-[#ff5e36] hover:to-[#f03525] text-white shadow-lg flex items-center justify-center gap-2"
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

// Sub-component for individual item card
function MenuItemCard({ item, onOrder, onDetail }) {
  return (
    <div className="rounded-2xl bg-[#141720] border border-white/10 hover:border-[#ff481f]/40 p-4 transition-all duration-200 group flex flex-col justify-between hover:shadow-xl hover:shadow-black/60">
      <div>
        
        {/* Photo Container */}
        <div 
          onClick={onDetail}
          className="aspect-4/3 rounded-xl overflow-hidden mb-3 bg-black/40 relative cursor-pointer"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          
          {/* Price Tag */}
          <div className="absolute top-2.5 right-2.5">
            <span className="font-heading text-lg font-black text-white px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/20 shadow-md">
              {item.priceDisplay}
            </span>
          </div>

          {/* Tag */}
          {item.tags?.[0] && (
            <div className="absolute top-2.5 left-2.5">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-black/70 text-yellow-300 backdrop-blur-sm border border-yellow-300/30">
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
          <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
            {item.description}
          </p>
        </div>

      </div>

      {/* Action Footer */}
      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
        <button
          onClick={onDetail}
          className="text-xs text-gray-400 hover:text-white font-medium underline"
        >
          Details
        </button>

        <button
          onClick={onOrder}
          className="px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-[#ff481f] text-white transition-colors flex items-center gap-1.5 shadow-sm"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>Add to Order</span>
        </button>
      </div>
    </div>
  );
}
