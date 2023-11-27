import InformationFeeds, {
  SkeletonInformation,
} from "components/InformationFeeds";
import LoadMoreButton from "components/LoadMoreButton";
import { useInfiniteInformations } from "hooks/useInformations";
import { FC } from "react";

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
        </div>
      </div>

      {hasNextPage && (
        <div className="m-8 flex justify-center">
          <LoadMoreButton
            isLoading={isFetchingNextPage}
            hasMore={hasNextPage}
            onLoadMore={() => void fetchNextPage()}
          />
        </div>
      )}
    </div>
  );
};

export default Information;
