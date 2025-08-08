"use client";

import * as React from "react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

type Props = {
  ratings: number[];
  color?: string;
  label?: string;
};

function buildRatingDistribution(ratings: number[]) {
  const counts = new Array(10).fill(0);
  ratings.forEach((r) => {
    if (typeof r !== "number" || Number.isNaN(r)) return;
    const rounded = Math.round(r);
    const clamped = Math.min(10, Math.max(1, rounded));
    counts[clamped - 1]++;
  });

  return counts.map((count, idx) => ({
    rating: String(idx + 1),
    count,
  }));
}

const chartConfig: ChartConfig = {
  count: {
    label: "Count",
    color: "var(--chart-1)",
  },
};

export default function RatingsRadarDistribution({ ratings, color, label }: Props) {
  const chartData = React.useMemo(() => buildRatingDistribution(ratings), [ratings]);

  return (
    <Card className="shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 w-full">
      <CardHeader className="pb-4 text-base md:text-xl">
        <CardTitle>Ratings distribution</CardTitle>
        <CardDescription>{label ?? "Distribution of ratings (1-10)"}</CardDescription>
      </CardHeader>

      <CardContent className="pb-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[200px]">
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="rating" />
            <PolarGrid stroke="#ddd" strokeOpacity={0.3} strokeWidth={1} />
            <Radar
              dataKey="count"
              fill={color ?? "var(--color-count)"}
              fillOpacity={0.5}
              dot={{
                r: 4,
                fillOpacity: 1,
              }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
