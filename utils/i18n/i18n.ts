import { getRequestConfig } from "next-intl/server";
import { i18n, Locale } from "utils/i18n/i18n-config";

const loadLocaleMessages = async (
  locale: Locale,
): Promise<{
  [key1: string]: { [key2: string]: string };
}> => {
  try {
    // eslint-disable-next-line
    return (await import(`./locales/${locale}.json`)).default;
  } catch (error) {
    console.error(`Locale data for ${locale} could not be loaded.`, error);
    const { defaultLocale } = i18n;
    // eslint-disable-next-line
    return (await import(`./locales/${defaultLocale}.json`)).default;
  }
};

export default getRequestConfig(async ({ locale }) => {
  const messages = await loadLocaleMessages(locale as Locale);
  return {
    messages,
  };
});
