"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import InformationFeeds, {
  SkeletonInformation,
} from "components/InformationFeeds";
import LoadMoreButton from "components/LoadMoreButton";
import { useInfiniteInformations } from "hooks/useInformations";
import { FC } from "react";

const queryClient = new QueryClient();

const Information: FC = () => {
  const {
    data,
    // error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteInformations({
    limit: 10,
    orders: "-publishedAt", // desc
  });

  return (
    <div>
      <div className="m-4">
        <div className="mx-auto w-4/5 md:w-1/2 xl:w-1/3">
          {data === undefined || status === "error" ? (
            <SkeletonInformation />
          ) : (
            <InformationFeeds
              contents={data.pages.map((page) => page.contents).flat()}
            />
          )}

          {hasNextPage && (
            <div>
              <LoadMoreButton
                isLoading={isFetchingNextPage}
                hasMore={hasNextPage}
                onLoadMore={() => void fetchNextPage()}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const InformationWithProvider: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Information />
    </QueryClientProvider>
  );
};

export default InformationWithProvider;
