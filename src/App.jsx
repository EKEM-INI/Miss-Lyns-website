import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ComboBuilder from './components/ComboBuilder';
import FamilyFeast from './components/FamilyFeast';
import BrandStory from './components/BrandStory';
import MenuHighlights from './components/MenuHighlights';
import MenuPage from './components/MenuPage';
import AboutPage from './components/AboutPage';
import LocationHours from './components/LocationHours';
import Footer from './components/Footer';
import FloatingOrderBar from './components/FloatingOrderBar';
import OrderingModal from './components/OrderingModal';
import { restaurantInfo } from './data/restaurantInfo';

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'menu' | 'about'
  const [orderingModalOpen, setOrderingModalOpen] = useState(false);
  const [orderingModalTab, setOrderingModalTab] = useState('all');
  const [selectedOrderItem, setSelectedOrderItem] = useState(null);
  const [cart, setCart] = useState([]);

  const openOrderingModal = (tab = 'all', item = null) => {
    if (tab === 'delivery') {
      const uberUrl = restaurantInfo.deliveryLinks.find(d => d.platform === 'Uber Eats')?.url || "https://www.ubereats.com/ca/store/miss-lyns-wings/yBWauh9NX4isUfrQt-wp4g?srsltid=AfmBOooSdT1IRgG79ndrOu6f-phUGzMRLmKZXXr_s5DVmOVpGoUdu_2L";
      window.open(uberUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    setOrderingModalTab(tab);
    if (item) {
      // Add or highlight item
      setSelectedOrderItem(item);
      addToCart(item);
    }
    setOrderingModalOpen(true);
  };

  const closeOrderingModal = () => {
    setOrderingModalOpen(false);
    setSelectedOrderItem(null);
  };

  const addToCart = (item) => {
    setCart((prev) => {
      // Check if existing identical item exists
      const existingIdx = prev.findIndex(i => i.id === item.id && JSON.stringify(i.details) === JSON.stringify(item.details));
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity = (updated[existingIdx].quantity || 1) + 1;
        return updated;
      } else {
        return [...prev, { ...item, quantity: item.quantity || 1 }];
      }
    });
  };

  const updateCartQuantity = (index, delta) => {
    setCart((prev) => {
      const updated = [...prev];
      if (!updated[index]) return prev;
      const newQty = (updated[index].quantity || 1) + delta;
      if (newQty <= 0) {
        return updated.filter((_, i) => i !== index);
      } else {
        updated[index].quantity = newQty;
        return updated;
      }
    });
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col justify-between selection:bg-[#e02e07] selection:text-white">
      
      {/* Top Sticky Navbar */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        openOrderingModal={openOrderingModal}
        cartCount={totalCartCount}
        openCart={() => openOrderingModal('all')}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            {/* 01 — HERO */}
            <Hero
              openOrderingModal={openOrderingModal}
              setCurrentView={setCurrentView}
            />

            {/* 02 — BUILD YOUR COMBO (Interactive 3-Step Configurator with Premium Upgrade under Step 3) */}
            <ComboBuilder
              openOrderingModal={openOrderingModal}
              addToCart={addToCart}
            />

            {/* 03 — FAMILY FEAST ($49.99 Bundle Feature) */}
            <FamilyFeast
              openOrderingModal={openOrderingModal}
              addToCart={addToCart}
            />

            {/* 04 — FOOD / BRAND INTRODUCTION */}
            <BrandStory
              setCurrentView={setCurrentView}
            />

            {/* 05 — MENU HIGHLIGHTS */}
            <MenuHighlights
              setCurrentView={setCurrentView}
              openOrderingModal={openOrderingModal}
              addToCart={addToCart}
            />

            {/* 06 & 07 — LOCATION & CONTACT */}
            <LocationHours
              openOrderingModal={openOrderingModal}
            />
          </>
        )}

        {currentView === 'menu' && (
          /* DEDICATED MENU PAGE */
          <MenuPage
            setCurrentView={setCurrentView}
            openOrderingModal={openOrderingModal}
            addToCart={addToCart}
          />
        )}

        {currentView === 'about' && (
          /* DEDICATED LOADABLE ABOUT US PAGE */
          <AboutPage
            setCurrentView={setCurrentView}
            openOrderingModal={openOrderingModal}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        setCurrentView={setCurrentView}
        openOrderingModal={openOrderingModal}
      />

      {/* Mobile Sticky Quick-Order Floating Bar */}
      <FloatingOrderBar
        openOrderingModal={openOrderingModal}
      />

      {/* Pickup & Delivery Ordering Modal with Cart Review, Client Info Form, and Delivery App Sync */}
      <OrderingModal
        isOpen={orderingModalOpen}
        onClose={closeOrderingModal}
        defaultTab={orderingModalTab}
        orderItem={selectedOrderItem}
        cart={cart}
        updateCartQuantity={updateCartQuantity}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
      />

    </div>
  );
}
