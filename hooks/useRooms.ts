import { useInfiniteQuery } from "@tanstack/react-query";
import type { ApiResponse, ContentBase, Image, Queries } from "types/microcms";
import { client } from "utils/microCMS";

export type ContentCategory = "部屋" | "施設" | "モノ" | "自然" | "未分類";

interface RoomContent extends ContentBase {
  /** タイトル */
  title: string;
  /** 画像URL */
  image: Image;
  /** 投稿カテゴリ */
  category: ContentCategory[];
  /** AI判定 */
  is_generated_by_ai: boolean;
}

const fetchRooms = async (queries: Queries) => {
  return await client.get<ApiResponse<RoomContent>>({
    endpoint: "rooms",
    queries,
  });
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
