import React from "react";
import s from "./Cart.module.css";

export const Cart = ({ cart }) => {
  let count = 0;
  let cost = 0;
  cart.forEach((item) => {
    count += item.count;
    cost += item.count * item.price;
  });
  return (
    <div className={s.cart}>
      Cart: {count} {count > 1 ? "items" : "item"}, total cost: {cost}$
    </div>
  );
};
