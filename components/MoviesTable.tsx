"use client";
import type { Movie } from "@/utils/Movies_csvParser";
import Link from "next/link";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface MoviesTableProps {
  movies: Movie[];
}

export default function MoviesTable({ movies }: MoviesTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 50;

  const filteredMovies = movies
    .filter((movie) => movie["Title Type"] === "Movie")
    .filter(
      (movie) =>
        movie.Title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie["Your Rating"].toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.Year.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => new Date(b["Date Rated"]).getTime() - new Date(a["Date Rated"]).getTime());

  const totalPages = Math.ceil(filteredMovies.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedMovies = filteredMovies.slice(startIndex, endIndex);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="space-y-4 pt-4">
      <div className="flex justify-between items-center">
        <Input placeholder="Search for movies..." value={searchTerm} onChange={handleSearchChange} className="max-w-sm text-foreground border-gray-600" />
        <div className="text-sm text-gray-400">
          Showing {startIndex + 1}-{Math.min(endIndex, filteredMovies.length)} of {filteredMovies.length} movies
        </div>
      </div>
      <div className="overflow-x-auto bg-gray-500/20 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl shadow-black/50">
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="px-4 font-bold text-white bg-blue-900 whitespace-nowrap text-xs md:text-sm">Title</TableHead>
              <TableHead className="px-4 font-bold text-white bg-blue-900 whitespace-nowrap text-xs md:text-sm">Year</TableHead>
              <TableHead className="px-4 font-bold text-white bg-blue-900 whitespace-nowrap text-xs md:text-sm text-center">Rating</TableHead>
              <TableHead className="px-4 font-bold text-white bg-blue-900 whitespace-nowrap text-xs md:text-sm">URL</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-foreground">
            {paginatedMovies.map((movie, index) => (
              <TableRow key={index}>
                <TableCell className="px-4 text-xs md:text-sm">{movie.Title}</TableCell>
                <TableCell className="px-4 text-xs md:text-sm">{movie.Year}</TableCell>
                <TableCell className="px-4 text-xs md:text-sm text-center">
                  <Badge
                    className={`rounded-md py-1 text-foreground min-w-[56px] text-center justify-center items-center ${
                      movie["Your Rating"] === "10"
                        ? "bg-green-700 hover:bg-green-500"
                        : movie["Your Rating"] === "9"
                        ? "bg-blue-700 hover:bg-blue-500"
                        : movie["Your Rating"] === "8"
                        ? "bg-purple-700 hover:bg-purple-500"
                        : movie["Your Rating"] === "7" || movie["Your Rating"] === "6"
                        ? "bg-orange-800 hover:bg-orange-600"
                        : movie["Your Rating"] === "5" || movie["Your Rating"] === "4"
                        ? "bg-neutral-600 hover:bg-neutral-400"
                        : movie["Your Rating"] === "3" || movie["Your Rating"] === "2" || movie["Your Rating"] === "1"
                        ? "bg-gray-900 hover:bg-gray-500"
                        : ""
                    }`}
                  >
                    {movie["Your Rating"]}/10
                  </Badge>
                </TableCell>
                <TableCell className="px-4 text-xs md:text-sm">
                  <Link href={movie.URL} className="text-blue-300 hover:text-blue-100" target="_blank" rel="noopener noreferrer">
                    IMDb
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2 mt-4">
          <Button variant="outline" size="sm" onClick={goToPreviousPage} disabled={currentPage === 1} className="text-foreground border-gray-600">
            Previous
          </Button>

          <div className="flex space-x-1">
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageNumber;
              if (totalPages <= 5) {
                pageNumber = i + 1;
              } else if (currentPage <= 3) {
                pageNumber = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNumber = totalPages - 4 + i;
              } else {
                pageNumber = currentPage - 2 + i;
              }

              return (
                <Button
                  key={pageNumber}
                  variant={currentPage === pageNumber ? "default" : "outline"}
                  size="sm"
                  onClick={() => goToPage(pageNumber)}
                  className={currentPage === pageNumber ? "bg-blue-600 text-white" : "text-foreground border-gray-600"}
                >
                  {pageNumber}
                </Button>
              );
            })}
          </div>

          <Button variant="outline" size="sm" onClick={goToNextPage} disabled={currentPage === totalPages} className="text-foreground border-gray-600">
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
