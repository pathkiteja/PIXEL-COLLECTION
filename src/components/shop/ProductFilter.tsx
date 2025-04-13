'use client';

import { useState } from 'react';
import { Category } from '@/data/products';

interface ProductFilterProps {
  categories: Category[];
  onFilterChange: (filters: {
    category: string;
    priceRange: [number, number];
    sortBy: string;
  }) => void;
}

export default function ProductFilter({ categories, onFilterChange }: ProductFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [sortBy, setSortBy] = useState<string>('featured');
  
  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    onFilterChange({
      category: categoryId,
      priceRange,
      sortBy,
    });
  };
  
  const handlePriceChange = (min: number, max: number) => {
    setPriceRange([min, max]);
    onFilterChange({
      category: selectedCategory,
      priceRange: [min, max],
      sortBy,
    });
  };
  
  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    onFilterChange({
      category: selectedCategory,
      priceRange,
      sortBy: sort,
    });
  };
  
  const clearFilters = () => {
    setSelectedCategory('');
    setPriceRange([0, 200]);
    setSortBy('featured');
    onFilterChange({
      category: '',
      priceRange: [0, 200],
      sortBy: 'featured',
    });
  };
  
  return (
    <div className="bg-white border-pixel p-6">
      <h2 className="font-['Press_Start_2P'] text-lg mb-6">Filters</h2>
      
      {/* Categories */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3">Categories</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              type="radio"
              id="all-categories"
              name="category"
              checked={selectedCategory === ''}
              onChange={() => handleCategoryChange('')}
              className="mr-2"
            />
            <label htmlFor="all-categories">All Categories</label>
          </div>
          {categories.map((category) => (
            <div key={category.id} className="flex items-center">
              <input
                type="radio"
                id={`category-${category.id}`}
                name="category"
                checked={selectedCategory === category.id}
                onChange={() => handleCategoryChange(category.id)}
                className="mr-2"
              />
              <label htmlFor={`category-${category.id}`}>{category.name}</label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Price Range */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3">Price Range</h3>
        <div className="flex items-center space-x-2">
          <div className="flex items-center border border-gray-300 px-2 py-1 w-24">
            <span className="text-gray-500">$</span>
            <input
              type="number"
              value={priceRange[0]}
              onChange={(e) => handlePriceChange(Number(e.target.value), priceRange[1])}
              className="w-full focus:outline-none"
              min="0"
              max="200"
            />
          </div>
          <span>to</span>
          <div className="flex items-center border border-gray-300 px-2 py-1 w-24">
            <span className="text-gray-500">$</span>
            <input
              type="number"
              value={priceRange[1]}
              onChange={(e) => handlePriceChange(priceRange[0], Number(e.target.value))}
              className="w-full focus:outline-none"
              min="0"
              max="200"
            />
          </div>
        </div>
      </div>
      
      {/* Sort By */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3">Sort By</h3>
        <select
          value={sortBy}
          onChange={(e) => handleSortChange(e.target.value)}
          className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
        >
          <option value="featured">Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="name-desc">Name: Z to A</option>
        </select>
      </div>
      
      {/* Clear Filters Button */}
      <button
        onClick={clearFilters}
        className="text-sm text-purple-600 hover:text-purple-800 border border-purple-600 px-3 py-1 hover:bg-purple-50 transition w-full"
      >
        Clear All Filters
      </button>
    </div>
  );
}