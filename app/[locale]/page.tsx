"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Top } from "components/Top";

const queryClient = new QueryClient();

// TODO: Client Component or Server Components
export default function Home() {
  return (
    <div>
      <div className="m-4">
        <QueryClientProvider client={queryClient}>
          <Top />
        </QueryClientProvider>
      </div>
    </div>
  );
}
