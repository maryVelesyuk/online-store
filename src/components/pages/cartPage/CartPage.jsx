import SvgIcons from "../../../icons/SvgIcons";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteItemFromCart,
  clearCart,
  incrementCount,
  decrementCount,
} from "../../../store/slices/cartSlice";
import Button from "../../button/Button";
import s from "./CartPage.module.css";

export const CartPage = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  let totalCost = cart?.reduce(
    (cost, item) => (cost += item.count * item.price),
    0
  );

  const clearCartBtn = () => {
    dispatch(clearCart());
  };

  return (
    <div className={s.cart}>
      <div className={s.row}>
        <div className={s.id}>ID</div>
        <div className={s.title}>Name</div>
        <div className={s.price}>Price</div>
        <div className={s.count}>Count</div>
        <div className={s.cost}>Total cost</div>
        <div className={s.delete}>Delete</div>
      </div>
      {cart.map((item) => (
        <CartRow {...item} key={item.id} />
      ))}
      <div className={s.total_cost}>Total cost: {totalCost.toFixed(2)}$</div>
      <div className={s.btns_block}>
        <Button text="Cancel" onClick={clearCartBtn} />
        <Button text="Pay" disabled />
      </div>
    </div>
  );
};

const CartRow = ({ id, title, price, count }) => {
  const dispatch = useDispatch();

  const deleteFromCart = (id) => {
    dispatch(deleteItemFromCart(id));
  };

  const addOneMoreProduct = (id) => {
    dispatch(incrementCount(id));
  };

  const removeOneProduct = (id) => {
    count === 1
      ? dispatch(deleteItemFromCart(id))
      : dispatch(decrementCount(id));
  };

  return (
    <div className={s.row}>
      <div className={s.id}>{id}</div>
      <div className={s.title}>{title}</div>
      <div className={s.price}>{price}</div>
      <div className={s.count}>
        <button className={s.count_btn} onClick={() => removeOneProduct(id)}>
          -
        </button>
        {count}
        <button className={s.count_btn} onClick={() => addOneMoreProduct(id)}>
          +
        </button>
      </div>
      <div className={s.cost}>{(price * count).toFixed(2)}</div>
      <div
        className={s.delete}
        onClick={() => {
          deleteFromCart(id);
        }}
      >
        <SvgIcons id="bin" />
      </div>
    </div>
  );
};
