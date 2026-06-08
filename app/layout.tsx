import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  "name": "Feinkost Mesch",
  "image": "https://feinkost-mesch.de/images/og-feinkost-mesch.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Dieselstraße 2",
    "postalCode": "85757",
    "addressLocality": "Karlsfeld",
    "addressCountry": "DE",
  },
  "telephone": "+4915112139212",
  "email": "selda.kadic@yahoo.de",
  "servesCuisine": ["Mediterranean", "Feinkost"],
  "url": "https://feinkost-mesch.de",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "10:00",
      "closes": "18:00",
    },
  ],
};

export const metadata: Metadata = {
  title: "Feinkost Mesch Karlsfeld | Hausgemachte Feinkost, Antipasti & Catering",
  description:
    "Feinkost Mesch in Karlsfeld: hausgemachte Frischkäsecremes, Antipasti, Mittagssnacks und Cateringplatten. Besuchen Sie uns in der Dieselstraße 2 oder fragen Sie Catering an.",
  keywords: [
    "Feinkost Karlsfeld",
    "Mediterrane Feinkost",
    "Catering Karlsfeld",
    "Catering München Umgebung",
    "Antipasti-Platten",
    "Mittagssnacks",
    "Feinkostplatten",
    "Dieselstraße 2",
    "hausgemachte Frischkäsecremes",
    "mediterrane Feinkost",
    "Catering für Geburtstage",
    "Catering für Firmenfeiern",
    "Catering für private Buffets",
  ],
  openGraph: {
    title: "Feinkost Mesch Karlsfeld",
    description:
      "Hausgemachte mediterrane Feinkost, Antipasti und Catering in Karlsfeld.",
    url: "https://feinkost-mesch.de",
    siteName: "Feinkost Mesch",
    images: [
      {
        url: "https://feinkost-mesch.de/images/og-feinkost-mesch.jpg",
        width: 1200,
        height: 630,
        alt: "Mediterrane Feinkostplatten von Feinkost Mesch in Karlsfeld",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${cormorant.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
