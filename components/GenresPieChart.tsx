"use client";

import * as React from "react";
import { Label, Pie, PieChart, Sector, Cell } from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartStyle, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

export const description = "A pie chart showing genre distribution";

interface GenreData {
  genre: string;
  count: number;
  fill: string;
}

interface GenresPieChartProps {
  data: GenreData[];
}

const chartConfig = {
  count: {
    label: "Count",
  },
} satisfies ChartConfig;

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-_]/g, "");

export function GenresPieChart({ data }: GenresPieChartProps) {
  const id = "genres-pie-chart";
  const [activeIndex, setActiveIndex] = React.useState(0);

  // Process incoming data to include a safe key for config & nameKey
  const processedData = React.useMemo(() => {
    if (!data || data.length === 0) return [];
    return data.map((item) => {
      const key = slugify(item.genre || "unknown");

      // If the incoming fill is a theme token like "var(--chart-1)" convert it
      // into an HSL functional color string "hsl(var(--chart-1))" so SVG `fill`
      // attributes render correctly. Otherwise use the provided color as-is.
      const computedFill = typeof item.fill === "string" && item.fill.startsWith("var(--chart-") ? `hsl(${item.fill})` : item.fill;

      return {
        ...item,
        key,
        chartToken: item.fill,
        // Use the computed concrete fill for Recharts <Cell fill={...} />
        fill: computedFill,
      };
    });
  }, [data]);

  // Build config using the sanitized keys so ChartStyle can emit valid CSS variables
  const genreChartConfig = React.useMemo(() => {
    const config: ChartConfig = { ...chartConfig };
    processedData.forEach((item) => {
      // Use the original chart token (chartToken) so ChartStyle can create the
      // --color-<key> CSS custom property from the theme token (e.g. var(--chart-1)).
      config[item.key] = {
        label: item.genre,
        color: item.chartToken,
      };
    });
    return config;
  }, [processedData]);

  const activeGenre = processedData[activeIndex] || processedData[0];

  // Keep a ref to the chart container so we can strip native SVG <title> elements
  // that browsers show as native tooltips. These titles are inserted by Recharts
  // for accessibility but they cause the numeric tooltip to appear on hover even
  // when the React tooltip is disabled. We remove them and observe mutations so
  // they don't reappear on interactions.
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Remove any existing <title> elements under the SVGs
    el.querySelectorAll("svg title").forEach((t) => t.remove());

    // Observe future mutations (Recharts may re-add titles on interaction)
    const observer = new MutationObserver(() => {
      el.querySelectorAll("svg title").forEach((t) => t.remove());
    });
    observer.observe(el, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  // Early return for empty data (after all hooks)
  if (!data || data.length === 0) {
    return (
      <Card className="shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 w-full">
        <CardHeader>
          <CardTitle>Genres Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <p>No genre data available to display.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card data-chart={id} className="flex flex-col shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 w-full">
      <CardHeader className="flex-row items-start space-y-0 pb-0">
        <div className="grid gap-1">
          <CardTitle className="text-base md:text-xl">Genres Distribution</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 justify-center pb-0">
        <ChartContainer ref={containerRef} id={id} config={genreChartConfig} className="mx-auto aspect-square w-full max-w-[300px]">
          <PieChart>
            <Pie
              data={processedData}
              dataKey="count"
              nameKey="key"
              innerRadius={60}
              strokeWidth={5}
              activeIndex={activeIndex}
              onMouseEnter={(_, index) => {
                if (typeof index === "number") {
                  setActiveIndex(index);
                }
              }}
              activeShape={({ outerRadius = 0, ...props }: PieSectorDataItem) => (
                <g>
                  <Sector {...props} outerRadius={outerRadius + 10} />
                  <Sector {...props} outerRadius={outerRadius + 25} innerRadius={outerRadius + 12} />
                </g>
              )}
            >
              {processedData.map((entry, i) => (
                <Cell key={`cell-${entry.key}-${i}`} fill={entry.fill} />
              ))}
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox && activeGenre) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                        <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-3xl font-bold">
                          {activeGenre.count.toLocaleString()}
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-muted-foreground">
                          {activeGenre.genre}
                        </tspan>
                      </text>
                    );
                  }
                  return null;
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
