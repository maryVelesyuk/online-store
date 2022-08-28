import { useRequest } from "../hooks/useRequest";

const ProductsService = () => {
  const { loadingData, request, requestError, clearRequestError } =
    useRequest();

  const getAllProducts = async () => {
    const products = await request(`https://fakestoreapi.com/products`);
    return products;
  };

  const getProduct = async (id) => {
    const product = await request(`https://fakestoreapi.com/products/${id}`);
    return product;
  };
  return {
    loadingData,
    requestError,
    clearRequestError,
    getAllProducts,
    getProduct,
  };
};

export default ProductsService;
