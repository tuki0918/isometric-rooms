import { useInfiniteQuery } from "@tanstack/react-query";
import { ListResponse } from "types/api";
export type InfiniteContentsQueries = {
  limit: number;
  orders?: string;
  filters?: string;
};

export const fetchContents = async <T>(
  endpoint: string,
  queries: InfiniteContentsQueries & { offset: number },
) => {
  const params = new URLSearchParams();
  Object.keys(queries).forEach((key) => {
    const value = queries[key as keyof typeof queries];
    if (value === undefined) return;
    params.append(key, String(value));
  });

  const res = await fetch(`/api/${endpoint}?${params.toString()}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json() as Promise<ListResponse<T>>;
};

export const useInfiniteContents = <T>(
  endpoint: string,
  queries: InfiniteContentsQueries,
) => {
  return useInfiniteQuery({
    initialPageParam: 0,
    queryKey: [endpoint, queries],
    queryFn: ({ pageParam }) => {
      // Calculate `offset` based on `pageParam`
      const offset = queries.limit * pageParam;
      return fetchContents<T>(endpoint, { ...queries, offset });
    },
    getNextPageParam: (lastPage, allPages) => {
      const { contents, offset, totalCount } = lastPage;
      // Return `undefined` if all content has already been retrieved. However, this is not strict.
      const lastPageCount = offset + contents.length;
      if (lastPageCount >= totalCount) return undefined;
      // Return the next `pageParam` if there is unretrieved content.
      return allPages.length;
    },
  });
};
