import LoadMoreButton from "components/LoadMoreButton";
import {
  InformationContent,
  useInfiniteInformations
} from "hooks/useInformations";
import { useTranslations } from "next-intl";
import { FC } from "react";
import { formatDate } from "utils/microCMS";

const CriticalBadge: FC<{ label: string }> = ({ label }) => {
  return (
    <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
      {label}
    </span>
  );
};

const NoticeBadge: FC<{ label: string }> = ({ label }) => {
  return (
    <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
      {label}
    </span>
  );
};

const InformationBadges: FC<{
  content: InformationContent;
}> = ({ content }) => {
  const t = useTranslations("Information");
  return (
    <div className="flex justify-start space-x-2">
      {content.category.map((category) => {
        return <NoticeBadge key={category} label={t(category)} />;
      })}
      {content.is_critical && <CriticalBadge label={t("重要")} />}
    </div>
  );
};

const Information: FC = () => {
  const {
    data,
    // error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteInformations({
    limit: 10,
    orders: "-publishedAt", // desc
  });

  return (
    <div>
      <div className="m-4">
        <div className="mx-auto w-3/4 md:w-1/2">
          {data === undefined || status === "error" ? (
            <div className="my-16 animate-pulse">
              <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            </div>
          ) : (
            <ul className="relative flex flex-col gap-12 py-12 pl-6 before:absolute before:left-6 before:top-0 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:bottom-6 after:left-6 after:top-6 after:-translate-x-1/2 after:border after:border-slate-200 lg:pl-0 lg:before:left-[8.5rem] lg:after:left-[8.5rem]">
              {data.pages
                .map((page) => page.contents)
                .flat()
                .map((content) => {
                  const date = formatDate(content, "publishedAt");
                  return (
                    <li
                      key={content.id}
                      className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-gray-500 before:ring-2 before:ring-white lg:flex lg:gap-12 lg:pl-0 lg:before:left-[8.5rem]"
                    >
                      <div className="hidden lg:block lg:w-28 lg:text-right">
                        {date}
                      </div>
                      <div className="flex flex-1 flex-col gap-4">
                        <div className="flex items-center justify-start space-x-2 lg:space-x-0">
                          <div className="lg:hidden">{date}</div>
                          <InformationBadges content={content} />
                        </div>
                        {/* TODO: link to information detail page */}
                        <div className="font-medium">{content.title}</div>
                        {content.summary && (
                          <p className=" text-slate-500">{content.summary}</p>
                        )}
                      </div>
                    </li>
                  );
                })}
            </ul>
          )}
        </div>
      </div>

      {hasNextPage && (
        <div className="m-8 flex justify-center">
          <LoadMoreButton
            isLoading={isFetchingNextPage}
            hasMore={hasNextPage}
            onLoadMore={() => void fetchNextPage()}
          />
        </div>
      )}
    </div>
  );
};

export default Information;
