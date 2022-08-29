import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!response.ok) {
        throw new Error("Server Error");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    product: {},
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [fetchProduct.pending]: (state) => {
      state.loading = true;
      state.error = "";
    },
    [fetchProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },
    [fetchProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default productSlice.reducer;
