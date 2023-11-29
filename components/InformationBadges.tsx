import { useTranslations } from "next-intl";
import { FC } from "react";
import type { InformationContent } from "types/microcms";

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

export default InformationBadges;
