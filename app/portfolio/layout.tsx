import type { Metadata } from "next";
import Navigation from "@/components/PortfolioNavigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "My Portfolio | Bombote.com",
  description: "My projects portfolio",
  keywords: ["web design portfolio", "next.js portfolio", "ui engineering", "ux case studies", "react projects", "frontend developer", "tailwind css portfolio", "product design"],
  openGraph: {
    title: "My Portfolio | Bombote.com",
    description: "My projects portfolio",
    url: "https://bombote.com/portfolio",
    type: "website",
    locale: "en_US",
    siteName: "Bombote.com",
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
    title: "My Portfolio | Bombote.com",
    description: "My projects portfolio",
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
  alternates: {
    canonical: "https://bombote.com/portfolio",
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="thematic-background"></div>
      <div className="flex flex-col min-h-screen relative isolate">
        <Navigation />
        <main className="flex-grow pt-20 pb-16">{children}</main>
        <Footer />
      </div>
    </>
  );
}
