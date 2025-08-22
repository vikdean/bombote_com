import { parseCSV, type Series, getLastModifiedDate } from "@/utils/Series_csvParser";
import SeriesTable from "@/components/SeriesTable";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import RatingsRadialChart from "@/components/RatingsRadialChart";
import RatingsRadarDistribution from "@/components/RatingsRadarDistribution";
import { GenresPieChart } from "@/components/GenresPieChart";

export const metadata = {
  title: "TV Show Reviews & Ratings Database",
  description:
    "Comprehensive database of personal TV show and series reviews and ratings. Browse through detailed series ratings, discover show recommendations, and explore honest opinions on television classics and latest releases.",
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
    "best tv shows",
    "top series",
    "netflix shows",
    "streaming series",
    "drama series",
    "comedy shows",
    "tv recommendations",
  ],
  authors: [{ name: "VA" }],
  creator: "VA",
  publisher: "Bombote.com",
  category: "Entertainment",
  classification: "Reviews & Ratings",
  openGraph: {
    title: "TV Show Reviews & Ratings Database | Bombote.com",
    description: "Comprehensive database of personal TV show and series reviews and ratings. Browse detailed series ratings and discover show recommendations.",
    url: "https://bombote.com/series",
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
    title: "TV Show Reviews & Ratings Database | Bombote.com",
    description: "Comprehensive database of personal TV show and series reviews and ratings with honest opinions on television classics and latest releases.",
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
    canonical: "https://bombote.com/series",
  },
  other: {
    "revisit-after": "7 days",
    rating: "general",
    distribution: "global",
  },
};

export default function Home() {
  const series: Series[] = parseCSV();
  const seriesRatings = series.map((show) => parseFloat(show["Your Rating"])).filter((rating) => !isNaN(rating));
  const averageRating = seriesRatings.length > 0 ? (seriesRatings.reduce((sum, rating) => sum + rating, 0) / seriesRatings.length).toFixed(1) : "0.0";

  const genreData = series
    .flatMap((show) => show.Genres.split(", "))
    .reduce((acc, genre) => {
      if (genre) {
        acc[genre] = (acc[genre] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);

  // Ensure types: Object.entries can be loose in TS, so cast to [string, number][] and
  // produce a strongly typed array for the chart component.
  const genreChartData: { genre: string; count: number; fill: string }[] = (Object.entries(genreData) as [string, number][])
    .map(([genre, count], index) => ({
      genre,
      count: Number(count) || 0,
      fill: `var(--chart-${(index % 5) + 1})`,
    }))
    .sort((a, b) => b.count - a.count);

  return (
    <>
      <StructuredData type="series" data={{ count: series.length }} />

      <div className="relative" aria-label="TV Series Reviews Database">
        <div className="w-[95%] max-w-7xl mx-auto pt-12">
          <div className="px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-400 via-amber-600 to-amber-800 bg-clip-text tracking-tight text-transparent font-sans">
              TV Series Ratings & Reviews
            </h1>
          </div>
        </div>
        <div className="w-[95%] max-w-7xl mx-auto pb-6">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="py-2">
              <div className="grid grid-cols-1 md:grid-cols-[0.75fr_0.8fr_0.9fr_0.9fr_0.7fr] gap-4 my-4">
                <Card className="shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 w-full">
                  <CardHeader>
                    <CardTitle className="pb-4 text-base md:text-xl">Series reviewed</CardTitle>
                    <CardDescription className="text-2xl md:text-3xl font-bold text-amber-400">{series.length}</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 w-full">
                  <CardHeader>
                    <CardTitle className="text-base md:text-xl">Average rating</CardTitle>
                  </CardHeader>
                  <CardContent className="-mt-2 pb-1">
                    <RatingsRadialChart averageRating={averageRating} color="#f59e0b" label="Series Rating" />
                  </CardContent>
                </Card>

                <RatingsRadarDistribution ratings={seriesRatings} color="#fbbf24" label="" />

                <GenresPieChart data={genreChartData} />

                <Card className="shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 w-full">
                  <CardHeader>
                    <CardTitle className="pb-4 text-base md:text-xl">Last update</CardTitle>
                    <CardDescription className="text-lg md:text-xl font-bold text-amber-400">{getLastModifiedDate()}</CardDescription>
                  </CardHeader>
                </Card>
              </div>
              {/* Client-side interactive table */}
              <div className="block">
                <SeriesTable series={series} />
              </div>

              {/* Server-rendered table for SEO*/}
              <div className="sr-only">
                <h2>TV Series Database</h2>
                <Table>
                  <TableHeader>
                    <TableRow>
                      {Object.keys(series[0])
                        .filter((k) => k !== "Genres")
                        .map((key) => (
                          <TableHead key={key}>{key}</TableHead>
                        ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {series.map((show, index) => (
                      <TableRow key={index}>
                        {Object.entries(show)
                          .filter(([key]) => key !== "Genres")
                          .map(([key, value]) => (
                            <TableCell key={key}>{key === "URL" ? <Link href={value}>IMDb Link</Link> : value}</TableCell>
                          ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
