import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductsService from "../../../services/ProductsService";
import Button from "../../button/Button";
import { LoginContext } from "../../hok/LoginProvider";
import Spinner from "../../spinner/Spinner";
import { Page404 } from "../page404/Page404";
import s from "./ProductPage.module.css";

export const ProductPage = ({ addToCart }) => {
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(1);
  const { productId } = useParams();
  const { isLoggedIn } = useContext(LoginContext);
  const { loadingData, requestError, getProduct } = ProductsService();
  const navigate = useNavigate();
  const goHome = () => navigate("/");

  useEffect(() => {
    getProduct(productId).then((product) => setProduct(product));
  }, [productId]);

  if (loadingData) return <Spinner />;
  if (requestError) return <Page404 />;

  return (
    <div className={s.product_page}>
      <div className={s.product_imgs}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={s.product_title}>{product.title}</div>
      <div className={s.product_price}>{product.price}$</div>
      <div className={s.product_description}>{product.description}</div>
      {isLoggedIn ? (
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
          <Button
            onClick={() => addToCart(+count, product.price)}
            text="Add to Cart"
          />
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
