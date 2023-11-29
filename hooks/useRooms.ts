import type { RoomContent } from "types/microcms";
import type { InfiniteContentsQueries } from "utils/microCMS";
import { useInfiniteContents } from "utils/microCMS";

export const useInfiniteRooms = (queries: InfiniteContentsQueries) => {
  return useInfiniteContents<RoomContent>("rooms", queries);
};
