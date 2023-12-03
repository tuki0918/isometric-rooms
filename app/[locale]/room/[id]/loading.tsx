import { SkeletonRoomDetailsCard } from "components/RoomDetailsCard";
import { getTranslations } from "next-intl/server";
import { Link } from "utils/i18n/navigation";

export default async function Loading() {
  const t = await getTranslations("Common");
  return (
    <div className="container mx-auto">
      <div className="mx-4 md:mx-8">
        <div className="my-8 flex items-center space-x-4">
          <Link
            className="inline-flex items-center text-gray-500 hover:text-gray-600"
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                clipRule="evenodd"
              />
            </svg>

            {t("nav/back")}
          </Link>
        </div>

        <div className="my-8">
          <SkeletonRoomDetailsCard />
        </div>
      </div>
    </div>
  );
}