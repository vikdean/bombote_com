import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/PerfumeNavigation";
import Footer from "@/components/PerfumeFooter";
import Analytics from "@/components/Analytics";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Perfume Reviews & Ratings Database",
  description:
    "Comprehensive database of perfume reviews and ratings featuring in-depth fragrance analysis, scent breakdowns, longevity insights, and recommendations. Discover your perfect scent from niche and designer fragrances.",
  keywords: [
    "fragrance reviews",
    "perfume ratings",
    "best perfumes",
    "cologne reviews",
    "top fragrances",
    "niche fragrances",
    "designer perfumes",
    "fragrance recommendations",
    "perfume guide",
    "unisex perfumes",
    "luxury perfumes",
    "fragrance notes",
    "Eau de Parfum reviews",
    "cologne guide",
    "perfume comparisons",
    "top-rated perfumes",
    "affordable perfumes",
    "mens cologne",
    "fragrance database",
    "perfume analysis",
    "scent reviews",
  ],
  openGraph: {
    title: "Perfume Reviews & Ratings Database | Bombote.com",
    description: "Comprehensive database of perfume reviews and ratings featuring in-depth fragrance analysis, scent breakdowns, and recommendations for fragrance enthusiasts.",
    type: "website",
    locale: "en_US",
    url: "https://bombote.com/perfume",
    siteName: "Bombote.com",
    images: [
      {
        url: "/icons8-perfume-bottle-100.png",
        width: 100,
        height: 100,
        alt: "Perfume Reviews Database",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Perfume Reviews & Ratings Database | Bombote.com",
    description: "Comprehensive database of perfume reviews and ratings featuring in-depth fragrance analysis and recommendations.",
    images: ["/icons8-perfume-bottle-100.png"],
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
    canonical: "https://bombote.com/perfume",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <body className={inter.className}>
      <Analytics />
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" disableTransitionOnChange>
          <main className="flex-grow bg-secondary">{children}</main>
        </ThemeProvider>
        <Footer />
      </div>
    </body>
  );
}
