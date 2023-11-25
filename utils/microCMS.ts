import { useInfiniteQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { createClient } from "microcms-js-sdk";
import type {
  ContentBase,
  MultipleContentsResponse,
  Queries,
  SingleContentResponse,
} from "types/microcms";

dayjs.extend(utc);
dayjs.extend(timezone);

export type InfiniteContentsQueries = Queries & { limit: number };

export const formatDate = (
  content: Pick<ContentBase, "publishedAt" | "revisedAt">,
  key: "publishedAt" | "revisedAt",
) => {
  const date = content[key];
  return dayjs.utc(date).tz("Asia/Tokyo").format("YYYY-MM-DD");
};

// Initialize the microCMS client (GET only)
export const client = createClient({
  serviceDomain:
    process.env.NEXT_PUBLIC_MICROCMS_SERVICEDOMAIN ||
    "NEXT_PUBLIC_MICROCMS_SERVICEDOMAIN is not defined",
  apiKey:
    process.env.NEXT_PUBLIC_MICROCMS_APIKEY ||
    "NEXT_PUBLIC_MICROCMS_APIKEY is not defined",
});

export const fetchContent = async <T extends ContentBase>(
  endpoint: string,
  contentId: string,
) => {
  return await client.get<SingleContentResponse<T>>({
    endpoint,
    contentId,
  });
};

export const fetchContents = async <T extends ContentBase>(
  endpoint: string,
  queries: Queries,
) => {
  return await client.get<MultipleContentsResponse<T>>({
    endpoint,
    queries,
  });
};

/**
 * `limit` is required for calculating `offset`.
 */
export const useInfiniteContents = <T extends ContentBase>(
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
