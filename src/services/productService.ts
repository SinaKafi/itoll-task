import axiosInstance from "@/components/config/axiosConf";
import { IProductDetailResponse, IProductListResponse } from "@/types/product";

export const getProductList = (): Promise<IProductListResponse> => {
  return axiosInstance.get("/products");
};

export const getProductDetail = (
  id: string
): Promise<IProductDetailResponse> => {
  return axiosInstance({
    method: "GET",
    url: `/products/${id}`,
  });
};
