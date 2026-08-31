import React, { useState } from 'react';
import { X, Phone, ShoppingBag, ExternalLink, MapPin, Clock, Sparkles } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantInfo';

export default function OrderingModal({ isOpen, onClose, defaultTab = 'all', orderItem = null }) {
  const [activeTab, setActiveTab] = useState(defaultTab === 'all' ? 'pickup' : defaultTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl rounded-3xl bg-white border border-gray-200 p-6 sm:p-8 shadow-2xl overflow-hidden text-gray-900">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#e02e07] text-xs font-bold uppercase tracking-wider mb-2 border border-red-100">
            <span>🍗 Miss Lyn’s Wings Ordering Hub</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-black uppercase text-gray-900 leading-tight">
            CHOOSE HOW YOU’D LIKE TO ORDER
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            Pick up fresh at 677 King St East or get fast delivery straight to your door.
          </p>
        </div>

        {/* Selected Item Notification if any */}
        {orderItem && (
          <div className="mb-5 p-3 rounded-xl bg-orange-50/80 border border-orange-200 flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 shrink-0 border border-gray-200">
              <img src={orderItem.image} alt={orderItem.name} className="w-full h-full object-cover" />
            </div>
            <div className="text-left flex-1 min-w-0">
              <span className="text-[10px] font-bold text-[#b45309] uppercase block">Selected to Order:</span>
              <h4 className="text-sm font-bold text-gray-900 truncate">{orderItem.name}</h4>
              <span className="text-xs font-bold text-gray-700">{orderItem.priceDisplay}</span>
            </div>
          </div>
        )}

        {/* Order Mode Toggle Tabs */}
        <div className="grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-gray-100 border border-gray-200 mb-6">
          <button
            onClick={() => setActiveTab('pickup')}
            className={`py-3 rounded-xl font-heading text-lg font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
              activeTab === 'pickup'
                ? 'bg-gray-900 text-white shadow-md'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Phone className="w-4 h-4 text-yellow-400" />
            <span>PICKUP (FASTEST)</span>
          </button>

          <button
            onClick={() => setActiveTab('delivery')}
            className={`py-3 rounded-xl font-heading text-lg font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
              activeTab === 'delivery'
                ? 'bg-gradient-to-r from-[#e52516] to-[#e02e07] text-white shadow-md'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>DELIVERY</span>
          </button>
        </div>

        {/* Tab 1: PICKUP Content */}
        {activeTab === 'pickup' && (
          <div className="space-y-4 animate-fadeIn">
            
            {/* Phone Ordering Card */}
            <div className="p-5 rounded-2xl bg-orange-50/60 border-2 border-amber-300 text-left">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-black uppercase tracking-wider text-[#b45309] flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> DIRECT CALL-IN PICKUP
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-[#059669] border border-emerald-200">
                  NO APP FEES
                </span>
              </div>
              <p className="text-xs text-gray-600 mb-4">
                Call our restaurant directly. Your order will be cooked fresh and packed piping hot ready for pickup!
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {restaurantInfo.phones.map((phone, idx) => (
                  <a
                    key={idx}
                    href={`tel:${phone.raw}`}
                    className="p-3.5 rounded-xl bg-white hover:bg-[#d97706] hover:text-white text-gray-900 font-bold transition-all flex items-center gap-3 border border-orange-200 group shadow-sm"
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-100 group-hover:bg-white/20 flex items-center justify-center text-[#d97706] group-hover:text-white">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-heading text-lg leading-tight">{phone.number}</div>
                      <div className="text-[10px] text-gray-500 group-hover:text-white/80">{phone.label}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Address & Hours Summary */}
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-left space-y-2">
              <div className="flex items-center gap-2 text-xs text-gray-700">
                <MapPin className="w-4 h-4 text-[#e02e07] shrink-0" />
                <span>677 King Street East, Hamilton, ON L8N 1E5</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-700">
                <Clock className="w-4 h-4 text-[#d97706] shrink-0" />
                <span>Mon–Fri: 11am–9pm | Sat: 1pm–9pm | Sun: Closed</span>
              </div>
            </div>

            <div className="pt-2 text-center">
              <a
                href={restaurantInfo.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#b45309] hover:underline inline-flex items-center gap-1 font-semibold"
              >
                <span>Open in Google Maps for directions</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>
        )}

        {/* Tab 2: DELIVERY Content */}
        {activeTab === 'delivery' && (
          <div className="space-y-4 animate-fadeIn">
            <p className="text-xs text-gray-600 text-left">
              Select your preferred delivery platform to view our live delivery menu and place your order:
            </p>

            <div className="space-y-3">
              {restaurantInfo.deliveryLinks.map((delivery) => (
                <a
                  key={delivery.platform}
                  href={delivery.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white hover:bg-gray-50 border border-gray-200 hover:border-red-300 transition-all flex items-center justify-between group shadow-sm"
                >
                  <div className="flex items-center gap-3 text-left">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white shadow"
                      style={{ backgroundColor: delivery.color }}
                    >
                      <ShoppingBag className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading text-xl font-bold uppercase text-gray-900 group-hover:text-[#e02e07] transition-colors leading-tight">
                        Order on {delivery.name}
                      </h4>
                      <span className="text-[11px] text-gray-500">{delivery.badgeText}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-700 group-hover:text-gray-950 px-3 py-1.5 rounded-lg bg-gray-100">
                    <span>Order Now</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </a>
              ))}
            </div>

            <p className="text-[11px] text-gray-500 text-center pt-2">
              Delivery operating hours and delivery radius depend on driver availability.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
