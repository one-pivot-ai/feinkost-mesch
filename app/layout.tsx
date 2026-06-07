import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Feinkost Mesch Karlsfeld | Mediterrane Feinkost & Catering",
  description:
    "Hausgemachte mediterrane Feinkost, frische Spezialitäten und Catering in Karlsfeld, München und Umgebung. Besuchen Sie Feinkost Mesch in der Dieselstraße 2.",
  keywords: [
    "Feinkost Karlsfeld",
    "Mediterrane Feinkost",
    "Catering Karlsfeld",
    "Feinkost München",
    "hausgemachte Feinkost",
    "Frischkäsecremes",
  ],
  openGraph: {
    title: "Feinkost Mesch Karlsfeld | Mediterrane Feinkost & Catering",
    description:
      "Hausgemachte mediterrane Feinkost, frische Spezialitäten und Catering in Karlsfeld.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
