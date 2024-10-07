"use server";
import { IProduct } from "@/types/product";

export async function getProductList(
  searchQuery?: string
): Promise<IProduct[]> {
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

export async function getProductDetail(id: string): Promise<IProduct> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(
      errorData.error || `Error fetching product details for ID: ${id}`
    );
  }

  return res.json();
}
