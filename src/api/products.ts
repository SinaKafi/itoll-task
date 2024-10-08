"use server";
import { IProductDetailResponse, IProductListResponse } from "@/types/product";

export async function getProductList(
  searchQuery?: string
): Promise<IProductListResponse> {
  const searchParam = searchQuery
    ? `?search=${encodeURIComponent(searchQuery)}`
    : "";

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/products${searchParam}`,
    {
      cache: "force-cache",
    }
  );
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error || "Error fetching product list");
  }
  return res.json();
}

export async function getProductDetail(
  id: string
): Promise<IProductDetailResponse> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`,
    {
      next: { revalidate: 60 },
    }
  );

  const contentType = res.headers.get("content-type");

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(
      errorData.error || `Error fetching product details for ID: ${id}`
    );
  }

  if (contentType?.includes("application/json")) {
    return res.json();
  } else {
    const errorText = await res.text(); // Log the error response
    console.error("Received non-JSON response:", errorText);
    throw new Error("Expected JSON but received an HTML response.");
  }
}
