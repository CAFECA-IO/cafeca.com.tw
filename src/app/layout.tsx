import type { Metadata } from "next";
import { Jost, Noto_Sans_TC, Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap", // Info: (20251105 - Julian) 字體沒載好就先用系統字體替代，載好後再換成自訂字體
});

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  variable: "--font-noto-sans-tc",
  display: "swap",
});

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-noto-sans-sc",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CAFECA Offcial Web",
  description: "CAFECA Offcial Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jost.variable} ${notoSansTC.variable} ${notoSansSC.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
