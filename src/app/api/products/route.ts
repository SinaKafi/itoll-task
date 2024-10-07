"use server";

import { NextResponse } from "next/server";
import { service } from "@/services";
import { handleError } from "@/utility/errorHelper";
import { AxiosError } from "axios";

export async function GET() {
  try {
    // Get the search query from the URL and pas to api
    //********* */
    // const { searchParams } = new URL(req.url);
    // const searchQuery = searchParams.get("search");

    const response = await service.productService.getProductList();
    return NextResponse.json(response.data);
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
