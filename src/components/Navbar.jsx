import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ShoppingBag, ChevronRight } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantInfo';

export default function Navbar({ currentView, setCurrentView, openOrderingModal, cartCount = 0, openCart }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view, sectionId = null) => {
    setMobileMenuOpen(false);
    setCurrentView(view);
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Notification Announcement Bar */}
      <div className="bg-gradient-to-r from-[#991b1b] via-[#e52516] to-[#d97706] text-white py-2 px-4 text-xs font-semibold tracking-wide text-center flex items-center justify-center gap-2 shadow-inner">
        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-black/25 text-[11px] font-bold uppercase tracking-wider text-yellow-300">
          🔥 Hamilton, ON
        </span>
        <span>Always Fresh • Made To Order • 677 King St East</span>
        <a 
          href="tel:9055225967" 
          className="hidden md:inline-flex items-center gap-1 font-bold underline hover:text-yellow-200 ml-2"
        >
          <Phone className="w-3 h-3" /> (905) 522-5967
        </a>
      </div>

      {/* Main Sticky Navigation Bar (Black Theme) */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/95 backdrop-blur-md shadow-lg border-b border-neutral-800 py-3' 
            : 'bg-black/90 backdrop-blur-sm border-b border-neutral-900 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#ff481f] via-[#e52516] to-[#f59e0b] p-0.5 shadow-md group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-black rounded-[10px] flex items-center justify-center">
                <span className="text-xl sm:text-2xl font-black">🍗</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading text-2xl sm:text-3xl font-extrabold tracking-wider text-white leading-none group-hover:text-[#e02e07] transition-colors">
                  MISS LYN’S
                </span>
                <span className="font-heading text-2xl sm:text-3xl font-extrabold tracking-wider text-[#d97706] leading-none">
                  WINGS
                </span>
              </div>
              <p className="text-[10px] sm:text-xs font-semibold tracking-widest text-neutral-400 uppercase">
                Caribbean & Comfort Food
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <button 
              onClick={() => handleNavClick('home')}
              className={`px-3.5 py-2 rounded-xl text-sm font-bold tracking-wide transition-colors ${
                currentView === 'home' ? 'text-[#e02e07] bg-red-950/40' : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
              }`}
            >
              HOME
            </button>
            <button 
              onClick={() => handleNavClick('home', 'combo-builder')}
              className="px-3.5 py-2 rounded-xl text-sm font-bold tracking-wide text-neutral-300 hover:text-[#e02e07] hover:bg-neutral-800 transition-colors"
            >
              BUILD YOUR COMBO
            </button>
            <button 
              onClick={() => handleNavClick('home', 'family-feast')}
              className="px-3.5 py-2 rounded-xl text-sm font-bold tracking-wide text-neutral-300 hover:text-[#d97706] hover:bg-neutral-800 transition-colors flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-[#e52516] animate-ping"></span>
              FAMILY FEAST
            </button>
            <button 
              onClick={() => handleNavClick('menu')}
              className={`px-3.5 py-2 rounded-xl text-sm font-bold tracking-wide transition-colors ${
                currentView === 'menu' ? 'text-[#e02e07] bg-red-950/40' : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
              }`}
            >
              MENU
            </button>
            <button 
              onClick={() => handleNavClick('about')}
              className={`px-3.5 py-2 rounded-xl text-sm font-bold tracking-wide transition-colors ${
                currentView === 'about' ? 'text-[#e02e07] bg-red-950/40' : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
              }`}
            >
              ABOUT
            </button>
            <button 
              onClick={() => handleNavClick('home', 'location-hours')}
              className="px-3.5 py-2 rounded-xl text-sm font-bold tracking-wide text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors"
            >
              LOCATION
            </button>
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={() => openOrderingModal('pickup')}
              className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 transition-all active:scale-95 shadow-sm flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#d97706]" />
              Pickup
            </button>
            <button
              onClick={() => openOrderingModal('delivery')}
              className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold tracking-wider uppercase bg-gradient-to-r from-[#e52516] to-[#d92212] hover:from-[#f03525] hover:to-[#ff481f] text-white shadow-md shadow-[#e52516]/25 transition-all active:scale-95 flex items-center gap-1.5"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Order Delivery
            </button>

            {/* Cart Button */}
            {cartCount > 0 && (
              <button
                onClick={openCart}
                className="relative p-2.5 rounded-xl bg-red-950/60 hover:bg-red-900/80 border border-red-800 text-[#ff481f] transition-all"
                title="View Current Order"
              >
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#e52516] text-white font-bold text-[10px] rounded-full flex items-center justify-center border-2 border-black shadow">
                  {cartCount}
                </span>
              </button>
            )}
          </div>

          {/* Mobile Menu & Cart Button */}
          <div className="flex items-center gap-2 sm:hidden">
            {cartCount > 0 && (
              <button
                onClick={openCart}
                className="relative p-2 rounded-lg bg-red-950/60 text-[#ff481f]"
              >
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#e52516] text-white font-bold text-[9px] rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              </button>
            )}
            
            <button
              onClick={() => openOrderingModal('all')}
              className="px-3 py-1.5 rounded-lg text-xs font-bold uppercase bg-gradient-to-r from-[#e52516] to-[#ff481f] text-white shadow"
            >
              Order
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-neutral-900 text-neutral-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu (Black Theme) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-between bg-black/98 backdrop-blur-xl animate-fadeIn text-white">
          {/* Mobile Header */}
          <div className="p-4 flex items-center justify-between border-b border-neutral-800">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🍗</span>
              <span className="font-heading text-2xl font-black text-white">MISS LYN’S WINGS</span>
            </div>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-neutral-900 text-neutral-300 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="px-6 py-6 space-y-4 overflow-y-auto">
            <button
              onClick={() => handleNavClick('home')}
              className="w-full text-left font-heading text-2xl font-bold py-2 border-b border-neutral-850 text-white flex items-center justify-between"
            >
              <span>HOME</span>
              <ChevronRight className="w-5 h-5 text-neutral-500" />
            </button>

            <button
              onClick={() => handleNavClick('home', 'combo-builder')}
              className="w-full text-left font-heading text-2xl font-bold py-2 border-b border-neutral-850 text-[#e02e07] flex items-center justify-between"
            >
              <span>BUILD YOUR COMBO</span>
              <ChevronRight className="w-5 h-5 text-neutral-500" />
            </button>

            <button
              onClick={() => handleNavClick('home', 'family-feast')}
              className="w-full text-left font-heading text-2xl font-bold py-2 border-b border-neutral-850 text-[#d97706] flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#e52516] animate-pulse"></span>
                FAMILY FEAST ($49.99)
              </span>
              <ChevronRight className="w-5 h-5 text-neutral-500" />
            </button>

            <button
              onClick={() => handleNavClick('menu')}
              className="w-full text-left font-heading text-2xl font-bold py-2 border-b border-neutral-850 text-white flex items-center justify-between"
            >
              <span>FULL MENU & PRICING</span>
              <ChevronRight className="w-5 h-5 text-neutral-500" />
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className="w-full text-left font-heading text-2xl font-bold py-2 border-b border-neutral-850 text-white flex items-center justify-between"
            >
              <span>ABOUT MISS LYN’S</span>
              <ChevronRight className="w-5 h-5 text-neutral-500" />
            </button>

            <button
              onClick={() => handleNavClick('home', 'location-hours')}
              className="w-full text-left font-heading text-2xl font-bold py-2 border-b border-neutral-850 text-white flex items-center justify-between"
            >
              <span>LOCATION & HOURS</span>
              <ChevronRight className="w-5 h-5 text-neutral-500" />
            </button>

            {/* Quick Phone Call */}
            <div className="pt-4 pb-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">Call In Orders:</p>
              <a 
                href="tel:9055225967"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white font-bold"
              >
                <Phone className="w-5 h-5 text-[#d97706]" />
                <div>
                  <div className="text-sm">(905) 522-5967</div>
                  <div className="text-xs text-neutral-400 font-normal">Tap to call restaurant</div>
                </div>
              </a>
            </div>
          </div>

          {/* Mobile Bottom CTAs */}
          <div className="p-6 border-t border-neutral-800 bg-neutral-950 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openOrderingModal('pickup');
                }}
                className="w-full py-3.5 rounded-xl font-extrabold uppercase text-sm bg-neutral-900 text-white border border-neutral-700 shadow-sm"
              >
                Order Pickup
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openOrderingModal('delivery');
                }}
                className="w-full py-3.5 rounded-xl font-extrabold uppercase text-xs sm:text-sm bg-gradient-to-r from-[#e52516] to-[#ff481f] text-white shadow-md text-center"
              >
                Order Delivery
              </button>
            </div>
            <p className="text-center text-xs text-neutral-400">
              📍 677 King Street East, Hamilton, ON
            </p>
          </div>
        </div>
      )}
    </>
  );
}
