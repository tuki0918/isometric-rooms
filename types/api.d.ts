import type { RoomContent, UserContent } from "types/microcms";

export interface ListResponse<T> {
  contents: T[];
  totalCount: number;
  limit: number;
  offset: number;
}

export interface RoomCardContent {
  room: RoomContent;
  user: UserContent;
}
