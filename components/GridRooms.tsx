import React, { FC, useState } from "react";
import Image from "next/image";

export interface RoomContent {
  id: string;
  title: string;
  image: {
    url: string;
  };
  category: string[];
  is_generated_by_ai: boolean;
  publishedAt: string;
  revisedAt: string;
}

export const RoomThumbnail: FC<{
  src: string;
  alt: string;
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ src, alt, onClick }) => {
  return (
    <div
      className="w-full transition-opacity duration-300 ease-in-out cursor-pointer hover:opacity-70"
      onClick={() => onClick(true)}
    >
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
  const [showDetails, setShowDetails] = useState(false);

  const { title, image, category, is_generated_by_ai, publishedAt, revisedAt } =
    content;

  const details = (
    <div
      className="absolute inset-0 bg-white p-4 text-neutral-900 opacity-90 cursor-pointer"
      onClick={() => setShowDetails(false)}
    >
      <p>カテゴリ：{category}</p>
      <p>タイトル：{title}</p>
      <p>AI生成　：{is_generated_by_ai ? "YES" : "NO"}</p>
      <p>投稿日　：{publishedAt}</p>
      <p>投稿者　：{revisedAt}</p>
    </div>
  );

  const label = (
    <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-1 text-xs z-10">
      {title}
    </div>
  );

  return (
    <div className="relative">
      <RoomThumbnail src={image.url} alt={title} onClick={setShowDetails} />
      {showDetails ? details : label}
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
