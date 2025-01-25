import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const long_data = [
  {
    duration: "Under 30 minutes",
    rating: "🌗🌑🌑🌑🌑",
  },
  {
    duration: "30 minutes to 1 hour",
    rating: "🌕🌑🌑🌑🌑",
  },
  {
    duration: "1 hour",
    rating: "🌕🌗🌑🌑🌑",
  },
  {
    duration: "2 hours",
    rating: "🌕🌕🌑🌑🌑",
  },
  {
    duration: "3 hours",
    rating: "🌕🌕🌗🌑🌑",
  },
  {
    duration: "4 hours",
    rating: "🌕🌕🌕🌑🌑",
  },
  {
    duration: "5 hours",
    rating: "🌕🌕🌕🌗🌑",
  },
  {
    duration: "6 hours",
    rating: "🌕🌕🌕🌕🌑",
  },
  {
    duration: "7 hours",
    rating: "🌕🌕🌕🌕🌗",
  },
  {
    duration: "8 hours",
    rating: "🌕🌕🌕🌕🌕",
  },
];

export default function Longevity() {
  return (
    <div className="bg-secondary">
      <div className="max-w-[1920px] mx-auto pt-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-foreground pb-8">Longevity Legend</h1>
        <div className="overflow-x-auto rounded-xl w-[360px]">
          <Table>
            <TableHeader className="bg-emerald-900 whitespace-nowrap">
              <TableRow>
                <TableHead className="px-4 w-[180px] text-white font-bold">Duration</TableHead>
                <TableHead className="w-[140px] text-white font-bold">Rating</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-foreground bg-muted-foreground/10">
              {long_data.map((data) => (
                <TableRow key={data.duration}>
                  <TableCell className="px-4 font-medium">{data.duration}</TableCell>
                  <TableCell>
                    <Badge className="bg-secondary rounded-md py-1">{data.rating}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
