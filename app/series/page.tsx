import { parseCSV, type Series, getLastModifiedDate } from "@/utils/Series_csvParser";
import SeriesTable from "@/components/SeriesTable";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleAlert } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";

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

  return (
    <>
      <StructuredData type="series" data={{ count: series.length }} />
      <div className="bg-secondary" aria-label="TV Series Reviews Database">
        <div className="max-w-[1920px] mx-auto pt-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">TV Series Ratings</h1>
        </div>
        <div className="max-w-[1920px] mx-auto pb-6 sm:px-6 lg:px-8">
          <div className="px-4 py-2 sm:px-0">
            <div className="grid grid-cols-1 md:grid-cols-[230px_230px_1fr] gap-4 my-4">
              <Card className="shadow-2xl bg-muted-foreground/20 border hover:border-orange-500 w-full">
                <CardHeader>
                  <CardTitle className="pb-4 text-sm md:text-base">Series reviewed</CardTitle>
                  <CardDescription className="text-2xl md:text-3xl font-bold text-orange-400">{series.length}</CardDescription>
                </CardHeader>
              </Card>

              <Card className="shadow-2xl bg-muted-foreground/20 border hover:border-orange-500 w-full">
                <CardHeader>
                  <CardTitle className="pb-4 text-sm md:text-base">Last update</CardTitle>
                  <CardDescription className="text-lg md:text-xl font-bold text-orange-400">{getLastModifiedDate()}</CardDescription>
                </CardHeader>
              </Card>

              <Card className="shadow-2xl bg-muted-foreground/20 border hover:border-orange-500 w-full">
                <CardContent>
                  <div className="flex items-center space-x-4 rounded-md pt-6">
                    <CircleAlert />
                    <div className="flex-1 space-y-1">
                      <CardTitle className="text-xs md:text-sm font-bold leading-none text-foreground">Note</CardTitle>
                      <p className="text-xs md:text-sm text-gray-300">Please keep in mind, the ratings on this page are strictly based on my own taste and preferences.</p>
                    </div>
                  </div>
                </CardContent>
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
    </>
  );
}
