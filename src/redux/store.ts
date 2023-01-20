import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: { cart: cartReducer },
});

export default store;
