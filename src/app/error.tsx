"use client";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Error caught by Error Boundary:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h2 className="text-2xl font-bold mb-4 text-red-600">
        Something went wrong!
      </h2>
      <p className="text-gray-600 mb-4">
        We encountered an unexpected error while processing your request. Please
        try again later.
      </p>
      <p className="text-gray-500 mb-4">Error Details: {error.message}</p>
      <button
        onClick={reset}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
      >
        Try Again
      </button>
    </div>
  );
}
