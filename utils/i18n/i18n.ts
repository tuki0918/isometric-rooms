import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => ({
  // eslint-disable-next-line
  messages: (await import(`./locales/${locale}.json`)).default,
}));
