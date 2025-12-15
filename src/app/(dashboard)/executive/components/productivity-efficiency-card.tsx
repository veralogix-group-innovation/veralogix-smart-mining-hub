'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Separator } from "@/components/ui/separator";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const productionData = [
  { date: "Day -7", plan: 15000, actual: 14200 },
  { date: "Day -6", plan: 15000, actual: 15100 },
  { date: "Day -5", plan: 15000, actual: 14800 },
  { date: "Day -4", plan: 15000, actual: 15500 },
  { date: "Day -3", plan: 15000, actual: 15200 },
  { date: "Day -2", plan: 15000, actual: 14700 },
  { date: "Day -1", plan: 15000, actual: 15900 },
];

const loadDistributionData = [
  { name: 'Underload', value: 8, color: 'hsl(var(--chart-4))' },
  { name: 'Optimal', value: 85, color: 'hsl(var(--chart-1))' },
  { name: 'Overload', value: 7, color: 'hsl(var(--chart-2))' },
];

const chartConfig: ChartConfig = {
  plan: { label: "Plan", color: "hsl(var(--muted-foreground))" },
  actual: { label: "Actual", color: "hsl(var(--chart-1))" },
};

export function ProductivityEfficiencyCard() {
    return (
        <Card className="card-hover">
            <CardHeader>
                <CardTitle>Productivity & Efficiency</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div>
                    <CardDescription>Production vs Plan (Last 7 Days)</CardDescription>
                    <div className="h-48 mt-2">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={productionData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border) / 0.5)" />
                                <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value / 1000}k`} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}
                                    labelStyle={{ color: 'hsl(var(--foreground))' }}
                                />
                                <Line type="monotone" dataKey="plan" strokeWidth={2} stroke="hsl(var(--accent))" strokeDasharray="5 5" dot={false} />
                                <Line type="monotone" dataKey="actual" strokeWidth={2} stroke="hsl(var(--primary))" dot={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <Separator />
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <CardDescription className="mb-2 text-center">Load Distribution</CardDescription>
                        <div className="h-32">
                           <ResponsiveContainer width="100%" height="100%">
                             <PieChart>
                                <Pie data={loadDistributionData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={30} outerRadius={50} paddingAngle={2}>
                                    {loadDistributionData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}/>
                             </PieChart>
                           </ResponsiveContainer>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <p className="text-sm text-muted-foreground">Fuel per Tonne</p>
                            <p className="text-2xl font-bold font-headline">0.68L</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">CO₂ per Tonne (Index)</p>
                            <p className="text-2xl font-bold font-headline">88.2</p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
