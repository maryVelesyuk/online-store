import React, { useEffect, useState, useContext } from "react";
import { Product } from "../product/Product";
import { LoginContext } from "../hok/LoginProvider";
import Spinner from "../spinner/Spinner";
import ProductsService from "../../services/ProductsService";
import { Page404 } from "../pages";
import s from "./ProductsList.module.css";

export const ProductsList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const { isLoggedIn } = useContext(LoginContext);
  const { loadingData, requestError, getAllProducts } = ProductsService();

  useEffect(() => {
    getAllProducts().then((products) => setProducts(products));
  }, []);

  return (
    <>
      {loadingData && <Spinner />}
      {requestError && <Page404 error={requestError} />}
      <div className={s.main_container}>
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              {...product}
              isLoggedIn={isLoggedIn}
              addToCart={addToCart}
            />
          );
        })}
      </div>
    </>
  );
};
