"use server";
import { service } from "@/services";
import { IProduct } from "@/types/product";
import { handleError } from "@/utility/errorHelper";
import { AxiosError } from "axios";
export async function getProductList(): Promise<IProduct[]> {
  try {
    const response = await service.productService.getProductList();
    return response.data as IProduct[];
  } catch (error: unknown) {
    // Check if the error is an AxiosError
    if (error instanceof AxiosError) {
      const errorMessage = handleError(error);
      throw new Error(errorMessage);
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
}

export async function getProductDetail(id: string): Promise<IProduct> {
  try {
    const response = await service.productService.getProductDetail(id);
    return response.data as IProduct;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      const errorMessage = handleError(error);
      throw new Error(errorMessage);
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
}
