import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Analytics from "@/components/Analytics";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://bombote.com"),
  title: {
    default: "Bombote.com - Personal Reviews & Ratings Database",
    template: "%s | Bombote.com",
  },
  description: "Comprehensive personal database of detailed fragrance analysis, unbiased movie ratings, and honest TV series reviews with regular updates.",
  keywords: [
    "movie ratings",
    "series ratings",
    "tv show ratings",
    "cinema ratings",
    "movie reviews",
    "fragrance reviews",
    "perfume ratings",
    "best perfumes",
    "cologne reviews",
    "top fragrances",
    "niche fragrances",
    "designer perfumes",
    "fragrance recommendations",
    "unisex perfumes",
    "luxury perfumes",
    "fragrance notes",
    "Eau de Parfum reviews",
    "perfume comparisons",
    "top-rated perfumes",
    "affordable perfumes",
    "mens cologne",
    "personal reviews",
    "honest ratings",
    "fragrance database",
    "movie database",
    "tv show database",
  ],
  authors: [{ name: "Bombote" }],
  creator: "Bombote",
  publisher: "Bombote.com",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bombote.com",
    siteName: "Bombote.com",
    title: "Bombote.com - Personal Reviews & Ratings Database",
    description: "Comprehensive personal database of detailed fragrance analysis, unbiased movie ratings, and honest TV series reviews with regular updates.",
    images: [
      {
        url: "/logo.png",
        width: 220,
        height: 200,
        alt: "Bombote.com Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bombote.com - Personal Reviews & Ratings Database",
    description: "Comprehensive personal database of perfume, movie, and TV show reviews and ratings.",
    images: ["/logo.png"],
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
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: "https://bombote.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Analytics />
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
