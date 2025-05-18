import { parseCSV, type Fragrance, getLastModifiedDate } from "@/utils/csvParser";
import FragranceTable from "@/components/FragranceTable";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleAlert } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";

export const metadata = {
  title: "Bombote - Perfume Reviews & Ratings Database",
  description: "A comprehensive, ever-growing database of perfume reviews and ratings, featuring in-depth fragrance analysis, scent breakdowns, longevity and silage insights, and recommendations. Updated regularly to reflect the latest releases and timeless classics, helping fragrance enthusiasts discover their perfect scent.",
};

export default function Home() {
  const fragrances: Fragrance[] = parseCSV();

  return (
    <div className="bg-secondary" aria-label="Fragrance Reviews Database">
      <div className="max-w-[1920px] mx-auto pt-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Perfume Ratings & Reviews</h1>
      </div>
      <div className="max-w-[1920px] mx-auto pb-6 sm:px-6 lg:px-8">
        <div className="px-4 py-2 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-[230px_230px_1fr] gap-4 my-4">
            <Card className="shadow-2xl bg-muted-foreground/20 border hover:border-emerald-500 w-full">
              <CardHeader>
                <CardTitle className="pb-4 text-sm md:text-base">Fragrances reviewed</CardTitle>
                <CardDescription className="text-2xl md:text-3xl font-bold text-emerald-400">{fragrances.length}</CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-2xl bg-muted-foreground/20 border hover:border-emerald-500 w-full">
              <CardHeader>
                <CardTitle className="pb-4 text-sm md:text-base">Last update</CardTitle>
                <CardDescription className="text-lg md:text-xl font-bold text-emerald-400">{getLastModifiedDate()}</CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-2xl bg-muted-foreground/20 border hover:border-emerald-500 w-full">
              <CardContent>
                <div className="flex items-center space-x-4 rounded-md pt-6">
                  <CircleAlert />
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
            <FragranceTable fragrances={fragrances} />
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
  );
}
