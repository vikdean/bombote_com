import { parseCSV, type Series, getLastModifiedDate } from "@/utils/Series_csvParser";
import SeriesTable from "@/components/SeriesTable";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import RatingsRadialChart from "@/components/RatingsRadialChart";
import RatingsRadarDistribution from "@/components/RatingsRadarDistribution";

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
  ],
  openGraph: {
    title: "TV Show Reviews & Ratings Database | Bombote.com",
    description: "Comprehensive database of personal TV show and series reviews and ratings. Browse detailed series ratings and discover show recommendations.",
    url: "https://bombote.com/series",
    type: "website",
  },
  alternates: {
    canonical: "https://bombote.com/series",
  },
};

export default function Home() {
  const series: Series[] = parseCSV();
  const seriesRatings = series.map((show) => parseFloat(show["Your Rating"])).filter((rating) => !isNaN(rating));
  const averageRating = seriesRatings.length > 0 ? (seriesRatings.reduce((sum, rating) => sum + rating, 0) / seriesRatings.length).toFixed(1) : "0.0";

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
              <div className="grid grid-cols-1 md:grid-cols-[0.6fr_1fr_1fr_0.6fr] gap-4 my-4">
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
                      {Object.keys(series[0]).map((key) => (
                        <TableHead key={key}>{key}</TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {series.map((show, index) => (
                      <TableRow key={index}>
                        {Object.entries(show).map(([key, value]) => (
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
