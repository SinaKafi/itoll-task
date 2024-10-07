"use server";
import { service } from "@/services/inidex";
import { IProduct } from "@/types/product";
import { handleError } from "@/utility/errorHelper";

export async function getProductList(): Promise<IProduct[]> {
  try {
    const response = await service.productService.getProductList();
    return response.data as IProduct[];
  } catch (error) {
    throw new Error(handleError(error));
  }
}

export async function getProductDetail(id: string): Promise<IProduct> {
  try {
    const response = await service.productService.getProductDetail(id);
    return response.data as IProduct;
  } catch (error) {
    throw new Error(handleError(error));
  }
}
