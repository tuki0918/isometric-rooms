export interface ApiResponse {}

export type SingleContentResponse<T extends ContentBase> = ApiResponse & {
  [Key in keyof T]: T[Key];
};

export type MultipleContentsResponse<T extends ContentBase> = ApiResponse & {
  /** by microcms */
  contents: T[];
  /** by microcms */
  totalCount: number;
  /** by microcms */
  offset: number;
  /** by microcms */
  limit: number;
};

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
