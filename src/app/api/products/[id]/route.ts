"use server";
import { NextResponse } from "next/server";
import { service } from "@/services";
import { handleError } from "@/utility/errorHelper";
import { AxiosError } from "axios";
import { IProductDetailResponse } from "@/types/product";
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse<IProductDetailResponse>> {
  if (!params.id) {
    return NextResponse.json(
      { error: "Product ID is required" },
      { status: 400 }
    );
  }

  try {
    const response = await service.productService.getProductDetail(params.id);
    const data = { data: response?.data };
    return NextResponse.json(data);
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      const errorMessage = handleError(error);
      return NextResponse.json({ error: errorMessage }, { status: 500 });
    } else {
      return NextResponse.json(
        { error: "An unexpected error occurred", req },
        { status: 500 }
      );
    }
  }
}
