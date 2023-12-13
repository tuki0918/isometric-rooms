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
              className="ms-2 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M10 21.308L.692 12L10 2.692l1.063 1.064L2.82 12l8.244 8.244z"
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
