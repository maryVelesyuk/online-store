import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../../button/Button";
import Spinner from "../../spinner/Spinner";
import { Page404 } from "../page404/Page404";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../../store/slices/productSlice";
import { addItemToCart } from "../../../store/slices/cartSlice";
import s from "./ProductPage.module.css";

export const ProductPage = () => {
  const [count, setCount] = useState(1);
  const { productId } = useParams();
  const navigate = useNavigate();
  const goHome = () => navigate("/");
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.product);
  const { isAuth } = useSelector((state) => state.user);
  const { id, title, price, description, image } = product;

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [productId]);

  const addToCart = () => {
    dispatch(
      addItemToCart({ id: id, title: title, price: price, count: +count })
    );
  };

  if (loading) return <Spinner />;
  if (error) return <Page404 />;

  return (
    <div className={s.product_page}>
      <div className={s.product_imgs}>
        <img src={image} alt={title} />
      </div>
      <div className={s.product_title}>{title}</div>
      <div className={s.product_price}>{price}$</div>
      <div className={s.product_description}>{description}</div>
      {isAuth ? (
        <div className={s.add_block}>
          <input
            type="number"
            value={count}
            onChange={(e) => {
              setCount(e.target.value);
            }}
            min="1"
            max="10"
          ></input>
          <Button onClick={addToCart} text="Add to Cart" />
        </div>
      ) : (
        <div className={s.error}>
          You must be logged in to add an item to your cart
        </div>
      )}
      <Button className={s.go_back_button} onClick={goHome} text="Go Home" />
    </div>
  );
};
