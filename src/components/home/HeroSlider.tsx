'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

interface SlideItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  link: string;
}

export default function HeroSlider() {
  const sliderItems: SlideItem[] = [
    {
      id: 'slide-1',
      title: 'Pixel Adventure Hero',
      subtitle: 'Limited Edition Collectibles',
      image: 'https://images.unsplash.com/photo-1569017388730-020b5f80a004?q=80&w=1000',
      link: '/product/pixel-art-1',
    },
    {
      id: 'slide-2',
      title: 'Retro Gaming Collection',
      subtitle: 'Nostalgia in Pixel Form',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000',
      link: '/categories/gaming',
    },
    {
      id: 'slide-3',
      title: 'Space Explorer Series',
      subtitle: 'Journey Through The Cosmos',
      image: 'https://images.unsplash.com/photo-1636642491825-9eb73016bed2?q=80&w=1000',
      link: '/product/pixel-art-10',
    },
    {
      id: 'slide-4',
      title: 'Pixel City Skyline',
      subtitle: 'Urban Landscapes Reimagined',
      image: 'https://images.unsplash.com/photo-1604334104107-a2ea3c2a9b8a?q=80&w=1000',
      link: '/product/pixel-art-6',
    },
  ];

  return (
    <div className="relative w-full h-[500px] sm:h-[600px] overflow-hidden">
      <Swiper
        modules={[Pagination, Navigation, Autoplay, EffectFade]}
        pagination={{ clickable: true }}
        navigation
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        effect="fade"
        className="w-full h-full"
      >
        {sliderItems.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
              <img
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 z-20 text-white">
                <div className="inline-block bg-purple-700 mb-3 px-3 py-1 text-sm font-pixel">NEW ARRIVAL</div>
                <h2 className="text-3xl md:text-5xl font-bold mb-2 font-pixel drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl mb-4 max-w-2xl font-pixel drop-shadow-lg">
                  {slide.subtitle}
                </p>
                <Link
                  href={slide.link}
                  className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-lg font-pixel transition-all duration-300 transform hover:scale-105"
                >
                  EXPLORE NOW
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}