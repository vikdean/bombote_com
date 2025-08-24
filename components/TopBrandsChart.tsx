"use client";

import React from "react";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Line, Cell, LabelList } from "recharts";

type DataItem = {
  brand: string;
  average: number;
  overall: number;
  fill?: string;
};

interface TopBrandsChartProps {
  data: DataItem[];
  overallAvg: number;
  className?: string;
}

export default function TopBrandsChart({ data, overallAvg, className }: TopBrandsChartProps) {
  const palette = ["#a7f3d0", "#6ee7b7", "#34d399", "#10b981", "#059669"];

  const chartData = data.map((d, i) => ({
    key: `brand-${i}`,
    brand: d.brand,
    average: typeof d.average === "number" ? d.average : Number(d.average) || 0,
    overall: typeof d.overall === "number" ? d.overall : Number(d.overall) || 0,
    fill: d.fill ?? palette[i % palette.length],
  }));

  const chartConfig: ChartConfig = {
    average: { label: "Average" },
    ...Object.fromEntries(
      chartData.map((item) => [
        item.key,
        {
          label: item.brand,
          color: item.fill,
        },
      ])
    ),
  } as unknown as ChartConfig;

  // Use the actual maximum average from the data (and overallAvg) so bars fill available width more tightly.
  const maxAvg = chartData.length > 0 ? Math.max(...chartData.map((c) => c.average), overallAvg || 0) : 10;

  if (chartData.length === 0) {
    return (
      <div className={className}>
        <div className="flex items-center justify-center text-sm text-neutral-200">No rating data to display</div>
      </div>
    );
  }
 
  return (
    <div className={className ?? ""}>
      {/* Constrain the chart wrapper height and let the chart scale to fit.
          ChartContainer receives h-full so ResponsiveContainer (100% height) uses this space. */}
      <div className="h-44 md:h-52 max-h-52">
        <ChartContainer config={chartConfig} className="h-full">
          <BarChart data={chartData} layout="vertical" margin={{ left: 0, right: 20, top: -4, bottom: -4 }} barCategoryGap="10%">
          <YAxis
            dataKey="key"
            type="category"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => String(chartConfig[value as keyof typeof chartConfig]?.label ?? value)}
            width={100}
            tick={{ fill: "#e5e5e5", fontSize: 12 }}
            style={{ fill: "#e5e5e5" }}
          />
          <XAxis dataKey="average" type="number" hide domain={[0, maxAvg]} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <Bar dataKey="average" radius={8}>
            <LabelList dataKey="average" formatter={(value: number) => Number(value).toFixed(1)} position="right" />
            {chartData.map((entry, idx) => (
              <Cell key={`cell-${idx}`} fill={entry.fill} style={{ fill: `var(--color-${entry.key}, ${entry.fill})` }} />
            ))}
          </Bar>
          <Line type="monotone" dataKey="overall" stroke="var(--color-overall, #10b981)" strokeWidth={1} dot={false} isAnimationActive={false} />
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
}
