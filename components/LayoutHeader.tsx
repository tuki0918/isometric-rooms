import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Outfit } from "next/font/google";
const outfit = Outfit({ weight: "400", subsets: ["latin"] });

export const METADATA_TITLE = "Isometric Rooms";
export const LayoutHeader: FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between min-w-full">
        <div className={`font-bold text-lg ${outfit.className}`}>
          <Link href="/" className="hover:text-gray-300 flex items-center">
            <Image
              src="/logo.png"
              width={32}
              height={32}
              alt="Logo"
              className="mr-2"
            />
            {METADATA_TITLE}
          </Link>
        </div>
        {/* <ul className="flex space-x-4">
          <li>
            <Link href="/home" className="hover:text-gray-300">
              dummy
            </Link>
          </li>
        </ul> */}
      </div>
    </nav>
  );
};
