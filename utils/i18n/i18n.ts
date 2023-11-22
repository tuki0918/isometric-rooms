import { getRequestConfig } from "next-intl/server";
import { Locale } from "utils/i18n/i18n-config";
import locale_en from "utils/i18n/locales/en.json";
import locale_ja from "utils/i18n/locales/ja.json";

// Simple and workable implementation in storybook
export const loadLocaleMessages = (
  locale: Locale,
): {
  [key1: string]: { [key2: string]: string };
} => {
  switch (locale) {
    case "en":
      return locale_en;
    case "ja":
      return locale_ja;
    default:
      return locale_ja;
  }
};

// // This implementation is not workable in storybook, but paformance is better than above
// export const loadLocaleMessages = async (
//   locale: Locale,
// ): Promise<{
//   [key1: string]: { [key2: string]: string };
// }> => {
//   try {
//     // eslint-disable-next-line
//     return (await import(`./locales/${locale}.json`)).default;
//   } catch (error) {
//     console.error(`Locale data for ${locale} could not be loaded.`, error);
//     const { defaultLocale } = i18n;
//     // eslint-disable-next-line
//     return (await import(`./locales/${defaultLocale}.json`)).default;
//   }
// };

export default getRequestConfig(({ locale }) => {
  const messages = loadLocaleMessages(locale as Locale);
  return {
    messages,
  };
});
