import type { InformationContent } from "types/microcms";
import type { InfiniteContentsQueries } from "utils/fetch";
import { useInfiniteContents } from "utils/fetch";

export const useInfiniteInformations = (queries: InfiniteContentsQueries) => {
  return useInfiniteContents<InformationContent>("informations", queries);
};
