import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 right-0 h-16 bg-gray-800 text-white flex items-center justify-between z-10">
      <nav className="max-w-7xl w-full flex items-center justify-between px-4 mx-auto">
        <div className="flex gap-4">
          <Link
            href="/"
            aria-label="Go to Products List"
            className="hover:!text-blue-400 focus:outline-none  focus:ring-blue-500"
          >
            Products List
          </Link>
          <Link
            href="/about"
            aria-label="Go to About Page"
            className="hover:!text-blue-400 focus:outline-none  focus:ring-blue-500"
          >
            About
          </Link>
          <Link
            href="/someRoute"
            aria-label="Go to Some Route"
            className="hover:!text-blue-400 focus:outline-none  focus:ring-blue-500"
          >
            Some Route
          </Link>
        </div>
        <a
          href="https://www.itoll.com"
          target="_blank"
          aria-label="Go to itoll website"
        >
          <Image
            src="/icon/icon-256-256.png"
            width={60}
            height={60}
            alt="Itoll logo"
            className="rounded-full"
          />
        </a>
      </nav>
    </header>
  );
};

export default Header;
