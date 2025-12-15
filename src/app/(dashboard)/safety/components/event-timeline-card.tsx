
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from "recharts";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { ChartConfig } from "@/components/ui/chart"

const chartData = [
  { date: "Mon", nearMiss: 4, intervention: 2, fatigue: 8 },
  { date: "Tue", nearMiss: 3, intervention: 1, fatigue: 5 },
  { date: "Wed", nearMiss: 5, intervention: 3, fatigue: 9 },
  { date: "Thu", nearMiss: 2, intervention: 1, fatigue: 4 },
  { date: "Fri", nearMiss: 6, intervention: 4, fatigue: 11 },
  { date: "Sat", nearMiss: 4, intervention: 2, fatigue: 7 },
  { date: "Sun", nearMiss: 3, intervention: 1, fatigue: 6 },
];

const chartConfig = {
  nearMiss: {
    label: "Near-Miss",
    color: "hsl(var(--chart-1))",
  },
  intervention: {
    label: "CPS Intervention",
    color: "hsl(var(--chart-2))",
  },
  fatigue: {
    label: "Fatigue/Distraction",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function EventTimelineCard() {
  return (
    <Card className="card-hover">
      <CardHeader>
         <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
                <CardTitle>Event Timeline (Last 7 Days)</CardTitle>
                <CardDescription>Daily breakdown of safety events.</CardDescription>
            </div>
            <div className="flex gap-2">
                <Select defaultValue="all-sites">
                    <SelectTrigger className="w-[130px]"><SelectValue placeholder="Select Site" /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all-sites">All Sites</SelectItem>
                        <SelectItem value="site-a">Site A</SelectItem>
                    </SelectContent>
                </Select>
                 <Select defaultValue="all-classes">
                    <SelectTrigger className="w-[150px]"><SelectValue placeholder="Machine Class" /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all-classes">All Classes</SelectItem>
                        <SelectItem value="haul-truck">Haul Truck</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-64 w-full">
          <ChartContainer config={chartConfig}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border) / 0.5)" />
                <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                <ChartTooltip
                  cursor={{ fill: 'hsl(var(--secondary))' }}
                  content={<ChartTooltipContent />}
                />
                <Legend iconSize={10} wrapperStyle={{fontSize: "12px"}}/>
                <Bar dataKey="nearMiss" stackId="a" fill="var(--color-nearMiss)" name="Near-Miss" radius={[0, 0, 0, 0]} />
                <Bar dataKey="intervention" stackId="a" fill="var(--color-intervention)" name="CPS Intervention" radius={[0, 0, 0, 0]} />
                <Bar dataKey="fatigue" stackId="a" fill="var(--color-fatigue)" name="Fatigue" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}
