import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Pacifico } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ExternalLinkGuard from "@/components/ExternalLinkGuard";

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

const pacifico = Pacifico({
  variable: "--font-highlight",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "FoodEstablishment"],
  "name": "Feinkost Mesch",
  "description": "Feinkost Mesch in Karlsfeld bietet hausgemachte Frischkäsecremes, mediterrane Antipasti, Feinkostplatten und Catering für den Münchner Raum.",
  "image": "https://feinkost-mesch.de/images/og-feinkost-mesch.jpg",
  "logo": "https://feinkost-mesch.de/images/logo.webp",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Dieselstraße 2",
    "postalCode": "85757",
    "addressLocality": "Karlsfeld",
    "addressRegion": "Bayern",
    "addressCountry": "DE",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.2244,
    "longitude": 11.4682,
  },
  "telephone": "+4915112139212",
  "email": "selda.kadic@yahoo.de",
  "url": "https://feinkost-mesch.de",
  "servesCuisine": ["Mediterranean", "Feinkost", "Antipasti"],
  "priceRange": "€€",
  "foundingDate": "2009",
  "currenciesAccepted": "EUR",
  "paymentAccepted": "Cash, Credit Card",
  "areaServed": [
    { "@type": "City", "name": "Karlsfeld" },
    { "@type": "City", "name": "München" },
  ],
  "sameAs": [
    "https://maps.google.com/?q=Dieselstraße+2+85757+Karlsfeld",
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "10:00",
      "closes": "18:00",
    },
  ],
  "hasMap": "https://maps.google.com/?q=Dieselstraße+2+85757+Karlsfeld",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://feinkost-mesch.de"),
  icons: {
    icon: [
      { url: '/favicon-color.png', media: '(prefers-color-scheme: light)', type: 'image/png' },
      { url: '/favicon-white.png', media: '(prefers-color-scheme: dark)',  type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
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
  alternates: {
    canonical: "https://feinkost-mesch.de",
  },
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
  twitter: {
    card: "summary_large_image",
    title: "Feinkost Mesch Karlsfeld | Hausgemachte Feinkost & Catering",
    description:
      "Hausgemachte Frischkäsecremes, Antipasti und mediterrane Cateringplatten in Karlsfeld bei München.",
    images: ["https://feinkost-mesch.de/images/og-feinkost-mesch.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
      className={`${cormorant.variable} ${dmSans.variable} ${pacifico.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          {children}
          <ExternalLinkGuard />
        </ThemeProvider>
      </body>
    </html>
  );
}
