import { Link } from "react-router-dom";
import SvgIcons from "../../icons/SvgIcons";
import { useSelector } from "react-redux";
import s from "./Cart.module.css";

export const Cart = () => {
  const { cart } = useSelector((state) => state.cart);

  let count = 0;
  let cost = 0;
  cart.forEach((item) => {
    count += item.count;
    cost += item.count * item.price;
  });
  return (
    <div className={s.cart}>
      <div className={s.cart_icon}>
        <Link to="/cart">
          <SvgIcons id="cart" />
        </Link>
      </div>
      <div className={s.cart_info}>
        Cart: {count} {count > 1 ? "items" : "item"}, total cost:
        {cost.toFixed(2)}$
      </div>
    </div>
  );
};
