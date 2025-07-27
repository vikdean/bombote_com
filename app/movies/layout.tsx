import type { Metadata } from "next";
import Navigation from "@/components/MoviesNavigation";
import Footer from "@/components/MoviesFooter";

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

export default function MoviesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow bg-secondary">{children}</main>
      <Footer />
    </div>
  );
}
