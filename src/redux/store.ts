import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import loadingReducer from './loadingSlice';

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: { cart: cartReducer, loading: loadingReducer },
});

export default store;
