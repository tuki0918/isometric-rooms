import { Information } from "domains/information";
import { FC } from "react";
import { formatJSTDate } from "utils/date";
import { Link } from "utils/i18n/navigation";
import InformationBadges from "./InformationBadges";

export const SkeletonInformation: FC = () => {
  return (
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
  );
};

const InformationFeeds: FC<{
  contents: Information[];
}> = ({ contents }) => {
  return (
    <ul className="relative flex flex-col gap-12 py-12 pl-6 before:absolute before:left-6 before:top-0 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:bottom-6 after:left-6 after:top-6 after:-translate-x-1/2 after:border after:border-slate-200 lg:pl-0 lg:before:left-[8.5rem] lg:after:left-[8.5rem]">
      {/* TODO: not found */}
      {contents.map((content) => {
        const publishedAt =
          content.publishedAt === undefined
            ? ""
            : formatJSTDate(content.publishedAt);
        return (
          <li
            key={content.id}
            className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-gray-500 before:ring-2 before:ring-white lg:flex lg:gap-12 lg:pl-0 lg:before:left-[8.5rem]"
          >
            <div className="hidden lg:block lg:w-28 lg:text-right">
              {publishedAt}
            </div>
            <div className="flex flex-1 flex-col gap-4">
              <div className="flex items-center justify-start space-x-2 lg:space-x-0">
                <div className="lg:hidden">{publishedAt}</div>
                <InformationBadges content={content} />
              </div>
              <div className="font-medium">
                <Link href={`/information/${content.id}`}>{content.title}</Link>
              </div>
              {content.summary && (
                <p className=" text-slate-500">{content.summary}</p>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default InformationFeeds;
