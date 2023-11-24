import type { ContentBase, Image } from "types/microcms";
import { InfiniteContentsQueries, useInfiniteContents } from "utils/microCMS";

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

export const useInfiniteRooms = (queries: InfiniteContentsQueries) => {
  return useInfiniteContents<RoomContent>("rooms", queries);
};
