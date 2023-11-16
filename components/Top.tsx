import React, { FC, useEffect, useState, useCallback } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useRooms, ContentCategory } from "../hooks/useRooms";
import { GridRooms, GridSkeletonRooms } from "./GridRooms";

const FILTER_ALL_CATEGORIES = "すべて";
type FilterCategory = typeof FILTER_ALL_CATEGORIES | ContentCategory;
const categories: FilterCategory[] = [
  FILTER_ALL_CATEGORIES,
  "部屋",
  "店舗",
  "モノ",
  "自然",
  // "未分類",
];

const CategoryButton: FC<{
  category: FilterCategory;
  isSelected: boolean;
  onSelect: () => void;
}> = ({ category, isSelected, onSelect }) => (
  // TODO: UI style
  <button
    className={`text-sm py-2 px-4 rounded-full ${
      isSelected
        ? "bg-blue-500 text-white font-bold pointer-events-none"
        : "bg-white text-blue-500 font-semibold hover:bg-blue-500 hover:text-white"
    }`}
    onClick={onSelect}
  >
    {category}
  </button>
);

// TODO: pagination
export const Top: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;
  const search = searchParams.get("category");

  const limit = 18;
  const page = 1;
  const offset = (page - 1) * limit;

  // Set the initial category based on searchParams
  const initialCategory = search || FILTER_ALL_CATEGORIES;
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>(
    initialCategory as ContentCategory
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
    [searchParams]
  );

  useEffect(() => {
    setSelectedCategory((search as ContentCategory) || FILTER_ALL_CATEGORIES);
  }, [search]);

  const filters =
    selectedCategory !== FILTER_ALL_CATEGORIES
      ? `category[contains]${selectedCategory}`
      : undefined;

  const { data, status } = useRooms({
    limit,
    offset,
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
      <GridRooms contents={data.contents} />
    );

  return (
    <div>
      <div className="flex justify-center space-x-2 mb-4">
        {categories.map((category) => (
          <CategoryButton
            key={category}
            category={category}
            isSelected={selectedCategory === category}
            onSelect={handleSelectCategory(category)}
          />
        ))}
      </div>
      {contents}
    </div>
  );
};
