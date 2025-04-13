import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="font-['Press_Start_2P'] text-3xl mb-6">About Pixel Collectives</h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          We're passionate pixel artists creating digital nostalgia for the modern age.
        </p>
      </div>
      
      {/* Our Story */}
      <div className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 md:h-96 border-pixel overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=1200"
              alt="Pixel Art Creation"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-['Press_Start_2P'] text-2xl mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Pixel Collectives began in 2020 when a group of digital artists with a shared love for retro gaming aesthetics came together to create and collect pixel art. What started as a Discord community quickly evolved into a thriving marketplace for unique digital collectibles.
            </p>
            <p className="text-gray-700">
              Today, we represent over 50 talented pixel artists from around the world, curating collections that range from nostalgic gaming tributes to cutting-edge crypto art. Our mission is to preserve and evolve the pixel art medium, bringing these digital treasures to collectors and enthusiasts worldwide.
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Process */}
      <div className="mb-20">
        <h2 className="font-['Press_Start_2P'] text-2xl mb-8 text-center">Our Process</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 border-pixel">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
              <span className="font-['Press_Start_2P'] text-purple-600 text-xl">1</span>
            </div>
            <h3 className="font-['Press_Start_2P'] text-lg mb-3 text-center">Concept</h3>
            <p className="text-gray-600 text-center">
              Every piece begins with a concept, whether inspired by retro games, modern themes, or commissioned ideas from our community.
            </p>
          </div>
          
          <div className="bg-white p-6 border-pixel">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
              <span className="font-['Press_Start_2P'] text-purple-600 text-xl">2</span>
            </div>
            <h3 className="font-['Press_Start_2P'] text-lg mb-3 text-center">Creation</h3>
            <p className="text-gray-600 text-center">
              Our artists meticulously place each pixel by hand, with careful attention to color palette, composition, and animation (where applicable).
            </p>
          </div>
          
          <div className="bg-white p-6 border-pixel">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
              <span className="font-['Press_Start_2P'] text-purple-600 text-xl">3</span>
            </div>
            <h3 className="font-['Press_Start_2P'] text-lg mb-3 text-center">Collection</h3>
            <p className="text-gray-600 text-center">
              Finished pieces are curated into themed collections, carefully optimized for digital display and physical printing.
            </p>
          </div>
        </div>
      </div>
      
      {/* Team Section */}
      <div className="mb-20">
        <h2 className="font-['Press_Start_2P'] text-2xl mb-8 text-center">Meet Our Team</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Team Member 1 */}
          <div className="text-center">
            <div className="relative w-40 h-40 mx-auto mb-4 border-pixel overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400"
                alt="Alex Kim - Founder"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold">Alex Kim</h3>
            <p className="text-purple-600">Founder & Lead Artist</p>
          </div>
          
          {/* Team Member 2 */}
          <div className="text-center">
            <div className="relative w-40 h-40 mx-auto mb-4 border-pixel overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400"
                alt="Mia Chen - Artist"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold">Mia Chen</h3>
            <p className="text-purple-600">Creative Director</p>
          </div>
          
          {/* Team Member 3 */}
          <div className="text-center">
            <div className="relative w-40 h-40 mx-auto mb-4 border-pixel overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400"
                alt="Jordan Levy - Developer"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold">Jordan Levy</h3>
            <p className="text-purple-600">Technical Director</p>
          </div>
          
          {/* Team Member 4 */}
          <div className="text-center">
            <div className="relative w-40 h-40 mx-auto mb-4 border-pixel overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400"
                alt="Taylor Morgan - Marketing"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold">Taylor Morgan</h3>
            <p className="text-purple-600">Community Manager</p>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-purple-100 p-8 md:p-12 text-center border-pixel">
        <h2 className="font-['Press_Start_2P'] text-xl mb-4">Join Our Pixel Community</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Whether you're a collector, an aspiring pixel artist, or just a fan of retro aesthetics, there's a place for you in our community.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/shop" 
            className="btn-retro px-6 py-3 text-white"
          >
            Shop Collections
          </Link>
          <Link 
            href="/contact" 
            className="border-2 border-purple-600 px-6 py-3 text-purple-600 hover:bg-purple-50 transition"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}