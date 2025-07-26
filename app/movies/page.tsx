import { parseCSV, type Movie, getLastModifiedDate } from "@/utils/Movies_csvParser";
import MoviesTable from "@/components/MoviesTable";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleAlert } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";

export const metadata = {
  title: "Bombote - Movie Reviews & Ratings Database",
  description: "A comprehensive, ever-growing database of my movie ratings",
};

export default function Home() {
  const movies: Movie[] = parseCSV();

  return (
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
                <CardDescription className="text-2xl md:text-3xl font-bold text-blue-400">{movies.filter(movie => movie["Title Type"] === "Movie").length}</CardDescription>
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
                    <p className="text-xs md:text-sm text-gray-300">
                      Please keep in mind, the ratings on this page are strictly based on my own taste and preferences.
                    </p>
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
                  <TableHead>Your Rating</TableHead>
                  <TableHead>URL</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {movies
                  .filter(movie => movie["Title Type"] === "Movie")
                  .sort((a, b) => new Date(b["Date Rated"]).getTime() - new Date(a["Date Rated"]).getTime())
                  .map((movie, index) => (
                  <TableRow key={index}>
                    <TableCell>{movie.Title}</TableCell>
                    <TableCell>{movie.Year}</TableCell>
                    <TableCell>{movie["Your Rating"]}</TableCell>
                    <TableCell><Link href={movie.URL}>IMDb Link</Link></TableCell>
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
