import React from 'react';
import { Phone, ShoppingBag } from 'lucide-react';

export default function FloatingOrderBar({ openOrderingModal }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-3 bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-2xl animate-slideUp">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        <button
          onClick={() => openOrderingModal('pickup')}
          className="py-3 px-4 rounded-xl font-heading text-lg font-bold uppercase tracking-wider bg-gray-100 text-gray-900 border border-gray-300 flex items-center justify-center gap-2 active:scale-95 transition-all shadow-sm"
        >
          <Phone className="w-4 h-4 text-[#d97706]" />
          <span>PICKUP</span>
        </button>

        <button
          onClick={() => openOrderingModal('delivery')}
          className="py-3 px-4 rounded-xl font-heading text-lg font-extrabold uppercase tracking-wider bg-gradient-to-r from-[#e52516] to-[#e02e07] text-white flex items-center justify-center gap-2 active:scale-95 transition-all shadow-md shadow-[#e52516]/25"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>DELIVERY</span>
        </button>
      </div>
    </div>
  );
}
