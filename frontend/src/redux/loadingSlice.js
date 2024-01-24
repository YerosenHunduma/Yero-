import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
  name: "loadings",
  initialState: {
    loading: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = loaderSlice.actions;

export default loaderSlice.reducer;
