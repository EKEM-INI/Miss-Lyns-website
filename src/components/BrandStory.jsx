import React from 'react';
import { Flame, Heart, ShieldCheck, Sparkles, MapPin, Award } from 'lucide-react';

export default function BrandStory({ setCurrentView }) {
  return (
    <section id="about-story" className="py-16 lg:py-24 bg-[#0a0c10] relative overflow-hidden border-t border-white/5">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#ff481f]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Image Collage of Authentic Jamaican Food */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              
              {/* Image 1: Authentic Jerk Chicken */}
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-4/5 bg-black/40 border border-white/10 shadow-xl group">
                  <img
                    src="/images/dishes/0019.jpg"
                    alt="Authentic Jamaican Jerk Chicken"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 rounded-xl bg-[#141720] border border-white/10 text-center">
                  <span className="font-heading text-3xl font-black text-[#fbbf24] block leading-none">100%</span>
                  <span className="text-[11px] uppercase font-bold tracking-wider text-gray-300">Fresh Never Frozen</span>
                </div>
              </div>

              {/* Image 2: Jamaican Patties & Festivals */}
              <div className="space-y-4 pt-6">
                <div className="p-4 rounded-xl bg-[#141720] border border-white/10 text-center">
                  <span className="font-heading text-3xl font-black text-[#ff481f] block leading-none">HAMILTON</span>
                  <span className="text-[11px] uppercase font-bold tracking-wider text-gray-300">677 King St East</span>
                </div>
                <div className="rounded-2xl overflow-hidden aspect-4/5 bg-black/40 border border-white/10 shadow-xl group">
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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 rounded-full bg-[#e52516] text-white shadow-2xl border-4 border-[#0a0c10] flex items-center justify-center font-heading text-center">
              <div className="w-16 h-16 rounded-full border border-dashed border-white/60 flex flex-col items-center justify-center text-[10px] font-black uppercase tracking-tight">
                <span>AUTHENTIC</span>
                <span className="text-yellow-300">JAMAICAN</span>
                <span>RECIPE</span>
              </div>
            </div>
          </div>

          {/* Right Column: Story Copy */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2 text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f59e0b]/15 border border-[#f59e0b]/30 text-[#fbbf24] text-xs font-black uppercase tracking-widest">
              <Heart className="w-3.5 h-3.5 text-[#ff481f] fill-current" />
              <span>THE MISS LYN’S STORY</span>
            </div>

            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.05]">
              CRAFTED WITH PASSION, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff481f] via-[#f59e0b] to-[#fbbf24]">
                AUTHENTIC ISLAND FLAVOUR.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              At <strong className="text-white font-bold">Miss Lyn’s Wings</strong> on King Street East in Hamilton, cooking isn’t just about making food — it’s about sharing authentic Jamaican warmth, aromatic spices, and soul-satisfying comfort.
            </p>

            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Every wing and piece of chicken is marinated using traditional Jamaican techniques — infused with fresh scotch bonnet peppers, pimento, thyme, garlic, and Island herbs. We believe in one simple rule: <span className="text-white font-semibold">Never pre-cook, never hold under lamps. Everything is made hot and fresh to order.</span>
            </p>

            {/* Feature Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#141720] border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-[#ff481f]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Flame className="w-4 h-4 text-[#ff481f]" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-white uppercase">Secret Jerk Blend</h4>
                  <p className="text-xs text-gray-400">Marinated in real herbs and slow-roasted for maximum depth.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#141720] border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-[#10b981]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-[#10b981]" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-white uppercase">Hamilton Community</h4>
                  <p className="text-xs text-gray-400">Proud local kitchen welcoming walk-ins, phone pickups, and delivery.</p>
                </div>
              </div>

            </div>

            <div className="pt-2">
              <button
                onClick={() => setCurrentView('menu')}
                className="px-6 py-3.5 rounded-xl font-heading text-lg font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all inline-flex items-center gap-2"
              >
                <span>EXPLORE OUR COMPLETE MENU</span>
                <span className="text-yellow-300">→</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
