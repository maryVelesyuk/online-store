import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (limit, { rejectWithValue }) => {
    try {
      //здесь я для погинации увеличиваю лимит, я понимаю, что это не правильно,
      // т.к. я заново загружаю уже загруженные продукты.
      // здесь нужно в запросе указывать offset или page и увеличивать его,
      // но у этого API нет такой функциональности

      const response = await fetch(
        `https://fakestoreapi.com/products?limit=${limit}`
      );
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

const productsSlice = createSlice({
  name: "productsSlice",
  initialState: {
    products: [],
    limit: 8,
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.loading = true;
      state.error = "";
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.limit = state.limit + 8;
      state.products = action.payload;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default productsSlice.reducer;
