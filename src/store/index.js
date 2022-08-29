import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
import productReducer from "./slices/productSlice";
import userReducer from "./slices/userSlice";
import cartReducer from "./slices/cartSlice";

const rootReducer = combineReducers({
  products: productsReducer,
  product: productReducer,
  user: userReducer,
  cart: cartReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
