'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/cartSlice';
import { addToWishlist } from '@/redux/wishlistSlice';
import { featuredProducts } from '@/data/products';

export default function FeaturedProduct() {
  const dispatch = useDispatch();
  
  // Use the first featured product
  const product = featuredProducts[0];
  
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [selectedColor, setSelectedColor] = useState(selectedVariant.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0],
      quantity: quantity,
      variant: selectedVariant.name,
      color: selectedColor.name
    }));
  };

  const handleAddToWishlist = () => {
    dispatch(addToWishlist({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0]
    }));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-pixel text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
            FEATURED PRODUCT
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Check out our spotlight pixel art collectible
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Product Images */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-96 md:h-[500px] w-full mb-4 overflow-hidden rounded-lg border-4 border-purple-200">
              <img
                src={product.images[currentImageIndex]}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative h-20 w-full rounded overflow-hidden border-2 ${
                    currentImageIndex === index ? 'border-purple-600' : 'border-gray-200'
                  }`}
                >
                  <img src={image} alt={`${product.title} - Image ${index + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-2xl md:text-3xl font-bold font-pixel mb-2">{product.title}</h1>
            <div className="text-xl md:text-2xl text-purple-600 font-bold mb-4 font-pixel">
              ${product.price.toFixed(2)}
            </div>

            <div className="mb-6">
              <p className="text-gray-700">{product.description}</p>
            </div>

            {/* Variants */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-900 mb-2">Variant</h3>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => {
                      setSelectedVariant(variant);
                      setSelectedColor(variant.colors[0]);
                    }}
                    className={`px-4 py-2 border-2 rounded-md ${
                      selectedVariant.id === variant.id
                        ? 'border-purple-600 bg-purple-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {variant.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div className="mb-8">
              <h3 className="font-medium text-gray-900 mb-2">Color</h3>
              <div className="flex flex-wrap gap-2">
                {selectedVariant.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 ${
                      selectedColor.name === color.name ? 'ring-2 ring-purple-600 ring-offset-2' : ''
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="font-medium text-gray-900 mb-2">Quantity</h3>
              <div className="flex items-center">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-l-md bg-gray-100 text-gray-600"
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 h-10 border-t border-b border-gray-300 text-center"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-r-md bg-gray-100 text-gray-600"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg font-bold font-pixel transition-colors flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                ADD TO CART
              </button>
              <button
                onClick={handleAddToWishlist}
                className="flex-1 border-2 border-purple-600 text-purple-600 hover:bg-purple-50 py-3 px-6 rounded-lg font-bold font-pixel transition-colors flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                WISHLIST
              </button>
            </div>

            {/* View Details Button */}
            <div className="mt-6">
              <Link 
                href={`/product/${product.id}`}
                className="inline-block w-full text-center py-3 border-2 border-gray-300 hover:border-gray-400 rounded-lg font-bold font-pixel transition-colors"
              >
                VIEW FULL DETAILS
              </Link>
            </div>

            {/* Product metadata */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-500">Category:</span>
                <Link href={`/categories/${product.category}`} className="text-purple-600 hover:underline">
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </Link>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">SKU:</span>
                <span>{product.id}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}