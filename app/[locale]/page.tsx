"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Top } from "components/Top";

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
        </div>
      </div>
      <QueryClientProvider client={queryClient}>
        <Top />
      </QueryClientProvider>
    </div>
  );
}
