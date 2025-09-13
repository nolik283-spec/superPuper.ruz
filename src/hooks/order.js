import useSWR from "swr";
import { ApiRoutes } from "../services/constants";
import { fetcher } from "../helpers/fetcher";
import { axiosInstance } from "../services/instance";
import { useBasket } from "./basket";

export const useOrder = () => {
  const {
    data: order,
    error,
    isLoading,
    mutate,
  } = useSWR(ApiRoutes.ORDER, fetcher);
  const {clearBasket} = useBasket();
  const data = error || isLoading ? [] : order;


  const addOrder = async (product) => {

    await axiosInstance.post(ApiRoutes.ORDER, product);
    clearBasket()
    mutate([...data, product]);
  };

  


  return {
    addOrder,
    data,
    error,
    isLoading,
  };
};
