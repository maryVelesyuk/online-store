import { useEffect, useState } from "react";
import { Product } from "../product/Product";
import Spinner from "../spinner/Spinner";
import { Page404 } from "../pages";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/slices/productsSlice";
import Button from "../button/Button";
import s from "./ProductsList.module.css";

export const ProductsList = () => {
  const [isShowMoreBtnActive, setIsShowMoreBtnActive] = useState(true);
  const dispatch = useDispatch();
  const { products, loading, error, limit } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts(limit));
  }, []);

  const showMore = () => {
    dispatch(fetchProducts(limit));
  };

  useEffect(() => {
    if (products.length % 8 !== 0) {
      setIsShowMoreBtnActive(false);
    }
  }, [products]);

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
