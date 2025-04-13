import { selectCartTotal } from '@/redux/cartSlice';
import { useSelector } from 'react-redux';
import Link from 'next/link';

export default function CartSummary() {
  const cartTotal = useSelector(selectCartTotal);
  const shippingCost = 5.99;
  const tax = cartTotal * 0.08; // 8% tax
  const orderTotal = cartTotal + shippingCost + tax;
  
  return (
    <div className="bg-gray-100 p-6 border-pixel">
      <h2 className="font-['Press_Start_2P'] text-lg mb-4">Order Summary</h2>
      
      <div className="space-y-2 mb-6">
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
      
      <Link 
        href="/checkout"
        className="btn-retro w-full text-center text-white text-sm py-2 px-4 block"
      >
        Proceed to Checkout
      </Link>
      
      <div className="mt-4 text-xs text-center text-gray-600">
        <p>Secure checkout powered by Pixel Payments</p>
      </div>
    </div>
  );
}