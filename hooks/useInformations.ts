import type { InformationContent } from "types/microcms";
import type { InfiniteContentsQueries } from "utils/microCMS";
import { useInfiniteProxyServerContents } from "utils/microCMS";

export const useInfiniteInformations = (queries: InfiniteContentsQueries) => {
  return useInfiniteProxyServerContents<InformationContent>(
    "api/informations",
    queries,
  );
};
