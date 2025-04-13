'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/cartSlice';
import { addToWishlist } from '@/redux/wishlistSlice';
import type { Product } from '@/data/products';

// Updated interface to accept either a complete product object or individual properties
interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  product?: Product;
  layout?: 'grid' | 'list';
}

export default function ProductCard({ id, title, price, image, product, layout = 'grid' }: ProductCardProps) {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    dispatch(addToCart({
      id,
      title,
      price,
      image,
      quantity: 1,
      variant: product?.variants?.[0]?.name || 'Digital File',
      color: product?.variants?.[0]?.colors?.[0]?.name || 'Classic'
    }));
  };
  
  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    dispatch(addToWishlist({
      id,
      title,
      price,
      image
    }));
  };
  
  // Handle list layout if product object is available
  if (layout === 'list' && product) {
    return (
      <div className="flex border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
        <div className="w-1/3 relative">
          <Link href={`/product/${product.id}`}>
            <div 
              className="relative h-full w-full"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                src={isHovered && product.images.length > 1 ? product.images[1] : product.images[0]}
                alt={product.title}
                fill
                className="object-cover transition-opacity duration-300"
              />
              {product.featured && (
                <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs px-2 py-1 rounded font-pixel">
                  FEATURED
                </span>
              )}
            </div>
          </Link>
        </div>
        
        <div className="w-2/3 p-4 flex flex-col">
          <div className="mb-2">
            <span className="text-xs text-purple-600 uppercase font-medium">
              {product.category}
            </span>
          </div>
          
          <Link href={`/product/${product.id}`}>
            <h3 className="text-lg font-semibold mb-2 hover:text-purple-600 transition-colors">
              {product.title}
            </h3>
          </Link>
          
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>
          
          <div className="mt-auto flex items-center justify-between">
            <span className="text-lg font-medium font-pixel">${product.price.toFixed(2)}</span>
            
            <div className="flex space-x-2">
              <button
                onClick={handleAddToWishlist}
                className="p-2 rounded-full text-gray-500 hover:bg-gray-100 transition-colors"
                aria-label="Add to wishlist"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </button>
              
              <button
                onClick={handleAddToCart}
                className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded font-medium text-sm flex items-center transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Default grid layout
  return (
    <div className="group relative">
      <Link href={`/product/${id}`}>
        <div 
          className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden bg-gray-100"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={product && isHovered && product.images.length > 1 ? product.images[1] : image}
            alt={title}
            fill
            className="object-cover transition-all duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          
          {/* Quick action buttons that appear on hover */}
          <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center space-x-2">
            <button
              onClick={handleAddToWishlist}
              className="p-2 rounded-full bg-white text-gray-800 hover:bg-purple-600 hover:text-white transition-colors"
              aria-label="Add to wishlist"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </button>
            
            <button
              onClick={handleAddToCart}
              className="p-2 rounded-full bg-white text-gray-800 hover:bg-purple-600 hover:text-white transition-colors"
              aria-label="Quick add to cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
            </button>
            
            <Link 
              href={`/product/${id}`}
              className="p-2 rounded-full bg-white text-gray-800 hover:bg-purple-600 hover:text-white transition-colors"
              aria-label="View details"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          
          {product?.featured && (
            <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs px-2 py-1 rounded font-pixel">
              FEATURED
            </span>
          )}
        </div>
      </Link>
      
      <div className="mt-4">
        <div className="mb-1">
          {product ? (
            <Link 
              href={`/categories/${product.category}`}
              className="text-xs text-purple-600 uppercase font-medium hover:underline"
            >
              {product.category}
            </Link>
          ) : (
            <span className="text-xs text-purple-600 uppercase font-medium">
              Pixel Art
            </span>
          )}
        </div>
        
        <Link href={`/product/${id}`}>
          <h3 className="text-base font-medium text-gray-900 hover:text-purple-600 transition-colors">
            {title}
          </h3>
        </Link>
        
        <div className="mt-2 flex items-center justify-between">
          <p className="font-semibold text-gray-900 font-pixel">${price.toFixed(2)}</p>
          
          {product && (
            <div className="flex items-center">
              {/* Show product variants options */}
              <div className="flex -space-x-1 overflow-hidden">
                {product.variants[0].colors.slice(0, 3).map((color, index) => (
                  <div
                    key={color.name}
                    className="w-4 h-4 rounded-full border border-white"
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
                {product.variants[0].colors.length > 3 && (
                  <div className="w-4 h-4 rounded-full bg-gray-100 border border-white flex items-center justify-center text-xs text-gray-500">
                    +{product.variants[0].colors.length - 3}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}