import { IProduct } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard: React.FC<IProduct> = (item) => {
  return (
    <Link
      href={`/products/${item.id}`}
      className="grid grid-rows-3 bg-white shadow-lg rounded-lg p-4 gap-4 items-center overflow-hidden hover:scale-105 cursor-pointer"
    >
      <div className="row-span-1 mx-auto">
        <Image
          src={item.image}
          alt={`${item.category}/${item.title}`}
          width={100}
          height={100}
          className="rounded-lg object-cover"
          loading="lazy"
        />
      </div>
      <div className="!row-span-1 flex flex-col">
        <h3 className="text-sm text-gray-400 font-semibold mb-2 whitespace-break-spaces">
          {item.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3 whitespace-pre-line">
          {item.description}
        </p>
      </div>

      <div className="!row-span-1 flex justify-between items-center text-gray-700 flex-1">
        <span className="font-bold text-lg">${item.price}</span>
        <span className="text-sm">
          Rating: {item.rating.rate} ({item.rating.count} reviews)
        </span>
      </div>
      {/* </div> */}
    </Link>
  );
};

export default ProductCard;
