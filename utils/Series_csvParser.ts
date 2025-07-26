import fs from "fs"
import path from "path"
import { parse } from "csv-parse/sync"

export interface Series {
  Title: string
  Year: string
  "Your Rating": string
  URL: string
}

export function getLastModifiedDate(): string {
  const filePath = path.join(process.cwd(), "imdb.csv")
  const stats = fs.statSync(filePath)
  const lastModified = stats.mtime
  return lastModified.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}

export function parseCSV(): Series[] {
  const filePath = path.join(process.cwd(), "imdb.csv")
  const fileContent = fs.readFileSync(filePath, "utf-8")
  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
  })
  
  // Filter for TV Series and TV Mini Series, then map to only the fields we need
  return records
    .filter((record: any) => 
      record["Title Type"] === "TV Series" || record["Title Type"] === "TV Mini Series"
    )
    .map((record: any) => ({
      Title: record.Title,
      Year: record.Year,
      "Your Rating": record["Your Rating"],
      URL: record.URL
    }))
}
