'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { categories } from '@/data/products';

export default function CategoryDisplay() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-pixel text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
            EXPLORE CATEGORIES
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our curated collection of pixel art across different themes and styles
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              href={`/categories/${category.id}`}
              key={category.id}
              className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={category.image}
                  fill
                  alt={category.name}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                  <h3 className="text-xl font-bold mb-2 font-pixel tracking-wider">
                    {category.name.toUpperCase()}
                  </h3>
                  <p className="text-sm text-center opacity-90 max-w-xs">
                    {category.description}
                  </p>
                  <div className="mt-4 bg-purple-600 px-4 py-2 rounded-lg font-pixel text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    VIEW COLLECTION
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}