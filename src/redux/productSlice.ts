import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  products: [],
};

const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});
