'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChartContainer } from "@/components/ui/chart";
import { Area, AreaChart } from "recharts";
import type { ChartConfig } from "@/components/ui/chart";

const chartData = [
    { hour: "08:00", cycles: 2 },
    { hour: "09:00", cycles: 3 },
    { hour: "10:00", cycles: 3 },
    { hour: "11:00", cycles: 4 },
    { hour: "12:00", cycles: 3 },
    { hour: "13:00", cycles: 4 },
    { hour: "14:00", cycles: 3 },
];

const chartConfig = {
    cycles: {
        label: "Cycles",
        color: "hsl(var(--accent))",
    },
} satisfies ChartConfig;


export function ProductionPerformanceCard() {
    return (
        <Card className="card-hover">
            <CardHeader>
                <CardTitle>Today's Production</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div>
                    <div className="flex justify-between items-baseline mb-1">
                        <p className="font-medium">Tonnage</p>
                        <p className="text-muted-foreground">
                            <span className="font-bold text-foreground">1105t</span> / 1500t
                        </p>
                    </div>
                    <Progress value={(1105 / 1500) * 100} className="h-3" />
                </div>
                <div>
                    <div className="flex justify-between items-baseline mb-1">
                        <p className="font-medium">Cycles</p>
                        <p className="text-muted-foreground">
                            <span className="font-bold text-foreground">22</span> / 30
                        </p>
                    </div>
                    <Progress value={(22 / 30) * 100} className="h-3" />
                </div>
                <div className="h-24 w-full">
                    <CardDescription>Cycles per Hour</CardDescription>
                    <ChartContainer config={chartConfig} className="h-full w-full">
                        <AreaChart
                            data={chartData}
                            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
                        >
                            <defs>
                                <linearGradient id="fillCycles" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0.1} />
                                </linearGradient>
                            </defs>
                            <Area
                                dataKey="cycles"
                                type="monotone"
                                stroke="hsl(var(--accent))"
                                strokeWidth={2}
                                fill="url(#fillCycles)"
                            />
                        </AreaChart>
                    </ChartContainer>
                </div>
            </CardContent>
        </Card>
    );
}
