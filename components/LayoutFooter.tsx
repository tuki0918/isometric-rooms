import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

export const LayoutFooter: FC = () => {
  return (
    <div className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center flex items-center justify-center">
        <Link href="https://github.com/tuki0918/isometric-rooms">
          <Image
            src="/github-mark-white.svg"
            width={32}
            height={32}
            alt="Githuv repository"
          />
        </Link>
      </div>
    </div>
  );
};
