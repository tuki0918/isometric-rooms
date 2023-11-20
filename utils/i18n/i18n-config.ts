export const i18n = {
  // A list of all locales that are supported
  locales: ["en", "ja"],
  // Used when no locale matches
  defaultLocale: "ja",
} as const;

export type Locale = (typeof i18n)["locales"][number];
