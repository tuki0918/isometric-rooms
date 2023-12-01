import { Information } from "domains/information";
import type { CustomRequestInit, MicroCMSQueries } from "microcms-js-sdk";
import type { InformationContent } from "types/microcms";
import { fetchContent } from "utils/microCMS";

export const getInformation = async (
  contentId: string,
  queries?: MicroCMSQueries,
  customRequestInit?: CustomRequestInit,
) => {
  const data = await fetchContent<InformationContent>(
    "informations",
    contentId,
    queries,
    customRequestInit,
  );
  return new Information(data);
};
