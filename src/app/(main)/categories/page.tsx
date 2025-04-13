'use client';

import { categories } from '@/data/products';
import CategoryCard from '@/components/shop/CategoryCard';

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="text-center mb-12">
        <h1 className="font-['Press_Start_2P'] text-3xl mb-4">Categories</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our pixel art collections by category. From retro gaming classics to futuristic landscapes, find the perfect pixel art for your collection.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}