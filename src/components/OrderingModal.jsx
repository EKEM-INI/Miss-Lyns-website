import React, { useState, useEffect } from 'react';
import { X, Phone, ShoppingBag, ExternalLink, MapPin, Clock, Sparkles, Check, Copy, Plus, Minus, Trash2, ArrowRight, MessageSquare } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantInfo';

export default function OrderingModal({ 
  isOpen, 
  onClose, 
  defaultTab = 'delivery', 
  orderItem = null,
  cart = [],
  updateCartQuantity,
  removeFromCart,
  clearCart
}) {
  const [activeTab, setActiveTab] = useState(defaultTab === 'all' ? (cart.length > 0 ? 'cart' : 'delivery') : defaultTab);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      if (defaultTab === 'all') {
        setActiveTab(cart.length > 0 ? 'cart' : 'delivery');
      } else {
        setActiveTab(defaultTab);
      }
    }
  }, [isOpen, defaultTab, cart.length]);

  if (!isOpen) return null;

  // Build combined items list
  const activeItems = cart.length > 0 ? cart : (orderItem ? [{ ...orderItem, quantity: 1 }] : []);
  
  const subtotal = activeItems.reduce((acc, item) => {
    const qty = item.quantity || 1;
    return acc + (item.price * qty);
  }, 0);

  const tax = subtotal * 0.13;
  const total = subtotal + tax;

  // Generate clean order text summary for SMS or copying
  const generateOrderSummaryText = () => {
    if (activeItems.length === 0) {
      return `Hi Miss Lyn's Wings, I would like to place a pickup order at 677 King Street East.`;
    }

    let summary = `🍗 MISS LYN'S WINGS ORDER\n`;
    summary += `---------------------------\n`;
    summary += `Order Type: ${activeTab === 'pickup' ? 'PICKUP' : 'DELIVERY'}\n`;
    summary += `---------------------------\nITEMS ORDERED:\n`;
    
    activeItems.forEach((item, index) => {
      const qty = item.quantity || 1;
      summary += `${index + 1}. ${qty}x ${item.name} ($${(item.price * qty).toFixed(2)})\n`;
      if (item.details) {
        if (item.details.style) summary += `   • Style: ${item.details.style}\n`;
        if (item.details.sauce) summary += `   • Sauce: ${item.details.sauce}\n`;
        if (item.details.protein) summary += `   • Protein: ${item.details.protein}\n`;
        if (item.details.side) summary += `   • Side: ${item.details.side}\n`;
        if (item.details.drink) summary += `   • Drink: ${item.details.drink}\n`;
      }
    });

    summary += `---------------------------\n`;
    summary += `Subtotal: $${subtotal.toFixed(2)}\n`;
    summary += `HST (13%): $${tax.toFixed(2)}\n`;
    summary += `Estimated Total: $${total.toFixed(2)}\n`;
    summary += `\nPickup Location: 677 King Street East, Hamilton\n`;
    return summary;
  };

  const handleCopyOrder = () => {
    const text = generateOrderSummaryText();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl max-h-[90vh] rounded-3xl bg-neutral-900 border border-neutral-700 shadow-2xl overflow-y-auto text-white p-5 sm:p-7">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Badge */}
        <div className="text-center mb-4 pt-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/80 text-[#ff481f] text-xs font-bold uppercase tracking-wider mb-2 border border-red-900">
            <span>🍗 Miss Lyn’s Wings</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-black uppercase text-white leading-tight">
            {activeTab === 'delivery' && 'ORDER DELIVERY'}
            {activeTab === 'pickup' && 'ORDER PICKUP'}
            {activeTab === 'cart' && 'YOUR SELECTED ITEMS'}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-lg mx-auto">
            {activeTab === 'delivery' && 'Select your preferred delivery platform below to order directly from Miss Lyn’s Wings:'}
            {activeTab === 'pickup' && 'Call our King Street East counter directly to place your order for pickup.'}
            {activeTab === 'cart' && 'Review your items and choose whether you would like Delivery or Pickup.'}
          </p>
        </div>

        {/* Main Tab Selector (Delivery / Pickup / My Items) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-1.5 rounded-2xl bg-neutral-950 border border-neutral-800 mb-6">
          <button
            type="button"
            onClick={() => setActiveTab('delivery')}
            className={`py-2.5 px-3 rounded-xl font-heading text-sm sm:text-base font-black uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'delivery'
                ? 'bg-gradient-to-r from-[#e52516] to-[#e02e07] text-white shadow-md'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Delivery</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('pickup')}
            className={`py-2.5 px-3 rounded-xl font-heading text-sm sm:text-base font-black uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'pickup'
                ? 'bg-neutral-800 text-white shadow-md border border-neutral-700'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
            }`}
          >
            <Phone className="w-4 h-4 text-yellow-400" />
            <span>Pickup</span>
          </button>

          {activeItems.length > 0 && (
            <button
              type="button"
              onClick={() => setActiveTab('cart')}
              className={`col-span-2 sm:col-span-1 py-2.5 px-3 rounded-xl font-heading text-sm sm:text-base font-black uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'cart'
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
              }`}
            >
              <span>Items ({activeItems.length})</span>
            </button>
          )}
        </div>


        {/* ================= VIEW 1: DIRECT DELIVERY PARTNERS LIST ================= */}
        {activeTab === 'delivery' && (
          <div className="space-y-4 animate-fadeIn text-left">
            
            {/* 3 Platform Direct Action Links */}
            <div className="space-y-3">
              
              {/* 1. UBER EATS */}
              <a
                href="https://www.ubereats.com/ca/store/miss-lyns-wings/yBWauh9NX4isUfrQt-wp4g?srsltid=AfmBOooSdT1IRgG79ndrOu6f-phUGzMRLmKZXXr_s5DVmOVpGoUdu_2L"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-600 to-green-700 text-white hover:from-emerald-500 hover:to-green-600 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3.5 shadow-lg border border-emerald-400 group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center font-bold text-lg shadow-md shrink-0">
                    <ShoppingBag className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-black/30 text-[10px] font-bold uppercase tracking-wider text-emerald-200 mb-0.5">
                      <span>✨ Official Delivery Partner</span>
                    </div>
                    <h3 className="font-heading text-2xl font-black uppercase text-white leading-tight">
                      Uber Eats
                    </h3>
                    <p className="text-xs text-emerald-100">
                      Direct store page with full menu & live tracking
                    </p>
                  </div>
                </div>

                <div className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white text-emerald-950 font-heading text-sm font-black uppercase tracking-wider group-hover:bg-yellow-300 transition-all shadow-md flex items-center justify-center gap-1.5 shrink-0">
                  <span>Order on Uber Eats</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>

              {/* 2. DOORDASH */}
              <a
                href="https://www.doordash.com/en/store/miss-lynn's-wings-hamilton-652454/907076/?srsltid=AfmBOopu-l9BrXy39xGrXawHIrAYgPK1ofC-AIOHQjuBNW-VzL4Ap11e"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#FF3008] to-[#D92200] text-white hover:from-[#ff4824] hover:to-[#eb2703] transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3.5 shadow-lg border border-red-400 group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-white text-[#FF3008] flex items-center justify-center font-black text-2xl shadow-md shrink-0">
                    <ShoppingBag className="w-6 h-6 text-[#FF3008]" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-black/25 text-[10px] font-bold uppercase tracking-wider text-orange-100 mb-0.5">
                      <span>✨ Official Delivery Partner</span>
                    </div>
                    <h3 className="font-heading text-2xl font-black uppercase text-white leading-tight">
                      DoorDash
                    </h3>
                    <p className="text-xs text-orange-100">
                      Direct store page with custom combo delivery
                    </p>
                  </div>
                </div>

                <div className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white text-[#FF3008] font-heading text-sm font-black uppercase tracking-wider group-hover:bg-yellow-300 group-hover:text-gray-900 transition-all shadow-md flex items-center justify-center gap-1.5 shrink-0">
                  <span>Order on DoorDash</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>

              {/* 3. SKIPTHEDISHES */}
              <a
                href="https://www.skipthedishes.com/miss-lyns-wings"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#D41D24] to-[#B3141A] text-white hover:from-[#e5252c] hover:to-[#c4181f] transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3.5 shadow-lg border border-red-400 group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-white text-[#D41D24] flex items-center justify-center font-black text-2xl shadow-md shrink-0">
                    <ShoppingBag className="w-6 h-6 text-[#D41D24]" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-black/25 text-[10px] font-bold uppercase tracking-wider text-red-100 mb-0.5">
                      <span>✨ Official Delivery Partner</span>
                    </div>
                    <h3 className="font-heading text-2xl font-black uppercase text-white leading-tight">
                      SkipTheDishes
                    </h3>
                    <p className="text-xs text-red-100">
                      Direct store page with fast local delivery
                    </p>
                  </div>
                </div>

                <div className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white text-[#D41D24] font-heading text-sm font-black uppercase tracking-wider group-hover:bg-yellow-300 group-hover:text-gray-900 transition-all shadow-md flex items-center justify-center gap-1.5 shrink-0">
                  <span>Order on SkipTheDishes</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>

            </div>

            {/* Optional Cart Summary Box if items selected */}
            {activeItems.length > 0 && (
              <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 mt-4 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-amber-400">
                    📋 Your Configured Dishes ({activeItems.length})
                  </span>
                  <button
                    onClick={handleCopyOrder}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold uppercase bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-white shadow-sm transition-all"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-amber-400" />
                        <span>Copy Order Details</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="text-xs text-neutral-300 space-y-1">
                  {activeItems.map((item, idx) => (
                    <div key={idx} className="flex justify-between font-medium">
                      <span>{item.quantity || 1}x {item.name}</span>
                      <span className="font-bold text-white">${((item.price) * (item.quantity || 1)).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Store Contact Info */}
            <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-2 mt-4">
              <span>Have questions about menu items or delivery?</span>
              <a href="tel:9055225967" className="font-bold text-white hover:text-[#e02e07] flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[#fbbf24]" />
                <span>Call Store: (905) 522-5967</span>
              </a>
            </div>

          </div>
        )}


        {/* ================= VIEW 2: DIRECT STORE PICKUP ================= */}
        {activeTab === 'pickup' && (
          <div className="space-y-4 animate-fadeIn text-left">
            
            {/* Primary Call & Text Action Card */}
            <div className="p-6 rounded-3xl bg-neutral-950 text-white space-y-4 shadow-xl border border-neutral-800">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-yellow-400">
                <Phone className="w-4 h-4" />
                <span>Call or Text Store for Fast Pickup</span>
              </div>
              
              <div>
                <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white leading-tight">
                  (905) 522-5967
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 mt-1">
                  Call or send an SMS text message to our kitchen directly to place your pickup order. When texting, your order summary is pre-filled automatically!
                </p>
              </div>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="tel:9055225967"
                  className="py-3.5 px-5 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-gray-950 font-heading text-base font-black uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (905) 522-5967</span>
                </a>

                <a
                  href={`sms:+19055225967?&body=${encodeURIComponent(generateOrderSummaryText())}`}
                  className="py-3.5 px-5 rounded-2xl bg-gradient-to-r from-[#e02e07] to-[#e52516] hover:from-[#f03525] hover:to-[#ff481f] text-white font-heading text-base font-black uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Text Order (SMS)</span>
                </a>
              </div>
            </div>

            {/* Store Location & Hours */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800">
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-amber-400 mb-1">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>Pickup Location</span>
                </div>
                <div className="text-sm font-bold text-white">677 King Street East</div>
                <div className="text-xs text-neutral-400">Hamilton, ON L8N 1E5</div>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800">
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-amber-400 mb-1">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Pickup Hours</span>
                </div>
                <div className="text-xs font-bold text-white">Mon – Fri: 11:00 AM – 9:00 PM</div>
                <div className="text-xs text-neutral-400">Sat: 1:00 PM – 9:00 PM • Sun: Closed</div>
              </div>
            </div>

            {/* Optional Cart Items Breakdown for Phone Call */}
            {activeItems.length > 0 && (
              <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-2.5 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-amber-400">
                    📋 Your Order for the Call ({activeItems.length} Items)
                  </span>
                  <button
                    onClick={handleCopyOrder}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold uppercase bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-white shadow-sm transition-all"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-amber-400" />
                        <span>Copy Details</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="text-xs text-neutral-300 space-y-1 max-h-32 overflow-y-auto pr-1">
                  {activeItems.map((item, idx) => (
                    <div key={idx} className="flex justify-between py-0.5 border-b border-neutral-800 last:border-0">
                      <span>{item.quantity || 1}x {item.name}</span>
                      <span className="font-bold text-white">${((item.price) * (item.quantity || 1)).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-2 border-t border-neutral-800 flex justify-between text-xs font-black text-white">
                  <span>Estimated Total (incl. HST):</span>
                  <span className="text-[#ff481f] text-sm">${total.toFixed(2)}</span>
                </div>
              </div>
            )}

          </div>
        )}


        {/* ================= VIEW 3: CART REVIEW ================= */}
        {activeTab === 'cart' && (
          <div className="space-y-4 animate-fadeIn text-left">
            
            {activeItems.length === 0 ? (
              <div className="py-10 text-center rounded-2xl bg-neutral-950 border border-neutral-800">
                <ShoppingBag className="w-10 h-10 text-neutral-600 mx-auto mb-2" />
                <h4 className="font-heading text-lg font-bold text-white">Your Cart is Empty</h4>
                <p className="text-xs text-neutral-400 max-w-xs mx-auto mt-1 mb-4">
                  Add dishes from our menu or combo builder to review them here.
                </p>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl font-heading text-sm font-bold uppercase bg-[#e02e07] text-white shadow hover:bg-[#c02604] transition-colors"
                >
                  Explore Menu
                </button>
              </div>
            ) : (
              <>
                {/* Item List */}
                <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
                  {activeItems.map((item, index) => {
                    const qty = item.quantity || 1;
                    return (
                      <div
                        key={index}
                        className="p-3 rounded-2xl bg-neutral-950 border border-neutral-800 shadow-sm flex items-center justify-between gap-3"
                      >
                        <div className="w-12 h-12 rounded-xl overflow-hidden bg-neutral-900 shrink-0 border border-neutral-800">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h4 className="font-heading text-base font-bold text-white leading-tight truncate">
                            {item.name}
                          </h4>
                          {item.details && (
                            <p className="text-[10px] text-neutral-400 leading-tight truncate">
                              {item.details.sauce && <strong className="text-amber-400 font-bold">{item.details.sauce} • </strong>}
                              {item.details.style && `${item.details.style} • `}
                              {item.details.protein && `${item.details.protein} • `}
                              {item.details.side && `${item.details.side} • `}
                              {item.details.drink && `${item.details.drink}`}
                            </p>
                          )}
                          <span className="text-xs font-black text-[#ff481f]">
                            ${(item.price * qty).toFixed(2)}
                          </span>
                        </div>

                        {/* Quantity Controls */}
                        {updateCartQuantity && (
                          <div className="flex items-center gap-1.5 shrink-0">
                            <button
                              onClick={() => updateCartQuantity(index, -1)}
                              className="w-7 h-7 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 flex items-center justify-center"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="font-heading text-sm font-bold text-white w-4 text-center">
                              {qty}
                            </span>
                            <button
                              onClick={() => updateCartQuantity(index, 1)}
                              className="w-7 h-7 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 flex items-center justify-center"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                            {removeFromCart && (
                              <button
                                onClick={() => removeFromCart(index)}
                                className="p-1 text-neutral-400 hover:text-red-400 transition-colors ml-1"
                                title="Remove Item"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Price Breakdown */}
                <div className="p-3.5 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-1 text-xs text-neutral-300">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span className="font-bold text-white">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Tax (13% HST):</span>
                    <span className="font-bold text-white">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-base font-black text-white pt-1.5 border-t border-neutral-800">
                    <span>Estimated Total:</span>
                    <span className="text-[#ff481f]">${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Proceed Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  <button
                    onClick={() => setActiveTab('delivery')}
                    className="py-3 px-4 rounded-xl font-heading text-sm font-black uppercase tracking-wider bg-gradient-to-r from-[#e52516] to-[#e02e07] text-white shadow-md flex items-center justify-center gap-1.5 hover:from-[#d02012] hover:to-[#c02604] transition-all"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Order Delivery (Uber / DD / Skip)</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('pickup')}
                    className="py-3 px-4 rounded-xl font-heading text-sm font-black uppercase tracking-wider bg-neutral-800 hover:bg-neutral-700 text-white shadow-md border border-neutral-700 flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Phone className="w-4 h-4 text-yellow-400" />
                    <span>Order Pickup ((905) 522-5967)</span>
                  </button>
                </div>
              </>
            )}

          </div>
        )}

      </div>
    </div>
  );
}
