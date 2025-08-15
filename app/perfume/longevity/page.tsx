import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const long_data = [
  {
    duration: "Under 30 minutes",
    rating: "🌗🌑🌑🌑🌑",
  },
  {
    duration: "30 minutes to 1 hour",
    rating: "🌕🌑🌑🌑🌑",
  },
  {
    duration: "1 hour",
    rating: "🌕🌗🌑🌑🌑",
  },
  {
    duration: "2 hours",
    rating: "🌕🌕🌑🌑🌑",
  },
  {
    duration: "3 hours",
    rating: "🌕🌕🌗🌑🌑",
  },
  {
    duration: "4 hours",
    rating: "🌕🌕🌕🌑🌑",
  },
  {
    duration: "5 hours",
    rating: "🌕🌕🌕🌗🌑",
  },
  {
    duration: "6 hours",
    rating: "🌕🌕🌕🌕🌑",
  },
  {
    duration: "7 hours",
    rating: "🌕🌕🌕🌕🌗",
  },
  {
    duration: "8 hours",
    rating: "🌕🌕🌕🌕🌕",
  },
];

export const metadata = {
  title: "Perfume Longevity Rating Guide & Legend",
  description:
    "Complete guide to understanding perfume longevity ratings and duration scales. Learn how fragrance performance is measured from 30 minutes to 8+ hours with detailed rating explanations.",
  keywords: [
    "perfume longevity",
    "fragrance duration",
    "perfume performance",
    "cologne longevity",
    "fragrance lasting power",
    "perfume rating scale",
    "scent longevity guide",
    "fragrance endurance",
    "perfume wear time",
    "cologne duration",
    "fragrance performance guide",
    "perfume longevity rating",
    "scent lasting time",
    "fragrance projection",
    "perfume sillage",
  ],
  authors: [{ name: "VA" }],
  creator: "VA",
  publisher: "Bombote.com",
  category: "Lifestyle",
  classification: "Guide",
  openGraph: {
    title: "Perfume Longevity Rating Guide & Legend | Bombote.com",
    description: "Complete guide to understanding perfume longevity ratings and duration scales. Learn how fragrance performance is measured with detailed rating explanations.",
    url: "https://bombote.com/perfume/longevity",
    type: "website",
    locale: "en_US",
    siteName: "Bombote.com",
    images: [
      {
        url: "/icons8-perfume-bottle-100.png",
        width: 100,
        height: 100,
        alt: "Perfume Longevity Guide",
      },
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
    title: "Perfume Longevity Rating Guide & Legend | Bombote.com",
    description: "Complete guide to understanding perfume longevity ratings and duration scales for fragrance performance measurement.",
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
    canonical: "https://bombote.com/perfume/longevity",
  },
  other: {
    "revisit-after": "30 days",
    rating: "general",
    distribution: "global",
    "content-type": "reference-guide",
  },
};

export default function Longevity() {
  return (
    <div className="w-[95%] max-w-7xl mx-auto pt-12" aria-label="Longevity Rating Guide">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground pb-8">Longevity Legend</h1>
        <div className="overflow-x-auto rounded-xl w-[360px]">
          <Table>
            <TableHeader className="bg-emerald-800 whitespace-nowrap">
              <TableRow>
                <TableHead className="px-4 w-[180px] text-white font-bold text-xs md:text-sm">Duration</TableHead>
                <TableHead className="w-[140px] text-white font-bold text-xs md:text-sm">Rating</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-foreground bg-muted-foreground/10">
              {long_data.map((data) => (
                <TableRow key={data.duration}>
                  <TableCell className="px-4 font-medium text-xs md:text-sm">{data.duration}</TableCell>
                  <TableCell>
                    <Badge className="bg-secondary rounded-md py-1">{data.rating}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
