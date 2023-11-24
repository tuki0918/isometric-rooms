import { useTranslations } from "next-intl";
import { FC } from "react";
import { FilterCategory } from "./CategoryMenu";

const CategorySelectorButton: FC<{
  category: FilterCategory;
  isSelected: boolean;
  onSelect: (category: FilterCategory) => void;
}> = ({ category, isSelected, onSelect }) => {
  const t = useTranslations("CategoryMenu");
  return (
    <button
      className={`block w-full px-4 py-2 ${
        isSelected ? "pointer-events-none font-bold" : "hover:bg-gray-100"
      }`}
      onClick={() => onSelect(category)}
    >
      {t(category)}
    </button>
  );
};

export default CategorySelectorButton;
