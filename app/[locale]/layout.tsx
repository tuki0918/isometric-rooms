import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { LayoutFooter } from "../../components/LayoutFooter";
import { LayoutHeader, METADATA_TITLE } from "../../components/LayoutHeader";
import getRequestConfig from "./../../utils/i18n/i18n";
import { Locale, i18n } from "./../../utils/i18n/i18n-config";
import "./../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: METADATA_TITLE,
  description: "",
};

// Can be imported from a shared config
const locales: Locale[] = i18n.locales as unknown as Locale[];

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();
  // https://next-intl-docs.vercel.app/docs/environments/server-client-components
  // Option 4: Providing all messages
  const { messages } = await getRequestConfig({ locale });

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <header className="fixed top-0 z-50 w-full bg-white shadow-md">
            <LayoutHeader />
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
