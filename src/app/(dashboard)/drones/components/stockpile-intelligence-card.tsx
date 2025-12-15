'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import type { ChartConfig } from "@/components/ui/chart";

const chartData = [
  { name: 'Stockpile A', plan: 4500, measured: 4450 },
  { name: 'Stockpile B', plan: 3000, measured: 3080 },
  { name: 'Stockpile C', plan: 6200, measured: 6100 },
];

const chartConfig = {
  plan: { label: 'Plan (ERP)', color: 'hsl(var(--chart-2))' },
  measured: { label: 'Measured (Drone)', color: 'hsl(var(--primary))' },
} satisfies ChartConfig;

export function StockpileIntelligenceCard() {
    return (
        <Card className="card-hover">
            <CardHeader>
                <CardTitle>Stockpile Intelligence</CardTitle>
                <CardDescription>Measured vs. planned volume with variance.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex justify-around text-center">
                    <div>
                        <p className="text-sm text-muted-foreground">Total Variance</p>
                        <p className="text-2xl font-bold font-headline text-primary">-0.5%</p>
                    </div>
                     <div>
                        <p className="text-sm text-muted-foreground">Largest Discrepancy</p>
                        <p className="text-2xl font-bold font-headline">Stockpile B (+2.7%)</p>
                    </div>
                </div>
                <div className="h-48 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chartData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                            <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value / 1000}k`} />
                            <Tooltip cursor={{ fill: 'hsl(var(--secondary))' }} contentStyle={{backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))'}}/>
                            <Legend wrapperStyle={{fontSize: "12px"}}/>
                            <Bar dataKey="plan" fill="var(--color-plan)" radius={[4, 4, 0, 0]} />
                            <Bar dataKey="measured" fill="var(--color-measured)" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}
