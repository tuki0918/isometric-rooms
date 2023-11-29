import type { MicroCMSListContent } from "microcms-js-sdk";
import type { InfiniteContentsQueries } from "utils/microCMS";
import { useInfiniteContents } from "utils/microCMS";

export type ContentCategory = "お知らせ" | "リリース" | "未分類";

export interface InformationContent extends MicroCMSListContent {
  /** タイトル */
  title: string;
  /** 内容（リッチエディタ） */
  content: string;
  /** 内容（簡易） */
  summary?: string;
  /** 重要 */
  is_critical: boolean;
  /** 投稿カテゴリ */
  category: ContentCategory[];
}

export const useInfiniteInformations = (queries: InfiniteContentsQueries) => {
  return useInfiniteContents<InformationContent>("informations", queries);
};
