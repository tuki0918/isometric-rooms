"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Top } from "components/Top";

const queryClient = new QueryClient();

// TODO: Client Component or Server Components
export default function Home() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Top />
      </QueryClientProvider>
    </div>
  );
}
