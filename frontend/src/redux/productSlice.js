import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: null,
  },
  reducers: {
    setProduct(state, action) {
      state.products = action.payload;
      console.log("pro", state.product);
    },
  },
});

export const { setProduct } = productSlice.actions;

export default productSlice.reducer;
