'use client';

import { useSelector } from 'react-redux';
import { selectWishlistItems } from '@/redux/wishlistSlice';
import WishlistItem from '@/components/wishlist/WishlistItem';
import EmptyWishlist from '@/components/wishlist/EmptyWishlist';
import { clearWishlist } from '@/redux/wishlistSlice';
import { useDispatch } from 'react-redux';

export default function WishlistPage() {
  const wishlistItems = useSelector(selectWishlistItems);
  const dispatch = useDispatch();
  
  if (wishlistItems.length === 0) {
    return <EmptyWishlist />;
  }
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-['Press_Start_2P'] text-2xl">Your Wishlist</h1>
        {wishlistItems.length > 0 && (
          <button
            onClick={() => dispatch(clearWishlist())}
            className="text-sm text-red-500 hover:text-red-600"
          >
            Clear All
          </button>
        )}
      </div>
      
      <div className="bg-white border-pixel shadow-lg">
        <div className="p-4 bg-gray-800 text-white font-['Press_Start_2P'] text-sm flex justify-between">
          <span>Item</span>
          <span>Actions</span>
        </div>
        
        {wishlistItems.map((item) => (
          <WishlistItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-gray-600 mb-6">
          Items in your wishlist are saved for future visits.
        </p>
      </div>
    </div>
  );
}