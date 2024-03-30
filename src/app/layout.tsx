
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Providers } from "./providers";
import { Header } from "./_components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Consignar IRS",
  description: "Quando entregar o IRS, pode doar 0,5% do imposto devido ao Estado a entidades de cariz social ou religioso validadas pelas Finanças.",
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4268848645829698"
          crossOrigin="anonymous"></script>
      </head>
      <body className={inter.className}>
        <Header></Header>
        <Providers>
          {children}
        </Providers>

      </body>
    </html>
  );
}
