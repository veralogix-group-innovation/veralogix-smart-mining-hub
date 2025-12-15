'use client'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ChartConfig } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";

const cycleTimeChartData = [
  { name: 'Short (<30m)', value: 15, fill: 'var(--color-chart-5)' },
  { name: 'Normal (30-38m)', value: 75, fill: 'var(--color-chart-1)' },
  { name: 'Long (>38m)', value: 10, fill: 'var(--color-chart-2)' },
];

const chartConfig = {
  value: { label: 'Cycles' },
} satisfies ChartConfig;

const slowestCyclesData = [
  { truckId: 'TRK-105', loadingPoint: 'Shovel 3', duration: '42.1m', reason: 'Queue' },
  { truckId: 'TRK-211', loadingPoint: 'Shovel 1', duration: '41.5m', reason: 'Road Condition' },
  { truckId: 'TRK-119', loadingPoint: 'Shovel 3', duration: '40.8m', reason: 'Queue' },
  { truckId: 'TRK-102', loadingPoint: 'Shovel 2', duration: '39.9m', reason: 'Mechanical' },
  { truckId: 'TRK-208', loadingPoint: 'Shovel 3', duration: '39.5m', reason: 'Queue' },
];

export function CycleQueueIntelligenceCard() {
  return (
    <Card className="card-hover">
      <CardHeader>
        <CardTitle>Cycle & Queue Intelligence</CardTitle>
        <CardDescription>Analysis of haulage cycle performance.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-2">Cycle Time Bands</h4>
           <div className="h-40 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={cycleTimeChartData} layout="vertical" margin={{ left: 10, right: 10 }}>
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" width={80} tickLine={false} axisLine={false} tick={{fontSize: 12, fill: 'hsl(var(--muted-foreground))'}} />
                <Tooltip cursor={{ fill: 'hsl(var(--secondary))' }} contentStyle={{backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))'}} />
                <Bar dataKey="value" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
           </div>
        </div>
        <Separator />
         <div>
          <h4 className="text-sm font-medium mb-2">Slowest 5 Cycles this Shift</h4>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Truck</TableHead>
                <TableHead>Cycle</TableHead>
                <TableHead>Reason</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {slowestCyclesData.map((cycle, index) => (
                <TableRow key={index}>
                  <TableCell className="font-mono text-xs">{cycle.truckId}</TableCell>
                  <TableCell>{cycle.duration}</TableCell>
                  <TableCell>{cycle.reason}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
