import InformationBadges from "components/InformationBadges";
import { FC } from "react";
import type { InformationContent } from "types/microcms";
import { formatDate } from "utils/microCMS";

const InformationCard: FC<{ content: InformationContent }> = ({ content }) => {
  const publishedAt = formatDate(content, "publishedAt");
  const revisedAt = formatDate(content, "revisedAt");
  return (
    <div>
      <div className="rounded-md bg-white p-4 shadow md:p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <InformationBadges content={content} />
          </div>

          {/* TODO:i18n */}
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-400">公開日時：{publishedAt}</div>
            <div className="hidden text-sm text-gray-400 md:block">
              最終更新日：{revisedAt}
            </div>
          </div>
        </div>

        <div className="mb-4 border-b-2 py-4 text-2xl font-bold text-gray-600">
          {content.title}
        </div>

        <div
          dangerouslySetInnerHTML={{
            __html: `${content.content}`,
          }}
        />
      </div>
    </div>
  );
};

export const SkeletonInformationCard: FC = () => {
  return (
    <div className="animate-pulse">
      <div className="rounded-md bg-white p-4 shadow md:p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-2.5 w-16 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="ms-2 h-2.5 w-16 rounded-full bg-gray-300 dark:bg-gray-600"></div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-400">
              <div className="h-2.5 w-24 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            </div>
            <div className="hidden text-sm text-gray-400 md:block">
              <div className="h-2.5 w-24 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            </div>
          </div>
        </div>

        <div className="mb-4 border-b-2 py-4 text-2xl font-bold text-gray-600">
          <div className="mb-4 h-3 w-1/2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        </div>

        <div className="lg:w-2/3">
          <div className="mb-4 flex h-48 items-center justify-center rounded bg-gray-300 dark:bg-gray-700">
            <svg
              className="h-10 w-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            </svg>
          </div>
          <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        </div>
      </div>
    </div>
  );
};

export default InformationCard;