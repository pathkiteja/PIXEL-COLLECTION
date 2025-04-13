'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/cartSlice';
import { addToWishlist } from '@/redux/wishlistSlice';
import { products } from '@/data/products';

export default function ProductCardsList() {
  const dispatch = useDispatch();
  // Limit to 8 products for homepage display
  const displayProducts = products.slice(0, 8);

  const handleAddToCart = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      dispatch(addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.images[0],
        quantity: 1,
        variant: product.variants[0].name,
        color: product.variants[0].colors[0].name,
      }));
    }
  };

  const handleAddToWishlist = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      dispatch(addToWishlist({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.images[0],
      }));
    }
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-pixel text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
            EXPLORE OUR COLLECTION
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our curated selection of pixel art collectibles
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative group">
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.featured && (
                    <div className="absolute top-2 left-2 bg-purple-600 text-white text-xs font-pixel px-2 py-1 rounded">
                      FEATURED
                    </div>
                  )}
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-2">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleAddToWishlist(product.id);
                      }}
                      className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors"
                      aria-label="Add to wishlist"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleAddToCart(product.id);
                      }}
                      className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors"
                      aria-label="Add to cart"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <Link href={`/product/${product.id}`} className="block p-4">
                <h3 className="text-lg font-bold mb-1 font-pixel text-gray-800 hover:text-purple-600 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-500 text-sm mb-2 line-clamp-2">
                  {product.description.substring(0, 80)}...
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-purple-600">${product.price.toFixed(2)}</span>
                  <span className="text-xs text-gray-500">{product.variants.length} variants</span>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/shop"
            className="inline-block bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-lg font-pixel transition-all duration-300 transform hover:scale-105"
          >
            VIEW ALL PRODUCTS
          </Link>
        </div>
      </div>
    </section>
  );
}