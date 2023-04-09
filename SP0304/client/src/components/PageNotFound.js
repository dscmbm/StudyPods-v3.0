
import React from "react";
// import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
export default function PageNotFound  () {
  return (
    <section>
      <div style={{ backgroundColor: "#f8ddfc" }}>
      <div className="container flex items-center px-12 py-12 mx-auto">
        <div>
          <p className="text-sm font-medium text-indigo-500 dark:text-indigo-400">
            404 error
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-black md:text-3xl">
            We can&apos;t find that page
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Sorry, the page you are looking for doesn&apos;t exist or has been
            moved.
          </p>

          <div className="flex items-center mt-6 gap-x-3">
            <button className="inline-flex items-center rounded-md border border-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-black hover:bg-indigo-500">
              <div className=" h-4" />
              <Link to="/Username">Login</Link>
            </button>

            <button className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500 ">
            <Link to="/">Go Home</Link>
            </button>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

