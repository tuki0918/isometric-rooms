import React, { FC } from "react";
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
    <div className="w-full transition-opacity duration-300 ease-in-out cursor-pointer hover:opacity-70">
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

export const Room: FC<{
  content: RoomContent;
}> = ({ content }) => {
  const { title, image } = content;

  const label = (
    <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-1 text-xs z-10">
      {title}
    </div>
  );

  return (
    <div className="relative">
      <RoomThumbnail src={image.url} alt={title} />
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
        {contents.map((content) => (
          <Room key={content.id} content={content} />
        ))}
      </div>
    </div>
  );
};
