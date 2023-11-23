import CategoryButton from "components/CategoryButton";
import CategorySelectorButton from "components/CategorySelectorButton";
import { useQueryParams } from "hooks/useQueryParams";
import { ContentCategory } from "hooks/useRooms";
import { FC, useCallback, useState } from "react";

export const FILTER_ALL = "すべて";
export type FilterCategory = typeof FILTER_ALL | ContentCategory;
export const FILTER_ALL_CATEGORIES: FilterCategory[] = [
  FILTER_ALL,
  "部屋",
  "施設",
  "モノ",
  "自然",
  // "未分類",
];

// Alias labels for translation from database labels
export const ALIAS_NAMES: {
  [key in FilterCategory]: string;
} = {
  すべて: "all",
  部屋: "rooms",
  施設: "facilities",
  モノ: "objects",
  自然: "nature",
  未分類: "other",
};

const CategoryMenu: FC<{
  selectedCategory: FilterCategory;
  setSelectedCategory: (category: FilterCategory) => void;
}> = ({ selectedCategory, setSelectedCategory }) => {
  const { setQueryParam } = useQueryParams();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = useCallback(() => setIsOpen(!isOpen), [isOpen]);
  const handleSelectCategory = useCallback(
    (category: FilterCategory) => {
      setSelectedCategory(category);
      setQueryParam("category", category);
      setIsOpen(false);
    },
    [setSelectedCategory, setQueryParam, setIsOpen],
  );

  return (
    <div>
      {/* md: menu */}
      <div className="hidden md:my-8 md:flex md:justify-center md:space-x-4">
        {FILTER_ALL_CATEGORIES.map((category) => (
          <CategoryButton
            key={category}
            category={category}
            isSelected={selectedCategory === category}
            onSelect={handleSelectCategory}
          />
        ))}
      </div>

      {/* sd: menu */}
      <div className={`my-8 flex justify-center md:hidden`}>
        <div>
          <button
            onClick={toggleDropdown}
            className="inline-flex items-center rounded-full bg-blue-500 px-4 py-2 text-center text-xs font-bold text-white hover:bg-blue-600"
          >
            {selectedCategory}{" "}
            <svg
              className="ms-3 h-2.5 w-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
        </div>

        {/* sd: dropdown */}
        <div
          className={`absolute z-10 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow ${
            !isOpen ? "hidden" : ""
          }`}
        >
          <ul className="py-2 text-sm text-gray-700">
            {FILTER_ALL_CATEGORIES.map((category) => (
              <CategorySelectorButton
                key={category}
                category={category}
                isSelected={selectedCategory === category}
                onSelect={handleSelectCategory}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;
