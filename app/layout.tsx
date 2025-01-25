import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Men's Perfume Ratings & Reviews | BOMBOTE",
  description: "Comprehensive collection of mens fragrance ratings and reviews",
  keywords: "fragrance reviews, perfume ratings, best perfumes, cologne reviews, top fragrances, perfume blog, niche fragrances, designer perfumes, fragrance recommendations, perfume guide, unisex perfumes, luxury perfumes, fragrance notes, Eau de Parfum reviews, cologne guide, perfume comparisons, top-rated perfumes, affordable perfumes, mens cologne",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Analytics />
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow bg-secondary">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
