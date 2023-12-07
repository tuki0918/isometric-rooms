import "app/globals.css";
import { SITE_DESCRIPTION, SITE_TITLE } from "app/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: `%s - ${SITE_TITLE}`,
  },
  description: SITE_DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
