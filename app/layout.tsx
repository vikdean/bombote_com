import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Analytics from "@/components/Analytics";
import { ThemeProvider } from "@/components/theme-provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bombote.com",
  description: "Perfume, Movie and TV Show ratings",
  keywords:
    "movie ratings, series ratings, tv show ratings, fragrance reviews, perfume ratings, best perfumes, cologne reviews, top fragrances, perfume blog, niche fragrances, designer perfumes, fragrance recommendations, perfume guide, unisex perfumes, luxury perfumes, fragrance notes, Eau de Parfum reviews, cologne guide, perfume comparisons, top-rated perfumes, affordable perfumes, mens cologne",
  openGraph: {
    title: "Bombote.com",
    description: "Perfume, Movie and TV Show ratings",
    type: "website",
    locale: "en_US",
    siteName: "Bombote.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bombote.com",
    description: "Perfume, Movie and TV Show ratings",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className} suppressHydrationWarning>
        <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
