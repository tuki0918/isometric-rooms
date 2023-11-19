import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FC, useCallback, useEffect, useState } from "react";
import { ContentCategory, useInfiniteRooms } from "../hooks/useRooms";
import CategoryButton, {
  FILTER_ALL,
  FILTER_ALL_CATEGORIES,
  FilterCategory,
} from "./CategoryButton";
import { GridRooms, GridSkeletonRooms } from "./GridRooms";

export const Top: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;
  const search = searchParams.get("category");

  // Set the initial category based on searchParams
  const initialCategory = search || FILTER_ALL;
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>(
    initialCategory as ContentCategory,
  );

  // https://nextjs.org/docs/app/api-reference/functions/use-search-params
  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams],
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
    router.push(`${pathname}?${createQueryString("category", category)}`);
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
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => void fetchNextPage()}
            disabled={isFetchingNextPage}
            className={`rounded-full bg-white px-4 py-2 text-xs font-semibold text-blue-500 hover:bg-blue-500 hover:text-white`}
          >
            {isFetchingNextPage
              ? "Loading more..."
              : hasNextPage
                ? "Load More"
                : "Nothing more to load"}
          </button>
        </div>
      )}
    </div>
  );
};
