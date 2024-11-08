// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import cartSlice from './cartSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    cart: cartSlice,
    // Add other slices here as needed
  },
});

export default store;
