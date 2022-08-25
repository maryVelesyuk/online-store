import React from "react";
import { Link } from "react-router-dom";
import s from "./Product.module.css";

export const Product = ({
  id,
  title,
  price,
  images,
  isLoggedIn,
  addToCart,
}) => {
  return (
    <div className={s.product}>
      <div className={s.product_img}>
        <img src={images[0]} alt={title} />
      </div>

      <div className={s.product_info}>
        <div className={s.product_name}>
          <Link to={`/${id}`}>{title}</Link>
        </div>
        <div className={s.product_price}>{price}$</div>
      </div>
      {isLoggedIn ? (
        <div className={s.product_btns}>
          <button onClick={() => addToCart(1, price)}>Add to Cart</button>
        </div>
      ) : (
        <div className={s.unauthorised_user_text}>
          You must be logged in to add an item to your cart
        </div>
      )}
    </div>
  );
};
