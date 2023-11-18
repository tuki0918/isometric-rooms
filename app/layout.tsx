import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LayoutFooter } from "../components/LayoutFooter";
import { LayoutHeader, METADATA_TITLE } from "../components/LayoutHeader";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: METADATA_TITLE,
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="fixed top-0 z-50 w-full bg-white shadow-md">
          <LayoutHeader />
        </header>
        <main className="pt-16">{children}</main>
        <footer>
          <LayoutFooter />
        </footer>
      </body>
    </html>
  );
}
