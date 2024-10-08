"use server";

import { NextResponse } from "next/server";
import { service } from "@/services";
import { handleError } from "@/utility/errorHelper";
import { AxiosError } from "axios";
import { IProductListResponse } from "@/types/product";

export async function GET(): Promise<NextResponse<IProductListResponse>> {
  try {
    // Get the search query from the URL and pas to api
    //********* */
    // const { searchParams } = new URL(req.url);
    // const searchQuery = searchParams.get("search");

    const response = await service.productService.getProductList();
    const data = {
      data: response.data,
    };
    return NextResponse.json(data);
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      const errorMessage = handleError(error);
      return NextResponse.json({ error: errorMessage }, { status: 500 });
    } else {
      return NextResponse.json(
        { error: "An unexpected error occurred" },
        { status: 500 }
      );
    }
  }
}
