import SvgIcons from "../../../icons/SvgIcons";
import { useSelector, useDispatch } from "react-redux";
import { deleteItemFromCart, clearCart } from "../../../store/slices/cartSlice";
import Button from "../../button/Button";
import s from "./CartPage.module.css";

export const CartPage = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const deleteFromCart = (id) => {
    dispatch(deleteItemFromCart(id));
  };

  let totalCost = cart?.reduce(
    (cost, item) => (cost += item.count * item.price),
    0
  );

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
        <div className={s.row} key={item.id}>
          <div className={s.id}>{item.id}</div>
          <div className={s.title}>{item.title}</div>
          <div className={s.price}>{item.price}</div>
          <div className={s.count}>{item.count}</div>
          <div className={s.cost}>{(item.price * item.count).toFixed(2)}</div>
          <div
            className={s.delete}
            onClick={() => {
              deleteFromCart(item.id);
            }}
          >
            <SvgIcons id="bin" />
          </div>
        </div>
      ))}
      <div className={s.total_cost}>Total cost: {totalCost.toFixed(2)}$</div>
      <div className={s.btns_block}>
        {/* ???функцию в onClick лучше выносить в отдельную переменную, даже если функция небольшая, или можно как здесь делать*/}
        <Button
          text="Cancel"
          onClick={() => {
            dispatch(clearCart());
          }}
        />
        <Button text="Pay" disabled />
      </div>
    </div>
  );
};
