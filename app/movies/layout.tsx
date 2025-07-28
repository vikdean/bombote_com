import type { Metadata } from "next";
import Navigation from "@/components/MoviesNavigation";
import Footer from "@/components/MoviesFooter";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Movie Reviews & Ratings Database",
  description:
    "Comprehensive database of unbiased personal movie reviews and ratings.",
  keywords: [
    "movie ratings",
    "cinema ratings",
    "movie reviews",
    "film reviews",
    "movie database",
    "unbiased movie ratings",
    "personal movie reviews",
    "film ratings",
    "cinema reviews",
    "movie recommendations",
    "film analysis",
    "movie opinions",
    "cinema database",
  ],
  openGraph: {
    title: "Movie Reviews & Ratings Database | Bombote.com",
    description: "Comprehensive database of unbiased personal movie reviews and ratings.",
    type: "website",
    locale: "en_US",
    url: "https://bombote.com/movies",
    siteName: "Bombote.com",
    images: [
      {
        url: "/icons8-movie-50.png",
        width: 50,
        height: 50,
        alt: "Movie Reviews Database",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Movie Reviews & Ratings Database | Bombote.com",
    description: "Comprehensive database of unbiased personal movie reviews and ratings.",
    images: ["/icons8-movie-50.png"],
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
    canonical: "https://bombote.com/movies",
  },
};

export default function MoviesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" disableTransitionOnChange>
        <main className="flex-grow bg-secondary">{children}</main>
      </ThemeProvider>
      <Footer />
    </div>
  );
}
