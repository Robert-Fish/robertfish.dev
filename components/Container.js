import React from "react";
import NextLink from "next/link";

export default function Container({ children }) {
  return (
    <div className="bg-white dark:bg-gray-800">
      <nav className="flex items-center justify-between w-full max-w-4xl p-8 mx-auto my-0 text-gray-900 bg-white sticky-nav md:my-8 dark:bg-gray-800 bg-opacity-60 dark:text-gray-100">
        <div>
          <NextLink href="/blog">
            <a className="p-1 text-gray-900 sm:p-4 dark:text-gray-100">Blog</a>
          </NextLink>
        </div>
      </nav>
      <main className="flex flex-col justify-center px-8 bg-white dark:bg-gray-800">
        {children}
      </main>
    </div>
  );
}
