"use client";

import { Label, PolarGrid, PolarRadiusAxis, PolarAngleAxis, RadialBar, RadialBarChart } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

interface RatingsRadialChartProps {
  averageRating: string;
  maxRating?: number;
  color: string;
  label: string;
}

export default function RatingsRadialChart({ averageRating, maxRating = 10, color, label }: RatingsRadialChartProps) {
  const rating = parseFloat(averageRating);

  const chartData = [
    {
      rating: label,
      value: (rating / maxRating) * 100,
      fill: color,
    },
  ];

  const chartConfig = {
    value: {
      label: "Rating",
    },
    rating: {
      label: label,
      color: color,
    },
  } satisfies ChartConfig;

  return (
    <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[200px]">
      <RadialBarChart data={chartData} startAngle={90} endAngle={-270} innerRadius={70} outerRadius={110}>
        <PolarGrid gridType="circle" radialLines={false} stroke="none" className="first:fill-muted last:fill-background" polarRadius={[50, 65]} />
        <PolarAngleAxis type="number" domain={[0, 100]} tick={false} axisLine={false} />
        <RadialBar dataKey="value" background />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                    <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-3xl font-bold">
                      {averageRating}
                    </tspan>
                    <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 20} className="fill-muted-foreground text-sm">
                      / {maxRating}
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </PolarRadiusAxis>
      </RadialBarChart>
    </ChartContainer>
  );
}
