'use client';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, selectCartTotal, clearCart } from '@/redux/cartSlice';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function CheckoutPage() {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch();
  const router = useRouter();
  
  const [step, setStep] = useState<'shipping' | 'payment' | 'confirmation'>('shipping');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form states
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: 'United States',
    email: '',
    phone: ''
  });
  
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvc: ''
  });
  
  // Shipping cost and tax calculations
  const shippingCost = 5.99;
  const tax = cartTotal * 0.08; // 8% tax
  const orderTotal = cartTotal + shippingCost + tax;
  
  // Handle shipping form submission
  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
    window.scrollTo(0, 0);
  };
  
  // Handle payment form submission
  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsSubmitting(false);
      setStep('confirmation');
      dispatch(clearCart());
      window.scrollTo(0, 0);
    }, 2000);
  };
  
  // If cart is empty and not in confirmation step, redirect to cart
  if (cartItems.length === 0 && step !== 'confirmation') {
    router.push('/cart');
    return null;
  }
  
  // Order confirmation screen
  if (step === 'confirmation') {
    return (
      <div className="container mx-auto px-4 py-16 max-w-4xl text-center">
        <div className="mb-8 relative w-24 h-24 mx-auto">
          <img
            src="/globe.svg"
            alt="Order Confirmed"
            fill
            className="pixel-animate"
          />
        </div>
        <h1 className="font-['Press_Start_2P'] text-2xl mb-8">Order Confirmed!</h1>
        <div className="bg-gray-100 p-6 mb-8 border-pixel inline-block">
          <p className="mb-4">Your order has been processed successfully.</p>
          <p className="mb-4">
            A confirmation email has been sent to <span className="font-semibold">{shippingInfo.email}</span>
          </p>
          <p className="mb-4">Order #: {Math.random().toString(36).substring(2, 10).toUpperCase()}</p>
        </div>
        <Link
          href="/"
          className="btn-retro inline-block text-white text-sm py-2 px-6"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="font-['Press_Start_2P'] text-2xl mb-8 text-center">Checkout</h1>
      
      {/* Progress indicator */}
      <div className="flex justify-center mb-12">
        <div className="flex items-center">
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 flex items-center justify-center rounded-full ${step === 'shipping' || step === 'payment' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>
              1
            </div>
            <span className="mt-2 text-sm">Shipping</span>
          </div>
          <div className={`w-16 h-1 ${step === 'shipping' || step === 'payment' ? 'bg-purple-600' : 'bg-gray-200'}`}></div>
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 flex items-center justify-center rounded-full ${step === 'payment' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>
              2
            </div>
            <span className="mt-2 text-sm">Payment</span>
          </div>
          <div className={`w-16 h-1 ${step === 'confirmation' ? 'bg-purple-600' : 'bg-gray-200'}`}></div>
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 flex items-center justify-center rounded-full ${step === 'confirmation' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>
              3
            </div>
            <span className="mt-2 text-sm">Confirmation</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form section */}
        <div className="lg:col-span-2">
          {step === 'shipping' && (
            <form onSubmit={handleShippingSubmit} className="bg-white p-6 shadow-lg border-pixel">
              <h2 className="font-['Press_Start_2P'] text-lg mb-6">Shipping Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="firstName" className="block mb-1 text-sm">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    required
                    className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    value={shippingInfo.firstName}
                    onChange={(e) => setShippingInfo({...shippingInfo, firstName: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-1 text-sm">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    required
                    className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    value={shippingInfo.lastName}
                    onChange={(e) => setShippingInfo({...shippingInfo, lastName: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="address" className="block mb-1 text-sm">Street Address</label>
                <input 
                  type="text" 
                  id="address" 
                  required
                  className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  value={shippingInfo.address}
                  onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
                />
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label htmlFor="city" className="block mb-1 text-sm">City</label>
                  <input 
                    type="text" 
                    id="city" 
                    required
                    className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    value={shippingInfo.city}
                    onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block mb-1 text-sm">State</label>
                  <input 
                    type="text" 
                    id="state" 
                    required
                    className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    value={shippingInfo.state}
                    onChange={(e) => setShippingInfo({...shippingInfo, state: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="zip" className="block mb-1 text-sm">ZIP Code</label>
                  <input 
                    type="text" 
                    id="zip" 
                    required
                    className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    value={shippingInfo.zip}
                    onChange={(e) => setShippingInfo({...shippingInfo, zip: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block mb-1 text-sm">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  value={shippingInfo.email}
                  onChange={(e) => setShippingInfo({...shippingInfo, email: e.target.value})}
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block mb-1 text-sm">Phone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  required
                  className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  value={shippingInfo.phone}
                  onChange={(e) => setShippingInfo({...shippingInfo, phone: e.target.value})}
                />
              </div>
              
              <div className="flex justify-between">
                <Link href="/cart" className="text-sm text-purple-600 hover:text-purple-800">
                  ← Return to Cart
                </Link>
                <button 
                  type="submit" 
                  className="btn-retro text-white text-sm py-2 px-6"
                >
                  Continue to Payment
                </button>
              </div>
            </form>
          )}
          
          {step === 'payment' && (
            <form onSubmit={handlePaymentSubmit} className="bg-white p-6 shadow-lg border-pixel">
              <h2 className="font-['Press_Start_2P'] text-lg mb-6">Payment Information</h2>
              
              <div className="mb-4">
                <label htmlFor="cardName" className="block mb-1 text-sm">Name on Card</label>
                <input 
                  type="text" 
                  id="cardName" 
                  required
                  className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  value={paymentInfo.cardName}
                  onChange={(e) => setPaymentInfo({...paymentInfo, cardName: e.target.value})}
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="cardNumber" className="block mb-1 text-sm">Card Number</label>
                <input 
                  type="text" 
                  id="cardNumber" 
                  required
                  placeholder="XXXX XXXX XXXX XXXX"
                  className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  value={paymentInfo.cardNumber}
                  onChange={(e) => setPaymentInfo({...paymentInfo, cardNumber: e.target.value})}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="expiry" className="block mb-1 text-sm">Expiration Date</label>
                  <input 
                    type="text" 
                    id="expiry" 
                    required
                    placeholder="MM/YY"
                    className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    value={paymentInfo.expiry}
                    onChange={(e) => setPaymentInfo({...paymentInfo, expiry: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="cvc" className="block mb-1 text-sm">CVC</label>
                  <input 
                    type="text" 
                    id="cvc" 
                    required
                    placeholder="123"
                    className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    value={paymentInfo.cvc}
                    onChange={(e) => setPaymentInfo({...paymentInfo, cvc: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="flex justify-between">
                <button 
                  type="button" 
                  onClick={() => setStep('shipping')} 
                  className="text-sm text-purple-600 hover:text-purple-800"
                >
                  ← Back to Shipping
                </button>
                <button 
                  type="submit" 
                  className="btn-retro text-white text-sm py-2 px-6 flex items-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="mr-2">Processing</span>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    </>
                  ) : (
                    'Complete Order'
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
        
        {/* Order summary */}
        <div className="lg:col-span-1">
          <div className="bg-gray-100 p-6 shadow-lg border-pixel">
            <h2 className="font-['Press_Start_2P'] text-lg mb-4">Order Summary</h2>
            
            <div className="max-h-64 overflow-y-auto mb-4">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.variant}-${item.color}`} className="flex items-center mb-3 pb-3 border-b border-gray-300">
                  <div className="w-16 h-16 relative border border-gray-800">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-3 flex-1">
                    <h4 className="text-sm font-semibold line-clamp-1">{item.title}</h4>
                    <p className="text-xs text-gray-600">{item.variant}, {item.color}</p>
                    <div className="flex justify-between mt-1">
                      <span className="text-xs">Qty: {item.quantity}</span>
                      <span className="text-sm">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-2 mb-6 border-t border-gray-300 pt-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shippingCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-300 pt-2 flex justify-between font-['Press_Start_2P'] text-sm">
                <span>Total</span>
                <span>${orderTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}