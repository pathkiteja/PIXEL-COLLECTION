import { removeFromCart, updateQuantity } from '@/redux/cartSlice';
import { useDispatch } from 'react-redux';
import Image from 'next/image';

interface CartItemProps {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
  variant: string;
  color: string;
}

export default function CartItem({ id, title, price, image, quantity, variant, color }: CartItemProps) {
  const dispatch = useDispatch();
  
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity <= 0) {
      dispatch(removeFromCart({ id, variant, color }));
      return;
    }
    
    dispatch(updateQuantity({ id, variant, color, quantity: newQuantity }));
  };

  const handleRemove = () => {
    dispatch(removeFromCart({ id, variant, color }));
  };

  return (
    <div className="flex gap-4 p-4 border-b border-gray-800">
      <div className="w-24 h-24 relative border-pixel">
        <img 
          src={image} 
          alt={title}
          fill
          sizes="96px"
          className="object-cover"
        />
      </div>
      
      <div className="flex-1">
        <h3 className="font-['Press_Start_2P'] text-sm mb-1">{title}</h3>
        <p className="text-xs mb-1">Variant: {variant}</p>
        <p className="text-xs mb-2">Color: {color}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center border border-gray-800">
            <button 
              onClick={() => handleQuantityChange(quantity - 1)}
              className="px-2 py-1 bg-gray-800 text-white hover:bg-purple-700 transition"
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span className="px-3">{quantity}</span>
            <button 
              onClick={() => handleQuantityChange(quantity + 1)}
              className="px-2 py-1 bg-gray-800 text-white hover:bg-purple-700 transition"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
          <span className="font-['Press_Start_2P'] text-sm">${(price * quantity).toFixed(2)}</span>
        </div>
        <button 
          onClick={handleRemove}
          className="text-xs text-red-500 mt-2 hover:text-red-600 transition"
        >
          Remove
        </button>
      </div>
    </div>
  );
}