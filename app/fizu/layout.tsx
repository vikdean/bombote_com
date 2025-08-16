import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://bombote.com/fizu"),
  title: "Fizu kalkulátor | Bombote.com",
  description: "Fizetés kalkulátor",
  keywords: ["fizetés", "fizetés kalkulátor"],
  authors: [{ name: "VA" }],
  creator: "VA",
  publisher: "Bombote.com",
  category: "Lifestyle",
  classification: "Calculators",
  openGraph: {
    title: "Fizu kalkulátor | Bombote.com",
    description: "Fizetés kalkulátor",
    url: "https://bombote.com/fizu",
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
    title: "Fizu kalkulátor | Bombote.com",
    description: "Fizetés kalkulátor",
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
    canonical: "https://bombote.com/fizu",
  },
  other: {
    "revisit-after": "7 days",
    rating: "general",
    distribution: "global",
  },
};

export default function FizuLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Dynamic dark background with multiple layers */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 -z-10"></div>

      {/* Animated gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-tr from-purple-900/20 via-transparent to-cyan-900/20 -z-10"></div>
      <div className="fixed inset-0 bg-gradient-to-bl from-emerald-900/15 via-transparent to-blue-900/15 -z-10"></div>

      {/* Floating orbs for visual interest */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 right-1/5 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/6 w-80 h-80 bg-gradient-to-tr from-cyan-500/8 to-emerald-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-500/6 to-purple-500/6 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="flex flex-col min-h-screen relative isolate">
        <main className="flex-grow pt-8">{children}</main>
      </div>
    </>
  );
}
