import { FilterCategory } from "components/CategoryMenu";
import { useTranslations } from "next-intl";
import { FC } from "react";

const CategoryButton: FC<{
  category: FilterCategory;
  isSelected: boolean;
  onSelect: (category: FilterCategory) => void;
}> = ({ category, isSelected, onSelect }) => {
  const t = useTranslations("CategoryMenu");
  return (
    <button
      className={`rounded-full px-4 py-2 text-xs ${
        isSelected
          ? "pointer-events-none bg-blue-500 font-bold text-white"
          : "bg-white font-semibold text-blue-500 hover:bg-blue-500 hover:text-white"
      }`}
      onClick={() => onSelect(category)}
    >
      {t(category)}
    </button>
  );
};

export default CategoryButton;
