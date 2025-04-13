import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
  variant: string;
  color: string;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

const initialState: CartState = {
  items: [],
  isOpen: false,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItemIndex = state.items.findIndex(
        item => 
          item.id === action.payload.id && 
          item.variant === action.payload.variant && 
          item.color === action.payload.color
      );

      if (existingItemIndex !== -1) {
        // If item already exists with the same variant and color, update quantity
        state.items[existingItemIndex].quantity += action.payload.quantity;
      } else {
        // Otherwise add new item
        state.items.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<{ 
      id: string, 
      variant: string, 
      color: string 
    }>) => {
      state.items = state.items.filter(
        item => 
          !(item.id === action.payload.id && 
            item.variant === action.payload.variant && 
            item.color === action.payload.color)
      );
    },
    updateQuantity: (state, action: PayloadAction<{ 
      id: string, 
      variant: string, 
      color: string, 
      quantity: number 
    }>) => {
      const itemIndex = state.items.findIndex(
        item => 
          item.id === action.payload.id && 
          item.variant === action.payload.variant && 
          item.color === action.payload.color
      );
      
      if (itemIndex !== -1) {
        state.items[itemIndex].quantity = action.payload.quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
    openCart: (state) => {
      state.isOpen = true;
    },
    closeCart: (state) => {
      state.isOpen = false;
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

// Export actions
export const { 
  addToCart, 
  removeFromCart, 
  updateQuantity, 
  clearCart,
  openCart,
  closeCart,
  toggleCart,
} = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;

// Selectors
export const selectCartItems = (state: { cart: CartState }) => state.cart.items;
export const selectCartItemsCount = (state: { cart: CartState }) => 
  state.cart.items.reduce((count, item) => count + item.quantity, 0);
export const selectCartTotal = (state: { cart: CartState }) => 
  state.cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
export const selectIsCartOpen = (state: { cart: CartState }) => state.cart.isOpen;