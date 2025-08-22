import { parseCSV, type Movie, getLastModifiedDate } from "@/utils/Movies_csvParser";
import MoviesTable from "@/components/MoviesTable";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import RatingsRadialChart from "@/components/RatingsRadialChart";
import RatingsRadarDistribution from "@/components/RatingsRadarDistribution";
import { GenresPieChart } from "@/components/GenresPieChart";

export const metadata = {
  title: "Movie Reviews & Ratings Database",
  description:
    "Comprehensive database of unbiased personal movie reviews and ratings. Discover honest film critiques, detailed movie analysis, and authentic ratings covering classics, blockbusters, and hidden cinematic gems.",
  keywords: [
    "movie ratings",
    "film reviews",
    "cinema database",
    "movie recommendations",
    "unbiased movie ratings",
    "personal film reviews",
    "movie analysis",
    "film ratings database",
    "best movies",
    "top films",
    "cinema reviews",
    "movie opinions",
    "film critiques",
    "movie database",
    "honest movie reviews",
    "independent film reviews",
    "blockbuster reviews",
    "classic movies",
    "movie guide",
  ],
  authors: [{ name: "VA" }],
  creator: "VA",
  publisher: "Bombote.com",
  category: "Entertainment",
  classification: "Reviews & Ratings",
  openGraph: {
    title: "Movie Reviews & Ratings Database | Bombote.com",
    description: "Comprehensive database of unbiased personal movie reviews and ratings. Discover honest film critiques and authentic ratings covering classics and modern cinema.",
    url: "https://bombote.com/movies",
    type: "website",
    locale: "en_US",
    siteName: "Bombote.com",
    images: [
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
    title: "Movie Reviews & Ratings Database | Bombote.com",
    description: "Comprehensive database of unbiased personal movie reviews and ratings with honest film critiques and authentic ratings.",
    images: [
      {
        url: "/logo.png",
        width: 220,
        height: 200,
        alt: "Bombote.com Logo",
      },
    ],
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
    canonical: "https://bombote.com/movies",
  },
  other: {
    "revisit-after": "7 days",
    rating: "general",
    distribution: "global",
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

  const genreData = movies
    .flatMap((movie) => movie.Genres.split(", "))
    .reduce((acc, genre) => {
      if (genre) {
        acc[genre] = (acc[genre] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);

  const genreChartData = Object.entries(genreData)
    .map(([genre, count], index) => ({
      genre,
      count,
      fill: `var(--chart-${(index % 5) + 1})`,
    }))
    .sort((a, b) => b.count - a.count);

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
              <div className="grid grid-cols-1 md:grid-cols-[0.65fr_0.9fr_1fr_1fr_0.65fr] gap-4 my-4">
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

                <GenresPieChart data={genreChartData} />

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
