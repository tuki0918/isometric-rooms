"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Top from "components/Top";
import { Link } from "utils/i18n/navigation";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <div>
      {/* TODO: 説明とi18n対応 */}
      <div className="bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
            XXX XXX XXX
          </h1>
          <p className="text-lg font-normal text-gray-400 sm:px-16 lg:px-48 lg:text-xl">
            XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX
            XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX
            XXX XXX
          </p>
          <div className="mt-6 flex flex-row justify-center">
            <Link
              href={"/information"}
              className="inline-flex items-center justify-center rounded-lg border border-gray-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-gray-700 focus:ring-4 focus:ring-gray-800 sm:ms-4"
            >
              See Information
              <svg
                className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <QueryClientProvider client={queryClient}>
        <Top />
      </QueryClientProvider>
    </div>
  );
}
