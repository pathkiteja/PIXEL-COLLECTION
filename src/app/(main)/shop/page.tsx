'use client';

import { useState, useEffect } from 'react';
import { products, categories } from '@/data/products';
import ProductFilter from '@/components/shop/ProductFilter';
import ProductGrid from '@/components/shop/ProductGrid';
import type { Product } from '@/data/products';

export default function ShopPage() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleFilterChange = (filters: {
    category: string;
    priceRange: [number, number];
    sortBy: string;
  }) => {
    setIsLoading(true);
    
    // Apply filters
    let filtered = products.filter(product => {
      // Category filter
      if (filters.category && product.category !== filters.category) {
        return false;
      }
      
      // Price filter
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false;
      }
      
      return true;
    });
    
    // Apply sorting
    switch (filters.sortBy) {
      case 'price-asc':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'name-desc':
        filtered = [...filtered].sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        // 'featured' - show featured products first
        filtered = [...filtered].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
    
    // Simulate network delay
    setTimeout(() => {
      setFilteredProducts(filtered);
      setIsLoading(false);
    }, 300);
  };
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="text-center mb-12">
        <h1 className="font-['Press_Start_2P'] text-3xl mb-4">All Products</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Browse our collection of pixel art treasures, from gaming classics to futuristic landscapes. Each piece is meticulously crafted pixel by pixel.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <ProductFilter 
            categories={categories}
            onFilterChange={handleFilterChange}
          />
        </div>
        
        <div className="lg:col-span-3">
          <ProductGrid 
            products={filteredProducts}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}