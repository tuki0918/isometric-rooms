import React, { FC } from "react";
import Image from "next/image";
import { ApiResponse } from "../hooks/useRooms";

export const RoomThumbnail: FC<{ src: string; alt: string }> = ({
  src,
  alt,
}) => {
  return (
    <Image
      src={src}
      width={512}
      height={512}
      alt={alt}
      style={{
        width: "100%",
        height: "auto",
      }}
    />
  );
};

export const Room: FC<{
  src: string;
  title: string;
}> = ({ src, title }) => {
  return (
    <div>
      <RoomThumbnail src={src} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export const GridRooms: FC<{
  contents: ApiResponse["contents"];
}> = ({ contents }) => {
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
        }}
      >
        {contents.map((room) => (
          <Room key={room.id} src={room.image.url} title={room.title} />
        ))}
      </div>
    </div>
  );
};
