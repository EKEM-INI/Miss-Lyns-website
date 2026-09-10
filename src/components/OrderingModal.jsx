import React, { useState } from 'react';
import { X, Phone, ShoppingBag, ExternalLink, MapPin, Clock, Sparkles, Check, Copy, User, Mail, Plus, Minus, Trash2, MessageSquare, ArrowRight } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantInfo';

export default function OrderingModal({ 
  isOpen, 
  onClose, 
  defaultTab = 'all', 
  orderItem = null,
  cart = [],
  updateCartQuantity,
  removeFromCart,
  clearCart
}) {
  const [activeTab, setActiveTab] = useState(defaultTab === 'all' ? 'pickup' : defaultTab);
  const [step, setStep] = useState('cart'); // 'cart' | 'client-info' | 'complete'
  
  // Basic Client Information Form State
  const [clientInfo, setClientInfo] = useState({
    name: '',
    phone: '',
    email: '',
    orderType: defaultTab === 'delivery' ? 'delivery' : 'pickup',
    address: '',
    unit: '',
    instructions: ''
  });

  const [copied, setCopied] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  if (!isOpen) return null;

  // Build combined items list
  const activeItems = cart.length > 0 ? cart : (orderItem ? [{ ...orderItem, quantity: 1 }] : []);
  
  const subtotal = activeItems.reduce((acc, item) => {
    const qty = item.quantity || 1;
    return acc + (item.price * qty);
  }, 0);

  const tax = subtotal * 0.13;
  const total = subtotal + tax;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClientInfo(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!clientInfo.name.trim()) errors.name = "Please enter your name";
    if (!clientInfo.phone.trim()) errors.phone = "Please enter your phone number";
    if (clientInfo.orderType === 'delivery' && !clientInfo.address.trim()) {
      errors.address = "Please enter your delivery street address";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleProceedToDelivery = () => {
    if (validateForm()) {
      setStep('complete');
    }
  };

  // Generate clean order text summary for delivery app or call-in
  const generateOrderSummaryText = () => {
    let summary = `🍗 MISS LYN'S WINGS ORDER\n`;
    summary += `---------------------------\n`;
    summary += `👤 Customer: ${clientInfo.name || 'Valued Customer'}\n`;
    summary += `📞 Phone: ${clientInfo.phone || 'N/A'}\n`;
    if (clientInfo.orderType === 'delivery' && clientInfo.address) {
      summary += `📍 Delivery Address: ${clientInfo.address} ${clientInfo.unit ? '(Unit ' + clientInfo.unit + ')' : ''}\n`;
    }
    summary += `🍴 Order Type: ${clientInfo.orderType.toUpperCase()}\n`;
    if (clientInfo.instructions) {
      summary += `📝 Notes: ${clientInfo.instructions}\n`;
    }
    summary += `---------------------------\nITEMS ORDERED:\n`;
    
    activeItems.forEach((item, index) => {
      const qty = item.quantity || 1;
      summary += `${index + 1}. ${qty}x ${item.name} ($${(item.price * qty).toFixed(2)})\n`;
      if (item.details) {
        if (item.details.protein) summary += `   • Protein: ${item.details.protein}\n`;
        if (item.details.side) summary += `   • Side: ${item.details.side}\n`;
        if (item.details.drink) summary += `   • Drink: ${item.details.drink}\n`;
      }
    });

    summary += `---------------------------\n`;
    summary += `Subtotal: $${subtotal.toFixed(2)}\n`;
    summary += `HST (13%): $${tax.toFixed(2)}\n`;
    summary += `TOTAL: $${total.toFixed(2)}\n`;
    return summary;
  };

  const handleCopyOrder = () => {
    const text = generateOrderSummaryText();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl max-h-[90vh] rounded-3xl bg-white border border-gray-200 shadow-2xl overflow-y-auto text-gray-900 p-5 sm:p-7">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6 pt-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#e02e07] text-xs font-bold uppercase tracking-wider mb-2 border border-red-100">
            <span>🍗 Miss Lyn’s Wings Checkout & Ordering</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-black uppercase text-gray-900 leading-tight">
            {step === 'cart' && 'REVIEW YOUR ORDER'}
            {step === 'client-info' && 'CUSTOMER INFORMATION'}
            {step === 'complete' && 'COMPLETE YOUR ORDER'}
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            {step === 'cart' && 'Confirm all your dishes, combos & drinks before checking out.'}
            {step === 'client-info' && 'Please provide your basic contact details to finalize your order.'}
            {step === 'complete' && 'Your order is prepared! Transfer to delivery app or call for pickup.'}
          </p>
        </div>

        {/* Step Navigation Progress Pills */}
        <div className="flex items-center justify-center gap-2 mb-6 text-xs font-bold uppercase tracking-wider">
          <button
            onClick={() => setStep('cart')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              step === 'cart' ? 'bg-[#e02e07] text-white shadow' : 'bg-gray-100 text-gray-600'
            }`}
          >
            1. My Orders ({activeItems.length})
          </button>
          <span>→</span>
          <button
            onClick={() => setStep('client-info')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              step === 'client-info' ? 'bg-[#e02e07] text-white shadow' : 'bg-gray-100 text-gray-600'
            }`}
          >
            2. Client Info
          </button>
          <span>→</span>
          <span className={`px-3 py-1.5 rounded-lg transition-all ${
            step === 'complete' ? 'bg-[#e02e07] text-white shadow' : 'bg-gray-100 text-gray-400'
          }`}>
            3. Pickup / Delivery
          </span>
        </div>


        {/* ================= STEP 1: CART REVIEW (Choose all orders before checkout) ================= */}
        {step === 'cart' && (
          <div className="space-y-5 animate-fadeIn">
            
            {activeItems.length === 0 ? (
              <div className="py-12 text-center rounded-2xl bg-gray-50 border border-gray-200">
                <ShoppingBag className="w-12 h-12 text-gray-300 mx-auto mb-2" />
                <h4 className="font-heading text-xl font-bold text-gray-800">Your Cart is Empty</h4>
                <p className="text-xs text-gray-500 max-w-sm mx-auto mt-1 mb-4">
                  Browse our Combo Builder, Family Feast, or Full Menu to add your favorite Caribbean dishes.
                </p>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl font-heading text-base font-bold uppercase bg-[#e02e07] text-white shadow"
                >
                  Explore Menu
                </button>
              </div>
            ) : (
              <>
                {/* Itemized Order List */}
                <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                  {activeItems.map((item, index) => {
                    const qty = item.quantity || 1;
                    return (
                      <div
                        key={index}
                        className="p-3.5 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-between gap-3 text-left"
                      >
                        <div className="w-14 h-14 rounded-xl overflow-hidden bg-gray-100 shrink-0 border border-gray-200">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h4 className="font-heading text-lg font-bold text-gray-900 leading-tight truncate">
                            {item.name}
                          </h4>
                          {item.details && (
                            <p className="text-[11px] text-gray-500 leading-tight truncate">
                              {item.details.protein && `${item.details.protein} • `}
                              {item.details.side && `${item.details.side} • `}
                              {item.details.drink && `${item.details.drink}`}
                            </p>
                          )}
                          <span className="text-xs font-black text-[#e02e07]">
                            ${(item.price * qty).toFixed(2)}
                          </span>
                        </div>

                        {/* Quantity Controls */}
                        {updateCartQuantity && (
                          <div className="flex items-center gap-2 shrink-0">
                            <button
                              onClick={() => updateCartQuantity(index, -1)}
                              className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="font-heading text-base font-bold text-gray-900 w-4 text-center">
                              {qty}
                            </span>
                            <button
                              onClick={() => updateCartQuantity(index, 1)}
                              className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                            {removeFromCart && (
                              <button
                                onClick={() => removeFromCart(index)}
                                className="p-1.5 text-gray-400 hover:text-red-600 transition-colors ml-1"
                                title="Remove Item"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Price Breakdown */}
                <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-200 text-left space-y-1.5 text-xs text-gray-700">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span className="font-bold text-gray-900">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Tax (13% HST):</span>
                    <span className="font-bold text-gray-900">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-base font-black text-gray-900 pt-2 border-t border-orange-200">
                    <span>Estimated Total:</span>
                    <span className="text-[#e02e07]">${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                  <button
                    onClick={onClose}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    + Add More Items
                  </button>
                  <button
                    onClick={() => setStep('client-info')}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-heading text-lg font-bold uppercase tracking-wider bg-gradient-to-r from-[#e02e07] to-[#e52516] hover:from-[#f03525] hover:to-[#ff481f] text-white shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>Proceed to Client Info</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </>
            )}

          </div>
        )}


        {/* ================= STEP 2: POPUP FORM FOR BASIC CLIENT INFORMATION ================= */}
        {step === 'client-info' && (
          <div className="space-y-4 text-left animate-fadeIn">
            
            {/* Order Type Toggle */}
            <div className="grid grid-cols-2 gap-2 p-1 rounded-2xl bg-gray-100 border border-gray-200 mb-4">
              <button
                type="button"
                onClick={() => setClientInfo(prev => ({ ...prev, orderType: 'pickup' }))}
                className={`py-2.5 rounded-xl font-heading text-base font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  clientInfo.orderType === 'pickup'
                    ? 'bg-gray-900 text-white shadow'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Phone className="w-4 h-4 text-yellow-400" />
                <span>Pickup Order</span>
              </button>

              <button
                type="button"
                onClick={() => setClientInfo(prev => ({ ...prev, orderType: 'delivery' }))}
                className={`py-2.5 rounded-xl font-heading text-base font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  clientInfo.orderType === 'delivery'
                    ? 'bg-gradient-to-r from-[#e02e07] to-[#e52516] text-white shadow'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Delivery Order</span>
              </button>
            </div>

            {/* Form Fields */}
            <div className="space-y-3">
              
              {/* Name */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    name="name"
                    value={clientInfo.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Dwayne Ashley"
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border text-sm text-gray-900 focus:outline-none shadow-sm ${
                      formErrors.name ? 'border-red-500 bg-red-50/50' : 'border-gray-300 focus:border-[#e02e07]'
                    }`}
                  />
                </div>
                {formErrors.name && <p className="text-xs text-red-500 mt-1">{formErrors.name}</p>}
              </div>

              {/* Phone & Email in Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      name="phone"
                      value={clientInfo.phone}
                      onChange={handleInputChange}
                      placeholder="(905) 555-0199"
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border text-sm text-gray-900 focus:outline-none shadow-sm ${
                        formErrors.phone ? 'border-red-500 bg-red-50/50' : 'border-gray-300 focus:border-[#e02e07]'
                      }`}
                    />
                  </div>
                  {formErrors.phone && <p className="text-xs text-red-500 mt-1">{formErrors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Email Address (Optional)
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      name="email"
                      value={clientInfo.email}
                      onChange={handleInputChange}
                      placeholder="client@example.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-gray-300 focus:border-[#e02e07] text-sm text-gray-900 focus:outline-none shadow-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Delivery Address (Shown when Delivery selected) */}
              {clientInfo.orderType === 'delivery' && (
                <div className="p-3.5 rounded-2xl bg-orange-50/50 border border-orange-200 space-y-2.5">
                  <div className="flex items-center gap-1.5 text-xs font-black uppercase text-[#b45309]">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Delivery Location (Hamilton, ON)</span>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <div className="sm:col-span-2">
                      <input
                        type="text"
                        name="address"
                        value={clientInfo.address}
                        onChange={handleInputChange}
                        placeholder="Street Address (e.g. 123 Main St E)"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-white border text-sm text-gray-900 focus:outline-none shadow-sm ${
                          formErrors.address ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-[#e02e07]'
                        }`}
                      />
                      {formErrors.address && <p className="text-xs text-red-500 mt-1">{formErrors.address}</p>}
                    </div>

                    <div>
                      <input
                        type="text"
                        name="unit"
                        value={clientInfo.unit}
                        onChange={handleInputChange}
                        placeholder="Apt / Suite / Buzz"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-gray-300 text-sm text-gray-900 focus:outline-none shadow-sm"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Kitchen / Special Instructions */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1 flex items-center gap-1">
                  <MessageSquare className="w-3.5 h-3.5 text-gray-400" />
                  <span>Special Kitchen Instructions / Dietary Requests</span>
                </label>
                <textarea
                  name="instructions"
                  rows={2}
                  value={clientInfo.instructions}
                  onChange={handleInputChange}
                  placeholder="e.g. Extra sauce on the side, extra crispy wings, scotch bonnet heat on the side..."
                  className="w-full px-3.5 py-2 rounded-xl bg-white border border-gray-300 text-sm text-gray-900 focus:outline-none focus:border-[#e02e07] shadow-sm"
                />
              </div>

            </div>

            {/* Back & Submit Actions */}
            <div className="flex items-center justify-between gap-3 pt-3 border-t border-gray-200">
              <button
                type="button"
                onClick={() => setStep('cart')}
                className="px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                ← Back to Cart
              </button>

              <button
                type="button"
                onClick={handleProceedToDelivery}
                className="px-8 py-3.5 rounded-xl font-heading text-lg font-bold uppercase tracking-wider bg-gradient-to-r from-[#e02e07] to-[#e52516] hover:from-[#f03525] hover:to-[#ff481f] text-white shadow-lg flex items-center gap-2"
              >
                <span>Confirm & Place Order</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}


        {/* ================= STEP 3: ORDER TRANSFER & DELIVERY APP REFLECTION ================= */}
        {step === 'complete' && (
          <div className="space-y-5 text-left animate-fadeIn">
            
            {/* Success Banner */}
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading text-xl font-black text-gray-900 leading-tight">
                  ORDER SUMMARY READY FOR {clientInfo.orderType === 'delivery' ? 'DELIVERY' : 'PICKUP'}
                </h4>
                <p className="text-xs text-gray-600">
                  Customer: <strong>{clientInfo.name}</strong> • Phone: <strong>{clientInfo.phone}</strong> • Total: <strong className="text-[#e02e07]">${total.toFixed(2)}</strong>
                </p>
              </div>
            </div>

            {/* 1-Click Copy Order Button */}
            <div className="p-4 rounded-2xl bg-orange-50/70 border-2 border-orange-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-[#b45309]">
                  📋 Your Selected Items & Instructions
                </span>
                <button
                  onClick={handleCopyOrder}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold uppercase bg-white hover:bg-gray-50 border border-orange-300 text-gray-900 shadow-sm transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#d97706]" />
                      <span>Copy Order Details</span>
                    </>
                  )}
                </button>
              </div>
              
              {/* Order text preview box */}
              <pre className="p-3 rounded-xl bg-white border border-gray-200 text-[11px] font-mono text-gray-700 whitespace-pre-wrap max-h-36 overflow-y-auto leading-relaxed shadow-inner">
                {generateOrderSummaryText()}
              </pre>
            </div>

            {/* If DELIVERY Selected: 1-Click Transfer to Delivery App */}
            {clientInfo.orderType === 'delivery' ? (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-heading text-xl font-bold uppercase text-gray-900">
                    TRANSFER TO YOUR PREFERRED DELIVERY APP:
                  </h4>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Your customized orders are copied to your clipboard. Click below to launch your delivery app of choice and confirm your delivery:
                </p>

                <div className="space-y-2.5">
                  {restaurantInfo.deliveryLinks.map((delivery) => (
                    <a
                      key={delivery.platform}
                      href={delivery.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleCopyOrder}
                      className="p-4 rounded-2xl bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-red-400 transition-all flex items-center justify-between group shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white shadow"
                          style={{ backgroundColor: delivery.color }}
                        >
                          <ShoppingBag className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-heading text-xl font-bold uppercase text-gray-900 group-hover:text-[#e02e07] transition-colors leading-tight">
                            Order on {delivery.name}
                          </h4>
                          <span className="text-[11px] text-gray-500">{delivery.badgeText} • Order reflects site selection</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white px-4 py-2 rounded-xl bg-[#e02e07] group-hover:bg-[#ff481f] shadow-md">
                        <span>Launch App</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              /* If PICKUP Selected: Direct Call-in Action */
              <div className="space-y-3">
                <div className="p-5 rounded-2xl bg-gray-900 text-white space-y-3 shadow-lg">
                  <span className="text-xs font-bold uppercase text-yellow-400 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5" /> CALL RESTAURANT TO CONFIRM PICKUP
                  </span>
                  <p className="text-xs text-gray-300">
                    Call our counter with your order summary ready. We will start preparing it fresh immediately!
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {restaurantInfo.phones.map((phone, idx) => (
                      <a
                        key={idx}
                        href={`tel:${phone.raw}`}
                        className="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold transition-all flex items-center gap-2.5 border border-white/20"
                      >
                        <Phone className="w-4 h-4 text-yellow-400" />
                        <span className="text-base font-heading">{phone.number}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Back Button */}
            <div className="pt-2 flex justify-between items-center border-t border-gray-200">
              <button
                onClick={() => setStep('client-info')}
                className="text-xs font-bold text-gray-600 hover:text-gray-900 uppercase"
              >
                ← Edit Customer Details
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl font-heading text-base font-bold uppercase bg-gray-100 hover:bg-gray-200 text-gray-800"
              >
                Done
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
