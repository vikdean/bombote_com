import { parseCSV, type Movie, getLastModifiedDate } from "@/utils/Movies_csvParser";
import MoviesTable from "@/components/MoviesTable";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleAlert } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";

export const metadata = {
  title: "Movie Reviews & Ratings Database",
  description:
    "Comprehensive database of personal movie reviews and ratings. Browse through detailed movie ratings, discover film recommendations, and explore honest opinions on cinema classics and latest releases.",
  keywords: ["movie ratings", "film reviews", "cinema database", "movie recommendations", "unbiased movie ratings", "personal film reviews", "movie analysis", "film ratings database"],
  openGraph: {
    title: "Movie Reviews & Ratings Database | Bombote.com",
    description: "Comprehensive database of personal movie reviews and ratings. Browse detailed movie ratings and discover film recommendations.",
    url: "https://bombote.com/movies",
    type: "website",
    images: [
      {
        url: "/icons8-movie-50.png",
        width: 50,
        height: 50,
        alt: "Movie Reviews Database",
      },
    ],
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
      <div className="bg-secondary" aria-label="Movie Reviews Database">
        <div className="max-w-[1920px] mx-auto pt-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Movie Ratings</h1>
        </div>
        <div className="max-w-[1920px] mx-auto pb-6 sm:px-6 lg:px-8">
          <div className="px-4 py-2 sm:px-0">
            <div className="grid grid-cols-1 md:grid-cols-[230px_230px_1fr] gap-4 my-4">
              <Card className="shadow-2xl bg-muted-foreground/20 border hover:border-blue-500 w-full">
                <CardHeader>
                  <CardTitle className="pb-4 text-sm md:text-base">Movies rated</CardTitle>
                  <CardDescription className="text-2xl md:text-3xl font-bold text-blue-400">{movies.filter((movie) => movie["Title Type"] === "Movie").length}</CardDescription>
                </CardHeader>
              </Card>

              <Card className="shadow-2xl bg-muted-foreground/20 border hover:border-blue-500 w-full">
                <CardHeader>
                  <CardTitle className="pb-4 text-sm md:text-base">Last update</CardTitle>
                  <CardDescription className="text-lg md:text-xl font-bold text-blue-400">{getLastModifiedDate()}</CardDescription>
                </CardHeader>
              </Card>

              <Card className="shadow-2xl bg-muted-foreground/20 border hover:border-blue-500 w-full">
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
    </>
  );
}
