import { RoomCard } from "domains/RoomCard";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FC } from "react";

const RoomDetailsCard: FC<{ content: RoomCard }> = ({ content }) => {
  const t = useTranslations("RoomDetailsCard");
  const { room, user } = content;
  // TODO: nothing error
  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <div className="bg-white p-4 shadow md:w-2/3 md:p-8">
          <div className="flex flex-col items-center md:flex-row">
            <Image
              src={room.image.url}
              width={512}
              height={512}
              alt={room.title}
              className="w-full"
              // for Largest Contentful Paint (LCP)
              priority={true}
            />
          </div>
        </div>
        <div className="bg-white p-4 md:w-1/3 md:p-8 md:pl-0">
          <div className="mb-4">
            <h1 className="text-center text-2xl font-bold tracking-widest">
              DETAILS
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-4 text-gray-700 md:grid-cols-1 md:gap-0">
            <div className="flex flex-col">
              {/* Left Column */}
              <div className="mb-2">
                <div className="bg-gray-100 p-2 font-semibold">
                  {t("title")}
                </div>
                <div className="p-2 text-right">{room.title}</div>
              </div>
              <div className="mb-2">
                <div className="bg-gray-100 p-2 font-semibold">
                  {t("category")}
                </div>
                <div className="p-2 text-right">{room.category}</div>
              </div>
            </div>
            <div className="flex flex-col">
              {/* Right Column */}
              <div className="mb-2">
                <div className="bg-gray-100 p-2 font-semibold">{t("ai")}</div>
                <div className="p-2 text-right">
                  {room.isGeneratedByAi ? t("ai/yes") : t("ai/no")}
                </div>
              </div>
              <div className="mb-2">
                <div className="bg-gray-100 p-2 font-semibold">{t("user")}</div>
                <div className="p-2 text-right">
                  <div className="flex items-center justify-end space-x-2">
                    {user.image === undefined ? (
                      <></>
                    ) : (
                      <>
                        <Image
                          src={user.image.url}
                          width={24}
                          height={24}
                          alt={user.name}
                          className="rounded-full"
                        />
                      </>
                    )}
                    <div>{user.name}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SkeletonRoomDetailsCard: FC = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <div className="bg-white p-4 shadow md:w-2/3 md:p-8">
          <div className="flex flex-col items-center md:flex-row">
            <div className="mb-4 flex aspect-square w-full items-center justify-center rounded bg-gray-300 dark:bg-gray-700">
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
          </div>
        </div>
        <div className="bg-white p-4 md:w-1/3 md:p-8 md:pl-0">
          <div className="mb-4">
            <h1 className="text-center text-2xl font-bold tracking-widest">
              DETAILS
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-4 text-gray-700 md:grid-cols-1 md:gap-0">
            <div className="flex flex-col">
              {/* Left Column */}
              <div className="mb-2">
                <div className="bg-gray-100 p-2 font-semibold">
                  <div className="h-2.5 w-24 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                </div>
                <div className="p-2 text-right">
                  <div className="h-2.5 w-24 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                </div>
              </div>
              <div className="mb-2">
                <div className="bg-gray-100 p-2 font-semibold">
                  <div className="h-2.5 w-24 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                </div>
                <div className="p-2 text-right">
                  <div className="h-2.5 w-24 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              {/* Right Column */}
              <div className="mb-2">
                <div className="bg-gray-100 p-2 font-semibold">
                  <div className="h-2.5 w-24 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                </div>
                <div className="p-2 text-right">
                  <div className="h-2.5 w-24 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                </div>
              </div>
              <div className="mb-2">
                <div className="bg-gray-100 p-2 font-semibold">
                  <div className="h-2.5 w-24 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                </div>
                <div className="p-2 text-right">
                  <div className="flex items-center justify-end space-x-2">
                    <div className="h-2.5 w-24 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailsCard;
