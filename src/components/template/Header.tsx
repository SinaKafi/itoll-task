import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 right-0 h-16 bg-gray-800 text-white flex items-center justify-between z-10">
      <nav className="max-w-7xl w-full flex items-center justify-between px-4 mx-auto">
        <div className="flex gap-4">
          <Link href="/" aria-label="Products List">
            Products List
          </Link>
          <Link href="/about" aria-label="About Page">
            About
          </Link>
          <Link href="/someRoute" aria-label="Some Route">
            Some Route
          </Link>
        </div>
        <a aria-label="itoll" href="https://www.itoll.com" target="_blank">
          <Image
            src="/icon/icon-256-256.png"
            width={100}
            height={100}
            alt="itol"
          />
        </a>
        {/* <div className="font-bold">Itoll Task</div> */}
      </nav>
    </header>
  );
};

export default Header;
