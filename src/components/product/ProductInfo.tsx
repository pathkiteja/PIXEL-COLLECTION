'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/cartSlice';
import { addToWishlist, removeFromWishlist } from '@/redux/wishlistSlice';

interface ProductInfoProps {
  product: any;
  isInWishlist: boolean;
  setIsInWishlist: (value: boolean) => void;
  showNotification: (message: string, type: string) => void;
}

export default function ProductInfo({ product, isInWishlist, setIsInWishlist, showNotification }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };
  
  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
    showNotification('Added to cart successfully!', 'success');
  };
  
  const toggleWishlist = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
      setIsInWishlist(false);
      showNotification('Removed from wishlist', 'info');
    } else {
      dispatch(addToWishlist(product));
      setIsInWishlist(true);
      showNotification('Added to wishlist!', 'success');
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold font-pixel mb-2">{product.name}</h1>
      
      {/* Artist */}
      <div className="mb-4 text-xl text-black font-semibold">
        {product.title}
      </div>
      
      {/* Price */}
      <div className="mb-6">
        <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
        {product.originalPrice && (
          <span className="ml-2 line-through text-gray-500">${product.originalPrice.toFixed(2)}</span>
        )}
        {product.originalPrice && (
          <span className="ml-2 bg-red-500 text-white text-sm px-2 py-1 rounded">
            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
          </span>
        )}
      </div>
      
      {/* Short Description */}
      <div className="mb-6 text-gray-600">
        <p>{product.shortDescription}</p>
      </div>
      
      {/* Quantity & Add to Cart */}
      <div className="mb-6">
        <div className="flex items-center space-x-4">
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
            <button 
              className="px-3 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
              onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            >
              -
            </button>
            <input 
              type="number" 
              min="1" 
              value={quantity}
              onChange={handleQuantityChange}
              className="w-12 px-2 py-2 text-center border-none focus:outline-none"
            />
            <button 
              className="px-3 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
          <button 
            onClick={handleAddToCart}
            className="flex-grow bg-purple-600 text-white px-6 py-3 rounded-md font-bold hover:bg-purple-700 transition-colors flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Add to Cart
          </button>
          <button 
            onClick={toggleWishlist}
            className={`p-3 rounded-md border ${
              isInWishlist ? 'bg-red-50 border-red-200 text-red-500' : 'border-gray-300 hover:bg-gray-100'
            } transition-colors`}
            aria-label={isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill={isInWishlist ? "currentColor" : "none"} 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
              />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Features */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-3">Features:</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li>Resolution: {product.resolution || '1920x1080'}</li>
          <li>Format: {product.format || 'Digital Download (PNG, JPG)'}</li>
          {product.printOptions && <li>Print Options: {product.printOptions}</li>}
          <li>Commercial use: {product.commercialUse ? 'Licensed for commercial use' : 'Personal use only'}</li>
        </ul>
      </div>
      
      {/* Tags */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {product.tags?.map((tag: string, index: number) => (
            <Link 
              key={index}
              href={`/tags/${tag}`}
              className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
      
      {/* Social Share */}
      <div className="border-t border-b border-gray-200 py-4 my-6">
        <div className="flex items-center">
          <span className="mr-4 text-gray-600">Share:</span>
          <div className="flex space-x-3">
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-700 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.5c0-2.33 1.046-3.5 3.5-3.5h2.5v3z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
