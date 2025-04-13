import Link from 'next/link';
import Image from 'next/image';

export default function EmptyWishlist() {
  return (
    <div className="text-center py-16 px-4">
      <div className="mb-8 relative w-32 h-32 mx-auto">
        <img
          src="/window.svg"
          alt="Empty wishlist"
          fill
          className="opacity-50"
        />
      </div>
      <h2 className="font-['Press_Start_2P'] text-xl mb-4">Your Wishlist is Empty</h2>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        Discover pixel art treasures and save them to your wishlist for later.
      </p>
      <Link
        href="/"
        className="btn-retro inline-block text-white text-sm py-2 px-6"
      >
        Explore Products
      </Link>
    </div>
  );
}