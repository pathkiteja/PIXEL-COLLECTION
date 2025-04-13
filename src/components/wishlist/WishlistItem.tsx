import { removeFromWishlist } from '@/redux/wishlistSlice';
import { addToCart } from '@/redux/cartSlice';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';

interface WishlistItemProps {
  id: string;
  title: string;
  price: number;
  image: string;
}

export default function WishlistItem({ id, title, price, image }: WishlistItemProps) {
  const dispatch = useDispatch();
  
  const handleRemove = () => {
    dispatch(removeFromWishlist(id));
  };

  const handleAddToCart = () => {
    dispatch(addToCart({
      id,
      title,
      price,
      image,
      quantity: 1,
      variant: 'Digital File', // Default variant
      color: 'Classic' // Default color
    }));
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 border-b border-gray-800 items-center">
      <Link href={`/product/${id}`} className="block">
        <div className="w-24 h-24 relative border-pixel">
          <img 
            src={image} 
            alt={title}
            fill
            sizes="96px"
            className="object-cover"
          />
        </div>
      </Link>
      
      <div className="flex-1 flex flex-col md:flex-row w-full justify-between items-center">
        <div>
          <Link href={`/product/${id}`}>
            <h3 className="font-['Press_Start_2P'] text-sm mb-1 hover:text-purple-600">{title}</h3>
          </Link>
          <p className="font-['Press_Start_2P'] text-sm">${price.toFixed(2)}</p>
        </div>
        
        <div className="flex gap-2 mt-2 md:mt-0">
          <button 
            onClick={handleAddToCart}
            className="btn-retro text-xs py-1 px-3"
            aria-label="Add to cart"
          >
            Add to Cart
          </button>
          <button 
            onClick={handleRemove}
            className="text-xs py-1 px-3 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition"
            aria-label="Remove from wishlist"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}