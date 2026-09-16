import React from 'react';
import { ArrowLeft, Flame, Heart, Sparkles, MapPin, Phone, ShoppingBag, Utensils, Star, ShieldCheck } from 'lucide-react';

export default function AboutPage({ setCurrentView, openOrderingModal }) {
  return (
    <div className="min-h-screen bg-black text-white pt-6 pb-24">
      
      {/* Top Banner */}
      <div className="bg-black border-b border-neutral-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="flex justify-center mb-6">
            <button
              onClick={() => setCurrentView('home')}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white bg-neutral-900 px-4 py-2 rounded-xl border border-neutral-700 shadow-sm transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Homepage
            </button>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/60 border border-red-800 text-[#ff481f] text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            <Heart className="w-3.5 h-3.5 text-[#e02e07] fill-current" />
            <span>ABOUT US</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none">
            MISS LYN’S <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e02e07] via-[#d97706] to-[#b45309]">WINGS</span>
          </h1>

          <p className="font-heading text-2xl sm:text-3xl font-bold text-amber-400 uppercase tracking-wide mt-3">
            Canadian Comfort. Jamaican Soul. Made with Love.
          </p>

          <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto mt-4 leading-relaxed">
            Inspired by the warmth of Grandma Hazel’s kitchen and crafted for the Hamilton community, Miss Lyn’s Wings is where Canadian comfort food meets authentic Jamaican soul.
          </p>

        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* SECTION 1: Our Story / A Grandmother's Legacy */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-neutral-800 pb-3">
            <span className="text-2xl">👵🏾</span>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#ff481f] block">OUR STORY</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-black uppercase text-white">
                A Grandmother’s Legacy
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4 text-base text-neutral-300 leading-relaxed">
              <p>
                At Miss Lyn’s Wings, every recipe begins with family.
              </p>
              <p>
                Our restaurant is named in loving memory of <strong className="text-white font-bold">Hazel Russell</strong>, known affectionately to her neighbourhood, friends, and family as <em>“Miss Lyn.”</em>
              </p>
              <p>
                Back home in Jamaica, Miss Lyn was the heart of her community. Her home was an open door, and her dinner table always had room for anyone in need of a good meal—whether they were a lifelong neighbour or simply a passing stranger.
              </p>
              <p>
                To her family and founders, she wasn't just Grandma. She was the greatest chef they had ever known.
              </p>
              <p>
                When setting out to open a restaurant of our own, our team turned to the master herself. In her final days, Miss Lyn worked alongside her family, sharing her techniques, secret spice blends, and the philosophy that great food cannot be rushed.
              </p>
              <p className="font-semibold text-amber-300 bg-neutral-900 p-4 rounded-xl border border-amber-800/60">
                Miss Lyn’s Wings was born to carry that spirit forward—serving soulful, unforgettable comfort food that makes you feel right at home.
              </p>
            </div>

            <div className="md:col-span-5 space-y-3">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-neutral-800 aspect-4/5 bg-neutral-950">
                <img
                  src="/images/dishes/0019.jpg"
                  alt="Authentic Jamaican Jerk Chicken plate"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center text-xs text-neutral-400 italic">
                Crafted with Hazel Russell’s authentic Jamaican recipes
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: Our Kitchen Philosophy */}
        <section className="space-y-6 pt-4 border-t border-neutral-800">
          <div className="flex items-center gap-3 border-b border-neutral-800 pb-3">
            <span className="text-2xl">🍳</span>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#d97706] block">OUR KITCHEN PHILOSOPHY</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-black uppercase text-white">
                The Saturday Secret
              </h2>
            </div>
          </div>

          {/* Quote Banner */}
          <div className="p-6 rounded-2xl bg-neutral-900 border-2 border-amber-800/60 text-center shadow-sm">
            <p className="font-heading text-2xl sm:text-3xl font-extrabold text-amber-300 leading-tight">
              «“Grandma’s Sunday dinner tasted so good because the preparation started on Saturday.”»
            </p>
          </div>

          <div className="space-y-4 text-base text-neutral-300 leading-relaxed">
            <p>
              At Miss Lyn’s Wings, we don't believe in shortcuts.
            </p>
            <p>
              Authentic flavour takes time, patience, and care. Every dish is prepared with the same attention to detail that Miss Lyn brought to her own kitchen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
            
            <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-red-950/80 flex items-center justify-center text-[#ff481f]">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-xl font-bold uppercase text-white">Time-Honoured Marination</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                We marinate our meats well in advance using traditional Caribbean herbs and seasonings, allowing the flavours to develop so every bite is juicy, tender, and packed with flavour right to the bone.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-950/80 flex items-center justify-center text-[#d97706]">
                <Utensils className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-xl font-bold uppercase text-white">Canadian Favourites, Jamaican Twist</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                We take beloved classics like crispy wings, jerk chicken, and crispy fries and give them an authentic Jamaican twist.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-950/80 flex items-center justify-center text-[#059669]">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-xl font-bold uppercase text-white">Direct Jamaican Imports</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                We bring a taste of the island straight to Hamilton. From tropical favourites like Cran Wata and Ting to authentic Jamaican patties, we import directly from Jamaica for a genuine island experience.
              </p>
            </div>

          </div>
        </section>

        {/* SECTION 3: What We’re Famous For */}
        <section className="space-y-6 pt-4 border-t border-neutral-800">
          <div className="flex items-center gap-3 border-b border-neutral-800 pb-3">
            <span className="text-2xl">⭐</span>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#ff481f] block">SIGNATURE DISHES</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-black uppercase text-white">
                What We’re Famous For
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Item 1 */}
            <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="aspect-16/10 rounded-xl overflow-hidden bg-neutral-950">
                  <img src="/images/dishes/0053.jpg" alt="Signature Wings & Jerk Sauces" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-heading text-2xl font-bold uppercase text-white">
                  Signature Wings & Jerk Sauces
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Our signature wings are tossed in your choice of scratch-made sauces, including our legendary Suicide Jerk—a slow-burn, time-release heat packed with rich island spices.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="aspect-16/10 rounded-xl overflow-hidden bg-neutral-950">
                  <img src="/images/dishes/0019.jpg" alt="Authentic Jamaican Jerk Chicken" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-heading text-2xl font-bold uppercase text-white">
                  Authentic Jamaican Jerk Chicken
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Succulent, slow-marinated chicken infused with Scotch bonnet, Jamaican pimento, and Miss Lyn's signature glaze.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="aspect-16/10 rounded-xl overflow-hidden bg-neutral-950">
                  <img src="/images/dishes/garlic-bread.jpg" alt="Toasted Garlic Bread" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-heading text-2xl font-bold uppercase text-white">
                  Toasted Garlic Bread
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Thick-cut Texas toast brushed generously with aromatic garlic herb butter and toasted to golden, crispy perfection.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 4: Rooted in the Hamilton Community */}
        <section className="space-y-6 pt-4 border-t border-neutral-800">
          <div className="flex items-center gap-3 border-b border-neutral-800 pb-3">
            <span className="text-2xl">📍</span>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#059669] block">HAMILTON PRIDE</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-black uppercase text-white">
                Rooted in the Hamilton Community
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-base text-neutral-300 leading-relaxed">
            <p>
              Located on King Street near Wentworth, in the heart of Hamilton, we are proud to feed our neighbours and be part of the community we call home.
            </p>
            <p>
              From serving students at nearby Cathedral High School to catering for local sports teams, family game nights, and weekend gatherings, we believe that good food has a way of bringing people together.
            </p>
            <p>
              For us, it has never been just about serving food.
            </p>
            <p className="font-semibold text-white">
              It’s about creating the kind of place where people feel welcome, connected, and at home.
            </p>
          </div>

          {/* Customer Family Banner */}
          <div className="p-8 rounded-3xl bg-neutral-900 border-2 border-amber-800/60 text-center space-y-3 shadow-md">
            <h3 className="font-heading text-3xl sm:text-4xl font-black uppercase text-white">
              You’re Not Just a Customer. <span className="text-[#ff481f]">You’re Family.</span>
            </h3>
            <p className="text-base text-neutral-300 max-w-xl mx-auto leading-relaxed">
              When you walk up to our counter, you’re not just a customer—you’re sitting down at Miss Lyn’s table.
            </p>
            <p className="font-heading text-2xl font-bold text-amber-400 uppercase tracking-wide">
              Come hungry. Leave with a full heart.
            </p>
            <div className="pt-2">
              <span className="font-heading text-3xl font-black text-white block">MISS LYN’S WINGS</span>
              <span className="text-xs uppercase font-bold tracking-widest text-neutral-400">
                Canadian Comfort. Jamaican Soul. Made with Love.
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setCurrentView('menu')}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-heading text-xl font-bold uppercase tracking-wider bg-[#e02e07] hover:bg-[#ff481f] text-white shadow-lg transition-all"
            >
              View Full Menu
            </button>
            <button
              onClick={() => openOrderingModal('pickup')}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-heading text-xl font-bold uppercase tracking-wider bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700 shadow-lg transition-all"
            >
              Order Pickup
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}
