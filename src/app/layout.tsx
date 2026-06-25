import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { ClientProviders } from "@/components/providers/ClientProviders";
import { SITE } from "@/lib/constants";
import { getLocalBusinessSchema, getRestaurantSchema } from "@/lib/structured-data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Artisan Pizza & Premium Coffee in Shahdara`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "Bite N Brew Cafe",
    "restaurant Shahdara",
    "pizza New Delhi",
    "coffee cafe Delhi",
    "best pizza Shahdara",
    "cafe near me",
    "artisan pizza",
    "cold coffee Delhi",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Where Great Coffee Meets Artisan Pizza`,
    description: SITE.description,
    images: [
      {
        url: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: `${SITE.name} - Artisan Pizza and Coffee`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Artisan Pizza & Premium Coffee`,
    description: SITE.description,
    images: [
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE.url,
  },
  category: "restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const restaurantSchema = getRestaurantSchema();
  const localBusinessSchema = getLocalBusinessSchema();

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="min-h-screen bg-bg-primary font-body text-text-primary antialiased">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
