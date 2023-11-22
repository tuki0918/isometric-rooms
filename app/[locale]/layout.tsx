import "app/globals.css";
import { SITE_TITLE } from "app/metadata";
import LayoutFooter from "components/LayoutFooter";
import LayoutHeader from "components/LayoutHeader";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { loadLocaleMessages } from "utils/i18n/i18n";
import { Locale, locales } from "utils/i18n/i18n-config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: `%s - ${SITE_TITLE}`,
  },
  description: "",
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();
  const messages = loadLocaleMessages(locale);

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <header className="fixed top-0 z-50 w-full bg-white shadow-md">
            <LayoutHeader title={SITE_TITLE} />
          </header>
          <main className="pt-16">{children}</main>
          <footer>
            <LayoutFooter />
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
