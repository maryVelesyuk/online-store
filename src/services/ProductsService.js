import { useRequest } from "../hooks/useRequest";

const ProductsService = () => {
  const { loadingData, request, requestError, clearRequestError } =
    useRequest();

  const getAllProducts = async () => {
    const products = await request("https://api.escuelajs.co/api/v1/products");
    return products;
  };

  const getProduct = async (id) => {
    const product = await request(
      `https://api.escuelajs.co/api/v1/products/${id}`
    );
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
