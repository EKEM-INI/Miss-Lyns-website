import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FamilyFeast from './components/FamilyFeast';
import ComboBuilder from './components/ComboBuilder';
import BrandStory from './components/BrandStory';
import MenuHighlights from './components/MenuHighlights';
import MenuPage from './components/MenuPage';
import LocationHours from './components/LocationHours';
import Footer from './components/Footer';
import FloatingOrderBar from './components/FloatingOrderBar';
import OrderingModal from './components/OrderingModal';

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'menu'
  const [orderingModalOpen, setOrderingModalOpen] = useState(false);
  const [orderingModalTab, setOrderingModalTab] = useState('all'); // 'pickup' | 'delivery' | 'all'
  const [selectedOrderItem, setSelectedOrderItem] = useState(null);
  const [cart, setCart] = useState([]);

  const openOrderingModal = (tab = 'all', item = null) => {
    setOrderingModalTab(tab);
    setSelectedOrderItem(item);
    setOrderingModalOpen(true);
  };

  const closeOrderingModal = () => {
    setOrderingModalOpen(false);
    setSelectedOrderItem(null);
  };

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  return (
    <div className="min-h-screen bg-[#0c0e12] text-[#f3f4f6] flex flex-col justify-between selection:bg-[#ff481f] selection:text-white">
      
      {/* Top Sticky Navbar */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        openOrderingModal={openOrderingModal}
        cartCount={cart.length}
        openCart={() => openOrderingModal('all')}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentView === 'home' ? (
          <>
            {/* 01 — HERO */}
            <Hero
              openOrderingModal={openOrderingModal}
              setCurrentView={setCurrentView}
            />

            {/* 02 — FAMILY FEAST ($49.99 Prominent Feature) */}
            <FamilyFeast
              openOrderingModal={openOrderingModal}
              addToCart={addToCart}
            />

            {/* 03 — BUILD YOUR COMBO (Interactive 3-Step Configurator) */}
            <ComboBuilder
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
        ) : (
          /* DEDICATED MENU PAGE */
          <MenuPage
            setCurrentView={setCurrentView}
            openOrderingModal={openOrderingModal}
            addToCart={addToCart}
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

      {/* Pickup & Delivery Ordering Modal */}
      <OrderingModal
        isOpen={orderingModalOpen}
        onClose={closeOrderingModal}
        defaultTab={orderingModalTab}
        orderItem={selectedOrderItem}
      />

    </div>
  );
}
