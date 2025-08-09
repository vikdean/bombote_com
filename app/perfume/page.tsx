import { parseCSV, type Fragrance, getLastModifiedDate } from "@/utils/Perfume_csvParser";
import PerfumeTable from "@/components/PerfumeTable";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import RatingsRadialChart from "@/components/RatingsRadialChart";
import RatingsRadarDistribution from "@/components/RatingsRadarDistribution";
import TopBrandsChart from "@/components/TopBrandsChart";

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

  // Compute top 5 brands by average rating (normalize brand names; robust rating parsing)
  const brandAverages = (() => {
    const map = new Map<string, { sum: number; count: number }>();
    const ratingRegex = /10\s*\/\s*(\d+(?:\.\d+)?)/;
    for (const f of fragrances) {
      const brand = (f.Brand || "").toString().trim();
      if (!brand) continue;
      const match = f.Rating?.toString().match(ratingRegex);
      const rating = match ? parseFloat(match[1]) : NaN;
      if (!isNaN(rating)) {
        const prev = map.get(brand) || { sum: 0, count: 0 };
        prev.sum += rating;
        prev.count += 1;
        map.set(brand, prev);
      }
    }
    return Array.from(map.entries())
      .map(([brand, { sum, count }]) => ({ brand, average: sum / count }))
      .sort((a, b) => b.average - a.average);
  })();

  const topBrands = brandAverages.slice(0, 5);
  const overallAvg = parseFloat(averageRating) || 0;
  const chartData = topBrands.map((b) => ({
    brand: b.brand,
    average: b.average,
    overall: overallAvg,
  }));

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
              <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-[0.35fr_0.85fr_0.5fr_0.52fr_0.38fr] gap-3 my-4">
                <Card className="shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 w-full">
                  <CardHeader>
                    <CardTitle className="pb-4 text-base md:text-xl">Perfumes reviewed</CardTitle>
                    <CardDescription className="text-2xl md:text-3xl font-bold text-emerald-400">{fragrances.length}</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 w-full">
                  <CardHeader>
                    <CardTitle className="text-base md:text-xl">Top brands</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <TopBrandsChart data={chartData} overallAvg={overallAvg} />
                    <script
                      // embed the same chartData into window so the client component can hydrate reliably
                      dangerouslySetInnerHTML={{
                        __html: `window.__TOP_BRANDS = ${JSON.stringify(chartData)};`,
                      }}
                    />
                  </CardContent>
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
                          <TableCell key={key}>
                            {key === "Link to buy" ? (
                              typeof value === "string" && (value.includes("amazon.") || value.includes("amzn.to")) ? (
                                <Link href={value}>Amazon Link</Link>
                              ) : (
                                ""
                              )
                            ) : (
                              value
                            )}
                          </TableCell>
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
