import { RoomCard } from "domains/RoomCard";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FC } from "react";

const RoomDetailsCard: FC<{ content: RoomCard }> = ({ content }) => {
  const t = useTranslations("RoomDetailsCard");
  const { room, user } = content;
  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <div className="bg-white p-4 shadow md:w-2/3 md:p-8">
          <div className="flex flex-col items-center md:flex-row">
            <Image
              src={room.image.url}
              width={room.image.width}
              height={room.image.height}
              alt={room.title}
              className="w-full"
              // for Largest Contentful Paint (LCP)
              priority={true}
            />
          </div>
        </div>
        <div className="bg-white p-4 md:w-1/3 md:p-8 md:pl-0">
          <div className="mb-4">
            <h1 className="mb-6 text-center text-2xl font-bold">DATA</h1>
            <div className="border-t border-gray-300"></div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-gray-700 md:grid-cols-1 md:gap-0">
            <div className="flex flex-col">
              {/* Left Column */}
              <div className="mb-2">
                <div className="bg-gray-100 p-2 font-semibold">
                  {t("title")}
                </div>
                <div className="p-2">{room.title}</div>
              </div>
              <div className="mb-2">
                <div className="bg-gray-100 p-2 font-semibold">
                  {t("category")}
                </div>
                <div className="p-2">{room.category}</div>
              </div>
            </div>
            <div className="flex flex-col">
              {/* Right Column */}
              <div className="mb-2">
                <div className="bg-gray-100 p-2 font-semibold">{t("ai")}</div>
                <div className="p-2">
                  {room.isGeneratedByAi ? t("ai/yes") : t("ai/no")}
                </div>
              </div>
              <div className="mb-2">
                <div className="bg-gray-100 p-2 font-semibold">{t("user")}</div>
                <div className="p-2">
                  <div className="flex items-center space-x-2">
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

export default RoomDetailsCard;
