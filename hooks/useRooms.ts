import { useInfiniteQuery } from "@tanstack/react-query";
import { client, Queries } from "../utils/microCMS";

export type ContentCategory = "部屋" | "店舗" | "モノ" | "自然" | "未分類";

export interface ApiResponse {
  /** by microcms */
  contents: Content[];
  /** by microcms */
  totalCount: number;
  /** by microcms */
  offset: number;
  /** by microcms */
  limit: number;
}

export interface Content {
  /** by microcms */
  id: string;
  /** タイトル */
  title: string;
  /** 画像URL */
  image: Image;
  /** 投稿カテゴリ */
  category: ContentCategory[];
  /** AI判定 */
  is_generated_by_ai: boolean;
  /** by microcms */
  publishedAt: string;
  /** by microcms */
  revisedAt: string;
  /** by microcms */
  createdAt: string;
  /** by microcms */
  updatedAt: string;
}

export interface Image {
  /** by microcms */
  url: string;
  /** by microcms */
  height: number;
  /** by microcms */
  width: number;
}

const fetchRooms = async (queries: Queries) => {
  return await client.get<ApiResponse>({ endpoint: "rooms", queries });
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
