import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";

export interface Fragrance {
  Brand: string;
  Name: string;
  Type: string;
  Scent: string;
  Longevity: string;
  "Rating calc": string;
  Comments: string;
  "Link to buy": string;
}

export function getLastModifiedDate(): string {
  const filePath = path.join(process.cwd(), "fragrances.csv");
  const stats = fs.statSync(filePath);
  const lastModified = stats.mtime;
  return lastModified.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function parseCSV(): Fragrance[] {
  const filePath = path.join(process.cwd(), "fragrances.csv");
  const fileContentRaw = fs.readFileSync(filePath, "utf-8");
  // Remove BOM if present (some CSVs include a UTF-8 BOM which makes the first header key '\uFEFFBrand')
  const fileContent = fileContentRaw.replace(/^\uFEFF/, "");
  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
  });
  return records;
}
