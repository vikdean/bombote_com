import { parseCSV, type Fragrance, getLastModifiedDate } from "@/utils/Perfume_csvParser";
import PerfumeTable from "@/components/PerfumeTable";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleAlert } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import RatingsRadialChart from "@/components/RatingsRadialChart";
import RatingsRadarDistribution from "@/components/RatingsRadarDistribution";

export const metadata = {
  title: "Perfume Reviews & Ratings Database",
  description: "Comprehensive database of perfume reviews and ratings featuring in-depth fragrance analysis and recommendations for fragrance enthusiasts.",
  keywords: [
    "perfume ratings",
    "fragrance reviews",
    "perfume database",
    "fragrance analysis",
    "perfume recommendations",
    "niche fragrances",
    "designer perfumes",
    "cologne reviews",
    "fragrance notes",
    "perfume comparisons",
    "scent reviews",
    "fragrance database",
  ],
  openGraph: {
    title: "Perfume Reviews & Ratings Database | Bombote.com",
    description: "Comprehensive database of perfume reviews and ratings featuring in-depth fragrance analysis and recommendations for fragrance enthusiasts.",
    url: "https://bombote.com/perfume",
    type: "website",
  },
  alternates: {
    canonical: "https://bombote.com/perfume",
  },
};

export default function Home() {
  const fragrances: Fragrance[] = parseCSV();
  const fragranceRatings = fragrances
    .map((fragrance) => {
      const ratingMatch = fragrance.Rating.match(/10 \/ (\d+)/);
      return ratingMatch ? parseFloat(ratingMatch[1]) : NaN;
    })
    .filter((rating) => !isNaN(rating));
  const averageRating = fragranceRatings.length > 0 ? (fragranceRatings.reduce((sum, rating) => sum + rating, 0) / fragranceRatings.length).toFixed(1) : "0.0";

  return (
    <>
      <StructuredData type="perfume" data={{ count: fragrances.length }} />

      <div className="relative" aria-label="Fragrance Reviews Database">
        <div className="w-[95%] max-w-7xl mx-auto pt-12">
          <div className="px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-300 via-emerald-600 to-emerald-800 bg-clip-text tracking-tight text-transparent font-sans">
              Perfume Ratings & Reviews
            </h1>
          </div>
        </div>
        <div className="w-[95%] max-w-7xl mx-auto pb-6">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="py-2">
              <div className="grid grid-cols-1 md:grid-cols-[0.6fr_1fr_1fr_0.6fr] gap-4 my-4">
                <Card className="shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 w-full">
                  <CardHeader>
                    <CardTitle className="pb-4 text-base md:text-xl">Perfumes reviewed</CardTitle>
                    <CardDescription className="text-2xl md:text-3xl font-bold text-emerald-400">{fragrances.length}</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 w-full">
                  <CardHeader>
                    <CardTitle className="text-base md:text-xl">Average rating</CardTitle>
                  </CardHeader>
                  <CardContent className="-mt-2 pb-1">
                    <RatingsRadialChart averageRating={averageRating} color="#10b981" label="Perfume Rating" />
                  </CardContent>
                </Card>

                <RatingsRadarDistribution ratings={fragranceRatings} color="#34d399" label="" />

                <Card className="shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 w-full">
                  <CardHeader>
                    <CardTitle className="pb-4 text-base md:text-xl">Last update</CardTitle>
                    <CardDescription className="text-lg md:text-xl font-bold text-emerald-400">{getLastModifiedDate()}</CardDescription>
                  </CardHeader>
                </Card>
              </div>
              {/* Client-side interactive table */}
              <div className="block">
                <PerfumeTable fragrances={fragrances} />
              </div>

              {/* Server-rendered table for SEO*/}
              <div className="sr-only">
                <h2>Perfume Database</h2>
                <Table>
                  <TableHeader>
                    <TableRow>{fragrances.length > 0 && Object.keys(fragrances[0]).map((key) => <TableHead key={key}>{key}</TableHead>)}</TableRow>
                  </TableHeader>
                  <TableBody>
                    {fragrances.map((fragrance, index) => (
                      <TableRow key={index}>
                        {Object.entries(fragrance).map(([key, value]) => (
                          <TableCell key={key}>{key === "Link to buy" ? <Link href={value}>Amazon Link</Link> : value}</TableCell>
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
