import { useInfiniteQuery } from "@tanstack/react-query";
import { client, Queries } from "../utils/microCMS";

export type ContentCategory = "部屋" | "店舗" | "モノ" | "自然" | "未分類";

export interface ApiResponse {
  contents: Content[];
  totalCount: number;
  offset: number;
  limit: number;
}

export interface Content {
  id: string;
  title: string;
  image: Image;
  category: ContentCategory[];
  is_generated_by_ai: boolean;
  publishedAt: string;
  revisedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface Image {
  url: string;
  height: number;
  width: number;
}

const fetchRooms = async (queries: Queries) => {
  return await client.get<ApiResponse>({ endpoint: "rooms", queries: queries });
};

/**
 * `limit` is required for calculating `offset`.
 */
export const useInfiniteRooms = (queries: Queries & { limit: number }) => {
  return useInfiniteQuery({
    initialPageParam: 0,
    queryKey: ["rooms", queries],
    queryFn: ({ pageParam }) => {
      // Calculate `offset` based on `pageParam`
      return fetchRooms({ ...queries, offset: queries.limit * pageParam });
    },
    getNextPageParam: (lastPage, allPages) => {
      const { contents, offset, totalCount } = lastPage;
      // Return `undefined` if all content has already been retrieved.
      const lastPageCount = offset + contents.length;
      if (lastPageCount >= totalCount) return undefined;
      // Return the next `pageParam` if there is unretrieved content.
      return allPages.length;
    },
  });
};
