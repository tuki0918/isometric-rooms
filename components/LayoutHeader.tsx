import React, { FC } from "react";

export const METADATA_TITLE = "Isometric Rooms";
export const LayoutHeader: FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="font-bold text-lg">{METADATA_TITLE}</div>
      </div>
    </nav>
  );
};
