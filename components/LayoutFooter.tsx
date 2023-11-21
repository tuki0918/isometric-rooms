import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const LayoutFooter: FC = () => {
  return (
    <div className="mt-8 bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex h-8 w-8 items-center justify-center text-center">
        <Link href="https://github.com/tuki0918/isometric-rooms">
          <Image
            src="/github-mark-white.svg"
            width={96}
            height={96}
            alt="Githuv repository"
            className="h-auto w-full"
          />
        </Link>
      </div>
    </div>
  );
};

export default LayoutFooter;
