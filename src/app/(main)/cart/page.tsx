'use client';

import { useSelector } from 'react-redux';
import { selectCartItems } from '@/redux/cartSlice';
import CartItem from '@/components/cart/CartItem';
import CartSummary from '@/components/cart/CartSummary';
import EmptyCart from '@/components/cart/EmptyCart';

export default function CartPage() {
  const cartItems = useSelector(selectCartItems);
  
  if (cartItems.length === 0) {
    return <EmptyCart />;
  }
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="font-['Press_Start_2P'] text-2xl mb-8 text-center">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white shadow-lg">
          <div className="p-4 bg-gray-800 text-white font-['Press_Start_2P'] text-sm flex justify-between">
            <span>Item</span>
            <span>Price</span>
          </div>
          
          <div>
            {cartItems.map((item) => (
              <CartItem
                key={`${item.id}-${item.variant}-${item.color}`}
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                quantity={item.quantity}
                variant={item.variant}
                color={item.color}
              />
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <CartSummary />
        </div>
      </div>
    </div>
  );
}