import { parseCSV, type Fragrance, getLastModifiedDate } from "@/utils/Perfume_csvParser";
import PerfumeTable from "@/components/PerfumeTable";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleAlert } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";

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
              <div className="grid grid-cols-1 md:grid-cols-[230px_230px_1fr] gap-4 my-4">
                <Card className="shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-emerald-500 w-full">
                  <CardHeader>
                    <CardTitle className="pb-4 text-sm md:text-base">Fragrances reviewed</CardTitle>
                    <CardDescription className="text-2xl md:text-3xl font-bold text-emerald-400">{fragrances.length}</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-emerald-500 w-full">
                  <CardHeader>
                    <CardTitle className="pb-4 text-sm md:text-base">Last update</CardTitle>
                    <CardDescription className="text-lg md:text-xl font-bold text-emerald-400">{getLastModifiedDate()}</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-emerald-500 w-full">
                  <CardContent>
                    <div className="flex items-center space-x-4 rounded-md pt-6">
                      <CircleAlert className="text-emerald-400" />
                      <div className="flex-1 space-y-1">
                        <CardTitle className="text-xs md:text-sm font-bold leading-none text-foreground">Note</CardTitle>
                        <p className="text-xs md:text-sm text-gray-300">
                          Please keep in mind, the ratings on this page are strictly based on my own taste and preferences. Most of these were tested with genuine 2ml sample tubes.
                        </p>
                      </div>
                    </div>
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
                    <TableRow>
                      {Object.keys(fragrances[0]).map((key) => (
                        <TableHead key={key}>{key}</TableHead>
                      ))}
                    </TableRow>
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
