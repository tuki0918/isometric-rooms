import { ContentCategory } from "hooks/useRooms";
import { useTranslations } from "next-intl";
import { FC } from "react";

export const FILTER_ALL = "すべて";
export type FilterCategory = typeof FILTER_ALL | ContentCategory;
export const FILTER_ALL_CATEGORIES: FilterCategory[] = [
  FILTER_ALL,
  "部屋",
  "店舗",
  "モノ",
  "自然",
  // "未分類",
];

const alias: {
  [key in FilterCategory]: string;
} = {
  すべて: "all",
  部屋: "rooms",
  店舗: "facilities",
  モノ: "objects",
  自然: "nature",
  未分類: "other",
};

const CategoryButton: FC<{
  category: FilterCategory;
  isSelected: boolean;
  onSelect: () => void;
}> = ({ category, isSelected, onSelect }) => {
  const t = useTranslations("CategoryButton");
  const name = alias[category] || category;
  return (
    <button
      className={`rounded-full px-4 py-2 text-xs ${
        isSelected
          ? "pointer-events-none bg-blue-500 font-bold text-white"
          : "bg-white font-semibold text-blue-500 hover:bg-blue-500 hover:text-white"
      }`}
      onClick={onSelect}
    >
      {t(name)}
    </button>
  );
};

export default CategoryButton;
