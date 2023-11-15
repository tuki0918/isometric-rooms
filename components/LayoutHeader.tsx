import React, { FC } from "react";
import Link from "next/link";

export const METADATA_TITLE = "Isometric Rooms";
export const LayoutHeader: FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between min-w-full">
        <div className="font-bold text-lg">
          <Link href="/" className="hover:text-gray-300">
            {METADATA_TITLE}
          </Link>
        </div>
      </div>
    </nav>
  );
};
