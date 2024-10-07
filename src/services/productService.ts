import axiosInstance from "@/components/config/axiosConf";

export const getProductList = () => {
  return axiosInstance.get("/products");
};

export const getProductDetail = (id: string) => {
  return axiosInstance({
    method: "GET",
    url: `/products/${id}`,
  });
};
