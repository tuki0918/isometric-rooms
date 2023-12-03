import { RoomCard } from "domains/RoomCard";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FC, useState } from "react";
import { Link } from "utils/i18n/navigation";

const RoomThumbnail: FC<{
  src: string;
  alt: string;
}> = ({ src, alt }) => {
  return (
    <div className="w-full transition-opacity duration-300 ease-in-out hover:opacity-50">
      <Image
        src={src}
        width={512}
        height={512}
        alt={alt}
        className="h-auto w-full"
        // for Largest Contentful Paint (LCP)
        priority={true}
      />
    </div>
  );
};

const OpenButton: FC<{
  content: RoomCard;
}> = ({ content }) => {
  const t = useTranslations("GridRooms");
  return (
    <Link
      href={`/room/${content.room.id}`}
      className="inline-flex items-center rounded border-4 px-8 py-2 text-lg font-bold text-white hover:border-cyan-500 hover:text-cyan-500"
    >
      <span>{t("open")}</span>
    </Link>
  );
};

export const GridRoomCard: FC<{
  content: RoomCard;
}> = ({ content }) => {
  const [hover, setHover] = useState(false);

  const caption = content.room.isGeneratedByAi
    ? `${content.room.title} / AI`
    : `${content.room.title}`;
  const label = (
    <div className="absolute bottom-0 left-0 z-10 bg-black bg-opacity-50 p-2 text-xs text-white">
      {caption}
    </div>
  );

  return (
    <div
      className="relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <RoomThumbnail src={content.room.image.url} alt={content.room.title} />
      {hover && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="flex items-center justify-center">
            <OpenButton content={content} />
          </div>
        </div>
      )}
      {label}
    </div>
  );
};

const GridRooms: FC<{
  contents: RoomCard[];
}> = ({ contents }) => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {contents.length === 0 ? (
          <>
            <NotFoundRoom />
            <NotFoundRoom />
            <NotFoundRoom />
          </>
        ) : (
          contents.map((content) => (
            <GridRoomCard key={content.room.id} content={content} />
          ))
        )}
      </div>
    </div>
  );
};

export default GridRooms;

export const NotFoundRoom = () => {
  const t = useTranslations("GridRooms");
  const label = (
    <div className="absolute bottom-0 left-0 z-10 bg-black bg-opacity-50 p-2 text-xs text-white">
      {t("notFound")}
    </div>
  );

  return (
    <div className="relative">
      <div className="w-full">
        <div
          role="status"
          className="space-y-8 rtl:space-x-reverse md:flex md:items-center md:space-x-8 md:space-y-0"
        >
          <div className="flex h-96 w-full items-center justify-center rounded bg-gray-300 dark:bg-gray-700">
            <svg
              className="h-10 w-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
        </div>
      </div>
      {label}
    </div>
  );
};

const SkeletonRoom = () => {
  const t = useTranslations("GridRooms");
  const label = (
    <div className="absolute bottom-0 left-0 z-10 bg-black bg-opacity-50 p-2 text-xs text-white">
      {t("loading")}
    </div>
  );

  return (
    <div className="relative">
      <div className="w-full">
        <div
          role="status"
          className="animate-pulse space-y-8 rtl:space-x-reverse md:flex md:items-center md:space-x-8 md:space-y-0"
        >
          <div className="flex h-96 w-full items-center justify-center rounded bg-gray-300 dark:bg-gray-700">
            <svg
              className="h-10 w-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
        </div>
      </div>
      {label}
    </div>
  );
};

export const GridSkeletonRooms = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <SkeletonRoom />
        <SkeletonRoom />
        <SkeletonRoom />
        <SkeletonRoom />
        <SkeletonRoom />
        <SkeletonRoom />
        <SkeletonRoom />
        <SkeletonRoom />
        <SkeletonRoom />
        <SkeletonRoom />
        <SkeletonRoom />
        <SkeletonRoom />
      </div>
    </div>
  );
};
