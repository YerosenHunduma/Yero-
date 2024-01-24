import { configureStore } from "@reduxjs/toolkit";
import LoaderReducer from "./loadingSlice";
import userSlice from "./userSlice";
import productFormSlice from "./ProductFromSlice";
import productSlice from "./productSlice";

const store = configureStore({
  reducer: {
    loader: LoaderReducer,
    user: userSlice,
    product: productSlice,
    productF: productFormSlice,
  },
});

export default store;
