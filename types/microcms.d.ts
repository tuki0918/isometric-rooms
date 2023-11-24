import { MicroCMSQueries } from "microcms-js-sdk";

export interface Queries extends MicroCMSQueries {}

export interface ApiResponse<T extends ContentBase> {
  /** by microcms */
  contents: T[];
  /** by microcms */
  totalCount: number;
  /** by microcms */
  offset: number;
  /** by microcms */
  limit: number;
}

export interface ContentBase {
  /** by microcms */
  id: string;
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
