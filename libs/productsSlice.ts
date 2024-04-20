"use client"
import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setProducts, setLoading, setError } = productsSlice.actions;

export const selectProducts = (state:any) => state.products.data;

export default productsSlice.reducer;
