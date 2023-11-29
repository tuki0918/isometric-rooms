import { useInfiniteQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import type {
  CustomRequestInit,
  MicroCMSDate,
  MicroCMSListContent,
  MicroCMSListResponse,
  MicroCMSQueries,
} from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";

dayjs.extend(utc);
dayjs.extend(timezone);

export type InfiniteContentsQueries = MicroCMSQueries & { limit: number };

export const formatDate = (
  content: Pick<MicroCMSDate, "publishedAt" | "revisedAt">,
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

export const fetchContent = async <T extends MicroCMSListContent>(
  endpoint: string,
  contentId: string,
  queries?: MicroCMSQueries,
  customRequestInit?: CustomRequestInit,
) => {
  return await client.get<T>({
    endpoint,
    contentId,
    queries,
    customRequestInit,
  });
};

export const fetchContents = async <T extends MicroCMSListContent>(
  endpoint: string,
  queries?: MicroCMSQueries,
) => {
  return await client.get<MicroCMSListResponse<T>>({
    endpoint,
    queries,
  });
};

/**
 * `limit` is required for calculating `offset`.
 */
export const useInfiniteContents = <T extends MicroCMSListContent>(
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
