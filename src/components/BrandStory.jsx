import React from 'react';
import { Heart, Flame, ShieldCheck, ArrowRight } from 'lucide-react';

export default function BrandStory({ setCurrentView }) {
  return (
    <section id="about-story" className="py-16 lg:py-24 bg-gray-50 relative overflow-hidden border-t border-gray-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Image Collage */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-4/5 bg-gray-100 border border-gray-200 shadow-md group">
                  <img
                    src="/images/dishes/0019.jpg"
                    alt="Authentic Jamaican Jerk Chicken"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 rounded-xl bg-white border border-gray-200 text-center shadow-sm">
                  <span className="font-heading text-3xl font-black text-[#d97706] block leading-none">100%</span>
                  <span className="text-[11px] uppercase font-bold tracking-wider text-gray-600">Fresh Never Frozen</span>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="p-4 rounded-xl bg-white border border-gray-200 text-center shadow-sm">
                  <span className="font-heading text-3xl font-black text-[#e02e07] block leading-none">HAMILTON</span>
                  <span className="text-[11px] uppercase font-bold tracking-wider text-gray-600">677 King St East</span>
                </div>
                <div className="rounded-2xl overflow-hidden aspect-4/5 bg-gray-100 border border-gray-200 shadow-md group">
                  <img
                    src="/images/dishes/0057.jpg"
                    alt="Golden Flaky Jamaican Patties"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>

            {/* Floating Stamp */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 rounded-full bg-[#e52516] text-white shadow-xl border-4 border-white flex items-center justify-center font-heading text-center">
              <div className="w-16 h-16 rounded-full border border-dashed border-white/70 flex flex-col items-center justify-center text-[10px] font-black uppercase tracking-tight">
                <span>AUTHENTIC</span>
                <span className="text-yellow-200">JAMAICAN</span>
                <span>RECIPE</span>
              </div>
            </div>
          </div>

          {/* Right Column: Story Copy */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2 text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-[#b45309] text-xs font-black uppercase tracking-widest shadow-sm">
              <Heart className="w-3.5 h-3.5 text-[#e02e07] fill-current" />
              <span>ABOUT US</span>
            </div>

            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-gray-900 leading-[1.05]">
              CANADIAN COMFORT. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e02e07] via-[#d97706] to-[#b45309]">
                JAMAICAN SOUL. MADE WITH LOVE.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Inspired by the warmth of <strong className="text-gray-950 font-bold">Grandma Hazel’s kitchen</strong> and crafted for the Hamilton community, Miss Lyn’s Wings is where Canadian comfort food meets authentic Jamaican soul.
            </p>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Our restaurant is named in loving memory of <strong className="text-gray-900 font-semibold">Hazel Russell</strong>, known affectionately as <em>“Miss Lyn.”</em> In her final days, Miss Lyn worked alongside her grandson and founder, Dwayne Ashley, sharing her techniques, secret spice blends, and the philosophy that great food cannot be rushed.
            </p>

            <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-sm text-[#b45309] font-medium italic">
              «“Grandma’s Sunday dinner tasted so good because the preparation started on Saturday.”»
            </div>

            <div className="pt-2">
              <button
                onClick={() => setCurrentView('about')}
                className="px-6 py-3.5 rounded-xl font-heading text-lg font-bold uppercase tracking-wider bg-gray-900 hover:bg-black text-white shadow transition-all inline-flex items-center gap-2"
              >
                <span>READ OUR FULL STORY & PHILOSOPHY</span>
                <ArrowRight className="w-4 h-4 text-yellow-400" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
