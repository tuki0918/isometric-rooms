import CategoryMenu, {
  FILTER_ALL,
  FilterCategory,
} from "components/CategoryMenu";

import GridRooms, { GridSkeletonRooms } from "components/GridRooms";
import LoadMoreButton from "components/LoadMoreButton";
import { useQueryParams } from "hooks/useQueryParams";
import { ContentCategory, useInfiniteRooms } from "hooks/useRooms";
import { FC, useEffect, useState } from "react";

export const Top: FC = () => {
  const { searchParams } = useQueryParams();
  const search = searchParams.get("category");

  // Set the initial category based on searchParams
  const initialCategory = search || FILTER_ALL;
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>(
    initialCategory as ContentCategory,
  );

  useEffect(() => {
    setSelectedCategory((search as ContentCategory) || FILTER_ALL);
  }, [search]);

  const filters =
    selectedCategory !== FILTER_ALL
      ? `category[contains]${selectedCategory}`
      : undefined;

  const {
    data,
    // error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteRooms({
    limit: 18,
    orders: "-publishedAt", // desc
    filters,
  });

  // TODO: error handling
  if (status === "error") return <p>Error fetching data</p>;

  const contents =
    data === undefined ? (
      <GridSkeletonRooms />
    ) : (
      <GridRooms contents={data.pages.map((page) => page.contents).flat()} />
    );

  return (
    <div>
      <CategoryMenu
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="m-4">{contents}</div>

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
