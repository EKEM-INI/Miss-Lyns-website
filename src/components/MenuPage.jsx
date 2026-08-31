import React, { useState, useMemo } from 'react';
import { Flame, ShoppingBag, Search, ArrowLeft } from 'lucide-react';
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
                      <span className="text-xs font-bold text-gray-500">{itemsInCat.length} items</span>
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
