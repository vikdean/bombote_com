"use client";
import type { Series } from "@/utils/Series_csvParser";
import Link from "next/link";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface SeriesTableProps {
  series: Series[];
}

export default function SeriesTable({ series }: SeriesTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 50;

  const filteredSeries = series.filter((show) => Object.values(show).some((value) => value.toLowerCase().includes(searchTerm.toLowerCase())));

  const totalPages = Math.ceil(filteredSeries.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedSeries = filteredSeries.slice(startIndex, endIndex);

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
    <div className="space-y-4 w-full">
      <div className="flex justify-between items-center">
        <Input placeholder="Search for TV series..." value={searchTerm} onChange={handleSearchChange} className="max-w-sm text-foreground border-gray-600" />
        <div className="text-sm text-gray-400">
          Showing {startIndex + 1}-{Math.min(endIndex, filteredSeries.length)} of {filteredSeries.length} series
        </div>
      </div>
      <div className="overflow-x-auto bg-muted-foreground/10 rounded-xl">
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              {Object.keys(series[0]).map((key) => (
                <TableHead className="px-4 font-bold text-white bg-orange-900 whitespace-nowrap text-xs md:text-sm" key={key}>
                  {key}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody className="text-foreground">
            {paginatedSeries.map((show, index) => (
              <TableRow key={index}>
                {Object.entries(show).map(([key, value]) => (
                  <TableCell className={`px-4 text-xs md:text-sm`} key={key}>
                    {key === "URL" ? (
                      <Link href={value} className="text-orange-400 hover:text-orange-200" target="_blank" rel="noopener noreferrer">
                        IMDb
                      </Link>
                    ) : key === "Rating" ? (
                      <Badge
                        className={`rounded-md py-1 text-foreground min-w-[56px] ${
                          parseInt(value) >= 9
                            ? "bg-green-700 hover:bg-green-500"
                            : parseInt(value) >= 8
                            ? "bg-blue-700 hover:bg-blue-500"
                            : parseInt(value) >= 7
                            ? "bg-purple-700 hover:bg-purple-500"
                            : parseInt(value) >= 6
                            ? "bg-orange-800 hover:bg-orange-600"
                            : parseInt(value) >= 4
                            ? "bg-neutral-600 hover:bg-neutral-400"
                            : "bg-gray-900 hover:bg-gray-500"
                        }`}
                      >
                        {value}/10
                      </Badge>
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
                  className={currentPage === pageNumber ? "bg-orange-600 text-white" : "text-foreground border-gray-600"}
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
