import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/PerfumeNavigation";
import Footer from "@/components/PerfumeFooter";
import Analytics from "@/components/Analytics";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bombote - Perfume Reviews & Ratings Database",
  description:
    "A comprehensive, ever-growing database of perfume reviews and ratings, featuring in-depth fragrance analysis, scent breakdowns, longevity and silage insights, and recommendations. Updated regularly to reflect the latest releases and timeless classics, helping fragrance enthusiasts discover their perfect scent.",
  keywords:
    "fragrance reviews, perfume ratings, best perfumes, cologne reviews, top fragrances, perfume blog, niche fragrances, designer perfumes, fragrance recommendations, perfume guide, unisex perfumes, luxury perfumes, fragrance notes, Eau de Parfum reviews, cologne guide, perfume comparisons, top-rated perfumes, affordable perfumes, mens cologne",
  openGraph: {
    title: "Bombote - Perfume Reviews & Ratings Database",
    description:
      "A comprehensive, ever-growing database of perfume reviews and ratings, featuring in-depth fragrance analysis, scent breakdowns, longevity and silage insights, and recommendations. Updated regularly to reflect the latest releases and timeless classics, helping fragrance enthusiasts discover their perfect scent.",
    type: "website",
    locale: "en_US",
    siteName: "Bombote.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bombote - Perfume Reviews & Ratings Database",
    description:
      "A comprehensive, ever-growing database of perfume reviews and ratings, featuring in-depth fragrance analysis, scent breakdowns, longevity and silage insights, and recommendations. Updated regularly to reflect the latest releases and timeless classics, helping fragrance enthusiasts discover their perfect scent.",
  },
  robots: {
    index: true,
    follow: true,
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
