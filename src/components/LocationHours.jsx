import React from 'react';
import { MapPin, Phone, Clock, ExternalLink, Navigation } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantInfo';

export default function LocationHours({ openOrderingModal }) {
  return (
    <section id="location-hours" className="py-16 lg:py-24 bg-black text-white relative overflow-hidden border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-xs font-bold uppercase tracking-widest shadow-sm">
            <MapPin className="w-3.5 h-3.5" />
            <span>VISIT OR ORDER DIRECT</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
            LOCATION & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e02e07] to-[#d97706]">HOURS</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            Conveniently located in the heart of Hamilton on King Street East.
          </p>
        </div>

        {/* 2-Column Info & Map Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Card Column */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            
            {/* Address Box */}
            <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 text-left space-y-3 shadow-sm">
              <div className="flex items-center gap-3 text-[#ff481f]">
                <div className="w-10 h-10 rounded-xl bg-red-950/80 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-neutral-400 font-bold block">Restaurant Address</span>
                  <h3 className="font-heading text-2xl font-black text-white">677 KING STREET EAST</h3>
                </div>
              </div>
              <p className="text-sm text-neutral-300 pl-13">
                Hamilton, Ontario L8N 1E5, Canada
              </p>
              <div className="pt-2 pl-13 flex flex-wrap gap-2">
                <a
                  href={restaurantInfo.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700 transition-colors inline-flex items-center gap-1.5"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#d97706]" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Hours Box */}
            <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 text-left space-y-3 shadow-sm">
              <div className="flex items-center gap-3 text-[#d97706]">
                <div className="w-10 h-10 rounded-xl bg-amber-950/80 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-neutral-400 font-bold block">Opening Hours</span>
                  <h3 className="font-heading text-2xl font-black text-white">OPERATING SCHEDULE</h3>
                </div>
              </div>
              
              <div className="space-y-2 pt-1 pl-13">
                {restaurantInfo.hours.map((h, i) => (
                  <div key={i} className="flex items-center justify-between text-xs sm:text-sm py-1.5 border-b border-neutral-800 last:border-0">
                    <span className="font-bold text-neutral-300">{h.days}</span>
                    <span className={h.isOpenToday ? "text-amber-400 font-bold" : "text-red-400 font-semibold"}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Clickable Phone Call Box */}
            <div className="p-6 rounded-2xl bg-neutral-900 border-2 border-neutral-800 text-left space-y-3 shadow-sm">
              <div className="flex items-center gap-3 text-[#ff481f]">
                <div className="w-10 h-10 rounded-xl bg-red-950/80 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-amber-400 font-bold block">Order Ahead By Phone</span>
                  <h3 className="font-heading text-2xl font-black text-white">CALL TO PLACE PICKUP</h3>
                </div>
              </div>

              <div className="pt-2">
                {restaurantInfo.phones.map((p, idx) => (
                  <a
                    key={idx}
                    href={`tel:${p.raw}`}
                    className="p-3.5 rounded-xl bg-neutral-950 hover:bg-[#e02e07] hover:text-white text-white transition-all flex items-center justify-between border border-neutral-800 group shadow-sm"
                  >
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-5 h-5 text-[#d97706] group-hover:text-white" />
                      <div>
                        <div className="font-heading text-xl font-bold leading-none text-white">{p.number}</div>
                        <div className="text-xs text-neutral-400 group-hover:text-white/80">{p.label}</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#ff481f] group-hover:text-white bg-red-950/80 group-hover:bg-white/20 px-3 py-1 rounded-lg border border-red-900/60 group-hover:border-transparent">
                      Tap to Call
                    </span>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Interactive Map Embed Column */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative rounded-2xl overflow-hidden bg-neutral-900 border-2 border-neutral-800 shadow-md flex-1 min-h-[380px] flex flex-col justify-between">
              
              {/* Stylized Google Map iframe */}
              <iframe
                title="Miss Lyn's Wings Location Map"
                src="https://maps.google.com/maps?q=677+King+Street+East+Hamilton+Ontario&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="w-full h-full min-h-[320px] border-0 opacity-90 hover:opacity-100 transition-all duration-500"
                loading="lazy"
              ></iframe>

              {/* Overlay Badge */}
              <div className="p-4 bg-neutral-900/95 backdrop-blur-md border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                <div>
                  <h4 className="font-heading text-xl font-bold uppercase text-white">
                    MISS LYN’S WINGS • HAMILTON
                  </h4>
                  <p className="text-xs text-neutral-400">Street parking and curbside pickup available.</p>
                </div>
                <button
                  onClick={() => openOrderingModal('pickup')}
                  className="px-5 py-2.5 rounded-xl font-heading text-lg font-bold uppercase bg-[#e02e07] hover:bg-[#ff481f] text-white shadow-md shrink-0"
                >
                  START PICKUP ORDER
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
