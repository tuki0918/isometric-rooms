import type {
  CustomRequestInit,
  MicroCMSDate,
  MicroCMSListContent,
  MicroCMSListResponse,
  MicroCMSQueries,
} from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";
import { parseToUTCDate } from "utils/date";

export type InfiniteContentsQueries = MicroCMSQueries & { limit: number };

export const parseToDate = (
  content: Pick<MicroCMSDate, "publishedAt" | "revisedAt">,
  key: "publishedAt" | "revisedAt",
): Date | undefined => {
  const date = content[key];
  if (!date) return undefined;
  return parseToUTCDate(date);
};

// Initialize the microCMS client (GET only)
export const client = createClient({
  serviceDomain:
    process.env.NEXT_MICROCMS_SERVICEDOMAIN ||
    "NEXT_MICROCMS_SERVICEDOMAIN is not defined",
  apiKey:
    process.env.NEXT_MICROCMS_APIKEY || "NEXT_MICROCMS_APIKEY is not defined",
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
  customRequestInit?: CustomRequestInit,
) => {
  return await client.get<MicroCMSListResponse<T>>({
    endpoint,
    queries,
    customRequestInit,
  });
};
