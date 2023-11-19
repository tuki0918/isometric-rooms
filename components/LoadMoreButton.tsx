import { FC } from "react";

const LoadMoreButton: FC<{
  isLoading: boolean;
  hasMore: boolean;
  onLoadMore: () => void;
}> = ({ isLoading, hasMore, onLoadMore }) => (
  <div className="mt-8 flex justify-center">
    <button
      onClick={onLoadMore}
      disabled={isLoading}
      className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-blue-500 hover:bg-blue-500 hover:text-white"
    >
      {isLoading
        ? "Loading more..."
        : hasMore
          ? "Load More"
          : "Nothing more to load"}
    </button>
  </div>
);

export default LoadMoreButton;
