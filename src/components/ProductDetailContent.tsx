import { IProduct } from "@/types/product";
import Image from "next/image";

export default function ProductDetailContent({
  productData,
}: {
  productData: IProduct;
}) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 p-8">
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src={productData.image}
          alt={productData.title}
          width={500}
          height={500}
          className="object-contain rounded-lg"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-gray-800">
          {productData.title}
        </h1>
        <div className="text-sm text-gray-500">
          Category:{" "}
          <span className="font-medium text-gray-700">
            {productData.category}
          </span>
        </div>
        <p className="text-lg text-gray-600">{productData.description}</p>
        <div className="flex items-center justify-between mt-4">
          <div className="text-2xl font-semibold text-green-600">
            ${productData.price.toFixed(2)}
          </div>
          <div className="flex items-center text-yellow-500 font-medium">
            <span>{productData.rating.rate}</span>
            <span className="text-gray-500 mx-1">/</span>
            <span>{productData.rating.count} reviews</span>
          </div>
        </div>
        <button className="mt-6 py-3 px-8 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
          Buy Now
        </button>
      </div>
    </div>
  );
}
