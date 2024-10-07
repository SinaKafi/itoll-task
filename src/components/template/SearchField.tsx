"use client";
import useDebounceEffect from "@/hooks/useDebounceEffect";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchForm() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    router.push(`?search=${encodeURIComponent(inputValue)}`);
  };

  useDebounceEffect(
    () => {
      handleSearch();
    },
    [inputValue],
    500
  );

  return (
    <form className="mb-8 flex justify-center items-center">
      <div className="relative w-full max-w-sm">
        <input
          type="text"
          onChange={(e) => {
            e.preventDefault();
            setInputValue(e.target.value);
          }}
          name="search"
          value={inputValue}
          placeholder="Search products..."
          className="w-full border border-gray-300 rounded-md p-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {inputValue && (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setInputValue("");
              router.push(`?search=${""}`);
            }}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            X
          </button>
        )}
      </div>
    </form>
  );
}
