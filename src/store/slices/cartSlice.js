import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: [],
  },
  reducers: {
    addItemToCart(state, action) {
      //???Здесь описана логика, чтобы если несколько раз добавляешь один и тот же товар,
      // он не дублировался несколько раз в карзине, а его количество складывалось.
      //можно эту логику оставить в reducer или ее нужно куда-то выносить???
      let count = +action.payload.count;
      state.cart.forEach((item) => {
        if (item.id === action.payload.id) {
          count += item.count;
        }
      });
      state.cart = state.cart
        .filter((item) => item.id !== action.payload.id)
        .concat({ ...action.payload, count: count });
    },
    deleteItemFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export default cartSlice.reducer;
export const { addItemToCart, deleteItemFromCart, clearCart } =
  cartSlice.actions;
