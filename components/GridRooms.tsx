import React, { FC, useState } from "react";
import Image from "next/image";

export interface RoomContent {
  id: string;
  title: string;
  image: {
    url: string;
  };
}

export const RoomThumbnail: FC<{
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
        className="w-full h-auto"
      />
    </div>
  );
};

const DownloadButton: FC<{
  src: string;
}> = ({ src }) => {
  return (
    <a
      href={src}
      className="text-white text-lg font-bold py-2 px-4 rounded inline-flex items-center border-4 rounded hover:border-emerald-500 hover:text-emerald-500"
      target="_blank"
    >
      <svg
        className="fill-current w-4 h-4 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
      </svg>
      <span>Download</span>
    </a>
  );
};

export const Room: FC<{
  content: RoomContent;
}> = ({ content }) => {
  const { title, image } = content;
  const [hover, setHover] = useState(false);

  const label = (
    <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-1 text-xs z-10">
      {title}
    </div>
  );

  return (
    <div
      className="relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <RoomThumbnail src={image.url} alt={title} />
      {hover && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="flex justify-center items-center">
            <DownloadButton src={image.url} />
          </div>
        </div>
      )}
      {label}
    </div>
  );
};

export const GridRooms: FC<{
  contents: RoomContent[];
}> = ({ contents }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {contents.length === 0 ? (
          <>
            <NotFoundRoom />
            <NotFoundRoom />
            <NotFoundRoom />
          </>
        ) : (
          contents.map((content) => <Room key={content.id} content={content} />)
        )}
      </div>
    </div>
  );
};

export const NotFoundRoom = () => {
  const label = (
    <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-1 text-xs z-10">
      Not found
    </div>
  );

  return (
    <div className="relative">
      <div className="w-full">
        <div
          role="status"
          className="space-y-8 md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
        >
          <div className="flex items-center justify-center w-full h-96 bg-gray-300 rounded dark:bg-gray-700">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600"
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

export const SkeletonRoom = () => {
  const label = (
    <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-1 text-xs z-10">
      Loading...
    </div>
  );

  return (
    <div className="relative">
      <div className="w-full">
        <div
          role="status"
          className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
        >
          <div className="flex items-center justify-center w-full h-96 bg-gray-300 rounded dark:bg-gray-700">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600"
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
