import React from "react";
import { ProductsList } from "../../ProductsList/ProductsList";

export const HomePage = ({ addToCart }) => {
  return <ProductsList addToCart={addToCart} />;
};
