import React from 'react';
import { Phone, ShoppingBag } from 'lucide-react';

export default function FloatingOrderBar({ openOrderingModal }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-3 bg-[#0d0f14]/95 backdrop-blur-lg border-t border-white/10 shadow-2xl animate-slideUp">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        <button
          onClick={() => openOrderingModal('pickup')}
          className="py-3 px-4 rounded-xl font-heading text-lg font-bold uppercase tracking-wider bg-[#1c212c] text-white border border-white/15 flex items-center justify-center gap-2 active:scale-95 transition-all shadow-md"
        >
          <Phone className="w-4 h-4 text-[#fbbf24]" />
          <span>PICKUP</span>
        </button>

        <button
          onClick={() => openOrderingModal('delivery')}
          className="py-3 px-4 rounded-xl font-heading text-lg font-extrabold uppercase tracking-wider bg-gradient-to-r from-[#ff481f] to-[#e52516] text-white flex items-center justify-center gap-2 active:scale-95 transition-all shadow-lg shadow-[#e52516]/30"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>DELIVERY</span>
        </button>
      </div>
    </div>
  );
}
