import { Outfit } from "next/font/google";
import Link from "next/link";
import { FC } from "react";
const outfit = Outfit({ weight: "400", subsets: ["latin"] });

export const METADATA_TITLE = "Isometric Rooms";
export const LayoutHeader: FC = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex min-w-full items-center justify-between">
        <div className={`text-lg font-bold ${outfit.className}`}>
          <Link href="/" className="flex items-center hover:text-gray-300">
            <span className="mr-1 text-sm">◆</span>
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
