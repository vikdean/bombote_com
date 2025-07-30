import { parseCSV, type Movie, getLastModifiedDate } from "@/utils/Movies_csvParser";
import MoviesTable from "@/components/MoviesTable";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleAlert } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";

export const metadata = {
  title: "Movie Reviews & Ratings Database",
  description: "Comprehensive database of unbiased personal movie reviews and ratings.",
  keywords: ["movie ratings", "film reviews", "cinema database", "movie recommendations", "unbiased movie ratings", "personal film reviews", "movie analysis", "film ratings database"],
  openGraph: {
    title: "Movie Reviews & Ratings Database | Bombote.com",
    description: "Comprehensive database of unbiased personal movie reviews and ratings.",
    url: "https://bombote.com/movies",
    type: "website",
  },
  alternates: {
    canonical: "https://bombote.com/movies",
  },
};

export default function Home() {
  const movies: Movie[] = parseCSV();
  const movieCount = movies.filter((movie) => movie["Title Type"] === "Movie").length;

  return (
    <>
      <StructuredData type="movies" data={{ count: movieCount }} />

      <div className="relative" aria-label="Movie Reviews Database">
        <div className="w-[95%] max-w-7xl mx-auto pt-12">
          <div className="px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-300 via-blue-500 to-blue-800 bg-clip-text tracking-tight text-transparent font-sans">
              Movie Ratings & Reviews
            </h1>
          </div>
        </div>
        <div className="w-[95%] max-w-7xl mx-auto pb-6">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="py-2">
              <div className="grid grid-cols-1 md:grid-cols-[230px_230px_1fr] gap-4 my-4">
                <Card className="shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-blue-500 w-full">
                  <CardHeader>
                    <CardTitle className="pb-4 text-sm md:text-base">Movies rated</CardTitle>
                    <CardDescription className="text-2xl md:text-3xl font-bold text-blue-400">{movies.filter((movie) => movie["Title Type"] === "Movie").length}</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-blue-500 w-full">
                  <CardHeader>
                    <CardTitle className="pb-4 text-sm md:text-base">Last update</CardTitle>
                    <CardDescription className="text-lg md:text-xl font-bold text-blue-400">{getLastModifiedDate()}</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-blue-500 w-full">
                  <CardContent>
                    <div className="flex items-center space-x-4 rounded-md pt-6">
                      <CircleAlert className="text-blue-400" />
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
                <MoviesTable movies={movies} />
              </div>

              {/* Server-rendered table for SEO*/}
              <div className="sr-only">
                <h2>Movie Database</h2>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Year</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead>URL</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {movies
                      .filter((movie) => movie["Title Type"] === "Movie")
                      .sort((a, b) => new Date(b["Date Rated"]).getTime() - new Date(a["Date Rated"]).getTime())
                      .map((movie, index) => (
                        <TableRow key={index}>
                          <TableCell>{movie.Title}</TableCell>
                          <TableCell>{movie.Year}</TableCell>
                          <TableCell>{movie["Your Rating"]}</TableCell>
                          <TableCell>
                            <Link href={movie.URL}>IMDb Link</Link>
                          </TableCell>
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
