import type { InformationContent } from "types/microcms";
import type { InfiniteContentsQueries } from "utils/microCMS";
import { useInfiniteContents } from "utils/microCMS";

export const useInfiniteInformations = (queries: InfiniteContentsQueries) => {
  return useInfiniteContents<InformationContent>("informations", queries);
};
