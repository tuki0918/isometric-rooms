import CategoryButton, {
  FILTER_ALL,
  FILTER_ALL_CATEGORIES,
  FilterCategory,
} from "components/CategoryButton";
import { GridRooms, GridSkeletonRooms } from "components/GridRooms";
import LoadMoreButton from "components/LoadMoreButton";
import { useQueryParams } from "hooks/useQueryParams";
import { ContentCategory, useInfiniteRooms } from "hooks/useRooms";
import { FC, useEffect, useState } from "react";

export const Top: FC = () => {
  const { searchParams, setQueryParam } = useQueryParams();
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

  const handleSelectCategory = (category: FilterCategory) => () => {
    setSelectedCategory(category);
    setQueryParam("category", category);
  };

  const contents =
    data === undefined ? (
      <GridSkeletonRooms />
    ) : (
      <GridRooms contents={data.pages.map((page) => page.contents).flat()} />
    );

  return (
    <div>
      <div className="mb-4 flex justify-center space-x-2">
        {FILTER_ALL_CATEGORIES.map((category) => (
          <CategoryButton
            key={category}
            category={category}
            isSelected={selectedCategory === category}
            onSelect={handleSelectCategory(category)}
          />
        ))}
      </div>

      {contents}

      {hasNextPage && (
        <LoadMoreButton
          isLoading={isFetchingNextPage}
          hasMore={hasNextPage}
          onLoadMore={() => void fetchNextPage()}
        />
      )}
    </div>
  );
};
