import InformationBadges from "components/InformationBadges";
import type { InformationContent } from "hooks/useInformations";
import { FC } from "react";
import { formatDate } from "utils/microCMS";

const InformationCard: FC<{ content: InformationContent }> = ({ content }) => {
  const publishedAt = formatDate(content, "publishedAt");
  const revisedAt = formatDate(content, "revisedAt");
  return (
    <div>
      <div className="rounded-md bg-white p-8 shadow">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <InformationBadges content={content} />
          </div>

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

export default InformationCard;
