import React from 'react';
import { Phone, MapPin, Flame, ExternalLink } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantInfo';

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer({ setCurrentView, openOrderingModal }) {
  const handleNav = (view, sectionId = null) => {
    setCurrentView(view);
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#111827] text-white border-t border-gray-800 pt-16 pb-24 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800 text-left">
          
          {/* Col 1: Brand & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🍗</span>
              <span className="font-heading text-3xl font-black tracking-wider text-white">
                MISS LYN’S <span className="text-[#fbbf24]">WINGS</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Always Fresh. Made To Order. Bold Flavour Every Time. Authentic Caribbean jerk chicken, wings, comfort sides, and golden flaky patties in Hamilton, Ontario.
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-gray-300 w-fit">
                <Flame className="w-3.5 h-3.5 text-[#ff481f]" />
                <span>100% Fresh Never Frozen Chicken</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading text-xl font-bold uppercase tracking-wider text-[#fbbf24]">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition-colors">
                  Home Page
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('home', 'combo-builder')} className="hover:text-white transition-colors text-[#ff5e36] font-semibold">
                  Interactive Combo Builder
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('home', 'family-feast')} className="hover:text-white transition-colors text-yellow-400 font-semibold">
                  Family Feast Bundle ($49.99)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('menu')} className="hover:text-white transition-colors">
                  Complete Restaurant Menu
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors">
                  About Miss Lyn’s
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('home', 'location-hours')} className="hover:text-white transition-colors">
                  Location & Store Hours
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Order Online Links */}
          <div className="space-y-3">
            <h4 className="font-heading text-xl font-bold uppercase tracking-wider text-[#ff5e36]">
              ONLINE ORDERING
            </h4>
            <div className="space-y-2 text-xs sm:text-sm">
              <button
                onClick={() => openOrderingModal('pickup')}
                className="w-full text-left p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white flex items-center justify-between transition-colors"
              >
                <span>Direct Pickup Order</span>
                <Phone className="w-3.5 h-3.5 text-[#fbbf24]" />
              </button>

              {restaurantInfo.deliveryLinks.map((d) => (
                <a
                  key={d.platform}
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-left p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white flex items-center justify-between transition-colors"
                >
                  <span>Order on {d.name}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 4: Store Info */}
          <div className="space-y-3">
            <h4 className="font-heading text-xl font-bold uppercase tracking-wider text-white">
              VISIT US
            </h4>
            <div className="space-y-2 text-xs text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#ff481f] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">677 King Street East</strong>
                  <span>Hamilton, ON L8N 1E5</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#fbbf24] shrink-0" />
                <a href="tel:9055225967" className="hover:text-white font-bold text-gray-200">
                  (905) 522-5967
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#fbbf24] shrink-0" />
                <a href="tel:9055178529" className="hover:text-white font-bold text-gray-200">
                  905-517-8529
                </a>
              </div>
              <div className="flex items-center gap-2 pt-0.5">
                <InstagramIcon className="w-4 h-4 text-pink-400 shrink-0" />
                <a
                  href={restaurantInfo.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-300 font-bold text-gray-200 flex items-center gap-1 transition-colors group"
                >
                  <span className="text-gray-400 group-hover:text-pink-300">IG:</span>
                  <span className="text-pink-400 group-hover:underline">{restaurantInfo.social.instagram.handle}</span>
                </a>
              </div>
              <div className="pt-2 text-[11px] text-gray-400">
                Mon–Fri: 11am–9pm • Sat: 1pm–9pm • Sun: Closed
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © {new Date().getFullYear()} Miss Lyn’s Wings. All Rights Reserved. Hamilton, Ontario.
          </div>
          <div className="flex items-center gap-4 text-gray-300">
            <a
              href={restaurantInfo.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-pink-400 hover:text-pink-300 transition-colors font-medium"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>{restaurantInfo.social.instagram.handle}</span>
            </a>
            <span className="text-gray-600">•</span>
            <span>Authentic Caribbean Food in Hamilton</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
