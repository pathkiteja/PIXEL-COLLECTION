'use client';

import Image from 'next/image';
import Link from 'next/link';

interface ShowcaseItem {
  id: string;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
}

export default function AlternatingShowcase() {
  const showcaseItems: ShowcaseItem[] = [
    {
      id: 'showcase-1',
      title: 'Nostalgic Pixel Art Collection',
      description: 'Journey back in time with our exclusive nostalgic pixel art collection. Each piece captures the essence of the golden age of gaming, meticulously crafted pixel-by-pixel to evoke that warm feeling of retro adventure. Perfect for gamers, collectors, and anyone with an appreciation for digital art history.',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800',
      buttonText: 'View Collection',
      buttonLink: '/categories/gaming',
    },
    {
      id: 'showcase-2',
      title: 'Limited Edition NFT Series',
      description: 'Own a piece of digital history with our limited edition NFT series. These blockchain-certified pixel artworks combine retro aesthetics with cutting-edge technology. Each unique piece comes with verifiable authenticity and exclusive owner benefits, making them both a nostalgic treasure and a forward-thinking investment.',
      image: 'https://images.unsplash.com/photo-1626162953675-544bf5a32c01?q=80&w=800',
      buttonText: 'Discover NFTs',
      buttonLink: '/categories/crypto-art',
    },
    {
      id: 'showcase-3',
      title: 'Custom Pixel Portraits',
      description: 'Transform yourself, loved ones, or pets into pixel art masterpieces! Our talented artists create custom portraits that capture personality and charm in the distinct pixel style. Whether for a unique gift, profile picture, or personal memento, these custom creations bring pixelated personality to life.',
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800',
      buttonText: 'Order Custom Art',
      buttonLink: '/categories/custom',
    },
    {
      id: 'showcase-4',
      title: 'Pixel Landscapes & Worlds',
      description: 'Explore breathtaking pixel worlds that transport you to imaginative realms. From serene natural landscapes to bustling cyberpunk cities, our pixel environments create immersive experiences that tell stories through meticulously placed pixels. Perfect for home decor that sparks conversation and imagination.',
      image: 'https://images.unsplash.com/photo-1563207153-f403bf289096?q=80&w=800',
      buttonText: 'Explore Worlds',
      buttonLink: '/categories/landscapes',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {showcaseItems.map((item, index) => (
          <div 
            key={item.id}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center my-16 first:mt-0 last:mb-0`}
          >
            <div className={`w-full md:w-1/2 mb-8 md:mb-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
              <div className="relative h-80 md:h-96 w-full overflow-hidden rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 to-transparent mix-blend-multiply" />
              </div>
            </div>
            
            <div className="w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-pixel text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
                {item.title}
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {item.description}
              </p>
              <Link
                href={item.buttonLink}
                className="inline-block bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg font-pixel transition-all duration-300 transform hover:scale-105"
              >
                {item.buttonText}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}