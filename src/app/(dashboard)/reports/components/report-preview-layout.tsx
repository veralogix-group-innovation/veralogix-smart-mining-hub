'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";

const barData = [
  { name: 'Mon', value: 400 },
  { name: 'Tue', value: 300 },
  { name: 'Wed', value: 600 },
  { name: 'Thu', value: 800 },
  { name: 'Fri', value: 700 },
];

const pieData = [
  { name: 'Group A', value: 400, color: 'hsl(var(--chart-1))' },
  { name: 'Group B', value: 300, color: 'hsl(var(--chart-2))' },
  { name: 'Group C', value: 300, color: 'hsl(var(--chart-5))' },
];

const tableData = [
    { col1: 'Data Point 1', col2: 123, col3: 'OK' },
    { col1: 'Data Point 2', col2: 456, col3: 'Warning' },
    { col1: 'Data Point 3', col2: 789, col3: 'OK' },
];

export function ReportPreviewLayout({ title }: { title: string }) {
  return (
    <Card className="bg-background/80 print:bg-white print:text-black">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription>Generated on: {new Date().toLocaleDateString()}</CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="p-6 space-y-8">
        {/* Summary KPIs */}
        <div className="grid grid-cols-3 gap-6 text-center">
          <div className="p-4 bg-secondary rounded-lg">
            <p className="text-sm text-muted-foreground">Key Metric 1</p>
            <p className="text-3xl font-bold font-headline">1.25M</p>
          </div>
          <div className="p-4 bg-secondary rounded-lg">
            <p className="text-sm text-muted-foreground">Key Metric 2</p>
            <p className="text-3xl font-bold font-headline text-primary">+5.2%</p>
          </div>
          <div className="p-4 bg-secondary rounded-lg">
            <p className="text-sm text-muted-foreground">Key Metric 3</p>
            <p className="text-3xl font-bold font-headline">98.1%</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-secondary rounded-lg">
            <h4 className="font-semibold mb-2">Trend Over Time</h4>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                  <XAxis dataKey="name" fontSize={12} tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                  <YAxis fontSize={12} tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                  <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="p-4 bg-secondary rounded-lg">
            <h4 className="font-semibold mb-2">Distribution</h4>
            <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60}>
                            {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Table */}
        <div>
            <h4 className="font-semibold mb-2">Detailed Data</h4>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Column 1</TableHead>
                        <TableHead>Column 2</TableHead>
                        <TableHead>Column 3</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {tableData.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell>{row.col1}</TableCell>
                            <TableCell>{row.col2}</TableCell>
                            <TableCell>{row.col3}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
      </CardContent>
    </Card>
  );
}
