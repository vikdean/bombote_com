"use client";
import type { Series } from "@/utils/Series_csvParser";
import Link from "next/link";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface SeriesTableProps {
  series: Series[];
}

export default function SeriesTable({ series }: SeriesTableProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSeries = series.filter((show) => Object.values(show).some((value) => value.toLowerCase().includes(searchTerm.toLowerCase())));

  return (
    <div className="space-y-4 w-full">
      <Input placeholder="Search for TV series..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="max-w-sm text-foreground border-gray-600" />
      <div className="overflow-x-auto bg-muted-foreground/10 rounded-xl">
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              {Object.keys(series[0]).map((key) => (
                <TableHead className="px-4 font-bold text-white bg-emerald-900 whitespace-nowrap text-xs md:text-sm" key={key}>
                  {key}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody className="text-foreground">
            {filteredSeries.map((show, index) => (
              <TableRow key={index}>
                {Object.entries(show).map(([key, value]) => (
                  <TableCell className={`px-4 text-xs md:text-sm`} key={key}>
                    {key === "URL" ? (
                      <Link href={value} className="text-emerald-400 hover:text-emerald-200" target="_blank" rel="noopener noreferrer">
                        IMDb
                      </Link>
                    ) : key === "Your Rating" ? (
                      <Badge
                        className={`rounded-md py-1 text-foreground min-w-[59px] ${
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
    </div>
  );
}
