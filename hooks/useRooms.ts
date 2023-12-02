import type { RoomCardContent } from "types/api";
import type { InfiniteContentsQueries } from "utils/fetch";
import { useInfiniteContents } from "utils/fetch";

export const useInfiniteRooms = (queries: InfiniteContentsQueries) => {
  return useInfiniteContents<RoomCardContent>("rooms", queries);
};
