import LanguageDropdown from "components/LanguageDropdown";
import { Outfit } from "next/font/google";
import { FC } from "react";
import { Link } from "utils/i18n/navigation";
const outfit = Outfit({ weight: "400", subsets: ["latin"] });

const LayoutHeader: FC<{ title: string }> = ({ title }) => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className={`text-lg font-bold ${outfit.className}`}>
          <Link href="/" className="flex items-center hover:text-gray-300">
            <span className="mr-1">⬢</span>
            {title}
          </Link>
        </div>
        <ul className="flex items-center justify-between space-x-4">
          <li>
            <LanguageDropdown />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default LayoutHeader;
