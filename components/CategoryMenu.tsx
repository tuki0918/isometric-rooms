import CategoryButton from "components/CategoryButton";
import CategorySelectorButton from "components/CategorySelectorButton";
import { useQueryParams } from "hooks/useQueryParams";
import { useTranslations } from "next-intl";
import { FC, useCallback, useState } from "react";
import type { RoomContentCategory } from "types/microcms";

export const FILTER_ALL = "すべて";
export type FilterCategory = typeof FILTER_ALL | RoomContentCategory;
export const FILTER_ALL_CATEGORIES: FilterCategory[] = [
  FILTER_ALL,
  "部屋",
  "施設",
  "モノ",
  "自然",
  // "未分類",
];

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

  const t = useTranslations("CategoryMenu");
  return (
    <div>
      <div className="my-8 hidden justify-center sm:flex">
        <div className="flex justify-center space-x-2 rounded-full border bg-white px-4 py-3">
          {FILTER_ALL_CATEGORIES.map((category) => (
            <CategoryButton
              key={category}
              category={category}
              isSelected={selectedCategory === category}
              onSelect={handleSelectCategory}
            />
          ))}
        </div>
      </div>

      <div className={`my-8 flex justify-center sm:hidden`}>
        <div>
          <button
            onClick={toggleDropdown}
            className="inline-flex items-center rounded-full bg-blue-500 px-4 py-3 text-center text-xs font-bold text-white hover:bg-blue-600"
          >
            {`${t("title")}${t("delimiter")}${t(selectedCategory)}`}
            <svg
              className="ms-1 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062"
              />
            </svg>
          </button>
        </div>

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
