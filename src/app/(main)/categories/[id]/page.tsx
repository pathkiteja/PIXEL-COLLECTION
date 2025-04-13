'use client';

import { useParams } from 'next/navigation';
import { categories, getProductsByCategory } from '@/data/products';
import ProductGrid from '@/components/shop/ProductGrid';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function CategoryPage() {
  const { id } = useParams();
  const categoryId = Array.isArray(id) ? id[0] : id;
  
  const category = categories.find(cat => cat.id === categoryId);
  const products = getProductsByCategory(categoryId);
  
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate network delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (!category) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="font-['Press_Start_2P'] text-2xl mb-6">Category Not Found</h2>
        <p className="mb-8">The category you're looking for doesn't exist.</p>
        <Link 
          href="/categories" 
          className="btn-retro inline-block px-6 py-3"
        >
          View All Categories
        </Link>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 lg:h-96 w-full mb-12 overflow-hidden border-pixel">
        <img
          src={category.image}
          alt={category.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-6">
          <h1 className="font-['Press_Start_2P'] text-2xl md:text-3xl text-white mb-4">
            {category.name}
          </h1>
          <p className="text-white text-center max-w-2xl">
            {category.description}
          </p>
        </div>
      </div>
      
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <h2 className="font-['Press_Start_2P'] text-xl">Products</h2>
          <Link href="/categories" className="text-purple-600 hover:text-purple-800 text-sm">
            ← Back to Categories
          </Link>
        </div>
      </div>
      
      <ProductGrid products={products} isLoading={isLoading} />
    </div>
  );
}