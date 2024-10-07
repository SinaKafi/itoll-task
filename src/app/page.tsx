import { Suspense } from "react";
import ProductCard from "@/components/ProductCard";
import Loader from "./Loader";
import { getProductList } from "@/api/products";
import SearchForm from "@/components/template/SearchField";

export default async function Home({
  searchParams,
}: {
  searchParams: { search?: string };
}) {
  let data;
  try {
    data = await getProductList();
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
  //because my API provider dos not support search filter i had to handle it in this way
  const search = searchParams.search || "";

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Product List</h1>
      <SearchForm />
      <Suspense fallback={<Loader />}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data
            .filter((item) => {
              return (
                item.title
                  .toLocaleUpperCase()
                  .includes(search.toLocaleUpperCase()) ||
                item.description
                  .toLocaleUpperCase()
                  .includes(search.toLocaleUpperCase())
              );
            })
            ?.map((item) => (
              <ProductCard {...item} key={`${item.title}/${item.id}`} />
            ))}
        </div>
      </Suspense>
    </div>
  );
}
