import { Suspense } from "react";
import ProductDetailContent from "@/components/ProductDetailContent";
import Loader from "@/app/Loader";
import { getProductDetail, getProductList } from "@/api/products";
export async function generateStaticParams() {
  const data = await getProductList();
  return data.map((product) => ({
    id: product.id.toString(),
  }));
}

export const revalidate = 60;

export default async function ProductDetail({
  params,
}: {
  params: { id: string };
}) {
  let productData;
  try {
    productData = await getProductDetail(params.id);
  } catch (error) {
    console.error("Error fetching product list:", error);
    return (
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Product List</h1>
        <p className="text-red-600 text-center">
          Failed to load products. Please try again later.
        </p>
      </div>
    );
  }
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-8">
      <div className="w-full max-w-7xl bg-white rounded-lg shadow-lg overflow-hidden">
        <Suspense fallback={<Loader />}>
          <ProductDetailContent productData={productData} />
        </Suspense>
      </div>
    </div>
  );
}
