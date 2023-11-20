import { useTranslations } from "next-intl";
import { FC } from "react";

const LoadMoreButton: FC<{
  isLoading: boolean;
  hasMore: boolean;
  onLoadMore: () => void;
}> = ({ isLoading, hasMore, onLoadMore }) => {
  const t = useTranslations("LoadMoreButton");
  return (
    <div className="mt-8 flex justify-center">
      <button
        onClick={onLoadMore}
        disabled={isLoading || !hasMore}
        className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-blue-500 hover:bg-blue-500 hover:text-white"
      >
        {isLoading ? t("isLoading") : hasMore ? t("hasMore") : t("nothing")}
      </button>
    </div>
  );
};

export default LoadMoreButton;
