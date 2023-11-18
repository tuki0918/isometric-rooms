import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const LayoutFooter: FC = () => {
  return (
    <div className="mt-8 bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex items-center justify-center text-center">
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
