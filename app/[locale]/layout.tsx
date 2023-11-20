import { notFound } from "next/navigation";
import { i18n, Locale } from "./../../utils/i18n/i18n-config";

// Can be imported from a shared config
const locales: Locale[] = i18n.locales as unknown as Locale[];

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();

  return <div>{children}</div>;
}
