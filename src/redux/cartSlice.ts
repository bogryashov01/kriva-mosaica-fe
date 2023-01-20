import { createSlice } from '@reduxjs/toolkit';

const initialState: any = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      const { id } = payload;

      const find = state.find((item: { id: any }) => item.id === id);

      if (find) {
        return state.map((item: { id: any; quantity: number }) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        );
      } else {
        state.push({
          ...payload,
          quantity: 1,
        });
      }
    },
    increament(state, { payload }) {
      return state.map((item: { id: any; quantity: number }) =>
        item.id === payload
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      );
    },
    decrement(state, { payload }) {
      return state.map((item: { id: any; quantity: number }) =>
        item.id === payload
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item,
      );
    },
    clear(state) {
      return [];
    },
  },
});

export const { addToCart, increament, decrement, clear } = cartSlice.actions;
const cartReducer = cartSlice.reducer;

export default cartReducer;
