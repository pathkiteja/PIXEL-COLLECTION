import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface WishlistItem {
  id: string;
  title: string;
  price: number;
  image: string;
}

interface WishlistState {
  items: WishlistItem[];
  isOpen: boolean;
}

const initialState: WishlistState = {
  items: [],
  isOpen: false,
};

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<WishlistItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (!existingItem) {
        state.items.push(action.payload);
      }
    },
    removeFromWishlist: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearWishlist: (state) => {
      state.items = [];
    },
    openWishlist: (state) => {
      state.isOpen = true;
    },
    closeWishlist: (state) => {
      state.isOpen = false;
    },
    toggleWishlist: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

// Export actions
export const { 
  addToWishlist, 
  removeFromWishlist, 
  clearWishlist,
  openWishlist,
  closeWishlist,
  toggleWishlist,
} = wishlistSlice.actions;

// Export reducer
export default wishlistSlice.reducer;

// Selectors
export const selectWishlistItems = (state: { wishlist: WishlistState }) => state.wishlist.items;
export const selectWishlistItemsCount = (state: { wishlist: WishlistState }) => state.wishlist.items.length;
export const selectIsWishlistOpen = (state: { wishlist: WishlistState }) => state.wishlist.isOpen;