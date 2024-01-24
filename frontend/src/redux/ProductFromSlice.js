import { createSlice } from "@reduxjs/toolkit";

const ProductFormSlice = createSlice({
  name: "productForfm",
  initialState: {
    productForm: false,
    selectedProduct: null,
  },
  reducers: {
    setAddProduct(state, action) {
      state.productForm = action.payload;
      console.log(state.productForm);
    },
    setEditProduct(state, action) {
      state.selectedProduct = action.payload;
      console.log(state.selectedProduct);
    },
  },
});

export const { setAddProduct, setEditProduct } = ProductFormSlice.actions;

export default ProductFormSlice.reducer;
