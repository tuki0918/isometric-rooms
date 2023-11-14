"use client";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Top } from "../components/Top";

const queryClient = new QueryClient();

// TODO: Client Component or Server Components
export default function Home() {
  return (
    <div>
      <h1>Isometric Rooms</h1>
      <QueryClientProvider client={queryClient}>
        <Top />
      </QueryClientProvider>
    </div>
  );
}
