import React, { FC } from "react";
import Image from "next/image";

export const RoomThumbnail: FC<{ src: string; alt: string }> = ({
  src,
  alt,
}) => {
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
  src: string;
  title: string;
}> = ({ src, title }) => {
  return (
    <div className="relative">
      <RoomThumbnail src={src} alt={title} />
      <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-1 text-xs z-10">
        {title}
      </div>
    </div>
  );
};

export const GridRooms: FC<{
  contents: {
    id: string;
    title: string;
    image: {
      url: string;
    };
  }[];
}> = ({ contents }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {contents.map((room) => (
          <Room key={room.id} src={room.image.url} title={room.title} />
        ))}
      </div>
    </div>
  );
};
