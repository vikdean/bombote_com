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

  const maxAvg = chartData.length > 0 ? Math.max(...chartData.map((c) => c.average), overallAvg || 0, 10) : 10;

  if (chartData.length === 0) {
    return (
      <div className={className}>
        <div className="flex h-42 items-center justify-center text-sm text-neutral-200">No rating data to display</div>
      </div>
    );
  }

  return (
    <div className={className}>
      <ChartContainer config={chartConfig} className="h-42">
        <BarChart data={chartData} layout="vertical" margin={{ left: 6, right: 4, top: 0, bottom: -4 }}>
          <YAxis
            dataKey="key"
            type="category"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => String(chartConfig[value as keyof typeof chartConfig]?.label ?? value)}
            width={90}
            tick={{ fill: "#e5e5e5", fontSize: 11 }}
            style={{ fill: "#e5e5e5" }}
          />
          <XAxis dataKey="average" type="number" hide domain={[0, Math.ceil(maxAvg)]} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <Bar dataKey="average" radius={6}>
            <LabelList dataKey="average" formatter={(value: number) => Number(value).toFixed(1)} position="right" />
            {chartData.map((entry, idx) => (
              <Cell key={`cell-${idx}`} fill={entry.fill} style={{ fill: `var(--color-${entry.key}, ${entry.fill})` }} />
            ))}
          </Bar>
          <Line type="monotone" dataKey="overall" stroke="var(--color-overall, #10b981)" strokeWidth={2} dot={false} isAnimationActive={false} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
