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
      <div className="bg-gradient-to-r from-[#991b1b] to-[#dc2626] text-white py-2 px-4 text-xs font-semibold tracking-wide text-center flex items-center justify-center gap-2 shadow-inner">
        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-black/25 text-[11px] font-bold uppercase tracking-wider text-white">
          🔥 Hamilton, ON
        </span>
        <span>Always Fresh • Made To Order • 677 King St East</span>
        <a 
          href="tel:9055225967" 
          className="hidden md:inline-flex items-center gap-1 font-bold underline hover:text-neutral-200 ml-2"
        >
          <Phone className="w-3 h-3" /> (905) 522-5967
        </a>
      </div>

      {/* Main Sticky Navigation Bar (Black Theme) */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/95 backdrop-blur-md shadow-lg border-b border-neutral-850 py-3' 
            : 'bg-black/90 backdrop-blur-sm border-b border-neutral-850 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#ff2626] p-0.5 shadow-md group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#1e2025] rounded-[10px] flex items-center justify-center">
                <span className="text-xl sm:text-2xl font-black">🍗</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading text-2xl sm:text-3xl font-extrabold tracking-wider text-white leading-none group-hover:text-[#ff2626] transition-colors">
                  MISS LYN’S
                </span>
                <span className="font-heading text-2xl sm:text-3xl font-extrabold tracking-wider text-[#ff2626] leading-none">
                  WINGS
                </span>
              </div>
              <p className="text-[10px] sm:text-xs font-semibold tracking-widest text-neutral-400 uppercase">
                Canadian Favourites. Done The Jamaican Way.
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <button 
              onClick={() => handleNavClick('home')}
              className={`px-3.5 py-2 rounded-xl text-sm font-bold tracking-wide transition-colors ${
                currentView === 'home' ? 'text-[#ff2626] bg-red-950/40' : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
              }`}
            >
              HOME
            </button>
            <button 
              onClick={() => handleNavClick('home', 'combo-builder')}
              className="px-3.5 py-2 rounded-xl text-sm font-bold tracking-wide text-neutral-300 hover:text-[#ff2626] hover:bg-neutral-800 transition-colors"
            >
              BUILD YOUR COMBO
            </button>
            <button 
              onClick={() => handleNavClick('home', 'family-feast')}
              className="px-3.5 py-2 rounded-xl text-sm font-bold tracking-wide text-neutral-300 hover:text-[#ff2626] hover:bg-neutral-800 transition-colors flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-[#ff2626] animate-ping"></span>
              FAMILY FEAST
            </button>
            <button 
              onClick={() => handleNavClick('menu')}
              className={`px-3.5 py-2 rounded-xl text-sm font-bold tracking-wide transition-colors ${
                currentView === 'menu' ? 'text-[#ff2626] bg-red-950/40' : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
              }`}
            >
              MENU
            </button>
            <button 
              onClick={() => handleNavClick('about')}
              className={`px-3.5 py-2 rounded-xl text-sm font-bold tracking-wide transition-colors ${
                currentView === 'about' ? 'text-[#ff2626] bg-red-950/40' : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
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
              <Phone className="w-3.5 h-3.5 text-[#ff2626]" />
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

      {/* Mobile Drawer Menu (Pure Black Theme Matching Reference Screenshot) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-between bg-black animate-fadeIn text-white overflow-y-auto">
          {/* Mobile Header */}
          <div className="p-4 flex items-center justify-between border-b border-neutral-900 bg-black sticky top-0 z-10">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🍗</span>
              <div className="flex items-center gap-1.5 font-heading text-2xl font-black tracking-wide">
                <span className="text-white">MISS LYN’S</span>
                <span className="text-[#ff2626]">WINGS</span>
              </div>
            </div>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-xl bg-[#1e2025] border border-neutral-800 text-neutral-300 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="px-5 py-6 space-y-6">
            
            {/* Header branding in drawer */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🍗</span>
                <h3 className="font-heading text-3xl font-black uppercase tracking-tight">
                  <span className="text-white">MISS LYN’S </span>
                  <span className="text-[#ff2626]">WINGS</span>
                </h3>
              </div>
              <p className="font-heading text-base font-bold uppercase tracking-wider text-[#ff2626]">
                CANADIAN FAVOURITES. DONE THE JAMAICAN WAY.
              </p>
              <p className="text-sm text-neutral-300 leading-relaxed pt-1">
                <strong className="text-white italic underline decoration-[#ff2626] decoration-2">Always Fresh. Made To Order.</strong> Bold Caribbean flavour in every bite. Authentic jerk chicken, <span className="text-[#ff2626] font-semibold">wings</span>, comforting sides, and golden flaky patties, right here in Hamilton, Ontario.
              </p>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1e2025] border border-neutral-800 text-xs font-semibold text-neutral-200 mt-2">
                <span className="text-[#ff2626]">🔥</span>
                <span>100% Fresh Never Frozen Chicken</span>
              </div>
            </div>

            {/* QUICK NAVIGATION */}
            <div className="space-y-3 pt-2">
              <h4 className="font-heading text-xl font-black uppercase tracking-wider text-[#ff2626]">
                QUICK NAVIGATION
              </h4>
              <div className="space-y-2.5 text-base">
                <button
                  onClick={() => handleNavClick('home')}
                  className="w-full text-left font-medium text-white hover:text-[#ff2626] py-1 transition-colors block"
                >
                  Home Page
                </button>
                <button
                  onClick={() => handleNavClick('home', 'combo-builder')}
                  className="w-full text-left font-bold text-[#ff2626] hover:text-red-400 py-1 transition-colors block"
                >
                  Interactive Combo Builder
                </button>
                <button
                  onClick={() => handleNavClick('home', 'family-feast')}
                  className="w-full text-left font-bold text-[#ff2626] hover:text-red-400 py-1 transition-colors block"
                >
                  Family Feast Bundle ($49.99)
                </button>
                <button
                  onClick={() => handleNavClick('menu')}
                  className="w-full text-left font-medium text-white hover:text-[#ff2626] py-1 transition-colors block"
                >
                  Complete Restaurant Menu
                </button>
                <button
                  onClick={() => handleNavClick('about')}
                  className="w-full text-left font-medium text-white hover:text-[#ff2626] py-1 transition-colors block"
                >
                  About Miss Lyn’s
                </button>
                <button
                  onClick={() => handleNavClick('home', 'location-hours')}
                  className="w-full text-left font-medium text-white hover:text-[#ff2626] py-1 transition-colors block"
                >
                  Location & Store Hours
                </button>
              </div>
            </div>

            {/* ONLINE ORDERING */}
            <div className="space-y-3 pt-2">
              <h4 className="font-heading text-xl font-black uppercase tracking-wider text-[#ff2626]">
                ONLINE ORDERING
              </h4>
              <div className="space-y-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openOrderingModal('pickup');
                  }}
                  className="w-full p-4 rounded-2xl bg-[#1a1c20] hover:bg-[#22252a] border border-neutral-800 text-white font-medium flex items-center justify-between text-left transition-colors"
                >
                  <span>Direct Pickup Order</span>
                  <Phone className="w-5 h-5 text-[#ff2626]" />
                </button>
                <a
                  href="https://www.ubereats.com/ca/store/miss-lyns-wings/yBWauh9NX4isUfrQt-wp4g?srsltid=AfmBOooSdT1IRgG79ndrOu6f-phUGzMRLmKZXXr_s5DVmOVpGoUdu_2L"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full p-4 rounded-2xl bg-[#1a1c20] hover:bg-[#22252a] border border-neutral-800 text-white font-medium flex items-center justify-between text-left transition-colors"
                >
                  <span>Order on Uber Eats</span>
                  <span className="text-neutral-400">↗</span>
                </a>
              </div>
            </div>

          </div>

          {/* Mobile Bottom Fixed Buttons */}
          <div className="p-4 border-t border-neutral-900 bg-black sticky bottom-0 z-10 grid grid-cols-2 gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openOrderingModal('pickup');
              }}
              className="w-full py-4 rounded-2xl font-heading text-lg font-black uppercase tracking-wider bg-[#1a1c20] hover:bg-[#22252a] text-white border border-neutral-800 flex items-center justify-center gap-2 shadow transition-all active:scale-95"
            >
              <Phone className="w-4 h-4 text-[#ff2626]" />
              <span>PICKUP</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openOrderingModal('delivery');
              }}
              className="w-full py-4 rounded-2xl font-heading text-lg font-black uppercase tracking-wider bg-gradient-to-r from-[#e02e07] to-[#e52516] hover:from-[#f03525] hover:to-[#ff481f] text-white shadow-lg shadow-red-950/50 flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>DELIVERY</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Bottom Navigation Bar for Mobile (Always Visible matching screenshot) */}
      <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden p-3 bg-black/95 backdrop-blur-md border-t border-neutral-850">
        <div className="max-w-md mx-auto grid grid-cols-2 gap-3">
          <button
            onClick={() => openOrderingModal('pickup')}
            className="w-full py-3.5 rounded-2xl font-heading text-lg font-black uppercase tracking-wider bg-[#1a1c20] hover:bg-[#22252a] text-white border border-neutral-800 flex items-center justify-center gap-2 shadow active:scale-95 transition-all"
          >
            <Phone className="w-4 h-4 text-[#ff2626]" />
            <span>PICKUP</span>
          </button>
          <button
            onClick={() => openOrderingModal('delivery')}
            className="w-full py-3.5 rounded-2xl font-heading text-lg font-black uppercase tracking-wider bg-gradient-to-r from-[#e02e07] to-[#e52516] hover:from-[#f03525] hover:to-[#ff481f] text-white shadow-lg shadow-red-950/50 flex items-center justify-center gap-2 active:scale-95 transition-all"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>DELIVERY</span>
          </button>
        </div>
      </div>
    </>
  );
}
