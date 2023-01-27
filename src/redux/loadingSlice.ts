import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
};

const LoadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setStartLoading(state) {
      return {
        ...state,
        loading: true,
      };
    },
    setStopLoading(state) {
      return {
        ...state,
        loading: false,
      };
    },
  },
});

export const { setStartLoading, setStopLoading } = LoadingSlice.actions;
const loadingReducer = LoadingSlice.reducer;

export default loadingReducer;
