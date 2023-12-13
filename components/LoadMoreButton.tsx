import { useTranslations } from "next-intl";
import { FC } from "react";

const LoadMoreButton: FC<{
  isLoading: boolean;
  hasMore: boolean;
  onLoadMore: () => void;
}> = ({ isLoading, hasMore, onLoadMore }) => {
  const t = useTranslations("LoadMoreButton");
  return (
    <div className="fter:h-px my-8 flex items-center before:h-px before:flex-1 before:bg-gray-400 before:content-[''] after:h-px after:flex-1 after:bg-gray-400 after:content-['']">
      <button
        type="button"
        onClick={onLoadMore}
        disabled={isLoading || !hasMore}
        className="bg-secondary-50 flex items-center rounded-full border border-gray-400 px-3 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100"
      >
        <span className="ms-1">
          {isLoading ? t("isLoading") : hasMore ? t("hasMore") : t("nothing")}
        </span>
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
  );
};

export default LoadMoreButton;
