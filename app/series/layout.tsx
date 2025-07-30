import type { Metadata } from "next";
import Navigation from "@/components/SeriesNavigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "TV Show Reviews & Ratings Database",
  description:
    "Comprehensive database of personal TV show and series reviews and ratings. Discover honest opinions on the latest series, classic shows, and hidden gems with detailed ratings and recommendations.",
  keywords: [
    "tv show ratings",
    "series ratings",
    "television reviews",
    "tv series database",
    "show recommendations",
    "series reviews",
    "television ratings",
    "tv show reviews",
    "series analysis",
    "television database",
    "show ratings",
    "tv series reviews",
  ],
  openGraph: {
    title: "TV Show Reviews & Ratings Database | Bombote.com",
    description: "Comprehensive database of personal TV show and series reviews and ratings. Discover honest opinions on series with detailed ratings and recommendations.",
    type: "website",
    locale: "en_US",
    url: "https://bombote.com/series",
    siteName: "Bombote.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "TV Show Reviews & Ratings Database | Bombote.com",
    description: "Comprehensive database of personal TV show and series reviews and ratings with honest opinions and recommendations.",
    images: ["/icons8-tv-50.png"],
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
    canonical: "https://bombote.com/series",
  },
};

export default function SeriesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Thematic Background */}
      <div className="thematic-background"></div>

      <div className="flex flex-col min-h-screen relative isolate">
        <Navigation />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </div>
    </>
  );
}
