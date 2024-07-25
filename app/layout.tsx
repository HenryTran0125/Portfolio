import type { Metadata } from "next";
import "./globals.css";
import { openSans } from "./ui/font";
import MyApp from "./fav";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "This is portfolio website of Henry Tran",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Head>
        {" "}
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
