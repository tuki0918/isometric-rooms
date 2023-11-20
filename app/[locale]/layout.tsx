import { notFound } from "next/navigation";

// Can be imported from a shared config
const locales = ["en", "ja"];

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();

  return <div>{children}</div>;
}
