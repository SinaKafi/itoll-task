import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-700">
      <h1 className="text-6xl font-bold mb-4" role="alert">
        404
      </h1>
      <h2 className="text-2xl mb-8">Page Not Found</h2>
      <p className="text-lg mb-6">
        Oops! The page you&#39;re looking for doesn&#39;t exist.
      </p>
      <Link
        href="/"
        className="text-blue-500 hover:underline text-lg"
        aria-label="Go back to Homepage"
      >
        Go back to Homepage
      </Link>
    </div>
  );
}
