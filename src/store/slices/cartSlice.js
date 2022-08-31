import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: [],
  },
  reducers: {
    addItemToCart(state, action) {
      let count = +action.payload.count;
      let isItemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (isItemInCart) {
        state.cart.forEach((item) => {
          if (item.id === action.payload.id) {
            count += item.count;
          }
        });
        state.cart = state.cart
          .filter((item) => item.id !== action.payload.id)
          .concat({ ...action.payload, count: count });
      } else {
        state.cart = state.cart.concat({ ...action.payload });
      }
    },
    deleteItemFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    clearCart(state) {
      state.cart = [];
    },
    incrementCount(state, action) {
      state.cart.find((item) => item.id === action.payload).count++;
    },
    decrementCount(state, action) {
      state.cart.find((item) => item.id === action.payload).count--;
    },
  },
});

export default cartSlice.reducer;
export const {
  addItemToCart,
  deleteItemFromCart,
  clearCart,
  incrementCount,
  decrementCount,
} = cartSlice.actions;
