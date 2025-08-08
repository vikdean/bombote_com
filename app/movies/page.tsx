import { parseCSV, type Movie, getLastModifiedDate } from "@/utils/Movies_csvParser";
import MoviesTable from "@/components/MoviesTable";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import RatingsRadialChart from "@/components/RatingsRadialChart";
import RatingsRadarDistribution from "@/components/RatingsRadarDistribution";

export const metadata = {
  title: "Movie Reviews & Ratings Database",
  description: "Comprehensive database of unbiased personal movie reviews and ratings.",
  keywords: ["movie ratings", "film reviews", "cinema database", "movie recommendations", "unbiased movie ratings", "personal film reviews", "movie analysis", "film ratings database"],
  openGraph: {
    title: "Movie Reviews & Ratings Database | Bombote.com",
    description: "Comprehensive database of unbiased personal movie reviews and ratings.",
    url: "https://bombote.com/movies",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 220,
        height: 200,
        alt: "Bombote.com Logo",
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
  const movieRatings = movies
    .filter((movie) => movie["Title Type"] === "Movie")
    .map((movie) => parseFloat(movie["Your Rating"]))
    .filter((rating) => !isNaN(rating));
  const averageRating = movieRatings.length > 0 ? (movieRatings.reduce((sum, rating) => sum + rating, 0) / movieRatings.length).toFixed(1) : "0.0";

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
              <div className="grid grid-cols-1 md:grid-cols-[0.6fr_1fr_1fr_0.6fr] gap-4 my-4">
                <Card className="shadow-2xl bg-white/10 backdrop-blur-md border border-white/20  w-full">
                  <CardHeader>
                    <CardTitle className="pb-4 text-base md:text-xl">Movies rated</CardTitle>
                    <CardDescription className="text-2xl md:text-3xl font-bold text-blue-400">{movies.filter((movie) => movie["Title Type"] === "Movie").length}</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="shadow-2xl bg-white/10 backdrop-blur-md border border-white/20  w-full">
                  <CardHeader>
                    <CardTitle className="text-base md:text-xl">Average rating</CardTitle>
                  </CardHeader>
                  <CardContent className="-mt-2 pb-1">
                    <RatingsRadialChart averageRating={averageRating} color="#3b82f6" label="Movie Rating" />
                  </CardContent>
                </Card>

                <RatingsRadarDistribution ratings={movieRatings} color="#60a5fa" label="" />

                <Card className="shadow-2xl bg-white/10 backdrop-blur-md border border-white/20  w-full">
                  <CardHeader>
                    <CardTitle className="pb-4 text-base md:text-xl">Last update</CardTitle>
                    <CardDescription className="text-lg md:text-xl font-bold text-blue-400">{getLastModifiedDate()}</CardDescription>
                  </CardHeader>
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
