import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";

export type RoomContentCategory = "部屋" | "施設" | "モノ" | "自然" | "未分類";
export interface RoomContent extends MicroCMSListContent {
  /** タイトル */
  title: string;
  /** 画像URL */
  image: MicroCMSImage;
  /** 投稿カテゴリ */
  category: RoomContentCategory[];
  /** AI判定 */
  is_generated_by_ai: boolean;
}

export type InformationContentCategory = "お知らせ" | "リリース" | "未分類";
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
  category: InformationContentCategory[];
}
