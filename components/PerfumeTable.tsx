"use client";
import type { Fragrance } from "@/utils/Perfume_csvParser";
import Link from "next/link";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface PerfumeTableProps {
  fragrances: Fragrance[];
}

export default function PerfumeTable({ fragrances }: PerfumeTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 50;

  const filteredFragrances = fragrances.filter((fragrance) => Object.values(fragrance).some((value) => value.toLowerCase().includes(searchTerm.toLowerCase())));

  // Sort by Brand then Name (case-insensitive) before paginating
  const sortedFiltered = filteredFragrances.slice().sort((a, b) => {
    const brandA = (a.Brand || "").toString().toLowerCase().trim();
    const brandB = (b.Brand || "").toString().toLowerCase().trim();
    if (brandA < brandB) return -1;
    if (brandA > brandB) return 1;
    const nameA = (a.Name || "").toString().toLowerCase().trim();
    const nameB = (b.Name || "").toString().toLowerCase().trim();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });
  const totalPages = Math.ceil(sortedFiltered.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedFragrances = sortedFiltered.slice(startIndex, endIndex);

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
        <Input placeholder="Search for perfumes..." value={searchTerm} onChange={handleSearchChange} className="max-w-sm text-foreground border-gray-600" />
        <div className="text-sm text-gray-400">
          Showing {startIndex + 1}-{Math.min(endIndex, filteredFragrances.length)} of {filteredFragrances.length} perfumes
        </div>
      </div>
      <div className="overflow-x-auto bg-gray-500/20 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl shadow-black/50">
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              {Object.keys(fragrances[0]).map((key) => (
                <TableHead className="px-4 font-bold text-white bg-emerald-800 whitespace-nowrap text-xs md:text-sm" key={key}>
                  {key === "Rating calc" ? "Rating" : key}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody className="text-foreground">
            {paginatedFragrances.map((fragrance, index) => (
              <TableRow key={index}>
                {Object.entries(fragrance).map(([key, value]) => (
                  <TableCell
                    className={`px-4 text-xs md:text-sm ${key === "Scent" || key === "Longevity" ? "whitespace-normal min-w-[140px]" : key === "Type" ? "min-w-[140px]" : ""}`}
                    key={key}
                  >
                    {key === "Link to buy" ? (
                      typeof value === "string" && (value.includes("amazon.") || value.includes("amzn.to")) ? (
                        <Link href={value} className="text-emerald-300 hover:text-emerald-100" target="_blank" rel="noopener noreferrer">
                          Amazon
                        </Link>
                      ) : (
                        ""
                      )
                    ) : key === "Type" ? (
                      <Badge
                        className={`rounded-md py-1 text-foreground ${
                          value === "Parfum"
                            ? "bg-purple-800 hover:bg-purple-600"
                            : value === "Eau de Parfum"
                            ? "bg-orange-800 hover:bg-orange-600"
                            : value === "Elixir"
                            ? "bg-blue-700 hover:bg-blue-500"
                            : value === "Eau de Toilette"
                            ? "bg-gray-600 hover:bg-gray-400"
                            : ""
                        }`}
                      >
                        {value}
                      </Badge>
                    ) : key === "Scent" ? (
                      <Badge className="bg-secondary rounded-md py-1">{value}</Badge>
                    ) : key === "Longevity" ? (
                      <Badge className="bg-secondary rounded-md py-1">{value}</Badge>
                    ) : key === "Rating calc" ? (
                      (() => {
                        const rawStr = String(value ?? "");
                        const match = rawStr.match(/10\s*\/\s*(\d+(?:\.\d+)?)/);
                        const num = match ? parseFloat(match[1]) : NaN;
                        const displayNum = !isNaN(num) ? (Number.isInteger(num) ? num.toFixed(0) : num.toFixed(1)) : null;
                        const display = displayNum ? `10 / ${displayNum}` : rawStr;
                        const colorClass =
                          !isNaN(num) && num >= 9
                            ? "bg-green-700 hover:bg-green-500"
                            : !isNaN(num) && num >= 8
                            ? "bg-blue-700 hover:bg-blue-500"
                            : !isNaN(num) && num >= 7
                            ? "bg-purple-700 hover:bg-purple-500"
                            : !isNaN(num) && num >= 6
                            ? "bg-orange-800 hover:bg-orange-600"
                            : !isNaN(num) && num >= 4
                            ? "bg-neutral-600 hover:bg-neutral-400"
                            : "bg-gray-900 hover:bg-gray-500";
                        return <Badge className={`rounded-md py-1 text-foreground min-w-[64px] flex items-center justify-center text-center ${colorClass}`}>{display}</Badge>;
                      })()
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
                  className={currentPage === pageNumber ? "bg-emerald-600 text-white" : "text-foreground border-gray-600"}
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
