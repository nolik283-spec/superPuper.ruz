import useSWR from "swr";
import { ApiRoutes } from "../services/constants";
import { fetcher } from "../helpers/fetcher";
import { axiosInstance } from "../services/instance";

export const useBasket = () => {
  const {
    data: basket,
    error,
    isLoading,
    mutate,
  } = useSWR(ApiRoutes.BASKET, fetcher);

  const data = error || isLoading ? [] : basket;

  const isFindProduct = (id) => data.find(el => el.productId === id)?.id
  const addProduct = async (product) => {
    if (isFindProduct(product.productId)) {
      return;
    }
    await axiosInstance.post(ApiRoutes.BASKET, product);
    mutate([...data, product]);
  };

  const updateProduct = async (id, count) => {
    await axiosInstance.patch(`${ApiRoutes.BASKET}/${id}`, { count });
    mutate(data.map((el) => (el.id === id ? { ...el, count } : el)));
  };

  const removeProduct = async (id) => {
    await axiosInstance.delete(`${ApiRoutes.BASKET}/${id}`);
    mutate(data.filter((el) => el.id !== id));
  };

  const clearBasket = async () => {
    data.forEach(async (el) => {
      await removeProduct(el.id);
    });
  };
  const totalAmount = data.reduce((acc, el) => (acc + el.price) * el.count, 0)

  return {
    addProduct,
    removeProduct,
    clearBasket,
    updateProduct,
    isFindProduct,
    totalAmount,
    data,
    error,
    isLoading,
  };
};
