import type { Preview } from "@storybook/react";
import "app/globals.css";
import { NextIntlClientProvider } from "next-intl";
import React from "react";
import { loadLocaleMessagesForTest } from "../utils/i18n/i18n";

const withLocaleProvider = (Story, { globals: { locale } }) => {
  const messages = loadLocaleMessagesForTest(locale);
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Story />
    </NextIntlClientProvider>
  );
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    locale: {
      description: "Internationalization locale",
      defaultValue: "ja",
      toolbar: {
        icon: "globe",
        items: [
          { value: "ja", right: "🇯🇵", title: "日本語" },
          { value: "en", right: "🇺🇸", title: "English" },
        ],
      },
    },
  },
  decorators: [withLocaleProvider],
};

export default preview;
