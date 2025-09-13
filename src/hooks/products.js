import useSWR from "swr"
import { ApiRoutes } from "../services/constants"
import { fetcher } from "../helpers/fetcher"

export const useProducts = (id) => {
  const { data: products, error, isLoading } = useSWR(ApiRoutes.PRODUCTS, fetcher)
  const { data: product, error: errorP, isLoading: isLoadingP } = useSWR(ApiRoutes.PRODUCTS + "/" + id, fetcher)
  const data = error || isLoading ? [] : products
  const dataProduct = errorP || isLoadingP ? [] : product

  return {
    data,
    error,
    isLoading,
    dataProduct
  }
}
