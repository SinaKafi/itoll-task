import React from "react";

const About = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg md:w-1/2 w-full border border-gray-300 transition-transform transform hover:scale-105">
        <h2 className="text-3xl font-bold text-blue-700 mb-3 text-center">
          Itoll Task
        </h2>
        <h3 className="text-md text-gray-800 leading-relaxed text-justify">
          This task focuses on performance optimization and minimal reliance on
          third-party packages. It utilizes a customized service worker and PWA
          for seamless updates. The latest version of Next.js with App Router is
          implemented, making all pages server-side by default. The landing page
          is designed as SSR, while the product page is set up as ISR. Next.js
          has built-in caching capabilities that enhance performance, and Axios
          interceptors simplify API configuration.
        </h3>
      </div>
    </div>
  );
};

export default About;
