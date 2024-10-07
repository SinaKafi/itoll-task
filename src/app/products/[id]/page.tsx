import { Suspense } from "react";
import { getProductDetail, getProductList } from "../../api/route";
import ProductDetailContent from "@/components/ProductDetailContent";
import Loader from "@/app/Loader";
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
  const productData = await getProductDetail(params.id);

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
