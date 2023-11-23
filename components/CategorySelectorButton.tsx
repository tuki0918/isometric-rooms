import { useTranslations } from "next-intl";
import { FC } from "react";
import { ALIAS_NAMES, FilterCategory } from "./CategoryMenu";

export const CategorySelectorButton: FC<{
  category: FilterCategory;
  isSelected: boolean;
  onSelect: (category: FilterCategory) => void;
}> = ({ category, isSelected, onSelect }) => {
  const t = useTranslations("CategoryButton");
  const name = ALIAS_NAMES[category] || category;

  return (
    <button
      className={`block w-full px-4 py-2 ${
        isSelected ? "pointer-events-none" : "hover:bg-gray-100"
      }`}
      onClick={() => onSelect(category)}
    >
      {t(name)}
    </button>
  );
};

export default CategorySelectorButton;
