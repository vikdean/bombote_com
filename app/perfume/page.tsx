import { parseCSV, type Fragrance, getLastModifiedDate } from "@/utils/Perfume_csvParser";
import PerfumeTable from "@/components/PerfumeTable";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import StructuredData from "@/components/StructuredData";
import RatingsRadialChart from "@/components/RatingsRadialChart";
import RatingsRadarDistribution from "@/components/RatingsRadarDistribution";
import TopBrandsChart from "@/components/TopBrandsChart";

declare global {
  interface Window {
    __TOP_BRANDS?: Array<any>;
    __WORST_BRANDS?: Array<any>;
    __TOP_FRAGRANCES?: Array<any>;
    __WORST_FRAGRANCES?: Array<any>;
  }
}

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
  authors: [{ name: "VA" }],
  creator: "VA",
  publisher: "Bombote.com",
  category: "Lifestyle",
  classification: "Reviews & Ratings",
  openGraph: {
    title: "Perfume Reviews & Ratings Database | Bombote.com",
    description: "Comprehensive database of perfume reviews and ratings featuring in-depth fragrance analysis and recommendations for fragrance enthusiasts.",
    url: "https://bombote.com/perfume",
    type: "website",
    locale: "en_US",
    siteName: "Bombote.com",
    images: [
      {
        url: "/icons8-perfume-bottle-100.png",
        width: 100,
        height: 100,
        alt: "Perfume Reviews Database",
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
    title: "Perfume Reviews & Ratings Database | Bombote.com",
    description: "Comprehensive database of perfume reviews and ratings featuring in-depth fragrance analysis and recommendations.",
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
    canonical: "https://bombote.com/perfume",
  },
  other: {
    "revisit-after": "7 days",
    rating: "general",
    distribution: "global",
  },
};

export default function Home() {
  const fragrances: Fragrance[] = parseCSV();
  const fragranceRatings = fragrances
    .map((fragrance) => {
      const raw = (fragrance as any)["Rating calc"] ?? (fragrance as any).Rating ?? "";
      const ratingMatch = raw.toString().match(/10\s*\/\s*(\d+(?:\.\d+)?)/);
      return ratingMatch ? parseFloat(ratingMatch[1]) : NaN;
    })
    .filter((rating) => !isNaN(rating));
  const averageRating = fragranceRatings.length > 0 ? (fragranceRatings.reduce((sum, rating) => sum + rating, 0) / fragranceRatings.length).toFixed(1) : "0.0";

  const brandAverages = (() => {
    const map = new Map<string, { sum: number; count: number }>();
    const ratingRegex = /10\s*\/\s*(\d+(?:\.\d+)?)/;
    for (const f of fragrances) {
      const brand = (f.Brand || "").toString().trim();
      if (!brand) continue;
      const raw = (f as any)["Rating calc"] ?? (f as any).Rating ?? "";
      const match = raw?.toString().match(ratingRegex);
      const rating = match ? parseFloat(match[1]) : NaN;
      if (!isNaN(rating)) {
        const prev = map.get(brand) || { sum: 0, count: 0 };
        prev.sum += rating;
        prev.count += 1;
        map.set(brand, prev);
      }
    }
    return Array.from(map.entries())
      .map(([brand, { sum, count }]) => ({ brand, average: sum / count, count }))
      .sort((a, b) => b.average - a.average);
  })();

  const topBrands = brandAverages.filter((b) => (b.count ?? 0) >= 3).slice(0, 5);
  const overallAvg = parseFloat(averageRating) || 0;
  const chartData = topBrands.map((b) => ({
    brand: b.brand,
    average: b.average,
    overall: overallAvg,
  }));

  const worstBrands = brandAverages
    .filter((b) => (b.count ?? 0) >= 3)
    .slice()
    .sort((a, b) => a.average - b.average)
    .slice(0, 5);

  const chartDataWorst = worstBrands
    .slice()
    .reverse()
    .map((b) => ({
      brand: b.brand,
      average: b.average,
      overall: overallAvg,
    }));

  const fragranceRatingRegex = /10\s*\/\s*(\d+(?:\.\d+)?)/;
  const fragrancesWithRatings = fragrances
    .map((f) => {
      const raw = (f as any)["Rating calc"] ?? (f as any).Rating ?? "";
      const match = raw.toString().match(fragranceRatingRegex);
      const rating = match ? parseFloat(match[1]) : NaN;
      return { ...f, numericRating: !isNaN(rating) ? rating : null };
    })
    .filter((f) => f.numericRating !== null) as (Fragrance & { numericRating: number })[];

  const topFragrances = fragrancesWithRatings
    .slice()
    .sort((a, b) => b.numericRating - a.numericRating)
    .slice(0, 5)
    .map((f) => ({
      brand: `${f.Brand} - ${f.Name}`,
      average: f.numericRating,
      overall: overallAvg,
    }));

  const worstFragrances = fragrancesWithRatings
    .slice()
    .sort((a, b) => a.numericRating - b.numericRating)
    .slice(0, 5)
    .reverse()
    .map((f) => ({
      brand: `${f.Brand} - ${f.Name}`,
      average: f.numericRating,
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
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[0.45fr_0.55fr_1fr_1fr] gap-3 my-4">
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

                <Card className="shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 w-full">
                  <CardHeader>
                    <CardTitle className="text-base md:text-xl">Top rated brands</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <TopBrandsChart data={chartData} overallAvg={overallAvg} />
                    <script
                      dangerouslySetInnerHTML={{
                        __html: `window.__TOP_BRANDS = ${JSON.stringify(chartData)};`,
                      }}
                    />
                  </CardContent>
                </Card>

                <Card className="shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 w-full">
                  <CardHeader>
                    <CardTitle className="text-base md:text-xl">Top rated fragrances</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <TopBrandsChart data={topFragrances} overallAvg={overallAvg} />
                    <script
                      dangerouslySetInnerHTML={{
                        __html: `window.__TOP_FRAGRANCES = ${JSON.stringify(topFragrances)};window.__WORST_FRAGRANCES = ${JSON.stringify(worstFragrances)};`,
                      }}
                    />
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[0.45fr_0.55fr_1fr_1fr] gap-3 my-4">
                <Card className="shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 w-full">
                  <CardHeader>
                    <CardTitle className="pb-4 text-base md:text-xl">Last update</CardTitle>
                    <CardDescription className="text-xl md:text-xl font-bold text-emerald-400">{getLastModifiedDate()}</CardDescription>
                  </CardHeader>
                </Card>

                <RatingsRadarDistribution ratings={fragranceRatings} color="#34d399" label="" />
                <Card className="shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 w-full">
                  <CardHeader>
                    <CardTitle className="text-base md:text-xl">Worst rated brands</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <TopBrandsChart data={chartDataWorst} overallAvg={overallAvg} />
                    <script
                      dangerouslySetInnerHTML={{
                        __html: `window.__WORST_BRANDS = ${JSON.stringify(chartDataWorst)};`,
                      }}
                    />
                  </CardContent>
                </Card>

                <Card className="shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 w-full">
                  <CardHeader>
                    <CardTitle className="text-base md:text-xl">Worst rated fragrances</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <TopBrandsChart data={worstFragrances} overallAvg={overallAvg} />
                    <script
                      dangerouslySetInnerHTML={{
                        __html: `window.__WORST_FRAGRANCES = ${JSON.stringify(worstFragrances)};`,
                      }}
                    />
                  </CardContent>
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
                    <TableRow>{fragrances.length > 0 && Object.keys(fragrances[0]).map((key) => <TableHead key={key}>{key === "Rating calc" ? "Rating" : key}</TableHead>)}</TableRow>
                  </TableHeader>
                  <TableBody>
                    {fragrances.map((fragrance, index) => (
                      <TableRow key={index}>
                        {Object.entries(fragrance).map(([key, value]) => (
                          <TableCell key={key}>{value}</TableCell>
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
