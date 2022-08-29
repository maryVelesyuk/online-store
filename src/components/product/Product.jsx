import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import { addItemToCart } from "../../store/slices/cartSlice";
import s from "./Product.module.css";

export const Product = ({ id, title, price, image }) => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.user);

  const addToCart = () => {
    dispatch(addItemToCart({ id: id, title: title, price: price, count: 1 }));
  };

  return (
    <div className={s.product}>
      <div className={s.product_img}>
        <img src={image} alt={title} />
      </div>

      <div className={s.product_info}>
        <div className={s.product_name}>
          <Link to={`products/${id}`}>{title}</Link>
        </div>
        <div className={s.product_price}>{price}$</div>
      </div>
      {isAuth ? (
        <div className={s.product_btns}>
          <Button onClick={addToCart} text="Add to Cart" />
        </div>
      ) : (
        <div className={s.unauthorised_user_text}>
          You must be logged in to add an item to your cart
        </div>
      )}
    </div>
  );
};
