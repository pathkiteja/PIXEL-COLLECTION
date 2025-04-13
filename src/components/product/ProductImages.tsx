'use client';

import { useState } from 'react';
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// Import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

interface ProductImagesProps {
  images: string[];
  productName: string;
}

export default function ProductImages({ images, productName }: ProductImagesProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white p-4">
      {/* Main Image Swiper */}
      <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center">
        <Swiper
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="w-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full aspect-square flex items-center justify-center">
                <img
                  src={image}
                  alt={`${productName} - image ${index + 1}`}
                  className="max-w-full max-h-full object-contain"
                  style={{ margin: 'auto' }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* Thumbnail Gallery Swiper */}
      {images.length > 1 && (
        <div className="mt-4">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="thumbs-swiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div 
                  className="border border-gray-200 rounded-md overflow-hidden cursor-pointer hover:border-purple-600 transition-colors"
                >
                  <div className="relative w-full aspect-square flex items-center justify-center">
                    <img 
                      src={image} 
                      alt={`${productName} thumbnail ${index + 1}`}
                      className="max-w-full max-h-full object-contain"
                      style={{ margin: 'auto' }}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}
