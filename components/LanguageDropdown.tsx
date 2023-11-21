"use client";

import { useLocale } from "next-intl";
import { useCallback, useState } from "react";
import { Locale, defaultLocale, locales } from "utils/i18n/i18n-config";
import { usePathname, useRouter } from "utils/i18n/navigation";

const languages = {
  ja: { flag: "🇯🇵", name: "日本語" },
  en: { flag: "🇺🇸", name: "English" },
};

const LanguageSelectorButton = ({
  language,
  onSelectLanguage,
  isActive,
}: {
  language: Locale;
  onSelectLanguage: (language: Locale) => void;
  isActive: boolean;
}) => (
  <button
    onClick={() => onSelectLanguage(language)}
    className={`w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-400 hover:text-white ${
      isActive ? "cursor-not-allowed opacity-50" : ""
    }`}
    disabled={isActive}
  >
    {languages[language].flag} {languages[language].name}
  </button>
);

const LanguageDropdown = () => {
  const router = useRouter();
  const pathname = usePathname();
  const initialLocale = (useLocale() as Locale) || defaultLocale;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] =
    useState<Locale>(initialLocale);

  const toggleDropdown = useCallback(() => setIsOpen(!isOpen), [isOpen]);
  const selectLanguage = useCallback(
    (language: Locale) => {
      setSelectedLanguage(language);
      setIsOpen(false);
      router.replace(pathname, { locale: language });
    },
    [router, pathname],
  );

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="rounded bg-gray-900 px-4 py-2 text-xs text-white focus:outline-none"
      >
        {languages[selectedLanguage].flag}
      </button>

      {isOpen && (
        <div className="absolute right-0 z-20 mt-2 w-32 rounded-md bg-white py-2 shadow-xl">
          {locales.map((locale) => {
            return (
              <LanguageSelectorButton
                key={locale}
                language={locale}
                onSelectLanguage={selectLanguage}
                isActive={locale === selectedLanguage}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
