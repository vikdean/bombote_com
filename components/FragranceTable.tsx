"use client";
import type { Fragrance } from "@/utils/csvParser";
import Link from "next/link";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface FragranceTableProps {
  fragrances: Fragrance[];
}

export default function FragranceTable({ fragrances }: FragranceTableProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFragrances = fragrances.filter((fragrance) => Object.values(fragrance).some((value) => value.toLowerCase().includes(searchTerm.toLowerCase())));

  return (
    <div className="space-y-4 w-full">
      <Input placeholder="Search for perfumes..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="max-w-sm text-foreground border-gray-600" />
      <div className="overflow-x-auto bg-muted-foreground/10 rounded-xl">
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              {Object.keys(fragrances[0]).map((key) => (
                <TableHead className="px-4 font-bold text-white bg-emerald-900 whitespace-nowrap" key={key}>
                  {key}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody className="text-foreground">
            {filteredFragrances.map((fragrance, index) => (
              <TableRow key={index}>
                {Object.entries(fragrance).map(([key, value]) => (
                  <TableCell className={`px-4 ${key === "Scent" || key === "Longevity" ? "whitespace-normal min-w-[142px]" : ""}`} key={key}>
                    {key === "Link to buy" ? (
                      <Link href={value} className="text-emerald-400 hover:text-emerald-200" target="_blank" rel="noopener noreferrer">
                        Amazon
                      </Link>
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
                    ) : key === "Rating" ? (
                      <Badge
                        className={`rounded-md py-1 text-foreground min-w-[59px] ${
                          value === "10 / 10"
                            ? "bg-green-700 hover:bg-green-500"
                            : value === "10 / 9"
                            ? "bg-blue-700 hover:bg-blue-500"
                            : value === "10 / 8"
                            ? "bg-purple-700 hover:bg-purple-500"
                            : value === "10 / 7" || value === "10 / 6"
                            ? "bg-orange-800 hover:bg-orange-600"
                            : value === "10 / 5" || value === "10 / 4"
                            ? "bg-neutral-600 hover:bg-neutral-400"
                            : value === "10 / 3" || value === "10 / 2" || value === "10 / 1"
                            ? "bg-gray-900 hover:bg-gray-500"
                            : ""
                        }`}
                      >
                        {value}
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
