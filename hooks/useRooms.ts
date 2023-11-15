import { useQuery } from "@tanstack/react-query";
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

export const useRooms = (queries: Queries) => {
  return useQuery({
    queryKey: ["rooms", queries],
    queryFn: () => fetchRooms(queries),
  });
};
