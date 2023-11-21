import LanguageDropdown from "components/LanguageDropdown";
import { Outfit } from "next/font/google";
import Link from "next/link";
import { FC } from "react";
const outfit = Outfit({ weight: "400", subsets: ["latin"] });

export const METADATA_TITLE = "Isometric Rooms";
const LayoutHeader: FC = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex min-w-full items-center justify-between">
        <div className={`text-lg font-bold ${outfit.className}`}>
          <Link href="/" className="flex items-center hover:text-gray-300">
            <span className="mr-1">⬢</span>
            {METADATA_TITLE}
          </Link>
        </div>
        <ul className="flex items-center justify-between space-x-4">
          <li className="text-gray-500">Information</li>
          <li>
            <LanguageDropdown />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default LayoutHeader;
