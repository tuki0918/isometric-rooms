"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CategoryMenu, {
  FILTER_ALL,
  FilterCategory,
} from "components/CategoryMenu";
import GridRooms, { GridSkeletonRooms } from "components/GridRooms";
import LoadMoreButton from "components/LoadMoreButton";
import { useQueryParams } from "hooks/useQueryParams";
import { ContentCategory, useInfiniteRooms } from "hooks/useRooms";
import { FC, useEffect, useState } from "react";

const queryClient = new QueryClient();

const Top: FC = () => {
  const { searchParams } = useQueryParams();
  const category = searchParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>(
    (category as ContentCategory) || FILTER_ALL,
  );

  useEffect(() => {
    setSelectedCategory((category as ContentCategory) || FILTER_ALL);
  }, [category]);

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

  return (
    <div>
      <CategoryMenu
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="m-4">
        {data === undefined || status === "error" ? (
          <GridSkeletonRooms />
        ) : (
          <GridRooms
            contents={data.pages.map((page) => page.contents).flat()}
          />
        )}
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

const TopWithProvider: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Top />
    </QueryClientProvider>
  );
};

export default TopWithProvider;
