
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight, Minus } from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Area, AreaChart } from "recharts";
import type { ChartConfig } from "@/components/ui/chart";
import { cn } from "@/lib/utils";

const chartData = [
  { time: "00:00", value: 45 },
  { time: "01:00", value: 50 },
  { time: "02:00", value: 42 },
  { time: "03:00", value: 55 },
  { time: "04:00", value: 48 },
  { time: "05:00", value: 60 },
  { time: "06:00", value: 52 },
  { time: "07:00", value: 58 },
  { time: "08:00", value: 55 },
];

const chartConfig = {
  value: {
    label: "Value",
    color: "hsl(var(--accent))",
  },
} satisfies ChartConfig;

type KPITileProps = {
  title: string;
  value: string;
  unit: string;
  trend: "up" | "down" | "flat";
  trendValue: string;
  timeToFailure?: string;
};

export function KPITile({ title, value, unit, trend, trendValue, timeToFailure }: KPITileProps) {
  const TrendIcon = trend === "up" ? ArrowUpRight : trend === "down" ? ArrowDownRight : Minus;
  const trendColor = trend === "up" ? "text-primary" : trend === "down" ? "text-destructive" : "text-muted-foreground";

  return (
    <Card className="card-hover flex flex-col">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-baseline gap-2">
            <span className={`text-4xl font-bold font-headline`}>{value}</span>
            <span className="text-muted-foreground">{unit}</span>
          </div>
          <div className={cn("flex items-center gap-1 text-sm", trendColor)}>
            <TrendIcon className="size-4" />
            <span>{trendValue}</span>
          </div>
        </div>
        <div className="h-20 w-full mt-4">
          <ChartContainer config={chartConfig} className="h-full w-full">
            <AreaChart
              data={chartData}
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="fillValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <Area
                dataKey="value"
                type="monotone"
                stroke="hsl(var(--accent))"
                strokeWidth={2}
                fill="url(#fillValue)"
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideIndicator />}
              />
            </AreaChart>
          </ChartContainer>
        </div>
        {timeToFailure && (
          <div className="mt-2 pt-2 border-t border-border/50 text-xs">
            <p className="font-semibold text-primary">PREDICTIVE</p>
            <p className="text-muted-foreground">
              Est. Time to Failure: <span className="font-bold text-foreground">{timeToFailure}</span>
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
