import { useEffect } from "react";
import { Product } from "../product/Product";
import Spinner from "../spinner/Spinner";
import { Page404 } from "../pages";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/slices/productsSlice";
import Button from "../button/Button";
import s from "./ProductsList.module.css";

export const ProductsList = () => {
  const dispatch = useDispatch();
  const { products, loading, error, limit } = useSelector(
    (state) => state.products
  );
  //???Видела, что в зависимости useEffect передают dispatch.
  //Это нормальная практика или лучше так не делать?
  useEffect(() => {
    dispatch(fetchProducts(limit));
  }, []);

  const showMore = () => {
    dispatch(fetchProducts(limit));
  };
  // isShowMoreBtnActive - если кол-во товаров кратно 8, показывать кнопку ShowMore.
  // в этом кейсе работает, но если общее количество товаров будет кратно 8,
  // кнопка не будет скрываться. как еще можно проверить, что все товары уже загружены???
  let isShowMoreBtnActive = true;
  if (products.length % 8 !== 0) {
    isShowMoreBtnActive = false;
  }

  if (loading) return <Spinner />;
  if (error) return <Page404 error={error} />;

  return (
    <div className={s.main_container}>
      {products.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
      {isShowMoreBtnActive && (
        <div className={s.btn_container}>
          <Button text="Show more" onClick={showMore} />
        </div>
      )}
    </div>
  );
};
