import fs from "fs"
import path from "path"
import { parse } from "csv-parse/sync"

export interface Movie {
  Const: string
  "Your Rating": string
  "Date Rated": string
  Title: string
  "Original Title": string
  URL: string
  "Title Type": string
  "IMDb Rating": string
  "Runtime (mins)": string
  Year: string
  Genres: string
  "Num Votes": string
  "Release Date": string
  Directors: string
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

export function parseCSV(): Movie[] {
  const filePath = path.join(process.cwd(), "imdb.csv")
  const fileContent = fs.readFileSync(filePath, "utf-8")
  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
  }) as Movie[]
  return records
}
