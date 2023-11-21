"use client";

import { i18n } from "utils/i18n/i18n-config";
import { Link, usePathname } from "utils/i18n/navigation";

export default function LocaleSlector() {
  const pathName = usePathname();

  return (
    <div className="flex space-x-2">
      <span>Switch to :</span>
      <ul className="flex space-x-2">
        {i18n.locales.map((locale) => {
          return (
            <li key={locale}>
              <Link href={pathName} locale={locale} passHref>
                {locale}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
