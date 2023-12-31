"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CategoryMenu, {
  FILTER_ALL,
  FilterCategory,
} from "components/CategoryMenu";
import GridRooms, { GridSkeletonRooms } from "components/GridRooms";
import LoadMoreButton from "components/LoadMoreButton";
import { RoomCard } from "domains/RoomCard";
import { useQueryParams } from "hooks/useQueryParams";
import { useInfiniteRooms } from "hooks/useRooms";
import { FC, useEffect, useState } from "react";
import type { RoomContentCategory } from "types/microcms";

const queryClient = new QueryClient();

const Top: FC = () => {
  const { searchParams } = useQueryParams();
  const category = searchParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>(
    (category as RoomContentCategory) || FILTER_ALL,
  );

  useEffect(() => {
    setSelectedCategory((category as RoomContentCategory) || FILTER_ALL);
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
    limit: 9,
    orders: "-publishedAt", // desc
    filters,
  });

  return (
    <div className="container mx-auto">
      <CategoryMenu
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="m-4">
        {data === undefined || status === "error" ? (
          <GridSkeletonRooms />
        ) : (
          <GridRooms
            contents={data.pages
              .map((page) => page.contents)
              .flat()
              .map((content) => RoomCard.create(content))}
          />
        )}
      </div>

      {hasNextPage && (
        <div className="m-16">
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
